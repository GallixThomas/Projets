using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class Media
    {
        int id;
        string titre;
        string description;
        DateTime date_Sortie;
        decimal note_Presse;
        decimal note_Utilisateurs;
        int nombre_Notes_Utilisateurs;
        string image_Caroussel;
        string image_Affiche;
        List<Acteur> acteurs;
        List<Genre> genres;
        StatutMedia statut;
        protected static SqlCommand command;
        protected static SqlDataReader reader;

        public int Id { get => id; set => id = value; }
        public string Titre { get => titre; set => titre = value; }
        public string Description { get => description; set => description = value; }
        public DateTime Date_Sortie { get => date_Sortie; set => date_Sortie = value; }
        public decimal Note_Presse { get => note_Presse; set => note_Presse = value; }
        public decimal Note_Utilisateurs { get => note_Utilisateurs; set => note_Utilisateurs = value; }
        public int Nombre_Notes_Utilisateurs { get => nombre_Notes_Utilisateurs; set => nombre_Notes_Utilisateurs = value; }
        public string Image_Caroussel { get => image_Caroussel; set => image_Caroussel = value; }
        public string Image_Affiche { get => image_Affiche; set => image_Affiche = value; }
        public List<Acteur> Acteurs { get => acteurs; set => acteurs = value; }
        public List<Genre> Genres { get => genres; set => genres = value; }
        public StatutMedia Statut { get => statut; set => statut = value; }

        public virtual bool Save()
        {
            string request = "INSERT INTO Media(Titre, Description, Date_Sortie, Note_Presse, Note_Utilisateurs, Nombre_Notes_Utilisateurs," +
               " Image_Caroussel, Image_Affiche, Id_Acteur1, Id_Acteur2, Id_Acteur3, Id_Acteur4)" +
                " OUTPUT INSERTED.ID values (@Titre, @Description, @Date_Sortie, @Note_Presse, @Note_Utilisateurs, @Nombre_Notes_Utilisateurs," +
               " @Image_Caroussel, @Image_Affiche)";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@Titre", Titre));
            command.Parameters.Add(new SqlParameter("@Description", Description));
            command.Parameters.Add(new SqlParameter("@Date_Sortie", Date_Sortie));
            command.Parameters.Add(new SqlParameter("@Note_Presse", Note_Presse));
            command.Parameters.Add(new SqlParameter("@Note_Utilisateurs", Note_Utilisateurs));
            command.Parameters.Add(new SqlParameter("@Date_Sortie", Date_Sortie));
            command.Parameters.Add(new SqlParameter("@Nombre_Notes_Utilisateurs", Nombre_Notes_Utilisateurs));
            command.Parameters.Add(new SqlParameter("@Image_Caroussel", Image_Caroussel));
            command.Parameters.Add(new SqlParameter("@Image_Affiche", Image_Affiche));
            Connection.Instance.Open();
            Id = (int)command.ExecuteScalar();
            command.Dispose();
            Connection.Instance.Close();
            if(Id>0)
            {
                foreach(Acteur a in Acteurs)
                { 
                    InterActeurMedia acteurMedia = new InterActeurMedia(a, this);
                    acteurMedia.Save();
                }
            }
            return Id > 0;
        }

        public bool Update(int id)
        {
            string request = "UPDATE Media set Titre=@Titre, Description=@Description, Date_Sortie=@Date_Sortie," +
                " Note_Presse=@Note_Presse, Note_Utilisateurs=@Note_Utilisateurs, Nombre_Notes_Utilisateurs=@Nombre_Notes_Utilisateurs," +
               " Image_Caroussel=@Image_Caroussel, Image_Affiche=@Image_Affiche WHERE Id=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@Titre", Titre));
            command.Parameters.Add(new SqlParameter("@Description", Description));
            command.Parameters.Add(new SqlParameter("@Date_Sortie", Date_Sortie));
            command.Parameters.Add(new SqlParameter("@Note_Presse", Note_Presse));
            command.Parameters.Add(new SqlParameter("@Note_Utilisateurs", Note_Utilisateurs));
            command.Parameters.Add(new SqlParameter("@Date_Sortie", Date_Sortie));
            command.Parameters.Add(new SqlParameter("@Nombre_Notes_Utilisateurs", Nombre_Notes_Utilisateurs));
            command.Parameters.Add(new SqlParameter("@Image_Caroussel", Image_Caroussel));
            command.Parameters.Add(new SqlParameter("@Image_Affiche", Image_Affiche));
            command.Parameters.Add(new SqlParameter("@id", id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow == 1;
        }

        public bool Delete()
        {
            string request = "UPDATE Media set Statut=@statut WHERE Id=@id";

            //string request = "DELETE from Media WHERE Id=@id " +
            //    "DELETE from InterActeurMedia WHERE @Id_Media=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@id", Id));
            command.Parameters.Add(new SqlParameter("@id", StatutMedia.deleted));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow == 1;
        }


        public enum StatutMedia
        {
            actif,
            deleted
        }
    }
}

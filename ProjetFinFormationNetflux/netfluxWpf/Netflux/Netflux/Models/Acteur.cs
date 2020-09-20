using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class Acteur
    {
        int id;
        string nom;
        string prenom;
        string image;
        List<Film> films;
        List<Serie> series;
        StatutActeur statut;

        static SqlCommand command;
        static SqlDataReader reader;


        public int Id { get => id; set => id = value; }
        public string Nom { get => nom; set => nom = value; }
        public string Prenom { get => prenom; set => prenom = value; }
        public string Image { get => image; set => image = value; }
        public List<Film> Films { get => films; set => films = value; }
        public List<Serie> Series { get => series; set => series = value; }
        public StatutActeur Statut { get => statut; set => statut = value; }

        public Acteur()
        {

        }

        public Acteur(string nom, string prenom, string image):this()
        {
            Nom = nom;
            Prenom = prenom;
            Image = image;
        }

        public bool Save()
        {
            string request = "INSERT INTO Acteur(Nom, Prenom, Image) OUTPUT INSERTED.ID values (@nom, @prenom, @image)";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nom", Nom));
            command.Parameters.Add(new SqlParameter("@prenom", Prenom));
            command.Parameters.Add(new SqlParameter("@image", Image));
            Connection.Instance.Open();
            Id = (int)command.ExecuteScalar();
            command.Dispose();
            Connection.Instance.Close();
            return Id>0;
        }

        public bool Update(int id)
        {
            string request = "UPDATE Acteur set Nom=@nom, Prenom=@prenom, Image=@image WHERE Id=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nom", Nom));
            command.Parameters.Add(new SqlParameter("@prenom", Prenom));
            command.Parameters.Add(new SqlParameter("@image", Image));
            command.Parameters.Add(new SqlParameter("@id", Id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow==1;
        }

        public bool Delete()
        {
            string request = "DELETE from Acteur WHERE Id=@id " +
                "DELETE from InterActeurMedia WHERE Id_Acteur=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@id", Id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow >= 1;
        }

        public static List<Acteur> GetActeurByNom(string nom=null)
        {
            List<Acteur> acteurs = new List<Acteur>();
            string request = "SELECT * FROM Acteur";
            if (nom !=null)
            {
                request += " where nom like @nom OR where prenom like @nom";
            }

            command = new SqlCommand(request, Connection.Instance);

            if(nom !=null)
            {
                command.Parameters.Add(new SqlParameter("@nom", "%" + nom + "%"));
            }

            Connection.Instance.Open();
            reader = command.ExecuteReader();
            while(reader.Read())
            {
                Acteur a = new Acteur()
                {
                    Id = reader.GetInt32(0),
                    Nom = reader.GetString(1),
                    Prenom = reader.GetString(2),
                    Image = reader.GetString(3)
                };
                acteurs.Add(a);
            }
            reader.Close();
            command.Dispose();
            Connection.Instance.Close();
            return acteurs;
        }

        public enum StatutActeur
        {
            actif,
            deleted
        }
    }
}

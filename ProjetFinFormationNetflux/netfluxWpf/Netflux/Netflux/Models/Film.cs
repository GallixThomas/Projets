using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class Film:Media
    {
        int id_media;
        int duree;

        public int Duree { get => duree; set => duree = value; }
        public int Id_media { get => id_media; set => id_media = value; }

        public override bool Save()
        {
            if(base.Save())
            {
                string request = "INSERT INTO Film (Duree, Id_Media) OUTPUT INSERTED.ID values (@duree, @id_Media)";
                command = new SqlCommand(request, Connection.Instance);
                command.Parameters.Add(new SqlParameter("@duree", Duree));
                command.Parameters.Add(new SqlParameter("@id_Media", Id_media));
                Connection.Instance.Open();
                Id = (int)command.ExecuteScalar();
                command.Dispose();
                Connection.Instance.Close();
                if (Id > 0)
                {
                    foreach (Acteur a in Acteurs)
                    {
                        InterActeurMedia acteurMedia = new InterActeurMedia(a, this);
                        acteurMedia.Save();
                    }
                }
                return Id > 0;
            }
            return false;
        }

        public bool Update()
        {
            if (Update(Id_media))
            {
                string request = "UPDATE Film set Duree=@duree WHERE Id_Media=@id_Media";
                command = new SqlCommand(request, Connection.Instance);
                command.Parameters.Add(new SqlParameter("@duree", Duree));
                command.Parameters.Add(new SqlParameter("@id_Media", Id_media));
                Connection.Instance.Open();
                int nbRow = command.ExecuteNonQuery();
                command.Dispose();
                Connection.Instance.Close();
                return nbRow == 1;
            }
            return false;
        }

        public static List<Film> GetFilms(string titre = null)
        {
            List<Film> films = new List<Film>();
            string request = "SELECT f.*, m.Duree FROM Film as f inner join Media as m on m.Id=f.Id_Media where Statut is not @statut";
            if (titre != null)
            {
                request += " where Titre like @titre";
            }

            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@statut", StatutMedia.deleted));
            if (titre != null)
            {
                command.Parameters.Add(new SqlParameter("@titre", "%" + titre + "%"));
            }

            Connection.Instance.Open();
            reader = command.ExecuteReader();
            while (reader.Read())
            {
                Film f = new Film()
                {
                    Id = reader.GetInt32(0),
                    Titre = reader.GetString(1),
                    Description = reader.GetString(2),
                    Date_Sortie = reader.GetDateTime(3),
                    Note_Presse = reader.GetDecimal(4),
                    Note_Utilisateurs = reader.GetDecimal(5),
                    Nombre_Notes_Utilisateurs = reader.GetInt32(6),
                    Image_Caroussel = reader.GetString(7),
                    Image_Affiche = reader.GetString(8),
                    Duree = reader.GetInt32(9)
                };

                // Ajouter liste de categories
                // Ajouter liste d'acteurs

                films.Add(f);
            }
            reader.Close();
            command.Dispose();
            Connection.Instance.Close();
            return films;
        }
    }
}

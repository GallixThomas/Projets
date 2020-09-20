using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class InterActeurMedia
    {
        int id;
        Media media;
        Acteur acteur;
        protected static SqlCommand command;
        protected static SqlDataReader reader;


        public int Id { get => id; set => id = value; }
        public Media Media { get => media; set => media = value; }
        public Acteur Acteur { get => acteur; set => acteur = value; }

        public InterActeurMedia(Acteur acteur, Media media)
        {
            Media = media;
            Acteur = acteur;
        }

        public bool Save()
        {
                string request = "INSERT INTO InterActeurMedia (Id_Acteur, Id_Media) OUTPUT INSERTED.ID values (@Id_Acteur, @Id_Media)";
                command = new SqlCommand(request, Connection.Instance);
                command.Parameters.Add(new SqlParameter("@Id_Acteur", Acteur.Id));
                command.Parameters.Add(new SqlParameter("@Id_Media", Media.Id));
                Connection.Instance.Open();
                Id = (int)command.ExecuteScalar();
                command.Dispose();
                Connection.Instance.Close();
                return Id > 0;
        }

        public bool Update()
        {
                string request = "UPDATE InterActeurMedia set Id_Acteur=@Id_Acteur WHERE Id_Media=@Id_Media";
                command = new SqlCommand(request, Connection.Instance);
                command.Parameters.Add(new SqlParameter("@Id_Acteur", Acteur.Id));
                command.Parameters.Add(new SqlParameter("@Id_Media", Media.Id));
                Connection.Instance.Open();
                int nbRow = command.ExecuteNonQuery();
                command.Dispose();
                Connection.Instance.Close();
                return nbRow == 1;
        }
    }
}

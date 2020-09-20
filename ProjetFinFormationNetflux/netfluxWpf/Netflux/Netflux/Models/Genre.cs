using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class Genre
    {
        private int id;
        private string nom;

        protected static SqlCommand command;
        protected static SqlDataReader reader;

        public int Id { get => id; set => id = value; }
        public string Nom { get => nom; set => nom = value; }

        public Genre()
        {

        }

        public Genre(string nom): this()
        {
            Nom = nom;
        }

        public bool Save()
        {
            string request = "INSERT INTO Genre(nom) " +
                "OUTPUT INSERTED.ID values (@nom)";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nom", Nom));
            Connection.Instance.Open();
            Id = (int)command.ExecuteScalar();
            command.Dispose();
            Connection.Instance.Close();
            return Id > 0;
        }

        public bool Update(int id)
        {
            string request = "UPDATE Genre set nom=@nom where id=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nom", Nom));
            command.Parameters.Add(new SqlParameter("@id", id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow == 1;
        }

        public bool Delete(int id)
        {
            string request = "DELETE FROM Genre where id=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@id", Id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow == 1;
        }

        public static List<Genre> GetGenres()
        {
            List<Genre> liste = new List<Genre>();
            string request = "SELECT g.id, g.nom FROM Genre as g";
            command = new SqlCommand(request, Connection.Instance);
            Connection.Instance.Open();
            reader = command.ExecuteReader();
            while(reader.Read())
            {
                Genre g = new Genre()
                {
                    Id = reader.GetInt32(0),
                    Nom = reader.GetString(1)
                };
                liste.Add(g);
            }
            reader.Close();
            command.Dispose();
            Connection.Instance.Close();
            return liste;
        }
    }
}

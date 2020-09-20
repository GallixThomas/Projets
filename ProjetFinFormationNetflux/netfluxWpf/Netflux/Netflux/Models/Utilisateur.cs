using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class Utilisateur
    {
        private int id;
        private string nom;
        private string prenom;
        private string email;
        private string password;
        private string telephone;
        private DateTime dateAnniversaire;
        private string adresse;
        private string codePostal;
        private string ville;
        private StatutUtilisateur statut;

        protected static SqlCommand command;
        protected static SqlDataReader reader;

        public int Id { get => id; set => id = value; }
        public string Nom { get => nom; set => nom = value; }
        public string Prenom { get => prenom; set => prenom = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
        public string Telephone { get => telephone; set => telephone = value; }
        public DateTime DateAnniversaire { get => dateAnniversaire; set => dateAnniversaire = value; }
        public string Adresse { get => adresse; set => adresse = value; }
        public string CodePostal { get => codePostal; set => codePostal = value; }
        public string Ville { get => ville; set => ville = value; }
        internal StatutUtilisateur Statut { get => statut; set => statut = value; }

        public Utilisateur()
        {
            Statut = StatutUtilisateur.Actif;
        }

        public Utilisateur(string nom, string prenom, string email, string password, string telephone, DateTime dateAnniversaire, string adresse, string codePostal, string ville) : this()
        {
            Nom = nom;
            Prenom = prenom;
            Email = email;
            Password = password;
            Telephone = telephone;
            DateAnniversaire = dateAnniversaire;
            Adresse = adresse;
            CodePostal = codePostal;
            Ville = ville;
        }

        public bool Save()
        {
            string request = "INSERT INTO Utilisateur(nom, prenom, email, password, telephone, date_anniversaire, adresse, code_postal, ville, statut) " +
                "OUTPUT INSERTED.ID values (@nom, @prenom, @email, @password, @telephone, @date_anniversaire, @adresse, @code_postal, @ville, @statut)";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nom", Nom));
            command.Parameters.Add(new SqlParameter("@prenom", Prenom));
            command.Parameters.Add(new SqlParameter("@email", Email));
            command.Parameters.Add(new SqlParameter("@password", Password));
            command.Parameters.Add(new SqlParameter("@telephone", Telephone));
            command.Parameters.Add(new SqlParameter("@date_anniversaire", DateAnniversaire));
            command.Parameters.Add(new SqlParameter("@adresse", Adresse));
            command.Parameters.Add(new SqlParameter("@code_postal", CodePostal));
            command.Parameters.Add(new SqlParameter("@ville", Ville));
            command.Parameters.Add(new SqlParameter("@statut", Statut));
            Connection.Instance.Open();
            Id = (int)command.ExecuteScalar();
            command.Dispose();
            Connection.Instance.Close();
            return Id > 0;
        }

        public bool Update(int id)
        {
            string request = "UPDATE Utilisateur set nom=@nom, prenom=@prenom, email=@email, password=@password, telephone=@telephone, date_anniversaire=@date_anniversaire, adresse=@adresse, code_postal=@code_postal, ville=@ville, statut=@statut " +
                "where id=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nom", Nom));
            command.Parameters.Add(new SqlParameter("@prenom", Prenom));
            command.Parameters.Add(new SqlParameter("@email", Email));
            command.Parameters.Add(new SqlParameter("@password", Password));
            command.Parameters.Add(new SqlParameter("@telephone", Telephone));
            command.Parameters.Add(new SqlParameter("@date_anniversaire", DateAnniversaire));
            command.Parameters.Add(new SqlParameter("@adresse", Adresse));
            command.Parameters.Add(new SqlParameter("@code_postal", CodePostal));
            command.Parameters.Add(new SqlParameter("@ville", Ville));
            command.Parameters.Add(new SqlParameter("@statut", Statut));
            command.Parameters.Add(new SqlParameter("@id", id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow == 1;
        }

        public static List<Utilisateur> GetUtilisateurs()
        {
            List<Utilisateur> liste = new List<Utilisateur>();
            string request = "SELECT u.id, u.nom, u.prenom, u.email, u.password, u.telephone, u.date_anniversaire, u.adresse, u.code_postal, u.ville, u.statut " +
                "FROM Utilisateur as u";
            command = new SqlCommand(request, Connection.Instance);
            Connection.Instance.Open();
            reader = command.ExecuteReader();
            while(reader.Read())
            {
                Utilisateur u = new Utilisateur()
                {
                    Id = reader.GetInt32(0),
                    Nom = reader.GetString(1),
                    Prenom = reader.GetString(2),
                    Email = reader.GetString(3),
                    Password = reader.GetString(4),
                    Telephone = reader.GetString(5),
                    DateAnniversaire = reader.GetDateTime(6),
                    Adresse = reader.GetString(7),
                    CodePostal = reader.GetString(8),
                    Ville = reader.GetString(9),
                    Statut = (StatutUtilisateur)reader.GetInt32(10)
                };
                liste.Add(u);
            }
            reader.Close();
            command.Dispose();
            Connection.Instance.Close();
            return liste;
        }
    }

    enum StatutUtilisateur
    {
        //par défaut actif vaudra 0
        Actif,
        //et banni vaudra 1
        Banni,
    }
}

using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class InterUtilisateurMedia
    {
        private int id;
        private Utilisateur utilisateur;
        private Media media;
        private int nombreVuesUtilisateur;

        protected static SqlCommand command;
        protected static SqlDataReader reader;

        public int Id { get => id; set => id = value; }
        public int NombreVuesUtilisateur { get => nombreVuesUtilisateur; set => nombreVuesUtilisateur = value; }
        internal Utilisateur Utilisateur { get => utilisateur; set => utilisateur = value; }
        internal Media Media { get => media; set => media = value; }

        public InterUtilisateurMedia()
        {

        }

        public InterUtilisateurMedia(Utilisateur utilisateur, Media media, int nombreVuesUtilisateur) : this()
        {
            Utilisateur = utilisateur;
            Media = media;
            NombreVuesUtilisateur = nombreVuesUtilisateur;
        }

        public bool Create()
        {
            string request = "INSERT INTO InterUtilisateurMedia (id_utilisateur, id_media, nombreVuesUtilisateur) " +
                "OUTPUT INSERTED.ID values (@id_utilisateur, @id_media, @nombreVuesUtilisateur)";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@id_utilisateur", Utilisateur.Id));
            command.Parameters.Add(new SqlParameter("@id_media", Media.Id));
            Connection.Instance.Open();
            Id = (int)command.ExecuteScalar();
            command.Dispose();
            Connection.Instance.Close();
            return Id > 0;
        }

        public bool UpdateNombreVuesUtilisateur(int id)
        {
            string request = "UPDATE InterUtilisateurMedia set nombreVuesUtilisateur=@nombreVuesUtilisateur " +
                "where id=@id";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@nombreVuesUtilisateur", NombreVuesUtilisateur));
            command.Parameters.Add(new SqlParameter("id", id));
            Connection.Instance.Open();
            int nbRow = command.ExecuteNonQuery();
            command.Dispose();
            Connection.Instance.Close();
            return nbRow == 1;
        }
    }
}

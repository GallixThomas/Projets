using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class InterGenreMedia
    {
        private int id;
        private Genre genre;
        private Media media;

        protected static SqlCommand command;
        protected static SqlDataReader reader;

        public int Id { get => id; set => id = value; }
        internal Genre Genre { get => genre; set => genre = value; }
        internal Media Media { get => media; set => media = value; }

        public InterGenreMedia()
        {

        }

        public InterGenreMedia(Genre genre, Media media) : this()
        {
            Genre = genre;
            Media = media;
        }

        public bool Save()
        {
            string request = "INSERT INTO InterGenreMedia (id_genre, id_media) " +
                "OUTPUT INSERTED.ID values (@id_genre, @id_media)";
            command = new SqlCommand(request, Connection.Instance);
            command.Parameters.Add(new SqlParameter("@id_genre", Genre.Id));
            command.Parameters.Add(new SqlParameter("@id_media", Media.Id));
            Connection.Instance.Open();
            Id = (int)command.ExecuteScalar();
            command.Dispose();
            Connection.Instance.Close();
            return Id > 0;
        }
    }
}

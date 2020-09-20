using Netflux.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Models
{
    class Serie:Media
    {
        int id_media;
        int nombre_Episode;
        int nombre_Saison;

        public int Nombre_Episode { get => nombre_Episode; set => nombre_Episode = value; }
        public int Nombre_Saison { get => nombre_Saison; set => nombre_Saison = value; }
        public int Id_media { get => id_media; set => id_media = value; }

        public override bool Save()
        {
            if (base.Save())
            {
                string request = "INSERT INTO Serie (Nombre_Episode, Nombre_Saison, Id_Media) OUTPUT INSERTED.ID values (@nombre_Episode, @nombre_Saison, @id_Media)";
                command = new SqlCommand(request, Connection.Instance);
                command.Parameters.Add(new SqlParameter("@nombre_Episode", Nombre_Episode));
                command.Parameters.Add(new SqlParameter("@nombre_Saison", Nombre_Saison));
                command.Parameters.Add(new SqlParameter("@id_Media", Id_media));
                Connection.Instance.Open();
                Id = (int)command.ExecuteScalar();
                command.Dispose();
                Connection.Instance.Close();
                return Id > 0;
            }
            return false;
        }

        public bool Update()
        {
            if (Update(Id_media))
            {
                string request = "UPDATE Serie set Nombre_Episode=@Nombre_Episode, Nombre_Saison=@Nombre_Saison WHERE Id_Media=@id_Media";
                command = new SqlCommand(request, Connection.Instance);
                command.Parameters.Add(new SqlParameter("@nombre_Episode", Nombre_Episode));
                command.Parameters.Add(new SqlParameter("@nombre_Saison", Nombre_Saison));
                command.Parameters.Add(new SqlParameter("@id_Media", Id_media));
                Connection.Instance.Open();
                int nbRow = command.ExecuteNonQuery();
                command.Dispose();
                Connection.Instance.Close();
                return nbRow == 1;
            }
            return false;
        }
    }
}

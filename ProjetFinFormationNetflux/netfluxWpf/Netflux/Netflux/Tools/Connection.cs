using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflux.Tools
{
    class Connection
    {
        private static SqlConnection _instance;
        public static SqlConnection Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Administrateur\Documents\Elena\Projet_Netflux_All\TablesNetflux\Tables_Netflux.mdf;Integrated Security=True;Connect Timeout=30");
                    //CreateTable();
                }
                return _instance;
            }
        }

        private Connection()
        {

        }
    }
}

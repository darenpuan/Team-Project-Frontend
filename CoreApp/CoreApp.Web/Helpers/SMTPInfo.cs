using System;

namespace CoreApp.Web.Models
{
    public class SMTPInfo
    {
        public String SMTPServer { get; set; }
        public int SMTPPort { get; set; }
        public string FromEmail { get; set; }
        public string password { get; set; }
    }
}

using CoreApp.Web.Models;

namespace CoreApp.Web.Helpers
{
    public class AppSettings
    {
        public string Secret { get; set; }

        public SMTPInfo smtp { get; set; }
    }
}

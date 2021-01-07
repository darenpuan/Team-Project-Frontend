using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Notification
    {
        [Key]
        public Guid NotificationId { get; set; }
        [Required]
        public LoadingBay LoadingBay { get; set; }
        [Required]
        public string DisplayValue { get; set; }
        [Required]
        public Container Container { get; set; }
        [Required]
        public DateTime DateTimeSent { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}

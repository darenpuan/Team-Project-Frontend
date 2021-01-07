using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Notifyee
    {
        [Key]
        public Guid NotifyeeId { get; set; }
        [Required]
        public Compartment Compartment { get; set; }
        [Required]
        public Role Role { get; set; }
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

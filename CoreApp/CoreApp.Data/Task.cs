using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Task
    {
        [Key]
        public Guid TaskId { get; set; }
        [Required]
        public virtual Booking Booking { get; set; }
        public DateTime CompleteBy { get; set; }
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

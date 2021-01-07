using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class MovementLog
    {
        [Key]
        public Guid MovementLogId { get; set; }
        [Required]
        public Cargo Cargo { get; set; }
        [Required]
        public DateTime TimeStamp { get; set; }
        [Required]
        public string From { get; set; }
        [Required]
        public string To { get; set; }
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

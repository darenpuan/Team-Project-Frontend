using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class MarkingCargo
    {
        [Key]
        public Guid MarkingCargoId { get; set; }
        [Required]
        public Marking Marking { get; set; }
        [Required]
        public Cargo Cargo { get; set; }
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
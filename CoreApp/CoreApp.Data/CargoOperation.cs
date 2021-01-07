using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class CargoOperation
    {
        [Key]
        public Guid CargoOperationId { get; set; }
        [Required]
        public Cargo Cargo { get; set; }
        [Required]
        public Operation Operation { get; set; }
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

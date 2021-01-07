using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class CargoDetail
    {
        [ForeignKey("Cargo")]
        [Key]
        public Guid CargoDetailId { get; set; }
        [Required]
        public virtual Cargo Cargo { get; set; }
        [Required]
        public string CargoName { get; set; }
        [Required]
        public string MarksAndNumbers { get; set; }
        [Required]
        public string Remarks { get; set; }
        [Required]
        public bool IsHazard { get; set; }
        [Required]
        public string StorageLocation { get; set; }
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
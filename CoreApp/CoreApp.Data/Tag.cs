using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Tag
    {   
        [Key]
        public string TagId { get; set; }
        [Required]
        public bool IsForklift { get; set; }
        [Required]
        public bool IsAssigned { get; set; }
        [ForeignKey("Forklift")]
        public Nullable<Guid> ForkliftForeignId { get; set; }
        public virtual Forklift Forklift { get; set; }
        [ForeignKey("Cargo")]
        public Nullable<Guid> CargoForeignId { get; set; }
        public virtual Cargo Cargo { get; set; }
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
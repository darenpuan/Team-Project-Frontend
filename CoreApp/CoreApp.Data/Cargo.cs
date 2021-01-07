using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Cargo
    {
        [Key]
        public Guid CargoId { get; set; }
        [Required]
        public virtual CargoDetail CargoDetail { get; set; }
        [Required]
        public virtual Measurement Measurement { get; set; }
        [Required]
        public PackagingType PackagingType { get; set; }
        [Required]
        public Location Location { get; set; }
        public virtual Tag Tag { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
        public ICollection<CargoCategory> CargoCategories { get; set; }
        public ICollection<CargoOperation> CargoOperations { get; set; }
        public ICollection<ItemCargo> ItemCargoes { get; set; }
        public ICollection<MarkingCargo> MarkingCargoes { get; set; }
        public ICollection<MovementLog> MovementLogs { get; set; }
    }
}

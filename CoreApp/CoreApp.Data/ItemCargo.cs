using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data {
    public class ItemCargo
    {
        [Key]
        public Guid ItemCargoId { get; set; }
        [Required]
        public Cargo Cargo { get; set; }
        [Required]
        public Item Item { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public double Weight { get; set; }
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

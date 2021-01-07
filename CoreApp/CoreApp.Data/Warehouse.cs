using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Warehouse
    {
        [Key]
        public Guid WarehouseId { get; set; }
        public string Location { get; set; }
        public string DisplayValue { get; set; }
        public float Width { get; set; }
        public float Length { get; set; }
        [Required]
        public bool IsAvailable { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<Module> Modules { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data {
    public class Item
    {
        [Key]
        public Guid ItemId { get; set; }
        [Required]
        public DateTime Expiry { get; set; }
        [Required]
        public Unit Unit { get; set; }
        [Required]
        public string Batch { get; set; }
        [Required]
        public bool IsHazard { get; set; }
        [Required]
        public Origin Origin { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<ItemCargo> ItemCargoes { get; set; }
        public ICollection<OperationItem> OperationItems { get; set; }

    }
}

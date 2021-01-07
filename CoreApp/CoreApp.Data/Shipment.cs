using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Shipment
    {
        [ForeignKey("Operation")]
        [Key]
        public Guid ShipmentId { get; set; }
        [Required]
        public ShipmentType ShipmentType { get; set; }
        [Required]
        public virtual Operation Operation { get; set; }
        [Required]
        public string DisplayValue { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<Delivery> Deliveries { get; set; }
        public ICollection<ShipmentContainer> ShipmentContainers { get; set; }
    }
}

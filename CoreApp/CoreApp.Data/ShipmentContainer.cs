using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class ShipmentContainer
    {
        [Key]
        public Guid ShipmentContainerId { get; set; }
        [Required]
        public Shipment Shipment { get; set; }
        [Required]
        public Container Container { get; set; }
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

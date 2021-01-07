using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Delivery
    {
        [Key]
        public Guid DeliveryId { get; set; }
        [Required]
        public DateTime EstimatedReceiving { get; set; }
        [Required]
        public DateTime EstimatedReleasing { get; set; }
        [Required]
        public Shipment Shipment { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }      
        public string UpdatedBy { get; set; }
        public virtual DeliveryNote DeliveryNote { get; set; }
        public virtual DeliveryProof DeliveryProof { get; set; }
    }
}
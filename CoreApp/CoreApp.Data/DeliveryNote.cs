using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data 
{
    public class DeliveryNote
    {
        [ForeignKey("Delivery")]
        [Key]
        public Guid DeliveryNoteId { get; set; }
        [Required]
        public string Destination { get; set; } 
        [Required]
        public string Description { get; set; } 
        [Required]
        public string BLNo { get; set; } 
        [Required]
        public string POL { get; set; }
        [Required]
        public string Carrier { get; set; } 
        [Required]
        public string ArrivalETA { get; set; } 
        [Required]
        public string Measurement { get; set; } 
        [Required]
        public double Weight { get; set; } 
        [Required]
        public int Quantity { get; set; } 
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public virtual Delivery Delivery { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}

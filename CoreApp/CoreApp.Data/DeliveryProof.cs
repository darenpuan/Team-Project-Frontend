using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data 
{
    public class DeliveryProof
    {
        [ForeignKey("Delivery")]
        [Key]
        public Guid DeliveryProofId { get; set; }
        [Required]
        public virtual Delivery Delivery { get; set; }
        [Required]
        public string DeliverySignature { get; set; }
        [Required]
        public string DeliveryPicture { get; set; }
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
using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Charge
    {
        [Key]
        public Guid ChargeId { get; set; }
        [Required]
        public ChargeType ChargeType { get; set; }
        [Required]
        public Booking Booking { get; set; }
        [Required]
        public double Cost { get; set; }
        [Required]
        public ChargeStatus ChargeStatus { get; set; }
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

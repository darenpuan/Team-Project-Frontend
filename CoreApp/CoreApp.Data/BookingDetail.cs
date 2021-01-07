using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class BookingDetail
    {
        [ForeignKey("Booking")]
        [Key]
        public Guid BookingDetailId { get; set; }
        [Required]
        public virtual Booking Booking { get; set; }
        [Required]
        public DateTime BookingDate { get; set; }
        [Required]
        public DateTime BookingTime { get; set; }
        [Required]
        public string BookingType { get; set; }
        [Required]
        public string BillOfLading { get; set; }
        [Required]
        public string ExportDeclarationNumber { get; set; }
        [Required]
        public string VoyageDetails { get; set; }
        [Required]
        [StringLength(56)]
        public string CountryOrigin { get; set; }
        [Required]
        [StringLength(56)]
        public string CountryFinalDestination { get; set; }
        [Required]
        public string PortLoading { get; set; }
        [Required]
        public string PortDischarge { get; set; }
        [Required]
        public DateTime DateDeparture { get; set; }
        [Required]
        public string FinalDestination { get; set; }
        [Required]
        public string BookingStatus { get; set; }
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

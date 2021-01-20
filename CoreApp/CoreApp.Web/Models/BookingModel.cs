using CoreApp.Data;
using System;

using System.ComponentModel.DataAnnotations;


namespace CoreApp.Web.Models
{
    public class BookingModel
    {
        [Key]
        public Guid BookingId { get; set; }
        public DateTime CompletionDate { get; set; }
        [Required]
        public Consignee Consignee { get; set; }
        [Required]
        public Guid ClientId { get; set; }
        [Required]
        public Shipper Shipper { get; set; }
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

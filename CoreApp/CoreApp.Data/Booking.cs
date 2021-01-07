using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data 
{
   public class Booking
   {
        [Key]
        public Guid BookingId {get; set;}
        [Required]
        public DateTime CompletionDate {get; set;}
        [Required]
        public Consignee Consignee {get; set;}
        [Required]
        public Client Client {get; set;}
        [Required]
        public Shipper Shipper { get; set; }
        [Required]
        public bool IsActive {get; set;}
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public virtual BookingDetail BookingDetail { get; set; }
        public ICollection<Charge> Charges { get; set; }
        public ICollection<WarehouseException> WarehouseExceptions { get; set; }
        public ICollection<Task> Tasks { get; set; }
    } 
}

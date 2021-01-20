using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Consignee
    {
        [Key]
        public Guid ConsigneeId { get; set; }
        [Required]
        public string Address1 { get; set; }
        [Required]
        public string ContactNumber { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
       
        public string Address2 { get; set; }
        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }
        public ICollection<Booking> Bookings { get; set; }
    }
}
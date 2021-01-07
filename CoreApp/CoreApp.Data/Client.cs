using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data 
{
   public class Client 
   {
       [ForeignKey("User")]
       [Key]
       public Guid ClientId {get; set;}
       [Required]
       public virtual User User {get; set;}
       [Required]
       public string CompanyName {get; set;}
       [Required]
       public string CompanyAddress {get; set;}
       [Required]
       public bool IsActive { get; set; }
       [Required]
       public DateTime CreatedDate { get; set; }
       [Required]
       public string CreatedBy { get; set; }
       public DateTime UpdatedDate { get; set; }      
       public string UpdatedBy { get; set; }
       public ICollection<Booking> Bookings { get; set; }
    } 
}

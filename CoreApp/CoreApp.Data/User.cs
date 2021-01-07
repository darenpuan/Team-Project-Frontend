using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class User
    {
        [Key]
        public Guid UserId { get; set; }
        [Required]
        public Role Role { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Salutation { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string ContactNumber { get; set; }
        public string OfficeNumber { get; set; }
        [Required]
        public string Email { get; set; }
        public string Token { get; set; }
        [Required]
        public bool IsFirstLogin { get; set; }
        [Required]
        public bool IsApproved { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }

        public virtual BillingAddress BillingAddress { get; set; }
        public virtual Client Client { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Transporter Transporter { get; set; }
        public ICollection<Operation> Operations { get; set; }
    }
}

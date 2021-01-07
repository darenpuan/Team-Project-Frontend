using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class BillingAddress
    {
        [ForeignKey("User")]
        [Key]
        public Guid BillingId { get; set; }
        [Required]
        public string BillingFName { get; set; }
        [Required]
        public string BillingLName { get; set; }
        [Required]
        public string BillingCompanyName { get; set; }
        [Required]
        public string BillingCountry { get; set; }
        [Required]
        public string BillingAddressStreet { get; set; }
        [Required]
        public string BillingAddressApartment { get; set; }
        [Required]
        public string BillingAddressTown { get; set; }
        [Required]
        public string BillingAddressPostalcode { get; set; }
        [Required]
        public int BillingAddressPhone { get; set; }
        [Required]
        public string BillingAddressEmail { get; set; }
        [Required]
        public string BillingNickname { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public virtual User User { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}

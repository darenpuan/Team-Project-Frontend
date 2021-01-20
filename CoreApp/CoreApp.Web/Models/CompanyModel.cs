using System;
using System.ComponentModel.DataAnnotations;


namespace CoreApp.Web.Models
{
    public class CompanyModel
    {
        [Key]
        public Guid BillingId { get; set; }
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
        public string BillingNickname { get; set; }
      

    }
}

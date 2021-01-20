using System;
using System.ComponentModel.DataAnnotations;


namespace CoreApp.Web.Models
{
    public class NewPublicHoliday
    {
        [Required]
        [Key]
        public Guid PublicHolidayId { get; set; }
        [Required]
        public DateTime PublicHolidayDate { get; set; }
        [Required]
        ///////////////  NEWLY ADDED - BY BERNIE/////////////
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        ////////////////////////////////////////////////////////
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

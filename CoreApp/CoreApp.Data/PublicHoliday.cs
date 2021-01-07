using System;
using System.ComponentModel.DataAnnotations;


namespace CoreApp.Data
{
    public class PublicHoliday
    {
        [Required]
        public Guid PublicHolidayId { get; set; }
        [Required]
        public DateTime PublicHolidayDate { get; set; }
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

using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class WarehouseException
    {
        [Key]
        public Guid WarehouseExceptionId { get; set; }
        [Required]
        public ExceptionType ExceptionType { get; set; }
        public Operation Operation { get; set; }
        public Booking Booking { get; set; }
        public string Remarks { get; set; }
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

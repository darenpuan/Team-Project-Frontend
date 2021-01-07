using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Record
    {
        [Key]
        public Guid RecordId { get; set; }
        [Required]
        public Device Device { get; set; }
        [Required]
        public float Temperature { get; set; }
        [Required]
        public DateTime Timestamp { get; set; }
        [Required]
        public double Latitude { get; set; }
        [Required]
        public double Longitude { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public virtual Alert Alert { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Device
    {
        [ForeignKey("Compartment")]
        [Key]
        public Guid DeviceId { get; set; }
        [Required]
        public DateTime LastBatteryChanged { get; set; }
        [Required]
        public int Frequency { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public ushort DataSamplingSize { get; set; }
        [Required]
        public string MacAddress { get; set; }
        [Required]
        public virtual Compartment Compartment { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<Record> Records { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Compartment
    {
        [Key]
        public Guid CompartmentId { get; set; }
        [Required]
        public float MinTemperature { get; set; }
        [Required]
        public float MaxTemperature { get; set; }
        [Required]
        public float Sensitivity { get; set; }
        [Required]
        public string CompartmentAlias { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public bool IsStatic { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public virtual Device Device { get; set;}
        public ICollection<Notifyee> Notifyees { get; set; }
    }
}

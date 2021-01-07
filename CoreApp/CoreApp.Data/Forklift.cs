using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data {
    public class Forklift
    {
	    [Key]
        public Guid ForkliftId { get; set; }
	    [Required]
        public string ForkliftName { get; set; }
        public virtual Tag Tag { get; set; }
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

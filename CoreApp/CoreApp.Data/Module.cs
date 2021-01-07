using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Module
    {
        [Key]
        public Guid ModuleId { get; set; }
        [Required]
        public Warehouse Warehouse { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public virtual Layout Layout { get; set; }
    }
}

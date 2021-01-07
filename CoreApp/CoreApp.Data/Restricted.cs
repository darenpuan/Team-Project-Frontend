using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Restricted
    {
        [ForeignKey("LayoutObject")]
        [Key]
        public Guid RestrictedId { get; set; }
        [Required]
        public virtual LayoutObject LayoutObject { get; set; }
        public string DisplayValue { get; set; }
        public string RestrictLocation { get; set; }
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

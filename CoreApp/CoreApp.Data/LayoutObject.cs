using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class LayoutObject
    {
        [ForeignKey("Location")]
        [Key]
        public Guid LayoutObjId { get; set; }
        [Required]
        public Layout Layout { get; set; }
        [Required]
        public virtual Location Location { get; set; }
        public virtual Lot Lot { get; set; }
        public Rack Rack { get; set; }
        public virtual Restricted Restricted { get; set; }
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

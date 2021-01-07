using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Layer
    {
        [Key]
        public Guid LayerId { get; set; }
        [Required]
        public Rack Rack { get; set; }
        [Required]
        public int LayerLevelNo { get; set; }
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

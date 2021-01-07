using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Rack
    {
        [Key]
        public Guid RackId { get; set; }
        public bool LayerAvailability { get; set; }
        public string RackLocation { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<LayoutObject> LayoutObjects { get; set; }
        public ICollection<Layer> Layers { get; set; }
    }
}

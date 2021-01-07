using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Location
    {
        [Key]
        public Guid LocationId { get; set; }
        public string LocationValue { get; set; }
        [Required]
        public string LocationStatus { get; set; }
        [Required]
        public virtual LayoutObject LayoutObj { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<Cargo> Cargoes { get; set; }
        public ICollection<Transfer> Transfers { get; set; }
    }
}

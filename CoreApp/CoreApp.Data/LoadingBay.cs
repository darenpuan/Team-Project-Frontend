using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class LoadingBay
    {
        [Key]
        public int LoadingBayId { get; set; }
        [Required]
        public string DisplayValue { get; set; }
        [Required]
        public string ROI { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<LoadingBayOccupancy> LoadingBayOccupancies { get; set; }
    }
}

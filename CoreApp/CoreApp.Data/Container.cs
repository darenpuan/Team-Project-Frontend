using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Container
    {
        [Key]
        public Guid ContainerId { get; set; }
        [Required]
        public string ContainerCode { get; set; }
        [Required]
        public string DisplayValue { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public string BicCode { get; set; }
        [Required]
        public int CheckSum { get; set; }
        [Required]
        public bool CheckSumValid { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }
        [Required]
        public LoadingBay LoadingBay { get; set; }
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<ShipmentContainer> ShipmentContainers { get; set; }
    }
}

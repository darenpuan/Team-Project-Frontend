using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class TransferOrder
    {
        [ForeignKey("Transfer")]
        [Key]
        public Guid TransferOrderId { get; set; }
        [Required]
        public Warehouse Destination { get; set; }
        [Required]
        public Warehouse Origin { get; set; }
        public string Remarks { get; set; }
        [Required]
        public virtual Transfer Transfer { get; set; }
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
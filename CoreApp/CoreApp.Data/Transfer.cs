using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Transfer
    {
        [Key]
        public Guid TransferId { get; set; }
        [Required]
        public string TransferStatus { get; set; }
        public string TransferAdminRemarks { get; set; }
        [Required]
        public Location Location { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public virtual TransferOrder TransferOrder { get; set; }
    }
}
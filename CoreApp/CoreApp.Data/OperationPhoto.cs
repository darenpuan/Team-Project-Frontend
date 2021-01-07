using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class OperationPhoto
    {
        [Key]
        public Guid OperationPhotoId { get; set; }
        [Required]
        public string PhotoPath { get; set; }
        [Required]
        public Operation Operation { get; set; }
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

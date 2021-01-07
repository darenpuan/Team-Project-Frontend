using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Attachment
    {
        [Key]
        public Guid AttachmentId { get; set; }
        [Required]
        public string Path { get; set; }
        [Required]
        public string FileName { get; set; }
        [Required]
        public Cargo Cargo { get; set; }
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

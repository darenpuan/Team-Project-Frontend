using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Layout
    {
        [ForeignKey("Module")]
        [Key]
        public Guid LayoutId { get; set; }
        public byte[] FileData { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public virtual Module Module { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<LayoutObject> LayoutObjects { get; set; }

    }
}

using System;
using System.ComponentModel.DataAnnotations;

namespace CoreApp.Data
{
    public class Rule
    {
        [Key]
        public int RuleId { get; set; }
        [Required]
        public bool RuleEditable { get; set; }
        [Required]
        public int RuleHourBeforeEdit { get; set; }
        [Required]
        public int RuleHourBeforeCancel { get; set; }
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

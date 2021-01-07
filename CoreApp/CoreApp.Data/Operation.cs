using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApp.Data
{
    public class Operation
    {
        [ForeignKey("Task")]
        [Key]
        public Guid OperationId { get; set; }
        [Required]
        public virtual Task Task { get; set; }
        [Required]
        public OperationType OperationType { get; set; }
        [Required]
        public OperationStatus OperationStatus { get; set; }
        public virtual Shipment Shipment { get; set; }
        public User User { get; set; }
        [Required]
        public DateTime CompletionDate { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public ICollection<CargoOperation> CargoOperations { get; set; }
        public ICollection<WarehouseException> WarehouseExceptions { get; set; }
        public ICollection<Incident> Incidents { get; set; }
        public ICollection<OperationItem> OperationItems { get; set; }
        public ICollection<OperationPhoto> OperationPhotos { get; set; }
    }
}

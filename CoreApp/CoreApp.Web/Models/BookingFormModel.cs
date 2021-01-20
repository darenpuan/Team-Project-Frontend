using CoreApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class BookingFormModel
    {
        public Guid BookingId { get; set; }
        public DateTime BookingDate { get; set; }
        public TimeSpan BookingTime { get; set; }
        public string BillOfLading { get; set; }
        public string ExportDeclarationNumber { get; set; }
        public Guid WarehouseId { get; set; }
        public Guid ClientId { get; set; }
        public string ReceivingWarehouse { get; set; }
        public string ShipperName { get; set; }
        public string ShipperAddress1 { get; set; }
        public string ShipperAddress2 { get; set; }
        public string ShipperContactNo { get; set; }
        public string ShipperEmail { get; set; }
        public string ConsigneeName { get; set; }
        public string ConsigneeAddress1 { get; set; }
        public string ConsigneeAddress2 { get; set; }
        public string ConsigneeContactNo { get; set; }
        public string ConsigneeEmail { get; set; }
        public string BookingType { get; set; }
        public string VoyageDetails { get; set; }

        public string CountryOrigin { get; set; }
        public string CountryFinalDestination { get; set; }

        public string PortOfLoading { get; set; }
        public string PortOfDischarge { get; set; }
        public DateTime DateDeparture { get; set; }
        public string FinalDestination { get; set; }

        public Guid CargoId { get; set; }
        public string CargoName { get; set; }
        public string MarkAndNumber { get; set; }

        public double Weight { get; set; }

        public int PackageTypeId { get; set; }
        public string PackageType { get; set; }
        public string Length { get; set; }
        public string Width { get; set; }

        public string Height { get; set; }

        public bool IsHazard { get; set; }

        public bool RequiredTransportation { get; set; }

        public Guid TransporterId { get; set; }
        public string TransporterCompany { get; set; }

        public string Remarks { get; set; }

        public List<CargoModel> cargoItems {get;set;}



         
    }
}

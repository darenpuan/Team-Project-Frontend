using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Web.Models
{
    public class CargoInfoModel
    {
        public Boolean isImport { get; set; }
        public string CountryOrigin { get; set; }
        public string CountryFinalDestination { get; set; }
        public string PortOfLoading { get; set; }
        public string PortOfDischarge { get; set; }
        public DateTime DateDeparture { get; set; }
        public string FinalDestination { get; set; }
        public string CargoName { get; set; }
        public string MarkAndNumber { get; set; }
        public double Weight { get; set; }
        public int PackageType { get; set; }
        public string MeasureLength { get; set; }
        public string MeasureWidth { get; set; }
        public string MeasureHeight { get; set; }
        public bool Hazardous { get; set; }
        public bool RequiredTransportation { get; set; }
        public Guid Transporter { get; set; }
        public string Remarks { get; set; }

        public List<CargoModel> CargoItems { get; set; }


    }
}

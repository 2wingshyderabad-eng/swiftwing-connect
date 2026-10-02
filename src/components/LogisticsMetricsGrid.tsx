import logo from "@/assets/xpreswings-logo.svg";

type Metric = {
  value: string;
  suffix: string;
  label: string;
  image: string;
  imageAlt: string;
};

const metrics: Metric[] = [
  {
    value: "2",
    suffix: "Million +",
    label: "Shipments/Day",
    image: "https://www.xpressbees.com/images/ShipmentsDay.webp",
    imageAlt: "Shipment parcels icon",
  },
  {
    value: "260",
    suffix: "+",
    label: "Hubs",
    image: "https://www.xpressbees.com/images/Hubs.webp",
    imageAlt: "Distribution hub icon",
  },
  {
    value: "4,500",
    suffix: "+",
    label: "Service Centres",
    image: "https://www.xpressbees.com/images/ServiceCentres.webp",
    imageAlt: "Service centre icon",
  },
  {
    value: "19,000",
    suffix: "+",
    label: "Pin Codes",
    image: "https://www.xpressbees.com/images/PinCodes.webp",
    imageAlt: "Location pin icon",
  },
  {
    value: "40",
    suffix: "+ Cities",
    label: "Warehouses",
    image: "https://www.xpressbees.com/images/home/warehouseIcon.webp",
    imageAlt: "Warehouse icon",
  },
  {
    value: "35,000",
    suffix: "+",
    label: "Businesses Served Since Inception",
    image: "https://www.xpressbees.com/images/home/incepetionIcon.webp",
    imageAlt: "Business partnership icon",
  },
  {
    value: "2",
    suffix: "Bn+",
    label: "Parcels Shipped Since Inception",
    image: "https://www.xpressbees.com/images/home/parcelBoxIcon.webp",
    imageAlt: "Parcel box icon",
  },
];

export type LogisticsMetricsGridProps = {
  items?: Metric[];
};

export function LogisticsMetricsGrid({ items = metrics }: LogisticsMetricsGridProps) {
  return (
    <section className="metrics-shell" aria-labelledby="metrics-heading">
      <div className="metrics-heading-wrap">
        <h2 id="metrics-heading" className="metrics-heading">
          <span>Why choose</span>
          <img src={logo} alt="XpresWings" width={1495} height={263} className="metrics-logo" />
        </h2>
      </div>

      <div className="metrics-grid">
        {items.map((metric) => (
          <article className="metric-card" key={`${metric.label}-${metric.value}`}>
            <div className="metric-icon">
              <img src={metric.image} alt={metric.imageAlt} loading="lazy" />
            </div>
            <div className="metric-copy">
              <div className="metric-value">
                <span>{metric.value}</span>
                <span className="metric-suffix">{metric.suffix}</span>
              </div>
              <p className="metric-label">{metric.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

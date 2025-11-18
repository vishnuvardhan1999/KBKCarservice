
import { MapPin } from "lucide-react";

const routes = [
  {
    id: "tamil-nadu",
    label: "Tamil Nadu",
    title: "Tamil Nadu Temple Circuit",
    temples: [
      "Madurai Meenakshi Amman Temple",
      "Rameswaram Ramanathaswamy Temple",
      "Kanchipuram (City of 1000 Temples)",
      "Srirangam Ranganathaswamy Temple",
      "Thanjavur Brihadeeswarar Temple",
      "Chidambaram Nataraja Temple",
      "Kumbakonam Temple Circuit",
    ],
  },
  {
    id: "karnataka",
    label: "Karnataka",
    title: "Karnataka Temple Tour",
    temples: [
      "Udupi Sri Krishna Temple",
      "Kollur Mookambika Temple",
      "Dharmasthala Manjunatha Temple",
      "Kukke Subramanya Temple",
      "Mantralaya Raghavendra Swamy Temple",
      "Melukote Cheluvanarayana Temple",
      "Gokarna Mahabaleshwar Temple",
    ],
  },
  {
    id: "kerala",
    label: "Kerala",
    title: "Kerala Pilgrimage Routes",
    temples: [
      "Guruvayur Sri Krishna Temple",
      "Sabarimala (Base Route Service)",
      "Padmanabhaswamy Temple, Trivandrum",
      "Thrissur Vadakkunnathan Temple",
      "Ambalappuzha Sri Krishna Temple",
      "Chottanikkara Bhagavathy Temple",
      "Ettumanoor Mahadeva Temple",
    ],
  },
  {
    id: "andhra",
    label: "Andhra / Tirupati",
    title: "Andhra Pradesh & Tirupati Circuit",
    temples: [
      "Tirumala Venkateswara Temple",
      "Srikalahasti Temple",
      "Kanipakam Vinayaka Temple",
      "Annavaram Satyanarayana Temple",
      "Simhachalam Narasimha Temple",
      "Srisailam Mallikarjuna Temple",
      "Vijayawada Kanaka Durga Temple",
    ],
  },
];

export default function TempleRoutes({ defaultValue = "tamil-nadu" }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="templeroutes-box">
      <header className="mb-6 text-center">
        <p style={{ fontWeight: 500, color: "#92743d" }}>Temple Routes</p>
        <h2 style={{ fontSize: "2em", fontWeight: 700, color: "#6E4217", margin: "0.2em 0" }}>
          Temple Routes We Cover
        </h2>
        <p style={{ color: "#856b2f", margin: "0.6em 0 0 0", fontSize: "1em" }}>
          Major pilgrimage destinations across South India, planned as smooth circuits.
        </p>
      </header>

      <div className="routes-tabs-wrap" style={{ marginTop: "2em" }}>
        <div className="routes-tablist" style={{ display: "flex", flexWrap: "wrap", gap: "9px", justifyContent: "center", marginBottom: "1.2rem" }}>
          {routes.map((route) => (
            <button
              key={route.id}
              style={{
                padding: "0.5em 1.18em",
                borderRadius: "8px",
                fontSize: "1em",
                fontWeight: 500,
                background: activeTab === route.id ? "#eac391" : "#fff",
                color: activeTab === route.id ? "#6E4217" : "#92743d",
                border: activeTab === route.id ? "2px solid #deb753" : "1px solid #ecd79e",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onClick={() => setActiveTab(route.id)}
              aria-selected={activeTab === route.id}
              aria-controls={`panel-${route.id}`}
            >
              {route.label}
            </button>
          ))}
        </div>

        {routes.map((route) =>
          route.id === activeTab ? (
            <div key={route.id} id={`panel-${route.id}`} style={{
              background: "#fff9ef",
              boxShadow: "0 3px 22px #ebca8030",
              borderRadius: "1em",
              padding: "1.5em .9em",
              margin: "0 auto",
              maxWidth: "380px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7em", marginBottom: "0.8em" }}>
                <MapPin size={20} style={{ color: "#ad8b53" }} />
                <h3 style={{ fontSize: "1.08em", fontWeight: 700, color: "#92743d", margin: 0 }}>{route.title}</h3>
              </div>

              <ul style={{
                padding: 0, margin: 0, listStyle: "none",
                fontSize: ".97em", color: "#774f20", lineHeight: "1.69",
                display: "flex", flexDirection: "column", gap: "3px"
              }}>
                {route.temples.map((temple, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "start", gap: "0.75em" }}>
                    <span style={{ marginTop: "0.5em", width: "7px", height: "7px", background: "#ad8b53", borderRadius: "50%" }} />
                    <span>{temple}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

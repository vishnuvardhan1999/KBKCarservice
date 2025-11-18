import { Phone, MessageCircle } from "lucide-react";

export function Header() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918179634105", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+918179634105";
  };

  return (
    <header className="header-row">
      <div className="header-left">
        <img
          src="/favicon.ico"
          alt="KBK Logo"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            marginRight: "18px",
          }}
        />
        <div className="header-title">
          <div
            className="kbk-main"
            style={{
              fontWeight: 800,
              fontSize: "2.1em",
              letterSpacing: "1px",
              color: "#81502A",
              lineHeight: "1em",
            }}
          >
            KBK
          </div>
          <div
            className="kbk-sub"
            style={{ fontSize: "1em", color: "#a17623", marginTop: "2px", fontWeight: 600 }}
          >
            Car Service
          </div>
        </div>
      </div>

      <div className="header-right">
        <button onClick={handleCall} className="header-btn">
          <Phone className="icon" /> Call
        </button>
        <button onClick={handleWhatsApp} className="header-btn">
          <MessageCircle className="icon" /> WhatsApp
        </button>
      </div>
    </header>
  );
}

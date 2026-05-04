import { Phone, MapPin, Camera, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { businessData } from "../data/businessData";
import { C } from "../data/images";

export default function Footer() {
  const { contact, location } = businessData;
  return (
    <footer style={{ background: C.dark, color: C.cream }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 1rem 32px" }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <img src="/logo.png" alt="Dar Lalla Khadra" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 18, fontWeight: 700, color: C.cream }}>Dar Lalla Khadra</span>
            </div>
            <p style={{ fontSize: 14, color: C.textLight, lineHeight: 1.7 }}>Traditional Moroccan rooftop dining, B&B, and hospitality in Meknes.</p>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: C.amber, marginBottom: 16 }}>Quick Links</h4>
            {["Menu", "Rooftop", "Reservations", "Private Dining", "Reviews", "Location"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} style={{ display: "block", padding: "6px 0", color: C.textLight, textDecoration: "none", fontSize: 14 }}>{l}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: C.amber, marginBottom: 16 }}>Contact</h4>
            {[
              { icon: Phone, text: contact.phone, href: `tel:${contact.phone}` },
              { icon: MapPin, text: location.address },
              { icon: Camera, text: "Instagram", href: contact.instagram },
              { icon: MessageCircle, text: "Threads", href: contact.threads },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <c.icon size={15} color={C.amber} />
                {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: C.textLight, textDecoration: "none", fontSize: 14 }}>{c.text}</a> : <span style={{ color: C.textLight, fontSize: 14 }}>{c.text}</span>}
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: C.amber, marginBottom: 16 }}>Dining Info</h4>
            <p style={{ fontSize: 14, color: C.textLight, lineHeight: 1.7, marginBottom: 8 }}>Weekdays 3 PM – 9 PM</p>
            <p style={{ fontSize: 14, color: C.textLight, lineHeight: 1.7, marginBottom: 8 }}>Weekends 6 PM – 11:30 PM</p>
            <p style={{ fontSize: 13, color: C.textLight, marginTop: 8, padding: "8px 14px", borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "inline-block" }}>Cash Only</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 40, paddingTop: 20 }}>
          <div className="footer-bottom">
            <p style={{ fontSize: 13, color: C.textLight }}>© 2025 Dar Lalla Khadra. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ display: "flex", alignItems: "center", gap: 6, color: C.textLight, background: "none", border: "none", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Clock, Sun, Users, Lock, Phone, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { C } from "../data/images";

const cards = [
  { icon: Clock, title: "Today's Peak Window", desc: "Weekdays 3–9 PM. Book early for guaranteed seating.", grad: `linear-gradient(135deg, ${C.brown}, ${C.darkBrown})`, tag: "High Demand" },
  { icon: Sun, title: "Rooftop Table Request", desc: "Rooftop tables fill fast at sunset. Reserve ahead.", grad: `linear-gradient(135deg, ${C.amber}, ${C.gold})`, tag: "Most Requested" },
  { icon: Lock, title: "Private Dining", desc: "Book the private room for intimate gatherings.", grad: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, tag: "Exclusive" },
  { icon: Users, title: "Family & Group Booking", desc: "Groups of 6+ should book in advance.", grad: `linear-gradient(135deg, ${C.terracotta}, ${C.brown})`, tag: "Groups" },
  { icon: Phone, title: "Confirmation by Phone", desc: "All reservations confirmed via phone call.", grad: `linear-gradient(135deg, ${C.gold}, ${C.amber})`, tag: "Personal" },
];

export default function PeakReservationSection() {
  return (
    <section id="peak-hours" style={{ padding: "80px 0", background: C.cream }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 20, background: "rgba(160,82,45,0.1)", color: C.terracotta, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            <AlertTriangle size={15} /> Peak Hours — Reserve Ahead
          </div>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown }}>Don't Miss Your Table</h2>
        </motion.div>

        <div style={{ maxWidth: 700, margin: "0 auto 48px", borderRadius: 16, padding: "28px 32px", background: `linear-gradient(135deg, ${C.darkBrown}, ${C.dark})`, color: C.cream }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.amber, marginBottom: 6 }}>Weekday Peak</p>
              <p style={{ fontSize: 24, fontWeight: 700 }}>3 PM – 9 PM</p>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.amber, marginBottom: 6 }}>Weekend Peak</p>
              <p style={{ fontSize: 24, fontWeight: 700 }}>6 PM – 11:30 PM</p>
            </div>
          </div>
          <p style={{ marginTop: 16, fontSize: 14, color: C.textLight, lineHeight: 1.6 }}>Reserve ahead for rooftop seating, family tables, or private dining.</p>
        </div>

        <div className="grid-3-col" style={{ gap: 16 }}>
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ background: C.white, borderRadius: 14, padding: 24, border: `1px solid ${C.border}`, transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: c.grad, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <c.icon size={22} color={C.white} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.terracotta, background: "rgba(160,82,45,0.08)", padding: "5px 12px", borderRadius: 12 }}>{c.tag}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-family-heading)", fontSize: 16, fontWeight: 700, color: C.darkBrown, marginBottom: 6 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#reservations" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", background: C.terracotta, color: C.white, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 16 }}>Reserve Now — Beat the Rush</a>
        </div>
      </div>
    </section>
  );
}

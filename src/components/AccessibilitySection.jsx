import { Wifi, Baby, Shield, Zap, Snowflake, Banknote, Armchair, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { C } from "../data/images";

const items = [
  { icon: Shield, title: "Safe & Clean", desc: "Hygienic kitchen and dining areas." },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected throughout your visit." },
  { icon: Baby, title: "Family-Friendly", desc: "Kids' menu, high chairs, changing tables." },
  { icon: Snowflake, title: "Air-Conditioned", desc: "Comfortable indoor seating year-round." },
  { icon: Languages, title: "Multilingual Staff", desc: "Arabic, French, and English spoken." },
  { icon: Banknote, title: "Cash Only", desc: "Simple and traditional. ATM nearby." },
  { icon: Armchair, title: "Accessible Seating", desc: "Ground-floor access and comfortable seating." },
  { icon: Zap, title: "Fast Service", desc: "Efficient even during peak hours." },
];

export default function AccessibilitySection() {
  return (
    <section style={{ padding: "80px 0", background: C.creamDark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.terracotta }}>Guest Comfort</span>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, margin: "8px 0 10px" }}>Everything You Need</h2>
          <p style={{ color: C.textMuted, maxWidth: 520, margin: "0 auto" }}>We've thought of every detail to make your visit comfortable.</p>
        </motion.div>

        <div className="grid-4-col" style={{ gap: 14 }}>
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{ background: C.white, borderRadius: 14, padding: 24, border: `1px solid ${C.border}`, transition: "box-shadow 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.06)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: C.creamDark, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <it.icon size={20} color={C.terracotta} />
              </div>
              <h3 style={{ fontFamily: "var(--font-family-heading)", fontWeight: 700, color: C.darkBrown, marginBottom: 4, fontSize: 15 }}>{it.title}</h3>
              <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6 }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

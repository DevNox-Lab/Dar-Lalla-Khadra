import { Bed, Key, Star, Coffee, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { images, C } from "../data/images";

const perks = [
  { icon: Bed, text: "Comfortable riad rooms" },
  { icon: Key, text: "Private entrance" },
  { icon: Coffee, text: "Breakfast included" },
  { icon: Shield, text: "Secure, family-safe" },
  { icon: Star, text: "Rooftop access" },
  { icon: MapPin, text: "Steps from the medina" },
];

export default function HospitalitySection() {
  return (
    <section style={{ padding: "80px 0", background: C.creamDark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <div className="grid-2-hero" style={{ gap: 48, alignItems: "center" }}>
          <div className="order-last lg-order-1">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="img-card" style={{ aspectRatio: "4/5", boxShadow: "0 20px 50px rgba(44,24,16,0.15)" }}>
                <img src={images.bedroom} alt="Moroccan riad bedroom with traditional decor" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,20,17,0.7) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, color: C.white }}>
                  <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 22, fontWeight: 700 }}>Stay & Dine</span>
                  <p style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Traditional riad rooms · Breakfast included</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-first lg-order-2">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.terracotta }}>Hospitality</span>
              <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, margin: "8px 0 16px" }}>Dine & Stay Under One Roof</h2>
              <p style={{ color: C.textMuted, lineHeight: 1.7, marginBottom: 32 }}>Combine rooftop dining with a traditional Moroccan riad stay. Enjoy breakfast on the terrace, walk to the medina, and feel at home in Meknes.</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
                {perks.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: C.creamMid, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <p.icon size={16} color={C.terracotta} />
                    </div>
                    <span style={{ fontSize: 14, color: C.darkBrown }}>{p.text}</span>
                  </div>
                ))}
              </div>

              <a href="#reservations" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: C.terracotta, color: C.white, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 16 }}>Book a Room</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

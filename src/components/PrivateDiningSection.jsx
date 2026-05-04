import { Lock, Users, Globe, Utensils, Baby, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { images, C } from "../data/images";

const feats = [
  { icon: Lock, text: "Private dining room" }, { icon: Users, text: "Family gatherings" },
  { icon: Globe, text: "Tourist groups" }, { icon: Utensils, text: "Catering available" },
  { icon: Baby, text: "Kids' menu & changing tables" }, { icon: Sun, text: "Rooftop group seating" },
];

export default function PrivateDiningSection() {
  return (
    <section id="private-dining" style={{ padding: "80px 0", background: C.dark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <div className="grid-2-hero" style={{ gap: 48, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.amber }}>Private & Group Dining</span>
            <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.cream, margin: "8px 0 16px" }}>Celebrate Together</h2>
            <p style={{ color: C.textLight, lineHeight: 1.7, marginBottom: 32 }}>Whether it's a family reunion, tourist group, or private event — our dining room and rooftop accommodate your needs.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
              {feats.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={16} color={C.amber} />
                  </div>
                  <span style={{ fontSize: 14, color: C.cream }}>{f.text}</span>
                </motion.div>
              ))}
            </div>

            <a href="#reservations" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: C.amber, color: C.dark, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 16 }}>Plan a Group Visit</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="img-card" style={{ aspectRatio: "4/5", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
              <img src={images.privateDining} alt="Elegant private dining setup" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,20,17,0.75) 0%, rgba(27,20,17,0.2) 50%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28, color: C.white }}>
                <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 22, fontWeight: 700 }}>Private Dining Room</span>
                <p style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>Family events · Group dining · Catering</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

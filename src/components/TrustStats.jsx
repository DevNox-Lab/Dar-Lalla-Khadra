import { Star, Users, Music, Sun, Calendar, Heart, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { C } from "../data/images";

const stats = [
  { icon: Star, value: "4.9", label: "Rating", grad: `linear-gradient(135deg, ${C.amber}, ${C.gold})` },
  { icon: Users, value: "1,692", label: "Reviews", grad: `linear-gradient(135deg, ${C.terracotta}, ${C.brown})` },
  { icon: Star, value: "1,601", label: "Five-Star", grad: `linear-gradient(135deg, ${C.goldLight}, ${C.amber})` },
  { icon: Sun, value: "Rooftop", label: "Seating", grad: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` },
  { icon: Music, value: "Live", label: "Music", grad: `linear-gradient(135deg, ${C.warmBrown}, ${C.terracotta})` },
  { icon: Calendar, value: "Open", label: "Reservations", grad: `linear-gradient(135deg, ${C.brown}, ${C.darkBrown})` },
  { icon: Heart, value: "Family", label: "Friendly", grad: `linear-gradient(135deg, ${C.amber}, ${C.terracotta})` },
  { icon: Globe, value: "Tourist", label: "Friendly", grad: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` },
];

export default function TrustStats() {
  return (
    <section style={{ padding: "72px 0", background: C.dark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.cream, marginBottom: 10 }}>Trusted by Thousands</h2>
          <p style={{ color: C.textLight, maxWidth: 550, margin: "0 auto", lineHeight: 1.6 }}>One of the highest-rated restaurants in Meknes with exceptional Moroccan hospitality.</p>
        </motion.div>

        <div className="grid-4-col" style={{ gap: 14 }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: 22, textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", transition: "background 0.2s" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: s.grad, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <s.icon size={22} color={C.white} />
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: C.cream }}>{s.value}</div>
              <div style={{ fontSize: 13, color: C.textLight, marginTop: 2 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

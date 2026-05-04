import { Sun, Music, Coffee, Cake, Leaf, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { images, C } from "../data/images";

const items = [
  { icon: Sun, title: "Rooftop Seating", desc: "Dine under the Meknes sky with panoramic medina views.", grad: `linear-gradient(135deg, ${C.amber}, ${C.terracotta})` },
  { icon: Music, title: "Live Music", desc: "Traditional Moroccan music on select evenings.", grad: `linear-gradient(135deg, ${C.terracotta}, ${C.brown})` },
  { icon: Coffee, title: "Great Tea & Coffee", desc: "Ceremonial mint tea and spiced coffee.", grad: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` },
  { icon: Cake, title: "Exquisite Desserts", desc: "Handmade pastries, chebakia, and ghriba.", grad: `linear-gradient(135deg, ${C.gold}, ${C.amber})` },
  { icon: Leaf, title: "Organic & Fresh", desc: "Locally sourced ingredients, traditional methods.", grad: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` },
  { icon: Heart, title: "Warm Hospitality", desc: "Cosy, quiet atmosphere with Moroccan warmth.", grad: `linear-gradient(135deg, ${C.warmBrown}, ${C.brown})` },
];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "80px 0", background: C.creamDark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <div className="grid-2-hero" style={{ gap: 56, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.terracotta }}>The Experience</span>
            <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, margin: "8px 0 16px" }}>
              More Than a Meal — A Moroccan Journey
            </h2>
            <p style={{ color: C.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
              From rooftop views to live music, from ceremonial tea to handmade desserts — every detail immerses you in authentic Moroccan hospitality.
            </p>
            <div className="img-card" style={{ aspectRatio: "3/2", boxShadow: "0 20px 50px rgba(44,24,16,0.15)" }}>
              <img src={images.rooftop} alt="Moroccan rooftop dining with warm ambience" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,20,17,0.65) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, color: C.white }}>
                <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 22, fontWeight: 700 }}>Rooftop Nights</span>
                <p style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Live music · Tea ceremony · Starlit dining</p>
              </div>
            </div>
          </motion.div>

          <div className="grid-2-col" style={{ gap: 14 }}>
            {items.map((it, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ background: C.white, borderRadius: 14, padding: 22, border: `1px solid ${C.border}`, transition: "box-shadow 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.07)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: it.grad, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <it.icon size={20} color={C.white} />
                </div>
                <h3 style={{ fontFamily: "var(--font-family-heading)", fontWeight: 700, color: C.darkBrown, marginBottom: 4, fontSize: 15 }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6 }}>{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, Users, Music, Sun, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { images, C } from "../data/images";

const badges = [
  { icon: Star, text: "4.9 Rating", bg: "rgba(212,160,74,0.2)", color: "#7a5c16" },
  { icon: Users, text: "1,692 Reviews", bg: "rgba(160,82,45,0.15)", color: "#5c3428" },
  { icon: Star, text: "1,601 Five-Star", bg: "rgba(212,160,74,0.2)", color: "#7a5c16" },
  { icon: Sun, text: "Rooftop Seating", bg: "rgba(26,122,109,0.12)", color: "#145f54" },
  { icon: Music, text: "Live Music", bg: "rgba(160,82,45,0.15)", color: "#5c3428" },
];

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 68, background: C.cream }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235c3428' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "48px 1rem 64px", width: "100%" }}>
        <div className="grid-2-hero" style={{ gap: 48, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {badges.map((b, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, backgroundColor: b.bg, color: b.color }}>
                  <b.icon size={14} /> {b.text}
                </motion.span>
              ))}
            </div>

            <h1 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(2.2rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.08, color: C.darkBrown, marginBottom: 20 }}>
              Traditional Moroccan rooftop dining in <span style={{ color: C.terracotta }}>Meknes</span>.
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.75, color: C.textMuted, marginBottom: 36, maxWidth: 520 }}>
              Experience Moroccan cuisine, rooftop seating, live music, tea, desserts, family dining, and warm hospitality at one of Meknes' highest-rated restaurants.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a href="#reservations" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: C.terracotta, color: C.white, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 16 }}>
                <Calendar size={18} /> Reserve a Table
              </a>
              <a href="#menu" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: C.white, color: C.darkBrown, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 16, border: `2px solid ${C.border}` }}>
                View Menu
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ position: "relative" }}>
            <div className="img-card" style={{ aspectRatio: "4/5", boxShadow: "0 25px 60px -12px rgba(44,24,16,0.3)" }}>
              <img src={images.hero} alt="Moroccan restaurant interior with warm lighting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,20,17,0.7) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, color: C.white }}>
                <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 22, fontWeight: 700 }}>Rooftop Dining</span>
                <p style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Live music · Sunset views · Traditional tea</p>
              </div>
            </div>

            <div style={{ position: "absolute", bottom: -16, left: -12, background: C.white, borderRadius: 14, padding: "14px 18px", boxShadow: "0 12px 32px rgba(0,0,0,0.12)", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex" }}>{[...Array(5)].map((_, i) => <Star key={i} size={15} fill={C.amber} color={C.amber} />)}</div>
                <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>4.9</span>
              </div>
              <p style={{ fontSize: 12, color: C.textMuted, marginTop: 3 }}>1,692 verified reviews</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

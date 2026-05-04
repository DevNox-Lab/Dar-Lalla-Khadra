import { Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { images, C } from "../data/images";

export default function FinalCTA() {
  return (
    <section style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={images.courtyard} alt="Moroccan courtyard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(27,20,17,0.92), rgba(92,52,40,0.88))" }} />
      </div>

      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 1rem", textAlign: "center", color: C.white }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(212,160,74,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", border: "1px solid rgba(212,160,74,0.3)" }}>
            <Calendar size={28} color={C.amber} />
          </div>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>Your Table Is Waiting</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, maxWidth: 520, margin: "0 auto 40px" }}>
            Rooftop views, traditional cuisine, live music, and warm hospitality — experience the best of Meknes at Dar Lalla Khadra.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            <a href="#reservations" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 36px", background: C.amber, color: C.dark, borderRadius: 14, fontWeight: 700, textDecoration: "none", fontSize: 17 }}>
              Reserve a Table <ArrowRight size={18} />
            </a>
            <a href="tel:+212535535982" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 36px", background: "rgba(255,255,255,0.12)", color: C.white, border: "1px solid rgba(255,255,255,0.25)", borderRadius: 14, fontWeight: 600, textDecoration: "none", fontSize: 16, backdropFilter: "blur(8px)" }}>
              <Phone size={17} /> +212 5 35 53 59 82
            </a>
          </div>

          <p style={{ marginTop: 28, fontSize: 13, opacity: 0.6 }}>Cash only · Reservations confirmed by phone</p>
        </motion.div>
      </div>
    </section>
  );
}

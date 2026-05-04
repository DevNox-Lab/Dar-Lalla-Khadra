import { Star, Quote, ThumbsUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { placeholderReviews, businessData } from "../data/businessData";
import { C } from "../data/images";

export default function ReviewsSection() {
  const { rating, total, distribution } = businessData.reviews;
  return (
    <section id="reviews" style={{ padding: "80px 0", background: C.cream }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.terracotta }}>Testimonials</span>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, margin: "8px 0 10px" }}>What Our Guests Say</h2>
        </motion.div>

        <div style={{ maxWidth: 480, margin: "0 auto 48px", background: C.white, borderRadius: 16, padding: 32, border: `1px solid ${C.border}`, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 12 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={26} fill={C.amber} color={C.amber} />)}
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, color: C.darkBrown, lineHeight: 1 }}>{rating}</div>
          <p style={{ color: C.textMuted, marginTop: 6 }}>out of 5 · {total.toLocaleString()} reviews</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 20 }}>
            {[5, 4, 3, 2, 1].map(n => {
              const pct = ((distribution[n] / total) * 100).toFixed(0);
              return (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                  <span style={{ width: 16, textAlign: "right", color: C.textMuted }}>{n}</span>
                  <Star size={12} fill={C.amber} color={C.amber} />
                  <div style={{ flex: 1, height: 8, borderRadius: 4, background: C.creamDark, overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", borderRadius: 4, background: n >= 4 ? C.amber : n === 3 ? C.warmBrown : C.textLight, transition: "width 0.5s" }} />
                  </div>
                  <span style={{ width: 36, textAlign: "right", color: C.textLight, fontSize: 12 }}>{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid-3-col" style={{ gap: 16 }}>
          {placeholderReviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ background: C.white, borderRadius: 14, padding: 24, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
              <Quote size={20} color={C.amber} style={{ marginBottom: 12, opacity: 0.6 }} />
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, flex: 1, fontStyle: "italic" }}>"{r.text}"</p>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontWeight: 700, color: C.darkBrown, fontSize: 14 }}>{r.name}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                    {r.origin && <><MapPin size={11} color={C.textLight} /><span style={{ fontSize: 12, color: C.textLight }}>{r.origin}</span></>}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 1 }}>{[...Array(r.rating)].map((_, i) => <Star key={i} size={13} fill={C.amber} color={C.amber} />)}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="https://www.google.com/maps/place/DAR+LALLA+KHADRA/" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: C.white, color: C.darkBrown, border: `1px solid ${C.border}`, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 14 }}>
            <ThumbsUp size={16} /> Read All 1,692 Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

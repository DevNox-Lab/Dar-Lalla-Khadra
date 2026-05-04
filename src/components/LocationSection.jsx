import { MapPin, Phone, Clock, Navigation, Camera, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { images, C } from "../data/images";

export default function LocationSection() {
  const { location, contact, peakTiming } = businessData;
  return (
    <section id="location" style={{ padding: "80px 0", background: C.cream }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.terracotta }}>Find Us</span>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, margin: "8px 0 10px" }}>Visit Dar Lalla Khadra</h2>
          <p style={{ color: C.textMuted, maxWidth: 520, margin: "0 auto" }}>In the heart of Meknes, steps from the old medina.</p>
        </motion.div>

        <div className="grid-2-hero" style={{ gap: 40 }}>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 24, boxShadow: "0 12px 40px rgba(44,24,16,0.12)" }}>
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044bf6e2c1e27%3A0xdf7ea16f6e8c3b0!2sDAR%20LALLA%20KHADRA!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma`}
                style={{ border: 0, width: "100%", height: 320, borderRadius: 16 }} allowFullScreen loading="lazy" title="Restaurant location" />
            </div>

            <div className="img-card" style={{ aspectRatio: "2/1" }}>
              <img src={images.moroccanDoor} alt="Traditional Moroccan doorway in Meknes medina" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(27,20,17,0.7), transparent)" }} />
              <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 24, color: C.white }}>
                <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 20, fontWeight: 700 }}>In the Heart of Meknes</span>
                <p style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Steps from the old medina</p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.border}`, marginBottom: 16 }}>
              <h3 style={{ fontFamily: "var(--font-family-heading)", fontSize: 18, fontWeight: 700, color: C.darkBrown, marginBottom: 20 }}>Contact & Hours</h3>
              {[
                { icon: MapPin, label: "Address", val: location.address },
                { icon: Phone, label: "Phone", val: contact.phone, href: `tel:${contact.phone}` },
                { icon: Clock, label: "Hours", val: `Weekdays ${peakTiming.weekday} · Weekends ${peakTiming.weekend}` },
                { icon: Camera, label: "Instagram", val: "@dar.lalla.khadra", href: contact.instagram },
                { icon: MessageCircle, label: "Threads", val: "Threads profile", href: contact.threads },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: i < 4 ? 20 : 0 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: C.creamDark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <c.icon size={18} color={C.terracotta} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: C.textLight, marginBottom: 2 }}>{c.label}</p>
                    {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: C.darkBrown, fontWeight: 500, textDecoration: "none", fontSize: 14 }}>{c.val}</a> : <p style={{ color: C.darkBrown, fontWeight: 500, fontSize: 14 }}>{c.val}</p>}
                  </div>
                </div>
              ))}
            </div>

            <a href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "16px 24px", background: C.terracotta, color: C.white, borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: 16 }}>
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

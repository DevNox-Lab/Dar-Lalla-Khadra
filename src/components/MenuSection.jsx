import { useState } from "react";
import { Search, Plus, Flame, Leaf, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuCategories } from "../data/businessData";
import { C } from "../data/images";

const labelCfg = {
  Signature: { bg: "rgba(212,160,74,0.18)", color: "#7a5c16", Icon: Star },
  Popular: { bg: "rgba(160,82,45,0.12)", color: "#5c3428", Icon: Flame },
  Vegan: { bg: "rgba(26,122,109,0.12)", color: "#145f54", Icon: Leaf },
  Vegetarian: { bg: "rgba(26,122,109,0.1)", color: "#1a7a6d", Icon: Leaf },
  Kids: { bg: "rgba(212,160,74,0.12)", color: "#7a5c16", Icon: null },
  "Tea House": { bg: "rgba(139,94,60,0.1)", color: "#5c3428", Icon: null },
};

export default function MenuSection() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = menuItems.filter(
    (it) =>
      (cat === "All" || it.category === cat) &&
      (it.name.toLowerCase().includes(q.toLowerCase()) ||
        it.description.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section id="menu" style={{ padding: "80px 0", background: C.cream }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: C.terracotta }}>Our Menu</span>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, margin: "8px 0 10px" }}>Authentic Moroccan Cuisine</h2>
          <p style={{ color: C.textMuted, maxWidth: 520, margin: "0 auto" }}>From traditional tagines and royal couscous to tea ceremony and handmade desserts.</p>
        </motion.div>

        <div style={{ maxWidth: 420, margin: "0 auto 24px", position: "relative" }}>
          <Search size={18} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.textLight }} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search menu..."
            style={{ width: "100%", padding: "13px 16px 13px 44px", borderRadius: 12, border: `1px solid ${C.border}`, background: C.white, fontSize: 15, outline: "none", fontFamily: "inherit", color: C.darkBrown }}
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 32 }}>
          {menuCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                padding: "9px 18px", borderRadius: 12, fontSize: 13, fontWeight: 600,
                border: cat === c ? "none" : `1px solid ${C.border}`, cursor: "pointer",
                background: cat === c ? C.terracotta : C.white,
                color: cat === c ? C.white : C.warmBrown,
                fontFamily: "inherit", transition: "all 0.2s",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid-3-col" style={{ gap: 16 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.div
                key={it.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: C.white, borderRadius: 16, overflow: "hidden",
                  border: `1px solid ${C.border}`, transition: "box-shadow 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(44,24,16,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: C.creamDark }}>
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* Price badge */}
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: "rgba(27,20,17,0.75)", backdropFilter: "blur(8px)",
                    color: C.white, padding: "6px 12px", borderRadius: 10,
                    fontSize: 15, fontWeight: 700, lineHeight: 1,
                  }}>
                    {it.price} <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.8 }}>MAD</span>
                  </div>
                  {/* Labels on image */}
                  {it.labels.length > 0 && (
                    <div style={{ position: "absolute", bottom: 10, left: 10, display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {it.labels.map((l) => {
                        const cfg = labelCfg[l] || { bg: "#f3f4f6", color: "#374151", Icon: null };
                        return (
                          <span
                            key={l}
                            style={{
                              display: "inline-flex", alignItems: "center", gap: 3,
                              padding: "4px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700,
                              background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)",
                              color: cfg.color,
                            }}
                          >
                            {cfg.Icon && <cfg.Icon size={10} />} {l}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: "16px 18px 18px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-family-heading)", fontWeight: 700, color: C.darkBrown, lineHeight: 1.3, fontSize: 15 }}>{it.name}</h3>
                      <p style={{ fontSize: 12, color: C.textLight, marginTop: 2 }}>{it.category}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6, marginBottom: 14 }}>{it.description}</p>
                  <button
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      width: "100%", padding: "10px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                      background: C.creamDark, color: C.warmBrown, border: "none", cursor: "pointer",
                      fontFamily: "inherit", transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = C.creamMid)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = C.creamDark)}
                  >
                    <Plus size={15} /> Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", padding: 48, color: C.textLight }}>No items found.</p>
        )}
        <p style={{ textAlign: "center", fontSize: 13, color: C.textLight, marginTop: 32 }}>Prices in MAD. Subject to availability.</p>
      </div>
    </section>
  );
}

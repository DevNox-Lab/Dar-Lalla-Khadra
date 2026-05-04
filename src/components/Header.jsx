import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../data/images";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Rooftop", href: "#experience" },
  { label: "Reservations", href: "#reservations" },
  { label: "Private Dining", href: "#private-dining" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "rgba(250,247,242,0.97)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="/logo.png" alt="Dar Lalla Khadra" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
            <span style={{ fontFamily: "var(--font-family-heading)", fontSize: 19, fontWeight: 600, color: C.darkBrown }} className="hide-mobile">Dar Lalla Khadra</span>
          </a>

          <nav className="nav-desktop" style={{ alignItems: "center", gap: 4 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{ padding: "8px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: C.warmBrown, textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = C.creamDark}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>{l.label}</a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="tel:+212535535982" className="btn-call-desktop" style={{ alignItems: "center", gap: 8, padding: "10px 20px", background: C.terracotta, color: C.white, borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              <Phone size={15} /> Call Now
            </a>
            <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ padding: 8, borderRadius: 8, border: "none", background: "transparent", color: C.darkBrown, cursor: "pointer" }}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden", background: C.cream, borderTop: `1px solid ${C.border}` }} className="nav-mobile-btn">
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 16px", borderRadius: 8, fontWeight: 500, color: C.darkBrown, textDecoration: "none" }}>{l.label}</a>
              ))}
              <a href="tel:+212535535982" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 8, padding: "14px 16px", background: C.terracotta, color: C.white, borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>
                <Phone size={15} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

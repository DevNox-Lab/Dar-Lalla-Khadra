import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../data/images";

const seatingOpts = ["Rooftop seating", "Indoor dining", "Private dining room", "Family table"];
const occasionOpts = ["Casual meal", "Family lunch/dinner", "Tourist visit", "Private event", "Live music night"];

const inputStyle = { width: "100%", padding: "13px 16px", borderRadius: 12, border: `1px solid ${C.border}`, background: C.cream, color: C.darkBrown, fontSize: 15, outline: "none", fontFamily: "inherit" };

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", seating: "Rooftop seating", occasion: "Casual meal", request: "" });
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="reservations" style={{ padding: "80px 0", background: C.cream }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-family-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: C.darkBrown, marginBottom: 10 }}>Reserve Your Table</h2>
          <p style={{ color: C.textMuted, maxWidth: 500, margin: "0 auto" }}>Secure your spot for rooftop dining, family meals, or private events.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              style={{ background: C.white, borderRadius: 20, padding: 56, textAlign: "center", border: `1px solid ${C.border}`, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: C.tealLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <CheckCircle size={40} color={C.teal} />
              </div>
              <h3 style={{ fontFamily: "var(--font-family-heading)", fontSize: 22, fontWeight: 700, color: C.darkBrown, marginBottom: 8 }}>Reservation Received!</h3>
              <p style={{ color: C.textMuted }}>We'll call you to confirm your booking.</p>
              <p style={{ fontSize: 13, color: C.textLight, marginTop: 8 }}>For immediate confirmation, call +212 5 35 53 59 82</p>
            </motion.div>
          ) : (
            <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}
              style={{ background: C.white, borderRadius: 20, padding: 36, border: `1px solid ${C.border}`, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
              <div className="form-grid">
                <div><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Full Name</label><input type="text" name="name" value={form.name} onChange={set} required placeholder="Your full name" style={inputStyle} /></div>
                <div><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Phone Number</label><input type="tel" name="phone" value={form.phone} onChange={set} required placeholder="+212 ..." style={inputStyle} /></div>
                <div><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Date</label><input type="date" name="date" value={form.date} onChange={set} required style={inputStyle} /></div>
                <div><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Time</label><input type="time" name="time" value={form.time} onChange={set} required style={inputStyle} /></div>
                <div><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Number of Guests</label><select name="guests" value={form.guests} onChange={set} style={inputStyle}>{[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n} value={n}>{n} {n===1?"Guest":"Guests"}</option>)}<option value="10+">10+ Guests</option></select></div>
                <div><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Seating Preference</label><select name="seating" value={form.seating} onChange={set} style={inputStyle}>{seatingOpts.map(o=><option key={o} value={o}>{o}</option>)}</select></div>
                <div className="form-full">
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Occasion</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {occasionOpts.map(o => (
                      <button key={o} type="button" onClick={() => setForm({ ...form, occasion: o })}
                        style={{ padding: "9px 18px", borderRadius: 12, fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer", transition: "all 0.2s",
                          background: form.occasion === o ? C.terracotta : C.creamDark, color: form.occasion === o ? C.white : C.darkBrown }}>{o}</button>
                    ))}
                  </div>
                </div>
                <div className="form-full"><label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.darkBrown, marginBottom: 8 }}>Special Request (Optional)</label>
                  <textarea name="request" value={form.request} onChange={set} rows="3" placeholder="Birthday, dietary needs, rooftop table..." style={{ ...inputStyle, resize: "none" }} /></div>
              </div>
              <button type="submit" style={{ width: "100%", marginTop: 28, padding: "17px 32px", background: C.terracotta, color: C.white, borderRadius: 12, fontWeight: 600, fontSize: 17, border: "none", cursor: "pointer", fontFamily: "inherit" }}>Confirm Reservation</button>
              <p style={{ textAlign: "center", fontSize: 13, color: C.textLight, marginTop: 14 }}>Reservations confirmed by phone. Cash only.</p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

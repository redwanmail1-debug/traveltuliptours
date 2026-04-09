"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const tourValues = ["keukenhof", "zaanse-schans", "giethoorn", "amsterdam", "kinderdijk", "volendam", "custom"];

export default function Booking() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", guests: "2", tour: "", pickup: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xkopjdrv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _subject: `Nieuwe boeking – ${formData.tour || "tour"} – ${formData.name}` }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead", { content_name: formData.tour || "tour" });
        }
      } else {
        setError("Something went wrong. Please call us or try again.");
      }
    } catch {
      setError("Something went wrong. Please call us or try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  if (submitted) {
    return (
      <section id="booking" className="py-20 sm:py-28 bg-cream" aria-labelledby="booking-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>{t.booking.thankYou.title}</h2>
            <p className="text-gray text-lg leading-relaxed mb-6">{t.booking.thankYou.message}</p>
            <p className="text-gray">{t.booking.thankYou.callText}{" "}<a href="tel:+31621658445" className="text-primary font-semibold">+31 6 21 65 84 45</a></p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 sm:py-28 bg-cream" aria-labelledby="booking-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase mb-3">{t.booking.subtitle}</p>
            <h2 id="booking-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>{t.booking.title}</h2>
            <p className="text-gray text-lg leading-relaxed mb-8">{t.booking.description}</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark">{t.booking.callUs}</h3>
                  <a href="tel:+31621658445" className="text-primary hover:text-primary-light transition-colors">+31 6 21 65 84 45</a>
                  <p className="text-gray text-sm">{t.booking.daily}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark">{t.booking.emailUs}</h3>
                  <a href="mailto:info@traveltuliptours.nl" className="text-primary hover:text-primary-light transition-colors">info@traveltuliptours.nl</a>
                  <p className="text-gray text-sm">{t.booking.replyTime}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark">{t.booking.whatsapp}</h3>
                  <a href="https://wa.me/31621658445" className="text-primary hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer" onClick={() => { if (typeof window !== "undefined" && (window as any).fbq) { (window as any).fbq("track", "Contact"); } }}>+31 6 21 65 84 45</a>
                  <p className="text-gray text-sm">{t.booking.quickResponse}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.fullName} <span className="text-secondary" aria-hidden="true">*</span></label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.email} <span className="text-secondary" aria-hidden="true">*</span></label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.phone}</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.date} <span className="text-secondary" aria-hidden="true">*</span></label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.guests}</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark bg-white">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? t.booking.form.guest : t.booking.form.guestsPlural}</option>
                    ))}
                    <option value="8">8+ {t.booking.form.guestsPlural}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tour" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.tour}</label>
                  <select id="tour" name="tour" value={formData.tour} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark bg-white">
                    <option value="">{t.booking.form.selectTour}</option>
                    {t.booking.form.tourOptions.map((label, i) => (
                      <option key={i} value={tourValues[i]}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="pickup" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.pickup}</label>
                <input type="text" id="pickup" name="pickup" value={formData.pickup} onChange={handleChange} placeholder={t.booking.form.pickupPlaceholder} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark placeholder:text-gray/50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">{t.booking.form.message}</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={t.booking.form.messagePlaceholder} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark placeholder:text-gray/50 resize-none" />
              </div>
              {error && <p className="text-secondary text-sm text-center">{error}</p>}
              <button type="submit" disabled={loading} className="w-full bg-secondary text-white py-4 rounded-full text-lg font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? "Sending..." : t.booking.form.submit}
              </button>
              <p className="text-center text-gray text-xs">{t.booking.form.noPayment}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

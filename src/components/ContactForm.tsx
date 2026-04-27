"use client";

import { useState } from "react";
import { bookAppointment } from "../actions/appointment";

export default function ContactForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await bookAppointment(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', background: 'var(--white)', borderRadius: '15px', border: '1px solid var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Behördlich autorisiert</h3>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>{dict.form.success}</p>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    border: '1px solid var(--border-color)',
    background: 'var(--bg-color)',
    color: 'var(--text-dark)',
    fontSize: '1rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--white)', padding: '3rem', borderRadius: '20px', boxShadow: '0 15px 50px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 500 }}>{dict.form.name} *</label>
          <input type="text" name="name" required style={inputStyle} className="interactive-input" />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 500 }}>{dict.form.email} *</label>
          <input type="email" name="email" required style={inputStyle} className="interactive-input" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 500 }}>{dict.form.phone}</label>
          <input type="tel" name="phone" style={inputStyle} className="interactive-input" />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 500 }}>{dict.form.date}</label>
          <input type="date" name="datePreference" style={inputStyle} className="interactive-input" />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 500 }}>{dict.form.department} *</label>
        <select name="department" required style={{...inputStyle, appearance: 'auto'}} className="interactive-input">
          <option value="">--</option>
          <option value="Orthopädie">{dict.form.departments.ortho}</option>
          <option value="Neurochirurgie">{dict.form.departments.neuro}</option>
          <option value="Schmerztherapie">{dict.form.departments.pain}</option>
          <option value="Sonstiges">{dict.form.departments.other}</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 500 }}>{dict.form.message}</label>
        <textarea name="message" rows={4} style={{...inputStyle, resize: 'vertical'}} className="interactive-input"></textarea>
      </div>

      {status === "error" && (
        <p style={{ color: 'red', fontSize: '0.9rem' }}>Ein Fehler ist aufgetreten. Bitte erneut versuchen.</p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1.2rem', fontSize: '1.1rem', opacity: status === "loading" ? 0.7 : 1 }}>
        {status === "loading" ? "..." : dict.form.submit}
      </button>

    </form>
  );
}

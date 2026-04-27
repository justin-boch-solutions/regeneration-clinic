"use client";

import { useState } from "react";
import { createPost, deletePost } from "../actions/post";

export default function DashboardClient({ appointments, initialPosts }: { appointments: any[], initialPosts: any[] }) {
  const [activeTab, setActiveTab] = useState<"appointments" | "blogs">("appointments");
  const [posts, setPosts] = useState(initialPosts);

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await createPost(formData);
    if (result.success) {
      setPosts([result.data, ...posts]);
      e.currentTarget.reset();
      alert("Post erfolgreich erstellt!");
    } else {
      alert("Fehler beim Erstellen.");
    }
  };

  const handleDeletePost = async (id: string) => {
    if(confirm("Diesen Beitrag wirklich löschen?")) {
      await deletePost(id);
      setPosts(posts.filter(p => p.id !== id));
    }
  }

  const tabStyle = (active: boolean) => ({
    padding: '1rem 2rem',
    cursor: 'pointer',
    background: active ? '#2563eb' : '#e2e8f0',
    color: active ? 'white' : '#334155',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '8px 8px 0 0',
    marginRight: '0.5rem'
  });

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '2px solid #2563eb', marginBottom: '2rem' }}>
        <button style={tabStyle(activeTab === "appointments")} onClick={() => setActiveTab("appointments")}>Terminanfragen ({appointments.length})</button>
        <button style={tabStyle(activeTab === "blogs")} onClick={() => setActiveTab("blogs")}>News & Blog Editor</button>
      </div>

      {activeTab === "appointments" && (
        <div style={{ background: 'white', padding: '2rem', borderRadius: '0 8px 8px 8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>Eingegangene VIP-Terminanfragen</h2>
          {appointments.length === 0 ? <p>Keine Anfragen vorhanden.</p> : (
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '1rem 0' }}>Datum</th>
                  <th>Patient</th>
                  <th>Fachrichtung</th>
                  <th>Kontakt</th>
                  <th>Wunschtermin</th>
                  <th>Nachricht</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(app => (
                  <tr key={app.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem 0', color: '#64748b' }}>{new Date(app.createdAt).toLocaleDateString("de-DE")}</td>
                    <td style={{ fontWeight: '600' }}>{app.name}</td>
                    <td>{app.department}</td>
                    <td>{app.email}<br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>{app.phone}</span></td>
                    <td style={{ color: '#2563eb', fontWeight: 500 }}>{app.datePreference || '-'}</td>
                    <td style={{ maxWidth: '200px', fontSize: '0.9rem' }}>{app.message || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === "blogs" && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>Neuen Artikel verfassen</h2>
            <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Titel</label>
                <input type="text" name="title" required style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #cbd5e1' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Sprache</label>
                <select name="lang" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #cbd5e1' }}>
                  <option value="de">Deutsch (DE)</option>
                  <option value="en">Englisch (EN)</option>
                  <option value="lv">Lettisch (LV)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Inhalt</label>
                <textarea name="content" required rows={10} style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #cbd5e1', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" style={{ padding: '1rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
                Artikel publizieren
              </button>
            </form>
          </div>

          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>News Datenbank</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {posts.map((post: any) => (
                <div key={post.id} style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>{post.title}</strong>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Sprache: {post.lang.toUpperCase()} | Erstellt: {new Date(post.createdAt).toLocaleDateString("de-DE")}</span>
                  </div>
                  <button onClick={() => handleDeletePost(post.id)} style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Löschen
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

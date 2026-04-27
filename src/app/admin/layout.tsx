export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      <header style={{ background: '#1e293b', color: 'white', padding: '1rem 2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontFamily: 'system-ui, sans-serif' }}>Regeneration Clinic - Admin Panel</h1>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </main>
    </div>
  );
}

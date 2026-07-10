import DashboardFrame from '../components/DashboardFrame';

export default function Home() {
  return (
    <main className="page-shell">
      <div className="app-header">
        <div>
          <h1>STLB Rework Dashboard</h1>
          <p>Next.js wrapper preserving the current Excel upload dashboard and trailer print reports.</p>
        </div>
        <a className="open-link" href="/dashboard.html" target="_blank" rel="noreferrer">
          Open fullscreen dashboard
        </a>
      </div>
      <DashboardFrame />
    </main>
  );
}

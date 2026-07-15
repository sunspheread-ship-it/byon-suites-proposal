const kpis = [
  { name: "Unit readiness", value: 96, note: "Units ready before guest arrival" },
  { name: "Housekeeping pass", value: 94, note: "Inspection pass rate" },
  { name: "Maintenance SLA", value: 87, note: "Work orders completed on time" },
];

const recognition = [
  { mark: "+", title: "Guest-ready champion", note: "Recognised by Operations Lead - 12 July", points: "+120" },
  { mark: "✓", title: "Zero complaint week", note: "Service consistency milestone - 7 July", points: "+80" },
  { mark: "★", title: "Fast maintenance handover", note: "Team recognition - 3 July", points: "+60" },
];

const departments = [
  { rank: "01", name: "Customer Service", score: 95 },
  { rank: "02", name: "Operations", score: 92, active: true },
  { rank: "03", name: "Revenue Team", score: 90 },
  { rank: "04", name: "Business Development", score: 88 },
];

export default function Home() {
  return (
    <div className="app-shell">
      <aside className="rail">
        <a className="brand" href="#overview" aria-label="Byon Suites Reward home">
          <span className="brand-mark">B</span>
          <span><strong>Byon Suites</strong><small>Reward</small></span>
        </a>

        <nav className="nav" aria-label="Reward portal navigation">
          <a className="active" href="#overview"><span>01</span> Overview</a>
          <a href="#performance"><span>02</span> My performance</a>
          <a href="#recognition"><span>03</span> Recognition</a>
          <a href="#standing"><span>04</span> Team standing</a>
          <a href="#rules"><span>05</span> Reward rules</a>
        </nav>

        <div className="rail-profile">
          <span className="avatar">AR</span>
          <span><strong>Aina Rahman</strong><small>Operations</small></span>
        </div>
      </aside>

      <main id="overview">
        <header className="topbar">
          <div>
            <p className="eyebrow">Good afternoon, Aina</p>
            <h1>Your reward dashboard</h1>
          </div>
          <div className="top-actions">
            <span className="period">July 2026</span>
            <a className="outline-button" href="#rules">How it works</a>
          </div>
        </header>

        <section className="summary-grid" aria-label="Reward summary">
          <article className="reward-card">
            <div className="reward-top">
              <p>Available reward balance</p>
              <span className="tier">Gold tier</span>
            </div>
            <div className="points">1,840 <span>points</span></div>
            <div className="reward-bottom">
              <div><small>Estimated reward value</small><strong>RM184 <em>demo</em></strong></div>
              <div className="monthly-score"><strong>92%</strong><small>monthly score</small></div>
            </div>
          </article>

          <article className="standing-card">
            <p className="section-label">Department standing</p>
            <div className="rank-line"><strong>#2</strong><span>of 11 departments</span></div>
            <h2>Operations is in stride</h2>
            <p>Only 3 points behind the current leader. Keep guest-ready checks consistent.</p>
            <div className="meter" aria-label="Operations score 92 out of leader score 95"><span /></div>
            <div className="meter-meta"><span>Operations 92</span><span>Leader 95</span></div>
          </article>
        </section>

        <section className="panel performance" id="performance">
          <div className="panel-heading">
            <div><p className="section-label">Performance</p><h2>July KPI progress</h2></div>
            <span className="score-pill">Monthly score 92%</span>
          </div>
          <div className="kpi-grid">
            {kpis.map((kpi) => (
              <article className="kpi" key={kpi.name}>
                <div className="kpi-value"><span>{kpi.name}</span><strong>{kpi.value}%</strong></div>
                <div className="progress" aria-label={`${kpi.name}: ${kpi.value}%`}><span style={{ width: `${kpi.value}%` }} /></div>
                <p>{kpi.note}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="lower-grid">
          <section className="panel" id="recognition">
            <div className="panel-heading">
              <div><p className="section-label">Recognition</p><h2>Recent wins</h2></div>
              <span className="quiet-link">This month</span>
            </div>
            <div className="recognition-list">
              {recognition.map((item) => (
                <article className="recognition-row" key={item.title}>
                  <span className="award-mark">{item.mark}</span>
                  <div><h3>{item.title}</h3><p>{item.note}</p></div>
                  <strong>{item.points}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="panel leaderboard" id="standing">
            <div className="panel-heading">
              <div><p className="section-label">Team pulse</p><h2>Department standing</h2></div>
            </div>
            <div className="leader-list">
              {departments.map((department) => (
                <div className={department.active ? "leader active" : "leader"} key={department.name}>
                  <span>{department.rank}</span><strong>{department.name}</strong><b>{department.score}</b>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rules" id="rules">
          <div>
            <p className="section-label">Fair and transparent</p>
            <h2>How Byon rewards should work</h2>
          </div>
          <div className="rule-grid">
            <article><span>01</span><h3>Role-relevant KPIs</h3><p>Your score reflects results you can influence, not one scorecard for everyone.</p></article>
            <article><span>02</span><h3>Quality protects value</h3><p>Revenue and speed are balanced with service, quality, safety and accuracy.</p></article>
            <article><span>03</span><h3>Human approval</h3><p>Complaints and low reviews trigger review, not automatic punishment or deduction.</p></article>
          </div>
          <div className="demo-notice"><strong>Demo reward rules - pending management approval.</strong> Points, RM conversion and rankings shown here are sample data for concept validation.</div>
        </section>

        <footer><span>Byon Suites Reward</span><span>Recognition that connects daily work to better guest stays.</span></footer>
      </main>
    </div>
  );
}

const challenges = [
  {
    number: "01",
    title: "Goals can get lost between departments",
    text: "Byon has interdependent teams across revenue, operations, customer service, finance, marketing and support. Without one operating rhythm, priorities can become departmental activities instead of shared business results.",
  },
  {
    number: "02",
    title: "Management visibility arrives too late",
    text: "A KPI workbook is a useful start, but management still needs reliable data ownership, review frequency and clear follow-up when a metric slips.",
  },
  {
    number: "03",
    title: "Rewards can feel subjective",
    text: "If recognition or incentives are introduced before role definitions and data are trusted, employees may question fairness instead of feeling motivated.",
  },
];

const solutionSteps = [
  { label: "Direction", title: "One 90-day company goal", text: "Translate management direction into a small number of priorities for each participating department." },
  { label: "Performance", title: "Role-specific execution", text: "Connect key actions, measurable results, owners and weekly review conversations." },
  { label: "Visibility", title: "Management sees exceptions", text: "Make delays, gaps and ownership visible early enough for managers to intervene." },
  { label: "Reward", title: "Recognition follows evidence", text: "Introduce recognition and rewards only after KPI rules, data and approvals are accepted." },
];

const outcomes = [
  "Less manual chasing for updates and approvals",
  "Faster visibility into operational exceptions",
  "Clearer accountability by role and department",
  "More consistent performance conversations",
  "Fairer recognition based on controllable results",
  "A stronger foundation for future AI automation",
];

const roadmap = [
  { week: "Phase 0", title: "Diagnose and align", text: "Confirm the 90-day business goal, pilot departments, role owners, baseline data and current approval rules." },
  { week: "Week 1", title: "Build the foundation", text: "Set up roles, access, daily operating workflows and manager ownership. Resolve data gaps before scoring people." },
  { week: "Week 2", title: "Stabilise daily use", text: "Review exceptions, improve adoption and make sure the information is reliable enough for management decisions." },
  { week: "Week 3", title: "Connect goals to KPIs", text: "Configure role-specific goals for Operations, Customer Service and Revenue, then begin structured weekly reviews." },
  { week: "Week 4", title: "Review and decide", text: "Deliver an adoption and data-quality review, refine targets and decide whether rewards or leaderboards are ready." },
];

const osItems = [
  { n: "01", name: "Direction OS", question: "Where exactly is Byon going?", answer: "A 12-month direction and one practical 90-day goal." },
  { n: "02", name: "Performance OS", question: "How does each team deliver it?", answer: "Role goals, key actions, results, owners and reviews." },
  { n: "03", name: "Money OS", question: "What affects revenue and profit?", answer: "Connect commercial outcomes to operational drivers." },
  { n: "04", name: "Reward OS", question: "What happens when results improve?", answer: "Transparent recognition, Diamonds and approved rewards." },
  { n: "05", name: "Talent OS", question: "Who owns the work and needs support?", answer: "Role fit, capability gaps and development priorities." },
  { n: "06", name: "AI Execution OS", question: "What should AI handle?", answer: "Automate repeatable work with explicit human approval." },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Proposal navigation">
        <a className="brand" href="#top" aria-label="Vimigo proposal home">
          <span className="brand-mark">V</span>
          <span><strong>vimigo</strong><small>Proposal for Byon Suites</small></span>
        </a>
        <div className="nav-links">
          <a href="#opportunity">Opportunity</a>
          <a href="#solution">Solution</a>
          <a href="#roadmap">30-day plan</a>
          <a className="nav-cta" href="#next-step">Next step</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Business transformation proposal · July 2026</p>
          <h1>Turn daily operations into <em>visible, accountable performance.</em></h1>
          <p className="hero-lead">
            Vimigo can help Byon Suites connect company direction, department KPIs,
            weekly execution and fair recognition — without forcing a full-company
            rollout on Day 1.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solution">See the proposed approach</a>
            <a className="button button-ghost" href="#roadmap">View 30-day roadmap</a>
          </div>
        </div>

        <aside className="proposal-note" aria-label="Our recommendation">
          <p>Our strongest recommendation</p>
          <h2>Start with one focused 30-day implementation.</h2>
          <div className="pilot-teams">
            <span>Operations</span>
            <span>Customer Service</span>
            <span>Revenue Team</span>
          </div>
          <p className="note-copy">Prove the management rhythm and data first. Expand rewards, leaderboards and AI automation only after the foundation is trusted.</p>
        </aside>
        <div className="hero-index">01 / Proposal</div>
      </section>

      <section className="context-strip" aria-label="Byon Suites context">
        <p>Built around Byon Suites&apos; current structure</p>
        <div><strong>11</strong><span>department KPI scorecards</span></div>
        <div><strong>HQ + Sites</strong><span>multi-location operating model</span></div>
        <div><strong>1 Goal</strong><span>shared 90-day management focus</span></div>
      </section>

      <section className="section opportunity" id="opportunity">
        <div className="section-intro">
          <p className="kicker dark">The opportunity</p>
          <h2>Byon does not need another KPI file. It needs a system that makes the KPIs work.</h2>
          <p>Your existing KPI draft already defines meaningful measures across departments. The next challenge is turning those measures into a repeatable management rhythm.</p>
        </div>
        <div className="challenge-list">
          {challenges.map((challenge) => (
            <article key={challenge.number}>
              <span>{challenge.number}</span>
              <div><h3>{challenge.title}</h3><p>{challenge.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section solution" id="solution">
        <div className="solution-heading">
          <p className="kicker">What Vimigo changes</p>
          <h2>From “management chasing” to a performance-driven operating rhythm.</h2>
          <p>Vimigo is not only HR software and not only a KPI tool. It connects direction, execution, evidence, review and recognition.</p>
        </div>
        <div className="solution-flow">
          {solutionSteps.map((step, index) => (
            <article key={step.label}>
              <div className="flow-number">{String(index + 1).padStart(2, "0")}</div>
              <p>{step.label}</p>
              <h3>{step.title}</h3>
              <span>{step.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section operating-model">
        <div className="section-intro compact">
          <p className="kicker dark">The Vimigo framework</p>
          <h2>Six operating systems, one management language.</h2>
          <p>For Byon, the first priority is Direction, Performance and disciplined execution. Reward and AI come in when the data and ownership are ready.</p>
        </div>
        <div className="os-grid">
          {osItems.map((item) => (
            <article key={item.n}>
              <span>{item.n}</span>
              <h3>{item.name}</h3>
              <p>{item.question}</p>
              <small>{item.answer}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section pilot">
        <div className="pilot-copy">
          <p className="kicker">Recommended pilot</p>
          <h2>One guest journey. Three connected departments.</h2>
          <p>Start where commercial performance and guest experience meet: Revenue sets the demand and pricing direction, Operations delivers unit readiness, and Customer Service protects the guest relationship.</p>
          <div className="pilot-chain" aria-label="Recommended pilot departments">
            <span>Revenue Team</span><b>→</b><span>Operations</span><b>→</b><span>Customer Service</span>
          </div>
        </div>
        <div className="pilot-deliverables">
          <p>What management receives</p>
          <ul>
            <li>One agreed 90-day goal and pilot success criteria</li>
            <li>Role-specific KPI definitions and accountable owners</li>
            <li>A weekly review rhythm with exception follow-up</li>
            <li>A first-month adoption and data-quality report</li>
            <li>A go / adjust / expand decision for Phase 2</li>
          </ul>
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="section-intro compact">
          <p className="kicker dark">Implementation roadmap</p>
          <h2>A 30-day management implementation — not a software setup exercise.</h2>
        </div>
        <div className="timeline">
          {roadmap.map((item, index) => (
            <article key={item.week}>
              <div className="timeline-marker"><span>{index + 1}</span></div>
              <p>{item.week}</p>
              <h3>{item.title}</h3>
              <small>{item.text}</small>
            </article>
          ))}
        </div>
        <div className="roadmap-guardrail"><strong>Important:</strong> Cash rewards, negative scoring and leaderboards should not launch until management, Finance and department owners approve the rules and the underlying data is reliable.</div>
      </section>

      <section className="section outcomes">
        <div className="outcomes-heading">
          <p className="kicker">Expected business outcomes</p>
          <h2>Better management visibility first. Measurable performance improvement next.</h2>
          <p>Exact ROI and reward budgets should be confirmed only after Byon validates its baseline data.</p>
        </div>
        <div className="outcome-list">
          {outcomes.map((outcome, index) => (
            <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></div>
          ))}
        </div>
      </section>

      <section className="next-step" id="next-step">
        <p className="kicker">Recommended next step</p>
        <h2>Run a 60-minute management diagnosis before discussing software modules.</h2>
        <p>Confirm Byon&apos;s top three bottlenecks, select the pilot goal and appoint one accountable owner. From there, Vimigo can prepare the exact 30-day scope, implementation responsibilities and commercial proposal.</p>
        <div className="decision-row">
          <div><span>Decision needed</span><strong>Approve the management diagnosis</strong></div>
          <div><span>Suggested owner</span><strong>CEO / General Manager</strong></div>
          <div><span>Output</span><strong>Prioritised 30-day pilot scope</strong></div>
        </div>
        <a className="button button-light" href="#top">Review proposal from the top</a>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">V</span><strong>vimigo</strong></div>
        <p>Prepared for Byon Suites · Private discussion draft · July 2026</p>
        <p>Scope, pricing, ROI and reward mechanics are subject to management validation.</p>
      </footer>
    </main>
  );
}

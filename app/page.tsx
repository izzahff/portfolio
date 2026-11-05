import Link from "next/link";
import Songket from "./components/Songket";
import { Header, Footer } from "./components/Chrome";
import {
  contact,
  facts,
  tayyib,
  projects,
  jobs,
  education,
  certifications,
  awards,
  leadership,
  skills,
} from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="wrap hero" aria-labelledby="name">
          <div>
            <h1 id="name">
              <span>Izzah</span>
              <span className="surname">Farhanah</span>
            </h1>
            <p className="lede">
              I build web and mobile apps end to end, from the database to the screen, and I see them through to
              deployment.
            </p>
            <p className="avail">
              Software engineer intern at Cloud Connect, working on systems for Malaysian government agencies.
              I graduate from UiTM in March 2027 and can start a graduate role from April 2027, anywhere.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${contact.email}`}>Email me</a>
              <a className="btn ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <Songket />
        </section>

        <div className="wrap">
          <ul className="facts" aria-label="At a glance">
            {facts.map((f) => (
              <li key={f.label} className="fact">
                <b>{f.value}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <section id="work" className="wrap section" aria-labelledby="work-h">
          <h2 id="work-h">Work</h2>
          <div>
            <article className="feature" aria-labelledby="tayyib-h">
              <div className="feature-head">
                <h3 id="tayyib-h">
                  {tayyib.name}
                  <small>Personal project, {tayyib.meaning}</small>
                </h3>
                <span className="status">{tayyib.status}</span>
              </div>
              <p className="summary">{tayyib.summary}</p>

              <table className="ratios">
                <caption>The two rules every stock has to pass</caption>
                <thead>
                  <tr>
                    <th scope="col">Ratio</th>
                    <th scope="col">Formula</th>
                    <th scope="col" style={{ textAlign: "right" }}>Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {tayyib.ratios.map((r) => (
                    <tr key={r.name}>
                      <th scope="row">{r.name}</th>
                      <td>{r.formula}</td>
                      <td className="limit">{r.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="progress">
                <div>
                  <h4>Built and tested</h4>
                  <ul>{tayyib.built.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
                <div className="todo">
                  <h4>Up next</h4>
                  <ul>{tayyib.next.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              </div>

              <ul className="stack" aria-label="Stack">
                {tayyib.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <div className="links">
                <Link href="/work/tayyib">Read how I built it</Link>
                <a href={tayyib.repo} target="_blank" rel="noopener noreferrer">Source on GitHub</a>
              </div>
            </article>

            <ul className="projects">
              {projects.map((p) => (
                <li key={p.slug} className="project">
                  <div>
                    <h3>{p.name}</h3>
                    <p className="ctx">{p.context}</p>
                  </div>
                  <div>
                    <p className="summary">{p.summary}</p>
                    <ul className="stack" aria-label={`${p.name} stack`}>
                      {p.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                    <p className="meta">
                      {p.role}.{" "}
                      {p.note}
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="wrap section" aria-labelledby="exp-h">
          <h2 id="exp-h">Experience</h2>
          <div>
            <ol className="timeline">
              {jobs.map((j) => (
                <li key={j.org} className="job">
                  <p className="when">{j.from} to {j.to}</p>
                  <div>
                    <h3>{j.title}</h3>
                    <p className="org">{j.org}, {j.place}</p>
                    <ul className="points">{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="sub">Education</h3>
            <ol className="timeline">
              {education.map((e) => (
                <li key={e.org} className="job">
                  <p className="when">{e.from} to {e.to}</p>
                  <div>
                    <h3>{e.title}</h3>
                    <p className="org">{e.org}</p>
                    <p className="points">{e.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="recognition" className="wrap section" aria-labelledby="rec-h">
          <h2 id="rec-h">Recognition</h2>
          <div>
            <div className="cols">
              <div className="list">
                <h3>Certifications</h3>
                <ul>
                  {certifications.map((c) => (
                    <li key={c.name}><b>{c.name}</b><span>{c.issuer}, {c.date}</span></li>
                  ))}
                </ul>
              </div>
              <div className="list">
                <h3>Awards</h3>
                <ul>
                  {awards.map((a) => (
                    <li key={a.name}><b>{a.name}</b><span>{a.issuer}, {a.date}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="list wide">
              <h3>Leadership</h3>
              <ul>
                {leadership.map((l) => (
                  <li key={l.org}>
                    <b>{l.role}, {l.org}</b>
                    <span>{l.date}</span>
                    <p>{l.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="wrap section" aria-labelledby="skills-h">
          <h2 id="skills-h">Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} style={{ display: "contents" }}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="wrap contact" aria-labelledby="contact-h">
          <h2 id="contact-h">Hiring a graduate engineer for 2027?</h2>
          <p>Send me an email or a message on LinkedIn, and tell me about the role.</p>
          <div className="channels">
            <a href={`mailto:${contact.email}`}><span>Email</span>{contact.email}</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>{contact.linkedinLabel}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

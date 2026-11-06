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

function Dots({ items }: { items: string[] }) {
  return (
    <span className="dots">
      {items.map((it, i) => (
        <span key={it}>
          {i > 0 && <span className="sep" aria-hidden="true"> · </span>}
          {it}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero col" aria-labelledby="name">
          <h1 id="name">Izzah Farhanah Faizul</h1>
          <p className="pull">
            I build web and mobile apps end to end, from the database to the screen, and I see every one of them
            through to deployment.
          </p>
          <p className="plain">
            Software engineer intern at Cloud Connect. Graduating from UiTM in March 2027 and open to graduate
            software engineering roles anywhere.
          </p>
        </section>

        <section className="stage wide" aria-label="Class of 2027">
          <div className="lockup">
            <span className="lockup-box">izzah</span>
            <span className="lockup-class">class of</span>
            <span className="lockup-year">&rsquo;27</span>
            <span className="lockup-role">Graduate software engineer</span>
          </div>
          <Songket />
        </section>

        <section className="col status" aria-labelledby="avail">
          <h2 id="avail" className="loud">Available from April 2027</h2>
          <p className="plain">
            Open to relocation. Email is the fastest way to reach me.
          </p>
          <div className="boxes">
            <a className="box" href={`mailto:${contact.email}`}>Email</a>
            <a className="box" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="box" href={contact.resume} download>Resume (PDF)</a>
          </div>
        </section>

        <section className="wide" aria-label="At a glance">
          <ul className="facts">
            {facts.map((f) => (
              <li key={f.label}>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="wide block" aria-labelledby="work-h">
          <h2 id="work-h" className="head">Work</h2>

          <article className="feature" aria-labelledby="tayyib-h">
            <div className="feature-copy">
              <p className="tag">Now building</p>
              <h3 id="tayyib-h">{tayyib.name}</h3>
              <p className="meaning">Personal project. {tayyib.meaning}.</p>
              <p className="summary"><strong>{tayyib.oneLiner}</strong></p>
              <p className="summary">{tayyib.summary}</p>
              <p className="stack-line"><Dots items={tayyib.stack} /></p>
              <div className="boxes left">
                <a className="box inv" href={tayyib.live} target="_blank" rel="noopener noreferrer">Live demo</a>
                <Link className="box inv" href="/work/tayyib">Case study</Link>
                <a className="box inv" href={tayyib.repo} target="_blank" rel="noopener noreferrer">Source</a>
              </div>
            </div>
            <div className="feature-data">
              <table className="ratios">
                <caption>Every stock has to pass both</caption>
                <tbody>
                  {tayyib.ratios.map((r) => (
                    <tr key={r.name}>
                      <th scope="row">
                        {r.name}
                        <span>{r.plain}</span>
                      </th>
                      <td>{r.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ratios-note">{tayyib.disclaimer}</p>
              <div className="progress">
                <div>
                  <h4>Built and tested</h4>
                  <ul>{tayyib.built.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
                <div>
                  <h4>Up next</h4>
                  <ul className="todo">{tayyib.next.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              </div>
            </div>
          </article>

          <ul className="tiles">
            {projects.map((p) => (
              <li key={p.slug} className="tile">
                <div className="plate">
                  <h3>{p.name}</h3>
                </div>
                <p className="ctx">{p.context}. {p.role}.</p>
                <p className="summary">{p.summary}</p>
                <p className="stack-line"><Dots items={p.stack} /></p>
                {p.note && <p className="note">{p.note}</p>}
                {p.links.map((l) => (
                  <a key={l.href} className="more" href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <section id="timeline" className="col block" aria-labelledby="timeline-h">
          <h2 id="timeline-h" className="head">Timeline:</h2>
          <ol className="dates">
            {jobs.map((j) => (
              <li key={j.org}>
                <b>{j.org}</b>
                <span className="role">{j.title}, {j.place}</span>
                <Dots items={[j.from, j.to]} />
                {j.points.length > 1 ? (
                  <details>
                    <summary>What I did there</summary>
                    <ul className="points">{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </details>
                ) : (
                  <span className="one">{j.points[0]}</span>
                )}
              </li>
            ))}
            {education.map((e) => (
              <li key={e.org}>
                <b>{e.org}</b>
                <span className="role">{e.title}</span>
                <Dots items={[e.from, e.to]} />
                <span className="one">{e.detail}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="recognition" className="col block" aria-labelledby="rec-h">
          <h2 id="rec-h" className="head">Recognition</h2>
          <h3 className="sub">Certifications:</h3>
          <ul className="dates">
            {certifications.map((c) => (
              <li key={c.name}>
                <b>{c.name}</b>
                <Dots items={[c.issuer, c.date]} />
              </li>
            ))}
          </ul>
          <h3 className="sub">Awards:</h3>
          <ul className="dates">
            {awards.map((a) => (
              <li key={a.name}>
                <b>{a.name}</b>
                <Dots items={[a.issuer, a.date]} />
              </li>
            ))}
          </ul>
          <h3 className="sub">Leadership:</h3>
          <ul className="dates">
            {leadership.map((l) => (
              <li key={l.org}>
                <b>{l.role}, {l.org}</b>
                <Dots items={[l.date]} />
                <span className="one">{l.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="toolkit" className="col block" aria-labelledby="toolkit-h">
          <h2 id="toolkit-h" className="head">Toolkit:</h2>
          <ul className="dates">
            {skills.map((s) => (
              <li key={s.group}>
                <b>{s.group}</b>
                <Dots items={s.items.split(", ")} />
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="col block contact" aria-labelledby="contact-h">
          <h2 id="contact-h" className="loud big">Hiring a graduate engineer for 2027?</h2>
          <p className="plain">Send me an email or a message on LinkedIn, and tell me about the role.</p>
          <a className="mail" href={`mailto:${contact.email}`}>{contact.email}</a>
          <div className="boxes">
            <a className="box" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="box" href={contact.resume} download>Resume (PDF)</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

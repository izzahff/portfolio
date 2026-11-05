import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../../components/Chrome";
import { tayyib } from "../../data";

export const metadata: Metadata = {
  title: "Tayyib",
  description: "How Izzah Farhanah is building Tayyib, a Shariah stock screener in Python with an audit trail for every decision.",
};

const steps = [
  { name: "Resolve", detail: "Load the S&P 500 list from a CSV checked into the repo" },
  { name: "Fetch", detail: "Pull balance sheet and income figures from the FMP API" },
  { name: "Screen", detail: "Apply both ratios and attach fixed reason strings" },
  { name: "Persist", detail: "Write every result, failures included, to PostgreSQL" },
];

export default function TayyibCase() {
  return (
    <>
      <Header />
      <main id="main">
        <article>
          <div className="col case">
            <Link href="/#work" className="back">Back to all work</Link>
            <h1>Tayyib</h1>
            <p className="lede">
              A Shariah stock screener that records which rule each stock broke, and by how much.
            </p>
            <p className="avail">
              Personal project. Solo build in Python, started August 2026 and still in progress.{" "}
              <a href={tayyib.repo} target="_blank" rel="noopener noreferrer">Source on GitHub</a>.
            </p>
          </div>

          <section className="section" aria-labelledby="why-h">
            <h2 id="why-h">Why I built it</h2>
            <div className="prose">
              <p>
                Most Shariah screeners give a pass or a fail and stop there. I wanted one that shows which rule a
                stock broke and the numbers behind it, so you can check the call yourself.
              </p>
              <p>
                So Tayyib classifies each ticker as compliant, non-compliant or unscreened, and it never guesses.
                If the data is missing, the stock stays unscreened and the record says which figure was missing.
                It sends alerts only. You still place every trade yourself.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="how-h">
            <h2 id="how-h">How a run works</h2>
            <div>
              <ol className="flow">
                {steps.map((s) => (
                  <li key={s.name}><b>{s.name}</b><span>{s.detail}</span></li>
                ))}
              </ol>
              <div className="prose" style={{ marginTop: 40 }}>
                <p>
                  One bad ticker can't sink a run. If the API fails for one stock, the pipeline records that stock
                  as unscreened with the reason <code>financial data fetch failed</code> and moves on to the next.
                  A pipeline-wide failure marks the whole run as failed, so I never mistake half a run for a full one.
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="method-h">
            <h2 id="method-h">The method, and where I changed it</h2>
            <div>
              <div className="panel">
                <table className="ratios" style={{ marginTop: 0 }}>
                  <caption>Two ratios, measured against total assets</caption>
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
              </div>
              <div className="prose" style={{ marginTop: 32 }}>
                <p>
                  AAOIFI Shariah Standard No. 21 sets three ratios against market capitalisation. I use two, against
                  total assets. Market cap swings too much to compute reliably from the free data tier, and that tier
                  does not expose interest-bearing deposits cleanly. I folded that ratio into the income ratio and
                  wrote the deviation into the spec, with the reasons, so anyone reading the results knows.
                </p>
                <p>
                  A value equal to the limit passes. The spec states that boundary rule outright, so a ratio of
                  exactly 30% gets the same answer every run.
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="spec-h">
            <h2 id="spec-h">Spec first, then code</h2>
            <div className="prose">
              <p>
                I write every capability as an OpenSpec proposal before any code exists. I review the requirements,
                lock them, then build to them. Four changes have gone through that cycle and sit in the archive with
                their full review history. The repo holds 48 tests across five test modules, and the screening module
                has full coverage.
              </p>
              <h3>Built and tested</h3>
              <ul className="ticks">
                {tayyib.built.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <h3>Up next</h3>
              <p>{tayyib.next.join(", ")}. The ranking step will score compliant stocks on momentum, and the weekly
                Telegram alert will list new entries, exits and any failed runs.</p>
              <h3>Stack</h3>
              <p>{tayyib.stack.join(", ")}.</p>
            </div>
          </section>

          <div>
            <p className="disclaimer">
              Tayyib is a personal engineering project that follows a documented, cited method. It is not a Shariah
              board ruling or financial advice.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

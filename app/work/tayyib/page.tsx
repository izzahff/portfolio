import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../../components/Chrome";
import { tayyib } from "../../data";

export const metadata: Metadata = {
  title: "Tayyib",
  description: "How Izzah Farhanah built Tayyib, which checks S&P 500 companies against Shariah screening rules and shortlists the ten with the strongest momentum each week.",
};

const steps = [
  { name: "Fetch", detail: "Pull balance sheet, income and price data from the FMP API" },
  { name: "Screen", detail: "Run both checks and attach a fixed reason to every result" },
  { name: "Rank", detail: "Order the passing stocks by their six-month return" },
  { name: "Report", detail: "Save every decision, update the dashboard, send the Telegram summary" },
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
              {tayyib.oneLiner}
            </p>
            <p className="avail">
              Personal project. Solo build, started August 2026 and still in progress.
            </p>
            <div className="boxes">
              <a className="box" href={tayyib.live} target="_blank" rel="noopener noreferrer">Live demo</a>
              <a className="box" href={tayyib.repo} target="_blank" rel="noopener noreferrer">Source on GitHub</a>
            </div>
          </div>

          <section className="section" aria-labelledby="simple-h">
            <h2 id="simple-h">In 30 seconds</h2>
            <div className="prose">
              <p>
                Many Muslims avoid investing in companies that rely heavily on borrowing or earn money from interest.
                An international standard, AAOIFI, turns this into simple checks. Tayyib uses two of them.
              </p>
              <ul className="ticks" style={{ marginTop: 16 }}>
                {tayyib.ratios.map((r) => (
                  <li key={r.name}><strong>{r.name}.</strong> {r.plain}</li>
                ))}
              </ul>
              <p style={{ marginTop: 16 }}>
                Tayyib pulls real company financial data, runs both checks automatically, ranks the companies that
                pass by how well their stock has done over six months, and records every decision. You can see
                exactly why a stock passed or failed.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="why-h">
            <h2 id="why-h">Why I built it</h2>
            <div className="prose">
              <p>
                Most Shariah screeners give a pass or a fail and stop there. I wanted one that shows which rule a
                stock broke and the numbers behind it, so you can check the call yourself.
              </p>
              <p>
                So Tayyib labels each stock compliant, non-compliant or unscreened, and it never guesses. If the data
                is missing, the stock stays unscreened and the record says which figure was missing. It sends alerts
                only. You still place every trade yourself.
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
                  A GitHub Actions job is scheduled to run the whole pipeline every Monday at 9am Malaysia time. One bad ticker can't
                  sink a run. If the API fails for one stock, the pipeline records that stock as unscreened with the
                  reason <code>financial data fetch failed</code> and moves on. A pipeline-wide failure marks the whole
                  run as failed and sends a Telegram alert, so I never mistake half a run for a full one.
                </p>
                <p>
                  The free data plan covers at least 41 S&amp;P 500 companies so far, so the weekly run screens that sample for now.
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="method-h">
            <h2 id="method-h">The method, and where I changed it</h2>
            <div>
              <div className="panel">
                <table className="ratios" style={{ marginTop: 0 }}>
                  <caption>Two ratios, with the formulas Tayyib uses</caption>
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
                  AAOIFI Shariah Standard No. 21 sets three ratios against market capitalisation. I use two, with debt
                  measured against total assets. Market cap swings too much to compute reliably from the free data
                  tier, and that tier does not expose interest-bearing deposits cleanly. I folded that ratio into the
                  income ratio and wrote the deviation into the spec, with the reasons, so anyone reading the results
                  knows.
                </p>
                <p>
                  The first live run taught me something. It passed only 1 of 25 stocks, because I had divided total
                  liabilities by total assets. That counted supplier bills and deferred revenue as debt, and called
                  Apple 72% indebted. AAOIFI counts only interest-bearing debt, so I wrote a new spec, switched the
                  numerator to total debt. Reading the output again, I found a second bug. A non-operating loss
                  could cancel out interest income, which let one stock score −21.6% and pass. Now each income figure
                  counts only when positive. The next run applies the corrected rules.
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
                lock them, then build to them. Nine changes have gone through that cycle and sit in the archive with
                their full review history. The repo holds 83 tests, and the screening module has full coverage.
              </p>
              <h3>Built and tested</h3>
              <ul className="ticks">
                {tayyib.built.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <h3>Up next</h3>
              <ul className="ticks">
                {tayyib.next.map((b) => <li key={b}>{b}</li>)}
              </ul>
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

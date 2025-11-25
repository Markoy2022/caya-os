
import React, { useMemo, useState } from "react";


const ACCENT = "#00FF95";


export default function FCFS() {
  const [name, setName] = useState("");
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [processes, setProcesses] = useState([]);
  const [gantt, setGantt] = useState([]);
  const [results, setResults] = useState([]);
  const [averages, setAverages] = useState(null);
  const [error, setError] = useState("");

  // Add a process entry
  const addProcess = () => {
    setError("");

    const at = arrival === "" ? NaN : Number(arrival);
    const bt = burst === "" ? NaN : Number(burst);
    const trimmed = (name ?? "").trim();

    if (!trimmed) {
      setError("Please enter a process name (e.g. P1).");
      return;
    }
    if (!Number.isFinite(bt) || bt <= 0) {
      setError("Burst Time (BT) must be a positive number.");
      return;
    }
    if (!Number.isFinite(at) || at < 0) {
      setError("Arrival Time (AT) must be 0 or greater.");
      return;
    }

    const newProc = {
      id: crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      name: trimmed,
      arrival: at,
      burst: bt,
    };

    setProcesses((p) => [...p, newProc]);
    setName("");
    setArrival("");
    setBurst("");
  };

  const deleteProcess = (id) => {
    setProcesses((p) => p.filter((x) => x.id !== id));
    // reset visualized outputs when processes change
    setResults([]);
    setGantt([]);
    setAverages(null);
  };

  const resetAll = () => {
    setName("");
    setArrival("");
    setBurst("");
    setProcesses([]);
    setResults([]);
    setGantt([]);
    setAverages(null);
    setError("");
  };

  // FCFS compute including idle blocks
  const visualize = () => {
    setError("");
    if (processes.length === 0) {
      setError("Add at least one process to visualize.");
      return;
    }

    const queue = [...processes].sort((a, b) => a.arrival - b.arrival);

    let current = 0;
    const out = [];
    const gant = [];

    queue.forEach((p) => {
      if (p.arrival > current) {
        // Idle block
        gant.push({
          id: null,
          label: "Idle",
          start: current,
          end: p.arrival,
        });
        current = p.arrival;
      }

      const start = Math.max(current, p.arrival);
      const end = start + p.burst;
      const tat = end - p.arrival;
      const wt = start - p.arrival;

      out.push({
        id: p.id,
        name: p.name,
        arrival: p.arrival,
        burst: p.burst,
        start,
        completion: end,
        turnaround: tat,
        waiting: wt,
      });

      gant.push({
        id: p.id,
        label: p.name,
        start,
        end,
      });

      current = end;
    });

    const avgWaiting = out.reduce((s, x) => s + x.waiting, 0) / out.length;
    const avgTurnaround = out.reduce((s, x) => s + x.turnaround, 0) / out.length;

    setResults(out);
    setGantt(gant);
    setAverages({ avgWaiting, avgTurnaround });
  };

  // Gantt scaling helper (used for relative bar widths)
  const totalSpan = useMemo(() => {
    if (!gantt || gantt.length === 0) return 1;
    const start = Math.min(...gantt.map((b) => b.start));
    const end = Math.max(...gantt.map((b) => b.end));
    return Math.max(1, end - start);
  }, [gantt]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#061016] to-[#071018] py-12 px-6 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header / Intro with decorative image */}
        <header className="grid lg:grid-cols-3 gap-8 items-center">
          <div
            className="col-span-1 rounded-3xl p-6 bg-white/4 backdrop-blur-xl border border-white/6 shadow-2xl"
            style={{
              boxShadow: "0 10px 40px rgba(0,255,149,0.06)",
            }}
          >
           
            <div className="mt-4">
              <p className="text-xs text-slate-300">FCFS Visualizer</p>
              <h2 className="text-xl lg:text-2xl font-semibold text-white mt-1">First-Come, First-Served</h2>
              <p className="mt-2 text-sm text-slate-300">Add processes (AT/BT), then visualize scheduling. The UI uses glass cards and neon-green accents to match your portfolio's style.</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl p-6 bg-white/4 backdrop-blur-xl border border-white/6 shadow-lg">
              <h3 className="text-lg text-slate-200 font-medium mb-4">Add Process</h3>

              <div className="flex flex-col md:flex-row gap-3 items-center">
                <input
                  placeholder="Process name (e.g. P1)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 rounded-xl px-4 py-3 bg-transparent border border-white/6 placeholder:text-slate-400 focus:outline-none"
                />

                <input
                  placeholder="Arrival Time (AT)"
                  type="number"
                  min="0"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="w-40 rounded-xl px-4 py-3 bg-transparent border border-white/6 placeholder:text-slate-400 focus:outline-none"
                />

                <input
                  placeholder="Burst Time (BT)"
                  type="number"
                  min="1"
                  value={burst}
                  onChange={(e) => setBurst(e.target.value)}
                  className="w-40 rounded-xl px-4 py-3 bg-transparent border border-white/6 placeholder:text-slate-400 focus:outline-none"
                />

                <button
                  onClick={addProcess}
                  className="ml-2 rounded-2xl px-5 py-3 bg-[#0b2f22] hover:bg-[#08331f] text-white font-semibold"
                  style={{
                    boxShadow: `0 6px 18px ${ACCENT}22, inset 0 -2px 10px ${ACCENT}20`,
                    border: `1px solid ${ACCENT}20`,
                  }}
                >
                  + Add Task
                </button>
              </div>

              {error && (
                <div className="mt-3 rounded-md bg-red-900/20 border border-red-700/20 p-3 text-sm text-red-200">
                  {error}
                </div>
              )}
            </div>

            {/* Process List (floating glass panels) */}
            <div className="rounded-3xl p-6 bg-white/3 backdrop-blur-xl border border-white/6 shadow-lg">
              <div className="flex items-center justify-between">
                <h4 className="text-sm text-slate-300">Process Queue</h4>
                <div className="text-xs text-slate-400">Total: {processes.length}</div>
              </div>

              <div className="mt-4 grid gap-3">
                {processes.length === 0 ? (
                  <div className="text-sm text-slate-400">No processes added. Use the inputs above to create tasks.</div>
                ) : (
                  processes.map((p, idx) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between rounded-xl p-3 bg-white/3 border border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-black"
                          style={{ background: "#e6fff6", color: "#003528" }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{p.name}</div>
                          <div className="flex gap-2 mt-1 text-xs">
                            <span className="px-2 py-0.5 rounded-full bg-[#001f18]/30 text-[#00ff95] border border-[#00ff95]/10">AT: <strong className="ml-1 text-white">{p.arrival}</strong></span>
                            <span className="px-2 py-0.5 rounded-full bg-[#1a0014]/30 text-[#ff7aa2] border border-[#ff7aa2]/10">BT: <strong className="ml-1 text-white">{p.burst}</strong></span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => deleteProcess(p.id)}
                          className="text-sm text-red-400 hover:text-red-500 px-3 py-1 rounded-md"
                          title="Delete"
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex gap-4">
                <button
                  onClick={visualize}
                  className="flex-1 rounded-2xl px-6 py-4 text-black font-semibold"
                  style={{
                    background: "linear-gradient(90deg,#00ff95,#00c28a)",
                    boxShadow: `0 10px 30px ${ACCENT}20`,
                  }}
                >
                  ▶ Visualize FCFS
                </button>

                <button
                  onClick={resetAll}
                  className="flex-1 rounded-2xl px-6 py-4 bg-white/6 text-white font-semibold border border-white/6 hover:bg-white/8"
                >
                  ↺ Reset All
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Gantt Chart - big glass card */}
        <section className="rounded-3xl p-6 bg-white/4 backdrop-blur-xl border border-white/6 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">Gantt Chart</h3>
          {gantt.length === 0 ? (
            <div className="py-10 text-center text-slate-400">No timeline yet. Click <span className="font-medium text-white">Visualize FCFS</span> to generate the Gantt chart.</div>
          ) : (
            <div className="overflow-x-auto -mx-2">
              <div className="flex items-end gap-3 px-2 py-4">
                {gantt.map((b, i) => {
                  const span = Math.max(0.25, (b.end - b.start) / totalSpan); // relative
                  const baseWidth = Math.round(span * 1100); // base px width (scaled)
                  const isIdle = b.id === null;
                  return (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`rounded-t-xl px-6 py-6 text-sm font-semibold text-center shadow-inner`}
                        style={{
                          minWidth: `${Math.max(80, baseWidth)}px`,
                          background: isIdle ? "linear-gradient(180deg,#0b1322,#071018)" : `linear-gradient(90deg, ${ACCENT}, #00c28a)`,
                          color: isIdle ? "#9aa6b2" : "#02130b",
                          border: isIdle ? "1px solid rgba(255,255,255,0.03)" : `1px solid ${ACCENT}55`,
                          boxShadow: isIdle ? "none" : `0 10px 30px ${ACCENT}20`,
                        }}
                      >
                        {isIdle ? "Idle" : b.label}
                      </div>
                      <div className="w-full rounded-b-lg bg-white/6 text-xs font-mono text-slate-300 border border-white/5 px-3 py-2 text-center">
                        {b.start} → {b.end}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Results + Stats */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl p-6 bg-white/4 backdrop-blur-xl border border-white/6 shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Process Results</h3>

            {results.length === 0 ? (
              <div className="text-slate-400">No results — click Visualize to compute times.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-slate-300 text-xs">
                    <tr>
                      <th className="p-3 text-left">#</th>
                      <th className="p-3 text-left">Process</th>
                      <th className="p-3 text-center">AT</th>
                      <th className="p-3 text-center">BT</th>
                      <th className="p-3 text-center">Start</th>
                      <th className="p-3 text-center">Completion</th>
                      <th className="p-3 text-center">TAT</th>
                      <th className="p-3 text-center">WT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, idx) => (
                      <tr key={r.id} className="border-t border-white/5">
                        <td className="p-3">{idx + 1}</td>
                        <td className="p-3 font-medium">{r.name}</td>
                        <td className="p-3 text-center">{r.arrival}</td>
                        <td className="p-3 text-center">{r.burst}</td>
                        <td className="p-3 text-center">{r.start}</td>
                        <td className="p-3 text-center">{r.completion}</td>
                        <td className="p-3 text-center">{r.turnaround}</td>
                        <td className="p-3 text-center">{r.waiting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <aside className="rounded-3xl p-6 bg-white/4 backdrop-blur-xl border border-white/6 shadow-lg">
            <h4 className="text-sm text-slate-300">Statistics</h4>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl p-4" style={{ background: "linear-gradient(180deg, rgba(0,255,149,0.06), rgba(0,255,149,0.02))", border: "1px solid rgba(0,255,149,0.09)" }}>
                <p className="text-xs text-slate-300">Average Waiting Time</p>
                <div className="text-2xl font-bold" style={{ color: ACCENT }}>
                  {averages ? averages.avgWaiting.toFixed(2) : "—"}
                </div>
              </div>

              <div className="rounded-xl p-4" style={{ background: "linear-gradient(180deg, rgba(255,122,162,0.03), rgba(255,122,162,0.01))", border: "1px solid rgba(255,122,162,0.06)" }}>
                <p className="text-xs text-slate-300">Average Turnaround Time</p>
                <div className="text-2xl font-bold text-pink-300">
                  {averages ? averages.avgTurnaround.toFixed(2) : "—"}
                </div>
              </div>

              <div className="mt-2 text-xs text-slate-400">
                <p>Tip: Add multiple processes with varying arrival times to see idle gaps and how FCFS schedules them.</p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

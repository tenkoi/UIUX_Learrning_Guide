/* ============================================================
   APP v2 — rendering, quizzes, progress, search
   State is in-memory (no browser storage in this environment).
   ============================================================ */

const state = {
  done: new Set(),        // completed module ids
  milestones: new Set(),
  answers: {},            // "m1-0": chosenIndex
  filter: ""              // search term
};

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Search URL that always resolves. sp filter = uploaded this year. */
function ytSearch(q, thisYear) {
  const base = "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
  return thisYear ? base + "&sp=CAISBAgEEAE%253D" : base;
}

/* ============================================================
   MODULES
   ============================================================ */
function renderModules() {
  const f = state.filter.toLowerCase();
  const list = CURRICULUM.filter(m => {
    if (!f) return true;
    return (m.title + " " + m.blurb + " " + m.kicker + " " +
            m.learn.join(" ") + " " + m.enterprise.join(" ") + " " +
            m.outcomes.join(" ")).toLowerCase().includes(f);
  });

  $('#matchcount').textContent = f
    ? `${list.length} of ${CURRICULUM.length} modules match "${state.filter}"`
    : "";

  if (!list.length) {
    $('#modlist').innerHTML = `<p class="nores">No modules match that. Try "table", "token", "accessibility", or "ERP".</p>`;
    return;
  }

  $('#modlist').innerHTML = list.map(m => {
    const i = CURRICULUM.indexOf(m);
    const done = state.done.has(m.id);
    return `
  <article class="module${done ? ' is-done' : ''}" data-phase="${m.phase}" id="${m.id}">
    <div class="module-head">
      <button class="mod-toggle" aria-expanded="false" aria-controls="${m.id}-body" data-toggle="${m.id}">
        <span class="mod-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="mod-title">
          <h3>${m.title}</h3>
          <span class="mod-meta">${m.kicker} · ${m.weeks} · ${m.hours} · ${m.quiz.length} questions</span>
        </span>
        <span class="chev" aria-hidden="true">▾</span>
      </button>
      <button class="mod-check" data-done="${m.id}" aria-pressed="${done}"
              aria-label="Mark ${m.title} complete" title="Mark complete">${done ? '✓' : ''}</button>
    </div>

    <div class="module-body" id="${m.id}-body">
      <p class="mod-blurb">${m.blurb}</p>

      <section class="outcomes">
        <h4>By the end you can</h4>
        <ul>${m.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
      </section>

      <div class="cols">
        <div class="col">
          <h4>What you learn</h4>
          <ul>${m.learn.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>
        <div class="col">
          <h4>Enterprise reality</h4>
          <ul>${m.enterprise.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>
      </div>

      <p class="practice"><b>Try this week</b><span>${m.practice}</span></p>
      <p class="deliverable"><b>Deliverable</b><span>${m.deliverable}</span></p>

      <section class="vidblock">
        <h4>Watch — 3 curated sources</h4>
        <p class="vidnote">Each card says who to learn from and why. Channel links open the creator directly; search links are pre-scoped to that creator and filtered to recent uploads. Everything opens in a new tab.</p>
        <div class="vidgrid">${m.videos.map((v, vi) => renderVideo(v, m.id, vi)).join('')}</div>
        ${m.extra ? `
          <div class="extras">
            <h5>Also worth your time</h5>
            <div class="artlist">
              ${m.extra.map(e => `<a class="artlink" href="${e.u}" target="_blank" rel="noopener"><strong>${e.t}</strong><span>${e.s} ↗</span></a>`).join('')}
            </div>
          </div>` : ''}
      </section>

      <section class="artblock">
        <h4>Read</h4>
        <div class="artlist">
          ${m.articles.map(a => `<a class="artlink" href="${a.u}" target="_blank" rel="noopener"><strong>${a.t}</strong><span>${a.s} ↗</span></a>`).join('')}
        </div>
      </section>

      <section class="quizblock" data-quiz="${m.id}">
        <div class="quiz-top">
          <h4>Knowledge check</h4>
          <span class="quiz-score" id="score-${m.id}">0 / ${m.quiz.length}</span>
        </div>
        ${m.quiz.map((q, qi) => renderQ(m.id, qi, q)).join('')}
        <button class="btn btn-sm" data-reset="${m.id}">Reset this quiz</button>
      </section>
    </div>
  </article>`;
  }).join('');

  // restore answered questions
  Object.entries(state.answers).forEach(([key, oi]) => paintAnswer(key, oi));
  CURRICULUM.forEach(m => updateScore(m.id));
}

function renderVideo(v, mid, vi) {
  const ch  = v.ch;
  const sup = (typeof SUPPLIED !== 'undefined') ? SUPPLIED[`${mid}-${vi}`] : null;

  // Title: supplied video title wins, since it names the actual video.
  const title = sup ? sup.t : v.t;
  const badge = sup
    ? `<span class="vpick">Selected</span>`
    : '';
  const srcNote = sup
    ? (sup.s ? `<span class="vsrc">${sup.s}</span>` : '')
    : (v.direct ? `<span class="vsrc">${v.direct.s}</span>` : '');

  let primary, secondary;
  if (sup) {
    primary = `<a class="vbtn vbtn-go" href="https://www.youtube.com/watch?v=${sup.id}" target="_blank" rel="noopener">Watch ↗</a>`;
    secondary = ch
      ? `<a class="vbtn" href="${ch.u}" target="_blank" rel="noopener">More like this ↗</a>`
      : `<a class="vbtn" href="${ytSearch(v.q || title, true)}" target="_blank" rel="noopener">More like this ↗</a>`;
  } else if (v.direct) {
    primary = `<a class="vbtn vbtn-go" href="${v.direct.u}" target="_blank" rel="noopener">Open ${v.direct.u.includes('playlist') ? 'playlist' : 'video'} ↗</a>`;
    secondary = ch ? `<a class="vbtn" href="${ch.u}" target="_blank" rel="noopener">Channel ↗</a>` : '';
  } else {
    primary = `<a class="vbtn vbtn-go" href="${ytSearch(v.q, true)}" target="_blank" rel="noopener">Find recent ↗</a>`;
    secondary = `<a class="vbtn" href="${ytSearch(v.q, false)}" target="_blank" rel="noopener">All results ↗</a>`;
  }

  // Topic line — what this slot is for, kept when a supplied title replaces it.
  const topic = sup && sup.t !== v.t ? `<span class="vtopic">Covers: ${v.t}</span>` : '';

  const chLine = ch
    ? `<a class="vchan" href="${ch.u}" target="_blank" rel="noopener">${ch.n} ↗</a><span class="vchanwhy">${ch.w}</span>`
    : `<span class="vchan vchan-none">Search across sources — no single channel owns this topic</span>`;

  return `
  <div class="vid${sup ? ' has-pick' : ''}">
    <strong class="vtitle">${title}</strong>
    ${badge}${srcNote}
    ${topic}
    <div class="vchanbox">${chLine}</div>
    <p class="vwhy"><b>Why this</b> ${v.why}</p>
    <div class="vid-actions">${primary}${secondary}</div>
  </div>`;
}

function renderQ(mid, qi, q) {
  const L = ['A', 'B', 'C', 'D'];
  return `
  <div class="q" data-q="${mid}-${qi}">
    <p class="q-text">${qi + 1}. ${q.q}</p>
    <div class="q-opts">
      ${q.a.map((opt, oi) => `
        <button class="opt" data-pick="${mid}|${qi}|${oi}">
          <span class="letter">${L[oi]}</span><span>${opt}</span>
        </button>`).join('')}
    </div>
    <div class="q-why" id="why-${mid}-${qi}"><b>Why</b>${q.why}</div>
  </div>`;
}

function paintAnswer(key, oi) {
  const [mid, qi] = key.split('-');
  const mod = CURRICULUM.find(x => x.id === mid);
  if (!mod) return;
  const box = $(`[data-q="${key}"]`);
  if (!box) return;
  const correct = mod.quiz[+qi].correct;
  $$('.opt', box).forEach((b, bi) => {
    b.disabled = true;
    if (bi === correct) b.classList.add('correct');
    else if (bi === oi) b.classList.add('wrong');
  });
  $(`#why-${key}`).classList.add('show');
}

/* ============================================================
   OTHER SECTIONS
   ============================================================ */
function renderStatic() {
  $('#pfgrid').innerHTML = PORTFOLIO.map(p => `
    <div class="card pf-card">
      <div class="num">${p.n}</div>
      <span class="tagline">${p.shows}</span>
      <h3>${p.t}</h3><p>${p.s}</p>
    </div>`).join('');

  $('#csteps').innerHTML = CASESTUDY.map((s, i) =>
    `<li><b>${String(i + 1).padStart(2, '0')}</b> ${s}</li>`).join('');

  $('#books').innerHTML = BOOKS.map(b => `
    <div class="book"><h4>${b.t}</h4><div class="auth">${b.a}</div><p>${b.w}</p></div>`).join('');

  $('#tbody').innerHTML = TEACHING.map(t =>
    `<tr><td>${t.w}</td><td><strong>${t.f}</strong></td><td>${t.d}</td></tr>`).join('');

  $('#assignlist').innerHTML = ASSIGNMENTS.map(a => `<li>${a}</li>`).join('');

  $('#milestones').innerHTML = MILESTONES.map((m, i) => `
    <button class="ck" data-ms="${i}" aria-pressed="false">
      <span class="box" aria-hidden="true"></span><span class="lbl">${m}</span>
    </button>`).join('');

  $('#pitfalls').innerHTML = PITFALLS.map(p => {
    const mod = CURRICULUM.find(m => m.id === p.m);
    return `<div class="pitfall">
      <h4>${p.t}</h4><p>${p.d}</p>
      <a href="#${p.m}" data-jump="${p.m}">Covered in ${mod ? mod.title : p.m} →</a>
    </div>`;
  }).join('');

  const tags = [...new Set(GLOSSARY.map(g => g.tag))];
  $('#gtags').innerHTML = `<button class="gtag on" data-gtag="all">All</button>` +
    tags.map(t => `<button class="gtag" data-gtag="${t}">${t}</button>`).join('');
  renderGlossary('all');

  // channel directory
  const seen = new Set();
  const chans = Object.values(CHANNELS).filter(c => !seen.has(c.u) && seen.add(c.u));
  $('#chandir').innerHTML = chans.map(c => `
    <a class="chan" href="${c.u}" target="_blank" rel="noopener">
      <strong>${c.n} ↗</strong><span>${c.w}</span>
    </a>`).join('');
}

function renderGlossary(tag) {
  const items = tag === 'all' ? GLOSSARY : GLOSSARY.filter(g => g.tag === tag);
  $('#glossary').innerHTML = items.map(g => `
    <div class="gitem"><span class="gtagpill">${g.tag}</span>
      <h4>${g.t}</h4><p>${g.d}</p></div>`).join('');
}

/* ============================================================
   PROGRESS
   ============================================================ */
const TOTAL_Q = CURRICULUM.reduce((n, m) => n + m.quiz.length, 0);

function correctCount() {
  let n = 0;
  CURRICULUM.forEach(m => m.quiz.forEach((q, qi) => {
    if (state.answers[`${m.id}-${qi}`] === q.correct) n++;
  }));
  return n;
}

function updateScore(mid) {
  const m = CURRICULUM.find(x => x.id === mid);
  const el = $(`#score-${mid}`);
  if (!m || !el) return;
  let n = 0, answered = 0;
  m.quiz.forEach((q, qi) => {
    const v = state.answers[`${mid}-${qi}`];
    if (v !== undefined) { answered++; if (v === q.correct) n++; }
  });
  el.textContent = `${n} / ${m.quiz.length}`;
  el.classList.toggle('pass', n === m.quiz.length && answered === m.quiz.length);
  el.classList.toggle('part', answered > 0 && n < m.quiz.length);
}

function updateProgress() {
  const q = correctCount();
  const mods = state.done.size;
  const ms = state.milestones.size;
  const pct = Math.round(((q / TOTAL_Q) * 0.5 + (mods / CURRICULUM.length) * 0.3 + (ms / MILESTONES.length) * 0.2) * 100);

  $('#progress').textContent = `${pct}%`;
  const ring = $('#ring');
  if (ring) {
    const c = 2 * Math.PI * 15;
    ring.style.strokeDasharray = `${(pct / 100) * c} ${c}`;
  }
  $('#pdetail').innerHTML =
    `<b>${mods}</b>/${CURRICULUM.length} modules · <b>${q}</b>/${TOTAL_Q} correct · <b>${ms}</b>/${MILESTONES.length} milestones`;
}

/* ============================================================
   EVENTS
   ============================================================ */
document.addEventListener('click', e => {

  const tog = e.target.closest('[data-toggle]');
  if (tog) {
    const mod = tog.closest('.module');
    const open = mod.classList.toggle('open');
    tog.setAttribute('aria-expanded', open);
    return;
  }

  const dn = e.target.closest('[data-done]');
  if (dn) {
    const id = dn.dataset.done;
    if (state.done.has(id)) { state.done.delete(id); dn.textContent = ''; dn.setAttribute('aria-pressed', 'false'); }
    else { state.done.add(id); dn.textContent = '✓'; dn.setAttribute('aria-pressed', 'true'); }
    dn.closest('.module').classList.toggle('is-done', state.done.has(id));
    updateProgress();
    return;
  }

  const pick = e.target.closest('[data-pick]');
  if (pick) {
    const [mid, qi, oi] = pick.dataset.pick.split('|');
    const key = `${mid}-${qi}`;
    if (state.answers[key] !== undefined) return;
    state.answers[key] = +oi;
    paintAnswer(key, +oi);
    updateScore(mid);
    updateProgress();
    return;
  }

  const rst = e.target.closest('[data-reset]');
  if (rst) {
    const mid = rst.dataset.reset;
    CURRICULUM.find(x => x.id === mid).quiz.forEach((q, qi) => delete state.answers[`${mid}-${qi}`]);
    const block = rst.closest('.quizblock');
    $$('.opt', block).forEach(b => { b.disabled = false; b.classList.remove('correct', 'wrong'); });
    $$('.q-why', block).forEach(w => w.classList.remove('show'));
    updateScore(mid); updateProgress();
    return;
  }

  const ms = e.target.closest('[data-ms]');
  if (ms) {
    const i = ms.dataset.ms;
    const on = ms.getAttribute('aria-pressed') === 'true';
    ms.setAttribute('aria-pressed', String(!on));
    on ? state.milestones.delete(i) : state.milestones.add(i);
    updateProgress();
    return;
  }

  const gt = e.target.closest('[data-gtag]');
  if (gt) {
    $$('.gtag').forEach(b => b.classList.remove('on'));
    gt.classList.add('on');
    renderGlossary(gt.dataset.gtag);
    return;
  }

  const jump = e.target.closest('[data-jump]');
  if (jump) {
    const mod = $(`#${jump.dataset.jump}`);
    if (mod && !mod.classList.contains('open')) {
      mod.classList.add('open');
      $('[data-toggle]', mod).setAttribute('aria-expanded', 'true');
    }
    return;
  }

  if (e.target.closest('#menubtn')) { $('#nav').classList.toggle('open'); return; }

  if (e.target.closest('#expandAll')) {
    const anyClosed = $$('.module').some(m => !m.classList.contains('open'));
    $$('.module').forEach(m => {
      m.classList.toggle('open', anyClosed);
      $('[data-toggle]', m).setAttribute('aria-expanded', String(anyClosed));
    });
    $('#expandAll').textContent = anyClosed ? 'Collapse all' : 'Expand all';
    return;
  }

  if (e.target.closest('#clearSearch')) {
    state.filter = ''; $('#search').value = ''; renderModules(); return;
  }
});

/* search */
document.addEventListener('input', e => {
  if (e.target.id === 'search') {
    state.filter = e.target.value.trim();
    renderModules();
  }
});

/* close mobile menu on nav click */
document.addEventListener('DOMContentLoaded', () => {
  $('#nav').addEventListener('click', e => {
    if (e.target.tagName === 'A') $('#nav').classList.remove('open');
  });
  renderModules();
  renderStatic();
  updateProgress();
  $('#qtotal').textContent = TOTAL_Q;
  $('#chancount').textContent = new Set(Object.values(CHANNELS).map(c => c.u)).size;
});

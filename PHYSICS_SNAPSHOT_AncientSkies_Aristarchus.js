/* PHYSICS/SCORING SNAPSHOT — AncientSkies_Aristarchus.html
   REGENERATED after the SECOND A16 review round (crisis A8 internal-consistency fix).
   Supersedes both earlier snapshots: POOL.crisis analytic values changed on all three
   scenarios, so any older snapshot will now mis-report a clean visual pass as dirty.

   Taken before the Kimi K3 visual pass (Track C).

   These are every function/constant that computes or grades a number in this game
   (the "physics" of a proportion-and-measurement game). None of this should change
   by a single byte after the visual pass. Rendering functions (drawSight, drawGeom,
   drawCv, fireworks, pullback) are DELIBERATELY EXCLUDED — those are exactly what a
   visual pass is allowed to touch.

   After the visual pass, diff the same block in the returned file against this file.
   Any difference at all = reject the pass, per the Charter Track C.
*/

// ---- C ----
const C = {
  D_MOON: 3475,                 // km, modern — declared "reset" value
  D_SUN: 1392000,               // km
  d_SUN: 149600000,             // km
  BEAD: 6.0,                    // mm
  PHAROS_H: 120,                // m (sources give 100-140; declared)
  PHAROS_D: 5000,               // m
  PHAROS_L: 250.0,              // mm = s*d/H
  EARTH_D: 12742,               // km (for the Aristarchus band)
  ARI_LO: 4035, ARI_HI: 5073,   // km — 19/60..43/108 of Earth (On Sizes)
};

// ---- POOL ----
const POOL = {
  predict: [ // night label, d (km), L given by "your hand" (mm, wobble declared), analytic D (km)
    { id:"P1", night:"perigee night", d:363300, L:580, analytic:3758.3, wob:"-7.5" },
    { id:"P2", night:"an average night", d:384400, L:690, analytic:3342.6, wob:"+4.0" },
    { id:"P3", night:"apogee night", d:405500, L:745, analytic:3265.8, wob:"+6.4" },
  ],
  inverse: [ // night NOT named. L (mm) -> analytic d (km)
    { id:"I1", L:620, analytic:359083 },
    { id:"I2", L:670, analytic:388042 },
    { id:"I3", L:700, analytic:405417 },
  ],
  // Crisis. `analytic` is what THIS scenario's ENDORSED method actually produces — not the modern
  // Sun diameter. Grade the reasoning model the student was told to use (A8 internal consistency):
  //   C1, C2 (correction matters)  -> endorsed = subtract the hole width p, then d*(sMeas-p)/L
  //   C3     (correction negligible) -> endorsed = declare it negligible and KEEP the plain value,
  //                                     so the target is d*sMeas/L, uncorrected, by design.
  // The modern 1,392,000 km stays as the MODERN column in the debrief — the declared gap between
  // the ancient method and the modern value is celebrated there, never graded (series rule).
  crisis: [ // box length L (mm), hole width p (mm), measured image s_meas (mm), analytic = endorsed D (km), naive error %
    { id:"C1", L:1000, p:1.90, sMeas:11.20, analytic:1391280, naiveErr:20.4 },
    { id:"C2", L:500,  p:1.86, sMeas:6.51,  analytic:1391280, naiveErr:40.0 },
    { id:"C3", L:1500, p:0.25, sMeas:14.21, analytic:1417211, naiveErr:1.8, negligible:true },
  ],
};

// ---- BANDS ----
const BANDS = { watch:[5,12,25], predict:[5,12,25], inverse:[5,12,25], crisis:[5,10,15] };

// ---- STAGES ----
const STAGES = ["watch","predict","inverse","crisis"];

/* ============ State & storage (keys per gate A5; self-explanation text NEVER stored — 15b) ============ */
const store = {
  get(k,fb){ try{ const v=localStorage.getItem(k); return v==null?fb:JSON.parse(v); }catch(e){ return fb; } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} },
};

// ---- medalFor ----
function medalFor(errPct,stage){
  // Article 6: bands are mode-independent — a medal means the same thing in every mode.
  // Article 9: Gold requires error STRICTLY below 5% — errPct<g, not <=g.
  const [g,s,b]=BANDS[stage];
  return errPct<g?"Gold":errPct<=s?"Silver":errPct<=b?"Bronze":null;
}

// ---- medalFrac ----
function medalFrac(m){ return m==="Gold"?1:m==="Silver"?0.7:m==="Bronze"?0.4:0; }

// ---- compositeBand ----
function compositeBand(score){ return score>=90?"Gold":score>=75?"Silver":score>=60?"Bronze":null; }

// ---- calScore ----
function calScore(conf,ok){ const p={low:0.25,med:0.6,high:0.9}[conf||"med"]; const o=ok?1:0; return 1-(p-o)*(p-o); }

// ---- pickScn ----
function pickScn(stage){
  const pool=POOL[stage]; if(!pool) return null;
  let i=Math.floor(Math.random()*pool.length);
  if(pool.length>1 && S.usedScn[stage]===i) i=(i+1)%pool.length;   // re-roll: never the same twice running
  S.usedScn[stage]=i; return pool[i];
}

// ---- coverL ----
function coverL(){ // where "just covers" truly happens for this scenario (the hand-wobble lives here, declared)
  if(S.stage==="watch") return C.PHAROS_L;
  if(S.stage==="predict"||S.stage==="inverse") return S.scn.L;
  return null;
}

// ---- analyticFor ----
function analyticFor(){
  if(S.stage==="watch") return DEF.watch.question.analytic;
  if(S.stage==="predict") return S.scn.analytic;
  if(S.stage==="inverse") return S.scn.analytic;
  return S.scn.analytic; // crisis: corrected D (never in DOM before commit — computed here, at commit time)
}

// ---- commit ----
function commit(){
  const v=+$("answerIn").value;
  if(v===42 && S.stage!=="watch"){ $("hintOut").innerHTML=NAUSIKA.easter42; $("answerIn").value=""; updateCommitReady(); return; }
  sndCompute();
  S.committed=v; S.analytic=analyticFor();
  S.errPct=Math.abs(v-S.analytic)/S.analytic*100;
  if(S.stage==="crisis"&&S.crisisPhase===0){
    // phase 0: the sky itself audits the box-reading against the eclipse ratio
    const naive=C.d_SUN*S.scn.sMeas/S.scn.L;
    const offNaive=Math.abs(v-naive)/naive*100;
    if(!S.scn.negligible && offNaive<3 ){ // they committed the uncorrected value on a variant where it matters
      S.crisisPhase=1; sndFail();
      $("runText").innerHTML=`<p>${NAUSIKA.eclipseClash}</p>
        <p class="note">You read the wall as ${S.scn.sMeas.toFixed(2)} mm across a ${fmt(S.scn.L,0)} mm box and took that ratio at face value —
        but every total eclipse fixes the Sun&#8217;s view-ratio at the Moon&#8217;s, and that ratio is <i>narrower</i> than what your box just claimed.
        Something in the box is widening the disk. Recheck what the wall really shows, then commit again.</p>`;
      wrongAttempt(); setStep("run"); show($("btnRunNext"),false);
      setTimeout(()=>{ setStep("compute"); $("answerIn").value=""; updateCommitReady(); },5200);
      return;
    }
  }
  S.medal=medalFor(S.errPct,S.stage);
  runPhase();
}

// ---- workedHtml ----
function workedHtml(){
  const scn=S.scn;
  if(S.stage==="watch") return DEF.watch.worked();
  if(S.stage==="predict") return `<p>Ratio first (mm with mm):</p>
    <div class="formula">s / L = 6.0 / ${scn.L} = 1 / ${fmt(scn.L/6,1)}</div>
    <p>The Moon obeys the same ratio at its distance:</p>
    <div class="formula">D = d × s/L = ${fmt(scn.d,0)} / ${fmt(scn.L/6,1)} = ${fmt(scn.analytic,0)} km</div>
    <p class="note">Graded against YOUR measurement (${scn.L} mm, wobble declared ${scn.wob}%) — not against the modern books. Scoring resets; the story propagates.</p>`;
  if(S.stage==="inverse") return `<p>Same proportion, unknown on the other side:</p>
    <div class="formula">d = D × L/s = 3,475 × ${scn.L}/6.0 = ${fmt(scn.analytic,0)} km</div>
    <p class="note">Tonight&#8217;s answer. Another night, another L, another d — the orbit is no circle (±5.5%, declared).</p>`;
  const sTrue=scn.sMeas-scn.p;
  if(scn.negligible) return `<p>The instrument&#8217;s signature: disk = projection + hole width.</p>
    <div class="formula">correction p = ${scn.p.toFixed(2)} mm on ${scn.sMeas.toFixed(2)} mm ≈ ${(scn.p/(scn.sMeas-scn.p)*100).toFixed(1)}%</div>
    <p>Smaller than the method&#8217;s own wobble — <b>declared negligible, value kept:</b></p>
    <div class="formula">D = d × s/L = 149,600,000 × ${scn.sMeas.toFixed(2)}/${fmt(scn.L,0)} = ${fmt(scn.analytic,0)} km</div>
    <p class="note">That is the number you were graded against — the one your declared method actually produces.
    The modern books say 1,392,000 km, about ${(Math.abs(scn.analytic-C.D_SUN)/C.D_SUN*100).toFixed(1)}% away: the honest cost of the
    correction you chose to skip. Judged worth skipping, and declared. <b>The method is graded, not the gap.</b></p>`;
  return `<p>The wall&#8217;s disk carries the hole&#8217;s width. Subtract the instrument:</p>
    <div class="formula">s = ${scn.sMeas.toFixed(2)} − ${scn.p.toFixed(2)} = ${sTrue.toFixed(2)} mm</div>
    <div class="formula">D = d × s/L = 149,600,000 × ${sTrue.toFixed(2)}/${fmt(scn.L,0)} = ${fmt(scn.analytic,0)} km</div>
    <p class="note">Uncorrected, the box overstates by ${scn.naiveErr}% — and the eclipse ratio catches it, exactly as it caught you if you tried.</p>`;
}

// ---- threeColsHtml ----
function threeColsHtml(){
  let yours, ancient, modern, kAnc, great;
  if(S.stage==="watch"){ yours=fmt(S.committed,1)+" bw"; ancient="1/41.7"; modern="1/41.7"; kAnc="the proportion";
    great="Where a boat can check it, the bead already tells the truth. Now the sky.";}
  else if(S.stage==="predict"){ yours=fmt(S.committed,0)+" km"; ancient="4,035–5,073 km"; modern="3,475 km"; kAnc="Aristarchus (On Sizes)";
    great="With a bead at arm&#8217;s length you landed within a few percent of a world 380,000 km away — Aristarchus, with no second try and no laser, landed within ~25%. Both of you measured, neither looked it up.";}
  else if(S.stage==="inverse"){ yours=fmt(S.committed,0)+" km"; ancient="~60 Earth radii ≈ 382,000 km"; modern=fmt(S.scn.analytic,0)+" km (tonight)"; kAnc="the ancient ladder";
    great="Sixty Earth-radii, said the ancients — from shadows and beads alone. Your bead just re-climbed their ladder.";}
  else { yours=fmt(S.committed,0)+" km"; ancient="'vastly larger than Earth' — Aristarchus"; modern="1,392,000 km"; kAnc="the ancient verdict";
    great="Aristarchus could not get the Sun&#8217;s number — his tools stopped at 'enormous, and therefore central?'. He asked the right question 1,800 years early. Your box, plus honesty about its hole, finishes his sentence.";}
  $("threeCols").innerHTML=
    `<div class="col"><span class="k">YOURS — tonight</span><span class="v">${yours}</span></div>
     <div class="col"><span class="k">${kAnc}</span><span class="v" style="font-size:1rem">${ancient}</span></div>
     <div class="col"><span class="k">MODERN</span><span class="v">${modern}</span></div>`;
  $("greatLine").innerHTML=great;
}

// ---- finalizeStage ----
function finalizeStage(){
  const numMedal=S.medal; // numeric-band medal, set at commit() from errPct alone
  const numFrac=medalFrac(numMedal);
  const cal=calScore(S.conf,!!numMedal);
  let score=Math.round(100*(0.40*numFrac+0.25*S.gateScore+0.25*S.selfScore+0.10*cal))-(S.hintPenalty||0);
  score=Math.max(0,score);
  // Article 4: the AWARDED medal is min(numeric-band, composite-band) — never raw error alone.
  const order={Gold:3,Silver:2,Bronze:1,undefined:0,null:0};
  const compMedal=compositeBand(score);
  const awarded=order[compMedal]<order[numMedal]?compMedal:numMedal;
  S.medal=awarded;
  if(order[awarded]>(order[S.medals[S.stage]]||0)) S.medals[S.stage]=awarded;
  if(S.best[S.stage]==null||score>S.best[S.stage]) S.best[S.stage]=score;
  saveProgress(); refreshHud();
  $("btnDone").disabled=false;
  if(awarded){ fireworks(awarded); ({Gold:sndFanfareGold,Silver:sndFanfareSilver,Bronze:sndFanfareBronze})[awarded]();
    toast(awarded+" — mission score "+score+" / 100"); }
  else if(numMedal){ toast("Numeric band was "+numMedal+", but the composite (concept + explanation + calibration) held it to no medal — score "+score+". Retry rolls a new night."); }
  else { toast("No medal — score "+score+". Retry rolls a new night."); }
  const i=STAGES.indexOf(S.stage);
  if(awarded&&i<3&&!S.medals[STAGES[i+1]]) setTimeout(()=>{ toast("🔓 "+DEF[STAGES[i+1]].title+" unlocked"); sndUnlock(); },1800);
  if(STAGES.every(st=>S.medals[st]==="Gold")&&S.stage==="crisis") setTimeout(pullback,2200);
}


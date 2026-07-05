# Mission ATLAS — Astronomy-Themed Physics Games

Mission ATLAS is a browser-based portfolio of upper-secondary physics games framed by **Big Ideas in Astronomy**.
Each mission turns a common student misconception into a playable decision problem: learners **calculate, predict, commit a number, test, fail safely, and try again**.

---

## ⚠️ Status: Public Beta

**Mission ATLAS is in active beta.** The games are playable and the physics is verified, but scoring, UI polish, and difficulty tuning are still being refined, and the roster is still growing toward the full planned series. Expect changes between releases.

**🌐 Language — English only for now.**
Every game currently ships in **English**. **Greek (Ελληνικά) and Italian (Italiano) localizations are planned and will be added in later releases**, with further languages under consideration. Each game is already built on an internal translation layer, so language packs can be dropped in without rewriting the games — the English release simply comes first.

Feedback during beta is welcome: please open an issue describing the game, your browser/device, and what you expected versus what happened.

---

## Play online

**Landing page:** https://physicsplay.github.io/Astrojourneys/

**Direct game links**

| Mission | Link |
|---|---|
| Lunar Rescue | https://physicsplay.github.io/Astrojourneys/Lunar_Rescue.html |
| Orbital Rendezvous | https://physicsplay.github.io/Astrojourneys/Orbital_Rendezvous.html |
| Mars Landing Window | https://physicsplay.github.io/Astrojourneys/Mars_Landing_Window.html |
| Mars EVA Traverse | https://physicsplay.github.io/Astrojourneys/Mars_EVA_Traverse.html |
| Habitat Blackout | https://physicsplay.github.io/Astrojourneys/Habitat_blackout.html |
| Asteroid Deflection — The 31.5 Rule | https://physicsplay.github.io/Astrojourneys/asteroid_deflection_v3.html |
| Comet Lander: Rosetta's Philae | https://physicsplay.github.io/Astrojourneys/Comet_Lander_Rosetta.html |
| ExoCase: Space Detective (KELT-3b) | https://physicsplay.github.io/Astrojourneys/ExoCase_KELT3b.html |
| Lunar Lava Tube Scout | https://physicsplay.github.io/Astrojourneys/lunar_lava_tube_scout.html |
| **The HELIOS Incident — Ep. 1** · Quantum Rescue | https://physicsplay.github.io/Astrojourneys/Quantum_Rescue.html |
| **The HELIOS Incident — Ep. 2** · Star Autopsy | https://physicsplay.github.io/Astrojourneys/Star_Autopsy_Wien.html |
| **The HELIOS Incident — Ep. 3** · Ghost Particle | https://physicsplay.github.io/Astrojourneys/Ghost_Particle_deBroglie.html |
| **The HELIOS Incident — Ep. 4** · Recoil | https://physicsplay.github.io/Astrojourneys/Recoil_Compton.html |

---

## What's new in this build

- **The HELIOS Incident** — a four-part quantum saga (Quantum Rescue → Star Autopsy → Ghost Particle → Recoil) sharing one cast and one derelict ship. This **replaces the earlier single "Quantum Rescue" build** that packed four relationships into one file; each episode now isolates a single equation.
- **Asteroid Deflection — The 31.5 Rule** — full retrofit built around one relationship, `d = 31.5·Δv·t`, with an arcade "panic vs. physics" opening.
- **Comet Lander: Rosetta's Philae** — free fall under near-zero comet gravity, `h = v₀t + ½gt²`.
- **ExoCase: Space Detective (KELT-3b)** — an exoplanet transit case built on `δ = (Rₚ/R★)²`.

---

## Design principles

Mission ATLAS games are built to a shared standard so students recognize the same "grammar" across missions:

- **One relationship per game.** Each mission has a single equation as its mathematical core. No "broad topic" games.
- **Compute, don't guess.** Every game has a moment where the student **writes a number that locks the simulation**. Trial-and-error is deliberately made inferior to calculation.
- **Anti-cheating is architectural.** Correct answers never appear in the UI before the student commits. Derived values and bonus panels are hidden until earned.
- **Physics first.** Formulas, units, sign conventions, and simplifying assumptions are shown explicitly and stated honestly on screen.
- **Progression by mastery.** Later stages unlock only after a Bronze-or-better medal on the previous one.
- **Consistent feedback.** Shared scoring (fewer attempts + higher accuracy), the same medal thresholds (🥇 <5% · 🥈 <10% · 🥉 <20% error), the same sounds and celebrations across the series.
- **Single file, no dependencies.** Each game is one self-contained HTML file — no external libraries, no build step — so it runs anywhere and is easy to host or hand to a teacher.

---

## Localization roadmap

| Language | Status |
|---|---|
| English | ✅ Available now (all games) |
| Greek (Ελληνικά) | 🔜 Planned — later release |
| Italian (Italiano) | 🔜 Planned — later release |
| Additional languages | 🕓 Under consideration |

The user-facing text of each game routes through an internal translation table, so adding a language is a content pass rather than a rewrite. Until a localization ships, the English version is the reference build.

---

## Portfolio overview

| Mission | Core relationship (the one equation) | Big Ideas in Astronomy |
|---|---|---|
| Lunar Rescue | kinematics under lunar gravity (touchdown speed) | 7.7 Earth–Moon system; 4.2 Gravitation on large scales |
| Orbital Rendezvous | circular/orbital motion, relative velocity | 4.2 Gravitation dominates; 11.1 Debris orbits Earth |
| Mars Landing Window | staged descent: drag, gravity, thrust | 7.5 Terrestrial planets; 5.8 Spacecraft study the Solar System |
| Mars EVA Traverse | traction, work and power on slopes | 7.5 Terrestrial planets; 4.4 Observations and models |
| Habitat Blackout | Ohm's law and electrical power | 4.6 Technology; 5.8 Spacecraft exploration |
| Asteroid Deflection — The 31.5 Rule | `d = 31.5·Δv·t` (drift rule) | 11.2 NEOs are monitored; 7.8 Asteroids are remnants |
| Comet Lander: Rosetta's Philae | `h = v₀t + ½gt²` (g ≈ 10⁻³ m/s²) | 7.8 Comets are icy remnants; 5.8 Spacecraft exploration |
| ExoCase: Space Detective (KELT-3b) | `δ = (Rₚ/R★)²` (transit depth) | 4.5 Light carries information; 7.6 Exoplanets detected indirectly |
| Lunar Lava Tube Scout | `d = v·t/2` (radar echo ranging) | 7.7 Earth–Moon system; 4.4 Observations and models |
| **HELIOS Ep. 1** — Quantum Rescue | `K_max = 1240/λ − W` (photoelectric) | 4.5 Light carries information; 5.8 Spacecraft technology |
| **HELIOS Ep. 2** — Star Autopsy | `λ_max = 2.90×10⁶ / T` (Wien's law) | 4.5 Light carries information; 4.4 Observations and models |
| **HELIOS Ep. 3** — Ghost Particle | `λ = 1.227/√K` (de Broglie) | 4.5 Light and matter; 4.6 Technology (electron microscopy) |
| **HELIOS Ep. 4** — Recoil | `Δλ = 2.43(1 − cos θ)` (Compton) | 4.5 Light carries momentum; 5.8 Spacecraft technology |

---

## Curriculum alignment note

This README maps each mission to **upper-secondary curriculum areas** in **Greece** (General Lyceum / ΓΕΛ), **Italy** (*liceo scientifico*), and **Estonia** (upper-secondary national curriculum). The mapping is intentionally **topic-based**: if a game operationalizes concepts explicitly taught in those systems, it is defensibly aligned. During beta, these mappings may be revised as content settles.

---

<a id="lunar-rescue"></a>
## Lunar Rescue

**Play online:** https://physicsplay.github.io/Astrojourneys/Lunar_Rescue.html

**Summary.** Guide an emergency cargo capsule to a lunar outpost, managing thrust, attitude, descent speed, and fuel under lunar gravity with no atmospheric drag. A staged curriculum moves from a free tutorial drop to predicting touchdown speed and choosing a burn to hit a target velocity.

**Core relationship.** Kinematics under constant lunar gravity — predicting touchdown speed from height and acceleration.

**Misconception target.** "There is almost no gravity on the Moon," and "if the engine is off, motion stops."

**Big Ideas in Astronomy.** 7.7 Earth–Moon system · 4.2 Gravitation dominates on large scales.

**Curriculum.** Greece / Italy / Estonia: mechanics, Newton's laws, kinematics, work and energy.

---

<a id="orbital-rendezvous"></a>
## Orbital Rendezvous

**Play online:** https://physicsplay.github.io/Astrojourneys/Orbital_Rendezvous.html

**Summary.** Phase, approach, and dock safely with a damaged station module by matching relative motion instead of chasing directly.

**Core relationship.** Circular/orbital motion and relative velocity in the approach corridor.

**Misconception target.** "There is no gravity in orbit," and "just thrust straight at the station."

**Big Ideas in Astronomy.** 4.2 Gravitation dominates · 11.1 Human-made debris orbits Earth.

**Curriculum.** Greece / Italy / Estonia: circular motion, centripetal force, gravitation, energy.

---

<a id="mars-landing-window"></a>
## Mars Landing Window

**Play online:** https://physicsplay.github.io/Astrojourneys/Mars_Landing_Window.html

**Summary.** Choose parachute-deployment and retro-burn altitudes for a Mars cargo landing, reasoning with drag, gravity, drift, and stopping distance in a thin atmosphere.

**Core relationship.** Staged descent dynamics — balancing drag, gravity, and thrust to null velocity in the available altitude.

**Misconception target.** "Lower gravity makes Mars landing easy," and "a parachute is enough."

**Big Ideas in Astronomy.** 7.5 Terrestrial planets · 5.8 Spacecraft study the Solar System.

**Curriculum.** Greece / Italy / Estonia: forces, acceleration, gravity, energy, model-based motion.

---

<a id="mars-eva-traverse"></a>
## Mars EVA Traverse

**Play online:** https://physicsplay.github.io/Astrojourneys/Mars_EVA_Traverse.html

**Summary.** Plan an EVA route and pace to reach shelter with enough science, managing traction, time, battery, oxygen, and suit power. A staged curriculum moves from a passive walk to prediction, planning, and a crisis event.

**Core relationship.** Work and power on slopes with traction limits — energy budgeting across a route.

**Misconception target.** "Lower gravity always makes movement easier."

**Big Ideas in Astronomy.** 7.5 Terrestrial planets · 4.4 Astronomy uses observations and models.

**Curriculum.** Greece / Italy / Estonia: friction, slopes, work, power, energy.

---

<a id="habitat-blackout"></a>
## Habitat Blackout

**Play online:** https://physicsplay.github.io/Astrojourneys/Habitat_blackout.html

**Summary.** Reroute emergency habitat power after a cascading fault by comparing line resistance, fuse margin, load profiles, and battery reserve.

**Core relationship.** Ohm's law and electrical power in series/parallel reasoning.

**Misconception target.** "Current gets used up," and "the shortest reroute is always best."

**Big Ideas in Astronomy.** 4.6 Astronomy benefits from and stimulates technology · 5.8 Spacecraft exploration.

**Curriculum.** Greece / Italy / Estonia: current, resistor combinations, power, Ohm/Kirchhoff reasoning.

---

<a id="asteroid-deflection"></a>
## Asteroid Deflection — The 31.5 Rule

**Play online:** https://physicsplay.github.io/Astrojourneys/asteroid_deflection_v3.html

**Summary.** Run the NEO Defense desk. The mission opens with an arcade "panic mode" that the player fails by hand, then shows that a single computed burn — a whisper of Δv delivered years early — moves the asteroid a whole planet aside. A four-watch curriculum (Panic vs. Physics → Track → Corridor → Red Alert) drives the same rule forward, inverse, and under a countdown.

**Core relationship.** `d [km] = 31.5 · Δv [mm/s] · t [yr]`. The 31.5 comes from one year being ≈ 3.15×10⁷ seconds, so 1 mm/s of Δv becomes 31.5 km of miss distance per year. Impactor momentum and the β factor are stated as engineering flavour, not graded.

**Misconception target.** "You need a huge blast at the last second." Backwards: a tiny early push is amplified by time into a large miss distance. (DART actually did this to Dimorphos in 2022, changing its speed by millimetres per second.)

**Big Ideas in Astronomy.** 11.2 Near-Earth objects are monitored · 7.8 Asteroids are remnants of Solar System formation.

**Curriculum.** Greece / Italy / Estonia: momentum, impulse, proportional reasoning, unit conversion, scientific modelling.

---

<a id="comet-lander"></a>
## Comet Lander: Rosetta's Philae

**Play online:** https://physicsplay.github.io/Astrojourneys/Comet_Lander_Rosetta.html

**Summary.** Set Philae's descent onto comet 67P/Churyumov–Gerasimenko, where surface gravity is a whisper (g ≈ 10⁻³ m/s²). The player predicts the fall time and touchdown speed **before** releasing, with a side-by-side Earth drop showing how alien this world is.

**Core relationship.** `h = v₀t + ½gt²` with g ≈ 10⁻³ m/s². The student commits the predicted fall time / landing speed, then the drop verifies it.

**Misconception target.** "Almost no gravity means landing is trivial." In reality falls take minutes, and even a gentle touchdown speed can bounce a lander off the surface — the real Philae did, twice.

**Big Ideas in Astronomy.** 7.8 Comets are icy remnants of Solar System formation · 5.8 Spacecraft exploration.

**Curriculum.** Greece / Italy / Estonia: uniformly accelerated motion, kinematics equations, free fall, scientific modelling.

---

<a id="exocase-kelt-3b"></a>
## ExoCase: Space Detective (KELT-3b)

**Play online:** https://physicsplay.github.io/Astrojourneys/ExoCase_KELT3b.html

**Summary.** Work a real exoplanet case file. From the tiny dip in a star's brightness as the hot Jupiter KELT-3b crosses its face, the player deduces the planet's size, then uses Kepler's third law (given) to place its orbit. Dataset is simplified from real photometry for cleaner teaching numbers and is internally self-consistent.

**Core relationship.** Transit photometry: the fractional light dip equals the projected area ratio, `δ = (Rₚ/R★)²`. Kepler's third law is provided for the orbital step.

**Misconception target.** "A bigger dip means a bigger planet." The dip fixes the planet's size **relative to its star** — the same planet dims a small star far more than a giant one.

**Big Ideas in Astronomy.** 4.5 Light carries information about its source · 7.6 Exoplanets are detected indirectly.

**Curriculum.** Greece / Italy / Estonia: ratios and proportion, areas, light/flux, Kepler's laws, data interpretation.

---

<a id="lunar-lava-tube-scout"></a>
## Lunar Lava Tube Scout

**Play online:** https://physicsplay.github.io/Astrojourneys/lunar_lava_tube_scout.html

**Summary.** Scout a suspected lunar lava tube with multi-frequency radar, trading penetration depth against resolution, interpreting return signatures, and mapping voids for future habitation.

**Core relationship.** Echo ranging, `d = v·t/2`, plus the frequency–wavelength–penetration trade-off.

**Misconception target.** "Higher frequency is always better." Lower frequency penetrates deeper; higher frequency gives finer detail but shallower reach.

**Big Ideas in Astronomy.** 7.7 Earth–Moon system · 4.4 Astronomy uses observations and models.

**Curriculum.** Greece / Italy / Estonia: wave reflection, frequency–wavelength relations, indirect measurement.

---

<a id="helios-incident"></a>
## The HELIOS Incident — a quantum saga in four cases

One continuous story across four games, sharing a cast — Dr. Noor Haddad and the station AI, SPARK — and a single derelict ship. Each episode isolates **one** quantum relationship and drives it through a full **predict → invert → crisis** arc, with Bronze-or-better gating between stages. Play them in order, or drop into any single case.

> This tetralogy replaces the earlier single "Quantum Rescue: The Photon Lock" build, which packed four relationships into one file. Splitting them keeps every game to a single equation — one law, learned properly.

<a id="helios-1-quantum-rescue"></a>
### Episode 1 — Quantum Rescue: The Photoelectric Key

**Play online:** https://physicsplay.github.io/Astrojourneys/Quantum_Rescue.html

Unlock the ship's doors by ejecting photoelectrons: choose a wavelength whose photon energy clears each metal's work function.
**Core relationship.** `K_max = 1240/λ − W` (energies in eV, λ in nm).
**Misconception target.** "Brighter light ejects faster electrons." Frequency sets the energy per photon; intensity sets only how many.

<a id="helios-2-star-autopsy"></a>
### Episode 2 — Star Autopsy: The Wien Files

**Play online:** https://physicsplay.github.io/Astrojourneys/Star_Autopsy_Wien.html

Run a temperature autopsy on cooling bodies and live stars from the peak wavelength of their thermal glow.
**Core relationship.** Wien's displacement law, `λ_max = 2.90×10⁶ / T` (λ_max in nm, T in kelvin).
**Misconception target.** "Hotter just means brighter." Temperature shifts the **colour** of the peak, not only the brightness.

<a id="helios-3-ghost-particle"></a>
### Episode 3 — Ghost Particle: The de Broglie Gate

**Play online:** https://physicsplay.github.io/Astrojourneys/Ghost_Particle_deBroglie.html

Tune an electron gun so each electron's matter wavelength matches a diffraction lock — fired one particle at a time, yet still building an interference pattern.
**Core relationship.** de Broglie wavelength, `λ = 1.227/√K` (λ in nm, electron energy K in eV).
**Misconception target.** "Electrons are just tiny balls." A single electron interferes with itself; every particle carries a wavelength.

<a id="helios-4-recoil"></a>
### Episode 4 (Finale) — Recoil: The Compton Verdict

**Play online:** https://physicsplay.github.io/Astrojourneys/Recoil_Compton.html

Put the photon on trial: prove that light carries momentum by measuring how much a scattered X-ray's wavelength lengthens.
**Core relationship.** Compton shift, `Δλ = 2.43 (1 − cos θ) pm`.
**Misconception target.** "Waves can't push, and scattered light keeps its wavelength." The photon recoils like a billiard ball, paying momentum and leaving longer.

**Big Ideas in Astronomy (saga).** 4.5 Light carries information — and momentum · 4.6 Astronomy stimulates technology · 5.8 Spacecraft use technology to study the universe.

**Curriculum (saga).** Greece / Italy / Estonia: modern physics — photoelectric effect, blackbody radiation and Wien's law, wave–particle duality, Compton scattering.

---

## Why the astronomy framing matters

These are not physics games with random space skins. The astronomy context does real teaching work: the Moon and Mars missions make gravity, terrain, waves, and remote sensing concrete; the orbital mission makes gravitation and relative motion visible; the asteroid and comet missions connect kinematics and momentum to real mission engineering; the exoplanet case turns a brightness dip into a measurement; and the HELIOS saga ties light, matter, and momentum to an unfolding survival story. That is why each game is mapped to explicit **Big Ideas in Astronomy**, not just to a generic "space" theme.

---

## Suggested repository structure

```text
/
├── index.html
├── README.md
├── LICENSE
├── Lunar_Rescue.html
├── Orbital_Rendezvous.html
├── Mars_Landing_Window.html
├── Mars_EVA_Traverse.html
├── Habitat_blackout.html
├── asteroid_deflection_v3.html
├── Comet_Lander_Rosetta.html
├── ExoCase_KELT3b.html
├── lunar_lava_tube_scout.html
├── Quantum_Rescue.html          # HELIOS Ep. 1
├── Star_Autopsy_Wien.html       # HELIOS Ep. 2
├── Ghost_Particle_deBroglie.html # HELIOS Ep. 3
└── Recoil_Compton.html          # HELIOS Ep. 4
```

Keep `index.html` in the repository root together with the game HTML files. Filenames in `index.html` and in this README must match the files actually committed.

---

## License

Released under the **MIT License**. See the `LICENSE` file.

---

## Source basis used for this README

This README was prepared from the current playable HTML game files in this repository, the Mission ATLAS design brief, and current curriculum/framework material for Greece, Italy (*liceo scientifico*), and Estonia. Alignment is evidence-based but intentionally concise and teacher-friendly, and — as a beta document — subject to revision as the series matures.

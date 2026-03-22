# Mission ATLAS — Astronomy-Themed Physics Games

Mission ATLAS is a browser-based portfolio of upper-secondary physics games framed by **Big Ideas in Astronomy**.  
Each mission turns a common student misconception into a playable decision problem: learners calculate, predict, test, fail safely, and try again.

Current playable set in this repository:

- `Lunar_Rescue.html`
- `Orbital_Rendezvous.html`
- `Mars_Landing_Window.html`
- `Mars_EVA_Traverse.html`
- `Habitat_blackout.html`
- `asteroid_deflection.html`
- `quantum_rescue_full.html`
- `lunar_lava_tube_scout.html`

The landing page for GitHub hosting is:

- `index.html`

## Play online

Landing page:
- https://physicsplay.github.io/Astrojourneys/

Direct game links:
- Lunar Rescue: https://physicsplay.github.io/Astrojourneys/Lunar_Rescue.html
- Orbital Rendezvous: https://physicsplay.github.io/Astrojourneys/Orbital_Rendezvous.html
- Mars Landing Window: https://physicsplay.github.io/Astrojourneys/Mars_Landing_Window.html
- Mars EVA Traverse: https://physicsplay.github.io/Astrojourneys/Mars_EVA_Traverse.html
- Habitat Blackout: https://physicsplay.github.io/Astrojourneys/Habitat_blackout.html
- Asteroid Deflection: https://physicsplay.github.io/Astrojourneys/asteroid_deflection.html
- Quantum Rescue — The Photon Lock: https://physicsplay.github.io/Astrojourneys/quantum_rescue_full.html
- Lunar Lava Tube Scout: https://physicsplay.github.io/Astrojourneys/lunar_lava_tube_scout.html

## License

This project is released under the **MIT License**. See the `LICENSE` file.

## Design principles

- **Physics first**: formulas, sign conventions, units, and simplifying assumptions are explicit.
- **Anti-randomness**: the player must reason, not just drag sliders until something works.
- **Astronomy as anchor**: each game is tied to one or more defensible Big Ideas in Astronomy.
- **Classroom usability**: single-file browser play, immediate feedback, and visible theory-vs-simulation links.

---

## Portfolio overview

| Game | Main physics | Big Ideas in Astronomy |
|---|---|---|
| Lunar Rescue | thrust, lunar gravity, kinematics, work–energy | 7.7 Earth–Moon system; 4.2 Gravitation dominates on large scales |
| Orbital Rendezvous | circular/orbital motion, gravitation, relative velocity | 4.2 Gravitation dominates; 11.1 Human-made debris orbits Earth |
| Mars Landing Window | forces, drag, gravity, thrust, energy | 7.5 Terrestrial planets; 5.8 Spacecraft study the Solar System |
| Mars EVA Traverse | friction, slopes, work, power, energy | 7.5 Terrestrial planets; 4.4 Astronomy uses observations and models |
| Habitat Blackout | Ohm's law, power, current, series/parallel logic | 4.6 Astronomy benefits from and stimulates technology; 5.8 Spacecraft exploration |
| Asteroid Deflection | momentum, impulse, Δv, lead-time amplification | 11.2 Near-Earth objects are monitored; 7.8 Asteroids are remnants of the Solar System |
| Quantum Rescue: The Photon Lock | Wien's law, photoelectric effect, single-slit diffraction | 4.5 Light carries information; 5.8 Spacecraft use technology |
| Lunar Lava Tube Scout | wave reflection, frequency vs. penetration, indirect measurement | 7.7 Earth–Moon system; 4.4 Astronomy uses observations and models |

---

## Curriculum alignment note

This README maps each game to **upper-secondary curriculum areas** in:

- **Greece** (General Lyceum / ΓΕΛ)
- **Italy** (*liceo scientifico*)
- **Estonia** (upper-secondary national curriculum)

The mapping is intentionally **topic-based**, not a claim that the exact scenario appears verbatim in every syllabus. The core logic is: if the game operationalizes concepts explicitly taught in those systems, then it is defensibly aligned.

---

## Lunar Rescue

**Play online:** https://physicsplay.github.io/Astrojourneys/Lunar_Rescue.html

### Summary
A crew guidance specialist must land an emergency cargo capsule near a lunar outpost. The player manages thrust, attitude, descent speed, and fuel under lunar gravity, with no atmospheric drag.

### Physics focus
- Newtonian mechanics
- thrust and acceleration components
- lunar gravity
- fuel consumption
- work–energy thinking
- delta-v awareness

### Big Ideas in Astronomy
- **7.7 Earth–Moon system**
- **4.2 Gravitation dominates on large scales**

### Upper-secondary curriculum links
**Greece** — Fits naturally with mechanics, Newton's laws, gravitational potential energy, and mechanical energy.

**Italy – liceo scientifico** — Fits classical mechanics, kinematics, Newtonian dynamics, work and energy.

**Estonia** — Fits the physics course areas centered on kinematics, dynamics, gravitation, and energy.

### Common misconceptions and how the game addresses them
- **"There is almost no gravity on the Moon."** The mission makes lunar gravity operational: descent continues unless thrust balances it.
- **"If the engine is off, motion stops."** The landing dynamics show inertia directly; shutting thrust does not cancel velocity.
- **"Landing safely is just about low speed at the last second."** The fuel and corridor structure reward earlier planning, not panic correction.

---

## Orbital Rendezvous

**Play online:** https://physicsplay.github.io/Astrojourneys/Orbital_Rendezvous.html

### Summary
A chaser spacecraft must phase, approach, and dock safely with a damaged station module. The player succeeds only by matching **relative motion**, not by thrusting straight at the target.

### Physics focus
- circular/orbital motion
- gravitation
- relative velocity
- burn timing
- phase difference
- safe closure logic

### Big Ideas in Astronomy
- **4.2 Gravitation dominates**
- **11.1 Human-made debris orbits Earth**

### Upper-secondary curriculum links
**Greece** — Best linked to circular motion, centripetal force, gravity field ideas, and energy reasoning.

**Italy – liceo scientifico** — Strongly aligned with gravitation from Kepler to Newton and with classical mechanics.

**Estonia** — Fits upper-secondary kinematics/dynamics/energy treatment of orbit-like motion and gravitation.

### Common misconceptions and how the game addresses them
- **"There is no gravity in orbit."** The scenario explicitly shows orbit as continuous free fall around Earth.
- **"Just point at the station and thrust."** The direct-chase misconception is turned into a visible failure mode.
- **"Getting close is enough."** The docking condition also depends on low relative velocity and corridor discipline.

---

## Mars Landing Window

**Play online:** https://physicsplay.github.io/Astrojourneys/Mars_Landing_Window.html

### Summary
A supply module must land near a Mars habitat. The player chooses only two variables—**parachute deployment altitude** and **retro-burn ignition altitude**—and must reason with drag, gravity, drift, and stopping distance.

### Physics focus
- Newton's 2nd law
- drag force
- gravity
- thrust
- dynamic pressure
- mechanical energy removal
- staged descent reasoning

### Big Ideas in Astronomy
- **7.5 Terrestrial planets**
- **5.8 Spacecraft study the Solar System**

### Upper-secondary curriculum links
**Greece** — Aligns with forces, acceleration, gravity, energy, and model-based analysis of motion.

**Italy – liceo scientifico** — Fits kinematics, Newtonian mechanics, gravity, and energy transformations.

**Estonia** — Fits kinematics, dynamics, and energy in the upper-secondary physics sequence.

### Common misconceptions and how the game addresses them
- **"Lower gravity makes Mars landing easy."** The mission shows that weaker gravity helps, but not enough to solve the problem alone.
- **"A parachute is enough on Mars."** The thin atmosphere limits drag, so engine timing remains essential.
- **"Earlier is always safer."** Early parachute or burn decisions can increase drift or waste fuel.

---

## Mars EVA Traverse

**Play online:** https://physicsplay.github.io/Astrojourneys/Mars_EVA_Traverse.html

### Summary
An astronaut must reach shelter before a dust front while still meeting a science target. The player chooses a route and pace, balancing time, traction, power, battery, oxygen, and terrain risk.

### Physics focus
- friction and traction
- slopes
- rolling/resistive effects
- work
- power
- energy budgeting
- route optimization

### Big Ideas in Astronomy
- **7.5 Terrestrial planets**
- **4.4 Astronomy uses observations and models**

### Upper-secondary curriculum links
**Greece** — Strong fit with forces on slopes, friction, work, and power.

**Italy – liceo scientifico** — Fits mechanics, Newtonian force analysis, and energy/power.

**Estonia** — Fits mechanics, friction, work, and power in upper-secondary physics.

### Common misconceptions and how the game addresses them
- **"Lower gravity always makes movement easier."** The slip condition depends mainly on slope and friction, not on simplistic "less g = easy" thinking.
- **"The shortest route is always best."** Risky low-traction routes can fail even when they are shorter.
- **"Going faster always solves the problem."** Higher pace can reduce time but can also exceed safe suit power.

---

## Habitat Blackout

**Play online:** https://physicsplay.github.io/Astrojourneys/Habitat_blackout.html

### Summary
After a cascading fault, the crew engineer must reroute habitat power without blowing a fuse, collapsing life support, or exhausting backup reserve. The player compares line resistance, load profiles, bus voltage, and battery margin before committing.

### Physics focus
- Ohm's law
- power relations
- current
- series/parallel reasoning
- voltage drop
- fuse/load constraints
- reserve logic

### Big Ideas in Astronomy
- **4.6 Astronomy benefits from and stimulates technology**
- **5.8 Spacecraft exploration**

### Upper-secondary curriculum links
**Greece** — Defensible through electric current, resistor combinations, Kirchhoff reasoning, power, and Ohm's law.

**Italy – liceo scientifico** — Fits the electricity/electromagnetism strand and quantitative circuit reasoning.

**Estonia** — Fits especially well with the upper-secondary Electromagnetism course and its energy/power connections.

### Common misconceptions and how the game addresses them
- **"Current gets used up."** The notebook and debrief make branch current and line current reasoning explicit.
- **"The shortest reroute is always best."** The player must compare resistance *and* fuse margin, not only path length.
- **"If life support is on, the choice was correct."** The mission also checks reserve and overcurrent safety.

---

## Asteroid Deflection

**Play online:** https://physicsplay.github.io/Astrojourneys/asteroid_deflection.html

### Summary
A multi-stage planetary defence mission. The player observes an approaching asteroid under uncertainty, then plans a kinetic impactor — choosing mass, relative velocity, and launch timing. The core lesson: a small early Δv amplifies into a large future miss distance, while a dramatic late strike often fails.

### Physics focus
- momentum and impulse
- mass estimation from density and volume (M = ρ·π/6·D³)
- Δv transfer (Δv = βΔp / M)
- miss-distance amplification (d ≈ Δv · t_lead)
- observation uncertainty and confidence intervals

### Big Ideas in Astronomy
- **11.2 Near-Earth objects are monitored for potential hazard**
- **7.8 Asteroids are remnants of Solar System formation**

### Upper-secondary curriculum links
**Greece** — Fits naturally with momentum, impulse, Newton's 2nd and 3rd laws, and conservation reasoning.

**Italy – liceo scientifico** — Aligns with mechanics (impulse, momentum conservation) and with modelling/estimation.

**Estonia** — Fits dynamics and momentum within the upper-secondary physics sequence, plus scientific modelling.

### Common misconceptions and how the game addresses them
- **"A single massive last-second impact is always best."** The lead-time amplification model shows that early, smaller deflections are far more effective.
- **"Bigger impactor is always better."** Budget, launch constraints, and timing interact — brute force is rarely optimal.
- **"We can just blow it up."** The mission frames deflection as a precision momentum-transfer problem, not an explosion movie.

---

## Quantum Rescue: The Photon Lock

**Play online:** https://physicsplay.github.io/Astrojourneys/quantum_rescue_full.html

### Summary
A solar flare has damaged the station shield. The crew must solve three sequential physics puzzles to restore safety: (1) identify the peak of a noisy blackbody spectrum using Wien's law, (2) unlock a photoelectric lock by choosing the right photon frequency and intensity, and (3) align an electron beam through a nano-slit where diffraction must be managed.

### Physics focus
- Wien's displacement law (λ_max · T = b)
- Planck spectrum shape
- photoelectric effect (E = hf, K_max = hf − φ)
- intensity vs. frequency distinction
- single-slit diffraction
- wave–particle duality

### Big Ideas in Astronomy
- **4.5 Light carries information about its source**
- **5.8 Spacecraft use technology to study the universe**

### Upper-secondary curriculum links
**Greece** — Aligns with modern physics / quantum physics topics: photoelectric effect, Wien's law, wave properties of matter.

**Italy – liceo scientifico** — Fits the modern physics strand: blackbody radiation, photoelectric effect, wave-particle duality.

**Estonia** — Fits quantum physics and optics within the upper-secondary advanced physics electives.

### Common misconceptions and how the game addresses them
- **"Brighter light always ejects faster electrons."** The game forces players to see that frequency determines photon energy; intensity only determines how many electrons are emitted.
- **"Light is either a wave or a particle — pick one."** The three stages progress from wave (spectrum) to particle (photoelectric) to wave-again (diffraction), showing both aspects in one mission.
- **"Wien's law is just a formula to memorize."** The noisy spectrum forces genuine peak-finding, making the law an active tool.

---

## Lunar Lava Tube Scout

**Play online:** https://physicsplay.github.io/Astrojourneys/lunar_lava_tube_scout.html

### Summary
A scouting probe maps a suspected lunar lava tube using multi-frequency radar. The player chooses between low-frequency (deeper penetration, coarser detail) and high-frequency (finer detail, shallower reach) scans, interprets return signatures, and decides whether the cavity is suitable for future crew shelter.

### Physics focus
- wave reflection and echo-based distance measurement (d = v·t/2)
- frequency–wavelength–penetration trade-offs
- signal interpretation across multiple bands
- material discrimination (void, basalt, fractured rock, ice)
- indirect measurement and inference from data

### Big Ideas in Astronomy
- **7.7 Earth–Moon system (the Moon as an exploration target)**
- **4.4 Astronomy uses observations and models**

### Upper-secondary curriculum links
**Greece** — Aligns with wave properties, reflection, frequency–wavelength relations, and scientific measurement.

**Italy – liceo scientifico** — Fits waves and optics, with connections to experimental methodology and data interpretation.

**Estonia** — Fits the waves course area and links to scientific practice: observation, modelling, and evidence-based reasoning.

### Common misconceptions and how the game addresses them
- **"Higher frequency is always better for scanning."** The game forces a trade-off: high f gives detail but cannot reach deep features; low f penetrates but blurs them.
- **"Echoes give you a direct picture."** Players must interpret indirect signals and infer structure, not just look at an image.
- **"The Moon has nothing interesting underground."** The lava tube context shows why subsurface exploration matters for both science and future habitation.

---

## Why the astronomy framing matters

These are not physics games with random space skins. The astronomy context is doing real teaching work:

- The Moon missions make gravity, waves, subsurface exploration, and remote sensing concrete.
- The orbital mission makes gravitation and relative motion visible.
- The Mars missions make drag, terrain, and exploration constraints operational.
- The habitat power mission shows that space exploration depends on technology and systems engineering.
- The asteroid mission connects momentum to real planetary defence.
- The quantum mission connects light, photons, and diffraction to actual astronaut survival.

That is why each game is mapped to explicit **Big Ideas in Astronomy**, not just to a generic "space" theme.

---

## Greece / Italy / Estonia: quick comparative view

### Greece
Best-fit areas in the current set:
- mechanics, Newton's laws
- work and mechanical energy
- gravitational potential energy
- electric current, resistor combinations, power, Ohm/Kirchhoff reasoning
- momentum and impulse
- modern physics: photoelectric effect, Wien's law
- wave properties: reflection, frequency, wavelength

### Italy (*liceo scientifico*)
Best-fit areas:
- kinematics and dynamics
- work and energy
- gravitation from Kepler to Newton
- modelling and experimental reasoning
- electricity/electromagnetism
- modern physics (blackbody, photoelectric, wave-particle duality)
- waves and optics

### Estonia
Best-fit areas in the current upper-secondary physics structure:
- kinematics, dynamics, energy
- electromagnetism
- gravitation/orbit-related applications
- waves (reflection, frequency trade-offs)
- quantum physics and optics (advanced electives)
- scientific modelling and data interpretation

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
├── asteroid_deflection.html
├── quantum_rescue_full.html
└── lunar_lava_tube_scout.html
```

---

## Source basis used for this README

This README was prepared from:

- the current playable HTML game files in this repository
- the Mission ATLAS master design brief
- current official curriculum/framework material for:
  - Greece
  - Italy (*liceo scientifico*)
  - Estonia

The curriculum alignment is evidence-based, but intentionally concise and teacher-friendly.

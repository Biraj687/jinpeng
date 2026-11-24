# Agent Operating Directives — Jinpeng Nepal × Synergy Motors

## Strict Data Integrity Rule
Only display specs, prices, variants, and contact details verified by the official Jinpeng × Synergy Motors posters.
Never invent or extrapolate vehicle specifications, warranty packages, or dealer touchpoints.
All unverified technical metrics must remain `null` in `@src/content/car.json` and must be cleanly omitted from rendered UI tables.

### Verified Product Truths
1. **Brand & Model:** Jinpeng Lingbox AT (also branded as Jinpeng Lingbox EV).
2. **Authorized Distributor:** Synergy Motors ("Jinpeng Lingbox EV — Brought to you by Synergy Motors").
3. **Official Variants & Pricing:**
   - **Base Variant:** NPR 23,49,000 · 240 km Range · 35 kW Electric Motor · 175 mm Ground Clearance
   - **Top Variant (Premium):** NPR 25,99,000 · 340 km Range · DC Fast Charging · 175 mm Ground Clearance
4. **Official Financing / Booking Callouts:**
   - "Open for Booking"
   - "Easy EMI"
   - "Monthly EMI starting from NPR 20,500"
5. **Verified Showroom & Contact:**
   - Showroom: Balkumari, Lalitpur
   - Phone Lines: `+977 9714574057` / `+977 9849130768`
   - Showroom Hours: "Contact for showroom hours" (unless explicitly verified)
6. **Strictly Forbidden / Unverified Claims:**
   - Unverified emails (e.g. `contact@jinpengnepal.com`), invented phone numbers (`+977-1-4439810`), unverified locations (Naxal, Tinkune, Baluwatar).
   - Unverified technical claims: 4.5m turning radius, 3584x1475x1666mm dimensions, 2455mm wheelbase, 960kg weight, 125Nm torque, 100km/h top speed, 19.2/22.8/25.2kWh capacities, 6.5hr AC, 35min DC, IP67, MacPherson strut, 165/65 R14, dual airbags, 8-year warranty.

## Visual Design & Craft (`@docs/DESIGN.md`)
- Palette: Dark automotive studio `#0B0C0E` background, `#F4F4F6` off-white text, `#8E939E` muted grey, `rgba(255, 255, 255, 0.12)` hairline borders.
- Typography: `Space Grotesk` (weights 600, 700) and `DM Sans` (weights 400, 500).
- Bans: No color gradients anywhere, no neon glowing blobs, no artificial sequential eyebrow numbers (`01 / 02 / 03`), no cluttered badges.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

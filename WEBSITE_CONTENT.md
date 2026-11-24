# Jinpeng Nepal — Master Website Content Inventory

This document lists every single piece of content, heading, microcopy, label, button, and spec across the entire **Jinpeng Nepal** website for your review and editing.

---

## 1. Page Metadata (`src/app/layout.tsx`)

| Field | Current Content |
| :--- | :--- |
| **Page Title** | `Jinpeng Nepal \| Lingbox EV` |
| **Meta Description** | `Precision compact mobility engineered for Kathmandu. Discover the all-electric Lingbox EV by Jinpeng Nepal.` |

---

## 2. Navigation Bar (`src/components/Navbar.tsx`)

| Element | Text Content |
| :--- | :--- |
| **Logo Text (Top)** | `JINPENG` |
| **Logo Text (Bottom)** | `NEPAL` |
| **Nav Link 1** | `VEHICLE` (Anchor: `#vehicle`) |
| **Nav Link 2** | `SPECS` (Anchor: `#specifications`) |
| **Nav Link 3** | `SAVINGS` (Anchor: `#calculator`) |
| **Nav Link 4** | `MODELS` (Anchor: `#models`) |
| **Nav Link 5** | `SHOWROOMS` (Anchor: `#locations`) |
| **Action Button** | `TEST DRIVE ↗` (Anchor: `#inquire`) |
| **Mobile Menu Action** | `BOOK TEST DRIVE ↗` |

---

## 3. Hero Section (`src/components/HeroScrollytelling.tsx`)

### Initial 0% Scroll Load
| Element | Text Content |
| :--- | :--- |
| **Preloader State** | `LOADING STUDIO` |
| **Brand Location Tag** | `KATHMANDU · NEPAL` |
| **Architectural Wordmark** | `JINPENG` |
| **Bottom Micro-Indicator** | `SCROLL` |

### Reveal 1 (25% – 55% Scroll)
| Element | Text Content |
| :--- | :--- |
| **Vehicle Heading** | `Lingbox EV` |
| **Vehicle Subtitle** | `Built for Kathmandu’s narrowest streets and steepest climbs.` |
| **Action Button** | `EXPLORE VEHICLE ↗` (Anchor: `#vehicle`) |

### Reveal 2 (60% – 90% Scroll)
| Element | Text Content |
| :--- | :--- |
| **Feature Heading** | `Instant electric torque.` |
| **Spec Badge 1** | `100% ELECTRIC` |
| **Spec Badge 2** | `AGILE TURNING` |
| **Spec Badge 3** | `FAST CHARGING` |
| **Action Button** | `VIEW TRIMS & PRICING ↗` (Anchor: `#models`) |

---

## 4. Urban Architecture & Agility (`src/components/UrbanAgility.tsx`)

### Section Header
| Element | Text Content |
| :--- | :--- |
| **Main Heading** | `Engineered for Kathmandu’s living streets.` |
| **Section Description** | `Built around the physical realities of the Valley: narrow historic gallis, steep monsoon road transitions, and high-density curbside parking.` |

### Bento Grid Cards
#### Card 1: Ground Clearance
- **Badge:** `UNLADEN CLEARANCE`
- **Metric Value:** `160 mm`
- **Metric Label:** `RIDE HEIGHT`
- **Description:** `Clear high speed humps, uneven brick pavers, and monsoon puddles without underbody contact.`

#### Card 2: Turning Radius
- **Badge:** `MANEUVERABILITY`
- **Metric Value:** `4.5 m`
- **Metric Label:** `TURNING CIRCLE`
- **Description:** `Make clean U-turns in historic Patan, Ason, and Thamel alleys where larger vehicles require multiple reversals.`
- **Bottom Footnote:** `Steering System: Speed-Sensitive EPS`

#### Card 3: 5-Door Architecture
- **Badge:** `CABIN SPACE`
- **Metric Value:** `5 Doors`
- **Metric Label:** `4 ADULTS`
- **Description:** `Upright seating geometry with generous headroom and 60:40 fold-flat rear seats for market and grocery cargo.`

#### Card 4: Sub-3.6M Parking
- **Badge:** `FOOTPRINT`
- **Metric Value:** `3,584 mm`
- **Metric Label:** `TOTAL LENGTH`
- **Description:** `Park in half-sized curbside spaces across New Road, Durbarmarg, and hospital corridors with rear camera guidance.`

---

## 5. Technical Specifications (`src/components/TechnicalSpecs.tsx`)

### Section Header
| Element | Text Content |
| :--- | :--- |
| **Main Heading** | `Technical Specifications.` |
| **Section Description** | `Verified performance metrics for Kathmandu altitude, valley topography, and domestic Nepal Electricity Authority (NEA) charging.` |

### 4 Key Stat Dials
1. **`220 KM`** — `CITY RANGE` (`CLTC CYCLE`)
2. **`125 NM`** — `INSTANT TORQUE` (`FROM 0 RPM`)
3. **`35 KW`** — `MOTOR POWER` (`48 PS OUTPUT`)
4. **`35 MIN`** — `FAST CHARGE` (`30% TO 80%`)

### Tabs & Specification Rows

#### Tab 1: POWERTRAIN
- **Motor Type:** `Permanent Magnet Synchronous (PMSM)` | *Badge:* `Electric`
- **Drive Configuration:** `Front-Wheel Direct Drive` | *Badge:* `Single-Speed`
- **Peak Power:** `35 kW (48 PS)` | *Badge:* `Maximum`
- **Peak Torque:** `125 Nm` | *Badge:* `Instant`
- **Top Speed:** `100 km/h` | *Badge:* `Regulated`
- **Regenerative Braking:** `Multi-Stage Kinetic Recovery` | *Badge:* `Standard`

#### Tab 2: BATTERY & CHARGING
- **Chemistry:** `Lithium Iron Phosphate (LFP)` | *Badge:* `Cell Chemistry`
- **Pack Capacity:** `22.8 kWh` | *Badge:* `Usable`
- **AC Home Charging:** `6.5 hours (16A 220V standard outlet)` | *Badge:* `3.3 kW`
- **DC Fast Charging:** `35 minutes (30% to 80%)` | *Badge:* `CCS2 Ready`
- **Ingress Protection:** `IP67 Waterproof & Dustproof` | *Badge:* `Certified`
- **Mounting Architecture:** `Low Center-of-Gravity Floor Pack` | *Badge:* `Underbody`

#### Tab 3: CHASSIS & SAFETY
- **Front Suspension:** `MacPherson Strut Independent` | *Badge:* `Front Axle`
- **Rear Suspension:** `Torsion Beam Trailing Arm` | *Badge:* `Rear Axle`
- **Steering:** `Electric Power Steering (EPS)` | *Badge:* `Speed-Tuned`
- **Braking System:** `Front Ventilated Disc / Rear Drum` | *Badge:* `ABS + EBD`
- **Tire Specification:** `165/65 R14 Low Rolling Resistance` | *Badge:* `All-Season`
- **Airbag Protection:** `Dual Front SRS Airbags` | *Badge:* `Occupant`

#### Tab 4: DIMENSIONS
- **Exterior Dimensions:** `3,584 × 1,475 × 1,666 mm (L × W × H)` | *Badge:* `Envelope`
- **Wheelbase:** `2,455 mm` | *Badge:* `Chassis`
- **Ground Clearance:** `160 mm (Unladen)` | *Badge:* `Minimum`
- **Turning Radius:** `4.5 m (Kerb-to-Kerb)` | *Badge:* `Circle`
- **Curb Weight:** `960 kg` | *Badge:* `Mass`
- **Seating Capacity:** `4 Adults (5 Doors)` | *Badge:* `Configuration`

#### Side Visual Card
- **Badge:** `LFP PRISMATIC CELLS`
- **Heading:** `Thermal & Impact Enclosure`
- **Body Text:** `Reinforced side members isolate and protect the high-voltage pack against road debris and seasonal water immersion.`
- **Pill:** `IP67 Ingress Rated`

---

## 6. Running Cost Calculator (`src/components/CostCalculator.tsx`)

### Section Header
| Element | Text Content |
| :--- | :--- |
| **Main Heading** | `Compare Daily Running Costs.` |
| **Section Description** | `Kathmandu drivers spend over NPR 175 per litre on petrol. The Lingbox EV runs on domestic Nepal electricity at under NPR 1 per kilometre.` |

### Calculator Controls & Readings
- **Slider Label:** `Daily Commute Distance:`
- **Default Value:** `35 km / day (~12,775 km / year)`
- **Slider Steps:** `10 km (Inner City)` · `35 km (Valley Average)` · `100 km (Ring Road Commuter)`

### Rate Comparison
- **Conventional Petrol Hatchback:**
  - *Calculation Basis:* `12 km/L @ NPR 175/L`
  - *Rate:* `NPR 14.58 / km`
  - *Annual Cost Display:* `Annual fuel cost: NPR [dynamic]`
- **Lingbox EV:**
  - *Badge:* `94% Lower Energy Cost`
  - *Rate:* `NPR 0.85 / km`
  - *Annual Cost Display:* `Annual electricity cost: NPR [dynamic]`

### Total Savings Callout
- **Annual Savings Header:** `Estimated Annual Fuel Savings`
- **Dynamic Value:** `NPR [dynamic, e.g. 1,75,443]`
- **5-Year Savings Header:** `5-Year Total Savings`
- **5-Year Dynamic Value:** `NPR [dynamic, e.g. 8,77,215]`
- **Footnote:** `Reduces total ownership cost by up to 50%`

### 3 Benefit Capsules
1. `Charges from 16A 220V home socket`
2. `Zero engine oil or spark plug servicing`
3. `Exempt from annual fuel pollution levy`

---

## 7. Model Trims & Pricing (`src/components/ModelTrims.tsx`)

### Section Header
| Element | Text Content |
| :--- | :--- |
| **Main Heading** | `Models & Pricing in Nepal.` |
| **Section Description** | `Transparent showroom pricing including customs clearance, VAT, and a 3.3 kW home wall charger.` |

### Trim 1: Lingbox Urban
- **Trim Name:** `Lingbox Urban`
- **Tagline:** `19.2 kWh Battery · 180 km Range`
- **Range Pill:** `180 KM`
- **Price Label:** `Showroom Price`
- **Price:** `NPR 22,95,000`
- **Feature 1:** `180 km City Range (CLTC)`
- **Feature 2:** `35 kW Motor · 125 Nm Torque`
- **Feature 3:** `Digital Instrument Cluster`
- **Feature 4:** `3.3 kW AC Charger Included`
- **Button:** `Select Urban ↗`

### Trim 2: Lingbox Pro (Recommended)
- **Top Badge:** `RECOMMENDED FOR KATHMANDU`
- **Trim Name:** `Lingbox Pro`
- **Tagline:** `22.8 kWh Battery · 220 km Range · Fast Charge`
- **Range Pill:** `220 KM`
- **Price Label:** `Showroom Price`
- **Price:** `NPR 25,50,000`
- **Feature 1:** `220 km Extended City Range`
- **Feature 2:** `9-Inch HD Touchscreen`
- **Feature 3:** `Rear Vision Camera + Sensors`
- **Feature 4:** `DC Fast Charging Port Ready`
- **Button:** `Select Pro ↗`

### Trim 3: Lingbox Max
- **Trim Name:** `Lingbox Max`
- **Tagline:** `25.2 kWh Battery · 250 km Range · Dual-Tone`
- **Range Pill:** `250 KM`
- **Price Label:** `Showroom Price`
- **Price:** `NPR 27,95,000`
- **Feature 1:** `250 km Maximum Range Package`
- **Feature 2:** `Dual-Tone Studio Finish`
- **Feature 3:** `Eco-Leatherette Interior`
- **Feature 4:** `Hill-Start Assist Control (HAC)`
- **Button:** `Select Max ↗`

---

## 8. Kathmandu Showrooms & Service (`src/components/NetworkLocations.tsx`)

### Section Header
| Element | Text Content |
| :--- | :--- |
| **Main Heading** | `Showrooms & Service Centers.` |
| **Section Description** | `Factory-backed experience showrooms and dedicated high-voltage service bays across Kathmandu, Lalitpur, and Bhaktapur.` |

### Location 1: Jinpeng Naxal
- **Badge:** `Flagship Showroom`
- **Live Status:** `Open Today`
- **Name:** `Jinpeng Naxal`
- **Address:** `Gairidhara Road, Naxal, Kathmandu`
- **Hours:** `Sun – Fri: 9:30 AM – 6:30 PM`
- **Phone:** `+977-1-4528190`
- **Feature Tag:** `Full Model Range`

### Location 2: Jinpeng Tinkune
- **Badge:** `Delivery Hub`
- **Live Status:** `Open Today`
- **Name:** `Jinpeng Tinkune`
- **Address:** `Ring Road Corridor, Tinkune, Kathmandu`
- **Hours:** `Sun – Fri: 10:00 AM – 6:00 PM`
- **Phone:** `+977-1-4112340`
- **Feature Tag:** `PDI Inspection Lounge`

### Location 3: Baluwatar EV Diagnostics
- **Badge:** `Authorized Service`
- **Live Status:** `Open Today`
- **Name:** `Baluwatar EV Diagnostics`
- **Address:** `Prime Diagnostic Bay, Baluwatar, Kathmandu`
- **Hours:** `Sun – Fri: 9:00 AM – 5:30 PM`
- **Phone:** `+977-1-4439810`
- **Feature Tag:** `High-Voltage Scan Tools`

### 4 Support Pillars
1. **`8 Years / 150,000 KM`** — `Battery & Motor Warranty`
2. **`Genuine Factory Parts`** — `Stocked in Kathmandu`
3. **`Certified EV Engineers`** — `Factory Trained Staff`
4. **`24/7 Roadside Assistance`** — `Across Kathmandu Valley`

---

## 9. Test Drive & Booking Form (`src/components/InquiryBooking.tsx`)

### Left Informational Column
| Element | Text Content |
| :--- | :--- |
| **Brand Tag** | `JINPENG NEPAL` |
| **Main Heading** | `Book a test drive.` |
| **Body Description** | `Test the Lingbox EV on Kathmandu roads. Schedule a visit to our showrooms in Naxal or Tinkune, or request a doorstep vehicle demonstration.` |
| **Assurance 1** | `Same-day confirmation call from an authorized EV specialist.` |
| **Assurance 2** | `On-site exchange valuation for existing petrol/diesel vehicles.` |
| **Assurance 3** | `Commercial bank EV financing with flexible monthly instalments.` |

### Right Form Interactive Controls
- **Step 1 Label:** `Select Model`
  - Option 1: `Urban`
  - Option 2: `Pro`
  - Option 3: `Max`
- **Step 2 Label:** `Showroom / Demonstration`
  - Option 1: `Naxal Flagship`
  - Option 2: `Tinkune Hub`
  - Option 3: `Doorstep Demo`
- **Input 1 Label:** `Full Name *`
  - *Placeholder:* `e.g. Ramesh Shrestha`
- **Input 2 Label:** `Mobile Number *`
  - *Placeholder:* `+977 98XXXXXXXX`
- **Submit Button:** `Confirm Test Drive Booking ↗`

### Form Submission Confirmation Screen
- **Reference Code:** `BOOKING REFERENCE: #JP-[dynamic 6-digit code]`
- **Heading:** `Test Drive Reserved`
- **Message:** `Thank you, [Name]. Our test drive team will call you at [Phone] to confirm your slot for the [Trim].`
- **Reset Button:** `New Request`

---

## 10. Footer Section (`src/components/Footer.tsx`)

### Left Brand Column
- **Brand Title:** `JINPENG`
- **Brand Subtitle:** `NEPAL`
- **Mission Summary:** `Official distributor of Lingbox EV in Nepal. Urban electric mobility engineered for Kathmandu Valley and major highway corridors.`
- **Location:** `Kathmandu, Nepal`
- **Inquiries Email:** `contact@jinpengnepal.com`

### Center Quick Links
- **Column Heading:** `Vehicle & Specifications`
- **Link 1:** `Urban Architecture` (Anchor: `#vehicle`)
- **Link 2:** `Technical Specifications` (Anchor: `#specifications`)
- **Link 3:** `Running Cost Calculator` (Anchor: `#calculator`)
- **Link 4:** `Models & Pricing` (Anchor: `#models`)
- **Link 5:** `Showroom Network` (Anchor: `#locations`)

### Right Compliance & Breakdown
- **Column Heading:** `Standards & Compliance`
- **Notice:** `Compliant with Department of Transport Management (DoTM) standards, Government of Nepal EV custom classifications, and NEA home-charging safety protocols.`
- **Emergency Box Title:** `24/7 Valley Breakdown Line`
- **Emergency Phone:** `Emergency Service: +977-1-4439810`

### Bottom Bar
- **Copyright:** `© 2026 Jinpeng Nepal. All Rights Reserved. jinpengnepal.com`
- **Legal Link 1:** `Privacy Policy`
- **Legal Link 2:** `Terms of Service`
- **Legal Link 3:** `Warranty Manual`

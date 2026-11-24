# Design System & Tokens — Jinpeng Nepal (`jinpengnepal.com`)

## Visual World: Dark Automotive Studio
An ultra-minimalist, high-craft automotive exhibition space engineered for clarity, tactile interaction, and accurate vehicle presentation.

### Palette & Tokens
- **Background (`--color-studio-bg`):** `#0B0C0E` (Deep Studio Obsidian)
- **Primary Text (`--color-studio-text`):** `#F4F4F6` (Off-white, 96% luminance)
- **Secondary / Muted Text (`--color-studio-muted`):** `#8E939E` (Neutral automotive steel grey)
- **Hairline Border (`--color-studio-border`):** `rgba(255, 255, 255, 0.12)` (1px precision border)
- **Subtle Surface Tint:** `#0F1013` / `#121316` (Low-contrast elevated card plane)
- **Accent Emblem Red:** `#E8371B` (Official Jinpeng Shield red, used sparingly for brand emblem only)

### Absolute Visual Bans
1. **NO Color Gradients:** No linear or radial gradients on text, buttons, borders, or container cards.
2. **NO Glow Blobs / Neon Lighting:** No artificial colored glow rings or diffused blurred blobs.
3. **NO Asset Distortion:** Never distort or stretch vehicle photo frames or canvas aspect ratios.
4. **NO Kickers / Eyebrows:** In accordance with `@impeccable` Craft Floor, headings must carry their own weight without artificial category eyebrows or `01 / 02 / 03` numbering prefixes.

### Typography
- **Display / Headings:** `Space Grotesk` (`--font-space-grotesk`), weights 600 & 700.
  - Tracking: `tracking-[0.06em]` for architectural wordmark; `tracking-[-0.02em]` for section headlines.
- **Body & Micro-UI:** `DM Sans` (`--font-dm-sans`), weights 400 & 500.
  - Micro-labels: `text-[10px]` to `text-[11px]`, uppercase, `tracking-[0.16em]` to `tracking-[0.24em]`.

### Component Architecture & Motion
- **Hero Scrollytelling:** 400vh scroll track pinned with GSAP ScrollTrigger (`scrub: 1.0`) driving a Retina-scaled `<canvas>` scrubbing 293 vehicle frames decoupled via `requestAnimationFrame`.
- **Modern Capsule Buttons:** Pill geometry (`rounded-full`), hairline border `border-white/20`, subtle glass backdrop `bg-white/[0.04]`, smoothly inverting to `bg-white text-[#0B0C0E]` with directional arrow translation on hover.

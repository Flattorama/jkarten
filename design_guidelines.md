# Design Guidelines for Jonathan Karten Portfolio

## Design Approach
**Reference-Based Design**: Drawing inspiration from premium venture capital and professional portfolio sites (Sequoia Capital, Andreessen Horowitz, Linear) with a focus on authority, sophistication, and modern minimalism. The design emphasizes credibility, expertise, and dual-use technology investment thesis.

---

## Core Design Elements

### Typography
- **Primary Font**: Inter (sans-serif) - Body text, navigation, UI elements
  - Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
- **Display Font**: Playfair Display (serif) - Headlines, feature text
  - Regular (400), Semibold (600), Bold (700), Italic variants
- **Hierarchy**:
  - H1: 5xl to 8xl (serif, medium weight)
  - H2: 3xl (serif)
  - H3: sm to lg (sans-serif, semibold, often uppercase with tracking)
  - Body: lg to xl for hero/feature text, base for standard content
  - Small text: xs to sm with uppercase tracking for labels

### Layout System
**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 10, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-20 (mobile)
- Card padding: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8
- **Container**: max-w-7xl mx-auto with px-6 for consistent page width

### Color Palette
**Dark Theme Foundation**:
- Background: slate-950 (#020617)
- Secondary BG: slate-900 (#0f172a)
- Card/Surface: white/5 with white/10 borders
- Text Primary: white
- Text Secondary: slate-200, slate-300, slate-400
- Text Muted: slate-500

**Accent**:
- Primary Accent: Electric Blue (#3b82f6 / accent-500)
- Hover: #2563eb (accent-600)
- Use for CTAs, highlights, animated elements, links

### Component Library

**Navigation**:
- Fixed header with backdrop blur on scroll (bg-slate-950/90)
- Logo: serif font, white with muted second word
- Links: text-sm, medium weight, slate-400 default, white on hover
- Mobile: hamburger menu with slide-down full-width panel

**Hero Section**:
- min-h-[80vh] with pt-32/48 for spacing under fixed nav
- Status badge: inline-flex with pulse dot, white/5 background
- Large serif headlines (5xl-8xl) with muted second line
- Primary CTA: white background, dark text
- Secondary CTA: transparent with white/20 border
- Background: Abstract grid SVG overlay at 20% opacity, positioned top-right

**Bento Grid** (Bio/Features Section):
- Grid: md:grid-cols-3, gap-6
- Cards: rounded-2xl, slate-900 background, white/10 borders
- Hover: translateY(-4px), blue glow shadow, accent border
- Icon placement: top-right, size-32, accent color
- Varying row/column spans for visual interest
- Stats: Large serif numbers (4xl), small uppercase labels

**Cards**:
- Standard: rounded-xl, white/5 bg, white/10 border
- Padding: p-6 to p-8
- Subtle hover elevations
- Icons positioned top-right or inline with content

**Buttons**:
- Primary: bg-white text-slate-950, px-8 py-3, rounded-lg
- Secondary: border border-white/20, transparent bg, hover:bg-white/5
- Font: semibold to medium weight
- Hover transitions: 300ms ease

**Badges/Tags**:
- Inline-flex, rounded-full
- bg-white/5, border-white/10
- px-4 py-1.5, text-xs uppercase tracking-wide
- Animated pulse dots for status indicators

### Interaction Patterns

**Animations** (Use Sparingly):
- Pulse: Slow 4s pulse on status indicators
- Hover: 300ms transform/shadow transitions on cards
- Scroll: Backdrop blur activation on nav
- NO heavy scroll animations or complex transitions

**Scrollbar Styling**:
- Width: 8px
- Track: slate-950
- Thumb: slate-700, rounded, hover to slate-600

### Images
**Hero Section**: Abstract grid SVG pattern (geometric, tech-forward) positioned top-right with radial gradient mask, 20% opacity

**Icons**: Lucide icon library exclusively
- Key icons: Shield (security), TrendingUp (investment), Lock (cybersecurity), Brain (intelligence), Briefcase (venture), Globe (global)
- Size: 24-32px for feature cards, 16-20px inline
- Color: accent-500 or white

---

## Page Structure

**Sections** (in order):
1. **Hero**: Large headline, subtext, dual CTAs, background graphic
2. **Bio/Expertise (Bento Grid)**: Multi-card layout with varying sizes showcasing credentials, experience, focus areas
3. **Investment Thesis**: Dual-use technology focus, key principles
4. **Portfolio**: Company logos/cards, investment focus areas
5. **Insights**: Article previews or thought leadership content
6. **Contact**: Social links (LinkedIn, Twitter, Email), CTA

**Viewport Management**:
- Hero: 80vh minimum height
- Other sections: Natural content height with generous py-20/32 spacing
- No forced 100vh sections except hero

---

## Quality Standards
- **Selection Effect**: All text uses accent-500 background, white text
- **Consistent Borders**: Always white/10 for card borders, white/20 for button outlines
- **Professional Polish**: Subtle elevations, refined typography, purposeful whitespace
- **Mobile-First**: Stack to single column, increase touch targets, collapsible navigation
- **Performance**: CDN fonts, optimized SVG, minimal animation overhead
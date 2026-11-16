# NEMESIS — Design System & Visual Identity

> This document is the complete visual and UI/UX reference for the NEMESIS e-commerce storefront.
> It should be consulted throughout development to maintain visual consistency.

---

## 1. Brand Identity

### Brand Name

**NEMESIS**

### Tagline

**"NOT MADE TO FIT IN."**

### Brand Personality

Rebellious · Unapologetic · Youthful · Underground · Experimental · Bold

### Visual Direction

NEMESIS is a fictional independent Y2K streetwear brand. The visual identity draws from:

- Early 2000s streetwear culture
- Underground fashion magazines and editorial layouts
- Punk and alternative fashion
- Chrome and metallic Y2K graphic design
- Distressed typography
- Dramatic fashion campaign photography
- Experimental editorial layouts

The website should feel like a professionally art-directed fashion brand storefront — not a generic e-commerce template or a beginner tutorial project.

### Visual Reference Analysis

The primary visual reference (Redline streetwear storefront screenshot) establishes the editorial direction:

| Element | Reference Treatment | NEMESIS Adaptation |
|---------|--------------------|--------------------|
| Hero section | Full-viewport, deep magenta/burgundy background | Deep Burgundy (#65002D) dominant, Magenta (#E90065) accents |
| Photography | Oversized campaign photo, dramatic top-down angle, model with streetwear | Y2K campaign photography placeholder, dramatic lighting |
| Headline | "Built for those who never blend in." — large, left-aligned, white | "NOT MADE TO FIT IN." — Bebas Neue, left-aligned, Off White |
| Navigation | Minimal, centered: Shop, Drops, Lookbook, About | Same nav structure, NEMESIS branding top-left |
| CTA | Yellow "Shop the Drop →" button, strong contrast | Signal Yellow "SHOP THE DROP" with arrow icon |
| Grid lines | Thin white lines creating asymmetric section divisions | `rgba(255,255,255,0.15)` grid lines on dark backgrounds |
| Editorial labels | Small uppercase text: "RAW", "LIMITED DROP", "ICON" | Similar scattered labels: "LIMITED DROP", "RAW", "ICON" |
| Brand name | Appears mid-right in the grid | "NEMESIS" appears in the grid, Bebas Neue |
| Tagline area | "streetwear for a new generation" — small, right-side | "streetwear for a new generation" or custom tagline |
| Icons | Search (🔍) and cart with count badge (🛍) top-right | lucide-react Search + ShoppingBag with magenta badge |
| Layout | Asymmetric CSS Grid with thin border divisions | Preserved — the signature characteristic |

---

## 2. Color System

### Primary Palette

| Name | HEX | CSS Variable | Usage |
|------|------|-------------|-------|
| Deep Burgundy | `#65002D` | `--color-burgundy` | Hero backgrounds, campaign sections, primary dark accent |
| Electric Magenta | `#E90065` | `--color-magenta` | Highlights, hover states, brand energy, cart badge |
| Signal Yellow | `#F5C400` | `--color-yellow` | CTA buttons, important highlights, urgency signals |
| Near Black | `#171717` | `--color-black` | Body text, dark sections, product browsing backgrounds |
| Off White | `#F5F2F0` | `--color-white` | Light backgrounds, text on dark, contrast surfaces |
| Chrome/Silver | `#C0C0C0` | `--color-chrome` | Y2K metallic accents, subtle borders, decorative elements |

### Extended Palette

| Name | HEX | CSS Variable | Usage |
|------|------|-------------|-------|
| Pure White | `#FFFFFF` | `--color-pure-white` | Form inputs, bright surfaces |
| Pure Black | `#000000` | `--color-pure-black` | Maximum contrast text |
| Error Red | `#D32F2F` | `--color-error` | Form validation errors |
| Success Green | `#2E7D32` | `--color-success` | Success states, confirmations |
| Neutral Gray | `#EDEDED` | `--color-gray` | Product image backgrounds |
| Yellow Hover | `#DDB200` | `--color-yellow-hover` | Darkened yellow for CTA hover |

### Color Usage Rules

- **Hero & campaign sections**: Burgundy dominant, magenta accents, off-white text
- **Dark sections** (product browsing, footer): Near Black background, off-white text
- **Light sections** (cart, checkout, forms): Off White background, near-black text
- **CTA buttons**: Signal Yellow background with Near Black text
- **Hover accents**: Electric Magenta for links and interactive elements
- **Metallic/Y2K accents**: Chrome/Silver used sparingly for decorative elements
- **Never** use all six colors in a single section — maintain deliberate hierarchy

---

## 3. Typography

### Font Families

#### Display / Headlines: Bebas Neue

- **Source**: [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue)
- **Weight**: 400 (Regular — only weight available)
- **Character**: Tall, condensed, all-caps display font
- **Usage**: Hero headlines, section titles, page headings, brand name, large visual moments
- **Why chosen**: Immediately evokes editorial fashion magazines and streetwear culture. Its tall, condensed form commands attention without being aggressive.

#### Body / UI: Inter

- **Source**: [Google Fonts](https://fonts.google.com/specimen/Inter)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- **Character**: Clean, modern, highly readable geometric sans-serif
- **Usage**: Body text, navigation, buttons, product info, forms, labels, prices, captions
- **Why chosen**: Exceptional readability at all sizes, designed for screens, pairs naturally with bold display fonts without competing.

### Type Scale

| Role | Font | Size (Desktop) | Weight | Transform | Letter Spacing | CSS Variable |
|------|------|----------------|--------|-----------|----------------|-------------|
| Hero Headline | Bebas Neue | 80–96px | 400 | uppercase | 0.02em | `--text-hero` |
| Section Title | Bebas Neue | 48px | 400 | uppercase | 0.02em | `--text-section` |
| Page Title | Bebas Neue | 36px | 400 | uppercase | 0.02em | `--text-page` |
| Subtitle | Inter | 20px | 300 | none | normal | `--text-subtitle` |
| Body | Inter | 16px | 400 | none | normal | `--text-body` |
| Body Small | Inter | 14px | 400 | none | normal | `--text-small` |
| Editorial Label | Inter | 11px | 500 | uppercase | 0.08em | `--text-label` |
| Button Text | Inter | 14px | 600 | uppercase | 0.06em | — |
| Nav Link | Inter | 14px | 400 | none | 0.02em | — |
| Price | Inter | 18–20px | 600 | none | normal | — |
| Caption | Inter | 12px | 400 | none | normal | `--text-caption` |

### Mobile Type Scale Adjustments

| Role | Mobile Size | Tablet Size |
|------|------------|-------------|
| Hero Headline | 40px | 56px |
| Section Title | 32px | 40px |
| Page Title | 28px | 32px |
| Subtitle | 18px | 18px |
| Body | 16px | 16px |

### Typography Rules

- Headlines use Bebas Neue exclusively — never Inter for headings
- Body text uses Inter exclusively — never Bebas Neue for paragraphs
- Maximum body text line length: 75 characters
- Body line-height: 1.6
- Headline line-height: 1.0–1.1
- Editorial labels: always uppercase, always Inter, always tracked out

---

## 4. Spacing System

Base unit: **4px**

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| xs | 4px | `--space-xs` | Tight gaps, icon padding, badge offset |
| sm | 8px | `--space-sm` | Small gaps, inline spacing, label margins |
| md | 16px | `--space-md` | Standard component padding, form field gaps |
| lg | 24px | `--space-lg` | Section internal padding, card padding, form gaps |
| xl | 32px | `--space-xl` | Between components, card gaps |
| 2xl | 48px | `--space-2xl` | Section gaps, major separations |
| 3xl | 64px | `--space-3xl` | Page section breaks, container padding (desktop) |
| 4xl | 96px | `--space-4xl` | Hero section padding, dramatic spacing |

### Container & Layout

| Property | Value | CSS Variable |
|----------|-------|-------------|
| Max content width | 1440px | `--container-max` |
| Container padding (mobile) | 16px | `--container-padding` (base) |
| Container padding (tablet) | 32px | (media query override) |
| Container padding (desktop) | 48px | (media query override) |
| Navbar height | 64px | `--navbar-height` |

### Spacing Principles

- Use generous whitespace — let content breathe
- Asymmetric layouts are preferred over centered/symmetric
- Consistent spacing within components, generous spacing between sections
- Double or triple spacing for dramatic visual breaks (hero sections)

---

## 5. Borders & Dividers

### Grid Lines (Signature Visual Element)

Thin grid lines are the most distinctive visual characteristic from the reference. They create the editorial, magazine-style layout.

| Style | CSS Value | Variable | Usage |
|-------|-----------|----------|-------|
| Light grid line | `1px solid rgba(255,255,255,0.15)` | `--border-grid-light` | On dark/burgundy backgrounds |
| Dark grid line | `1px solid rgba(23,23,23,0.1)` | `--border-grid-dark` | On light/off-white backgrounds |
| Subtle border | `1px solid rgba(23,23,23,0.08)` | `--border-subtle` | Very subtle separators |
| Input border | `1px solid rgba(23,23,23,0.2)` | `--border-input` | Form field borders |

### Border Radius

| Element | Radius | Reasoning |
|---------|--------|-----------|
| Buttons | 0px | Sharp, streetwear aesthetic — not soft tech |
| Product cards | 0px | Editorial grid alignment |
| Form inputs | 2px | Barely perceptible softening |
| Notifications | 4px | Slight rounding for toast messages |
| Cart badge | 50% (circle) | Round badge on cart icon |

---

## 6. Buttons

### Primary CTA (Signal Yellow)

```
Background:       #F5C400 (--color-yellow)
Text:             #171717 (--color-black)
Font:             Inter, 14px, 600 weight, uppercase
Letter-spacing:   0.06em
Padding:          14px 32px
Border:           none
Border-radius:    0
Cursor:           pointer

Hover:            background #DDB200 (--color-yellow-hover), transform scale(1.02)
Active:           transform scale(0.98)
Focus:            outline 2px solid var(--color-magenta), outline-offset 2px
Disabled:         opacity 0.5, cursor not-allowed
```

### Secondary Button (Outlined)

```
Background:       transparent
Text:             #F5F2F0 (--color-white) on dark, #171717 on light
Border:           1px solid currentColor
Font:             Inter, 14px, 600 weight, uppercase
Padding:          14px 32px
Border-radius:    0

Hover:            background fills (white on dark → text goes black, black on light → text goes white)
```

### Dark Button

```
Background:       #171717 (--color-black)
Text:             #F5F2F0 (--color-white)
Font:             Inter, 14px, 600 weight, uppercase
Padding:          14px 32px
Border:           none
Border-radius:    0

Hover:            background #2a2a2a
```

### Ghost Button (Icon Buttons)

```
Background:       transparent
Text/Icon:        inherit
Border:           none
Padding:          8px
Border-radius:    0

Hover:            opacity 0.7
```

Used for: search icon, cart icon, close button, quantity controls.

---

## 7. Icons

Using **lucide-react** library exclusively.

| Icon Component | Usage | Size | Stroke Width |
|---------------|-------|------|-------------|
| `<Search />` | Navigation search button | 20px | 1.5 |
| `<ShoppingBag />` | Cart icon in navigation | 20px | 1.5 |
| `<Menu />` | Mobile menu hamburger | 24px | 1.5 |
| `<X />` | Close mobile menu, dismiss modals | 24px | 1.5 |
| `<Plus />` | Increase quantity | 16px | 1.5 |
| `<Minus />` | Decrease quantity | 16px | 1.5 |
| `<Trash2 />` | Remove item from cart | 18px | 1.5 |
| `<ChevronRight />` | Breadcrumbs, navigation cues | 16px | 1.5 |
| `<ArrowRight />` | CTA arrows ("SHOP THE DROP →") | 18px | 1.5 |
| `<ChevronDown />` | Dropdown indicators | 16px | 1.5 |

### Icon Style Rules

- Stroke width **1.5** (thinner than the 2px default — more editorial, less chunky)
- Icons are always inline with text or stand alone as ghost buttons
- Never use filled icon variants — stroke only
- Icon color inherits from parent text color

---

## 8. Interactive States

### Hover Effects

| Element | Hover Behavior | Transition |
|---------|---------------|------------|
| Primary CTA | Background darkens, slight scale(1.02) | 250ms ease |
| Secondary Button | Background fills, text color inverts | 250ms ease |
| Nav links | Opacity drops to 0.7 | 150ms ease |
| Icon buttons | Opacity drops to 0.7 | 150ms ease |
| Product card image | Image scales to 1.05 (overflow hidden) | 400ms ease |
| Product card title | Color shifts to magenta | 250ms ease |
| Footer links | Opacity drops to 0.7 | 150ms ease |

### Focus States (Accessibility)

All interactive elements must have a visible focus indicator:

```css
:focus-visible {
  outline: 2px solid var(--color-magenta);
  outline-offset: 2px;
}
```

### Active/Pressed States

- Buttons: `transform: scale(0.98)` — subtle press feedback
- Links: standard browser behavior

### Transition Variables

```css
--transition-fast: 150ms ease;   /* Quick feedback: nav, icons */
--transition-base: 250ms ease;   /* Standard: buttons, colors */
--transition-slow: 400ms ease;   /* Dramatic: image zoom, reveals */
```

---

## 9. Responsive Breakpoints

### Breakpoint Values

| Name | Min Width | Target |
|------|-----------|--------|
| Mobile (base) | 0px | Small phones |
| Mobile Large | 480px | Large phones |
| Tablet | 768px | Tablets, small laptops |
| Desktop | 1024px | Standard desktops |
| Wide | 1440px | Large screens |

### Strategy: Mobile-First

Base styles target mobile screens. Larger breakpoints override progressively:

```css
/* Base: mobile styles */

@media (min-width: 768px)  { /* Tablet overrides */ }
@media (min-width: 1024px) { /* Desktop overrides */ }
@media (min-width: 1440px) { /* Wide screen overrides */ }
```

---

## 10. Page Specifications

### 10.1 Homepage

The homepage is the brand statement. It should feel like an editorial fashion campaign — not a product catalog.

#### Layout (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│  NEMESIS          Shop   Drops   Lookbook   About  🔍 🛍 │  Navbar
├────────────────────────┬──────────────────┬─────────────┤
│                        │                  │     RAW     │  ← Editorial label
│                        │                  │             │
│   NOT MADE             │                  ├─────────────┤
│   TO FIT IN.           │  [Campaign       │             │
│                        │   Photography]   │   NEMESIS   │  ← Brand in grid
│                        │                  │             │
│  ┌──────────────────┐  │                  ├─────────────┤
│  │ SHOP THE DROP  → │  │                  │ streetwear  │
│  └──────────────────┘  │                  │ for a new   │
│                        │                  │ generation  │
├────────────────────────┤                  ├─────────────┤
│   LIMITED DROP         │                  │       ICON  │
├────────────────────────┴──────────────────┴─────────────┤
│                                                         │
│           [Editorial Grid — Featured Section]           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                        Footer                           │
└─────────────────────────────────────────────────────────┘
```

#### Hero Section Specifications

- **Background**: Deep Burgundy (`#65002D`)
- **Min height**: 100vh (full viewport)
- **Layout**: CSS Grid with asymmetric columns
- **Headline**: "NOT MADE TO FIT IN." — Bebas Neue, 80–96px, Off White, left-aligned
- **CTA**: "SHOP THE DROP →" — Primary Yellow button with ArrowRight icon
- **Campaign photo**: Oversized, bleeds across grid cells, dramatic top-down or editorial angle
- **Grid lines**: Thin white lines (`rgba(255,255,255,0.15)`) creating asymmetric divisions
- **Editorial labels**: "RAW", "LIMITED DROP", "ICON" — small uppercase Inter, 11px, scattered in grid cells
- **Brand name**: "NEMESIS" appears in a grid cell, Bebas Neue, ~36px
- **Subtext**: "streetwear for a new generation" — Inter 14px, Off White, right side

#### Editorial Grid Section

- Below the hero
- Background: Near Black (`#171717`) for contrast
- Featured collections or product highlights
- Asymmetric CSS Grid layout
- Thin grid line borders between cells
- Large photography or bold typography blocks

#### Mobile Adaptation

- Hero becomes single column
- Photo at top, headline below, CTA full-width below headline
- Editorial labels hidden or repositioned
- Grid lines simplify to horizontal dividers
- Editorial grid becomes single column or 2-column

#### Colors Used on Homepage

| Section | Background | Text | Accent |
|---------|-----------|------|--------|
| Navbar | Transparent (over hero) | Off White | — |
| Hero | Deep Burgundy | Off White | Yellow CTA |
| Editorial Grid | Near Black | Off White | Magenta accents |
| Footer | Near Black | Off White | Chrome accents |

---

### 10.2 Shop / Product Listing

#### Layout

```
┌─────────────────────────────────────────┐
│  Navbar                                  │
├─────────────────────────────────────────┤
│  SHOP                    [Search Bar]    │  ← Page title + search
├─────────────────────────────────────────┤
│  All  |  Electronics  |  Jewelry  | ... │  ← Category filters
├────────┬────────┬────────┬──────────────┤
│ [Card] │ [Card] │ [Card] │ [Card]       │  ← Product grid (4-col)
├────────┼────────┼────────┼──────────────┤
│ [Card] │ [Card] │ [Card] │ [Card]       │
├────────┴────────┴────────┴──────────────┤
│  Footer                                  │
└─────────────────────────────────────────┘
```

#### Specifications

- **Page title**: "SHOP" — Bebas Neue, page title size, Near Black
- **Background**: Off White (`#F5F2F0`)
- **Search bar**: Full-width or right-aligned, with Search icon inside
- **Category filters**: Horizontal row, text-style buttons, active state underline + magenta
- **Product grid**: CSS Grid, gap of 1px (thin grid line effect)
  - Desktop: 4 columns
  - Tablet: 3 columns
  - Mobile: 2 columns
- **Loading state**: Skeleton pulse animation placeholders
- **Error state**: Centered message with retry button
- **Empty state**: "No products found" message

---

### 10.3 Product Details

#### Layout (Desktop)

```
┌─────────────────────────────────────────┐
│  Navbar                                  │
├──────────────────┬──────────────────────┤
│                  │  Category label       │
│                  │                      │
│  [Product        │  PRODUCT TITLE       │
│   Image]         │                      │
│                  │  $XX.XX              │
│                  │                      │
│                  │  Description text...  │
│                  │                      │
│                  │  ─ Qty ─  [ - 1 + ]  │
│                  │                      │
│                  │  [ADD TO BAG]         │
├──────────────────┴──────────────────────┤
│  Footer                                  │
└─────────────────────────────────────────┘
```

#### Specifications

- **Layout**: Two equal columns on desktop, stacked on mobile
- **Background**: Off White
- **Image area**: Neutral gray (`#EDEDED`) background, centered product image
- **Category**: Editorial label style — Inter 11px, uppercase, Chrome color
- **Title**: Bebas Neue, 36px, Near Black
- **Price**: Inter 20px, 600 weight, Near Black
- **Description**: Inter 16px, 400 weight, line-height 1.6
- **Quantity selector**: Simple inline flex — Minus button, count display, Plus button
- **Add to cart**: Primary Yellow CTA, full-width on mobile
- **Dividers**: Thin `--border-subtle` between info sections

#### Mobile

- Image stacks above info, full-width
- Add to cart button becomes sticky at bottom or full-width

---

### 10.4 Shopping Cart

#### Layout (Desktop)

```
┌─────────────────────────────────────────┐
│  Navbar                                  │
├─────────────────────────────────────────┤
│  YOUR BAG                                │
├──────────────────────────┬──────────────┤
│  [Img] Item Name    $XX  │  Subtotal    │
│        Qty: - 1 +   🗑   │  $XXX.XX    │
│  ────────────────────────│             │
│  [Img] Item Name    $XX  │  Shipping   │
│        Qty: - 1 +   🗑   │  Free       │
│  ────────────────────────│             │
│                          │  ────────── │
│                          │  Total      │
│                          │  $XXX.XX    │
│                          │             │
│                          │ [CHECKOUT]  │
├──────────────────────────┴──────────────┤
│  Footer                                  │
└─────────────────────────────────────────┘
```

#### Specifications

- **Page title**: "YOUR BAG" — Bebas Neue, page title size
- **Background**: Off White
- **Cart items**: Left/main column (desktop), full-width (mobile)
  - Product thumbnail: 80×80px
  - Product name: Inter 16px, 500 weight
  - Category: Editorial label, Chrome color
  - Price: Inter 16px, 600 weight
  - Quantity controls: Ghost buttons with Plus/Minus icons, count between
  - Remove: Trash2 icon ghost button, color shifts to magenta on hover
  - Dividers: `--border-grid-dark` between items
- **Order summary**: Right sidebar (desktop), full-width below items (mobile)
  - Background: Pure White with subtle border
  - Subtotal, shipping, total displayed
  - Total: Inter 20px, 600 weight
  - CTA: "PROCEED TO CHECKOUT" — Primary Yellow, full-width

#### Empty Cart State

- **Headline**: "YOUR BAG IS EMPTY" — Bebas Neue, section title
- **Subtext**: "Looks like you haven't added anything yet." — Inter 16px
- **CTA**: "SHOP NOW" — Primary Yellow button linking to /shop
- Centered vertically and horizontally

---

### 10.5 Checkout

#### Layout (Desktop)

```
┌─────────────────────────────────────────┐
│  Navbar                                  │
├─────────────────────────────────────────┤
│  CHECKOUT                                │
├──────────────────────────┬──────────────┤
│  Shipping Information    │  Order       │
│                          │  Summary     │
│  Full Name    [_______]  │              │
│  Email        [_______]  │  Item × 2   │
│  Phone        [_______]  │  $XX.XX     │
│  Address      [_______]  │              │
│  City         [_______]  │  ────────── │
│                          │  Subtotal   │
│                          │  $XXX.XX    │
│                          │  Total      │
│                          │  $XXX.XX    │
│                          │             │
│                          │ [PLACE ORDER]│
├──────────────────────────┴──────────────┤
│  Footer                                  │
└─────────────────────────────────────────┘
```

#### Form Specifications

| Field | Type | Validation |
|-------|------|-----------|
| Full Name | text | Required, min 2 characters |
| Email | email | Required, valid email format |
| Phone | tel | Required, min 10 digits |
| Address | text | Required, min 5 characters |
| City | text | Required, min 2 characters |

#### Form Styling

```
Label:            Inter 12px, 500 weight, uppercase, 0.04em tracking, margin-bottom 6px
Input height:     48px
Input background: #FFFFFF (--color-pure-white)
Input border:     1px solid rgba(23,23,23,0.2) (--border-input)
Input radius:     2px
Input padding:    0 16px
Input font:       Inter 16px, 400 weight
Focus border:     var(--color-magenta)
Error border:     var(--color-error) #D32F2F
Error text:       Inter 12px, var(--color-error), margin-top 4px
Field gap:        24px (--space-lg)
```

#### Order Summary Panel

- Positioned in right column (desktop), below form (mobile)
- Lists all items with name, quantity, and line price
- Subtotal and Total
- "PLACE ORDER" — Primary Yellow CTA

#### Order Confirmation State

After successful submission, replaces the form:

- **Headline**: "ORDER CONFIRMED" — Bebas Neue, section title
- **Subtext**: "Thank you for your order." — Inter 16px
- **Order summary**: Repeat of items and total
- **CTA**: "CONTINUE SHOPPING" — Dark button linking to /shop

---

## 11. Component Specifications

### Navbar

```
Height:           64px
Position:         fixed, top: 0, z-index: 100
Background:       transparent (over hero), transitions to Near Black when scrolled (optional)
Padding:          0 var(--space-3xl)

Layout:           [Brand]          [Nav Links]          [Icons]
                  flex-start       center               flex-end

Brand:            "NEMESIS" — Bebas Neue, 24px, Off White, letter-spacing 0.04em
Nav Links:        "Shop" "Drops" "Lookbook" "About" — Inter 14px, 400, Off White
                  Gap: var(--space-xl) between links
                  "Drops", "Lookbook", "About" are non-functional placeholders
                  Only "Shop" links to /shop via React Router
Icons:            Search + ShoppingBag — 20px, stroke 1.5, Off White
                  Gap: var(--space-md) between icons

Cart Badge:
  Position:       absolute, top-right corner of ShoppingBag
  Background:     var(--color-magenta)
  Size:           16px circle (border-radius 50%)
  Font:           Inter 10px, 600 weight, white
  Content:        Item count number
  Hidden when:    count is 0
```

#### Mobile Navbar

```
Nav links:        Hidden
Hamburger:        Menu icon (24px) replaces nav links area
Mobile menu:      Full-screen overlay, Near Black background
                  Nav links stacked vertically, centered
                  Large touch targets (48px+ height)
                  X icon to close
```

---

### Footer

```
Background:       var(--color-black) #171717
Padding:          var(--space-4xl) var(--space-3xl) var(--space-2xl)
Color:            var(--color-white) #F5F2F0
Border-top:       1px solid rgba(255,255,255,0.1)
```

#### Layout (Desktop — 4 Columns)

| Column 1 | Column 2 | Column 3 | Column 4 |
|-----------|----------|----------|----------|
| **NEMESIS** (Bebas Neue 24px) | **SHOP** (label) | **HELP** (label) | **FOLLOW** (label) |
| "NOT MADE TO FIT IN." (Inter 14px) | New Arrivals | Contact | Instagram |
| | Tops | FAQ | Twitter |
| | Bottoms | Shipping | TikTok |
| | Accessories | Returns | |

Bottom row: `© 2024 NEMESIS. All rights reserved.` — Inter 12px, Chrome color

#### Mobile Footer

- Single column, sections stacked
- Section labels as collapsible headers or all expanded
- Generous padding between sections

---

### Product Card

```
Border:           var(--border-grid-dark) on light background
Border-radius:    0
Cursor:           pointer
Background:       transparent

Image Container:
  Aspect-ratio:   1 / 1 (square) or 4 / 5
  Background:     #EDEDED (neutral gray)
  Overflow:       hidden
  Display:        flex, center items
  Padding:        var(--space-lg)

Image:
  Object-fit:     contain
  Max-height:     100%
  Transition:     transform var(--transition-slow)
  Hover:          transform scale(1.05)

Info Section:
  Padding:        var(--space-md) var(--space-sm)

Title:
  Font:           Inter 14px, 500 weight
  Color:          var(--color-black)
  Max-lines:      2 (line-clamp)
  Hover:          color var(--color-magenta)

Price:
  Font:           Inter 16px, 600 weight
  Color:          var(--color-black)
  Margin-top:     var(--space-xs)
```

---

### Search Bar

```
Container:        relative, full-width
Icon:             Search icon, positioned absolute left 16px
Input:
  Width:          100%
  Height:         44px
  Background:     var(--color-pure-white) or transparent
  Border:         var(--border-input)
  Border-radius:  0
  Padding:        0 16px 0 44px (left padding for icon)
  Font:           Inter 14px, 400
  Placeholder:    "Search products..." (Chrome color)
  Focus:          border-color var(--color-magenta)
```

---

### Category Filters

```
Layout:           horizontal flex, gap var(--space-lg)
                  overflow-x auto on mobile (horizontal scroll)

Filter Button:
  Background:     transparent
  Border:         none
  Font:           Inter 14px, 400, uppercase, 0.04em tracking
  Color:          var(--color-black) at 0.6 opacity
  Padding:        var(--space-sm) 0
  Cursor:         pointer
  Border-bottom:  2px solid transparent

Active State:
  Color:          var(--color-magenta)
  Font-weight:    600
  Border-bottom:  2px solid var(--color-magenta)
  Opacity:        1

Hover:
  Opacity:        1
```

---

### Cart Item Row

```
Layout:           flex row, align-items center
Padding:          var(--space-lg) 0
Border-bottom:    var(--border-grid-dark)

Thumbnail:
  Width:          80px
  Height:         80px
  Background:     #EDEDED
  Object-fit:     contain
  Flex-shrink:    0

Info:
  Flex:           1
  Padding:        0 var(--space-md)
  Name:           Inter 16px, 500
  Category:       Inter 11px, uppercase, Chrome color

Quantity:
  Display:        inline-flex, align-items center, gap var(--space-sm)
  Buttons:        Ghost buttons with Plus/Minus icons (16px)
  Count:          Inter 14px, 500, min-width 32px, text-align center

Price:
  Font:           Inter 16px, 600
  Min-width:      80px
  Text-align:     right

Remove:
  Ghost button with Trash2 icon (18px)
  Hover:          color var(--color-magenta)
```

---

### Cart Summary

```
Background:       var(--color-pure-white)
Border:           var(--border-grid-dark)
Padding:          var(--space-xl)

Row:
  Display:        flex, justify-content space-between
  Padding:        var(--space-sm) 0
  Font:           Inter 14px, 400

Total Row:
  Font:           Inter 20px, 600
  Padding-top:    var(--space-md)
  Border-top:     var(--border-grid-dark)
  Margin-top:     var(--space-md)

CTA:
  Primary Yellow button, full-width
  Margin-top:     var(--space-lg)
```

---

### Notifications (react-hot-toast)

```
Position:         top-right
Duration:         3000ms

Style:
  Background:     var(--color-black)
  Color:          var(--color-white)
  Font:           Inter 14px, 400
  Border-radius:  4px
  Padding:        12px 16px
  Box-shadow:     0 4px 12px rgba(0,0,0,0.15)
```

---

## 12. Photography & Asset Guidelines

### Hero Campaign Photography

- **Style**: Dramatic Y2K fashion campaign photography
- **Characteristics**:
  - Dramatic or unconventional camera angles (top-down, extreme low angle, Dutch angle)
  - Saturated magenta, pink, or warm lighting (matching the Burgundy/Magenta palette)
  - Flash photography or high-contrast studio lighting
  - Models wearing streetwear: oversized hoodies, graphic tees, chains, sunglasses, beanies
  - Underground, editorial feel — not polished commercial stock
- **Minimum resolution**: 1920×1080px
- **Format**: JPEG or WebP, optimized for web (<500KB target)

### Editorial Grid Photography

- Additional campaign-style images for featured sections
- Detail shots: clothing textures, metallic accessories, chrome elements
- Environmental shots: urban settings, warehouses, nightlife
- Chrome and metallic visual elements for Y2K authenticity

### Product Images

- Product images come from the **Fake Store API** and must be used as-is
- Do **not** replace API product images with unrelated fashion assets
- Product card containers use neutral gray (#EDEDED) background to normalize different image styles

### Required Asset Placeholders

During scaffolding, the following assets are documented as needed but represented by colored placeholder containers:

| Asset | Purpose | Recommended Size | Placeholder |
|-------|---------|-----------------|-------------|
| `hero-campaign.jpg` | Homepage hero photograph | 1920×1080 | Burgundy container with "CAMPAIGN IMAGE" label |
| `editorial-1.jpg` | Editorial grid section | 800×1000 | Dark container with label |
| `editorial-2.jpg` | Editorial grid section | 800×600 | Dark container with label |

> **Note**: During development, styled placeholder containers will be used. Actual Y2K streetwear photography should be sourced before production deployment. Do not use generic technology stock photos, random stock imagery, or AI-generated fashion graphics.

---

## 13. Responsive Design Strategy

### Breakpoint Behavior Summary

| Element | Mobile (<768px) | Tablet (768–1023px) | Desktop (1024px+) |
|---------|-----------------|---------------------|-------------------|
| Navbar | Hamburger menu | Hamburger or inline links | Full inline navigation |
| Hero layout | Single column, stacked | Two columns, smaller photo | Full editorial grid |
| Hero headline | 40px | 56px | 80–96px |
| Hero CTA | Full-width button | Auto-width | Auto-width |
| Product grid | 2 columns | 3 columns | 4 columns |
| Product card gaps | 1px | 1px | 1px |
| Cart layout | Single column | Single column | Items + summary sidebar |
| Checkout layout | Single column | Single column | Form + summary sidebar |
| Footer columns | 1 (stacked) | 2 | 3–4 |
| Container padding | 16px | 32px | 48px |

### Mobile-Specific Design Decisions

- **Navigation**: Full-screen overlay with large, tappable links (not a small dropdown)
- **Hero**: Photo positioned at top, headline below, CTA full-width — maintains impact without the grid complexity
- **Product grid**: 2 columns with 1px grid line gaps — not a single column list
- **Cart summary**: Becomes a sticky bar or section at the bottom of the page
- **Checkout form**: Full-width inputs, stacked vertically, generous vertical spacing
- **Typography**: Scale reduces proportionally but hierarchy is maintained
- **Editorial labels**: Hidden on mobile hero to reduce clutter
- **Grid lines**: Simplified to horizontal dividers only on mobile

### Touch Target Requirements

- Minimum interactive size: 44×44px
- Adequate spacing between tappable elements (min 8px)
- Form inputs minimum height: 48px

---

## 14. Animation & Motion Guidelines

### Principles

1. **Subtle and purposeful** — enhances understanding, doesn't distract
2. **CSS only** — no animation libraries (no Framer Motion, no GSAP)
3. **Respect user preferences** — honor `prefers-reduced-motion`
4. **Consistent timing** — use the three transition speed tokens

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Smooth Page Transitions

The entire site should feel fluid. Every state change, route interaction, and UI response should have smooth, intentional transitions:

- **Navigation**: Content areas transition smoothly when switching between pages — no jarring hard cuts
- **Scroll behavior**: `scroll-behavior: smooth` on `html`
- **State changes**: Loading → content, empty → populated, hover → default — all animated
- **Interactive elements**: Every button, link, card, and input should respond with a transition — nothing should feel "dead" or static when interacted with
- **Layout shifts**: When content loads (e.g., products appearing), elements should ease into place rather than pop in

### Hero Section — Entrance Animation (anime.js)

The hero section is the brand's first impression and should have a cinematic entrance sequence when the homepage loads:

**Sequence (orchestrated timeline):**

1. **Background**: Burgundy background fades in (0 → 1 opacity) — 400ms
2. **Campaign image**: Scales from 1.1 to 1.0 with a slow fade-in — creates a subtle cinematic zoom-settle — 800ms, eased
3. **Headline**: Words stagger in one by one ("NOT" → "MADE" → "TO" → "FIT" → "IN."), each translating up from 30px below with fade — 80ms stagger, 500ms per word
4. **CTA button**: Fades in and translates up from 20px — 400ms, slight delay after headline completes
5. **Editorial labels**: "RAW", "LIMITED DROP", "ICON", brand name — stagger in with subtle fade, 60ms apart
6. **Grid lines**: Fade in last at low opacity — 600ms, completing the composition

**Timing feel**: The whole sequence should take ~2–2.5 seconds from page load. It should feel like a fashion campaign reveal — controlled, confident, unhurried.

**Technical approach**: anime.js timeline, dynamically imported only on the homepage. All animated properties are `transform` and `opacity` only (GPU-composited). The animation runs once on mount, never re-triggers on re-renders.

**Reduced motion**: If `prefers-reduced-motion: reduce` is active, skip the entire sequence and show everything immediately.

### Hover Animations

| Element | Effect | Duration | Timing |
|---------|--------|----------|--------|
| Primary CTA | Background darken + scale(1.02) | 250ms | ease |
| Secondary Button | Background fill + text color invert | 250ms | ease |
| Nav links | Opacity to 0.7 | 150ms | ease |
| Icon buttons | Opacity to 0.7 | 150ms | ease |
| Product card image | Scale to 1.05 (in overflow:hidden) | 400ms | ease |
| Product card title | Color to magenta | 250ms | ease |
| Remove button | Color to magenta | 250ms | ease |

### Loading Skeleton Animation

```css
@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.skeleton {
  background: #EDEDED;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}
```

### Image Hover Zoom Pattern

```css
.imageContainer {
  overflow: hidden;
}

.image {
  transition: transform var(--transition-slow);
}

.imageContainer:hover .image {
  transform: scale(1.05);
}
```

### Advanced Animations (anime.js — Selective Use)

**anime.js** may be used for animations that are impractical with CSS alone — such as staggered reveals, sequenced timelines, or complex SVG/path animation.

**Performance rules:**

- **CSS first.** Every animation should be attempted in CSS before reaching for anime.js. Simple hovers, transitions, and keyframe pulses stay in CSS.
- **Lazy load anime.js.** Import it only in the components that need it, using dynamic `import()` so it doesn't bloat the initial bundle.
- **Limit targets.** Keep animated DOM nodes under ~20 per sequence. Avoid animating large product grids or entire page layouts.
- **Avoid on-scroll animation loops.** If using scroll-triggered animation, fire once and complete — no continuous scroll-linked recalculation.
- **Respect `prefers-reduced-motion`.** Check the media query before running any anime.js animation; fall back to instant state.
- **No blocking paint.** Animate only `transform` and `opacity` (GPU-composited properties). Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`.

**Appropriate uses:**

| Use Case | Why anime.js | CSS Alternative |
|----------|-------------|----------------|
| Hero headline stagger (letters/words) | Staggered timing per element | Not practical in pure CSS |
| Editorial label reveal sequence | Orchestrated timeline | Would need many `animation-delay` rules |
| SVG brand mark animation | Path drawing, morphing | Very limited CSS support |
| Product card entrance stagger | `stagger()` utility | Requires manual delay per child |

**Not appropriate:**

- Button hovers → CSS
- Image zoom → CSS
- Nav link opacity → CSS
- Loading skeleton pulse → CSS
- Any single-property transition → CSS

### Performance Budget

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Total Blocking Time (TBT) | < 200ms |
| anime.js bundle cost | ~17KB minified (~6KB gzipped) — acceptable only if lazy-loaded |
| CSS animation overhead | Near zero |

---

## 15. CSS Variables — Complete Reference

```css
:root {
  /* ── Colors ── */
  --color-burgundy: #65002D;
  --color-magenta: #E90065;
  --color-yellow: #F5C400;
  --color-yellow-hover: #DDB200;
  --color-black: #171717;
  --color-white: #F5F2F0;
  --color-chrome: #C0C0C0;
  --color-pure-white: #FFFFFF;
  --color-pure-black: #000000;
  --color-gray: #EDEDED;
  --color-error: #D32F2F;
  --color-success: #2E7D32;

  /* ── Typography ── */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Inter', sans-serif;

  --text-hero: 2.5rem;
  --text-section: 2rem;
  --text-page: 1.75rem;
  --text-subtitle: 1.125rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-label: 0.6875rem;
  --text-caption: 0.75rem;

  /* ── Spacing ── */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* ── Borders ── */
  --border-grid-light: 1px solid rgba(255, 255, 255, 0.15);
  --border-grid-dark: 1px solid rgba(23, 23, 23, 0.1);
  --border-subtle: 1px solid rgba(23, 23, 23, 0.08);
  --border-input: 1px solid rgba(23, 23, 23, 0.2);

  /* ── Transitions ── */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;

  /* ── Layout ── */
  --navbar-height: 64px;
  --container-max: 1440px;
  --container-padding: 16px;
}

/* ── Tablet ── */
@media (min-width: 768px) {
  :root {
    --container-padding: 32px;
    --text-hero: 3.5rem;
    --text-section: 2.5rem;
    --text-page: 2rem;
  }
}

/* ── Desktop ── */
@media (min-width: 1024px) {
  :root {
    --container-padding: 48px;
    --text-hero: 5rem;
    --text-section: 3rem;
    --text-page: 2.25rem;
  }
}

/* ── Wide ── */
@media (min-width: 1440px) {
  :root {
    --text-hero: 6rem;
  }
}
```

---

## Appendix: File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| React components | PascalCase | `Navbar.jsx`, `ProductCard.jsx` |
| CSS Modules | PascalCase.module.css | `Navbar.module.css` |
| Non-component JS | camelCase | `cartReducer.js`, `productService.js` |
| CSS classes (modules) | camelCase | `.heroSection`, `.navLink` |
| CSS variables | kebab-case | `--color-burgundy`, `--space-md` |
| Image assets | kebab-case | `hero-campaign.jpg` |

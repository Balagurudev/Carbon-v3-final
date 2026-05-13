# QuGenie Design System Documentation

## 📐 Design System Tokens

A comprehensive guide to the design tokens used in the QuGenie web application.

---

## 🎨 Colors

### Primary Colors (Orange Dark)
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#030213` | Primary brand color (dark) |
| `--primary-orange` | `#FF4405` | Primary action color, CTAs, links |
| `white` | `#ffffff` | Backgrounds, light text on dark |
| `black` | `#000000` | Pure black backgrounds |

### Orange Palette
| Token | Value |
|-------|-------|
| `orange-25` | `#FFF9F5` |
| `orange-50` | `#FFF4ED` |
| `orange-100` | `#FFE6D5` |
| `orange-200` | `#FFD6AE` |
| `orange-300` | `#FF9C66` |
| `orange-400` | `#FF692E` |
| `orange-500` | `#FF4405` |
| `orange-600` | `#E62E05` |
| `orange-700` | `#BC1B06` |
| `orange-800` | `#97180C` |
| `orange-900` | `#771A0D` |
| `orange-950` | `#57130A` |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#0d0d0d` | Headings, primary text content |
| `--text-secondary` | `#808080` | Secondary text, descriptions |
| `--text-tertiary` | `#344054` | Tertiary text content |
| `--text-light` | `#eaecf0` | Light text on dark backgrounds |
| `--text-white` | `#ffffff` | White text on dark/colored backgrounds |
| `--text-off-white` | `#fcfcfd` | Off-white text on dark backgrounds |

### Background Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#ffffff` | Main background color |
| `--bg-secondary` | `#f9f9fb` | Secondary section backgrounds |
| `--bg-dark` | `#080411` | Dark dropdown/menu backgrounds |
| `--bg-overlay-light` | `rgba(0,0,0,0.2)` | Light overlay |
| `--bg-overlay-medium` | `rgba(0,0,0,0.42)` | Medium overlay |
| `--bg-overlay-dark` | `rgba(0,0,0,0.62)` | Dark overlay |

### Border Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--border-light` | `#e5e5e5` | Light borders on cards |
| `--border-gray` | `#d0d5dd` | Standard gray borders |
| `--border-primary` | `#FF4405` | Primary colored borders |
| `--border-accent` | `#FFD6AE` | Accent borders (orange) |

### Interaction Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--hover-bg` | `rgba(255,255,255,0.05)` | Hover background on dark surfaces |

---

## 📝 Typography

### Font Families
| Family | Weight | Usage |
|--------|--------|-------|
| `'Roobert:Regular'` | 400 | Body text, paragraphs, descriptions |
| `'Roobert:Medium'` | 500 | Headings, titles, emphasis |
| `'Roobert:Semi_Bold'` | 600 | Buttons, navigation, UI elements, strong emphasis |
| `'Roobert:Bold'` | 700 | Heavy emphasis, display text |

### Complete Type Scale

| Name | Size | Line Height | Tracking | Weight Options | Usage |
|------|------|-------------|----------|----------------|-------|
| **Display 2xl** | 72px / 4.5rem | 90px / 5.625rem | -2% (-1.44px) | Regular, Medium, Semibold, Bold | Hero headlines, largest display text |
| **Display xl** | 60px / 3.75rem | 72px / 4.5rem | -2% (-1.2px) | Regular, Medium, Semibold, Bold | Large hero text |
| **Display lg** | 48px / 3rem | 60px / 3.75rem | -2% (-0.96px) | Regular, Medium, Semibold, Bold | Section headings, page titles |
| **Display md** | 36px / 2.25rem | 44px / 2.75rem | -2% (-0.72px) | Regular, Medium, Semibold, Bold | Subsection headings |
| **Display sm** | 30px / 1.875rem | 38px / 2.375rem | 0 | Regular, Medium, Semibold, Bold | Small section headings |
| **Display xs** | 24px / 1.5rem | 32px / 2rem | 0 | Regular, Medium, Semibold, Bold | Card headings |
| **Text xl** | 20px / 1.25rem | 30px / 1.875rem | 0 | Regular, Medium, Semibold, Bold | Body large, subtitles |
| **Text lg** | 18px / 1.125rem | 28px / 1.75rem | 0 | Regular, Medium, Semibold, Bold | Body text medium, descriptions |
| **Text md** | 16px / 1rem | 24px / 1.5rem | 0 | Regular, Medium, Semibold, Bold | Standard body, buttons, navigation |
| **Text sm** | 14px / 0.875rem | 20px / 1.25rem | 0 | Regular, Medium, Semibold, Bold | Small text, captions |
| **Text xs** | 12px / 0.75rem | 18px / 1.125rem | 0 | Regular, Medium, Semibold, Bold | Tiny text, labels |

### Font Weights
| Weight | Value | CSS Class | Usage |
|--------|-------|-----------|-------|
| Regular | 400 | `font-normal` | Body text, paragraphs |
| Medium | 500 | `font-medium` | Headings, emphasis |
| Semibold | 600 | `font-semibold` | Buttons, navigation, strong emphasis |
| Bold | 700 | `font-bold` | Heavy emphasis, display text |

### Current Implementation
| Element Type | Font | Size | Line Height | Usage |
|--------------|------|------|-------------|-------|
| Hero Headline | Roobert Regular | 72px | 90px | Main hero text |
| Section Heading | Roobert Medium | 48px | 60px | Major section titles |
| Card Title | Roobert Medium | 32px | 40px | Service card titles |
| Body Large | Roobert Regular | 20px | 30px | Subtitles, descriptions |
| Body Medium | Roobert Regular | 18px | 28px | Card descriptions |
| Button/Nav | Roobert Semi Bold | 16px | 24px | Interactive elements |

---

## 📏 Spacing System

### Base Spacing Scale
Based on a **4px base unit** with standardized increments:

| Token | Tailwind | REM | Pixels | Usage |
|-------|----------|-----|--------|-------|
| `spacing-1` | `space-1` / `gap-1` / `p-1` | 0.25rem | **4px** | Minimal spacing, tight gaps |
| `spacing-2` | `space-2` / `gap-2` / `p-2` | 0.5rem | **8px** | Small gaps, icon spacing |
| `spacing-3` | `space-3` / `gap-3` / `p-3` | 0.75rem | **12px** | Standard small spacing |
| `spacing-4` | `space-4` / `gap-4` / `p-4` | 1rem | **16px** | Base spacing unit |
| `spacing-5` | `space-5` / `gap-5` / `p-5` | 1.25rem | **20px** | Medium-small spacing |
| `spacing-6` | `space-6` / `gap-6` / `p-6` | 1.5rem | **24px** | Medium spacing |
| `spacing-8` | `space-8` / `gap-8` / `p-8` | 2rem | **32px** | Large spacing, section gaps |
| `spacing-10` | `space-10` / `gap-10` / `p-10` | 2.5rem | **40px** | Extra large spacing |
| `spacing-12` | `space-12` / `gap-12` / `p-12` | 3rem | **48px** | Section dividers |
| `spacing-16` | `space-16` / `gap-16` / `p-16` | 4rem | **64px** | Major section spacing |
| `spacing-20` | `space-20` / `gap-20` / `p-20` | 5rem | **80px** | Extra large sections |
| `spacing-24` | `space-24` / `gap-24` / `p-24` | 6rem | **96px** | Massive spacing |
| `spacing-32` | `space-32` / `gap-32` / `p-32` | 8rem | **128px** | Hero section spacing |
| `spacing-40` | `space-40` / `gap-40` / `p-40` | 10rem | **160px** | Extra massive |
| `spacing-48` | `space-48` / `gap-48` / `p-48` | 12rem | **192px** | Gigantic spacing |
| `spacing-56` | `space-56` / `gap-56` / `p-56` | 14rem | **224px** | Ultra large |
| `spacing-64` | `space-64` / `gap-64` / `p-64` | 16rem | **256px** | Maximum spacing |

### Padding Scale (Current Usage)

| Value | Tailwind Equivalent | Usage in Design |
|-------|---------------------|-----------------|
| `p-[12px]` | `p-3` | Menu item padding |
| `px-[15px]` | Custom | Services section horizontal padding |
| `px-[18px] py-[10px]` | Custom | Button padding small |
| `px-[28px] py-[16px]` | `px-7 py-4` | Button padding large |
| `py-[20px]` | `py-5` | About section vertical padding |
| `px-[50px] py-[30px]` | Custom | About card padding |
| `px-[80px] py-[64px]` | `px-20 py-16` | Large section padding |
| `p-8` | `p-8` (32px) | Stacking card content padding |
| `py-[100px]` | Custom | Services section vertical padding |

### Gap Scale (Current Usage)

| Value | Tailwind Equivalent | Usage in Design |
|-------|---------------------|-----------------|
| `gap-[4px]` | `gap-1` | Minimal gap (text badges) |
| `gap-[8px]` | `gap-2` | Icons + text, small button elements |
| `gap-[12px]` | `gap-3` | Button groups, content sections |
| `gap-[16px]` | `gap-4` | Menu items, standard gaps |
| `gap-[20px]` | `gap-5` | Card content vertical spacing |
| `gap-[24px]` | `gap-6` | Hero content sections |
| `gap-[32px]` | `gap-8` | Stacking cards, large sections, navigation |
| `gap-[40px]` | `gap-10` | Navigation items, wide spacing |
| `gap-[45px]` | Custom | About section columns |
| `gap-[48px]` | `gap-12` | Hero major sections |
| `gap-[64px]` | `gap-16` | Major section dividers, typography scale |

### Margin Scale (Current Usage)

| Value | Tailwind Equivalent | Usage in Design |
|-------|---------------------|-----------------|
| `mt-4` | `mt-4` (16px) | Top margin for buttons in cards |

### Positioning Values (Current Usage)

| Value | Usage |
|-------|-------|
| `top-[23px]` | Header vertical position |
| `top-[39px]` | Dropdown menu offset |
| `left-[56px]` | Header left position |
| `top-[344px]` | Hero content vertical position |
| `left-[246px]` | Hero content horizontal position |
| `top-[40px]`, `top-[80px]`, `top-[120px]`, `top-[160px]` | Stacking card incremental offsets (40px intervals) |

### Special Spacing Patterns

#### Stacking Card Offset System
```
Card 0: top: 0px (base)
Card 1: top: 40px (1 × 40px)
Card 2: top: 80px (2 × 40px)
Card 3: top: 120px (3 × 40px)
Card 4: top: 160px (4 × 40px)
```
**Pattern**: Each card increments by 40px for the stacking effect.

---

## 🔲 Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `rounded-sm` | 4px | `rounded-sm` | Minimal rounding |
| `rounded-md` | 8px | `rounded-[8px]` | Buttons, small cards, inputs |
| `rounded-lg` | 12px | `rounded-[12px]` | Images, dropdowns, medium elements |
| `rounded-xl` | 20px | `rounded-[20px]` | Large cards, sections |

---

## 🎭 Shadows

| Name | Value | Usage |
|------|-------|-------|
| **Card Shadow** | `0px 4px 20px rgba(0,0,0,0.1)` | Stacking cards, elevated elements |
| **Button Shadow** | `0px 1px 2px 0px rgba(16,24,40,0.05)` | Standard buttons |
| **Button Hover** | `0px 8px 16px rgba(255, 68, 5, 0.3)` | Primary button hover state |
| **Menu Shadow** | `0px 12px 16px 0px rgba(16,24,40,0.08), 0px 4px 6px 0px rgba(16,24,40,0.03)` | Dropdown menus, popovers |

---

## 📱 Layout & Grid

### Container Widths
| Container | Width | Usage |
|-----------|-------|-------|
| **Desktop Full** | 1440px | Full desktop viewport |
| **Header Container** | 1280px | Main header width |
| **Content Container** | 1120px | Main content sections |
| **Hero Content** | 947px | Hero text content max-width |
| **About Text Column** | 457px | About section left column |
| **About Image Column** | 518px | About section right column |
| **Services Description** | 492px | Services right column |
| **Services Title** | 604px | Services left column |
| **Card Image** | 352px | Stacking card image width |
| **Menu Dropdown** | 368px | Dropdown menu width |
| **Nav Item Text** | 320px | Navigation text container |

### Heights
| Element | Height | Usage |
|---------|--------|-------|
| **Hero Section** | 1024px | Main hero section |
| **About Image** | 672px | About section image |
| **Stacking Card** | 600px | Service card container height |
| **Card Image** | 400px | Service card image height |
| **Logo** | 61px | Brand logo size |
| **Icon** | 20px | Standard icon size |

---

## 🔘 Components

### Buttons

#### Primary Button
```css
Font: Roobert Semi Bold
Font Size: 16px / 18px
Line Height: 24px / 28px
Background: #FF4405
Text Color: white
Padding: 18px × 10px (small) / 28px × 16px (large)
Border Radius: 8px
Border: 1px solid #FF4405
Shadow: 0px 1px 2px rgba(16,24,40,0.05)

Hover: 
  - scale(1.05)
  - boxShadow: 0px 8px 16px rgba(255, 68, 5, 0.3)
  - duration: 0.3s

Active (Tap): 
  - scale(0.98)
```

#### Secondary Button (White)
```css
Font: Roobert Semi Bold
Font Size: 18px
Line Height: 28px
Background: white
Text Color: #344054
Padding: 28px × 16px
Border Radius: 8px
Border: 1px solid #d0d5dd
Shadow: 0px 1px 2px rgba(16,24,40,0.05)

Hover: 
  - scale(1.05)
  - translateY: -2px
  - duration: 0.3s

Active (Tap): 
  - scale(0.98)
```

#### Text Button (Navigation)
```css
Font: Roobert Semi Bold
Font Size: 16px
Line Height: 24px
Background: transparent
Text Color: #eaecf0
Padding: 18px × 10px (optional)
Border Radius: 8px

Hover: 
  - scale(1.05)
  - duration: 0.2s

Active (Tap): 
  - scale(0.98)
```

#### Link Button
```css
Font: Roobert Semi Bold
Font Size: 16px
Line Height: 24px
Background: transparent
Text Color: #FF4405
Icon: arrow-right (20px)
Gap: 8px

Hover: 
  - translateX(5px)
  - duration: 0.2s
```

### Cards

#### Stacking Service Card
```css
Layout: Horizontal (alternating)
Background: white
Border Radius: 20px
Border: 1px solid #e5e5e5
Shadow: 0px 4px 20px rgba(0,0,0,0.1)
Padding: 32px (p-8)
Height: 600px
Position: sticky

Stacking Pattern:
  - top: index × 40px
  - zIndex: index

Content Gap: 32px
Image: 352px × 400px, rounded-[12px]
Title: Roobert Medium, 32px, leading-[40px]
Description: Roobert Regular, 18px, leading-[28px], color: #808080
Button Gap: 20px

Scroll Animation:
  - Scale: [0.95, 1, 1 - index × 0.05]
  - Opacity: [0.8, 1, 1, 0.8]
  - Brightness: [1, 1, 0.9, 0.8]

Hover (Image):
  - scale(1.05)
  - duration: 0.3s
```

#### About Section Card
```css
Background: #f9f9fb
Border Radius: 20px
Padding: 50px × 30px
Gap: 45px (between columns)

Text Column: 457px
Image Column: 518px × 672px, rounded-[20px]

Animation:
  - Text: opacity 0→1, translateX -50→0
  - Image: opacity 0→1, scale 0.95→1
  - Duration: 0.8s, ease-out
```

### Navigation

#### Header
```css
Position: absolute
Top: 23px
Left: 56px
Width: 1280px
Display: flex, justify-between

Logo: 61px × 61px
Nav Gap: 32px between items
Button Gap: 12px

Animation:
  - Logo: opacity 0→1, translateX -20→0
  - Buttons: opacity 0→1, translateX 20→0
  - Duration: 0.6s
```

#### Dropdown Menu
```css
Background: #080411
Border: 1px solid #FFD6AE
Border Radius: 12px
Width: 368px
Position: absolute, top: 39px
Shadow: 
  - 0px 12px 16px rgba(16,24,40,0.08)
  - 0px 4px 6px rgba(16,24,40,0.03)

Menu Item:
  - Padding: 12px
  - Border Radius: 8px
  - Gap: 16px

Hover:
  - Background: rgba(255,255,255,0.05)
  - translateX(4px)
  - duration: 0.2s

Animation:
  - opacity 0→1, translateY -10→0
  - duration: 0.3s
```

---

## 🎬 Animations

### Animation Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `duration-0.2` | 0.2s | Quick interactions (hover, micro-animations) |
| `duration-0.3` | 0.3s | Standard transitions (dropdown, button hover) |
| `duration-0.6` | 0.6s | Medium animations (fade in, header animations) |
| `duration-0.8` | 0.8s | Slow animations (scroll reveals, page transitions) |

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | ease-out | Default easing for most animations |
| `linear` | linear | Scroll-based animations |

### Delay Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `delay-0.2` | 0.2s | First stagger in sequence |
| `delay-0.3` | 0.3s | Second stagger in sequence |
| `delay-0.4` | 0.4s | Third stagger in sequence |

### Animation Patterns

#### 1. Fade In + Slide Up
```javascript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```
**Usage**: Hero headlines, main content reveals

#### 2. Fade In + Slide Left
```javascript
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```
**Usage**: Left column content, about section text

#### 3. Fade In + Slide Right
```javascript
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```
**Usage**: Right column content, services description

#### 4. Scale + Fade In
```javascript
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```
**Usage**: Images, about section photos

#### 5. Hover Scale
```javascript
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```
**Usage**: Buttons, cards, interactive elements

#### 6. Hover Scale + Lift
```javascript
whileHover={{ scale: 1.05, y: -2 }}
transition={{ duration: 0.3 }}
```
**Usage**: Secondary buttons

#### 7. Hover Scale + Shadow
```javascript
whileHover={{ 
  scale: 1.05, 
  boxShadow: "0px 8px 16px rgba(255, 68, 5, 0.3)" 
}}
transition={{ duration: 0.3 }}
```
**Usage**: Primary CTA buttons

#### 8. Hover Slide (X-axis)
```javascript
whileHover={{ x: 4 }}
transition={{ duration: 0.2 }}
```
**Usage**: Menu items, navigation items

#### 9. Button Tap
```javascript
whileTap={{ scale: 0.98 }}
```
**Usage**: All clickable buttons

#### 10. Dropdown Reveal
```javascript
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
```
**Usage**: Dropdown menus, tooltips

#### 11. Stacking Card Scroll Animation
```javascript
// Target card with ref
const cardRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: cardRef,
  offset: ["start end", "end start"]
});

// Scale transformation
const scale = useTransform(
  scrollYProgress,
  [0, 0.3, 0.65, 1],
  [0.95, 1, 1 - index * 0.05, 1 - index * 0.05]
);

// Opacity transformation
const opacity = useTransform(
  scrollYProgress,
  [0, 0.3, 0.65, 1],
  [0.8, 1, 1, 0.8]
);

// Brightness transformation
const brightness = useTransform(
  scrollYProgress,
  [0, 0.3, 0.65, 1],
  [1, 1, 0.9, 0.8]
);
```
**Usage**: Services stacking cards with scroll-based parallax

#### 12. Staggered Content Reveal
```javascript
// Element 1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}

// Element 2
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.3 }}

// Element 3
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
```
**Usage**: Sequential content reveals in sections

### Scroll-based Animations

#### InView Hook Pattern
```javascript
const ref = useRef(null);
const isInView = useInView(ref, { 
  once: true,     // Animate only once
  amount: 0.3     // Trigger when 30% visible
});

// Then use in animate prop
animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
```
**Usage**: All sections use scroll detection for entrance animations

---

## 🔢 Z-Index Scale

| Layer | Value | Usage |
|-------|-------|-------|
| Base | auto | Background images, standard content |
| Card 0 | 0 | First stacking card |
| Card 1 | 1 | Second stacking card |
| Card 2 | 2 | Third stacking card |
| Card 3 | 3 | Fourth stacking card |
| Header | auto | Fixed/absolute positioned header |
| Dropdown | auto | Dropdown menus above header |
| Modal | 50 | Modal overlays (when needed) |

**Pattern**: Stacking cards use incremental z-index matching their array index.

---

## 🎯 Icon System

### Icon Sizes
| Size | Value | Usage |
|------|-------|-------|
| `size-[20px]` | 20px × 20px | Button icons, navigation icons, UI elements |

### Icon Stroke Properties
| Property | Value | Usage |
|----------|-------|-------|
| `strokeWidth` | 1.66667 | Standard icon stroke weight |
| `strokeLinecap` | round | Rounded line endings |
| `strokeLinejoin` | round | Rounded corner joins |

### Icon Colors
| Context | Color | Usage |
|---------|-------|-------|
| Primary Actions | `#FF4405` | Primary action icons, links |
| Light Theme | `white` | Icons on dark backgrounds, navigation |
| Dark Theme | `#eaecf0` | Icons on dark surfaces |

### Icon-Text Spacing
```css
gap-[8px]   /* Standard gap between icon and text */
```

---

## 🎨 Design Principles

### Spacing Philosophy
- **Base Unit**: 4px
- **Preferred Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256
- **Component Gaps**: Use multiples of 4px for consistency
- **Stacking Pattern**: 40px increments for vertical card stacking
- **Section Padding**: Use 64px (16 units) or 80px (20 units) for major sections

### Typography Hierarchy
- **Display 2xl (72px)**: Hero headlines only, maximum visual impact
- **Display lg (48px)**: Main section headings, page structure
- **Display md (36px)**: Subsection headings
- **Display xs (24px)**: Card headings
- **Text xl (20px)**: Subtitles, important descriptions
- **Text lg (18px)**: Standard descriptions, body text
- **Text md (16px)**: Buttons, navigation, UI elements

### Font Weight Usage
- **Regular (400)**: All body copy, descriptions, readable text
- **Medium (500)**: All headings, section titles
- **Semibold (600)**: Buttons, navigation, CTAs, strong emphasis

### Color Usage Guidelines
- **Primary Orange (#FF4405)**: CTAs, links, interactive elements, primary actions
- **Dark (#0d0d0d)**: Primary text, headings, high-contrast content
- **Gray (#808080)**: Secondary text, descriptions, supporting content
- **Light Gray (#f9f9fb)**: Section backgrounds, card backgrounds
- **White (#ffffff)**: Primary background, contrast text on dark

### Animation Philosophy
- **Micro-interactions (0.2-0.3s)**: Immediate visual feedback on hover/tap
- **Content reveals (0.6-0.8s)**: Scroll-based entrance animations
- **Staggered sequences**: 0.2s delay increments for natural flow
- **Hover states**: Always provide visual feedback with scale/translate
- **Scroll-based**: Use InView hook at 30% threshold for optimal UX
- **Stacking effect**: Dynamic scroll-based transforms for depth

---

## 📦 Component Inventory

### Page Structure
1. **Hero Section (Frame20)** - Full-width hero with background overlay
2. **About Us Section** - Two-column layout with text + image
3. **Services Section** - Stacking cards with scroll animations

### Major Components
- **Header/Navigation** - Fixed position with logo, nav links, CTAs
- **Stacking Card** - Interactive service card with scroll-based animations
- **Dropdown Menu** - Dark themed dropdown with accent border
- **Button Group** - Primary + secondary button combinations
- **Hero Content** - Centered content with animated headline + description

### Utility Patterns
- **Image with Overlay**: Image + semi-transparent dark overlay
- **Content Wrapper**: Centered content with max-width constraints
- **Flex Layouts**: Extensive use of flexbox for responsive layouts
- **Sticky Positioning**: Used for stacking card scroll effect
- **Scroll Progress Tracking**: Motion scroll hooks for scroll-based animations
- **InView Detection**: Trigger animations when elements enter viewport

---

## 🔍 Accessibility Considerations

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- `data-name` attributes for component identification
- Semantic structure with proper nesting

### ARIA Labels
- `aria-hidden="true"` for decorative overlays and borders
- Screen reader only text with `.sr-only` utility (when needed)

### Focus States
- Ring color: `--ring: oklch(0.708 0 0)`
- Outline: `.outline-ring/50`
- All interactive elements have visible focus states

### Interactive States
- All buttons include hover, tap, and focus states
- Clear visual feedback for all interactive elements
- Sufficient color contrast ratios for text
- Minimum touch target size: 44px × 44px (buttons exceed this)

### Motion Preferences
- Consider adding `prefers-reduced-motion` media query for users who prefer less animation
- Provide alternative static states when motion is disabled

---

## 📝 Implementation Notes

### Font Loading
- Custom fonts (Roobert) should be loaded via `/src/styles/fonts.css`
- Use font-display: swap for better performance
- Provide system fallbacks: `sans-serif`

### Asset Management
- **SVG Icons**: Imported from `svg-fkvg6xd5th` path library
- **Raster Images**: Use `figma:asset` scheme (virtual module, no path prefix)
- **Image Optimization**: Consider lazy loading for below-fold images

### Motion Library
- Using `motion/react` package (formerly Framer Motion)
- Import syntax: `import { motion, useScroll, useTransform, useInView } from "motion/react"`

### CSS Framework
- **Tailwind CSS v4.0**
- Custom design tokens in `/src/styles/theme.css`
- No `tailwind.config.js` needed (v4.0 uses CSS-based configuration)

### Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Consider fallbacks for older browsers if needed
- Test sticky positioning across browsers

---

## 🚀 Usage Examples

### Button Component
```tsx
<motion.div 
  whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(255, 68, 5, 0.3)" }}
  whileTap={{ scale: 0.98 }}
  className="bg-[#FF4405] relative rounded-[8px] shrink-0 cursor-pointer"
>
  <div className="flex gap-[8px] items-center justify-center px-[18px] py-[10px]">
    <p className="font-['Roobert:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[16px] text-white">
      Sign up
    </p>
  </div>
</motion.div>
```

### Scroll Reveal Section
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

<motion.div 
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>
```

### Stacking Card
```tsx
const cardRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: cardRef,
  offset: ["start end", "end start"]
});

const scale = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [0.95, 1, 1 - index * 0.05, 1 - index * 0.05]);
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [0.8, 1, 1, 0.8]);
const brightness = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [1, 1, 0.9, 0.8]);

<div ref={cardRef} className="relative w-full h-[600px]">
  <motion.div
    style={{
      scale,
      opacity,
      filter: `brightness(${brightness})`,
      top: `${index * 40}px`,
      zIndex: index,
    }}
    className="sticky bg-white rounded-[20px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] p-8"
  >
    {/* Card content */}
  </motion.div>
</div>
```

---

**Design System Version**: 2.0  
**Last Updated**: Appended Orange Dark Palette & Roobert Typeface  
**Primary Font**: Roobert  
**Base Spacing Unit**: 4px  
**Design Framework**: Tailwind CSS v4.0 + Motion React

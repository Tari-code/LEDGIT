# 🎨 Coming Soon Page - Visual Layout Guide

## Page Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              🎯 HERO SECTION                        │
│         (ComingSoonHero Component)                  │
│                                                     │
│  - Animated blob background                         │
│  - "Under Construction" Headline                    │
│  - Coming Soon Badge                                │
│  - "Notify Me" & "Learn More" Buttons              │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│          🏗️ CONSTRUCTION IMAGE                      │
│      (ConstructionImage Component)                  │
│                                                     │
│       Custom SVG with:                              │
│       - Crane with cable                            │
│       - Worker figure                               │
│       - Building scaffolding                        │
│       - Animated elements                           │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│          ✨ FEATURE CARDS                           │
│        (FeatureCards Component)                     │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ 🚀 Speed │  │ 🎨 Design│  │ 🔒 Secure│         │
│  └──────────┘  └──────────┘  └──────────┘         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ 📱 Mobile│  │ ⚡ Powerful│ │ 🌟 Support│         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│          ⏱️ COUNTDOWN TIMER                         │
│       (CountdownTimer Component)                    │
│                                                     │
│      "Launching In"                                 │
│   │ 00 │ 00 │ 00 │ 00 │                            │
│   Days Hours Mins Secs                              │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│          📧 NEWSLETTER SIGNUP                       │
│     (NewsletterSignup Component)                    │
│                                                     │
│       "Stay Updated"                                │
│   ┌─────────────────────────────┐                  │
│   │ Enter your email address    │                  │
│   └─────────────────────────────┘                  │
│   ┌─────────────────────────────┐                  │
│   │   [Get Notified Button]     │                  │
│   └─────────────────────────────┘                  │
│   Privacy notice                                    │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│              📍 FOOTER                              │
│            (Footer Component)                       │
│                                                     │
│  Ledgit    │ Product  │ Company  │ Follow          │
│  ────────  │ ────────  │ ────────  │ ──────         │
│  About     │ Features │ About   │ Twitter          │
│  Contact   │ Pricing  │ Blog    │ LinkedIn         │
│            │ Security │ Careers │ Discord          │
│                                                     │
│  © 2026 Ledgit. All rights reserved.               │
│  Privacy Policy | Terms of Service                 │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Color Palette

```
🎨 Primary Colors:
   Dark Background: #0f172a (Slate-950)
   Secondary Background: #1e293b (Slate-800)
   
💜 Accent Colors:
   Purple Primary: #a855f7 (Purple-500)
   Purple Secondary: #7c3aed (Purple-600)
   Pink Accent: #ec4899 (Pink-500)
   
⚪ Text Colors:
   Primary: #f1f5f9 (Slate-100)
   Secondary: #cbd5e1 (Slate-300)
   Muted: #64748b (Slate-500)
```

## Component Breakdown

### 1️⃣ ComingSoonHero
- **Height**: Full viewport (vh-screen)
- **Elements**: 
  - Animated blob background (3 floating shapes)
  - "Coming Soon" badge with pulse animation
  - Main heading (text-6xl to text-7xl responsive)
  - Subheading with description
  - Two CTA buttons (Primary gradient, Secondary outline)

### 2️⃣ ConstructionImage
- **Height**: Auto with padding (py-16)
- **Content**:
  - SVG viewBox: 400x300
  - Sky gradient background
  - Construction crane (orange with red cable)
  - Worker figure (orange color with hard hat)
  - Building structure with brick pattern
  - Scaffolding elements
  - "Under Construction" text overlay

### 3️⃣ FeatureCards
- **Layout**: 3-column grid (responsive: 1 col mobile, 3 col desktop)
- **Cards**: 6 feature cards with:
  - Icon emoji (text-4xl)
  - Title (text-xl font-bold)
  - Description (text-sm)
  - Hover animations (scale-105)
  - Gradient borders

### 4️⃣ CountdownTimer
- **Layout**: 4-column grid (2 cols on mobile, 4 on desktop)
- **Each Box**:
  - Gradient background (purple to pink)
  - Large number display (text-5xl)
  - Label text (uppercase, smaller)
  - Updates every second (real-time)

### 5️⃣ NewsletterSignup
- **Layout**: Centered card (max-w-2xl)
- **Card Style**: Glass-morphism with:
  - Semi-transparent background
  - Backdrop blur
  - Border with glow effect on hover
- **Form Elements**:
  - Email input with purple focus ring
  - Submit button with gradient
  - Success message (animated)
  - Privacy notice

### 6️⃣ Footer
- **Layout**: 4-column grid (1 col mobile, responsive)
- **Sections**:
  - Brand info
  - Product links
  - Company links
  - Social media links
  - Bottom bar (copyright & policy links)

## Animation Types

### 🔄 Continuous Animations
- **Blob float**: 7s loop with translateX/Y and scale
- **Pulse badge**: Infinite pulse on opacity
- **Pulse slow**: Smooth 2s opacity pulse

### ⏱️ Trigger Animations
- **Fade in up**: When components appear (0.6s)
- **Scale on hover**: Cards and buttons (0.3s)
- **Color transition**: Links and borders (0.3s)
- **Shadow glow**: On button hover

### 🎯 Interactive Animations
- **Button hover**: Scale 105% + shadow glow
- **Card hover**: Scale 105% + border change
- **Input focus**: Purple ring + border highlight
- **Link hover**: Color change to purple

## Responsive Breakpoints

```
📱 Mobile (< 640px)
   - Single column layouts
   - Smaller font sizes
   - Full width buttons
   - Compact spacing

📱 Tablet (640px - 1024px)
   - 2-column grids
   - Medium font sizes
   - Flex row layouts
   - Medium spacing

🖥️ Desktop (> 1024px)
   - 3-4 column grids
   - Largest font sizes
   - Full features visible
   - Generous spacing
```

## Typography

```
📝 Font Stack:
   system-ui, -apple-system, BlinkMacSystemFont, 
   'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
   'Fira Sans', 'Droid Sans', 'Helvetica Neue'

📏 Sizes:
   H1 (Heading): 48px - 112px (responsive)
   H2 (Section): 36px - 48px (responsive)
   H3 (Card Title): 20px
   Body: 16px - 20px
   Small: 12px - 14px
```

## Interactive Elements Summary

✅ **Buttons**: 2 in hero (CTA buttons)
✅ **Forms**: 1 email input + submit button
✅ **Links**: Footer navigation + social links
✅ **Animations**: 10+ custom animations
✅ **Hover States**: All interactive elements
✅ **Focus States**: Form inputs
✅ **Success Feedback**: Newsletter subscription

---

**Ready to customize? Start with any component in the `app/components/` folder!** 🚀

# 🎬 Modern Animations & Features Guide

## Premium Font Families Added

### Imported from Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
```

### Font Usage:
- **Display Font**: `Space Grotesk` - For headings and hero text
  - Clean, geometric, modern
  - Used in: h1-h6, titles, banners
  - Letter-spacing: -0.02em (tight tracking)

- **Body Font**: `Inter` - For body text and descriptions
  - Highly readable, minimalist
  - Used in: paragraphs, body copy
  - Font weights: 300 (light), 400 (regular), 600 (semibold)

- **Accent Font**: `Poppins` - For buttons and emphasis
  - Friendly, rounded, contemporary
  - Used in: buttons, CTAs, special emphasis

### CSS Variables:
```css
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-accent: 'Poppins', sans-serif;
```

## Advanced Animations

### 1. **Blob Animation** (`animate-blob`)
- **Duration**: 7s infinite
- **Effect**: Floating, morphing blobs
- **Delays**: 
  - Default: 0s
  - `animation-delay-1000`: 1s
  - `animation-delay-2000`: 2s
  - `animation-delay-3000`: 3s
  - `animation-delay-4000`: 4s
- **Used in**: Background elements, decorative shapes

### 2. **Glow Animation** (`animate-glow`)
- **Duration**: 3s ease-in-out infinite
- **Effect**: Pulsing glow effect
- **Box-shadow**: From 20px to 40px spread
- **Used in**: Card hovers, emphasis elements

### 3. **Shimmer Animation** (`animate-shimmer`)
- **Duration**: 2s infinite
- **Effect**: Light sweep across elements
- **Background-size**: 1000px 100%
- **Used in**: Loading states, premium effects

### 4. **Float Animation** (`animate-float`)
- **Duration**: 3s ease-in-out infinite
- **Effect**: Gentle up-down movement (-20px)
- **Used in**: Icons, floating elements

### 5. **Spin Slow** (`animate-spin-slow`)
- **Duration**: 8s linear infinite
- **Effect**: Continuous rotation
- **Used in**: Loading indicators, decorative elements

### 6. **Bounce Soft** (`animate-bounce-soft`)
- **Duration**: 2s ease-in-out infinite
- **Effect**: Soft bouncing (-10px)
- **Used in**: Interactive elements, CTAs

### 7. **Gradient Shift** (`animate-gradient-shift`)
- **Duration**: 8s ease infinite
- **Background-size**: 200% 200%
- **Effect**: Moving gradient effect
- **Used in**: Text gradients, background effects

### 8. **Neon Glow** (`animate-neon-glow`)
- **Duration**: 2s ease-in-out infinite
- **Text-shadow**: Pulsing purple to pink glow
- **Used in**: Featured text, neon effects

### 9. **Scale Pulse** (`animate-scale-pulse`)
- **Duration**: 2s ease-in-out infinite
- **Effect**: Scale from 1 to 1.05
- **Used in**: Pulse indicators, attention grabbers

### 10. **Fade In Up** (`animate-fade-in-up`)
- **Duration**: 0.8s ease-out forwards
- **Effect**: Fade + slide up (+30px)
- **Used in**: Element entrances, staggered animations

### 11. **Fade In** (`animate-fade-in`)
- **Duration**: 0.8s ease-out forwards
- **Effect**: Simple fade in
- **Used in**: Simple element reveals

### 12. **Slide In Left** (`animate-slide-in-left`)
- **Duration**: 0.8s ease-out forwards
- **Effect**: Slide from left (-30px) + fade
- **Used in**: Left-aligned elements

### 13. **Slide In Right** (`animate-slide-in-right`)
- **Duration**: 0.8s ease-out forwards
- **Effect**: Slide from right (+30px) + fade
- **Used in**: Right-aligned elements

## Modern Glass-Morphism Effects

### Standard Glass (`glass-morphism`)
```css
.glass-morphism {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(168, 85, 247, 0.2);
}
```
- Used in: Cards, containers
- Opacity: 0.7
- Blur: 10px

### Premium Glass (`glass-morphism-premium`)
```css
.glass-morphism-premium {
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.3);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.3);
}
```
- Used in: Primary cards, featured sections
- More transparent (0.5)
- Stronger blur (20px)
- Inner inset shadow for depth

## Glow Effects

### Glow Purple (`glow-purple`)
```css
box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
```

### Glow Pink (`glow-pink`)
```css
box-shadow: 0 0 30px rgba(236, 72, 153, 0.4);
```

### Glow Blue (`glow-blue`)
```css
box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
```

## Text Effects

### Text Gradient (`text-gradient`)
- Linear gradient: Purple → Pink → Blue
- Background-size: 200% 200%
- Animated gradient shift (8s)
- Applied via: -webkit-background-clip: text

### Animated Gradient (`text-gradient-animated`)
- 4-color gradient with loop
- Background-size: 300% 300%
- Animation: 6s ease infinite
- Creates flowing color effect

### Neon Text (`text-neon`)
- Animation: neon-glow 2s ease-in-out infinite
- Creates glowing text effect with shadow pulse

## Button Effects

### Button Glow (`btn-glow`)
- Position: relative with overflow hidden
- Pseudo-element shine effect
- Smooth left-to-right sweep on hover
- Duration: 0.5s transition

### Button Gradient Hover (`btn-gradient-hover`)
- Background-size: 200% 200%
- Position transition on hover
- Smooth color shift effect

## Card Effects

### Card Hover (`card-hover`)
- Transition: 0.3s cubic-bezier(0.23, 1, 0.320, 1)
- Transform: translateY(-8px)
- Box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3)
- Custom easing for smooth motion

## Component Animation Examples

### Hero Component
- Background blobs with staggered delays
- Badge with pulse animation
- Heading with gradient animation
- Buttons with glow effects
- Staggered fade-in animations on children

### Feature Cards
- Glass-morphism styling
- Hover scale effect (1.05)
- Icon bounce animation on hover
- Accent line animation on hover
- Gradient background glow on hover
- Staggered animation delays per card

### Countdown Timer
- Gradient text animation
- Glowing time boxes with scale effect
- Scale-pulse indicator dots
- Staggered animation delays

### Newsletter Signup
- Glass-morphism premium card
- Input focus glow effect
- Button with shimmer effect
- Float animation for icon
- Success message fade-in animation

### Footer
- Staggered fade-in for sections
- Underline animation on hover for links
- Animated social icons
- Gradient divider line

## Staggered Animation Pattern

Used throughout components for sequential reveals:
```tsx
animation-delay-1000 // 1s
animation-delay-2000 // 2s
animation-delay-3000 // 3s
```

Staggered in components:
```tsx
style={{ animationDelay: `${index * 0.15}s` }}
```

## Performance Optimizations

### GPU Acceleration
- All transform animations use GPU
- Use `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, `left`, `top`

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```

### Responsive Animations
- Animations adjusted for mobile
- Faster durations on smaller screens
- Reduced animation complexity on low-end devices

## Hover States

All interactive elements have:
- Color transitions (0.3s)
- Scale animations (0.3s)
- Shadow enhancements
- Border color changes
- Text color shifts

## Custom Scrollbar

Purple gradient scrollbar with animation:
```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #a855f7, #7c3aed);
  transition: background 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #c084fc, #8b5cf6);
}
```

## Color Palette for Animations

**Primary Gradient**: Purple (#a855f7) → Pink (#ec4899)
**Secondary Gradient**: Purple → Blue (#3b82f6)
**Accent Colors**: 
- Green: #22c55e (success)
- Red: #ef4444 (error)
- Blue: #3b82f6 (info)

## Browser Support

✅ All modern browsers (Chrome, Firefox, Safari, Edge)
✅ GPU acceleration available
✅ Backdrop-filter support (with fallbacks)
✅ CSS custom properties support
✅ Modern @keyframes support

## Performance Tips

1. **Limit simultaneous animations** - Stagger animations
2. **Use transform + opacity** - Avoid repaints
3. **Debounce hover events** - Prevent animation spam
4. **Disable animations on low-end devices** - Use `prefers-reduced-motion`
5. **Test on mobile** - Ensure smooth 60fps

## Future Enhancements

- Add `prefers-reduced-motion` media query
- Implement intersection observer for scroll animations
- Add parallax effects for hero section
- Include loading skeleton animations
- Add page transition animations

---

**All animations are production-ready and optimized for performance!** 🚀

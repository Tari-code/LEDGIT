# Coming Soon Page - Ledgit

A modern, animated coming soon page built with Next.js, React, and Tailwind CSS. Features a professional design with multiple interactive components.

## Components

### 1. **ComingSoonHero** (`app/components/ComingSoonHero.tsx`)
The main hero section with:
- Animated gradient background with blob animations
- Large "Under Construction" heading
- Call-to-action buttons (Notify Me & Learn More)
- Pulsing status badge

### 2. **ConstructionImage** (`app/components/ConstructionImage.tsx`)
Custom SVG illustration featuring:
- Construction crane animation
- Worker figure with hard hat
- Under construction building
- Animated scaffolding
- Gradient background effects

### 3. **FeatureCards** (`app/components/FeatureCards.tsx`)
Grid of 6 feature cards highlighting:
- 🚀 High Performance
- 🎨 Modern Design
- 🔒 Secure
- 📱 Responsive
- ⚡ Powerful API
- 🌟 24/7 Support

Each card includes hover animations and gradient borders.

### 4. **CountdownTimer** (`app/components/CountdownTimer.tsx`)
Interactive countdown timer displaying:
- Days, Hours, Minutes, Seconds
- Real-time updates every second
- Gradient text styling
- Responsive layout

### 5. **NewsletterSignup** (`app/components/NewsletterSignup.tsx`)
Email subscription form with:
- Email input field
- Submit button with success feedback
- Privacy notice
- Glass-morphism styling

### 6. **Footer** (`app/components/Footer.tsx`)
Comprehensive footer including:
- Brand information
- Product links
- Company links
- Social media links
- Privacy & Terms
- Copyright information

## Styling Features

- **Tailwind CSS** for all styling
- **Custom animations**:
  - `animate-blob` - Floating blob animation
  - `animate-fade-in-up` - Fade and slide up effect
  - `animate-fade-in` - Simple fade in
  - `animate-slide-in-left` - Slide from left
  - `pulse-slow` - Slow pulsing effect

- **Color scheme**: Slate, Purple, and Pink gradients
- **Responsive design** for mobile, tablet, and desktop
- **Smooth hover effects** and transitions

## Usage

The main page imports all components and displays them in sequence:

```tsx
import ComingSoonHero from './components/ComingSoonHero';
import ConstructionImage from './components/ConstructionImage';
import FeatureCards from './components/FeatureCards';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-950">
      <ComingSoonHero />
      <ConstructionImage />
      <FeatureCards />
      <CountdownTimer />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
```

## Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

- **Colors**: Edit Tailwind color classes in each component
- **Text**: Update hardcoded strings in components
- **Countdown Date**: Modify the launch date calculation in `CountdownTimer.tsx`
- **Feature List**: Edit the features array in `FeatureCards.tsx`

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Fully responsive from mobile to desktop.

## Technologies Used

- Next.js 16.1.6
- React 19.2.3
- TypeScript
- Tailwind CSS 4
- Custom SVG illustrations

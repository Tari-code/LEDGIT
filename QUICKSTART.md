# 🚀 Quick Start Guide

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Navigate to Project
```bash
cd c:\Users\HomePC\Desktop\LEDGIT\nextjs\ledgit
```

### Step 2: Install Dependencies (if needed)
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: View in Browser
Open your browser and go to:
```
http://localhost:3000
```

## Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

## Project Structure

```
ledgit/
├── app/
│   ├── components/
│   │   ├── ComingSoonHero.tsx
│   │   ├── ConstructionImage.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── NewsletterSignup.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── postcss.config.mjs
```

## Component Usage Example

All components are already integrated in `page.tsx`:

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

## Customization Examples

### Change Hero Text
Edit `app/components/ComingSoonHero.tsx`:
```tsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
  Your New Heading
</h1>
```

### Change Feature List
Edit `app/components/FeatureCards.tsx`:
```tsx
const features = [
  {
    icon: '✨',
    title: 'Your Feature Title',
    description: 'Your feature description',
    delay: 'animate-fade-in-up',
  },
  // ... more features
];
```

### Change Colors
Edit individual component classes or `app/globals.css`:
```css
/* Change from purple to blue */
from-purple-500 → from-blue-500
to-pink-500 → to-cyan-500
```

### Update Countdown Date
Edit `app/components/CountdownTimer.tsx`:
```tsx
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 90); // Change 90 to desired days
```

### Change Footer Links
Edit `app/components/Footer.tsx`:
```tsx
<a href="https://your-url.com" className="...">
  Your Link Text
</a>
```

## Styling with Tailwind CSS

All styling uses Tailwind CSS utility classes. Key classes:

```
Colors:
  text-white, text-gray-300, text-purple-400
  bg-slate-900, bg-gradient-to-r
  border-purple-500/20

Layout:
  flex, grid, w-full, h-screen
  px-4, py-8, gap-4
  max-w-4xl, mx-auto

Typography:
  text-3xl, font-bold, leading-tight
  sm:text-6xl (responsive)

Responsive:
  sm: (640px), md: (768px), lg: (1024px)
  Mobile-first approach
```

## Animation Classes

Custom animations in `app/globals.css`:

```css
.animate-blob              /* Floating blob animation */
.animate-fade-in-up        /* Fade and slide up */
.animate-fade-in           /* Simple fade in */
.animate-slide-in-left     /* Slide from left */
.animation-delay-2000      /* 2s delay */
.animation-delay-4000      /* 4s delay */
```

## Form Handling

The NewsletterSignup component handles:
- Email validation
- Success feedback
- Form reset after submission

To connect to an email service, add in `NewsletterSignup.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (email) {
    // Add your email service API call here
    // Example: await fetch('/api/subscribe', { method: 'POST', body: ... })
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  }
};
```

## Performance Tips

1. **Image Optimization**: Replace SVG with optimized images
2. **Lazy Loading**: Components load as user scrolls
3. **Code Splitting**: Each component in separate file
4. **CSS Optimization**: Tailwind purges unused styles in production

## Browser Support

✅ Modern browsers (2+ years old)
✅ Chrome, Firefox, Safari, Edge
✅ Mobile browsers
✅ Responsive design

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Tailwind Classes Not Working
```bash
# Rebuild Tailwind
npm run build
```

### TypeScript Errors
```bash
# Check compilation
npx tsc --noEmit
```

## Deployment

### Deploy to Vercel (Recommended for Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Set Node version to 18+
4. Deploy built files

## Next Steps

1. 🎨 Customize colors and fonts
2. 📝 Update copy and text
3. 🔗 Add real links to footer
4. 📧 Connect email service to newsletter
5. 📊 Add analytics tracking
6. 🚀 Deploy to production

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org)

---

Happy coding! 🎉

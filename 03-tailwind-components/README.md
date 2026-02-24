# Lesson 03: Tailwind CSS + DaisyUI Components

Make your SaaS look professional with modern styling.

## What you'll learn (Days 4-6)

- Setting up Tailwind CSS in Next.js
- Using DaisyUI for pre-built components
- Building reusable components (Navbar, Footer, Cards)
- Creating forms (Login, Signup)
- Responsive design with Tailwind
- Server vs Client Components

## Run it
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Tailwind CSS Basics

Tailwind uses **utility classes** instead of writing custom CSS:
```javascript
// Old way (custom CSS)
<div className="my-custom-class">

// Tailwind way
<div className="bg-blue-500 text-white p-4 rounded-lg">
```

**Common classes:**
- `p-4` = padding
- `m-4` = margin
- `text-xl` = text size
- `bg-blue-500` = background color
- `rounded-lg` = border radius
- `shadow-xl` = box shadow

## DaisyUI Components

DaisyUI adds component classes on top of Tailwind:

- `btn` = styled button
- `card` = card container
- `navbar` = navigation bar
- `hero` = hero section
- `input` = styled input field

## Server vs Client Components

**Server Components (default):**
- No "use client" needed
- Render on the server
- Can't use useState, onClick, etc.
- Faster, smaller bundle

**Client Components:**
- Need `'use client'` at top of file
- Run in the browser
- Can use hooks and events
- Use for interactive forms, buttons

## Try this

1. Change the color scheme in `tailwind.config.js`
2. Add a new feature card to the home page
3. Create a `/contact` page with a contact form
4. Customize the navbar logo
5. Add a testimonials section

## Component Architecture
```
app/
├── components/          ← Reusable components here
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── FeatureCard.js
│   └── PricingCard.js
├── page.js             ← Use components here
├── pricing/page.js
└── login/page.js
```

**Why components?**
- Don't repeat code (DRY principle)
- Easy to update (change once, updates everywhere)
- Easy to test
- Clean code structure

## Next Steps

Move to `04-auth-database` to add real user authentication and MongoDB database. That's where things get exciting!
# Lesson 02: Pages & Routing

Build a multi-page SaaS website with navigation.

## What you'll learn (Days 2-3)

- File-based routing in Next.js
- Creating multiple pages (Home, Pricing, About)
- Using the Link component for navigation
- Building a simple navbar
- Basic SaaS page structure

## Run it
```bash
npm install
npm run dev
```

Open http://localhost:3000

## File Structure Explained
```
app/
├── page.js          → / (home page)
├── pricing/
│   └── page.js      → /pricing
├── about/
│   └── page.js      → /about
└── layout.js        → wraps all pages
```

**The folder name = the URL path!**

## Web Fundamentals Recap

**HTTP:** How browsers talk to servers (request/response)
**DNS:** Converts domain names to IP addresses
**Routing:** Showing different pages based on the URL

## Try this

1. Create a `/contact` page with a contact form
2. Add a "Contact" link to the navigation
3. Change the pricing amounts
4. Add your own SaaS idea to the landing page
5. Add a footer component (copy the nav style)

## SaaS Pages You Need

Every SaaS needs these core pages:
- **Landing page** - Hook visitors in 5 seconds
- **Pricing** - Clear, simple, with CTA buttons
- **About** - Build trust, tell your story
- **Contact** - Let people reach you (optional for MVP)

## Next Steps

Move to `03-tailwind-components` to make this look professional with Tailwind CSS and reusable components.
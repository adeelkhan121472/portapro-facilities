# Customization Guide

Quick guide to customize the PortaPro Facilities website for your business.

## 🎨 Branding Changes

### 1. Company Name & Logo

**Update company name in:**
- `app/layout.tsx` - Header and footer
- `app/page.tsx` - Homepage hero
- All location pages display it automatically

**Add logo:**
1. Place logo file in `/public/logo.png`
2. Update in `app/layout.tsx`:
```tsx
<a href="/" className="flex items-center text-2xl font-bold">
  <img src="/logo.png" alt="PortaPro Facilities" className="h-10 mr-3" />
  PortaPro Facilities
</a>
```

### 2. Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: '#1e40af',    // Main blue - change to your brand color
  secondary: '#059669',   // Green - change to your accent color
},
```

Common color schemes:
- Blue/Orange: `primary: '#2563eb'`, `secondary: '#ea580c'`
- Green/Blue: `primary: '#059669'`, `secondary: '#0ea5e9'`
- Red/Gray: `primary: '#dc2626'`, `secondary: '#6b7280'`

### 3. Contact Information

**Phone Number:**

Find and replace all instances of `1-800-PORTA-PRO` with your actual number:
- In VS Code: Ctrl+Shift+F (Find in Files)
- Search: `1-800-PORTA-PRO`
- Replace with: Your phone number

**Email:**

Replace `info@portaprofacilities.site` with your email in:
- `app/layout.tsx` (footer)
- `README.md`

### 4. Domain Name

Update domain references:
1. In `app/sitemap.ts` - Change `baseUrl`
2. In SEO guides and documentation
3. When deploying, configure DNS

---

## 📍 Location Management

### Add New Location

Edit `app/locations.ts` and add to the array:

```typescript
{
  city: "Miami",
  state: "Florida",
  stateAbbr: "FL",
  slug: "miami-fl",  // Must be unique and URL-friendly
  population: "440K",
  zipCodes: ["33101", "33102", "33109", "33125", "33126"],
  description: "Your description for Miami services",
  neighborhoods: ["Downtown", "South Beach", "Brickell", "Wynwood", "Coconut Grove"]
}
```

The page will automatically generate at `/location/miami-fl`

### Remove Location

Simply delete the entry from the `locations` array in `app/locations.ts`

### Update Location Info

Edit any field in the location object:
- `description` - Main service description
- `neighborhoods` - List of areas served
- `zipCodes` - Primary ZIP codes
- `population` - Display population

---

## 📝 Content Updates

### Homepage Hero Text

Edit `app/page.tsx` - Look for the hero section:
```tsx
<h1 className="text-5xl font-bold mb-6">
  Professional Portable Toilet Rentals  // Change this
</h1>
<p className="text-xl mb-8 max-w-2xl mx-auto">
  Your tagline here  // And this
</p>
```

### Services

Edit the services section in `app/page.tsx`:
- Change service names
- Update descriptions
- Modify features lists
- Add/remove service cards

### Why Choose Us

Modify the 4 reasons in `app/page.tsx`:
```tsx
<div className="text-center">
  <div className="text-5xl mb-4">🏆</div>
  <h3 className="text-xl font-bold mb-2">Top Quality</h3>
  <p className="text-gray-600">Your custom text</p>
</div>
```

---

## 🖼️ Adding Images

### Service Images

1. Add images to `/public/images/`
2. Update in relevant pages:

```tsx
<img 
  src="/images/standard-unit.jpg" 
  alt="Standard portable toilet"
  className="w-full h-64 object-cover rounded-lg"
/>
```

### Location-Specific Images

Add city-specific photos to location pages:
```tsx
// In app/location/[slug]/page.tsx
<div className="aspect-video relative">
  <img 
    src={`/images/locations/${location.slug}.jpg`}
    alt={`Portable toilets in ${location.city}`}
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

---

## 📋 Forms

### Quote Form Customization

Edit `app/quote/page.tsx`:

**Add fields:**
```tsx
<div>
  <label htmlFor="newField" className="block text-sm font-semibold text-gray-700 mb-2">
    Field Label *
  </label>
  <input 
    type="text" 
    id="newField" 
    name="newField" 
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
  />
</div>
```

**Change form action:**

Connect to your email service or CRM:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

Or use services like:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend API

---

## 🔗 Navigation

### Add Menu Items

Edit `app/layout.tsx`:
```tsx
<div className="hidden md:flex space-x-6">
  <a href="/" className="hover:text-gray-200">Home</a>
  <a href="/services" className="hover:text-gray-200">Services</a>
  <a href="/about" className="hover:text-gray-200">About</a>  // New item
  <a href="/blog" className="hover:text-gray-200">Blog</a>    // New item
  <a href="/locations" className="hover:text-gray-200">Locations</a>
  <a href="/contact" className="hover:text-gray-200">Contact</a>
</div>
```

### Create New Pages

1. Create directory: `app/about`
2. Create file: `app/about/page.tsx`
3. Add content:

```tsx
export const metadata = {
  title: 'About Us | PortaPro Facilities',
  description: 'Learn about our company...'
}

export default function AboutPage() {
  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p>Your content here...</p>
        </div>
      </section>
    </main>
  )
}
```

---

## 📱 Social Media Links

Add to footer in `app/layout.tsx`:

```tsx
<div>
  <h4 className="font-bold mb-4">Follow Us</h4>
  <div className="flex space-x-4">
    <a href="https://facebook.com/yourpage" className="hover:text-white">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Facebook icon SVG path */}
      </svg>
    </a>
    {/* Add more social icons */}
  </div>
</div>
```

---

## 🎯 Call-to-Action Buttons

### Change CTA Text

Find and replace throughout:
- "Get Free Quote" → Your CTA
- "Call Now" → Your CTA
- Phone number links

### Change CTA Colors

In any page, update button classes:
```tsx
<a 
  href="/quote" 
  className="bg-primary hover:bg-blue-700"  // Change these
>
  Button Text
</a>
```

---

## 📊 Analytics & Tracking

### Add Google Analytics

In `app/layout.tsx`, add to `<head>`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Add Facebook Pixel

Similar to Google Analytics, add Meta Pixel code.

---

## 🛠️ Advanced Customizations

### Add Blog Section

1. Create `app/blog/page.tsx` for blog listing
2. Create `app/blog/[slug]/page.tsx` for individual posts
3. Store posts in `app/blog-posts.ts`

### Add Customer Reviews

1. Create reviews component in `components/Reviews.tsx`
2. Import and use on homepage and location pages

### Add Live Chat

Integrate services like:
- Intercom
- Drift
- Tawk.to
- Crisp

Just add their script to `app/layout.tsx`

---

## 🚀 Testing Changes

After making changes:

```bash
npm run dev  # Test locally
npm run build  # Test production build
```

Visit `http://localhost:3000` to see changes.

---

## 📦 Common Snippets

### Full-width background image:
```tsx
<section 
  className="py-20 bg-cover bg-center"
  style={{backgroundImage: "url('/images/hero-bg.jpg')"}}
>
  <div className="bg-black bg-opacity-50">
    {/* Content */}
  </div>
</section>
```

### Two-column layout:
```tsx
<div className="grid md:grid-cols-2 gap-8">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>
```

### Centered content container:
```tsx
<div className="container mx-auto px-4 max-w-4xl">
  {/* Content */}
</div>
```

---

## 📞 Need Help?

- Check Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- TypeScript docs: https://www.typescriptlang.org/docs

For major customizations, consider hiring a developer familiar with Next.js and React.

# PortaPro Facilities - Portable Toilet Rental Website

A professional Next.js website for portable toilet rentals with 30 location-specific pages targeting high-population US cities.

## Features

- ✅ **30 Location Pages** - Individual pages for major US cities with SEO-optimized content
- ✅ **Responsive Design** - Mobile-first Tailwind CSS styling
- ✅ **Static Site Generation** - Fast page loads with pre-rendered location pages
- ✅ **SEO Optimized** - Unique meta titles and descriptions for each location
- ✅ **Professional Layout** - Clean, modern design with clear CTAs
- ✅ **Location-Specific Content** - Tailored messaging for each city

## Location Pages Included

The website includes optimized pages for these 30 cities:

1. New York, NY
2. Los Angeles, CA
3. Chicago, IL
4. Houston, TX
5. Phoenix, AZ
6. Philadelphia, PA
7. San Antonio, TX
8. San Diego, CA
9. Dallas, TX
10. San Jose, CA
11. Austin, TX
12. Jacksonville, FL
13. Fort Worth, TX
14. Columbus, OH
15. Charlotte, NC
16. San Francisco, CA
17. Indianapolis, IN
18. Seattle, WA
19. Denver, CO
20. Boston, MA
21. Nashville, TN
22. Las Vegas, NV
23. Portland, OR
24. Detroit, MI
25. Memphis, TN
26. Baltimore, MD
27. Milwaukee, WI
28. Albuquerque, NM
29. Tucson, AZ
30. Atlanta, GA

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portapro-facilities/
├── app/
│   ├── location/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic location pages
│   ├── locations/
│   │   └── page.tsx          # All locations listing
│   ├── quote/
│   │   └── page.tsx          # Quote request form
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with nav/footer
│   ├── locations.ts          # Location data
│   └── page.tsx              # Homepage
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Key Pages

- **Homepage** (`/`) - Main landing page with services overview
- **Location Pages** (`/location/{city-state}`) - 30 SEO-optimized city pages
- **All Locations** (`/locations`) - Directory of all service areas
- **Get Quote** (`/quote`) - Quote request form

## Customization

### Update Location Data

Edit `app/locations.ts` to modify city information, add new locations, or change descriptions.

### Styling

The website uses Tailwind CSS. Main colors can be changed in `tailwind.config.js`:
- Primary: Blue (#1e40af)
- Secondary: Green (#059669)

### Contact Information

Update phone number and email in:
- `app/layout.tsx` (footer and header)
- All page files with contact CTAs

## Deployment

### Deploy to Vercel (Recommended)

This site is configured for deployment on Vercel with custom domain `portaprofacilities.site`.

#### Step-by-Step Deployment:

1. **Push to GitHub** (Already done ✅)
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from GitHub: `adeelkhan121472/portapro-facilities`
   - Framework Preset: Next.js (auto-detected)
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add domain: `portaprofacilities.site`
   - Add domain: `www.portaprofacilities.site`
   - Follow DNS configuration instructions

4. **DNS Configuration**
   Add these records to your domain registrar:

   **For apex domain (portaprofacilities.site):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

5. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Your site will be available at `https://portaprofacilities.site`

#### Build Configuration (Already Configured ✅)

The `vercel.json` file includes:
- Security headers
- Cache control for static assets
- Optimized image caching
- Sitemap and robots.txt headers

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with Node.js

## SEO Considerations

Each location page includes:
- Unique meta title and description
- H1 tags with location keywords
- Structured content with proper heading hierarchy
- Internal linking between location pages
- Local keyword targeting

## License

Private project for PortaPro Facilities.

## Support

For questions or support, contact: info@portaprofacilities.site

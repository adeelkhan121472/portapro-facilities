# Deployment Guide for PortaPro Facilities Website

## Quick Start

This Next.js website is ready to deploy to your preferred hosting platform. Below are instructions for the most popular options.

## Option 1: Vercel (Easiest & Recommended)

Vercel is made by the creators of Next.js and offers the best performance.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Add Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add `portaprofacilities.site`
   - Update your DNS records as instructed by Vercel

**Cost**: Free for personal/small projects

---

## Option 2: Netlify

Another excellent choice with easy deployment.

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records

**Cost**: Free for personal projects

---

## Option 3: Self-Hosted (VPS/Dedicated Server)

For full control, deploy to your own server.

### Prerequisites:
- Ubuntu/Debian server
- Node.js 18+ installed
- Domain pointing to server IP

### Steps:

1. **Install Node.js** (if not installed)
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Upload code to server**
   ```bash
   # On your server
   cd /var/www
   git clone YOUR_REPO_URL portaprofacilities
   cd portaprofacilities
   ```

3. **Install dependencies and build**
   ```bash
   npm install
   npm run build
   ```

4. **Set up PM2 for process management**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "portapro" -- start
   pm2 save
   pm2 startup
   ```

5. **Set up Nginx as reverse proxy**
   ```bash
   sudo nano /etc/nginx/sites-available/portaprofacilities
   ```
   
   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name portaprofacilities.site www.portaprofacilities.site;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portaprofacilities /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d portaprofacilities.site -d www.portaprofacilities.site
   ```

**Cost**: Server costs (~$5-20/month for VPS)

---

## Environment Variables

If you need to add environment variables (API keys, etc.):

Create `.env.local` file:
```env
NEXT_PUBLIC_PHONE=1-800-PORTA-PRO
NEXT_PUBLIC_EMAIL=info@portaprofacilities.site
```

Then update in your hosting platform:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Build & deploy → Environment
- **Self-hosted**: Add to `.env.local` on server

---

## Domain Setup

### DNS Records for portaprofacilities.site

1. **For Vercel/Netlify**:
   - Add A record: `@` → IP provided by platform
   - Add CNAME: `www` → your-site.vercel.app (or netlify.app)

2. **For Self-Hosted**:
   - Add A record: `@` → Your server IP
   - Add A record: `www` → Your server IP

### Propagation
DNS changes can take 24-48 hours to propagate worldwide.

---

## Post-Deployment Checklist

- [ ] Test all 30 location pages
- [ ] Verify quote form functionality
- [ ] Check mobile responsiveness
- [ ] Test phone number links
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if needed)
- [ ] Enable HTTPS/SSL
- [ ] Test page load speeds
- [ ] Set up monitoring/uptime checks

---

## Performance Optimization

The site is already optimized with:
- ✅ Static page generation
- ✅ Image optimization (when images added)
- ✅ Minimal JavaScript
- ✅ Tailwind CSS purging

Expected Lighthouse scores:
- Performance: 90+
- SEO: 95+
- Accessibility: 90+

---

## Troubleshooting

**Build fails**:
- Check Node.js version (needs 18+)
- Delete `node_modules` and `.next`, then reinstall

**Pages not loading**:
- Verify build completed successfully
- Check server logs: `pm2 logs` (if self-hosted)

**Domain not working**:
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate is valid

---

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/

---

## Maintenance

**Regular Updates**:
```bash
npm update
npm audit fix
npm run build
```

**Backup**:
- Keep code in GitHub (automatic backup)
- Export site daily if self-hosting

**Monitoring**:
- Set up UptimeRobot for uptime monitoring
- Enable error tracking (Sentry, LogRocket, etc.)

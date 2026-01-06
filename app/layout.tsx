import type { Metadata } from 'next'
import { Playfair_Display, Sora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900']
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'PortaPro Facilities - Premium Portable Toilet Rentals',
  description: 'Premium portable toilet and restroom rentals for construction sites, events, and special occasions across the United States. Luxury facilities serving 30+ major cities.',
  keywords: 'portable toilet rentals, porta potty rental, restroom trailers, construction toilets, event restrooms, ADA accessible portable toilets',
  authors: [{ name: 'PortaPro Facilities' }],
  creator: 'PortaPro Facilities',
  publisher: 'PortaPro Facilities',
  metadataBase: new URL('https://portaprofacilities.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portaprofacilities.site',
    title: 'PortaPro Facilities - Premium Portable Toilet Rentals',
    description: 'Premium portable toilet and restroom rentals for construction sites, events, and special occasions across the United States. Luxury facilities serving 30+ major cities.',
    siteName: 'PortaPro Facilities',
    images: [
      {
        url: '/Logo-Porta-Main.png',
        width: 1200,
        height: 630,
        alt: 'PortaPro Facilities - Premium Portable Restroom Rentals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PortaPro Facilities - Premium Portable Toilet Rentals',
    description: 'Premium portable toilet and restroom rentals for construction sites, events, and special occasions across the United States.',
    images: ['/Logo-Porta-Main.png'],
    creator: '@PortaProUSA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sora.variable}`}>
      <body className="font-sans bg-gray-50">
        {/* Premium Navigation */}
        <nav className="fixed w-full top-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-secondary/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center space-x-3">
                <img src="/Logo-Porta-Main.png" alt="PortaPro Facilities" className="h-14 w-auto" />
                <div>
                  <h1 className="text-2xl font-display font-bold text-white">PortaPro</h1>
                  <p className="text-xs text-light">Premium Facilities</p>
                </div>
              </a>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-white hover:text-secondary transition font-medium">Home</a>
                <a href="/about" className="text-white hover:text-secondary transition font-medium">About</a>
                <a href="/services" className="text-white hover:text-secondary transition font-medium">Services</a>
                <a href="/locations" className="text-white hover:text-secondary transition font-medium">Locations</a>
                <a href="/contact" className="text-white hover:text-secondary transition font-medium">Contact</a>
              </div>
              
              <a href="tel:1-800-PORTA-PRO" className="bg-gradient-to-r from-secondary to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Get Quote
              </a>
            </div>
          </div>
        </nav>
        
        <main>
          {children}
        </main>
        
        {/* Premium Footer */}
        <footer className="bg-dark text-white py-16 mt-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/Logo-Porta-Main.png" alt="PortaPro Facilities" className="h-12 w-auto" />
                  <div>
                    <h3 className="text-xl font-display font-bold">PortaPro</h3>
                    <p className="text-xs text-gray-400">Premium Facilities</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  America's premier portable restroom rental service. Excellence delivered.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-secondary transition">Construction Sites</a></li>
                  <li><a href="#" className="hover:text-secondary transition">Luxury Events</a></li>
                  <li><a href="#" className="hover:text-secondary transition">ADA Accessible</a></li>
                  <li><a href="#" className="hover:text-secondary transition">Emergency Services</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="/about" className="hover:text-secondary transition">About Us</a></li>
                  <li><a href="/services" className="hover:text-secondary transition">Our Services</a></li>
                  <li><a href="/locations" className="hover:text-secondary transition">All Locations</a></li>
                  <li><a href="/contact" className="hover:text-secondary transition">Contact Us</a></li>
                  <li><a href="/quote" className="hover:text-secondary transition">Get Quote</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="text-secondary">📞</span>
                    <span>1-800-PORTA-PRO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-secondary">✉️</span>
                    <span>info@portaprofacilities.site</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-secondary">🕒</span>
                    <span>24/7 Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; 2026 PortaPro Facilities. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-secondary transition text-sm">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-secondary transition text-sm">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

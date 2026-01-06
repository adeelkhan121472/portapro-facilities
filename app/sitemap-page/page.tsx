import { Metadata } from 'next'
import Link from 'next/link'
import { locations } from '../locations'

export const metadata: Metadata = {
  title: 'Sitemap - PortaPro Facilities | All Pages',
  description: 'Complete sitemap of PortaPro Facilities website. Browse all our pages including services, locations, and contact information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SitemapPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-mesh relative overflow-hidden py-32 pt-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Find all pages and locations we serve across the United States
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

              {/* Main Pages */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="text-3xl mr-3">📄</span>
                  Main Pages
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-primary font-medium transition flex items-center">
                      <span className="mr-2">→</span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition flex items-center">
                      <span className="mr-2">→</span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition flex items-center">
                      <span className="mr-2">→</span>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" className="text-gray-700 hover:text-primary font-medium transition flex items-center">
                      <span className="mr-2">→</span>
                      All Locations
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition flex items-center">
                      <span className="mr-2">→</span>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/quote" className="text-gray-700 hover:text-primary font-medium transition flex items-center">
                      <span className="mr-2">→</span>
                      Get Quote
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Info */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="text-3xl mr-3">🚽</span>
                  Our Services
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Construction Grade Units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Luxury Event Trailers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>ADA Accessible Units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Event Specials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Hand Wash Stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>24/7 Emergency Service</span>
                  </li>
                </ul>
                <Link href="/services" className="inline-block mt-6 text-primary font-bold hover:text-secondary transition">
                  View All Services →
                </Link>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="text-3xl mr-3">📞</span>
                  Contact
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-primary mb-2">Phone</p>
                    <a href="tel:1-800-PORTA-PRO" className="hover:text-secondary transition">
                      1-800-PORTA-PRO
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Email</p>
                    <a href="mailto:info@portaprofacilities.site" className="hover:text-secondary transition">
                      info@portaprofacilities.site
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Hours</p>
                    <p>24/7 Available</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-block mt-6 text-primary font-bold hover:text-secondary transition">
                  Contact Us →
                </Link>
              </div>
            </div>

            {/* All Locations */}
            <div className="mt-16 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
                <span className="text-4xl mr-3">📍</span>
                All Locations ({locations.length} Cities)
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/location/${location.slug}`}
                    className="text-gray-700 hover:text-primary font-medium transition flex items-center p-3 rounded-lg hover:bg-primary/5"
                  >
                    <span className="mr-2 text-secondary">📍</span>
                    {location.city}, {location.stateAbbr}
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/locations" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg">
                  View All Location Details
                </Link>
              </div>
            </div>

            {/* XML Sitemap Link */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Looking for the XML sitemap for search engines?</p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-secondary transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span>View XML Sitemap</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-mesh relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-light mb-10 max-w-2xl mx-auto">
            Get your free quote today and experience premium portable restroom service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote" className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl">
              Request Free Quote
            </Link>
            <a href="tel:1-800-PORTA-PRO" className="glass text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>1-800-PORTA-PRO</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

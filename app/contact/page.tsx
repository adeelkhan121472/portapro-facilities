import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Portable Toilet Rentals | 24/7 Service | PortaPro Facilities',
  description: 'Contact PortaPro Facilities for portable toilet rentals. 24/7 customer service, free quotes, same-day delivery available. Call 1-800-PORTA-PRO or request a quote online.',
  keywords: 'contact porta potty rental, portable toilet quote, restroom rental inquiry, 24/7 service, emergency toilet rental, construction site quote, event restroom contact',
  alternates: {
    canonical: 'https://portaprofacilities.site/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portaprofacilities.site/contact',
    title: 'Contact PortaPro Facilities - 24/7 Portable Toilet Rental Service',
    description: 'Get in touch with PortaPro for portable restroom rentals. Free quotes, expert consultation, and 24/7 emergency service nationwide.',
    siteName: 'PortaPro Facilities',
    images: [
      {
        url: '/Logo-Porta-Main.png',
        width: 1200,
        height: 630,
        alt: 'PortaPro Facilities Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact PortaPro Facilities - Portable Toilet Rentals',
    description: 'Get in touch with PortaPro for portable restroom rentals. Free quotes and 24/7 service.',
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
}

export default function ContactPage() {
  // ContactPage Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact PortaPro Facilities",
    "description": "Contact PortaPro Facilities for portable toilet and restroom rentals across the United States",
    "url": "https://portaprofacilities.site/contact"
  };

  // Organization Schema with Contact Details
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PortaPro Facilities",
    "url": "https://portaprofacilities.site",
    "logo": "https://portaprofacilities.site/Logo-Porta-Main.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-767-8277",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en",
        "contactOption": "TollFree",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-767-8277",
        "contactType": "sales",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-767-8277",
        "contactType": "emergency",
        "areaServed": "US",
        "availableLanguage": "en",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "email": "info@portaprofacilities.site",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="gradient-mesh relative overflow-hidden py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="glass px-6 py-2 rounded-full text-white font-medium text-sm">
                📞 Available 24/7/365
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Let's Get Your Project
              <span className="block text-gradient">Started Today</span>
            </h1>

            <p className="text-xl md:text-2xl text-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Talk to our portable restroom experts. Free quotes, expert advice, and same-day service available in most locations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:1-800-PORTA-PRO" className="btn-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl inline-flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Call 1-800-PORTA-PRO</span>
              </a>
              <a href="mailto:info@portaprofacilities.site" className="glass text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
                Multiple Ways to Connect
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Choose How You'd Like to Reach Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you need an immediate response or prefer to request a quote online, we're here to help
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Phone Contact */}
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white shadow-xl text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Call Us Anytime</h3>
                <p className="text-light mb-6">Speak with a live expert 24/7</p>
                <a href="tel:1-800-PORTA-PRO" className="text-2xl font-display font-bold block mb-2 hover:text-secondary transition">
                  1-800-PORTA-PRO
                </a>
                <p className="text-sm text-light">(1-800-767-8277)</p>
                <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p className="text-sm">Available 24/7/365</p>
                  <p className="text-xs text-light mt-1">Including holidays & weekends</p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-gradient-to-br from-secondary to-yellow-600 rounded-3xl p-8 text-white shadow-xl text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                <p className="text-white mb-6">Get a response within 2 hours</p>
                <a href="mailto:info@portaprofacilities.site" className="text-xl font-semibold block mb-2 hover:underline break-all">
                  info@portaprofacilities.site
                </a>
                <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p className="text-sm">Response Time</p>
                  <p className="text-xs text-white mt-1">Usually within 2 hours during business hours</p>
                </div>
              </div>

              {/* Online Quote */}
              <div className="bg-gradient-to-br from-accent to-purple-700 rounded-3xl p-8 text-white shadow-xl text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Request a Quote</h3>
                <p className="text-white mb-6">Fill out our simple online form</p>
                <a href="/quote" className="inline-block bg-white text-accent px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
                  Get Free Quote
                </a>
                <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p className="text-sm">Fast & Easy</p>
                  <p className="text-xs text-white mt-1">Takes less than 2 minutes to complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Emergency Service */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Office Hours</h3>
                    <p className="text-gray-600">When our team is in the office</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-gray-600">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold text-gray-700">Holidays</span>
                    <span className="text-gray-600">Limited Hours</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Best time to call:</span> Weekday mornings (8-10 AM) for fastest response and same-day delivery options.
                  </p>
                </div>
              </div>

              {/* Emergency Service */}
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 shadow-xl text-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">24/7 Emergency Service</h3>
                    <p className="text-red-100">We're always here when you need us</p>
                  </div>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  Unit tipped over? Unexpected event? Last-minute construction inspection? Our emergency response team is standing by around the clock.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p>Emergency delivery within 2-4 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p>After-hours service & maintenance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p>Weekend & holiday availability</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p className="text-sm text-red-100 mb-2">Emergency Hotline:</p>
                  <a href="tel:1-800-PORTA-PRO" className="text-3xl font-display font-bold hover:text-red-200 transition">
                    1-800-PORTA-PRO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Connect with the Right Department
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized teams are ready to assist with your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sales Department */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-primary mb-2">Sales & Quotes</h3>
                <p className="text-gray-600 text-sm mb-4">New rentals, pricing, and product information</p>
                <a href="tel:1-800-PORTA-PRO" className="text-secondary font-semibold hover:underline">Call Sales Team</a>
              </div>

              {/* Customer Service */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="text-xl font-bold text-primary mb-2">Customer Service</h3>
                <p className="text-gray-600 text-sm mb-4">Existing rentals, billing, and account management</p>
                <a href="tel:1-800-PORTA-PRO" className="text-secondary font-semibold hover:underline">Call Support</a>
              </div>

              {/* Dispatch */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-primary mb-2">Dispatch & Delivery</h3>
                <p className="text-gray-600 text-sm mb-4">Delivery schedules, placement, and logistics</p>
                <a href="tel:1-800-PORTA-PRO" className="text-secondary font-semibold hover:underline">Call Dispatch</a>
              </div>

              {/* Maintenance */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-primary mb-2">Service & Maintenance</h3>
                <p className="text-gray-600 text-sm mb-4">Cleaning schedules, service requests, and repairs</p>
                <a href="tel:1-800-PORTA-PRO" className="text-secondary font-semibold hover:underline">Call Service</a>
              </div>

              {/* Event Planning */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-primary mb-2">Event Planning</h3>
                <p className="text-gray-600 text-sm mb-4">Weddings, festivals, and luxury restroom trailers</p>
                <a href="tel:1-800-PORTA-PRO" className="text-secondary font-semibold hover:underline">Call Events Team</a>
              </div>

              {/* Construction Services */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-primary mb-2">Construction Division</h3>
                <p className="text-gray-600 text-sm mb-4">Long-term projects, OSHA compliance, and job sites</p>
                <a href="tel:1-800-PORTA-PRO" className="text-secondary font-semibold hover:underline">Call Construction</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              Nationwide Coverage
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Serving 30+ Major Cities
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              From coast to coast, our network ensures professional portable restroom service wherever your project takes you
            </p>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {[
                  'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
                  'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA',
                  'Austin, TX', 'Jacksonville, FL', 'Fort Worth, TX', 'Columbus, OH', 'Charlotte, NC',
                  'San Francisco, CA', 'Indianapolis, IN', 'Seattle, WA', 'Denver, CO', 'Boston, MA',
                  'El Paso, TX', 'Nashville, TN', 'Detroit, MI', 'Oklahoma City, OK', 'Portland, OR',
                  'Las Vegas, NV', 'Memphis, TN', 'Louisville, KY', 'Baltimore, MD', 'Milwaukee, WI'
                ].map((city) => (
                  <div key={city} className="text-sm font-semibold text-gray-700 p-2 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition">
                    {city}
                  </div>
                ))}
              </div>
              <a href="/locations" className="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl inline-flex items-center space-x-2">
                <span>View All Locations</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Contact Related */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Before You Call
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common contact questions
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-3">What information should I have ready when I call?</h3>
                <p className="text-gray-700 leading-relaxed">
                  To help us provide an accurate quote quickly, have ready: (1) Your delivery address and ZIP code, (2) Number of units needed, (3) Rental duration or event date, (4) Type of project (construction, event, emergency), and (5) Any special requirements (ADA units, hand wash stations, luxury trailers). Don't worry if you don't have all details - our team will guide you through the process!
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-3">How quickly will I receive a quote?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Phone quotes are provided immediately during your call - usually within 5 minutes. Email and online quote requests receive responses within 2 hours during business hours, often much faster. For urgent needs, calling 1-800-PORTA-PRO is the fastest option.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-3">Can I schedule delivery for a specific time?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Contact our dispatch team to coordinate specific delivery windows. We typically offer morning (7-11 AM) or afternoon (12-4 PM) windows, with exact timing available for an additional fee. For events, we coordinate delivery 1-2 days before your event date.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-3">What if I need to modify my order after placing it?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Call us at 1-800-PORTA-PRO as soon as possible. Changes to quantity, delivery date, or unit type can usually be accommodated up to 24 hours before scheduled delivery. Our customer service team will work with you to adjust your order without penalties whenever possible.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-3">Do you offer site visits before placing an order?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely! For large events, complex construction sites, or locations with access challenges, we offer free site visits. Our team will assess placement options, access routes, and any special requirements. Contact our sales department to schedule a consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 gradient-mesh relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-light mb-12 max-w-3xl mx-auto">
            Our team is standing by to provide expert guidance and fast, friendly service
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:1-800-PORTA-PRO" className="btn-primary text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl inline-flex items-center space-x-2">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Call Now: 1-800-PORTA-PRO</span>
            </a>
            <a href="/quote" className="glass text-white px-12 py-6 rounded-full font-semibold text-xl hover:bg-white hover:bg-opacity-20 transition">
              Request Online Quote
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-white font-semibold">Same-Day Delivery</p>
              <p className="text-light text-sm">Available in most locations</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-2">💯</div>
              <p className="text-white font-semibold">Free Quotes</p>
              <p className="text-light text-sm">No obligation, no hidden fees</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-white font-semibold">Expert Guidance</p>
              <p className="text-light text-sm">Professional consultation included</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

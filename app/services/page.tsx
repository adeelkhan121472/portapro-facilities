import { Metadata } from 'next'
import Link from 'next/link'
import { servicesFAQs, servicesOverview } from '../home-services-content'

export const metadata: Metadata = {
  title: 'Portable Toilet Rental Services | Construction & Event Restrooms | PortaPro',
  description: 'Complete portable restroom services: construction porta potties, luxury event trailers, ADA-compliant units, and hand wash stations. Professional delivery, maintenance, and 24/7 support nationwide.',
  keywords: 'portable toilet services, porta potty rental, luxury restroom trailers, construction site toilets, event restroom rental, ADA accessible portable toilets, hand washing stations, mobile restroom services',
  alternates: {
    canonical: 'https://portaprofacilities.site/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portaprofacilities.site/services',
    title: 'Portable Toilet Rental Services | PortaPro Facilities',
    description: 'Premium portable restroom solutions for construction sites, special events, and emergencies. From standard units to luxury climate-controlled trailers.',
    siteName: 'PortaPro Facilities',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PortaPro Facilities - Portable Toilet Rental Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portable Toilet Rental Services | PortaPro Facilities',
    description: 'Premium portable restroom solutions for construction sites, special events, and emergencies.',
    images: ['/og-image.jpg'],
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

export default function ServicesPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Portable Toilet Rental",
    "provider": {
      "@type": "Organization",
      "name": "PortaPro Facilities",
      "url": "https://portaprofacilities.site"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Portable Restroom Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Construction Porta Potty Rental",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Standard Construction Portable Toilet",
                "description": "Heavy-duty portable toilets for construction sites"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Event Restroom Rental",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Luxury Restroom Trailer",
                "description": "Climate-controlled luxury portable restrooms for events"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "ADA Accessible Units",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wheelchair Accessible Portable Toilet",
                "description": "ADA-compliant portable restrooms"
              }
            }
          ]
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": servicesFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="gradient-mesh relative overflow-hidden py-32 pt-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="glass px-6 py-2 rounded-full text-white font-medium text-sm">
                🚀 Professional Portable Restroom Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Complete Portable Toilet
              <span className="block text-gradient">Rental Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-light mb-10 max-w-3xl mx-auto leading-relaxed">
              From construction sites to luxury events, we provide the perfect portable restroom solution for every need. Professional delivery, maintenance, and 24/7 support nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quote" className="btn-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl inline-flex items-center space-x-2">
                <span>Get Free Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>
              <a href="tel:1-800-PORTA-PRO" className="glass text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>1-800-PORTA-PRO</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
                  Construction & Job Sites
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                  {servicesOverview.construction.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {servicesOverview.construction.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Key Features:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {servicesOverview.construction.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Ideal For:</h3>
                  <div className="flex flex-wrap gap-2">
                    {servicesOverview.construction.idealFor.map((use, index) => (
                      <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 font-medium">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Construction Unit Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl relative h-80 bg-gradient-to-br from-primary to-blue-700">
                  <img
                    src="/porta_images/construction-unit.jpg"
                    alt="Construction Grade Porta Potty"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/80 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-5xl mb-4">🏗️</div>
                      <h4 className="text-2xl font-bold mb-2">Heavy-Duty Construction Units</h4>
                      <p className="text-light">Built to withstand the toughest job sites</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                  <h4 className="text-2xl font-bold mb-3">$28/day or $150/month</h4>
                  <p className="text-light mb-4">Standard construction units with weekly service included</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Weekly servicing & maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>$100 delivery fee (one-time)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Volume discounts available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary rounded-3xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">🚨 OSHA Compliance Included</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All construction units meet OSHA sanitation standards for worker safety. We ensure proper placement ratios and provide all necessary documentation for site inspections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Services */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                {/* Event Unit Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl relative h-80 bg-gradient-to-br from-secondary to-yellow-600">
                  <img
                    src="/porta_images/event-unit.jpg"
                    alt="Event Special Porta Potty"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-yellow-600/80 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-5xl mb-4">⭐</div>
                      <h4 className="text-2xl font-bold mb-2">Premium Event Units</h4>
                      <p className="text-white">Make your guests feel at home</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary to-yellow-600 rounded-3xl p-8 text-white shadow-xl">
                  <h4 className="text-2xl font-bold mb-3">$295 per event</h4>
                  <p className="text-white mb-4">Standard event units for outdoor gatherings</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>$100 delivery + $195 rental</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Pre-event deep cleaning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Fully stocked & sanitized</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-secondary rounded-3xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-secondary mb-4">💎 Event Planning Experts</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our team helps you determine exact quantities needed based on guest count, event duration, and type. We'll ensure your guests have comfortable, clean facilities throughout your event.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-secondary to-yellow-600 rounded-full text-white font-semibold mb-6">
                  Events & Celebrations
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                  {servicesOverview.events.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {servicesOverview.events.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Premium Features:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {servicesOverview.events.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Perfect For:</h3>
                  <div className="flex flex-wrap gap-2">
                    {servicesOverview.events.idealFor.slice(0, 6).map((use, index) => (
                      <span key={index} className="px-4 py-2 bg-yellow-50 rounded-full text-sm text-gray-700 font-medium">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Trailers Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-accent to-purple-600 rounded-full text-white font-semibold mb-6">
                Premium Experience
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                {servicesOverview.luxury.title}
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {servicesOverview.luxury.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {servicesOverview.luxury.features.slice(0, 9).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Luxury Trailer Image Banner */}
            <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl relative h-96 bg-gradient-to-br from-accent to-purple-700">
              <img
                src="/porta_images/luxury-trailer.jpg"
                alt="Luxury Restroom Trailer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/70 to-purple-700/70 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">Luxury Restroom Trailers</h3>
                  <p className="text-2xl text-white">The Premium Choice for Upscale Events</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent to-purple-700 rounded-3xl p-12 text-white shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Luxury Trailer Rentals</h3>
                  <p className="text-xl text-white mb-6">Starting at $1,200/weekend</p>
                  <p className="text-light mb-8">
                    Hotel-quality restrooms on wheels. Perfect for weddings, galas, and upscale corporate events where only the best will do.
                  </p>
                  <Link href="/quote" className="inline-block bg-white text-accent px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition">
                    Get Custom Quote
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-4xl mb-2">❄️</div>
                    <p className="font-bold">Climate Control</p>
                    <p className="text-sm text-light">A/C & Heat</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-4xl mb-2">🚰</div>
                    <p className="font-bold">Running Water</p>
                    <p className="text-sm text-light">Hot & Cold</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-4xl mb-2">💡</div>
                    <p className="font-bold">LED Lighting</p>
                    <p className="text-sm text-light">Elegant Ambiance</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-4xl mb-2">🎵</div>
                    <p className="font-bold">Sound System</p>
                    <p className="text-sm text-light">Bluetooth Ready</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Ideal for premium events:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {servicesOverview.luxury.idealFor.map((use, index) => (
                  <span key={index} className="px-4 py-2 bg-purple-50 rounded-full text-sm text-gray-700 font-medium">
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Fleet Showcase */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              See What You're Getting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual guide to our portable restroom options - from basic to luxury
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Before & After Cleaning */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-3xl">✨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Pre-Delivery Cleaning</h3>
                  <p className="text-gray-600">Hospital-grade sanitation</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Every unit pressure-washed inside and out</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Sanitized with professional-grade disinfectants</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Fully stocked with supplies before delivery</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Final inspection by quality control team</span>
                </p>
              </div>
            </div>

            {/* Size Comparison */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-xl border-2 border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-700 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-3xl">📏</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Unit Dimensions</h3>
                  <p className="text-gray-600">Standard measurements</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow">
                  <p className="font-bold text-primary mb-1">Standard Unit</p>
                  <p className="text-sm text-gray-600">4' W × 4' D × 8' H</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <p className="font-bold text-primary mb-1">ADA Accessible</p>
                  <p className="text-sm text-gray-600">8' W × 5' D × 8' H</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <p className="font-bold text-primary mb-1">Luxury Trailer (4-stall)</p>
                  <p className="text-sm text-gray-600">16' W × 8' D × 10' H</p>
                </div>
              </div>
            </div>

            {/* ADA Accessible Unit Image */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl border-2 border-green-100 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-secondary to-green-700">
                <img
                  src="/porta_images/ada-unit.jpg"
                  alt="ADA Accessible Porta Potty"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-green-700/80 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="text-4xl mb-2">♿</div>
                    <h4 className="text-xl font-bold">ADA Accessible</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Wheelchair Accessible Units</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Spacious 8'×5' interior</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Handrails & support bars</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Fully ADA compliant</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison Grid */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Quick Feature Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left font-bold text-primary">Feature</th>
                      <th className="p-4 text-center font-bold text-primary">Standard</th>
                      <th className="p-4 text-center font-bold text-primary">Deluxe</th>
                      <th className="p-4 text-center font-bold text-primary">Luxury Trailer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 font-semibold">Flushing Toilet</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-semibold">Running Water</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-semibold">Climate Control</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-semibold">Interior Lighting</td>
                      <td className="p-4 text-center">Basic</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                      <td className="p-4 text-center text-secondary text-xl">✓ LED</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-semibold">Hand Sanitizer</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                      <td className="p-4 text-center text-secondary text-xl">✓</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-semibold">Pricing</td>
                      <td className="p-4 text-center font-bold text-primary">$295/event</td>
                      <td className="p-4 text-center font-bold text-primary">$450/event</td>
                      <td className="p-4 text-center font-bold text-primary">$1,200+/weekend</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              Service Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert answers about our portable toilet rental services, pricing, and logistics
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {servicesFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-primary mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-mesh relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Ready to Book Your Portable Restrooms?
          </h2>
          <p className="text-2xl text-light mb-12 max-w-3xl mx-auto">
            Professional service. Transparent pricing. Unmatched quality. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/quote" className="btn-primary text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl">
              Request Free Quote
            </Link>
            <a href="tel:1-800-PORTA-PRO" className="glass text-white px-12 py-6 rounded-full font-semibold text-xl flex items-center space-x-3">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
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

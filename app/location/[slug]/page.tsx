import { Metadata } from 'next'
import { getLocationBySlug, getAllLocationSlugs } from '../../locations'
import { notFound } from 'next/navigation'
import { getLocationContent, locationCoordinates } from '../location-data'

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)

  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  const pageUrl = `https://portaprofacilities.site/location/${params.slug}`;
  const pageTitle = `Portable Toilet Rentals in ${location.city}, ${location.stateAbbr} | PortaPro Facilities`;
  const pageDescription = `Professional porta potty rentals in ${location.city}, ${location.state}. ${location.description} Serving ${location.neighborhoods.join(', ')}. Call for free quote!`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: `portable toilet rental ${location.city}, porta potty ${location.city} ${location.stateAbbr}, restroom rental ${location.city}, construction toilets ${location.city}, event restrooms ${location.city}`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: 'PortaPro Facilities',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Portable Toilet Rentals in ${location.city}, ${location.state}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
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
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug)

  if (!location) {
    notFound()
  }

  const uniqueContent = getLocationContent(params.slug);
  const coords = locationCoordinates[params.slug] || { lat: 0, lng: 0 };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `PortaPro Facilities - ${location.city}`,
    "image": "https://portaprofacilities.site/logo.png",
    "@id": `https://portaprofacilities.site/location/${params.slug}`,
    "url": `https://portaprofacilities.site/location/${params.slug}`,
    "telephone": "+1-800-767-8277",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service Area",
      "addressLocality": location.city,
      "addressRegion": location.stateAbbr,
      "postalCode": location.zipCodes[0],
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "openingHoursSpecification": {
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
    },
    "sameAs": [
      "https://www.facebook.com/portaprofacilities",
      "https://twitter.com/PortaProUSA"
    ],
    "areaServed": {
      "@type": "City",
      "name": location.city,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": location.stateAbbr,
        "addressCountry": "US"
      }
    },
    "description": location.description
  };

  // FAQ Schema (if FAQs exist for this location)
  const faqSchema = uniqueContent.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": uniqueContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://portaprofacilities.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://portaprofacilities.site/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.city,
        "item": `https://portaprofacilities.site/location/${params.slug}`
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Portable Toilet Rentals in {location.city}, {location.stateAbbr}
            </h1>
            <p className="text-xl mb-6">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/quote" className="bg-secondary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 text-center">
                Get Free Quote
              </a>
              <a href="tel:1-800-PORTA-PRO" className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 text-center">
                Call Now: 1-800-PORTA-PRO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Population</h3>
              <p className="text-3xl font-bold text-gray-800">{location.population}</p>
              <p className="text-gray-600 mt-2">residents served</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Service Areas</h3>
              <p className="text-gray-700">{location.neighborhoods.slice(0, 3).join(', ')}</p>
              <p className="text-gray-600 mt-2">and surrounding areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">ZIP Codes</h3>
              <p className="text-gray-700">{location.zipCodes.join(', ')}</p>
              <p className="text-gray-600 mt-2">primary service zones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Portable Toilet Services in {location.city}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">🏗️ Construction Sites</h3>
              <p className="text-gray-700 mb-4">
                Keep your {location.city} construction site compliant and your workers comfortable with our durable, regularly serviced portable toilets. We understand the demands of construction projects in {location.state} and provide reliable solutions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Weekly or bi-weekly service</li>
                <li>✓ ADA compliant units available</li>
                <li>✓ Hand washing stations</li>
                <li>✓ Long-term rental discounts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">🎉 Special Events</h3>
              <p className="text-gray-700 mb-4">
                Hosting an event in {location.city}? From weddings to festivals, we provide clean, comfortable portable restroom solutions that keep your guests happy. Perfect for outdoor venues across {location.neighborhoods[0]} and beyond.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Deluxe restroom trailers</li>
                <li>✓ VIP portable toilets</li>
                <li>✓ On-site attendants available</li>
                <li>✓ Last-minute availability</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
            <h3 className="text-xl font-bold mb-3">Serving These {location.city} Neighborhoods:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {location.neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center">
                  <span className="text-secondary mr-2">📍</span>
                  <span className="font-semibold">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Local */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why {location.city} Chooses PortaPro Facilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-lg mb-2">Local Delivery</h3>
              <p className="text-gray-600">Fast delivery throughout {location.city} and {location.stateAbbr}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-lg mb-2">Always Clean</h3>
              <p className="text-gray-600">Spotless units maintained to highest standards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">💵</div>
              <h3 className="font-bold text-lg mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive pricing for {location.city} area</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-lg mb-2">Top Rated</h3>
              <p className="text-gray-600">Trusted by {location.city} businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Uses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Common Uses in {location.city}, {location.stateAbbr}
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Construction Sites',
              'Outdoor Weddings',
              'Festivals & Fairs',
              'Sporting Events',
              'Concerts',
              'Block Parties',
              'Corporate Events',
              'Graduation Parties',
              'Home Renovations',
              'Park Events',
              'Tailgating',
              'Emergency Services'
            ].map((use) => (
              <div key={use} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition">
                <p className="font-semibold">{use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {uniqueContent.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              Frequently Asked Questions - {location.city}, {location.stateAbbr}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {uniqueContent.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Rent in {location.city}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today! We serve all of {location.city}, including {location.neighborhoods.slice(0, 3).join(', ')}, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="bg-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700">
              Request Free Quote
            </a>
            <a href="tel:1-800-PORTA-PRO" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
              Call 1-800-PORTA-PRO
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            We Also Serve These Nearby Cities
          </h2>
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {getAllLocationSlugs()
              .filter(slug => slug !== params.slug)
              .slice(0, 10)
              .map((slug) => {
                const nearbyLocation = getLocationBySlug(slug)
                if (!nearbyLocation) return null
                return (
                  <a 
                    key={slug}
                    href={`/location/${slug}`}
                    className="bg-white p-3 rounded shadow hover:shadow-md transition text-center"
                  >
                    <p className="font-semibold text-primary text-sm">{nearbyLocation.city}</p>
                    <p className="text-xs text-gray-600">{nearbyLocation.stateAbbr}</p>
                  </a>
                )
              })}
          </div>
        </div>
      </section>
    </main>
  )
}

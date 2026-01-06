import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - PortaPro Facilities | Leading Portable Restroom Provider Since 2015',
  description: 'Learn about PortaPro Facilities - America\'s premier portable toilet rental company serving 30+ cities since 2015. Family-owned business with 5,000+ units, A+ BBB rating, and 10,000+ satisfied clients.',
  keywords: 'about porta pro, portable toilet company, restroom rental history, family owned business, porta potty provider, sanitation company, construction facilities, event restrooms',
  alternates: {
    canonical: 'https://portaprofacilities.site/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portaprofacilities.site/about',
    title: 'About PortaPro Facilities - Leading Portable Restroom Provider',
    description: 'Discover the PortaPro story - from a single-city operation in 2015 to America\'s premier portable restroom provider serving 30+ major cities nationwide.',
    siteName: 'PortaPro Facilities',
    images: [
      {
        url: '/Logo-Porta-Main.png',
        width: 1200,
        height: 630,
        alt: 'PortaPro Facilities - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PortaPro Facilities - Portable Restroom Rental Leaders',
    description: 'Learn about America\'s premier portable toilet rental company serving 30+ cities since 2015.',
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

export default function AboutPage() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PortaPro Facilities",
    "alternateName": "PortaPro",
    "url": "https://portaprofacilities.site",
    "logo": "https://portaprofacilities.site/Logo-Porta-Main.png",
    "foundingDate": "2015",
    "description": "America's premier portable toilet and restroom rental company serving construction sites, events, and special occasions across 30+ major US cities.",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    },
    "slogan": "Premium Portable Restroom Solutions",
    "knowsAbout": [
      "Portable toilet rentals",
      "Construction site sanitation",
      "Event restroom solutions",
      "Luxury restroom trailers",
      "ADA compliant facilities",
      "Emergency sanitation services"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-767-8277",
      "contactType": "customer service",
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "ratingCount": "10000"
    }
  };

  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About PortaPro Facilities",
    "description": "Learn about PortaPro Facilities, America's leading portable restroom rental company",
    "url": "https://portaprofacilities.site/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "PortaPro Facilities"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Hero Section */}
      <section className="gradient-mesh relative overflow-hidden py-32 pt-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="glass px-6 py-2 rounded-full text-white font-medium text-sm">
                🏆 Since 2015
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              America's Most Trusted
              <span className="block text-gradient">Portable Restroom Provider</span>
            </h1>

            <p className="text-xl md:text-2xl text-light mb-10 max-w-3xl mx-auto leading-relaxed">
              From a single-city operation to a nationwide network serving 30+ major metropolitan areas, we've built our reputation on uncompromising quality and service excellence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">2015</div>
                <div className="text-light text-sm">Founded</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">30+</div>
                <div className="text-light text-sm">Cities Served</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">5K+</div>
                <div className="text-light text-sm">Units in Fleet</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">10K+</div>
                <div className="text-light text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
                  Our Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                  Building Excellence, One Event at a Time
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    PortaPro Facilities was founded in 2015 with a simple but powerful vision: to elevate the portable restroom industry through uncompromising quality, innovative solutions, and exceptional customer service.
                  </p>
                  <p>
                    What started as a modest operation in a single metropolitan area has grown into one of America's most trusted portable sanitation providers. Our expansion wasn't driven by aggressive growth strategies—it was earned through word-of-mouth recommendations from satisfied clients who experienced the PortaPro difference firsthand.
                  </p>
                  <p>
                    Today, we operate across 30+ major cities, maintain a fleet of over 5,000 units ranging from rugged construction-grade porta potties to luxury climate-controlled restroom trailers, and serve more than 10,000 businesses, event planners, and construction firms annually.
                  </p>
                  <p className="font-semibold text-primary">
                    But our core mission remains unchanged: deliver portable restroom solutions that exceed expectations, every single time.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-light leading-relaxed">
                    To provide premium portable sanitation solutions that enhance the success of construction projects, events, and emergencies through reliability, cleanliness, and professional service that sets the industry standard.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary to-yellow-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl mb-4">👁️</div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-white leading-relaxed">
                    To be America's most respected portable restroom provider, known for transforming an essential service into an experience that reflects the professionalism and care our clients deserve.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent to-purple-700 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                  <p className="text-white leading-relaxed">
                    Excellence in execution. Integrity in every interaction. Innovation in our solutions. And an unwavering commitment to our clients' success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              The PortaPro Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on doing the fundamentals exceptionally well, while constantly innovating to serve our clients better
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🧼',
                title: 'Hospital-Grade Sanitation',
                description: 'Every unit undergoes rigorous cleaning protocols that exceed industry standards. Our luxury trailers receive white-glove detailing before every event.'
              },
              {
                icon: '⚡',
                title: 'Lightning-Fast Response',
                description: 'Same-day delivery available in most markets. Our 24/7 dispatch team ensures emergency requests are handled within 2-4 hours.'
              },
              {
                icon: '🏆',
                title: 'Premium Fleet Quality',
                description: 'From construction-grade units to luxury trailers with A/C, our equipment is meticulously maintained and regularly upgraded to the latest standards.'
              },
              {
                icon: '🎓',
                title: 'Expert Consultation',
                description: 'Our team provides professional guidance on quantities, placement, and compliance—ensuring your project or event has exactly what it needs.'
              },
              {
                icon: '💯',
                title: 'Transparent Pricing',
                description: 'No hidden fees, no surprise charges. What we quote is what you pay. Volume discounts and flexible contracts available.'
              },
              {
                icon: '🌟',
                title: 'Award-Winning Service',
                description: 'A+ BBB rating, 4.8/5 average customer review, and countless referrals from Fortune 500 companies and premier event planners.'
              },
              {
                icon: '🔒',
                title: 'Fully Licensed & Insured',
                description: 'Complete compliance with local, state, and federal regulations. OSHA-certified for construction sites. Full liability coverage on all rentals.'
              },
              {
                icon: '🌱',
                title: 'Eco-Friendly Practices',
                description: 'Biodegradable chemicals, water-saving fixtures, waste recycling programs, and solar-powered unit options for environmentally conscious clients.'
              },
              {
                icon: '📞',
                title: 'Dedicated Account Managers',
                description: 'For construction firms and event planners, a single point of contact who knows your preferences, history, and requirements inside and out.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              PortaPro By The Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real metrics that demonstrate our commitment to excellence and scale
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">5,000+</div>
              </div>
              <h3 className="font-bold text-lg text-primary">Units in Fleet</h3>
              <p className="text-sm text-gray-600">From basic to luxury</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-secondary to-yellow-600 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">30+</div>
              </div>
              <h3 className="font-bold text-lg text-primary">Cities Served</h3>
              <p className="text-sm text-gray-600">Coast to coast coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-accent to-purple-700 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">10K+</div>
              </div>
              <h3 className="font-bold text-lg text-primary">Satisfied Clients</h3>
              <p className="text-sm text-gray-600">Businesses trust us</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">24/7</div>
              </div>
              <h3 className="font-bold text-lg text-primary">Always Available</h3>
              <p className="text-sm text-gray-600">Every day of the year</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">4.8/5</div>
              </div>
              <h3 className="font-bold text-lg text-primary">Customer Rating</h3>
              <p className="text-sm text-gray-600">Average review score</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">A+</div>
              </div>
              <h3 className="font-bold text-lg text-primary">BBB Rating</h3>
              <p className="text-sm text-gray-600">Better Business Bureau</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">2-4hr</div>
              </div>
              <h3 className="font-bold text-lg text-primary">Emergency Response</h3>
              <p className="text-sm text-gray-600">Rapid deployment time</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 mb-4">
                <div className="text-5xl font-display font-bold text-white">100%</div>
              </div>
              <h3 className="font-bold text-lg text-primary">OSHA Compliant</h3>
              <p className="text-sm text-gray-600">Safety certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              See Our Fleet
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Premium Equipment, Exceptional Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rugged construction units to luxury climate-controlled trailers, our diverse fleet meets every need
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Main Featured Image */}
            <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl relative h-96 bg-gradient-to-br from-primary to-blue-900">
              <img
                src="/porta_images/luxury-trailer.jpg"
                alt="Luxury Restroom Trailer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-900/80 flex items-center justify-center text-center text-white p-12">
                <div>
                  <h3 className="text-4xl font-display font-bold mb-4">Luxury Restroom Trailers</h3>
                  <p className="text-xl text-light max-w-2xl mx-auto">
                    Climate-controlled elegance with flushing toilets, running water, and premium amenities
                  </p>
                </div>
              </div>
            </div>

            {/* Grid of Category Images */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Construction Units */}
              <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80 relative bg-gradient-to-br from-blue-600 to-blue-800">
                <img
                  src="/porta_images/construction-unit.jpg"
                  alt="Construction Grade Porta Potty"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-800/80 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🏗️</div>
                  <h3 className="text-2xl font-bold mb-3">Construction Grade</h3>
                  <p className="text-light mb-4">Heavy-duty units built for demanding job sites</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">OSHA Compliant</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Reinforced</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">High-Capacity</span>
                  </div>
                </div>
              </div>

              {/* Event Units */}
              <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80 relative bg-gradient-to-br from-yellow-500 to-orange-600">
                <img
                  src="/porta_images/event-unit.jpg"
                  alt="Event Special Porta Potty"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 to-orange-600/80 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🎉</div>
                  <h3 className="text-2xl font-bold mb-3">Event Specials</h3>
                  <p className="text-white mb-4">Clean, comfortable units for outdoor celebrations</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Pre-Cleaned</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Fresh Stock</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Same-Day</span>
                  </div>
                </div>
              </div>

              {/* ADA Accessible */}
              <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80 relative bg-gradient-to-br from-green-500 to-teal-600">
                <img
                  src="/porta_images/ada-unit.jpg"
                  alt="ADA Accessible Porta Potty"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-teal-600/80 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">♿</div>
                  <h3 className="text-2xl font-bold mb-3">ADA Accessible</h3>
                  <p className="text-white mb-4">Fully compliant wheelchair-accessible facilities</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Wide Entry</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Grab Bars</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Spacious</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features Row */}
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white text-center shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-2">🚰</div>
                <h4 className="font-bold mb-1">Hand Wash Stations</h4>
                <p className="text-xs text-white/80">Touchless operation</p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-red-500 to-orange-600 p-6 text-white text-center shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-2">❄️</div>
                <h4 className="font-bold mb-1">Climate Control</h4>
                <p className="text-xs text-white/80">A/C & heating available</p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 p-6 text-white text-center shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-2">💡</div>
                <h4 className="font-bold mb-1">LED Lighting</h4>
                <p className="text-xs text-white/80">Bright & efficient</p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-teal-500 to-green-600 p-6 text-white text-center shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-2">🌱</div>
                <h4 className="font-bold mb-1">Eco-Friendly</h4>
                <p className="text-xs text-white/80">Solar power options</p>
              </div>
            </div>

            {/* Fleet Specifications */}
            <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-display font-bold text-primary mb-8 text-center">Our Complete Fleet Inventory</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Standard Units</h4>
                  <p className="text-gray-700 mb-3">Reliable workhorse for construction & events</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 60-gallon capacity tanks</li>
                    <li>• Lockable doors with signage</li>
                    <li>• Ventilated design</li>
                    <li>• Hand sanitizer dispenser</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Deluxe Units</h4>
                  <p className="text-gray-700 mb-3">Enhanced comfort for special events</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Flushing toilets with water</li>
                    <li>• Interior sink with mirror</li>
                    <li>• Premium ventilation system</li>
                    <li>• Coat hooks & shelf space</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Luxury Trailers</h4>
                  <p className="text-gray-700 mb-3">Hotel-quality restrooms on wheels</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Climate-controlled A/C & heat</li>
                    <li>• Multiple private stalls</li>
                    <li>• Running water & electricity</li>
                    <li>• Premium finishes & décor</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">ADA Compliant</h4>
                  <p className="text-gray-700 mb-3">Wheelchair accessible facilities</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extra-wide 48" doorways</li>
                    <li>• Interior turning radius space</li>
                    <li>• Support grab bars installed</li>
                    <li>• Accessible sink & dispenser</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Hand Wash Stations</h4>
                  <p className="text-gray-700 mb-3">Standalone hygiene solutions</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Foot-pump operation</li>
                    <li>• Fresh water supply included</li>
                    <li>• Soap & paper towel dispensers</li>
                    <li>• Wastewater catch basin</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Specialty Units</h4>
                  <p className="text-gray-700 mb-3">Custom solutions for unique needs</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Winterized cold-weather units</li>
                    <li>• High-rise construction lifts</li>
                    <li>• VIP executive restrooms</li>
                    <li>• Film production trailers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Industries We Proudly Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Fortune 500 construction firms to intimate backyard celebrations, we deliver excellence across every sector
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏗️', title: 'Commercial Construction', description: 'High-rise projects, infrastructure work, and large-scale developments' },
              { icon: '🏘️', title: 'Residential Development', description: 'Housing projects, renovations, and neighborhood construction' },
              { icon: '💒', title: 'Weddings & Celebrations', description: 'Luxury trailers for elegant outdoor ceremonies and receptions' },
              { icon: '🎪', title: 'Festivals & Concerts', description: 'Large-scale events requiring high-volume capacity solutions' },
              { icon: '🏢', title: 'Corporate Events', description: 'Company gatherings, team building, and professional functions' },
              { icon: '⚽', title: 'Sporting Events', description: 'Tournaments, marathons, and athletic competitions' },
              { icon: '🎬', title: 'Film & TV Production', description: 'On-location shoots and studio lot supplementary facilities' },
              { icon: '🚨', title: 'Emergency Services', description: 'Disaster relief, emergency response, and temporary facilities' },
              { icon: '🌳', title: 'Parks & Recreation', description: 'Municipal projects, park events, and public gatherings' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Our Commitment to You
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-primary mb-3">🎯 Quality Without Compromise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every portable restroom that bears the PortaPro name meets our exacting standards for cleanliness, functionality, and presentation. We inspect, clean, and verify every unit before delivery—no exceptions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 border-l-4 border-secondary">
                <h3 className="text-2xl font-bold text-primary mb-3">⚡ Reliability You Can Count On</h3>
                <p className="text-gray-700 leading-relaxed">
                  When we commit to a delivery time, placement location, or service schedule, we deliver. Our logistics systems and backup inventory ensure we meet our commitments even during peak demand periods.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8 border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-3">💬 Communication That Works</h3>
                <p className="text-gray-700 leading-relaxed">
                  From your initial call to final pickup, you'll know exactly what's happening, when it's happening, and who to contact if you need anything. Clarity and accessibility are core to our service philosophy.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-primary mb-3">🤝 Partnership Mentality</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your success is our success. Whether you're managing a multi-year construction project or planning a once-in-a-lifetime wedding, we approach every relationship as a partnership built on mutual respect and shared goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-mesh relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Experience the PortaPro Difference
          </h2>
          <p className="text-2xl text-light mb-12 max-w-3xl mx-auto">
            Join 10,000+ satisfied clients who trust us to deliver exceptional portable restroom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/quote" className="btn-primary text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl">
              Request Free Quote
            </Link>
            <a href="tel:1-800-PORTA-PRO" className="glass text-white px-12 py-6 rounded-full font-semibold text-xl hover:bg-white hover:bg-opacity-20 transition flex items-center space-x-3">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Call 1-800-PORTA-PRO</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-white font-semibold">Industry Leading</p>
              <p className="text-light text-sm">A+ BBB rating & 4.8/5 reviews</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-white font-semibold">Fast Response</p>
              <p className="text-light text-sm">Same-day delivery available</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-2">💯</div>
              <p className="text-white font-semibold">Transparent Pricing</p>
              <p className="text-light text-sm">No hidden fees ever</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

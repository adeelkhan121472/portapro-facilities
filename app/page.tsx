import Link from 'next/link'
import { locations } from './locations'
import { homepageFAQs, aboutContent } from './home-services-content'

export default function Home() {
  // FAQ Schema for homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PortaPro Facilities",
    "alternateName": "PortaPro",
    "url": "https://portaprofacilities.site",
    "logo": "https://portaprofacilities.site/Logo-Porta-Main.png",
    "description": "Premium portable toilet and restroom rentals for construction sites, events, and special occasions across the United States.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-767-8277",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/portaprofacilities",
      "https://twitter.com/PortaProUSA",
      "https://www.linkedin.com/company/portapro-facilities"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "numberOfEmployees": "50-200",
    "foundingDate": "2015",
    "slogan": "Premium Portable Restroom Solutions"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="gradient-mesh relative overflow-hidden min-h-screen flex items-center pt-24">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light/20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 animate-slide-up">
              <span className="glass px-6 py-2 rounded-full text-white font-medium text-sm">
                ⭐ Trusted by 10,000+ Businesses Nationwide
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 animate-slide-up stagger-1">
              Premium Portable
              <span className="block text-gradient">Restroom Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
              Elevate your events and construction sites with our luxury portable facilities. Serving 30+ major cities with uncompromising quality and service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up stagger-3">
              <Link href="/quote" className="btn-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl inline-flex items-center space-x-2">
                <span>Start Your Project</span>
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
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up stagger-4">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">30+</div>
                <div className="text-light text-sm">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">24/7</div>
                <div className="text-light text-sm">Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-white mb-2">10K+</div>
                <div className="text-light text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <svg className="w-8 h-8 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative overflow-hidden pattern-dots">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              Our Premium Services
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              Tailored to Your <span className="text-gradient">Exact Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to large-scale construction projects, we deliver excellence in every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <div className="service-card bg-white rounded-3xl p-8 premium-shadow card-hover">
              <div className="service-icon">
                <span>🏗️</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Construction Grade</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Heavy-duty units built for demanding job sites. OSHA compliant with regular maintenance schedules.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Industrial strength construction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Weekly service included</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Volume discounts available</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 - Featured */}
            <div className="service-card bg-gradient-to-br from-secondary to-yellow-500 rounded-3xl p-8 shadow-2xl card-hover transform md:scale-105">
              <div className="service-icon bg-white">
                <span>⭐</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Luxury Trailers</h3>
              <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                Climate-controlled elegance for weddings, galas, and premium events. Your guests deserve the best.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">Designer interiors with A/C</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">Premium toiletries included</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">On-site attendant service</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="service-card bg-white rounded-3xl p-8 premium-shadow card-hover">
              <div className="service-icon">
                <span>♿</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">ADA Accessible</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fully compliant wheelchair accessible units. Inclusive facilities for every guest and worker.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Extra-wide doorways</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Grab bars & support rails</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Certified ADA compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Gallery */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              Our Fleet
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              See Our <span className="text-gradient">Premium Units</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic construction units to luxury climate-controlled trailers, we have the perfect solution for every need.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Construction Unit */}
            <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition relative h-96 bg-gradient-to-br from-primary to-blue-700">
              <img
                src="/porta_images/construction-unit.jpg"
                alt="Construction Grade Porta Potty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/80 group-hover:from-primary/70 group-hover:to-blue-700/70 transition flex items-end">
                <div className="p-8 text-white">
                  <div className="text-4xl mb-3">🏗️</div>
                  <h3 className="text-3xl font-bold mb-2">Construction Grade</h3>
                  <p className="text-light text-lg">Heavy-duty units built for demanding job sites</p>
                  <p className="text-white font-bold mt-4">Starting at $28/day</p>
                </div>
              </div>
            </div>

            {/* Luxury Trailer */}
            <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition relative h-96 bg-gradient-to-br from-accent to-purple-700">
              <img
                src="/porta_images/luxury-trailer.jpg"
                alt="Luxury Restroom Trailer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-purple-700/80 group-hover:from-accent/70 group-hover:to-purple-700/70 transition flex items-end">
                <div className="p-8 text-white">
                  <div className="text-4xl mb-3">⭐</div>
                  <h3 className="text-3xl font-bold mb-2">Luxury Trailers</h3>
                  <p className="text-white text-lg">Climate-controlled elegance for premium events</p>
                  <p className="text-white font-bold mt-4">Starting at $1,200/weekend</p>
                </div>
              </div>
            </div>

            {/* Event Unit */}
            <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition relative h-96 bg-gradient-to-br from-secondary to-yellow-600">
              <img
                src="/porta_images/event-unit.jpg"
                alt="Event Special Porta Potty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-yellow-600/80 group-hover:from-secondary/70 group-hover:to-yellow-600/70 transition flex items-end">
                <div className="p-8 text-white">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-3xl font-bold mb-2">Event Specials</h3>
                  <p className="text-white text-lg">Perfect for weddings, parties, and celebrations</p>
                  <p className="text-white font-bold mt-4">$295 per event</p>
                </div>
              </div>
            </div>

            {/* ADA Unit */}
            <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition relative h-96 bg-gradient-to-br from-secondary to-green-700">
              <img
                src="/porta_images/ada-unit.jpg"
                alt="ADA Accessible Porta Potty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-green-700/80 group-hover:from-secondary/70 group-hover:to-green-700/70 transition flex items-end">
                <div className="p-8 text-white">
                  <div className="text-4xl mb-3">♿</div>
                  <h3 className="text-3xl font-bold mb-2">ADA Accessible</h3>
                  <p className="text-white text-lg">Fully compliant wheelchair accessible units</p>
                  <p className="text-white font-bold mt-4">Same competitive pricing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition shadow-xl">
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 gradient-mesh relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-light max-w-3xl mx-auto">
              We don't just deliver portable restrooms. We deliver peace of mind, reliability, and an unmatched commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                🏆
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
              <p className="text-light">Units cleaned and sanitized to hospital-grade standards</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-light">Same-day delivery available in most locations</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                💎
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Best Value</h3>
              <p className="text-light">Transparent pricing with no hidden fees ever</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                📞
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-light">Live customer service whenever you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
              Nationwide Coverage
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              Serving <span className="text-gradient">30+ Major Cities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From coast to coast, we bring premium portable facilities to America's largest metropolitan areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
            {locations.slice(0, 10).map((location) => (
              <Link
                key={location.slug}
                href={`/location/${location.slug}`}
                className="location-card rounded-2xl p-6 shadow-lg card-hover text-center"
              >
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-primary text-lg">{location.city}</h3>
                <p className="text-sm text-gray-600">{location.state}</p>
                <p className="text-xs text-secondary font-semibold mt-2">{location.population} residents</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl inline-flex items-center space-x-2">
              <span>View All 30 Locations</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold mb-6">
                  About PortaPro Facilities
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                  {aboutContent.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {aboutContent.description}
                </p>
                <div className="space-y-3">
                  {aboutContent.highlights.slice(0, 6).map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl font-display font-bold mb-2">2015</div>
                  <p className="text-light">Founded with a vision for excellence</p>
                </div>
                <div className="bg-gradient-to-br from-secondary to-yellow-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl font-display font-bold mb-2">30+</div>
                  <p className="text-white">Major cities served nationwide</p>
                </div>
                <div className="bg-gradient-to-br from-accent to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl font-display font-bold mb-2">5K+</div>
                  <p className="text-white">Portable units in our fleet</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-5xl font-display font-bold mb-2">10K+</div>
                  <p className="text-white">Satisfied clients served</p>
                </div>
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
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about portable toilet rentals, pricing, delivery, and our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {homepageFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-primary mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <a href="tel:1-800-PORTA-PRO" className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl inline-flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Call 1-800-PORTA-PRO</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-mesh relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-2xl text-light mb-12 max-w-3xl mx-auto">
            Get your custom quote in minutes. Professional service, transparent pricing, unmatched quality.
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

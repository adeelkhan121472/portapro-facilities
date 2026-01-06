import { locations } from '../locations'

export const metadata = {
  title: 'All Service Locations | PortaPro Facilities',
  description: 'Browse our 30+ service locations across the United States. Professional portable toilet rentals in major metropolitan areas.',
}

export default function LocationsPage() {
  // Group locations by state
  const locationsByState = locations.reduce((acc, location) => {
    if (!acc[location.state]) {
      acc[location.state] = []
    }
    acc[location.state].push(location)
    return acc
  }, {} as Record<string, typeof locations>)

  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Locations</h1>
          <p className="text-xl max-w-2xl">
            We proudly serve 30 major metropolitan areas across the United States with professional portable toilet rental services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your City</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any city below to view detailed information about our portable toilet rental services in your area, including neighborhoods served, pricing, and availability.
            </p>
          </div>

          {/* Alphabetical listing */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">All Cities (A-Z)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...locations].sort((a, b) => a.city.localeCompare(b.city)).map((location) => (
                <a 
                  key={location.slug}
                  href={`/location/${location.slug}`}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-primary"
                >
                  <h3 className="font-bold text-xl text-primary mb-2">{location.city}, {location.stateAbbr}</h3>
                  <p className="text-gray-600 text-sm mb-3">{location.description.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Pop: {location.population}</span>
                    <span className="text-secondary font-semibold">View Details →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* By State */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Browse by State</h3>
            <div className="space-y-8">
              {Object.entries(locationsByState).sort(([a], [b]) => a.localeCompare(b)).map(([state, stateLocs]) => (
                <div key={state} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-primary">{state}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {stateLocs.map((location) => (
                      <a 
                        key={location.slug}
                        href={`/location/${location.slug}`}
                        className="bg-white p-4 rounded shadow hover:shadow-md transition"
                      >
                        <p className="font-semibold text-primary">{location.city}</p>
                        <p className="text-sm text-gray-600">Population: {location.population}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always expanding! Contact us to see if we can serve your area or to inquire about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700">
              Contact Us
            </a>
            <a href="tel:1-800-PORTA-PRO" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
              Call 1-800-PORTA-PRO
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

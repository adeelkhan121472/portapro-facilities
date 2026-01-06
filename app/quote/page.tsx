import { locations } from '../locations'

export const metadata = {
  title: 'Get a Free Quote | PortaPro Facilities',
  description: 'Request a free quote for portable toilet rentals. Fast response, competitive pricing, and professional service.',
}

export default function QuotePage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a competitive quote for your portable toilet rental needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Location *
                </label>
                <select 
                  id="location" 
                  name="location" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a city...</option>
                  {locations.map((location) => (
                    <option key={location.slug} value={location.slug}>
                      {location.city}, {location.stateAbbr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  required
                  placeholder="Street address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input 
                    type="date" 
                    id="startDate" 
                    name="startDate" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration *
                  </label>
                  <select 
                    id="duration" 
                    name="duration" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="1-day">1 Day</option>
                    <option value="weekend">Weekend</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                    <option value="3-months">3 Months</option>
                    <option value="6-months">6+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="unitType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Unit Type *
                </label>
                <select 
                  id="unitType" 
                  name="unitType" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select unit type...</option>
                  <option value="standard">Standard Portable Toilet</option>
                  <option value="deluxe">Deluxe Restroom Trailer</option>
                  <option value="ada">ADA Compliant Unit</option>
                  <option value="handwash">Portable Toilet + Hand Wash Station</option>
                  <option value="luxury">Luxury Restroom Trailer</option>
                  <option value="unsure">Not Sure - Need Recommendation</option>
                </select>
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event/Project Type *
                </label>
                <select 
                  id="eventType" 
                  name="eventType" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select type...</option>
                  <option value="construction">Construction Site</option>
                  <option value="wedding">Wedding</option>
                  <option value="festival">Festival/Fair</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="sporting">Sporting Event</option>
                  <option value="party">Private Party</option>
                  <option value="concert">Concert/Music Event</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="Tell us more about your needs, site conditions, special requirements, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to receive communications from PortaPro Facilities regarding my quote request. *
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Quote Request
              </button>
            </form>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ We'll review your request within 2 hours</li>
                <li>✓ You'll receive a detailed quote via email and phone</li>
                <li>✓ Our team will answer any questions you have</li>
                <li>✓ We'll schedule delivery at your convenience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prefer to Talk?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Give us a call and speak directly with one of our rental specialists. We're available 24/7 to help with your portable toilet rental needs.
          </p>
          <a 
            href="tel:1-800-PORTA-PRO" 
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-green-700"
          >
            📞 Call 1-800-PORTA-PRO
          </a>
        </div>
      </section>
    </main>
  )
}

// Unique FAQ and content for Homepage and Services page

export interface FAQ {
  question: string;
  answer: string;
}

export interface AboutSection {
  title: string;
  description: string;
  highlights: string[];
}

// Homepage FAQs - General company questions
export const homepageFAQs: FAQ[] = [
  {
    question: "What areas do you serve with portable toilet rentals?",
    answer: "We proudly serve 30+ major cities across the United States including New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Diego, Dallas, San Jose, Austin, and many more. Our nationwide network ensures professional portable restroom service whether you're in a major metro area or surrounding suburbs. Check our locations page for complete coverage details."
  },
  {
    question: "How quickly can you deliver portable toilets?",
    answer: "We offer same-day delivery in most locations when you call before noon. For planned events or construction projects, we recommend booking 3-5 days in advance to ensure availability of specific unit types. Our 24/7 customer service team can accommodate rush orders and emergency deliveries for urgent situations."
  },
  {
    question: "What types of portable restrooms do you offer?",
    answer: "We offer a complete range including standard construction porta potties, luxury climate-controlled restroom trailers, ADA-compliant wheelchair accessible units, hand washing stations, and portable sinks. Our fleet ranges from basic job site units to upscale trailers with flushing toilets, running water, A/C, and premium amenities perfect for weddings and corporate events."
  },
  {
    question: "How much does portable toilet rental cost?",
    answer: "Standard porta potty event rentals are $295 total ($100 delivery fee + $195 rental). Extended rentals are $28/day. Construction site monthly rentals range from $150-275 with weekly service included. Luxury restroom trailers range from $800-2000+ depending on size and amenities. We offer volume discounts for multiple units and long-term projects. Contact us for a free customized quote tailored to your specific needs."
  },
  {
    question: "What's included in your rental service?",
    answer: "All rentals include delivery, placement, regular cleaning and maintenance, restocking of supplies (toilet paper, hand sanitizer), waste removal, and pickup at the end of your rental period. Construction rentals include weekly servicing. Event rentals include pre-event deep cleaning and optional on-site attendant service for luxury trailers. We handle all logistics so you can focus on your project or event."
  },
  {
    question: "Are your portable toilets clean and sanitary?",
    answer: "Absolutely! We maintain hospital-grade sanitation standards. Every unit is thoroughly cleaned, disinfected, and inspected before delivery. We use professional-grade cleaning solutions, fresh deodorizers, and ensure all units are fully stocked. Our luxury trailers undergo white-glove detailing. Regular service visits ensure units stay fresh throughout your rental period. Cleanliness is our top priority."
  },
  {
    question: "Can you provide portable toilets for both construction sites and special events?",
    answer: "Yes! We specialize in serving both industries with appropriate equipment for each. Our heavy-duty construction units withstand job site demands with OSHA compliance, while our luxury event trailers provide climate-controlled comfort for weddings, galas, and corporate events. We understand the unique requirements of construction contractors and event planners, offering solutions tailored to each."
  },
  {
    question: "Do you offer ADA-compliant wheelchair accessible units?",
    answer: "Yes, we maintain a full fleet of ADA-compliant portable restrooms featuring wheelchair ramps, extra-wide doorways, spacious interiors with turning radius clearance, grab bars, accessible sinks, and proper signage. These units meet all ADA requirements for construction sites and public events. They're available in all our service areas with the same reliable delivery and service as our standard units."
  }
];

// Services Page FAQs - Specific service questions
export const servicesFAQs: FAQ[] = [
  {
    question: "What's the difference between standard and luxury portable restrooms?",
    answer: "Standard porta potties are durable plastic units perfect for construction sites and casual outdoor events, featuring chemical toilets, ventilation, and basic amenities. Luxury restroom trailers are climate-controlled mobile facilities with flushing porcelain toilets, running water sinks, interior lighting, premium finishes, and often include features like sound systems and vanity mirrors. Luxury trailers provide a bathroom experience comparable to indoor facilities, ideal for upscale events where guest comfort is paramount."
  },
  {
    question: "How do you determine how many portable toilets I need?",
    answer: "For construction sites, OSHA requires one toilet per 20 workers for projects under 200 workers. For events, we recommend one standard unit per 50 guests for a 4-hour event, increasing to one per 35-40 guests for longer events with alcohol service. Wedding receptions typically need one luxury restroom stall per 75-100 guests. We provide free consultations to calculate exact quantities based on your guest count, event duration, alcohol service, and demographic mix. Our experts ensure you're neither under nor over-equipped."
  },
  {
    question: "Can portable toilets be used in winter or extreme weather?",
    answer: "Yes! We offer winterized portable toilets specifically designed for cold weather, featuring insulated tanks, freeze-resistant plumbing, and anti-freeze chemicals that function in temperatures well below freezing. For extreme heat, we provide units with enhanced ventilation, reflective exteriors, and heat-resistant materials. Our luxury trailers include climate control with heating and air conditioning for year-round comfort regardless of weather conditions."
  },
  {
    question: "What maintenance and servicing do you provide?",
    answer: "Construction site rentals include weekly servicing where we pump waste tanks, refill fresh water (if applicable), clean and sanitize all surfaces, restock toilet paper and hand sanitizer, and inspect unit integrity. Event rentals include pre-event deep cleaning and post-event servicing. We can increase service frequency for high-traffic locations. Emergency service calls are available 24/7 for urgent issues like tip-overs or vandalism. All service is performed by trained professionals using commercial-grade equipment."
  },
  {
    question: "Do your luxury restroom trailers need electricity and water hookups?",
    answer: "Most luxury restroom trailers are self-contained with onboard fresh water tanks and waste tanks, requiring only standard 110V electrical service for climate control and lighting (similar to a household outlet). We can provide generators if power isn't available at your venue. Some ultra-luxury models offer direct water connections for extended events. Our team will assess your venue during booking and arrange all necessary utilities, making setup completely hassle-free."
  },
  {
    question: "Can you provide hand washing stations separately?",
    answer: "Yes! We offer standalone hand washing stations and portable sinks perfect for food service areas, construction sites, or anywhere hand hygiene is important. These units feature foot-pump or touchless operation, fresh water supply, soap dispensers, and catch basins for wastewater. They're especially popular at outdoor festivals, construction sites requiring OSHA compliance, and catering events. We can bundle hand wash stations with any portable toilet rental at discounted rates."
  },
  {
    question: "What happens if a unit tips over or gets damaged?",
    answer: "We provide 24/7 emergency service for situations like tip-overs, vandalism, or unexpected damage. Call our emergency line and we'll dispatch a crew immediately to clean up, remove the damaged unit, and deliver a replacement if needed. Our units are secured properly during placement to minimize tip-over risks. Standard wear and tear is covered in your rental - you're only responsible for damages caused by intentional misuse. We carry full liability insurance and handle all cleanup quickly and professionally."
  },
  {
    question: "Can you accommodate last-minute or emergency rentals?",
    answer: "Absolutely! We maintain a large inventory specifically for emergency and last-minute requests. Same-day delivery is available in most cities when you call before noon. We've serviced emergency construction site compliance issues, replacement units for failed systems, and last-minute event additions. Our 24/7 dispatch team prioritizes urgent requests. While we recommend advance booking for special units like luxury trailers, we'll do everything possible to accommodate your emergency timeline with whatever units are available."
  }
];

// About Us Content for Homepage
export const aboutContent: AboutSection = {
  title: "America's Most Trusted Portable Restroom Provider",
  description: "Since 2015, PortaPro Facilities has set the standard for premium portable sanitation solutions across the United States. What started as a single-city operation has grown into a nationwide network serving 30+ major metropolitan areas, trusted by over 10,000 businesses, construction firms, and event planners.",
  highlights: [
    "Founded in 2015 with a commitment to elevating industry standards",
    "Serving 30+ major cities coast-to-coast with consistent excellence",
    "Fleet of 5,000+ units from basic porta potties to luxury trailers",
    "Family-owned business with Fortune 500 client relationships",
    "A+ BBB rating and 4.8/5 average customer review score",
    "OSHA-certified, fully licensed and insured nationwide",
    "24/7/365 customer service and emergency response teams",
    "Eco-friendly practices with biodegradable chemicals and waste recycling",
    "Industry-leading sanitation protocols exceeding health department standards",
    "Dedicated account managers for construction and event planning clients"
  ]
};

// Services Overview Content
export const servicesOverview = {
  construction: {
    title: "Construction & Job Site Rentals",
    description: "Heavy-duty portable toilets engineered for demanding construction environments. OSHA-compliant units built to withstand job site conditions while providing workers with clean, reliable facilities throughout your project timeline.",
    features: [
      "Industrial-strength construction with reinforced bases",
      "High-capacity waste tanks for reduced service frequency",
      "Non-slip floors and secure door latches for safety",
      "Weekly service included with all construction rentals",
      "ADA-compliant units available for every site",
      "Volume pricing for multi-unit job sites",
      "Long-term rental discounts for 3+ month projects",
      "Dedicated account managers for contractor relationships"
    ],
    idealFor: [
      "Commercial construction projects",
      "Residential development sites",
      "Infrastructure and road work",
      "Industrial facility maintenance",
      "Demolition projects",
      "Renovation and remodeling sites"
    ]
  },
  events: {
    title: "Special Events & Weddings",
    description: "From intimate backyard gatherings to large-scale festivals, our event-grade portable restrooms ensure your guests experience comfort and convenience. Choose from standard units for casual outdoor events or luxury climate-controlled trailers for upscale occasions.",
    features: [
      "Luxury restroom trailers with climate control (A/C and heat)",
      "Flushing porcelain toilets and running water sinks",
      "Premium amenities: mirrors, shelving, interior lighting",
      "Designer interiors with hardwood finishes and modern fixtures",
      "Optional on-site attendant service for upscale events",
      "Pre-event deep cleaning and white-glove detailing",
      "Discrete placement consulting to minimize visual impact",
      "Sound system and Bluetooth capabilities in premium models"
    ],
    idealFor: [
      "Weddings and outdoor receptions",
      "Corporate events and galas",
      "Music festivals and concerts",
      "Sporting events and tournaments",
      "Community festivals and fairs",
      "Graduation parties and reunions",
      "Outdoor fundraisers and charity events",
      "Film and TV production locations"
    ]
  },
  luxury: {
    title: "Luxury Restroom Trailers",
    description: "Our flagship luxury trailers redefine portable restrooms with hotel-quality facilities on wheels. These climate-controlled mobile restrooms feature upscale finishes, full amenities, and comfort that rivals permanent facilities - perfect for discerning clients and premium events.",
    features: [
      "Multiple private stalls with floor-to-ceiling doors",
      "Flushing porcelain toilets identical to residential units",
      "Hot and cold running water at vanity sinks",
      "Full climate control: air conditioning and heating",
      "Premium interior finishes: hardwood, granite, stainless steel",
      "LED lighting and skylight windows for natural ambiance",
      "Bluetooth sound systems and premium toiletries",
      "Wheelchair accessible models available",
      "Solar-powered options for eco-conscious events",
      "Custom branding and décor coordination available"
    ],
    idealFor: [
      "Upscale wedding receptions",
      "Black-tie galas and fundraisers",
      "VIP corporate hospitality",
      "Country club and resort events",
      "High-end private parties",
      "Luxury estate sales and auctions",
      "Award ceremonies and premieres",
      "Executive retreat locations"
    ]
  }
};

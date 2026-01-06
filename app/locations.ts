export interface Location {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  population: string;
  zipCodes: string[];
  description: string;
  neighborhoods: string[];
}

export const locations: Location[] = [
  {
    city: "New York",
    state: "New York",
    stateAbbr: "NY",
    slug: "new-york-ny",
    population: "8.3M",
    zipCodes: ["10001", "10002", "10003", "10011", "10012"],
    description: "Serving all five boroughs with premium portable toilet rentals for construction sites, events, and special occasions.",
    neighborhoods: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
  },
  {
    city: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    slug: "los-angeles-ca",
    population: "3.9M",
    zipCodes: ["90001", "90012", "90013", "90014", "90015"],
    description: "Providing portable restroom solutions across LA County for film productions, construction, and outdoor events.",
    neighborhoods: ["Hollywood", "Downtown", "Santa Monica", "Venice", "Beverly Hills"]
  },
  {
    city: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    slug: "chicago-il",
    population: "2.7M",
    zipCodes: ["60601", "60602", "60603", "60604", "60605"],
    description: "Quality porta potty rentals serving the Chicagoland area for events, construction, and commercial needs.",
    neighborhoods: ["Downtown", "Lincoln Park", "Wicker Park", "South Loop", "River North"]
  },
  {
    city: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    slug: "houston-tx",
    population: "2.3M",
    zipCodes: ["77001", "77002", "77003", "77004", "77005"],
    description: "Reliable portable toilet rentals for Houston's oil & gas industry, construction sites, and special events.",
    neighborhoods: ["Downtown", "Midtown", "Montrose", "Heights", "Memorial"]
  },
  {
    city: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    slug: "phoenix-az",
    population: "1.7M",
    zipCodes: ["85001", "85003", "85004", "85006", "85007"],
    description: "Desert-tested portable restrooms for construction, outdoor festivals, and special events in the Valley.",
    neighborhoods: ["Downtown", "Scottsdale", "Tempe", "Mesa", "Glendale"]
  },
  {
    city: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    slug: "philadelphia-pa",
    population: "1.6M",
    zipCodes: ["19019", "19102", "19103", "19104", "19106"],
    description: "Professional porta potty services for Philadelphia's construction industry and special events.",
    neighborhoods: ["Center City", "University City", "Old City", "South Philly", "Fishtown"]
  },
  {
    city: "San Antonio",
    state: "Texas",
    stateAbbr: "TX",
    slug: "san-antonio-tx",
    population: "1.5M",
    zipCodes: ["78201", "78202", "78203", "78204", "78205"],
    description: "Serving San Antonio with clean, reliable portable toilets for all occasions and construction needs.",
    neighborhoods: ["Downtown", "Alamo Heights", "Stone Oak", "Medical Center", "Southtown"]
  },
  {
    city: "San Diego",
    state: "California",
    stateAbbr: "CA",
    slug: "san-diego-ca",
    population: "1.4M",
    zipCodes: ["92101", "92102", "92103", "92104", "92105"],
    description: "Premium portable restroom rentals for San Diego's beaches, events, and construction projects.",
    neighborhoods: ["Downtown", "La Jolla", "Pacific Beach", "Mission Bay", "Gaslamp Quarter"]
  },
  {
    city: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    slug: "dallas-tx",
    population: "1.3M",
    zipCodes: ["75201", "75202", "75203", "75204", "75205"],
    description: "Top-quality porta potty rentals serving the DFW metroplex for all your sanitation needs.",
    neighborhoods: ["Downtown", "Uptown", "Deep Ellum", "Oak Lawn", "Highland Park"]
  },
  {
    city: "San Jose",
    state: "California",
    stateAbbr: "CA",
    slug: "san-jose-ca",
    population: "1.0M",
    zipCodes: ["95110", "95111", "95112", "95113", "95116"],
    description: "Silicon Valley's trusted portable toilet rental provider for tech campuses and construction sites.",
    neighborhoods: ["Downtown", "Willow Glen", "Almaden Valley", "Evergreen", "Rose Garden"]
  },
  {
    city: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    slug: "austin-tx",
    population: "978K",
    zipCodes: ["78701", "78702", "78703", "78704", "78705"],
    description: "Keep Austin clean with our portable restroom solutions for festivals, construction, and events.",
    neighborhoods: ["Downtown", "South Congress", "East Austin", "Zilker", "Hyde Park"]
  },
  {
    city: "Jacksonville",
    state: "Florida",
    stateAbbr: "FL",
    slug: "jacksonville-fl",
    population: "950K",
    zipCodes: ["32099", "32202", "32204", "32205", "32206"],
    description: "Northeast Florida's premier portable toilet rental service for construction and special events.",
    neighborhoods: ["Downtown", "Riverside", "San Marco", "Jacksonville Beach", "Mandarin"]
  },
  {
    city: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    slug: "fort-worth-tx",
    population: "935K",
    zipCodes: ["76101", "76102", "76103", "76104", "76105"],
    description: "Cowtown's reliable source for portable toilets, serving construction sites and rodeo events.",
    neighborhoods: ["Downtown", "Sundance Square", "Stockyards", "West 7th", "TCU"]
  },
  {
    city: "Columbus",
    state: "Ohio",
    stateAbbr: "OH",
    slug: "columbus-oh",
    population: "905K",
    zipCodes: ["43004", "43201", "43202", "43203", "43204"],
    description: "Central Ohio's trusted portable restroom provider for construction, events, and emergencies.",
    neighborhoods: ["Downtown", "Short North", "German Village", "Clintonville", "Grandview"]
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    slug: "charlotte-nc",
    population: "880K",
    zipCodes: ["28202", "28203", "28204", "28205", "28206"],
    description: "Queen City's preferred porta potty rental service for construction and NASCAR events.",
    neighborhoods: ["Uptown", "South End", "NoDa", "Dilworth", "Plaza Midwood"]
  },
  {
    city: "San Francisco",
    state: "California",
    stateAbbr: "CA",
    slug: "san-francisco-ca",
    population: "875K",
    zipCodes: ["94102", "94103", "94104", "94105", "94107"],
    description: "Bay Area portable toilet rentals for tech events, construction, and outdoor festivals.",
    neighborhoods: ["Downtown", "Mission District", "Marina", "SOMA", "Haight-Ashbury"]
  },
  {
    city: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    slug: "indianapolis-in",
    population: "880K",
    zipCodes: ["46201", "46202", "46203", "46204", "46205"],
    description: "Racing capital's portable restroom solutions for Indy 500, construction, and special events.",
    neighborhoods: ["Downtown", "Broad Ripple", "Fountain Square", "Mass Ave", "Irvington"]
  },
  {
    city: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    slug: "seattle-wa",
    population: "750K",
    zipCodes: ["98101", "98102", "98103", "98104", "98105"],
    description: "Emerald City's eco-friendly portable toilet rentals for construction and outdoor events.",
    neighborhoods: ["Downtown", "Capitol Hill", "Ballard", "Fremont", "Queen Anne"]
  },
  {
    city: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    slug: "denver-co",
    population: "715K",
    zipCodes: ["80202", "80203", "80204", "80205", "80206"],
    description: "Mile High City's premier porta potty rental service for mountain events and construction.",
    neighborhoods: ["Downtown", "LoDo", "Capitol Hill", "Highland", "Cherry Creek"]
  },
  {
    city: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    slug: "boston-ma",
    population: "655K",
    zipCodes: ["02108", "02109", "02110", "02111", "02113"],
    description: "Historic Boston's modern portable restroom solutions for construction and special events.",
    neighborhoods: ["Downtown", "Back Bay", "South End", "North End", "Beacon Hill"]
  },
  {
    city: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    slug: "nashville-tn",
    population: "690K",
    zipCodes: ["37201", "37203", "37204", "37205", "37206"],
    description: "Music City's trusted portable toilet provider for festivals, honky-tonks, and construction sites.",
    neighborhoods: ["Downtown", "East Nashville", "The Gulch", "12 South", "Germantown"]
  },
  {
    city: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    slug: "las-vegas-nv",
    population: "645K",
    zipCodes: ["89101", "89102", "89103", "89104", "89106"],
    description: "Entertainment capital's portable restroom rentals for casinos, conventions, and construction.",
    neighborhoods: ["The Strip", "Downtown", "Henderson", "Summerlin", "North Las Vegas"]
  },
  {
    city: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    slug: "portland-or",
    population: "635K",
    zipCodes: ["97201", "97202", "97203", "97204", "97205"],
    description: "Keep Portland weird and clean with our eco-friendly portable toilet rentals.",
    neighborhoods: ["Downtown", "Pearl District", "Alberta", "Hawthorne", "Mississippi"]
  },
  {
    city: "Detroit",
    state: "Michigan",
    stateAbbr: "MI",
    slug: "detroit-mi",
    population: "640K",
    zipCodes: ["48201", "48202", "48203", "48204", "48205"],
    description: "Motor City's reliable portable restroom service for automotive events and construction.",
    neighborhoods: ["Downtown", "Midtown", "Corktown", "Eastern Market", "Greektown"]
  },
  {
    city: "Memphis",
    state: "Tennessee",
    stateAbbr: "TN",
    slug: "memphis-tn",
    population: "630K",
    zipCodes: ["38103", "38104", "38105", "38106", "38107"],
    description: "Home of the Blues and quality porta potty rentals for Beale Street events and construction.",
    neighborhoods: ["Downtown", "Midtown", "Cooper-Young", "Overton Square", "South Main"]
  },
  {
    city: "Baltimore",
    state: "Maryland",
    stateAbbr: "MD",
    slug: "baltimore-md",
    population: "585K",
    zipCodes: ["21201", "21202", "21205", "21206", "21209"],
    description: "Charm City's portable toilet rental experts serving the Inner Harbor and beyond.",
    neighborhoods: ["Downtown", "Fells Point", "Canton", "Federal Hill", "Mount Vernon"]
  },
  {
    city: "Milwaukee",
    state: "Wisconsin",
    stateAbbr: "WI",
    slug: "milwaukee-wi",
    population: "577K",
    zipCodes: ["53201", "53202", "53203", "53204", "53205"],
    description: "Brew City's trusted portable restroom provider for Summerfest and construction projects.",
    neighborhoods: ["Downtown", "Third Ward", "Bay View", "Walker's Point", "East Side"]
  },
  {
    city: "Albuquerque",
    state: "New Mexico",
    stateAbbr: "NM",
    slug: "albuquerque-nm",
    population: "565K",
    zipCodes: ["87101", "87102", "87104", "87105", "87106"],
    description: "Land of Enchantment's portable toilet solutions for balloon fiesta and construction needs.",
    neighborhoods: ["Downtown", "Old Town", "Nob Hill", "Uptown", "North Valley"]
  },
  {
    city: "Tucson",
    state: "Arizona",
    stateAbbr: "AZ",
    slug: "tucson-az",
    population: "545K",
    zipCodes: ["85701", "85702", "85704", "85705", "85706"],
    description: "Southern Arizona's premier portable restroom rental service for all occasions.",
    neighborhoods: ["Downtown", "University", "Catalina Foothills", "Midtown", "Oro Valley"]
  },
  {
    city: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    slug: "atlanta-ga",
    population: "500K",
    zipCodes: ["30303", "30305", "30306", "30307", "30308"],
    description: "ATL's top portable toilet rental company serving the metro area's construction and events.",
    neighborhoods: ["Downtown", "Midtown", "Buckhead", "Virginia Highland", "Old Fourth Ward"]
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(loc => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug);
}

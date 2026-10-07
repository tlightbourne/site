// Everything you're likely to change lives here.
export const site = {
  name: "Travis Lightbourne",
  email: "travis.lightbourne@gmail.com",
  phone: "(408) 799-6762", // e.g. "(408) 555-0123". Leave empty to hide.

  cities: ["Santa Clara", "San José", "Sunnyvale"],

  // Flip to true only once each is actually in place.
  insured: true,
  offerComputerHelp: false,

  // Add once you have a Google Business Profile. Leave empty to hide.
  googleReviewsUrl: "",

  form: {
    endpoint: import.meta.env.VITE_FORM_ENDPOINT || "",
    accessKey: import.meta.env.VITE_FORM_ACCESS_KEY || "",
  },
};

// Required disclosure for unlicensed work in California (B&P Code 7027.2,
// dollar limit updated by AB 2622). Confirm the wording with CSLB before launch.
export const disclosure =
  "Travis Lightbourne is not a licensed contractor. Work is limited to jobs under $1,000 in total labor and materials that do not require a building permit.";

export const services = [
  {
    title: "Pressure Washing",
    body: "Gas powered pressure washer to clean exterior surfaces, taking care to protect windows, seals, and other sensitive areas.",
  },
  {
    title: "Painting",
    body: "Small jobs (less than 5 hours or so) consisting of interior or exterior painting.",
  },
  {
    title: "Minor Electrical",
    body: "Replacement of light fixtures, bathroom exhaust fan, smoke detectors, outlets and switches.",
  },
  {
    title: "Faucets, toilets, and caulking",
    body: "Replace a leaky faucet, a running toilet's fill valve or flapper, and make sure seals are properly caulked to prevent water damage.",
  },
  {
    title: "Smart home upgrades",
    body: "Install and set up thermostats, video doorbells, smart locks and smart switches, then show you how they work.",
  },
  {
    title: "Minor carpentry",
    body: "Fix sticking doors, hang shelves, repair trim and handle the small jobs that have been waiting.",
  },
];

export const computerHelp = {
  title: "Computer help",
  body: "Patient, in-home help setting up a new computer, printer or Wi-Fi, for anyone who'd rather not do it alone.",
};

export const referOut = [
  "Electrical panels or new circuits",
  "Adding outlets or switches in new locations",
  "Water heaters and gas lines",
  "Anything that needs a building permit",
  "Jobs over $1,000 in labor and materials",
];

export const faqs = [
  {
    q: "Why do you have a $1,000 limit?",
    a: "California lets people without a contractor's license do small jobs, as long as the total is under $1,000 and no permit is needed. I stay inside those rules, and I'll tell you up front if your job doesn't fit.",
  },
  {
    q: "What if my job turns out bigger than expected?",
    a: "I stop and talk with you before doing anything outside the quote. If it goes past what I can do, I'll say so and suggest getting a licensed contractor.",
  },
  {
    q: "Do I need to supply parts?",
    a: "Either works. I can pick up parts, or install ones you already have. Parts I buy count toward the job total.",
  },
  {
    q: "How do I pay?",
    a: "You pay after the work is done and you've checked it. I accept cash, check, Zelle, Venmo, ACH bank transfer, and credit or debit cards, including tap-to-pay.",
  },
];

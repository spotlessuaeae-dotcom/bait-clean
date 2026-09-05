export type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceCategory = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  inclusions: string[];
  image: ServiceImage;
  secondaryImage?: ServiceImage;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "home-villa",
    number: "01",
    name: "Home & Villa Cleaning",
    tagline: "Recurring care for the whole home, room by room.",
    description:
      "Our most-booked service — a full pass through every room on a schedule you set, so the home is looked after whether or not you're there to see it happen.",
    inclusions: [
      "Kitchens degreased — counters, hob, and cabinet fronts",
      "Bathrooms scrubbed, disinfected, and mirrors streak-free",
      "Floors vacuumed, mopped, and dried",
      "Dusting from skirting boards to ceiling fans",
      "Beds made and linens straightened",
      "Balconies, majlis, and living areas included",
    ],
    image: {
      src: "/services-home-villa.png",
      alt: "A Bait Clean housekeeper wiping down a wooden console table in a sunlit villa living room.",
    },
  },
  {
    slug: "deep-detail",
    number: "02",
    name: "Deep & Detail Cleaning",
    tagline: "The reset before or after anything changes.",
    description:
      "Booked before a move-in, after a renovation, or simply when it's been a while — this is the intensive pass into the places a weekly clean tends to pass over.",
    inclusions: [
      "Grout and tile lines hand-scrubbed",
      "Window tracks, sills, and glass detailed",
      "Behind and under furniture and appliances",
      "Cabinet exteriors and handles degreased",
      "Skirting boards, switches, and vents wiped down",
      "Light fixtures and ceiling fans dusted",
    ],
    image: {
      src: "/services-deep-detail.png",
      alt: "Gloved hands deep-cleaning a marble kitchen countertop and brass sink with a microfiber cloth.",
    },
    secondaryImage: {
      src: "/standard-grout.png",
      alt: "Restored grout lines running clean and even between pale tiles.",
    },
  },
  {
    slug: "maid-services",
    number: "03",
    name: "Maid Services",
    tagline: "A regular hand you get to know, on a schedule you set.",
    description:
      "Daily, weekly, or live-in — a vetted maid assigned to your household, so the person who knows where things go is the same one who shows up next time.",
    inclusions: [
      "Daily, weekly, or live-in arrangements",
      "Laundry, ironing, and bed-making included",
      "Light meal prep and tidying on request",
      "A consistent, familiar maid where possible",
      "Direct communication with your assigned maid",
      "Vetted, trained, and insured before placement",
    ],
    image: {
      src: "/services-maid.png",
      alt: "A Bait Clean housekeeper straightening cushions on a sofa in a lived-in living room.",
    },
  },
  {
    slug: "laundry-fabric-care",
    number: "04",
    name: "Laundry & Fabric Care",
    tagline: "Washed, pressed, and folded the way you'd do it yourself.",
    description:
      "From everyday loads to delicate abayas and linens — fabric care that comes back checked, cleaned, and put together properly, not just clean.",
    inclusions: [
      "Wash and fold for everyday loads",
      "Hand-pressing for shirts, abayas, and linens",
      "Delicate and wool-safe cycles",
      "Stain checks before washing",
      "Folded and organized by room",
      "Pickup and drop-off scheduling available",
    ],
    image: {
      src: "/services-laundry.png",
      alt: "Hands ironing a cream linen garment on a padded ironing board with soft steam rising.",
    },
    secondaryImage: {
      src: "/standard-linen.png",
      alt: "A pressed, folded edge of white linen caught in raking daylight.",
    },
  },
  {
    slug: "office-cleaning",
    number: "05",
    name: "Office Cleaning",
    tagline: "A workspace that stays presentable between visits.",
    description:
      "Scheduled around your working hours, not around ours — desks, floors, and shared spaces kept with the same discretion and consistency we bring to the home.",
    inclusions: [
      "Desks, screens, and shared surfaces wiped down",
      "Floors vacuumed and mopped",
      "Kitchenette and pantry areas cleaned",
      "Bins emptied and liners replaced",
      "Restrooms restocked and sanitized",
      "Scheduled before or after working hours",
    ],
    image: {
      src: "/services-office.png",
      alt: "A Bait Clean staff member wiping down a wooden office desk in a warmly lit workspace.",
    },
  },
];

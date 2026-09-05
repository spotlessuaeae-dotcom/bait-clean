export const siteConfig = {
  name: "Bait Clean",
  serviceArea: "Sharjah · Ajman",
  phoneNumber: "+971 58 124 9910",
  whatsappNumber: "971581249910",
  operatingHours: "Monday–Saturday, 8:00 AM – 4:00 PM",
  whatsappMessage: "Hello Bait Clean, I'd like to request a quote for home cleaning.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

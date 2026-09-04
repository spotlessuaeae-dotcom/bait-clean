export const siteConfig = {
  name: "Bait Clean",
  serviceArea: "Sharjah · Ajman",
  // Placeholder — swap for the real business WhatsApp number (international format, no +).
  whatsappNumber: "971500000000",
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

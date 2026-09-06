import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bait Clean — Premium Home Cleaning",
    short_name: "Bait Clean",
    description:
      "Vetted, insured housekeeping for homes, apartments, and villas across Sharjah and Ajman.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ea",
    theme_color: "#25231f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

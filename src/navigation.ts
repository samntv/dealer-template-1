import type { NavigationLink } from "./types";
import { getPermalink } from "./utils/permalinks";
import { SITE_NAME, SITE_URL } from "./utils/config";

// Static navigation config - edit this file to update your navigation
export const headerData = {
  links: [
    {
      text: "Home",
      href: getPermalink("/"),
    },
    {
      text: "About Us",
      href: getPermalink("/about-us"),
    },
    {
      text: "Indoor Billboards",
      links: "auto", 
    },
    {
      text: "Solutions",
      href: getPermalink("/solutions"),
      links: [
        {
          text: "Foundational",
          links: "auto", 
        },
        {
          text: "Lead Gen",
          links: "auto", 
        },
        {
          text: "Branding & Awareness",
          links: "auto", 
        },
      ],
    },
  ] as any[],
  actions: [{ text: "Contact Us", href: getPermalink("/contact-us") }],
};

export const footerData = {
  links: [
    {
      title: "Solutions",
      links: [
        {
          text: "Foundational Services",
          href: getPermalink("/solutions/foundational"),
        },
        { text: "Lead Generation", href: getPermalink("/solutions/lead-gen") },
      ],
    },
    {
      title: "Indoor Billboards",
      links: [{ text: "Overview", href: getPermalink("/indoor-billboards") }],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: getPermalink("/about-us") },
        { text: "Contact", href: getPermalink("/contact-us") },
        { text: "Careers", href: getPermalink("/careers") },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { text: "Rockwall, Texas", href: "#" },
        { text: "903-420-1090", href: "tel:903-420-1090" },
        { text: "BeSeen@NTXIDB.com", href: "mailto:BeSeen@NTXIDB.com" },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
  ],
  socialLinks: [
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/company/ntx-indoor-digital-billboards/",
    },
    {
      ariaLabel: "Facebook",
      icon: "tabler:brand-facebook",
      href: "https://www.facebook.com/ntxbillboards/",
    },
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/ntxidb/",
    },
    {
      ariaLabel: "YouTube",
      icon: "tabler:brand-youtube",
      href: "https://www.youtube.com/@ntxdigital",
    },
  ],
  footNote: `
    Made by <a class="text-primary-lighter underline hover:text-white transition" href="${SITE_URL}">${SITE_NAME}</a> · All rights reserved.
  `,
};

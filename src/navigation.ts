import type { NavigationLink } from './types';
import { getPermalink } from './utils/permalinks';

// Static navigation config - edit this file to update your navigation
export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Indoor Billboards',
      href: getPermalink('/indoor-billboards'),
      links: 'auto', // Will be populated from content collection
    },
    {
      text: 'Solutions',
      href: getPermalink('/solutions'),
      links: [
        {
          text: 'Foundational',
          href: getPermalink('/solutions/foundational'),
          links: 'auto', // Will be populated from content collection
        },
        {
          text: 'Lead Gen',
          href: getPermalink('/solutions/lead-gen'),
          links: 'auto', // Will be populated from content collection
        },
      ],
    },
  ] as any[],
  actions: [
    { text: 'Get In Touch', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Foundational Services', href: getPermalink('/solutions/foundational') },
        { text: 'Lead Generation', href: getPermalink('/solutions/lead-gen') },
      ],
    },
    {
      title: 'Indoor Billboards',
      links: [
        { text: 'Overview', href: getPermalink('/indoor-billboards') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Careers', href: getPermalink('/careers') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
        { text: 'FAQs', href: getPermalink('/faqs') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://yourbrand.com"> Your Brand</a> · All rights reserved.
  `,
};

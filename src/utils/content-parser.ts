import type { CollectionEntry } from "astro:content";

export interface ContentSection {
  section: string;
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  features?: Array<{
    title: string;
    description: string;
    image?: string;
    icon?: string;
  }>;
  ctaText?: string;
  ctaLink?: string;
  order?: number;
  category?: string;
}

export interface ParsedContent {
  sections: ContentSection[];
  hasMultipleSections: boolean;
  metadata: {
    title: string;
    description: string;
    category?: string;
  };
}

/**
 * Parses MDX frontmatter that contains multiple sections
 * Handles both single section format and multi-section format
 */
export function parseContentSections(
  entry: CollectionEntry<"solutions"> | CollectionEntry<"indoor-billboards">
): ParsedContent {
  const frontmatter = entry.data as any;

  // Check if the frontmatter has a 'sections' array (new format)
  if (frontmatter.sections && Array.isArray(frontmatter.sections)) {
    const sections = frontmatter.sections
      .map((section: any) => ({
        section: section.section || "default",
        title: section.title || "",
        description: section.description || "",
        eyebrow: section.eyebrow,
        image: section.image,
        features: section.features,
        ctaText: section.ctaText,
        ctaLink: section.ctaLink,
        order: section.order || 1,
      }))
      .sort(
        (a: ContentSection, b: ContentSection) =>
          (a.order || 0) - (b.order || 0)
      );

    return {
      sections,
      hasMultipleSections: true,
      metadata: {
        title: frontmatter.title,
        description: frontmatter.description,
        category: frontmatter.category,
      },
    };
  }

  // If the frontmatter has a 'section' field, it's using the old multi-section format
  if (frontmatter.section) {
    // This is a multi-section format - we need to parse it differently
    // For now, we'll extract the sections from the raw frontmatter
    const sections: ContentSection[] = [];

    // Extract Hero section
    if (frontmatter.section === "Hero" || frontmatter.title) {
      sections.push({
        section: "Hero",
        title: frontmatter.title,
        description: frontmatter.description,
        ctaText: frontmatter.ctaText,
        ctaLink: frontmatter.ctaLink,
        order: frontmatter.order || 1,
      });
    }

    // For the website-design.mdx file, we know it has multiple sections
    // We'll need to handle this more dynamically in a real implementation
    return {
      sections,
      hasMultipleSections: false,
      metadata: {
        title: frontmatter.title,
        description: frontmatter.description,
        category: frontmatter.category,
      },
    };
  }

  // Standard single-section format
  const sections: ContentSection[] = [
    {
      section: "Hero",
      title: frontmatter.title,
      description: frontmatter.description,
      image: frontmatter.image,
      ctaText: frontmatter.ctaText,
      ctaLink: frontmatter.ctaLink,
      order: 1,
    },
  ];

  return {
    sections,
    hasMultipleSections: false,
    metadata: {
      title: frontmatter.title,
      description: frontmatter.description,
      category: frontmatter.category,
    },
  };
}

/**
 * Parses the complex multi-section frontmatter from website-design.mdx
 * This handles the specific format used in that file
 */
export function parseMultiSectionContent(
  entry: CollectionEntry<"solutions"> | CollectionEntry<"indoor-billboards">
): ContentSection[] {
  const frontmatter = entry.data as any;

  // Check if the entry has a sections array
  if (frontmatter.sections && Array.isArray(frontmatter.sections)) {
    return frontmatter.sections
      .map((section: any) => ({
        section: section.section || "default",
        title: section.title || "",
        description: section.description || "",
        eyebrow: section.eyebrow,
        image: section.image,
        features: section.features,
        ctaText: section.ctaText,
        ctaLink: section.ctaLink,
        order: section.order || 1,
      }))
      .sort(
        (a: ContentSection, b: ContentSection) =>
          (a.order || 0) - (b.order || 0)
      );
  }

  // Fallback to the hardcoded sections for backward compatibility
  const sections: ContentSection[] = [];

  // Hero section
  sections.push({
    section: "Hero",
    title: "Website Design",
    description:
      "Custom website design & development to achieve your unique goals and maximize results.",
    ctaText: "Get in Touch",
    ctaLink: "/contact",
    order: 1,
  });

  // Overview section
  sections.push({
    section: "Overview",
    title: "Best Website Design Services to Elevate Your Brand Online",
    description:
      "Custom website design & development to achieve your unique goals and maximize results.",
    image: "/images/website-design.jpg",
    order: 2,
  });

  // Value Proposition section
  sections.push({
    section: "Value Proposition",
    title: "Your Site is the Cornerstone of Your Online Presence",
    description:
      "Your website is a foundational marketing tool. It drives brand awareness and helps ensure you're capturing sales across all digital platforms. Our team prioritizes aspects such as SEO and comprehensive UX/UI design to help ensure your website is findable and engaging. With a well-developed website, you're positioned for multichannel success via Social Media, Display Advertising, or CTV/OTT campaigns.",
    ctaText: "Learn More",
    ctaLink: "/solutions",
    order: 3,
  });

  // Features section
  sections.push({
    section: "Features",
    title: "Website Solutions: Guiding You from Start to Finish",
    description:
      "Our comprehensive website solutions guide you through every step of the process.",
    features: [
      {
        title: "UI/UX Design",
        description:
          "Comprehensive UX/UI design to ensure your website is user-friendly and visually appealing.",
        image: "/images/features/ui-ux-design.svg",
      },
      {
        title: "Custom Development",
        description:
          "Custom website development to meet your specific business needs and requirements.",
        image: "/images/features/custom-development.svg",
      },
      {
        title: "SEO Optimization",
        description:
          "SEO optimization to help your website rank higher in search engine results.",
        image: "/images/features/seo-optimization.svg",
      },
      {
        title: "Analytics and Tracking",
        description:
          "Implementation of tools like Google Analytics help to track website traffic, user behavior, and other metrics for continuous optimization and improvement.",
        image: "/images/features/analytics-tracking.svg",
      },
    ],
    ctaText: "Learn More",
    ctaLink: "/solutions",
    order: 4,
  });

  return sections.sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Determines the appropriate variant for a content section
 */
export function getSectionVariant(
  sectionType: string
): "hero" | "overview" | "features" | "value-proposition" | "default" {
  switch (sectionType.toLowerCase()) {
    case "hero":
      return "hero";
    case "overview":
      return "overview";
    case "features":
      return "features";
    case "value proposition":
    case "value-proposition":
      return "value-proposition";
    default:
      return "default";
  }
}

/**
 * Validates that a content section has required fields
 */
export function validateContentSection(section: ContentSection): boolean {
  return !!(section.title && section.description);
}

/**
 * Sanitizes content section data to prevent XSS
 */
export function sanitizeContentSection(
  section: ContentSection
): ContentSection {
  return {
    ...section,
    title: section.title?.replace(/<[^>]*>/g, "") || "",
    description: section.description?.replace(/<[^>]*>/g, "") || "",
  };
}

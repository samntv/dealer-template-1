import { z, defineCollection } from 'astro:content';

// Reusable metadata schema for SEO
const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// Solutions collection (website design, social media, etc.)
const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['foundational', 'lead-gen']),
    order: z.number().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

// Indoor Billboards collection
const indoorBillboards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  solutions,
  'indoor-billboards': indoorBillboards,
};

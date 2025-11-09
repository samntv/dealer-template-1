import { z, defineCollection } from "astro:content";

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
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["foundational", "lead-gen", "branding-awareness"]),
    order: z.number().optional(),
    icon: z.string().optional(),
    thumbnail: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
    image: z.string().optional(),
    sections: z
      .array(
        z.object({
          section: z.string(),
          title: z.string(),
          description: z.string().optional(),
          eyebrow: z.string().optional(),
          image: z.string().optional(),
          background: z.string().optional(),
          imagePosition: z.string().optional(),
          order: z.number().optional(),
          ctaText: z.string().optional(),
          ctaLink: z.string().optional(),
          keyPoints: z.array(z.string()).optional(),
          faqs: z
            .array(
              z.object({
                question: z.string(),
                answer: z.string(),
              })
            )
            .optional(),
          features: z
            .array(
              z.object({
                title: z.string(),
                description: z.string(),
                image: z.string().optional(),
                icon: z.string().optional(),
              })
            )
            .optional(),
          skills: z
            .array(
              z.object({
                title: z.string(),
                description: z.string().optional(),
                background: z.string().optional(),
                image: z.string().optional(),
              })
            )
            .optional(),
        })
      )
      .optional(),
    metadata: metadataDefinition(),
  }),
});

// Indoor Billboards collection
const indoorBillboards = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    icon: z.string().optional(),
    thumbnail: z.string().optional(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

// Pages collection (for homepage and other pages)
const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sections: z.array(
      z.object({
        section: z.string(),
        eyebrow: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        ctaText: z.string().optional(),
        ctaLink: z.string().optional(),
        image: z.string().optional(),
        background: z.string().optional(),
        order: z.number().optional(),
        cards: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string().optional(),
              link: z.string().optional(),
            })
          )
          .optional(),
        features: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string().optional(),
            })
          )
          .optional(),
        stats: z
          .array(
            z.object({
              label: z.string(),
              value: z.string(),
            })
          )
          .optional(),
        keyPoints: z.array(z.string()).optional(),
        faqs: z
          .array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          )
          .optional(),
        locations: z.array(z.string()).optional(),
      })
    ),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  solutions,
  "indoor-billboards": indoorBillboards,
  pages,
};

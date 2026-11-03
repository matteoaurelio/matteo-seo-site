import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const journal = defineCollection({
  loader: glob({
    base: "./src/content/journal",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Share image for the article, relative to /public (for example /images/journal/x.jpg). */
    image: z.string().optional(),
    /** A YouTube video that accompanies the article: embedded at the top and described in structured data. */
    video: z
      .object({
        youtubeId: z.string(),
        title: z.string(),
        uploadDate: z.coerce.date(),
        /** ISO 8601 duration, for example PT22M12S. */
        duration: z.string(),
        playlistUrl: z.string().url().optional(),
        playlistLabel: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  journal,
};

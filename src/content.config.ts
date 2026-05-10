import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    tags: z.array(z.string()).optional(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
    date: z.string(),
    imageUrl: z.string().optional(),
  }),
});

export const collections = {
  posts: blogCollection,
};

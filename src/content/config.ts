import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const project = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      techStack: z.array(z.string()).default(["python"]),
      coverImage: z.string().optional(),
      description: z.string(),
      code: z.string().optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = {
  blog: blog,
  project: project,
};

import { defineCollection, z } from 'astro:content';

const hunts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string(),
        tactic: z.string(),
        technique: z.string(),
        severity: z.enum(['low', 'medium', 'high', 'critical']).default('medium'),
        labType: z.enum(['lab-simulation', 'production-pattern']).default('lab-simulation'),
        dataSources: z.array(z.string()).default([]),
        tools: z.array(z.string()).default([]),
        output: z.string().default('detection-rule'),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string(),
        stack: z.array(z.string()).default([]),
        outcome: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const guides = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const frameworks = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string(),
        standard: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { hunts, projects, guides, frameworks };

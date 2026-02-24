import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: {
        category: v.optional(v.string()),
        search: v.optional(v.string()),
        featured: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        let results;
        if (args.featured) {
            results = await ctx.db
                .query("templates")
                .withIndex("by_featured", (q) => q.eq("isFeatured", true))
                .collect();
        } else if (args.category) {
            results = await ctx.db
                .query("templates")
                .withIndex("by_category", (q) =>
                    q.eq("category", args.category as "orchestrator" | "specialist" | "utility" | "workflow" | "integration")
                )
                .collect();
        } else {
            results = await ctx.db.query("templates").collect();
        }

        if (args.search) {
            const s = args.search.toLowerCase();
            results = results.filter(
                (t) =>
                    t.name.toLowerCase().includes(s) ||
                    t.description.toLowerCase().includes(s) ||
                    t.tags.some((tag) => tag.toLowerCase().includes(s))
            );
        }

        return results.sort((a, b) => b.downloads - a.downloads);
    },
});

export const getBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        return ctx.db
            .query("templates")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();
    },
});

export const getPopular = query({
    args: {},
    handler: async (ctx) => {
        const all = await ctx.db.query("templates").collect();
        return all.sort((a, b) => b.downloads - a.downloads).slice(0, 8);
    },
});

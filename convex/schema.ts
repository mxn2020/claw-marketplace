import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Published agent templates
    templates: defineTable({
        name: v.string(),
        slug: v.string(),
        description: v.string(),
        longDescription: v.optional(v.string()),
        category: v.union(
            v.literal("orchestrator"),
            v.literal("specialist"),
            v.literal("utility"),
            v.literal("workflow"),
            v.literal("integration")
        ),
        icon: v.string(),
        color: v.string(),
        systemPrompt: v.string(),
        defaultModel: v.string(),
        tags: v.array(v.string()),
        authorId: v.string(),
        authorName: v.string(),
        version: v.string(),
        downloads: v.number(),
        stars: v.number(),
        isVerified: v.boolean(),
        isFeatured: v.boolean(),
        configSchema: v.optional(v.string()),
        createdAt: v.string(),
        updatedAt: v.string(),
    })
        .index("by_slug", ["slug"])
        .index("by_category", ["category"])
        .index("by_author", ["authorId"])
        .index("by_downloads", ["downloads"])
        .index("by_featured", ["isFeatured"]),

    // Template reviews
    reviews: defineTable({
        templateId: v.id("templates"),
        userId: v.string(),
        userName: v.string(),
        rating: v.number(),
        comment: v.string(),
        createdAt: v.string(),
    })
        .index("by_template", ["templateId"]),

    // User installations
    installations: defineTable({
        userId: v.string(),
        templateId: v.id("templates"),
        installedAt: v.string(),
        version: v.string(),
    })
        .index("by_user", ["userId"])
        .index("by_template", ["templateId"]),

    // Categories metadata
    categories: defineTable({
        name: v.string(),
        slug: v.string(),
        description: v.string(),
        icon: v.string(),
        color: v.string(),
        templateCount: v.number(),
    }).index("by_slug", ["slug"]),
});

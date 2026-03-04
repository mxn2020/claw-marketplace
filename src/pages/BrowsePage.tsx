import { useState } from "react";
import { Search, Filter, Download, Star, ArrowUpDown } from "lucide-react";
import { Button, Card, Badge, Input, Select, SelectItem } from "@geenius-ui/react-css";
import "./BrowsePage.css";

const allTemplates = [
    { name: "Code Architect", slug: "code-architect", icon: "💻", color: "#34d399", downloads: 4210, stars: 567, category: "specialist", desc: "Senior software engineer for coding, reviewing, and debugging.", model: "claude-3.5-sonnet", author: "OpenClaw Team", verified: true },
    { name: "Summarizer", slug: "summarizer", icon: "📋", color: "#9ca3af", downloads: 3456, stars: 245, category: "utility", desc: "Condenses long texts into clear, actionable summaries.", model: "gpt-4o-mini", author: "OpenClaw Team", verified: true },
    { name: "Research Analyst", slug: "research-analyst", icon: "🔍", color: "#60a5fa", downloads: 3120, stars: 421, category: "specialist", desc: "Deep researcher for analysis and fact-checked reports.", model: "gpt-4o", author: "OpenClaw Team", verified: true },
    { name: "Content Writer", slug: "content-writer", icon: "✍️", color: "#f59e0b", downloads: 2890, stars: 312, category: "specialist", desc: "Versatile writer for blogs, docs, marketing copy, and social.", model: "claude-3.5-sonnet", author: "Agent Builder", verified: false },
    { name: "Mission Commander", slug: "mission-commander", icon: "🧠", color: "#7c5cfc", downloads: 2847, stars: 342, category: "orchestrator", desc: "Central orchestrator for team management and task delegation.", model: "gpt-4o", author: "OpenClaw Team", verified: true },
    { name: "Translator Pro", slug: "translator-pro", icon: "🌐", color: "#2dd4bf", downloads: 2134, stars: 278, category: "utility", desc: "Multi-language translation preserving tone and nuance.", model: "gpt-4o", author: "LinguaBot", verified: false },
    { name: "QA Inspector", slug: "qa-inspector", icon: "🔬", color: "#f87171", downloads: 1890, stars: 213, category: "specialist", desc: "Quality assurance specialist for review and validation.", model: "gpt-4o", author: "OpenClaw Team", verified: true },
    { name: "Email Composer", slug: "email-composer", icon: "📧", color: "#f472b6", downloads: 1678, stars: 145, category: "utility", desc: "Drafts professional emails with perfect tone and CTAs.", model: "gpt-4o-mini", author: "MailCraft", verified: false },
    { name: "Workflow Automator", slug: "workflow-automator", icon: "⚡", color: "#eab308", downloads: 1567, stars: 189, category: "workflow", desc: "Designs automated workflows with triggers and conditions.", model: "gpt-4o", author: "AutoBot", verified: false },
    { name: "Pipeline Conductor", slug: "pipeline-conductor", icon: "🎬", color: "#00d4ff", downloads: 1563, stars: 198, category: "orchestrator", desc: "Sequential workflow orchestrator for multi-step pipelines.", model: "gpt-4o", author: "OpenClaw Team", verified: true },
    { name: "Data Cruncher", slug: "data-cruncher", icon: "📊", color: "#a78bfa", downloads: 1245, stars: 167, category: "specialist", desc: "Data analysis, visualization, and ML model building.", model: "gpt-4o", author: "DataWiz", verified: false },
    { name: "API Connector", slug: "api-connector", icon: "🔌", color: "#14b8a6", downloads: 987, stars: 134, category: "integration", desc: "Integration specialist for APIs, auth, and data transforms.", model: "gpt-4o", author: "OpenClaw Team", verified: true },
];

type SortBy = "downloads" | "stars" | "name";

export default function BrowsePage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState<SortBy>("downloads");

    const filtered = allTemplates
        .filter((t) => {
            const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase());
            const matchCat = category === "all" || t.category === category;
            return matchSearch && matchCat;
        })
        .sort((a, b) => {
            if (sort === "downloads") return b.downloads - a.downloads;
            if (sort === "stars") return b.stars - a.stars;
            return a.name.localeCompare(b.name);
        });

    return (
        <div className="browse-page">
            <div className="browse-hero">
                <h1>Browse Templates</h1>
                <p>Discover and install agent templates for your OpenClaw instance</p>
            </div>

            <div className="browse-content">
                <div className="browse-toolbar">
                    <div className="browse-search">
                        <Search size={16} />
                        <Input
                            type="text"
                            placeholder="Search templates..."
                            value={search}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="browse-filters">
                        <Filter size={14} />
                        {["all", "orchestrator", "specialist", "utility", "workflow", "integration"].map((c) => (
                            <Button
                                key={c}
                                size="sm"
                                variant={category === c ? "primary" : "ghost"}
                                onClick={() => setCategory(c)}
                            >
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </Button>
                        ))}
                    </div>
                    <div className="browse-sort">
                        <ArrowUpDown size={14} />
                        <Select value={sort} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value as SortBy)}>
                            <SelectItem value="downloads">Most Downloaded</SelectItem>
                            <SelectItem value="stars">Most Starred</SelectItem>
                            <SelectItem value="name">A → Z</SelectItem>
                        </Select>
                    </div>
                </div>

                <p className="browse-count">{filtered.length} templates found</p>

                <div className="browse-grid">
                    {filtered.map((t) => (
                        <Card key={t.slug} hover padding="md" className="browse-card">
                            <div className="browse-card-top">
                                <div className="browse-card-icon" style={{ background: `${t.color}15` }}>
                                    <span>{t.icon}</span>
                                </div>
                                <div className="browse-card-meta">
                                    <Badge variant="info">{t.category}</Badge>
                                    {t.verified && <Badge variant="success">✓ Verified</Badge>}
                                </div>
                            </div>
                            <h3>{t.name}</h3>
                            <p className="browse-card-author">by {t.author}</p>
                            <p className="browse-card-desc">{t.desc}</p>
                            <div className="browse-card-footer">
                                <div className="browse-card-stats">
                                    <span><Download size={13} /> {t.downloads.toLocaleString()}</span>
                                    <span><Star size={13} /> {t.stars}</span>
                                </div>
                                <Button variant="primary" size="sm">Install</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

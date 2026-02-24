import { Link } from "react-router-dom";
import { ArrowRight, Download, Star, Sparkles, Search, TrendingUp } from "lucide-react";
import "./LandingPage.css";

const featuredTemplates = [
    { name: "Code Architect", icon: "💻", color: "#34d399", downloads: "4.2K", stars: 567, desc: "Senior software engineer for coding, reviewing, and debugging.", category: "specialist" },
    { name: "Mission Commander", icon: "🧠", color: "#7c5cfc", downloads: "2.8K", stars: 342, desc: "Central orchestrator for team management and task delegation.", category: "orchestrator" },
    { name: "Research Analyst", icon: "🔍", color: "#60a5fa", downloads: "3.1K", stars: 421, desc: "Deep researcher for analysis and fact-checked reports.", category: "specialist" },
    { name: "Summarizer", icon: "📋", color: "#9ca3af", downloads: "3.5K", stars: 245, desc: "Condenses long texts into clear, actionable summaries.", category: "utility" },
];

const categories = [
    { name: "Orchestrators", icon: "🧠", count: 2, color: "#7c5cfc" },
    { name: "Specialists", icon: "⚡", count: 4, color: "#FF6B6B" },
    { name: "Utilities", icon: "🔧", count: 3, color: "#FFD93D" },
    { name: "Workflows", icon: "🔄", count: 1, color: "#eab308" },
    { name: "Integrations", icon: "🔌", count: 1, color: "#14b8a6" },
];

const stats = [
    { label: "Templates", value: "12+" },
    { label: "Downloads", value: "28K+" },
    { label: "Contributors", value: "50+" },
    { label: "Categories", value: "5" },
];

export default function LandingPage() {
    return (
        <div className="mp-landing">
            {/* Hero */}
            <section className="mp-hero">
                <div className="mp-hero-bg">
                    <div className="mp-hero-blob mp-blob-1" />
                    <div className="mp-hero-blob mp-blob-2" />
                </div>
                <div className="mp-hero-content">
                    <div className="mp-hero-badge animate-fade-in">
                        <Sparkles size={14} />
                        Open Source · Agent Templates
                    </div>
                    <h1 className="animate-fade-in-up delay-1">
                        The marketplace for
                        <br />
                        <span className="gradient-text">AI agent templates</span>
                    </h1>
                    <p className="mp-hero-sub animate-fade-in-up delay-2">
                        Browse, install, and share agent templates for your OpenClaw
                        instance. Purpose-built orchestrators, specialists, and more.
                    </p>
                    <div className="mp-hero-search animate-fade-in-up delay-3">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search templates... (e.g. code, research, writer)"
                            className="input"
                            readOnly
                            onClick={() => window.location.href = "/browse"}
                        />
                    </div>
                    <div className="mp-hero-stats">
                        {stats.map((s) => (
                            <div key={s.label} className="mp-stat">
                                <span className="mp-stat-value">{s.value}</span>
                                <span className="mp-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured */}
            <section className="mp-section">
                <div className="mp-section-inner">
                    <div className="mp-section-header">
                        <div>
                            <h2><TrendingUp size={22} /> Trending Templates</h2>
                            <p>Most popular templates this week</p>
                        </div>
                        <Link to="/browse" className="btn btn-secondary btn-sm">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="mp-featured-grid">
                        {featuredTemplates.map((t) => (
                            <Link to={`/browse`} key={t.name} className="mp-template-card card">
                                <div className="mp-tc-header">
                                    <div className="mp-tc-icon" style={{ background: `${t.color}15` }}>
                                        <span>{t.icon}</span>
                                    </div>
                                    <span className="badge badge-accent">{t.category}</span>
                                </div>
                                <h3>{t.name}</h3>
                                <p>{t.desc}</p>
                                <div className="mp-tc-stats">
                                    <span><Download size={13} /> {t.downloads}</span>
                                    <span><Star size={13} /> {t.stars}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mp-section mp-section-alt">
                <div className="mp-section-inner">
                    <div className="mp-section-header">
                        <div>
                            <h2>Browse by Category</h2>
                            <p>Find the perfect agent for your workflow</p>
                        </div>
                    </div>
                    <div className="mp-categories-grid">
                        {categories.map((c) => (
                            <Link to="/categories" key={c.name} className="mp-category-card card">
                                <span className="mp-category-icon">{c.icon}</span>
                                <h3>{c.name}</h3>
                                <span className="mp-category-count">{c.count} templates</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mp-section">
                <div className="mp-section-inner">
                    <div className="mp-cta card">
                        <h2>Ready to publish?</h2>
                        <p>Share your custom agent templates with the community. Free and open source.</p>
                        <Link to="/publish" className="btn btn-primary btn-lg">
                            Publish a Template <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

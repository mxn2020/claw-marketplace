import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CategoriesPage.css";

const categories = [
    {
        name: "Orchestrators",
        slug: "orchestrator",
        icon: "🧠",
        color: "#7c5cfc",
        count: 2,
        desc: "Master coordinators that manage agent teams, break down goals, delegate tasks, and track progress.",
        examples: ["Mission Commander", "Pipeline Conductor"],
    },
    {
        name: "Specialists",
        slug: "specialist",
        icon: "⚡",
        color: "#FF6B6B",
        count: 4,
        desc: "Expert agents for specific domains — coding, research, writing, testing, and data analysis.",
        examples: ["Code Architect", "Research Analyst", "Content Writer", "QA Inspector"],
    },
    {
        name: "Utilities",
        slug: "utility",
        icon: "🔧",
        color: "#FFD93D",
        count: 3,
        desc: "General-purpose helper agents for common tasks like summarization, translation, and email drafting.",
        examples: ["Summarizer", "Translator Pro", "Email Composer"],
    },
    {
        name: "Workflows",
        slug: "workflow",
        icon: "🔄",
        color: "#eab308",
        count: 1,
        desc: "Process automation agents that design and execute multi-step workflows with triggers and conditions.",
        examples: ["Workflow Automator"],
    },
    {
        name: "Integrations",
        slug: "integration",
        icon: "🔌",
        color: "#14b8a6",
        count: 1,
        desc: "API and service connectors that bridge your agents with external platforms and data sources.",
        examples: ["API Connector"],
    },
];

export default function CategoriesPage() {
    return (
        <div className="categories-page">
            <div className="cat-hero">
                <h1>Categories</h1>
                <p>Browse agent templates by type</p>
            </div>
            <div className="cat-content">
                {categories.map((c) => (
                    <Link to="/browse" key={c.slug} className="cat-card card">
                        <div className="cat-card-left">
                            <div className="cat-card-icon" style={{ background: `${c.color}15`, color: c.color }}>
                                <span>{c.icon}</span>
                            </div>
                            <div className="cat-card-info">
                                <h2>{c.name}</h2>
                                <p>{c.desc}</p>
                                <div className="cat-card-examples">
                                    {c.examples.map((ex) => (
                                        <span key={ex} className="badge badge-neutral">{ex}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="cat-card-right">
                            <span className="cat-card-count">{c.count}</span>
                            <span className="cat-card-count-label">templates</span>
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

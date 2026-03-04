import { Store, Github, Heart, Coffee } from "lucide-react";
import { Button, Badge } from "@geenius-ui/react-css";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1>About <span className="gradient-text">Claw Marketplace</span></h1>
                <p>The open-source registry for AI agent templates</p>
            </div>
            <div className="about-content">
                <section className="about-section">
                    <h2><Store size={22} /> What is Claw Marketplace?</h2>
                    <p>
                        Claw Marketplace is a community-driven registry for AI agent templates built for
                        <strong> OpenClaw</strong>. Browse templates created by the team and community, install
                        them in one click, or publish your own custom agents for others to use.
                    </p>
                    <p>
                        Think of it as <strong>npm for AI agents</strong> — a central place to discover,
                        share, and reuse agent configurations.
                    </p>
                </section>
                <section className="about-section">
                    <h2><Heart size={22} /> Open Source</h2>
                    <p>
                        Fully open source under the MIT License. Self-host for free or use our managed
                        instance at $9/month.
                    </p>
                    <div className="about-tech">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Convex</Badge>
                        <Badge variant="secondary">Vite</Badge>
                    </div>
                </section>
                <section className="about-links">
                    <a href="https://github.com/mxn2020/claw-marketplace" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="lg" icon={<Github size={18} />}>Star on GitHub</Button>
                    </a>
                    <a href="https://buymeacoffee.com/mxn2020" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="lg" icon={<Coffee size={18} />}>Buy Me a Coffee</Button>
                    </a>
                </section>
            </div>
        </div>
    );
}

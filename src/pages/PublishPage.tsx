import { FileCode, Tag, Cpu, Send } from "lucide-react";
import "./PublishPage.css";

export default function PublishPage() {
    return (
        <div className="publish-page">
            <div className="publish-hero">
                <h1>
                    Publish a <span className="gradient-text">Template</span>
                </h1>
                <p>Share your custom agent templates with the OpenClaw community</p>
            </div>

            <div className="publish-content">
                <form className="publish-form" onSubmit={(e) => e.preventDefault()}>
                    <section className="publish-section card">
                        <h2><FileCode size={20} /> Template Details</h2>
                        <div className="field-group">
                            <label>Template Name</label>
                            <input type="text" className="input" placeholder="e.g. SEO Writer, Bug Fixer, PR Reviewer..." />
                        </div>
                        <div className="field-group">
                            <label>Description</label>
                            <input type="text" className="input" placeholder="A brief description of what this agent does" />
                        </div>
                        <div className="field-group">
                            <label>Long Description (Markdown)</label>
                            <textarea className="input publish-textarea" placeholder="# My Agent&#10;&#10;Detailed description with examples, use cases, and configuration tips..." rows={8} />
                        </div>
                    </section>

                    <section className="publish-section card">
                        <h2><Tag size={20} /> Classification</h2>
                        <div className="publish-row">
                            <div className="field-group">
                                <label>Category</label>
                                <select className="input">
                                    <option>Orchestrator</option>
                                    <option>Specialist</option>
                                    <option>Utility</option>
                                    <option>Workflow</option>
                                    <option>Integration</option>
                                </select>
                            </div>
                            <div className="field-group">
                                <label>Icon (Emoji)</label>
                                <input type="text" className="input" placeholder="🤖" />
                            </div>
                            <div className="field-group">
                                <label>Color</label>
                                <input type="color" className="input publish-color" defaultValue="#FF6B6B" />
                            </div>
                        </div>
                        <div className="field-group">
                            <label>Tags (comma-separated)</label>
                            <input type="text" className="input" placeholder="coding, review, debugging, typescript" />
                        </div>
                    </section>

                    <section className="publish-section card">
                        <h2><Cpu size={20} /> Agent Configuration</h2>
                        <div className="field-group">
                            <label>System Prompt</label>
                            <textarea className="input publish-textarea" placeholder="You are a helpful assistant that..." rows={6} />
                        </div>
                        <div className="field-group">
                            <label>Default Model</label>
                            <select className="input">
                                <option>gpt-4o</option>
                                <option>gpt-4o-mini</option>
                                <option>claude-3.5-sonnet</option>
                                <option>claude-3-haiku</option>
                                <option>gemini-pro</option>
                            </select>
                        </div>
                    </section>

                    <div className="publish-actions">
                        <button type="submit" className="btn btn-primary btn-lg">
                            <Send size={16} /> Publish Template
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

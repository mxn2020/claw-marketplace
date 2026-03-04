import { FileCode, Tag, Cpu, Send } from "lucide-react";
import { Button, Card, Input, Label, Select, SelectItem, Textarea } from "@geenius-ui/react-css";
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
                    <Card padding="lg" className="publish-section">
                        <h2><FileCode size={20} /> Template Details</h2>
                        <div className="field-group">
                            <Label>Template Name</Label>
                            <Input type="text" placeholder="e.g. SEO Writer, Bug Fixer, PR Reviewer..." />
                        </div>
                        <div className="field-group">
                            <Label>Description</Label>
                            <Input type="text" placeholder="A brief description of what this agent does" />
                        </div>
                        <div className="field-group">
                            <Label>Long Description (Markdown)</Label>
                            <Textarea className="publish-textarea" placeholder={"# My Agent\n\nDetailed description with examples, use cases, and configuration tips..."} rows={8} />
                        </div>
                    </Card>

                    <Card padding="lg" className="publish-section">
                        <h2><Tag size={20} /> Classification</h2>
                        <div className="publish-row">
                            <div className="field-group">
                                <Label>Category</Label>
                                <Select defaultValue="Orchestrator">
                                    <SelectItem value="Orchestrator">Orchestrator</SelectItem>
                                    <SelectItem value="Specialist">Specialist</SelectItem>
                                    <SelectItem value="Utility">Utility</SelectItem>
                                    <SelectItem value="Workflow">Workflow</SelectItem>
                                    <SelectItem value="Integration">Integration</SelectItem>
                                </Select>
                            </div>
                            <div className="field-group">
                                <Label>Icon (Emoji)</Label>
                                <Input type="text" placeholder="🤖" />
                            </div>
                            <div className="field-group">
                                <Label>Color</Label>
                                <Input type="color" className="publish-color" defaultValue="#FF6B6B" />
                            </div>
                        </div>
                        <div className="field-group">
                            <Label>Tags (comma-separated)</Label>
                            <Input type="text" placeholder="coding, review, debugging, typescript" />
                        </div>
                    </Card>

                    <Card padding="lg" className="publish-section">
                        <h2><Cpu size={20} /> Agent Configuration</h2>
                        <div className="field-group">
                            <Label>System Prompt</Label>
                            <Textarea className="publish-textarea" placeholder="You are a helpful assistant that..." rows={6} />
                        </div>
                        <div className="field-group">
                            <Label>Default Model</Label>
                            <Select defaultValue="gpt-4o">
                                <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                                <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
                                <SelectItem value="claude-3.5-sonnet">claude-3.5-sonnet</SelectItem>
                                <SelectItem value="claude-3-haiku">claude-3-haiku</SelectItem>
                                <SelectItem value="gemini-pro">gemini-pro</SelectItem>
                            </Select>
                        </div>
                    </Card>

                    <div className="publish-actions">
                        <Button variant="primary" size="lg" type="submit" icon={<Send size={16} />}>
                            Publish Template
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

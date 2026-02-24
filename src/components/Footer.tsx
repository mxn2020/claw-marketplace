import { Link } from "react-router-dom";
import { Store, Github, Coffee } from "lucide-react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="mp-footer">
            <div className="mp-footer-inner">
                <div className="mp-footer-grid">
                    <div className="mp-footer-brand">
                        <Link to="/" className="mp-footer-logo">
                            <Store size={20} />
                            <span>ClawMarket</span>
                        </Link>
                        <p>The open-source marketplace for AI agent templates.</p>
                        <div className="mp-footer-social">
                            <a href="https://github.com/mxn2020/claw-marketplace" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                            <a href="https://buymeacoffee.com/mxn2020" target="_blank" rel="noopener noreferrer"><Coffee size={18} /></a>
                        </div>
                    </div>
                    <div className="mp-footer-col">
                        <h4>Explore</h4>
                        <Link to="/browse">Browse All</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/publish">Publish</Link>
                    </div>
                    <div className="mp-footer-col">
                        <h4>Resources</h4>
                        <a href="https://github.com/mxn2020/claw-marketplace" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <div className="mp-footer-bottom">
                    <p>© {new Date().getFullYear()} Mehdi Nabhani. MIT License.</p>
                </div>
            </div>
        </footer>
    );
}

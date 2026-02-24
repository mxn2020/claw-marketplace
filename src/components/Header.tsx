import { Link, useLocation } from "react-router-dom";
import { Store, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const links = [
    { to: "/browse", label: "Browse" },
    { to: "/categories", label: "Categories" },
    { to: "/publish", label: "Publish" },
    { to: "/about", label: "About" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="mp-header">
            <div className="mp-header-inner">
                <Link to="/" className="mp-logo">
                    <Store size={24} />
                    <span>
                        Claw<span className="gradient-text">Market</span>
                    </span>
                </Link>

                <nav className={`mp-nav ${mobileOpen ? "open" : ""}`}>
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className={`mp-nav-link ${location.pathname === l.to ? "active" : ""}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className="mp-header-actions">
                    <ThemeToggle />
                    <Link to="/browse" className="btn btn-primary btn-sm">
                        Explore Templates
                    </Link>
                    <button
                        className="btn btn-icon btn-ghost mp-mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

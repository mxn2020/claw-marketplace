import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../pages/LandingPage";
import BrowsePage from "../pages/BrowsePage";
import CategoriesPage from "../pages/CategoriesPage";
import PublishPage from "../pages/PublishPage";
import AboutPage from "../pages/AboutPage";
import userEvent from "@testing-library/user-event";

// Helper to render with router context
function renderWithRouter(ui: React.ReactElement) {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("ThemeToggle", () => {
    it("renders the toggle button", () => {
        render(<ThemeToggle />);
        const button = screen.getByRole("button", { name: /switch to/i });
        expect(button).toBeInTheDocument();
    });

    it("toggles theme on click", async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);
        const button = screen.getByRole("button", { name: /switch to dark mode/i });
        await user.click(button);
        expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    });
});

describe("Header", () => {
    it("renders logo text", () => {
        renderWithRouter(<Header />);
        expect(screen.getByText("Claw")).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        renderWithRouter(<Header />);
        expect(screen.getByText("Browse")).toBeInTheDocument();
        expect(screen.getByText("Categories")).toBeInTheDocument();
        expect(screen.getByText("Publish")).toBeInTheDocument();
    });
});

describe("Footer", () => {
    it("renders brand name", () => {
        renderWithRouter(<Footer />);
        expect(screen.getByText("ClawMarket")).toBeInTheDocument();
    });
});

describe("LandingPage", () => {
    it("renders hero heading", () => {
        renderWithRouter(<LandingPage />);
        expect(screen.getByText(/marketplace for/i)).toBeInTheDocument();
    });

    it("renders trending templates", () => {
        renderWithRouter(<LandingPage />);
        expect(screen.getByText("Code Architect")).toBeInTheDocument();
        expect(screen.getByText("Mission Commander")).toBeInTheDocument();
    });

    it("renders category section", () => {
        renderWithRouter(<LandingPage />);
        expect(screen.getByText("Browse by Category")).toBeInTheDocument();
    });
});

describe("BrowsePage", () => {
    it("renders all 12 templates by default", () => {
        renderWithRouter(<BrowsePage />);
        expect(screen.getByText("12 templates found")).toBeInTheDocument();
    });

    it("renders search input", () => {
        renderWithRouter(<BrowsePage />);
        expect(screen.getByPlaceholderText(/Search templates/i)).toBeInTheDocument();
    });

    it("renders filter buttons", () => {
        renderWithRouter(<BrowsePage />);
        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getByText("Specialist")).toBeInTheDocument();
        expect(screen.getByText("Utility")).toBeInTheDocument();
    });
});

describe("CategoriesPage", () => {
    it("renders all 5 categories", () => {
        renderWithRouter(<CategoriesPage />);
        expect(screen.getByText("Orchestrators")).toBeInTheDocument();
        expect(screen.getByText("Specialists")).toBeInTheDocument();
        expect(screen.getByText("Utilities")).toBeInTheDocument();
        expect(screen.getByText("Workflows")).toBeInTheDocument();
        expect(screen.getByText("Integrations")).toBeInTheDocument();
    });
});

describe("PublishPage", () => {
    it("renders form sections", () => {
        renderWithRouter(<PublishPage />);
        expect(screen.getByText(/Template Details/i)).toBeInTheDocument();
        expect(screen.getByText(/Agent Configuration/i)).toBeInTheDocument();
    });

    it("renders publish button", () => {
        renderWithRouter(<PublishPage />);
        expect(screen.getByText("Publish Template")).toBeInTheDocument();
    });
});

describe("AboutPage", () => {
    it("renders about content", () => {
        renderWithRouter(<AboutPage />);
        expect(screen.getByText(/What is Claw Marketplace/i)).toBeInTheDocument();
    });

    it("renders open source section", () => {
        renderWithRouter(<AboutPage />);
        expect(screen.getByText("Open Source")).toBeInTheDocument();
    });
});

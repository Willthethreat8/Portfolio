import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { motionMock } from "./helpers";

vi.mock("motion/react", () => motionMock);

import { Layout } from "../app/components/Layout";

function renderLayout(initialRoute = "/") {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Layout />
    </MemoryRouter>
  );
}

describe("Layout – Navigation & Footer", () => {
  // ── Navigation ──

  it("affiche le logo Portfolio", () => {
    renderLayout();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    // "DE" appears in both nav and footer logos
    const deLogos = screen.getAllByText("DE");
    expect(deLogos.length).toBe(2);
  });

  it("affiche les 6 liens de navigation desktop", () => {
    renderLayout();
    const navLinks = ["Accueil", "Compétences", "Projets", "Expérience", "Hobbies", "Contact"];
    for (const label of navLinks) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("le lien Accueil pointe vers /", () => {
    renderLayout();
    const accueilLink = screen.getByText("Accueil").closest("a");
    expect(accueilLink).toHaveAttribute("href", "/");
  });

  it("le lien Compétences pointe vers /competences", () => {
    renderLayout();
    const link = screen.getByText("Compétences").closest("a");
    expect(link).toHaveAttribute("href", "/competences");
  });

  it("le lien Contact pointe vers /contact", () => {
    renderLayout();
    const link = screen.getByText("Contact").closest("a");
    expect(link).toHaveAttribute("href", "/contact");
  });

  // ── Menu mobile ──

  it("toggle le menu mobile au clic sur le bouton hamburger", async () => {
    const user = userEvent.setup();
    renderLayout();

    // Find the mobile menu button (has Menu or X icon)
    const mobileButton = screen.getByRole("button");

    // Initially, mobile nav items are in desktop nav but mobile menu section should not exist
    // After click, it should show mobile nav links
    await user.click(mobileButton);

    // After click, the navlinks should be doubled (desktop + mobile)
    const allAccueil = screen.getAllByText("Accueil");
    expect(allAccueil.length).toBeGreaterThanOrEqual(2);
  });

  // ── Footer ──

  it("affiche le footer avec le nom", () => {
    renderLayout();
    const nameMatches = screen.getAllByText(/sir william ngoma/i);
    expect(nameMatches.length).toBeGreaterThanOrEqual(1);
  });

  it("affiche le copyright avec l'année courante", () => {
    renderLayout();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });

  it("le footer contient un lien GitHub", () => {
    renderLayout();
    const ghLinks = document.querySelectorAll('a[href*="github.com/Willthethreat8"]');
    expect(ghLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("le footer contient un lien LinkedIn", () => {
    renderLayout();
    const liLinks = document.querySelectorAll('a[href*="linkedin.com"]');
    expect(liLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("le footer contient un lien email", () => {
    renderLayout();
    const mailLinks = document.querySelectorAll('a[href="mailto:nsirwilliam@gmail.com"]');
    expect(mailLinks.length).toBeGreaterThanOrEqual(1);
  });
});

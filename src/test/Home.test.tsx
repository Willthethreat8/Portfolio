import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { motionMock } from "./helpers";

vi.mock("motion/react", () => motionMock);

import { Home } from "../app/components/Home";

function renderHome() {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

describe("Home – Page d'accueil", () => {
  it("affiche le nom complet", () => {
    renderHome();
    expect(screen.getByText("Sir William NGOMA")).toBeInTheDocument();
  });

  it("affiche le titre Software Engineer", () => {
    renderHome();
    expect(screen.getByText("Software")).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
  });

  it("affiche la mention ESIR", () => {
    renderHome();
    const matches = screen.getAllByText(/esir/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("affiche le badge de disponibilité", () => {
    renderHome();
    expect(screen.getByText(/disponible pour un cdi/i)).toBeInTheDocument();
  });

  it("affiche le badge recherche développeur IA", () => {
    renderHome();
    expect(screen.getByText(/recherche développeur ia/i)).toBeInTheDocument();
  });

  it("affiche les 5 badges d'expertise", () => {
    renderHome();
    expect(screen.getByText("Dev Full Stack")).toBeInTheDocument();
    expect(screen.getByText("Data Engineer")).toBeInTheDocument();
    expect(screen.getByText("Business Analyst")).toBeInTheDocument();
    expect(screen.getByText("IA Générative")).toBeInTheDocument();
    expect(screen.getByText("Chef de Projet / Product Owner")).toBeInTheDocument();
  });

  it("affiche les langues parlées", () => {
    renderHome();
    expect(screen.getByText(/français/i)).toBeInTheDocument();
    expect(screen.getByText(/anglais/i)).toBeInTheDocument();
    expect(screen.getByText(/toeic/i)).toBeInTheDocument();
  });

  it("affiche le bouton Télécharger CV avec le bon lien", () => {
    renderHome();
    const cvLink = screen.getByText(/télécharger cv/i).closest("a");
    expect(cvLink).toHaveAttribute("href", "/cv.pdf");
    expect(cvLink).toHaveAttribute("download");
  });

  it("affiche le bouton Me contacter avec lien vers /contact", () => {
    renderHome();
    const contactLink = screen.getByText(/me contacter/i).closest("a");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("contient un lien GitHub", () => {
    renderHome();
    const ghLink = document.querySelector('a[href*="github.com/Willthethreat8"]');
    expect(ghLink).toBeInTheDocument();
  });

  it("contient un lien LinkedIn", () => {
    renderHome();
    const liLink = document.querySelector('a[href*="linkedin.com"]');
    expect(liLink).toBeInTheDocument();
  });

  it("contient un lien email", () => {
    renderHome();
    const mailLink = document.querySelector('a[href="mailto:nsirwilliam@gmail.com"]');
    expect(mailLink).toBeInTheDocument();
  });

  it("affiche la section À propos de moi", () => {
    renderHome();
    expect(screen.getByText(/à propos de moi/i)).toBeInTheDocument();
    expect(screen.getByText(/congo-brazzaville/i)).toBeInTheDocument();
  });

  it("affiche les 4 qualités", () => {
    renderHome();
    expect(screen.getByText(/qualités & savoir-être/i)).toBeInTheDocument();
    expect(screen.getByText(/travail d'équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/curiosité & rigueur/i)).toBeInTheDocument();
    expect(screen.getByText(/proactivité & innovation/i)).toBeInTheDocument();
    expect(screen.getByText(/adaptabilité/i)).toBeInTheDocument();
  });

  it("affiche la citation de Nelson Mandela", () => {
    renderHome();
    expect(screen.getByText(/cela semble toujours impossible/i)).toBeInTheDocument();
    expect(screen.getByText(/nelson mandela/i)).toBeInTheDocument();
  });

  it("affiche les labels DATA · IA · GENAI et ESIR · 2026", () => {
    renderHome();
    expect(screen.getByText("DATA · IA · GENAI")).toBeInTheDocument();
    expect(screen.getByText("ESIR · 2026")).toBeInTheDocument();
  });
});

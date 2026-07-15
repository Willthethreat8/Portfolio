import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("Home – Accueil (bento grid)", () => {
  it("affiche le nom complet", () => {
    renderHome();
    expect(screen.getByText("Sir William NGOMA")).toBeInTheDocument();
  });

  it("affiche le titre Data & AI Engineer", () => {
    renderHome();
    expect(screen.getByText("Data & AI Engineer")).toBeInTheDocument();
  });

  it("affiche le badge de disponibilité", () => {
    renderHome();
    expect(screen.getByText(/disponible pour un cdi/i)).toBeInTheDocument();
  });

  it("affiche la mention ESIR", () => {
    renderHome();
    const matches = screen.getAllByText(/esir/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("affiche les langues (TOEIC)", () => {
    renderHome();
    const matches = screen.getAllByText(/toeic/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("affiche le bouton Télécharger CV avec le bon lien", () => {
    renderHome();
    const cvLink = screen.getByText(/télécharger cv/i).closest("a");
    expect(cvLink).toHaveAttribute("href", "/cv.pdf");
    expect(cvLink).toHaveAttribute("download");
  });

  it("affiche au moins un lien vers /contact", () => {
    renderHome();
    const contactLinks = screen
      .getAllByText(/me contacter/i)
      .map((el) => el.closest("a"));
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
    expect(contactLinks[0]).toHaveAttribute("href", "/contact");
  });

  it("contient les liens GitHub, LinkedIn et email", () => {
    renderHome();
    expect(
      document.querySelector('a[href*="github.com/Willthethreat8"]')
    ).toBeInTheDocument();
    expect(document.querySelector('a[href*="linkedin.com"]')).toBeInTheDocument();
    expect(
      document.querySelector('a[href="mailto:nsirwilliam@gmail.com"]')
    ).toBeInTheDocument();
  });

  // ── Tuile AeroTwin ──

  it("affiche la tuile projet vedette AeroTwin", () => {
    renderHome();
    expect(screen.getByText(/projet vedette/i)).toBeInTheDocument();
    expect(screen.getByText(/aerotwin/i)).toBeInTheDocument();
    expect(screen.getByText(/en cours/i)).toBeInTheDocument();
  });

  it("affiche les étapes du pipeline AeroTwin", () => {
    renderHome();
    for (const stage of ["N-CMAPSS", "dbt", "XGBoost", "FastAPI"]) {
      expect(screen.getByText(stage)).toBeInTheDocument();
    }
  });

  it("contient un lien GitHub vers le projet AeroTwin", () => {
    renderHome();
    const ghLink = document.querySelector(
      'a[href*="github.com/Willthethreat8/Data_project"]'
    );
    expect(ghLink).toBeInTheDocument();
  });

  // ── Tuile stats ──

  it("affiche les labels des statistiques", () => {
    renderHome();
    expect(screen.getByText("Projets")).toBeInTheDocument();
    expect(screen.getByText("Technologies")).toBeInTheDocument();
    expect(screen.getByText("TOEIC")).toBeInTheDocument();
  });

  // ── Tuile À propos (repliable) ──

  it("affiche l'à propos condensé avec Congo-Brazzaville", () => {
    renderHome();
    expect(screen.getByText(/à propos de moi/i)).toBeInTheDocument();
    expect(screen.getByText(/congo-brazzaville/i)).toBeInTheDocument();
  });

  it("déplie le texte complet au clic sur En savoir plus", async () => {
    const user = userEvent.setup();
    renderHome();
    expect(
      screen.queryByText(/product owner ou lead technique/i)
    ).not.toBeInTheDocument();
    await user.click(screen.getByText(/en savoir plus/i));
    expect(
      screen.getByText(/product owner ou lead technique/i)
    ).toBeInTheDocument();
  });

  // ── Tuiles secondaires ──

  it("affiche la tuile compétences avec lien vers /competences", () => {
    renderHome();
    const link = screen.getByText(/voir tout/i).closest("a");
    expect(link).toHaveAttribute("href", "/competences");
  });

  it("affiche la tuile qualités", () => {
    renderHome();
    expect(screen.getByText(/travail d'équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/curiosité & rigueur/i)).toBeInTheDocument();
    expect(screen.getByText(/adaptabilité/i)).toBeInTheDocument();
  });

  it("affiche la tuile hobbies avec lien vers /hobbies", () => {
    renderHome();
    const link = screen.getByText(/découvrir/i).closest("a");
    expect(link).toHaveAttribute("href", "/hobbies");
  });

  it("affiche la citation d'Alan Kay", () => {
    renderHome();
    expect(screen.getByText(/alan kay/i)).toBeInTheDocument();
  });
});

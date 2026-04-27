import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { motionMock } from "./helpers";

vi.mock("motion/react", () => motionMock);

import { Experience } from "../app/components/Experience";

function renderExperience() {
  return render(<Experience />);
}

describe("Experience – Parcours & Expériences", () => {
  // ── Header ──

  it("affiche le titre de la page", () => {
    renderExperience();
    expect(screen.getByText("Parcours & Expériences")).toBeInTheDocument();
  });

  it("affiche la description", () => {
    renderExperience();
    expect(screen.getByText(/parcours académique et professionnel/i)).toBeInTheDocument();
  });

  // ── 3 sections principales ──

  it("affiche la section Expérience Professionnelle", () => {
    renderExperience();
    expect(screen.getByText("Expérience Professionnelle")).toBeInTheDocument();
  });

  it("affiche la section Formation", () => {
    renderExperience();
    expect(screen.getByText("Formation")).toBeInTheDocument();
  });

  it("affiche la section Certifications", () => {
    renderExperience();
    expect(screen.getByText("Certifications")).toBeInTheDocument();
  });

  // ── 3 expériences ──

  it("affiche l'expérience Acanthe Data & IA", () => {
    renderExperience();
    expect(screen.getByText("Data & IA Engineer")).toBeInTheDocument();
    expect(screen.getByText("Acanthe (Filiale de BLOT Immobilier)")).toBeInTheDocument();
    expect(screen.getByText("Contrat de professionnalisation")).toBeInTheDocument();
  });

  it("affiche l'expérience MBCS IA Générative", () => {
    renderExperience();
    expect(screen.getByText("Développeur IA Générative")).toBeInTheDocument();
    expect(screen.getByText("MBCS")).toBeInTheDocument();
    expect(screen.getByText("Stage")).toBeInTheDocument();
  });

  it("affiche l'expérience Zara", () => {
    renderExperience();
    expect(screen.getByText("Employé Back-Office")).toBeInTheDocument();
    expect(screen.getByText("Zara")).toBeInTheDocument();
    expect(screen.getByText("CDD")).toBeInTheDocument();
  });

  // ── Expand / Collapse ──

  it("affiche le résumé quand la carte est fermée", () => {
    renderExperience();
    // Summaries should be visible when collapsed
    expect(screen.getByText(/professionnalisation de la gestion des données de prospection/i)).toBeInTheDocument();
  });

  it("déploie les missions au clic sur une carte", async () => {
    const user = userEvent.setup();
    renderExperience();

    // Before click: "Missions" header should NOT be visible
    expect(screen.queryByText("Missions")).not.toBeInTheDocument();

    // Click on the first experience card's button
    const buttons = screen.getAllByRole("button");
    const expButton = buttons.find((b) => b.textContent?.includes("Data & IA Engineer"));
    expect(expButton).toBeDefined();
    await user.click(expButton!);

    // After click: "Missions" header should be visible
    expect(screen.getByText("Missions")).toBeInTheDocument();
  });

  // ── Formation ──

  it("affiche les 2 formations", () => {
    renderExperience();
    expect(screen.getByText(/diplôme d'ingénieur en informatique/i)).toBeInTheDocument();
    expect(screen.getByText(/esir/i)).toBeInTheDocument();
    expect(screen.getByText(/cycle ingénieur informatique/i)).toBeInTheDocument();
    expect(screen.getByText(/ece paris/i)).toBeInTheDocument();
  });

  // ── Certifications ──

  it("affiche les 2 certifications", () => {
    renderExperience();
    expect(screen.getByText(/python pour la data analyse/i)).toBeInTheDocument();
    expect(screen.getByText(/datascientest/i)).toBeInTheDocument();
    expect(screen.getByText(/mooc gestion de projet/i)).toBeInTheDocument();
    expect(screen.getByText(/centrale lille/i)).toBeInTheDocument();
  });

  // ── Qualités retirées ──

  it("ne contient plus la section Qualités (déplacée vers Home)", () => {
    renderExperience();
    // Qualités & Savoir-être should NOT be on this page anymore
    expect(screen.queryByText(/qualités & savoir-être/i)).not.toBeInTheDocument();
  });
});

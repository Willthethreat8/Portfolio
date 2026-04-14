import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { motionMock } from "./helpers";

vi.mock("motion/react", () => motionMock);

import { Hobbies } from "../app/components/Hobbies";

function renderHobbies() {
  return render(<Hobbies />);
}

describe("Hobbies – Hobbies & Passions", () => {
  // ── Titre ──

  it("affiche le titre de la page", () => {
    renderHobbies();
    expect(screen.getByText("Hobbies & Passions")).toBeInTheDocument();
  });

  it("affiche la description", () => {
    renderHobbies();
    expect(screen.getByText(/au-delà de la technique/i)).toBeInTheDocument();
  });

  // ── 8 hobbies ──

  it("affiche les 8 hobbies", () => {
    renderHobbies();
    const hobbies = [
      "Basketball", "Vélo", "Jeux Vidéos", "Dessins",
      "Marche", "Musique & Danse", "Cuisine du Monde", "Photographie",
    ];
    for (const hobby of hobbies) {
      expect(screen.getByText(hobby)).toBeInTheDocument();
    }
  });

  it("affiche les descriptions des hobbies", () => {
    renderHobbies();
    expect(screen.getByText(/esprit d'équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/exploration culinaire/i)).toBeInTheDocument();
    expect(screen.getByText(/capturer les moments/i)).toBeInTheDocument();
  });

  // ── Centres d'intérêt ──

  it("affiche la section Centres d'intérêt", () => {
    renderHobbies();
    // The heading "Centres d'intérêt"
    expect(screen.getByText("Centres d'intérêt", { selector: "h2" })).toBeInTheDocument();
  });

  it("affiche les 5 centres d'intérêt", () => {
    renderHobbies();
    const interests = [
      "Intelligence Artificielle",
      "Écologie & Tech",
      "Banque & Finance",
      "Aéronautique",
      "Impact Social",
    ];
    for (const interest of interests) {
      expect(screen.getByText(interest)).toBeInTheDocument();
    }
  });

  it("affiche les descriptions des centres d'intérêt", () => {
    renderHobbies();
    expect(screen.getByText(/ia générative/i)).toBeInTheDocument();
    expect(screen.getByText(/green it/i)).toBeInTheDocument();
    expect(screen.getByText(/fintech/i)).toBeInTheDocument();
    expect(screen.getByText(/maintenance prédictive/i)).toBeInTheDocument();
    expect(screen.getByText(/problèmes sociaux/i)).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { motionMock } from "./helpers";

vi.mock("motion/react", () => motionMock);

import { Projects } from "../app/components/Projects";

function renderProjects() {
  return render(<Projects />);
}

describe("Projects – Projets réalisés", () => {
  // ── Titre ──

  it("affiche le titre de la page", () => {
    renderProjects();
    expect(screen.getByText("Projets Réalisés")).toBeInTheDocument();
  });

  // ── Les 3 projets ──

  it("affiche le projet AeroTwin", () => {
    renderProjects();
    expect(screen.getByText(/aerotwin/i)).toBeInTheDocument();
    expect(screen.getByText(/maintenance prédictive/i)).toBeInTheDocument();
  });

  it("affiche le projet ESIR-as-a-Service", () => {
    renderProjects();
    expect(screen.getByText(/esir-as-a-service/i)).toBeInTheDocument();
  });

  it("affiche le projet Authentification", () => {
    renderProjects();
    expect(
      screen.getByText(/application d'authentification/i)
    ).toBeInTheDocument();
  });

  // ── Catégories ──

  it("affiche les catégories de chaque projet", () => {
    renderProjects();
    expect(screen.getByText("Data Engineering & IA")).toBeInTheDocument();
    expect(screen.getByText("DevOps & Cloud")).toBeInTheDocument();
    expect(screen.getByText("Développement Web")).toBeInTheDocument();
  });

  // ── Stacks ──

  it("affiche les chips de la stack AeroTwin", () => {
    renderProjects();
    expect(screen.getByText("Kafka")).toBeInTheDocument();
    expect(screen.getByText("Spark")).toBeInTheDocument();
    expect(screen.getByText("Airflow")).toBeInTheDocument();
    expect(screen.getByText("XGBoost")).toBeInTheDocument();
    expect(screen.getByText("MLflow")).toBeInTheDocument();
  });

  it("affiche les chips de la stack ESIR Startup", () => {
    renderProjects();
    expect(screen.getByText("Nginx")).toBeInTheDocument();
    expect(screen.getByText("Hostinger")).toBeInTheDocument();
  });

  it("affiche les chips de la stack Auth", () => {
    renderProjects();
    expect(screen.getByText("Angular")).toBeInTheDocument();
    expect(screen.getByText("NestJS")).toBeInTheDocument();
    expect(screen.getByText("JWT")).toBeInTheDocument();
  });

  // ── Badge WIP ──

  it("affiche le badge 'En cours' sur AeroTwin", () => {
    renderProjects();
    expect(screen.getByText("En cours")).toBeInTheDocument();
  });

  // ── Liens ──

  it("contient un lien GitHub pour AeroTwin", () => {
    renderProjects();
    const ghLink = document.querySelector('a[href*="github.com/Willthethreat8/Data_project"]');
    expect(ghLink).toBeInTheDocument();
  });

  it("contient un lien demo pour ESIR Startup", () => {
    renderProjects();
    const demoLink = document.querySelector('a[href*="esir-startup.wajrock.me"]');
    expect(demoLink).toBeInTheDocument();
  });

  // ── Dates ──

  it("affiche les années des projets", () => {
    renderProjects();
    expect(screen.getByText("2026")).toBeInTheDocument();
    expect(screen.getByText("2025")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
  });
});

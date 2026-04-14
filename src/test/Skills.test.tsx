import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { motionMock } from "./helpers";

vi.mock("motion/react", () => motionMock);

import { Skills } from "../app/components/Skills";

function renderSkills() {
  return render(<Skills />);
}

describe("Skills – Compétences techniques", () => {
  // ── Titres ──

  it("affiche le titre de la page", () => {
    renderSkills();
    expect(screen.getByText("Compétences Techniques")).toBeInTheDocument();
  });

  it("affiche la description", () => {
    renderSkills();
    expect(screen.getByText(/compétences acquises/i)).toBeInTheDocument();
  });

  // ── 8 catégories ──

  it("affiche les 8 catégories de compétences", () => {
    renderSkills();
    const categories = [
      "Langages de Programmation",
      "Frameworks & Librairies",
      "Data Engineering",
      "Intelligence Artificielle",
      "Business Analysis & Méthodologies",
      "DevOps & Cloud",
      "Outils & Collaboration",
      "Réseaux & Conformité",
    ];
    for (const cat of categories) {
      expect(screen.getByText(cat)).toBeInTheDocument();
    }
  });

  // ── Skills spécifiques ──

  it("affiche les langages de programmation", () => {
    renderSkills();
    expect(screen.getByText(/python/i)).toBeInTheDocument();
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getByText("SQL")).toBeInTheDocument();
    expect(screen.getByText("Bash")).toBeInTheDocument();
  });

  it("affiche les skills Data Engineering", () => {
    renderSkills();
    expect(screen.getByText("Apache Kafka")).toBeInTheDocument();
    expect(screen.getByText("Apache Spark")).toBeInTheDocument();
    expect(screen.getByText("PostGIS")).toBeInTheDocument();
    expect(screen.getByText("ETL / ELT")).toBeInTheDocument();
  });

  it("affiche les skills IA", () => {
    renderSkills();
    expect(screen.getByText("Machine Learning")).toBeInTheDocument();
    expect(screen.getByText("IA Générative")).toBeInTheDocument();
    expect(screen.getByText("RAG")).toBeInTheDocument();
    expect(screen.getByText("LLMs")).toBeInTheDocument();
    expect(screen.getByText("Prompt Engineering")).toBeInTheDocument();
  });

  it("affiche les skills Business Analysis", () => {
    renderSkills();
    expect(screen.getByText(/agile.*scrum/i)).toBeInTheDocument();
    expect(screen.getByText("User Stories")).toBeInTheDocument();
    expect(screen.getByText("Backlog Management")).toBeInTheDocument();
  });

  it("affiche les skills DevOps", () => {
    renderSkills();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("Linux")).toBeInTheDocument();
    expect(screen.getByText("n8n")).toBeInTheDocument();
  });

  it("affiche les outils de collaboration", () => {
    renderSkills();
    expect(screen.getByText("Jira")).toBeInTheDocument();
    expect(screen.getByText("Confluence")).toBeInTheDocument();
    expect(screen.getByText("Notion")).toBeInTheDocument();
  });

  it("affiche les skills réseau et conformité", () => {
    renderSkills();
    expect(screen.getByText(/tcp\/ip/i)).toBeInTheDocument();
    expect(screen.getByText("RGPD")).toBeInTheDocument();
  });

  // ── Section apprentissage ──

  it("affiche la section En cours d'apprentissage", () => {
    renderSkills();
    expect(screen.getByText(/en cours d'apprentissage/i)).toBeInTheDocument();
  });

  it("affiche les 6 technologies en apprentissage", () => {
    renderSkills();
    const learning = [
      "Apache Airflow", "dbt", "Terraform",
      "AWS", "GitHub Actions", "Kubernetes",
    ];
    for (const tech of learning) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  // ── NLP retiré ──

  it("ne contient pas NLP (retiré)", () => {
    renderSkills();
    expect(screen.queryByText("NLP")).not.toBeInTheDocument();
  });
});

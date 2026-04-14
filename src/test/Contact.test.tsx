import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import { motionMock } from "./helpers";

// ── Mock EmailJS ──
const mockSendForm = vi.fn();
vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: (...args: unknown[]) => mockSendForm(...args),
  },
}));

vi.mock("motion/react", () => motionMock);

import { Contact } from "../app/components/Contact";

function renderContact() {
  return render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
}

describe("Contact – Formulaire EmailJS", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ── Rendu initial ──

  it("affiche le formulaire avec tous les champs", () => {
    renderContact();

    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sujet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /envoyer le message/i })).toBeInTheDocument();
  });

  it("affiche les informations de contact", () => {
    renderContact();

    expect(screen.getByText(/informations de contact/i)).toBeInTheDocument();
    expect(screen.getByText(/rennes, france/i)).toBeInTheDocument();
    expect(screen.getByText(/disponibilité/i)).toBeInTheDocument();
  });

  it("affiche le titre de la page", () => {
    renderContact();

    expect(screen.getByText(/contactez-moi/i)).toBeInTheDocument();
  });

  // ── Validation des champs ──

  it("les champs requis sont marqués comme required", () => {
    renderContact();

    expect(screen.getByLabelText(/nom complet/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/sujet/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });

  it("le champ email a le type email", () => {
    renderContact();

    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email");
  });

  // ── Saisie dans les champs ──

  it("permet de saisir dans tous les champs", async () => {
    const user = userEvent.setup();
    renderContact();

    const nameInput = screen.getByLabelText(/nom complet/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/sujet/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(nameInput, "Jean Dupont");
    await user.type(emailInput, "jean@example.com");
    await user.type(subjectInput, "Opportunité CDI");
    await user.type(messageInput, "Bonjour, je souhaite discuter.");

    expect(nameInput).toHaveValue("Jean Dupont");
    expect(emailInput).toHaveValue("jean@example.com");
    expect(subjectInput).toHaveValue("Opportunité CDI");
    expect(messageInput).toHaveValue("Bonjour, je souhaite discuter.");
  });

  // ── Envoi réussi ──

  it("envoie le formulaire via EmailJS et affiche le message de succès", async () => {
    mockSendForm.mockResolvedValueOnce({ status: 200, text: "OK" });
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/nom complet/i), "Jean Dupont");
    await user.type(screen.getByLabelText(/email/i), "jean@example.com");
    await user.type(screen.getByLabelText(/sujet/i), "Test");
    await user.type(screen.getByLabelText(/message/i), "Hello !");

    await user.click(screen.getByRole("button", { name: /envoyer le message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message envoyé/i)).toBeInTheDocument();
    });

    // Vérifie que sendForm a été appelé avec les bons env vars
    expect(mockSendForm).toHaveBeenCalledTimes(1);
    expect(mockSendForm).toHaveBeenCalledWith(
      expect.any(String), // service ID
      expect.any(String), // template ID
      expect.any(HTMLFormElement), // form ref
      expect.any(String), // public key
    );
  });

  // ── Envoi échoué ──

  it("affiche un message d'erreur si l'envoi échoue", async () => {
    mockSendForm.mockRejectedValueOnce(new Error("Network error"));
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/nom complet/i), "Jean Dupont");
    await user.type(screen.getByLabelText(/email/i), "jean@example.com");
    await user.type(screen.getByLabelText(/sujet/i), "Test");
    await user.type(screen.getByLabelText(/message/i), "Hello !");

    await user.click(screen.getByRole("button", { name: /envoyer le message/i }));

    await waitFor(() => {
      expect(screen.getByText(/erreur d'envoi/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/veuillez réessayer/i)).toBeInTheDocument();
  });

  // ── État loading ──

  it("désactive le bouton et affiche le spinner pendant l'envoi", async () => {
    // Simuler un envoi lent
    mockSendForm.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ status: 200 }), 2000))
    );
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/nom complet/i), "Jean");
    await user.type(screen.getByLabelText(/email/i), "j@e.com");
    await user.type(screen.getByLabelText(/sujet/i), "Test");
    await user.type(screen.getByLabelText(/message/i), "Msg");

    await user.click(screen.getByRole("button", { name: /envoyer le message/i }));

    // Pendant l'envoi, le bouton doit afficher "Envoi en cours..."
    await waitFor(() => {
      expect(screen.getByText(/envoi en cours/i)).toBeInTheDocument();
    });

    const button = screen.getByRole("button", { name: /envoi en cours/i });
    expect(button).toBeDisabled();
  });

  // ── Texte recherche d'emploi retiré ──

  it("ne contient plus les blocs recherche d'emploi et collaboration", () => {
    renderContact();

    expect(screen.queryByText(/recherche de stage\/emploi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/collaboration/i)).not.toBeInTheDocument();
  });
});

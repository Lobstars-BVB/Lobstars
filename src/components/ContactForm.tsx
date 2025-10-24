import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { FormEvent } from "react";

enum State {
  Input = "Input",
  Sending = "Sending",
  Sent = "Sent",
  Error = "Error",
}

export default function ContactForm() {
  const [state, setState] = useState(State.Input);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (state !== State.Input) return;

    setState(State.Sending);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    try {
      if (formJson.company) {
        setState(State.Sent);
        return;
      }
      await emailjs.send(
        "default_service",
        "template_aillhuc",
        {
          from_name: formJson.name,
          from_email: formJson.email,
          message: formJson.message,
        },
        { publicKey: "YGL6jQ4ZZE8y_Ihth" },
      );
      setState(State.Sent);
    } catch (_err) {
      setState(State.Error);
    }
  }

  return (
    <>
      <p className="text-l text-main mb-10 text-center font-medium">
        Interested in joining a training? Other questions? Let us know!
      </p>
      {state === State.Sent && (
        <p className="text-l mb-10 text-center">Thanks for contacting us!</p>
      )}
      {state === State.Error && (
        <div className="text-l mb-10 text-center">
          <p>Something went wrong.</p>
          <p>
            Send us an email at{" "}
            <span className="font-bold text-neon-pink-dark">
              lobstars.bvb@<span className="display: none;">ignore-</span>
              gmail.com
            </span>
          </p>
        </div>
      )}
      {(state === State.Input || state === State.Sending) && (
        <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-bold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-bold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm font-bold">
              Message:
            </label>
            <textarea
              name="message"
              required
              className="h-32 w-full rounded-md border border-gray-300 px-4 py-2"
            ></textarea>
          </div>

          <div className="hidden">
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-bold"
              aria-hidden="true"
            >
              Company:
            </label>
            <input
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="w-full rounded-md border border-gray-300 px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="rounded bg-neon-pink-dark px-4 py-2 font-bold text-neon-pink-light hover:opacity-80"
            disabled={state === State.Sending}
          >
            {state === State.Sending ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </>
  );
}

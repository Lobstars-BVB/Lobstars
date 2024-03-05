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
    } catch (e) {
      setState(State.Error);
      console.log(e);
    }
  }

  return (
    <>
      <p className="text-l mb-10 text-center text-main">
        Interested in joining a training? Other questions? Let us know!
      </p>
      {state === State.Sent && (
        <p className="text-l mb-10 text-center">Thanks for contacting us!</p>
      )}
      {state === State.Error && (
        <p className="text-l mb-10 text-center">Something went wrong.</p>
      )}
      {(state === State.Input || state === State.Sending) && (
        <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block">
              Name:
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="mb-2 block">
              Email:
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="mb-2 block">
              Message:
              <textarea
                name="message"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            disabled={state === State.Sending}
          >
            {state === State.Sending ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </>
  );
}

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <>
      <p className="text-l mb-10 text-center text-main">
        Interested in joining a training? Other questions? Let us know!
      </p>
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
        >
          Submit
        </button>
      </form>
    </>
  );
}

import { useState } from "react";
import { site } from "../config.js";

const jobTypes = [
  "Pressure Washing",
  "Painting",
  "Faucet, toilet, etc.",
  "Electrical",
  "Smart home device",
  "Carpentry",
  "Miscellaneous work",
  "Something else",
];

const timings = ["ASAP", "This week", "Next couple of weeks", "No rush"];

export default function RequestForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never see or fill this field.
    if (data.get("website")) {
      setStatus("sent");
      return;
    }
    data.delete("website");

    if (!site.form.endpoint) {
      setStatus("error");
      setError(
        `The form isn't connected yet. Email ${site.email} instead.`
      );
      return;
    }

    if (site.form.accessKey) data.append("access_key", site.form.accessKey);
    data.append("subject", `Job request: ${data.get("jobType")} in ${data.get("city")}`);
    data.append("from_name", "travislightbourne.com");

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(site.form.endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        `Your request didn't send. Try again, or email ${site.email} directly.`
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Request sent</h3>
        <p>
          Thanks. I'll reply within one business day, usually with a few
          questions or a request for photos, then a written quote.
        </p>
        <button type="button" className="btn btn-quiet" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="request-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field-row">
        <label className="field">
          <span>Your name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span>City</span>
          <select name="city" required defaultValue="">
            <option value="" disabled>Choose a city</option>
            {site.cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
            <option>Somewhere else nearby</option>
          </select>
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>
            Phone <em>(optional)</em>
          </span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>What kind of job?</span>
          <select name="jobType" required defaultValue="">
            <option value="" disabled>Choose one</option>
            {jobTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
            {site.offerComputerHelp && <option>Computer help</option>}
          </select>
        </label>
        <label className="field">
          <span>When do you need it?</span>
          <select name="timing" defaultValue={timings[1]}>
            {timings.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>Describe the job(s)</span>
        <textarea
          name="description"
          rows={5}
          required
          placeholder="For example: the kitchen faucet drips and the handle is loose. I'd like to replace it with one I already bought."
        />
      </label>

      <label className="hp" aria-hidden="true">
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-foot">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending request…" : "Send request"}
        </button>
        <p className="form-note">
          I only use your details to reply about this job. Photos help; I'll
          ask for them when I reply.
        </p>
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">{error}</p>
      )}
    </form>
  );
}

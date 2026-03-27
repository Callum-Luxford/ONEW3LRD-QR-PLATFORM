import { useState } from "react";
import { submitJoinForm } from "../services/joinService";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function JoinForm() {
  const [formValues, setFormValues] = useState(initialState);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      loading: true,
      success: false,
      message: "Prototype only. Submission is not connected yet.",
    });

    try {
      const response = await submitJoinForm(formValues);

      setStatus({
        loading: false,
        success: response.success,
        message: response.message,
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: "Something went wrong while simulating the submission.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <label htmlFor="fullName">Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formValues.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="phone">Phone (Optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formValues.message}
          onChange={handleChange}
        />
      </div>

      <button
        className="contact-form__submit"
        type="submit"
        disabled={status.loading}
      >
        {status.loading ? "Submitting..." : "Submit"}
      </button>

      {status.message ? (
        <p
          className={`contact-form__status ${status.success ? "is-success" : ""}`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

export default JoinForm;

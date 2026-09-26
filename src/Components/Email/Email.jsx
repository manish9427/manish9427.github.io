import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";

export const Email = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_f7bolye",
        "template_xmy0gs6",
        form.current,
        "rN84Sn7s4PZHN3r8R"
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        required
      />

      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
      />

      <textarea
        name="message"
        placeholder="Enter Your Message"
        rows="6"
        required
      />

      <button
        type="submit"
        className="input_btn"
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="email-success">
          Message sent successfully! Thank you for reaching out.
        </p>
      )}

      {status === "error" && (
        <p className="email-error">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};

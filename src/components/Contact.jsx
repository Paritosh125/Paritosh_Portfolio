import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9pkbfo",     // 🔁 Replace with your service ID
        "template_cmv5cpj",    // 🔁 Replace with your template ID
        form.current,
        "7vRmbr5FeokjdzvLT" // 🔁 Replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 bg-[#1a1a1a] p-8 rounded-xl shadow-md">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-primary"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-primary"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-primary"
          ></textarea>

          <button
            type="submit"
            className="bg-primary text-black px-6 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

          {done && <p className="text-green-400 text-sm">Message sent successfully!</p>}
          {error && <p className="text-red-400 text-sm">Oops! Something went wrong.</p>}
        </form>
      </section>
    </section>

  );
};

export default Contact;

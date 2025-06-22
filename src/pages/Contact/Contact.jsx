import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          e.target.reset();
        },
        () => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-4 py-20 md:px-2 text-gray-500"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center text-lime-500 font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-500 text-center mb-10">
          Let's connect! Whether for a project, partnership, or just to say hello, I'd love to hear from you. Use the form below and I'll get back to you soon.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-lime-100 border border-gray-600 outline-none text-gray-700"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-lime-100 border border-gray-600 outline-none text-gray-700"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-lime-100 border border-gray-600 outline-none text-gray-700"
              placeholder="Enter the Message"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-l hover:from-lime-200 hover:via-lime-300 hover:to-lime-400 border-2 border-lime-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

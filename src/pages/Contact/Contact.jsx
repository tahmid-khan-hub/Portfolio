import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
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
            title: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <section id="contact" className="px-4 py-20 md:px-2 text-gray-500">
      <h2 className="text-4xl text-center text-lime-500 font-bold mb-6">
        Get in Touch
      </h2>
      <p className="text-center mb-10">
        Let's connect! Whether for a project, partnership, or just to say hello,
        I'd love to hear from you.
      </p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="lg:w-1/2 bg-lime-100 p-8 rounded-2xl border border-gray-300 shadow">
          <h3 className="text-2xl font-semibold mb-12 text-lime-600">
            Contact Information
          </h3>

          <div className="flex items-center gap-4 mb-5">
            <FaEnvelope className="text-lime-500 text-xl" />
            <a href="tahmidkhan0011@gmail.com" className="hover:underline">
              tahmidkhan0011@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <FaPhoneAlt className="text-lime-500 text-xl" />
            <a href="tel:+8801610627131" className="hover:underline">
              +880 1610627131
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-lime-500 text-xl" />
            <a
              href="https://wa.me/8801610627131"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-lime-100 border border-gray-300 outline-none text-gray-700"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-lime-100 border border-gray-300 outline-none text-gray-700"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-lg bg-lime-100 border border-gray-300 outline-none text-gray-700"
                placeholder="Enter the Message"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:from-lime-300 hover:to-lime-500 border-2 border-lime-300"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

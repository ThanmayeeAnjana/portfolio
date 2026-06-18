import { useRef } from "react";
import emailjs from "@emailjs/browser";
import portfolioData from "../data/portfolioData";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p30iw6e",
        "template_5o49cia",
        form.current,
        "THf-Yx70xMrZN-x2d"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">
        Contact Me
      </h2>

      <div className="relative">
        {/* Pink Glow */}
        <div
          className="
          absolute
          -inset-4
          bg-pink-500/30
          blur-[80px]
          rounded-3xl
        "
        />

        <div
          className="
          relative
          bg-[#111111]
          border
          border-pink-500/30
          rounded-3xl
          p-10
          hover:border-pink-400
          hover:shadow-[0_0_50px_rgba(236,72,153,0.8)]
          transition-all
          duration-500
        "
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-zinc-900
              border
              border-pink-500/20
              focus:border-pink-500
              outline-none
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-zinc-900
              border
              border-pink-500/20
              focus:border-pink-500
              outline-none
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-zinc-900
              border
              border-pink-500/20
              focus:border-pink-500
              outline-none
              "
            />

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                className="
                px-8
                py-3
                rounded-xl
                bg-pink-500
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]
                transition-all
                duration-300
                "
              >
                Send Message
              </button>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="
                px-6
                py-3
                rounded-xl
                border
                border-pink-500
                hover:bg-pink-500
                transition-all
                duration-300
                "
              >
                GitHub
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                px-6
                py-3
                rounded-xl
                border
                border-pink-500
                hover:bg-pink-500
                transition-all
                duration-300
                "
              >
                LinkedIn
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
"use client";
import {motion} from "framer-motion";
import {useRef} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactPage = () => {
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        toast.success("Your message has been sent successfully!");
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
      });
  };

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center text-center justify-center text-4xl md:text-6xl text-violet-600 uppercase font-bold">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-[85%] lg:h-full lg:w-1/2 bg-blue-100 shadow-md rounded-xl text-xl flex flex-col gap-8 justify-center p-4 lg:p-24"
        >
          <span>Your Message</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            required
          />
          <span>Your email address is:</span>
          <input
            required
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Your Contact No :</span>
          <input
            required
            name="user_contact"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <button className="bg-violet-400 rounded font-semibold text-neutral-800 p-4">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;

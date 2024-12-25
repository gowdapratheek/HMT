import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";


function ContactUs() {
  window.scrollTo(0, 0);
  const form = useRef();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVIC,
        import.meta.env.VITE_TEMP,
        form.current,
        {
          publicKey: import.meta.env.VITE_ID,
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const [status, setStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-[10vh]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className=" rounded-lg flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 lg:p-6 gap-8 ">
        <div className="flex-1 p-6 sm:p-8 font-pop">
          <h2 className="text-3xl font-bold mb-6 text-center underline font-roboto-slab">
            Connect With Us
          </h2>
          <p className="text-gray-500 mb-8 text-center font-pop">
            Complete the form, and we will get back to you
          </p>
          <form
            className="space-y-6 md:w-[50%] text-lg mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none px-2 py-2"
              placeholder="Your Name*"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none px-2 py-2"
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none px-2 py-2"
              placeholder="Your Phone Number*"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none px-2 py-2"
              placeholder="Describe your requirements*"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-900  rounded py-3 transition duration-300 "
            >
              Submit
            </button>
            {status && (
              <p className="text-center mt-4 text-gray-600 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className=" w-[95vw] flex flex-col items-center justify-center mb-8">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold underline font-roboto-slab">
          Locate Us
        </h2>
      </div>
      <button
        type="submit"
        className="p-6 bg-black text-white hover:bg-gray-900  rounded py-3 transition duration-300 w-fit mb-8 "
      >
        <a href="https://maps.app.goo.gl/3c2SxUsXLWdDjqFo9" target="_blank">Click here to view on maps</a>
      </button>
    </div>
  );
}

export default ContactUs;

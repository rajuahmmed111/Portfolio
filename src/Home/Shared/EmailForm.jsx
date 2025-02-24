import { useState } from "react";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" my-5 py-10 px-8 mr-5 md:mr-20 bg-white/15 rounded-xl w-full">
      <h2 className="text-2xl text-emerald-400 font-bold mb-6 text-center">
        Contact Me
      </h2>
      <form
        action="https://formsubmit.co/ahraju2003@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border text-black bg-gray-200 border-gray-800 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border text-black border-gray-800 bg-gray-200 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full p-2 border text-black border-gray-800 bg-gray-200 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white text-lg font-semibold p-2 rounded-md hover:bg-emerald-400 btn"
        >
          Send Message
        </button>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="YOUR_REDIRECT_URL" />
      </form>
    </div>
  );
};

export default EmailForm;

import { useState } from "react";
import "./component.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import axiosInstance from "@/Api/AxiosInstance";

const ContactForm = () => {
  const { language } = useChangeLanguageContext();
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
    number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axiosInstance.post("/query", formData);

      toast.success(
        language === "nl"
          ? "Formulier succesvol verzonden!"
          : "Message sent successfully!"
      );

      setFormData({
        name: "",
        mail: "",
        message: "",
        number: "",
      });
    } catch (error) {
      const message =
        (error as any)?.response?.data?.error ||
        (error as Error).message ||
        "Er is een onverwachte fout opgetreden.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center lg:min-h-screen bg-gray-100 p-4">
      <ToastContainer />
      <div className="lg:w-full max-w-md bg-white rounded-[1rem] shadow-md p-8 border-none 2xl:max-w-[500px]">
        <h2 className="text-2xl font-bold text-left mb-6 text-black">
          {language === "nl" ? "Vraag informatie aan" : "Request information"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-[16.73px] font-normal montserrat text-black">
              {language === "nl" ? "Naam" : "Name"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={language === "nl" ? "Vul uw naam in" : "Enter your name"}
              className="w-full px-3 py-3 border border-gray-300 rounded-md outline-none text-black bg-[#F0F0F0]"
              required
            />
          </div>

          <div>
            <label htmlFor="mail" className="text-[16.73px] font-normal montserrat text-black">
              E-Mail
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              placeholder={language === "nl" ? "Vul uw e-mailadres in" : "Enter your email"}
              className="w-full px-3 py-3 border border-gray-300 rounded-md outline-none text-black bg-[#F0F0F0]"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="text-[16.73px] font-normal montserrat text-black">
              {language === "nl" ? "Mobiel" : "Mobile Number"}
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder={language === "nl" ? "Vul uw mobiele nummer in" : "Enter your number"}
              className="w-full px-3 py-3 border border-gray-300 rounded-md outline-none text-black bg-[#F0F0F0]"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-[16.73px] font-normal montserrat text-black">
              {language === "nl" ? "Bericht" : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === "nl" ? "Laat uw bericht achter" : "Enter your message"}
              rows={4}
              className="w-full px-3 py-3 border border-gray-300 rounded-md outline-none text-black bg-[#F0F0F0]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#192227] text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            {isSubmitting
              ? language === "nl"
                ? "Bezig met verzenden..."
                : "Submitting..."
              : language === "nl"
              ? "Verzend uw bericht"
              : "Send Your Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

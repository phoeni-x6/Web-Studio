
"use client";

import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const resetCaptcha = () => {
    setCaptchaToken("");
    setCaptchaKey((previous) => previous + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      setStatus("captcha");
      return;
    }

    setStatus("loading");

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY
      );

      formData.append(
        "subject",
        `New Website Enquiry from ${form.name}`
      );

      formData.append("from_name", "Web Studio Website");

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Send the hCaptcha token for server-side verification.
      formData.append("h-captcha-response", captchaToken);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });

        resetCaptcha();
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
        resetCaptcha();
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      resetCaptcha();
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-coral focus:bg-white/[0.08]";

  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden bg-charcoal py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-white/[0.05]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-coral">
            / Let&apos;s work together
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Have an idea?
            <br />
            Let&apos;s make it{" "}
            <span className="text-coral">happen.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/50">
            Tell us about your project. Whether you need a simple
            website or a complete digital solution, we&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div>
            <h3 className="font-heading text-2xl font-bold">
              Let&apos;s start a conversation.
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
              Have questions about our packages or need a custom
              solution? Get in touch and let&apos;s discuss your ideas.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <Mail size={21} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Email us
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    YOUR_EMAIL_ADDRESS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <Phone size={21} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Call us
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    YOUR_PHONE_NUMBER
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <MapPin size={21} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Location
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <MessageCircle size={25} className="text-coral" />

              <h4 className="mt-4 font-heading text-lg font-bold">
                Not sure what you need?
              </h4>

              <p className="mt-2 text-sm leading-7 text-white/50">
                No problem. Tell us your idea and we&apos;ll help you
                find the right solution.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-9"
          >
            <h3 className="font-heading text-2xl font-bold">
              Tell us about your project.
            </h3>

            <p className="mt-2 text-sm text-white/40">
              Fill in the details below and we&apos;ll get back to you.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-white/60">
                  Your name *
                </label>

                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-white/60">
                  Email address *
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-white/60">
                  Phone number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+94 XX XXX XXXX"
                  className={inputClass}
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-white/60">
                  Service required *
                </label>

                <select
                  required
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" className="bg-charcoal">
                    Select a service
                  </option>

                  <option value="Essential" className="bg-charcoal">
                    Essential Website
                  </option>

                  <option value="Business Pro" className="bg-charcoal">
                    Business Pro
                  </option>

                  <option value="Business Elite" className="bg-charcoal">
                    Business Elite
                  </option>

                  <option value="Custom Plan" className="bg-charcoal">
                    Custom Plan
                  </option>

                  <option value="Other" className="bg-charcoal">
                    Other / Not sure
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-white/60">
                  Estimated budget
                </label>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" className="bg-charcoal">
                    Select your budget
                  </option>

                  <option value="Under LKR 50,000" className="bg-charcoal">
                    Under LKR 50,000
                  </option>

                  <option value="LKR 50,000 - 100,000" className="bg-charcoal">
                    LKR 50,000 – 100,000
                  </option>

                  <option value="LKR 100,000 - 200,000" className="bg-charcoal">
                    LKR 100,000 – 200,000
                  </option>

                  <option value="Above LKR 200,000" className="bg-charcoal">
                    Above LKR 200,000
                  </option>

                  <option value="Not sure yet" className="bg-charcoal">
                    Not sure yet
                  </option>
                </select>
              </div>

              {/* Project details */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-white/60">
                  Tell us about your project *
                </label>

                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you have in mind..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* hCaptcha */}
            <div className="mt-7 overflow-hidden">
              <HCaptcha
                key={captchaKey}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={(token) => {
                  setCaptchaToken(token);
                  setStatus("idle");
                }}
                onExpire={() => {
                  setCaptchaToken("");
                }}
                onError={() => {
                  setCaptchaToken("");
                  setStatus("captcha-error");
                }}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-coral px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? "Sending..."
                : "Send Project Enquiry"}

              <Send
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* Feedback messages */}
            {status === "success" && (
              <p
                role="status"
                className="mt-4 text-center text-sm text-green-400"
              >
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="mt-4 text-center text-sm text-red-400"
              >
                Something went wrong. Please try again.
              </p>
            )}

            {status === "captcha" && (
              <p
                role="alert"
                className="mt-4 text-center text-sm text-yellow-400"
              >
                Please complete the CAPTCHA before submitting.
              </p>
            )}

            {status === "captcha-error" && (
              <p
                role="alert"
                className="mt-4 text-center text-sm text-red-400"
              >
                CAPTCHA could not load. Please refresh and try again.
              </p>
            )}

            <p className="mt-4 text-center text-xs text-white/30">
              Your enquiry will be delivered directly to our email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

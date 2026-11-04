
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  UsersRound,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Packages", href: "#packages" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Business Websites",
  "E-commerce Websites",
  "Custom Web Development",
  "Website Maintenance",
];

export default function Footer() {
  return (
    <footer className="footer-section bg-[#111315] text-white">
      <div className="container-custom">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-10 lg:py-20">

          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral font-heading text-lg font-bold text-white">
                W.
              </span>

              <span className="font-heading text-xl font-bold">
                web<span className="text-coral">studio.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              We design and develop modern digital experiences
              that help businesses build their online presence
              and grow with confidence.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="footer-social"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="footer-social"
              >
                <UsersRound size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <BriefcaseBusiness size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer-heading">Explore</h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="footer-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">What we do</h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-link">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">Get in touch</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={17} className="mt-1 shrink-0 text-coral" />
                <span className="text-sm leading-6 text-white/50">
                  YOUR_EMAIL_ADDRESS
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={17} className="mt-1 shrink-0 text-coral" />
                <span className="text-sm leading-6 text-white/50">
                  YOUR_PHONE_NUMBER
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-coral" />
                <span className="text-sm leading-6 text-white/50">
                  Sri Lanka
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-colors hover:text-white"
            >
              Start a project
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col justify-between gap-4 py-7 text-xs text-white/35 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Web Studio. All rights reserved.
          </p>

          <p className="font-heading font-medium tracking-wider">
            BUILD. <span className="text-coral">GROW.</span> SUCCEED.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-coral"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

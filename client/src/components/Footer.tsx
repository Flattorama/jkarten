import { Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@awzventures.com", label: "Email" },
];

const contactLinks = ["Speaking Inquiries", "Press Kit", "Investment Deck"];
const offices = ["Toronto, Canada", "Tel Aviv, Israel", "New York, USA"];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-card border-t border-white/5 pt-20 pb-10"
      data-testid="section-footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="font-serif text-3xl text-white mb-6">
              Jonathan Karten
            </h2>
            <p className="text-slate-400 max-w-sm mb-8">
              Engineering the future of global security. Principal at Awz
              Ventures.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {contactLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition-colors cursor-pointer"
                  data-testid={`link-contact-${idx}`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Offices</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {offices.map((office, idx) => (
                <li key={idx} data-testid={`text-office-${idx}`}>
                  {office}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p data-testid="text-copyright">
            &copy; 2025 Jonathan Karten. All Rights Reserved.
          </p>
          <p data-testid="text-trademark">Awz Ventures &trade;</p>
        </div>
      </div>
    </footer>
  );
}

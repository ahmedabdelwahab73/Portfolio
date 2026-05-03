"use client";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    href: "https://github.com/ahmedabdelwahab73",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ahmed-allam-a425a025a",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/+201150079720",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmedabdelwahab7356819@gmail.com",
    icon: MdEmail,
    label: "Email",
  },
];

const Footer = () => (
  <footer className="relative py-12 border-t overflow-hidden" style={{ borderColor: 'var(--borderColor)' }}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
      <div className="flex gap-6 mb-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noreferrer"
            aria-label={link.label}
            className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 border"
            style={{ background: 'var(--bgSecondary)', borderColor: 'var(--borderColor)', color: 'var(--textMuted)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--mainColor)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bgSecondary)';
              e.currentTarget.style.color = 'var(--textMuted)';
              e.currentTarget.style.borderColor = 'var(--borderColor)';
            }}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      
      <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent to-transparent mb-8" style={{ background: 'linear-gradient(90deg, transparent, var(--borderColor), transparent)' }} />
      
      <p className="text-sm font-bold mb-2" style={{ color: 'var(--textMuted)' }}>
        Designed & Built by <span style={{ color: 'var(--mainColor)' }}>Ahmed Ibrahim</span>
      </p>
      <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--textMuted)', opacity: 0.6 }}>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;

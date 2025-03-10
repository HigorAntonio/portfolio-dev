import { useState, useContext } from "react";
import {
  PiLinkedinLogo,
  PiInstagramLogo,
  PiGithubLogo,
  PiEnvelopeSimple,
} from "react-icons/pi";

import { ThemeContext } from "../../context/ThemeContext";
import SocialButton from "../SocialButton";

import "./Contact.css";

function Contact() {
  const { theme } = useContext(ThemeContext);

  const [socialLinks] = useState([
    { href: "#", icon: PiLinkedinLogo, text: "Linkedin" },
    { href: "#", icon: PiInstagramLogo, text: "Instagram" },
    { href: "#", icon: PiGithubLogo, text: "GitHub" },
    { href: "#", icon: PiEnvelopeSimple, text: "E-mail" },
  ]);

  return (
    <section className="contact" data-theme={theme}>
      <h2 className="header">
        <span className="text-small text-purple">Contato</span>
        <span className="text-large" data-theme={theme}>
          Gostou do meu trabalho?
        </span>
        <span className="text-very-small" data-theme={theme}>
          Entre em contato ou acompanhe as minhas redes sociais!
        </span>
      </h2>
      <main className="links">
        {socialLinks.map((socialLink, index) => (
          <SocialButton {...socialLink} key={index} />
        ))}
      </main>
    </section>
  );
}

export default Contact;

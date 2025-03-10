import { useContext, useState } from "react";
import { PiDevices, PiHardDrives, PiInfinity } from "react-icons/pi";

import { ThemeContext } from "../../context/ThemeContext";
import ServiceCard from "../ServiceCard";

import "./Services.css";

function Services() {
  const { theme } = useContext(ThemeContext);

  const [services] = useState([
    {
      icon: PiDevices,
      title: "Websites e Aplicativos",
      description: "Desenvolvimento de interfaces",
      colorClassName: "icon-purple",
    },
    {
      icon: PiHardDrives,
      title: "API e banco de dados",
      description: "Criação de serviços do sistema",
      colorClassName: "icon-yellow",
    },
    {
      icon: PiInfinity,
      title: "DevOps",
      description: "Gestão e infraestrutura da aplicação",
      colorClassName: "icon-green",
    },
  ]);

  return (
    <section className="services" data-theme={theme}>
      <h2 className="header">
        <span className="text-small text-red">Meus serviços</span>
        <span className="text-large" data-theme={theme}>
          Como posso ajudar o seu negócio
        </span>
      </h2>
      <main className="grid">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </main>
    </section>
  );
}

export default Services;

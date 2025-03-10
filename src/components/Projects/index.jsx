import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import ProjectCard from "../ProjectCard";

import travelgramImg from "../../assets/thumbnails/Thumbnail_Project-01.png";
import techNewsImg from "../../assets/thumbnails/Thumbnail_Project-02.png";
import paginaDeReceitaImg from "../../assets/thumbnails/Thumbnail_Project-03.png";
import zigenImg from "../../assets/thumbnails/Thumbnail_Project-04.png";
import refundImg from "../../assets/thumbnails/Thumbnail_Project-05.png";
import paginaDeTurismoImg from "../../assets/thumbnails/Thumbnail_Project-06.png";

import "./Projects.css";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const [projects] = useState([
    {
      thumb: travelgramImg,
      thumbAlt: "Thumbnail do projeto 1",
      title: "Travelgram",
      description:
        "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo",
    },
    {
      thumb: techNewsImg,
      thumbAlt: "Thumbnail do projeto 2",
      title: "Tech News",
      description:
        "Homepage de um portal de notícias sobre a área de tecnologia",
    },
    {
      thumb: paginaDeReceitaImg,
      thumbAlt: "Thumbnail do projeto 3",
      title: "Página de receita",
      description: "Página com o passo a passo de uma receita para cupcakes",
    },
    {
      thumb: zigenImg,
      thumbAlt: "Thumbnail do projeto 4",
      title: "Zingen",
      description:
        "Landing Page completa e responsiva de um aplicativo de Karaokê",
    },
    {
      thumb: refundImg,
      thumbAlt: "Thumbnail do projeto 5",
      title: "Refund",
      description: "Um sistema para pedido e acompanhamento de reembolso",
    },
    {
      thumb: paginaDeTurismoImg,
      thumbAlt: "Thumbnail do projeto 6",
      title: "Página de turismo",
      description:
        "Página com as principais informações para quem quer viajar para Busan",
    },
  ]);

  return (
    <section className="projects" id="projects" data-theme={theme}>
      <h2 className="header">
        <span className="text-small text-red">Meu Trabalho</span>
        <span className="text-large" data-theme={theme}>
          Veja os projetos em destaque
        </span>
      </h2>
      <main className="grid">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </main>
    </section>
  );
}

export default Projects;

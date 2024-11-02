import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

import {
  FaUser,
  FaUserTie,
  FaSuitcase,
  FaChartPie,
  FaGlobeAmericas,
  FaFlagCheckered,
  FaBookReader,
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaDownload,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import * as S from "./style";
import ItemJob from "../../components/ItemJob";
import ItemEducation from "../../components/ItemEducation";
import ListMakers from "../../components/ListMakers";
import ListRating from "../../components/ListRating";

import photoProfile from "../../assets/photoprofile.jpg";

export default function Main() {
  const downloadButtonRef = useRef();
  const [contact] = useState({
    phone: "+55 (19) 99384-8696",
    email: "mauromendonca.2007@gmail.com",
    linkedin: "www.linkedin.com/in/mauromendonca2007",
    github: "",
  });

  const [languages] = useState(["PORTUGUÊS", "INGLÊS", "ESPANHOL"]);
  const [hobies] = useState([
    "Casado, pai de dois filhos. Membro ativo da Igreja Batista, com interesse por esportes como basquete e futebol, leitura e música",
  ]);
  const [jobs] = useState([
    {
      id: 1,
      company: "VULKAN DO BRASIL LTDA.",
      period: "2010 - 2024",
      position: "Gestor Geral de Vendas - América Latina",
      ecosystem:
        "Empresa de origem Alemã de médio porte, fabricante de pecas para refrigeração, ar- condicionado, mineração, oil & gas e naval.",
      description:
        "Responsável pela gestão de uma carteira de R$30 milhões no segmento de refrigeração, linha branca e ar condicionado. Liderança de equipe de 8 pessoas na América do Sul. ",
      items: [
        "Crescimento superior a 15% ao ano no core business, anéis Lokring para linha branca, com atuação em clientes como Whirlpool, Electrolux, Samsung, LG, Midea, Panasonic entre outros.",
        "Introdução de produtos em serviços de pós-vendas nas principais redes autorizadas (Brastemp, Samsung, Panasonic, Daikin, LG, Valeo).",
        "Sucesso na consolidação de negócios com fornecedores asiáticos e americanos para o mercado nacional, liderando em diversos segmentos de acessórios e ferramentas de serviços de refrigeração e ar-condicionado.",
      ],
    },
    {
      id: 2,
      company: "TOYOTA MATERIAL HANDLING, BRASIL",
      period: "2007 - 2009",
      position: "Gerente de Vendas e Administração – América Latina",
      ecosystem:
        "Empresa de origem Japonesa de grande porte do segmento automotivo e fabricante de empilhadeiras industriais.",
      description:
        "Gestão comercial e pós-vendas com equipe de 30 profissionais e carteira de R$20 milhões anuais no segmento de empilhadeiras industriais.",
      items: [
        "Reestruturação da filial segundo padrões Toyota, conquistando novos clientes como GM, Honda e Lojas CEM.",
        "Implementação de processos de melhoria contínua, certificada pela sede no Japão.",
      ],
    },
    {
      id: 3,
      company: "VISANET (ATUAL CIELO), BRASIL",
      period: "2005 - 2007",
      position: "Gerente de Administração e Comércio Exterior",
      ecosystem: "",
      description:
        "Gestão da filial de Campinas, com foco em transações financeiras B2B e comércio exterior.",
      items: [
        "Crescimento do faturamento, levando a filial de 8o para 4o lugar em nível nacional em menos de 2 anos.",
      ],
    },
    {
      id: 4,
      company: "TECUMSEH DO BRASIL LTDA.",
      period: "1994 - 2005",
      position: "Gerente de Vendas – América Latina",
      ecosystem:
        "Empresa de origem Americana de grande porte, fabricante de compressores herméticos para refrigeração e ar-condicionado.",
      description:
        "Responsável por uma equipe de 10 colaboradores e uma carteira de R$100 milhões anuais em vendas de compressores herméticos para grandes clientes da América Latina.",
      items: [
        "Alcançou liderança de mercado no segmento de compressores para linha branca e refrigeração comercial.",
        "Sucesso na abertura de novos negócios com grandes players como Whirlpool, Electrolux, Midea Carrier e Bosch.",
      ],
    },
  ]);
  const [educations] = useState([
    {
      id: 1,
      university: "FG - FUNDAÇÃO GETÚLIO VARGAS",
      course: "MBA em Estratégias de Marketing",
      period: "2008",
    },
    {
      id: 2,
      university: "FDC - FUNDAÇÃO DOM CABRAL",
      course: "Mestrado em Gestão de Pessoas",
      period: "2005",
    },
    {
      id: 3,
      university: "USP - UNIVERSIDADE DE SÃO PAULO",
      course: "Engenharia Mecânica",
      period: "1994",
    },
  ]);
  const [ecosystems] = useState([
    {
      id: 1,
      name: "Gestão de CRM, P&L, CAPEX, COMEX",
      rating: 4,
    },
    {
      id: 2,
      name: "Normas de Qualidade ISO, 5S, Kanban, Lean Manufacturing",
      rating: 4,
    },
  ]);

  // Use o useRef para acessar o elemento que queremos converter em PDF
  const curriculoRef = useRef();

  const generatePDF = () => {
    if (downloadButtonRef.current) {
      console.log("xxxxxxxxx");
      downloadButtonRef.current.style.display = "none";
    }
    // Configurações para o PDF
    const options = {
      margin: 0.5,
      filename: "Curriculo.pdf",
      image: { type: "jpg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // Gera o PDF do elemento referenciado
    setTimeout(() => {
      html2pdf()
        .set(options)
        .from(curriculoRef.current)
        .save()
        .then(() => {
          // Coloque a função que você quer chamar aqui
          if (downloadButtonRef.current) {
            downloadButtonRef.current.style.display = "block";
          }
        });
    }, 500);
  };

  return (
    <S.Container>
      <S.Center ref={curriculoRef} id="curriculo">
        <S.Section1>
          <S.ImgProfile>
            <S.ContentDownload>
              <S.BtnDownload ref={downloadButtonRef} onClick={generatePDF}>
                <FaDownload />
                Baixar Curriculo em PDF
              </S.BtnDownload>
            </S.ContentDownload>
            <S.Name>MAURO MENDONÇA</S.Name>
            <S.Position>
              Liderança | Vendas B2B | Gestão de Equipes | Planejamento
              Estratégico | CRM | Business Plan
            </S.Position>
            <img src={photoProfile} alt="" />
          </S.ImgProfile>
          <S.ContentContactMeAboutMe>
            <S.ContactMe>
              <S.ContentTitle>
                <S.CircleIcon>
                  <FaUser />
                </S.CircleIcon>
                <S.Title>CONTATO</S.Title>
              </S.ContentTitle>
              {contact.phone && (
                <S.ItemContact>
                  <a href="https://whatsa.me/5519993848696/?t=Ol%C3%A1%20tudo%20bem!">
                    <FaWhatsappSquare style={{ color: "#00a884" }} />
                    {contact.phone}
                  </a>
                </S.ItemContact>
              )}
              {contact.email && (
                <S.ItemContact>
                  <MdEmail style={{ color: "#0a66c2" }} />
                  {contact.email}
                </S.ItemContact>
              )}
              {contact.linkedin && (
                <S.ItemContact>
                  <a
                    href="https://www.linkedin.com/in/mauromendonca2007/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin style={{ color: "#0a66c2" }} />
                    {contact.linkedin}
                  </a>
                </S.ItemContact>
              )}
            </S.ContactMe>

            <S.Aboutme>
              <S.ContentTitle>
                <S.CircleIcon>
                  <FaUserTie />
                </S.CircleIcon>
                <S.Title>RESUMO PROFISSIONAL</S.Title>
              </S.ContentTitle>
              <S.Info>
                Profissional com 25 anos de experiência em negócios B2B, com
                forte atuação em empresas multinacionais nos segmentos de
                refrigeração, eletrodomésticos, logística e automotivo.
                Expertise na gestão de equipes comerciais, desenvolvimento de
                mercados internacionais. Fluente em inglês e espanhol, com vasta
                experiência em negociações globais, especialmente na América
                Latina, Europa e Estados Unidos. Perfil estratégico, orientado a
                resultados, com sólida vivência em planejamento e gestão de
                vendas.
              </S.Info>
            </S.Aboutme>
          </S.ContentContactMeAboutMe>
        </S.Section1>

        <S.Section2>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaBookReader />
            </S.CircleIcon>
            <S.Title>FORMAÇÃO ACADÊMICA</S.Title>
          </S.ContentTitle>
          {educations.map((education, index) => (
            <ItemEducation key={education.id} {...education} />
          ))}
          <S.ContentTitle>
            <S.CircleIcon>
              <FaSuitcase />
            </S.CircleIcon>
            <S.Title>EXPERIÊNCIA PROFISSIONAL</S.Title>
          </S.ContentTitle>
          {jobs.map((job) => (
            <ItemJob key={job.id} {...job} />
          ))}
          <S.ContentTitle>
            <S.CircleIcon>
              <FaChartPie />
            </S.CircleIcon>
            <S.Title>HABILIDADES TÉCNICAS</S.Title>
          </S.ContentTitle>
          <ListRating items={ecosystems} />
          <S.ContentTitle>
            <S.CircleIcon>
              <FaGlobeAmericas />
            </S.CircleIcon>
            <S.Title>IDIOMAS</S.Title>
          </S.ContentTitle>
          <ListMakers items={languages} />
          <S.ContentTitle>
            <S.CircleIcon>
              <FaFlagCheckered />
            </S.CircleIcon>
            <S.Title>FAMÍLIA E INTERESSES PESSOAIS</S.Title>
          </S.ContentTitle>
          <ListMakers items={hobies} />
        </S.Section2>
      </S.Center>
    </S.Container>
  );
}

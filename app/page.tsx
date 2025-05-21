"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import TypewriterComponent from "./components/typewriter"
import Navbar from "./components/navbar"
import SkillBadge from "./components/skill-badge"
import ProjectCard from "./components/project-card"
import ContactForm from "./components/contact-form"
import { TechIcons } from "./components/tech-icons"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-20">
        <div className="flex-1 space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            <TypewriterComponent />
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Estudante de Sistemas para Internet e entusiasta de tecnologia
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/LuanLimaT"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/luan-lima-6512151b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:luan.limatavares@gmail.com"
              className="p-2 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50">
            <Image
              src="/profile.png"
              alt="Luan Lima Tavares"
              fill
              className="object-cover object-center scale-110"
              priority
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center mb-10">
        <div className="scroll-down text-white">
          <ArrowDown size={32} />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text">Quem sou eu?</h2>
          <div className="gradient-border p-6 md:p-8">
            <p className="text-lg leading-relaxed">
              Olá, sou um jovem de 23 anos apaixonado por tecnologia. Desde 2020, estou cursando Sistemas para Internet
              na faculdade, uma área que me fascina profundamente. Minha jornada acadêmica é complementada por diversos
              cursos externos que faço continuamente para me aperfeiçoar e me manter atualizado com as inovações do
              setor.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Minha dedicação ao aprendizado e ao desenvolvimento profissional reflete meu compromisso em me tornar um
              especialista na área de tecnologia. Estou sempre em busca de novos conhecimentos e desafios que possam
              aprimorar minhas habilidades e contribuir para meu crescimento pessoal e profissional. Acredito que a
              combinação de teoria e prática é essencial para alcançar excelência e inovação no campo da tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-10 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text">Habilidades & Tecnologias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <SkillBadge name="Python" icon={TechIcons.Python} />
            <SkillBadge name="JavaScript" icon={TechIcons.JavaScript} />
            <SkillBadge name="React" icon={TechIcons.React} />
            <SkillBadge name="SQL Server" icon={TechIcons.SQLServer} />
            <SkillBadge name="Docker" icon={TechIcons.Docker} />
            <SkillBadge name="HTML5" icon={TechIcons.HTML5} />
            <SkillBadge name="Java" icon={TechIcons.Java} />
            <SkillBadge name="Git" icon={TechIcons.Git} />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 md:px-10 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text">Formação</h2>

          <div className="space-y-8">
            <div className="gradient-border p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Sistemas para Internet</h3>
                <span className="text-purple-400">2020 - 2025</span>
              </div>
              <p className="text-gray-300">IFTO - Instituto Federal do Tocantins</p>
            </div>

            <div className="gradient-border p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Python 3 do básico ao avançado - com projetos reais</h3>
                <span className="text-purple-400">2023</span>
              </div>
              <p className="text-gray-300">UDEMY</p>
            </div>

            <div className="gradient-border p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">HTML5 Completo</h3>
                <span className="text-purple-400">2023</span>
              </div>
              <p className="text-gray-300">UDEMY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text">
            Projetos Pessoais
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Aplicativo de Clima"
              description="Aplicativo de previsão do tempo desenvolvido em Python utilizando a biblioteca Tkinter para a interface gráfica e a API OpenWeatherMap para obter dados meteorológicos em tempo real."
              technologies={["Python", "Tkinter", "API"]}
              githubUrl="https://github.com/LuanLimaT/Aplicativo-de-Clima-"
              imageSrc="/images/serdigital.png"
            />

            <ProjectCard
              title="Sistema Financeiro"
              description="Aplicação web para controle financeiro pessoal desenvolvida com React, permitindo o registro de receitas e despesas, categorização e visualização de relatórios."
              technologies={["React", "JavaScript", "TypeScript"]}
              githubUrl="https://github.com/LuanLimaT/finance-system"
              imageSrc="/images/finances.png"
            />

            <ProjectCard
              title="TodoList React"
              description="Aplicativo de lista de tarefas desenvolvido com React, permitindo adicionar, remover e marcar tarefas como concluídas, com armazenamento local."
              technologies={["React", "JavaScript", "CSS"]}
              githubUrl="https://github.com/LuanLimaT/TodoListReact"
              imageSrc="/images/todo-react.png"
            />

            <ProjectCard
              title="Sistema de Gestão de Galpão"
              description="Sistema para gerenciamento de estoque e controle de entrada e saída de produtos em um galpão, desenvolvido em Python."
              technologies={["Java", "SQL", "POO"]}
              githubUrl="https://github.com/LuanLimaT/Galpao"
              imageSrc="/images/galpao.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-10 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text">Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gradient-border p-6">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-400" />
                  <a href="mailto:luan.limatavares@gmail.com" className="hover:text-purple-400 transition-colors">
                    luan.limatavares@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Linkedin className="text-purple-400" />
                  <a
                    href="https://www.linkedin.com/in/luan-lima-6512151b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/luan-lima-6512151b7
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Github className="text-purple-400" />
                  <a
                    href="https://github.com/LuanLimaT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    github.com/LuanLimaT
                  </a>
                </div>
              </div>
            </div>

            <ContactForm email="luan.limatavares@gmail.com" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-purple-800">
        <p>© {new Date().getFullYear()} Luan Lima Tavares. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

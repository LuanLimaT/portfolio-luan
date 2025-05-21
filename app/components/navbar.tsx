"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {"<Luan/>"}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-purple-900/95 z-40 md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col space-y-6 text-center">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
              Habilidades
            </MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>
              Experiência
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projetos
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contato
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-white hover:text-purple-400 transition-colors">
      {children}
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white text-2xl font-semibold hover:text-purple-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  )
}

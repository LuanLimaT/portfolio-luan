"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send } from "lucide-react"

interface ContactFormProps {
  email: string
}

export default function ContactForm({ email }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Carregar o script do EmailJS
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // @ts-ignore
      window.emailjs.init("4tRsronpOUMpTitfS") // Sua Public Key do EmailJS
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // @ts-ignore
      const response = await window.emailjs.send(
        "service_hj44aw9", // Service ID
        "template_oquonxh", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: email,
        },
      )

      if (response.status === 200) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="gradient-border p-6">
      <h3 className="text-xl font-bold mb-4">Envie uma mensagem</h3>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-md text-green-300">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-md text-red-300">
          Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou envie diretamente para o email.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-purple-900/30 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-purple-900/30 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 bg-purple-900/30 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md font-medium flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Enviando...</span>
          ) : (
            <>
              <span>Enviar mensagem</span>
              <Send size={18} />
            </>
          )}
        </button>

        <p className="text-sm text-gray-400 text-center mt-4">
          Ou envie um email diretamente para{" "}
          <a href={`mailto:${email}`} className="text-purple-400 hover:underline">
            {email}
          </a>
        </p>
      </form>
    </div>
  )
}

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, to } = body

    // Integração com EmailJS
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "YOUR_SERVICE_ID", // Substitua pelo seu Service ID do EmailJS
        template_id: "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID do EmailJS
        user_id: "YOUR_PUBLIC_KEY", // Substitua pela sua Public Key do EmailJS
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          to_email: to,
        },
      }),
    })

    if (!response.ok) {
      throw new Error("Falha ao enviar email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
  }
}

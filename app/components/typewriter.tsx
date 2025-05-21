"use client"

import { useState, useEffect } from "react"

export default function TypewriterComponent() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ["Luan Lima Tavares", "Desenvolvedor"]
  const currentWordIndex = loopNum % words.length
  const currentWord = words[currentWordIndex]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
        setTypingSpeed(50)
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && displayText === currentWord) {
        // Delay before starting to delete
        setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Delay before starting to type the next word
        setTypingSpeed(500)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentWord, loopNum, typingSpeed])

  return (
    <span className="gradient-text">
      {displayText}
      <span className="typing-cursor"></span>
    </span>
  )
}

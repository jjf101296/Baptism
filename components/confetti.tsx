"use client"

import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"
import { useWindowSize } from "react-use"

export default function Confetti() {
  const { width, height } = useWindowSize()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Auto-hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setIsClient(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isClient) return null

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={200}
      colors={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]}
    />
  )
}

import type { ReactNode } from "react"

interface SkillBadgeProps {
  name: string
  icon: ReactNode
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="skill-badge gradient-border p-4 flex flex-col items-center justify-center">
      <div className="text-purple-400 mb-3 text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  )
}

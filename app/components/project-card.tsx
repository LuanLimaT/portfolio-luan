import { Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  imageSrc: string
}

export default function ProjectCard({ title, description, technologies, githubUrl, imageSrc }: ProjectCardProps) {
  return (
    <div className="project-card overflow-hidden rounded-lg bg-purple-900/20 transition-all hover:shadow-lg hover:shadow-purple-500/20">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-300">{description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="rounded-full bg-purple-800/50 px-3 py-1 text-sm text-purple-200">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-purple-700 py-2 text-center font-medium text-white transition-colors hover:bg-purple-600"
        >
          <Github size={18} />
          <span>Ver no GitHub</span>
        </a>
      </div>
    </div>
  )
}

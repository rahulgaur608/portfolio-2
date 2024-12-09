import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Participant - Agile Job Simulation",
    company: "JPMorgan Chase & Co.",
    location: "Virtual",
    responsibilities: [
      "Completed tasks in Agile methodologies, including backlog refinement, user stories, and sprint retrospectives",
      "Engaged in daily standups and collaborated on sprint reviews",
      "Developed skills in Scrum practices and team collaboration"
    ]
  },
  {
    title: "Participant - Software Engineering Job Simulation",
    company: "Blackbird",
    location: "Virtual",
    responsibilities: [
      "Collaborated with teams on GitHub for software development projects and assessed cloud infrastructure",
      "Contributed to sprint retrospectives and open-source projects",
      "Gained hands-on experience in software engineering and cloud technologies"
    ]
  }
]

const NeomorphicCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "bg-[#ecebe4] rounded-xl p-6",
    "shadow-[9px_9px_18px_#c9c8c2,-9px_-9px_18px_#ffffff]",
    "hover:shadow-[inset_9px_9px_18px_#c9c8c2,inset_-9px_-9px_18px_#ffffff]",
    "transition-all duration-300",
    className
  )}>
    {children}
  </div>
)

const NeomorphicItem = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#ecebe4] rounded-lg p-3 my-2
                  shadow-[3px_3px_6px_#c9c8c2,-3px_-3px_6px_#ffffff]
                  hover:shadow-[inset_3px_3px_6px_#c9c8c2,inset_-3px_-3px_6px_#ffffff]
                  transition-all duration-300">
    {children}
  </div>
)

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#ecebe4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience) => (
            <NeomorphicCard key={experience.title}>
              <h3 className="text-xl font-bold mb-2 text-[#1c1c1c]">{experience.title}</h3>
              <p className="text-[#1c1c1c]/80 font-semibold">{experience.company}</p>
              <p className="text-[#1c1c1c]/60 mb-4">{experience.location}</p>
              {experience.responsibilities.map((responsibility, index) => (
                <NeomorphicItem key={index}>
                  <span className="text-[#1c1c1c]/80">{responsibility}</span>
                </NeomorphicItem>
              ))}
            </NeomorphicCard>
          ))}
        </div>
      </div>
    </section>
  )
}


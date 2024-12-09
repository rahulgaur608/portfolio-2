import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Machine Learning", "Deep Learning", "Programming (Python, R)", "Data Analysis", "Natural Language Processing (NLP)", "Computer Vision"]
  },
  {
    title: "Cloud Services",
    skills: ["AWS", "Google Cloud", "Azure", "Cloud Computing", "Infrastructure Management"]
  },
  {
    title: "Frontend Developer",
    skills: ["HTML/CSS", "JavaScript (ES6+)", "Responsive design", "API integration (RESTful, GraphQL)"]
  },
  {
    title: "Data Transformation & Analysis",
    skills: ["Analytical Techniques", "Transformation", "Complex Analysis", "Digital Transformation", "Strengthening Data Integrity"]
  },
  {
    title: "Software Quality & Testing",
    skills: ["Software Quality", "End-to-End Testing", "Performance optimization", "Usability Testing", "Attention to Detail"]
  },
  {
    title: "Collaboration & Leadership",
    skills: ["UX Design", "Product Development", "Technical Information Sharing", "Workshops", "Demos", "Talent Development"]
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#ecebe4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <NeomorphicCard key={category.title}>
              <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">{category.title}</h3>
              {category.skills.map((skill) => (
                <NeomorphicItem key={skill}>
                  <span className="text-[#1c1c1c]/80">{skill}</span>
                </NeomorphicItem>
              ))}
            </NeomorphicCard>
          ))}
        </div>
      </div>
    </section>
  )
}


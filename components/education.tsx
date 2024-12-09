import { cn } from "@/lib/utils"

const certifications = [
  "Online Certifications in AI and Data Science, Coursera and edX",
  "Certification in Agile Methodologies, JP Morgan",
  "Certification in GitHub Collaboration, Blackbird",
  "Certification in Regression Analysis, Google"
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

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-[#ecebe4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Education & Certifications</h2>
        
        <NeomorphicCard className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">Babu Banarsi Das University, Lucknow, India</h3>
          <p className="text-[#1c1c1c] font-semibold mb-2">B.Tech, Artificial Intelligence</p>
          <p className="text-[#1c1c1c]/80 font-medium mb-2">Relevant Coursework:</p>
          {["Deep Learning", "Machine Learning", "Natural Language Processing", "Computer Vision", "Data Structures and Algorithms"].map((course, index) => (
            <NeomorphicItem key={index}>
              <span className="text-[#1c1c1c]/80">{course}</span>
            </NeomorphicItem>
          ))}
        </NeomorphicCard>

        <NeomorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">Certifications</h3>
          {certifications.map((certification, index) => (
            <NeomorphicItem key={index}>
              <span className="text-[#1c1c1c]/80">{certification}</span>
            </NeomorphicItem>
          ))}
        </NeomorphicCard>
      </div>
    </section>
  )
}


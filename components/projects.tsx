import { cn } from "@/lib/utils"

const projects = [
  {
    title: "E-Commerce Customer Segmentation and Recommendation System",
    description: "Developed a machine learning-based system to segment customers and provide personalized recommendations using Python."
  },
  {
    title: "Image Classification using Deep Learning",
    description: "Developed an image classification model using CNNs with TensorFlow and Keras, achieving 95% accuracy on a dataset of 10,000 images."
  },
  {
    title: "AI-Powered Customer Segmentation and Recommendation System",
    description: "Developed an AI solution using Python and TensorFlow, boosting customer retention by 20% and cross-selling by 15% through personalized recommendations, deployed on AWS for scalability and efficiency.",
    location: "Bengaluru, India",
    date: "Aug 2024 - Present"
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#ecebe4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <NeomorphicCard key={project.title}>
              <h3 className="text-xl font-bold mb-4 text-[#1c1c1c]">{project.title}</h3>
              <p className="text-[#1c1c1c]/80 mb-4">{project.description}</p>
              {project.location && (
                <div className="text-[#1c1c1c]/60 text-sm">
                  <p>{project.location}</p>
                  <p>{project.date}</p>
                </div>
              )}
            </NeomorphicCard>
          ))}
        </div>
      </div>
    </section>
  )
}


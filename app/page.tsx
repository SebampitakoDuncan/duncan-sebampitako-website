import Image from "next/image";
import ProjectCard from "@/components/ui/project-card";
import Spotlight from "@/components/ui/spotlight"
import { projects } from "./data/projects"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-black">
      <Spotlight />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="title pt-16 mx-auto pb-4">DUNCAN SEBAMPITAKO</h1>
        <h2 className="title-subtext pt-8 mx-auto text-center">
          master of science in artificial intelligence @ la trobe university
          <br />
          specializing in natural language processing
          <br />
          dean&apos;s list honors & academic excellence scholarship
        </h2>
        
        <div className="mt-12 mb-8 text-white text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            I am a Machine Learning Engineer currently pursuing a Master of Science in Artificial Intelligence at La Trobe University, specializing in Natural Language Processing. My academic journey has been marked by consistent Dean&apos;s List honors and an Academic Excellence Scholarship, reflecting my commitment to excellence and curiosity in AI technologies.
          </p>
          <p className="text-lg leading-relaxed">
            I have hands-on experience with modern machine learning frameworks such as PyTorch and TensorFlow, and am skilled in Python, C++, and JavaScript. My technical toolkit also includes cloud computing platforms (GCP, AWS, Azure), orchestration with Kubernetes, as well as big data tools like Ray and Apache Spark. I am comfortable collaborating in fast-paced, dynamic environments and have a proven ability to solve complex problems efficiently.
          </p>
        </div>
        
        <div className="flex gap-6 justify-center items-center mt-12 pb-8">
          <a 
            href="https://github.com/SebampitakoDuncan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="GitHub Profile"
          >
            <Image src="/icons/github.svg" alt="Github" className="social-icon" width={30.508} height={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/duncan-sebampitako-5b3052169/?originalSubdomain=ug" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="LinkedIn Profile"

          >
            <Image src="/icons/linkedin.svg" alt="Linkedin" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[95vw] mx-auto px-4 md:px-8 py-8 md:py-16">
        {projects.map((item, index) => (
          <ProjectCard 
            key={index}
            {...item}
          />
        ))}
      </div>
      <div className="text-sm font-[var(--font-secondary)] text-center pb-8 text-white flex flex-col gap-2">
        <div>built with ❤️, 🍗, and 🥤 in melbourne</div>
      </div>
    </div>
  );
}

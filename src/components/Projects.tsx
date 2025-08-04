
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, ExternalLink, Calendar, Users, Award, Pizza } from 'lucide-react';
import { useState } from 'react';

enum ProjectType {
  Personal = "Personal",
  Academic = "Academic"
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  duration: string;
  team: string;
  type: ProjectType;
  highlights: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const personalProjects = [
    {
      title: "PromptTube",
      description: "Chrome extension enabling interactive, AI‑driven Q&A and summaries on YouTube videos.",
      image: "../assets/prompttube.png",
      tech: ["React", "TypeScript", "Gemini AI", "Chrome Extensions", "Webpack"],
      demo: "https://chromewebstore.google.com/detail/prompttube-an-ai-youtube/hkcgcanacnkfiboffehihmpnlnakbkni?hl=en&authuser=0",
      duration: "May 2025 - Present",
      team: "2 developers",
      type: ProjectType.Personal,
      highlights: [
        "Built and maintained PromptTube (600 + Web Store users), a Gemini driven sidebar that lets viewers chat with any YouTube video, receive real time summaries/answers, and jump to precise timestamps via on the fly transcript parsing",
        "Injected a resizable, theme aware React component into YouTube’s DOM using content scripts, postMessage channels, and localStorage persistence to deliver a drag to resize UX that feels native in both dark and light modes.",
        "Engineered transcript pipeline with XPath extraction, dual‑format regex parsing, and custom LRU caching",
        "Packaged as a Manifest V3 extension with modular TypeScript codebase and Webpack build"
      ]
    },
    {
      title: "Network File Server",
      description: "C++ multi‑threaded TCP server offering remote file system access via custom protocol.",
      image: "../assets/network-file-server.png",
      tech: ["C++17", "Boost Threads", "TCP Sockets", "Custom Protocol"],
      duration: "1 month",
      team: "3 developers",
      type: ProjectType.Academic,
      highlights: [
        "Engineered multi‑threaded TCP server exposing hierarchical file system with custom FS_* protocol",
        "Implemented fine‑grained concurrency using Boost mutexes and per‑inode reader/writer locks",
        "Designed crash‑consistent on‑disk inode structures and block allocation logic",
        "Ensured safe deletion and traversal with hand‑over‑hand locking and deadlock‑free algorithms"
      ]
    },
    {
      title: "Thread Library",
      description: "User-level thread library in C++ with cooperative and preemptive scheduling",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=250&fit=crop",
      tech: ["C++17", "ucontext API", "Mutex", "Condition Variables", "std::atomic"],
      duration: "Jan 2025 – Feb 2025",
      team: "3 developers",
      type: ProjectType.Academic,
      highlights: [
        "Implemented Thread, Mutex, and CV classes using getcontext/makecontext/swapcontext for user-level context switching",
        "Added thread::yield for cooperative scheduling and enabled timer-driven preemption via cpu::boot synchronous/asynchronous interrupts",
        "Managed CPU interrupts with cpu::interrupt_disable/enable/suspend and std::atomic guard for multiprocessor atomicity",
        "Enforced FIFO scheduling order across ready and waiting queues and integrated robust error handling with std::runtime_error"
      ]
    },
    {
      title: "Memory Manager (Pager)",
      description: "Custom OS pager managing virtual memory and application address spaces",
      image: "../assets/memory-manager.png",
      tech: ["C++", "Virtual Memory", "Simulated MMU", "Clock Replacement", "Copy-on-Write"],
      duration: "Feb 2025 – Mar 2025",
      team: "Solo project",
      type: ProjectType.Academic,
      highlights: [
        "Implemented a kernel‐level pager with vm_init, vm_create, vm_switch, vm_map, vm_fault, and vm_destroy",
        "Managed swap-backed and file-backed pages via simulated MMU traps and custom system calls",
        "Maintained page tables and manual dirty/referenced bits using protection-fault updates",
        "Applied Clock (second-chance) replacement and copy-on-write sharing for efficient eviction and fork"
      ]
    },
    {
      title: "Pizza Delivery System",
      description: "Concurrent pizza delivery simulation using C++ and a custom thread library",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=250&fit=crop",
      tech: ["C++17", "Custom Thread Library", "Mutex", "Condition Variables"],
      duration: "Jan 2025",
      team: "Solo project",
      type: ProjectType.Academic,
      highlights: [
        "Managed D driver and C customer threads with taxi-cab geometry matching logic",
        "Utilized cpu::boot, thread, mutex, and cv classes for deterministic and non-deterministic scheduling",
        "Coordinated threads via driver_ready, customer_ready, match, drive, and pay library functions",
        "Processed per-customer input files to handle sequential location requests accurately"
      ]
    },
    {
      title: "DealDepot",
      description: "Full‑stack e‑commerce solution with user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tech: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe"],
      demo: "https://dealdepot.onrender.com/",
      duration: "May 2024 – June 2024",
      team: "Solo project",
      type: ProjectType.Personal,
      highlights: [
        "Implemented pagination and dynamic product filters in React",
        "Integrated Stripe for secure payment processing",
        "Built responsive admin dashboard with real‑time sales charts",
        "Deployed full stack on AWS with CI/CD pipeline"
      ]
    },
    {
      title: "Search Engine Clone",
      description: "Scalable search engine prototype with MapReduce‑powered indexing and REST API.",
      image: "../assets/search-engine-clone.png",
      tech: ["Flask", "SQLite", "MapReduce", "REST API"],
      duration: "April 2024",
      team: "2 developers",
      type: ProjectType.Academic,
      highlights: [
        "Built a scalable search engine using Python's Flask and SQLite that mimics the functionality of leading search engines",
        "Created a dynamic search server that leverages a service-oriented architecture to support scalable web search and focuses on advanced information retrieval concepts like text analysis and link analysis",
        "Developed a segmented inverted index of web pages utilizing a pipeline of MapReduce programs, enhancing parallel data processing efficiency, and built an Index server with a REST API returning search results in JSON"
      ]
    },
    {
      title: "Instagram Clone",
      description: "Client‑side Instagram clone with dynamic UI and scalable backend.",
      image: "../assets/instagram.jpg",
      tech: ["React", "Jinja", "Flask", "SQLite", "AWS EC2"],
      duration: "Jan 2024 – Feb 2024",
      team: "2 developers",
      type: ProjectType.Academic,
      highlights: [
        "Built dynamic client‑side UI with React and Jinja templates",
        "Implemented scalable REST API in Flask with SQLite persistence",
        "Deployed full stack on AWS EC2 with CI/CD"
      ]
    },
    {
      title: "Piazza Post Classifier",
      description: "C++ NLP tool classifying Q&A posts using Naive Bayes.",
      image: "https://images.unsplash.com/photo-1526378722305-36bbc6c0bde9?w=400&h=250&fit=crop",
      tech: ["C++", "NLP", "Bernoulli Naive Bayes"],
      duration: "March 2023 – April 2023",
      team: "2 developers",
      type: ProjectType.Academic,
      highlights: [
        "Implemented Multivariable Bernoulli Naive Bayes classifier in C++",
        "Preprocessed and vectorized 3,000 Piazza posts",
        "Achieved 87.1% classification accuracy on test set"
      ]
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const ProjectCard = ({ project, type }: { project: Project; type: ProjectType }) => (
    <Card 
      className="card-hover group bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden cursor-pointer"
      onClick={() => handleProjectClick(project)}
    >
      <div className="relative overflow-hidden">
        {/* <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        /> */}
        <div className="absolute top-2 right-2">
          <Badge
            variant={'default'}
            className={'bg-black text-white dark:bg-white dark:text-black'}
          >
            {type === ProjectType.Personal ? 'Personal' : 'Academic'}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </CardTitle>
          {project.demo && (
            <Button 
              size="sm" 
              className="text-xs h-7 bg-black/5 dark:bg-white/10 text-black dark:text-white border-0 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-200 backdrop-blur-sm" 
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <ExternalLink className="w-3 h-3 mr-1.5" />
                Check it out
              </a>
            </Button>
          )}
        </div>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, index: number) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-gray-300 dark:border-gray-600"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <section id="projects" className="pt-20 pb-10 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white mx-auto rounded-full"></div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
                <div key={index} className="animate-fade-in-up">
                  <ProjectCard project={project} type={project.type} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-50 dark:bg-gray-950">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4 flex items-center justify-between pr-4">
                  {selectedProject.title}
                  {selectedProject.demo && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-black/5 text-black hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" 
                      asChild
                    >
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Check it out
                      </a>
                    </Button>
                  )}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image */}
                {/* <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-medium">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                      <p className="font-medium">{selectedProject.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                      <p className="font-medium">
                        {selectedProject.type === ProjectType.Personal ? 'Personal' : 'Academic'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm border-gray-300 dark:border-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;

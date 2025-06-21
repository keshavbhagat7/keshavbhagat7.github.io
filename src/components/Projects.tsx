
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const personalProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      detailedDescription: "A comprehensive e-commerce platform built from the ground up, featuring secure user authentication, integrated payment processing through Stripe, real-time inventory management, and a powerful admin dashboard for managing products, orders, and analytics. The platform supports multiple payment methods, automated email notifications, and responsive design for optimal mobile experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "3 months",
      team: "Solo project",
      highlights: ["Implemented secure payment processing", "Built responsive admin dashboard", "Integrated real-time inventory tracking", "Deployed on AWS with CI/CD pipeline"]
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and sentiment analysis.",
      detailedDescription: "An innovative chat application that combines real-time messaging with AI-powered responses using OpenAI's GPT models. Features include sentiment analysis of conversations, smart reply suggestions, message encryption, and group chat functionality. The application uses WebSocket for real-time communication and includes a modern, intuitive interface.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tech: ["Python", "Flask", "OpenAI", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "2 months",
      team: "2 developers",
      highlights: ["Integrated OpenAI GPT for smart responses", "Built real-time messaging system", "Implemented sentiment analysis", "Added message encryption for security"]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards and team features.",
      detailedDescription: "A comprehensive project management platform featuring drag-and-drop kanban boards, real-time collaboration tools, task assignment and tracking, deadline management, and team communication features. The system includes role-based permissions, project analytics, file sharing capabilities, and integration with popular development tools.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "4 months",
      team: "3 developers",
      highlights: ["Built drag-and-drop kanban interface", "Implemented real-time collaboration", "Created role-based permission system", "Integrated with third-party APIs"]
    }
  ];

  const classProjects = [
    {
      title: "Database Management System",
      description: "Built a relational database management system from scratch with SQL query processing.",
      detailedDescription: "A complete database management system implementation built from scratch, featuring SQL query parsing and execution, B+ tree indexing for efficient data retrieval, transaction management with ACID properties, and support for complex joins and aggregations. The system includes a query optimizer and supports concurrent access with proper locking mechanisms.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      tech: ["C++", "SQL", "Data Structures"],
      github: "https://github.com",
      duration: "1 semester",
      team: "2 students",
      highlights: ["Implemented B+ tree indexing", "Built SQL query parser and executor", "Added transaction management", "Optimized query performance"]
    },
    {
      title: "Machine Learning Classifier",
      description: "Implemented various ML algorithms to classify handwritten digits with 95% accuracy.",
      detailedDescription: "A comprehensive machine learning project implementing multiple classification algorithms including neural networks, support vector machines, and ensemble methods to classify handwritten digits from the MNIST dataset. The project achieved 95% accuracy through feature engineering, hyperparameter tuning, and ensemble techniques. Includes detailed analysis and visualization of results.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["Python", "scikit-learn", "NumPy", "Matplotlib"],
      github: "https://github.com",
      duration: "1 semester",
      team: "Solo project",
      highlights: ["Achieved 95% classification accuracy", "Implemented multiple ML algorithms", "Created comprehensive data visualizations", "Performed extensive hyperparameter tuning"]
    },
    {
      title: "Operating System Kernel",
      description: "Developed a simple operating system kernel with process scheduling and memory management.",
      detailedDescription: "A functional operating system kernel implementation featuring process scheduling with multiple algorithms (Round Robin, Priority-based), virtual memory management with paging, system call interface, interrupt handling, and basic file system operations. The kernel supports multitasking and includes debugging tools for system monitoring.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      tech: ["C", "Assembly", "Linux", "System Programming"],
      github: "https://github.com",
      duration: "1 semester",
      team: "2 students",
      highlights: ["Implemented process scheduling algorithms", "Built virtual memory management", "Created system call interface", "Added interrupt handling system"]
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const ProjectCard = ({ project, type }: { project: any; type: string }) => (
    <Card 
      className="card-hover group bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden cursor-pointer"
      onClick={() => handleProjectClick(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant={type === 'personal' ? 'default' : 'secondary'}
            className={type === 'personal' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-600 text-white dark:bg-gray-300 dark:text-black'}
          >
            {type === 'personal' ? 'Personal' : 'Academic'}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </CardTitle>
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
        
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          {project.demo && (
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white mx-auto rounded-full"></div>
          </div>

          {/* Personal Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Personal Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
                <div key={index} className="animate-fade-in-up">
                  <ProjectCard project={project} type="personal" />
                </div>
              ))}
            </div>
          </div>

          {/* Class Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Class Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classProjects.map((project, index) => (
                <div key={index} className="animate-fade-in-up">
                  <ProjectCard project={project} type="academic" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

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
                        {personalProjects.includes(selectedProject) ? 'Personal' : 'Academic'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">About This Project</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
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

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="outline" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {selectedProject.demo && (
                    <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200" asChild>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
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

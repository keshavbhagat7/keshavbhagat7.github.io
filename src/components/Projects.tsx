
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const Projects = () => {
  const personalProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tech: ["Python", "Flask", "OpenAI", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards and team features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const classProjects = [
    {
      title: "Database Management System",
      description: "Built a relational database management system from scratch with SQL query processing.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      tech: ["C++", "SQL", "Data Structures"],
      github: "https://github.com"
    },
    {
      title: "Machine Learning Classifier",
      description: "Implemented various ML algorithms to classify handwritten digits with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["Python", "scikit-learn", "NumPy", "Matplotlib"],
      github: "https://github.com"
    },
    {
      title: "Operating System Kernel",
      description: "Developed a simple operating system kernel with process scheduling and memory management.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      tech: ["C", "Assembly", "Linux", "System Programming"],
      github: "https://github.com"
    }
  ];

  const ProjectCard = ({ project, type }: { project: any; type: string }) => (
    <Card className="card-hover group bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant={type === 'personal' ? 'default' : 'secondary'}
            className={type === 'personal' ? 'bg-blue-600' : 'bg-green-600'}
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
              className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          {project.demo && (
            <Button size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
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
  );
};

export default Projects;

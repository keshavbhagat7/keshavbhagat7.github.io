
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      duration: "June 2024 - August 2024",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      duration: "January 2024 - May 2024",
      description: "Built responsive web applications and RESTful APIs. Implemented user authentication and database optimization techniques.",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop"
    },
    {
      title: "Research Assistant",
      company: "University of Michigan",
      duration: "September 2023 - December 2023",
      description: "Conducted research on machine learning algorithms and data analysis. Published findings in academic conferences.",
      skills: ["Python", "TensorFlow", "Pandas", "Jupyter"],
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover animate-fade-in-up bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 rounded-lg object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </CardDescription>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

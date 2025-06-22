import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Users, Award, Building } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      duration: "June 2024 - August 2024",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      detailedDescription: "As a Software Engineering Intern at Tech Innovations Inc., I was responsible for developing and maintaining modern web applications using cutting-edge technologies. I worked closely with senior developers to implement new features, optimize existing code, and ensure high-quality software delivery. My role involved participating in agile development processes, code reviews, and collaborative problem-solving sessions.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop",
      team: "8 developers",
      type: "Internship",
      highlights: ["Built responsive web components using React", "Implemented RESTful APIs with Node.js", "Collaborated with cross-functional teams", "Participated in agile development processes"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      duration: "January 2024 - May 2024",
      description: "Built responsive web applications and RESTful APIs. Implemented user authentication and database optimization techniques.",
      detailedDescription: "At StartupXYZ, I took on the role of a Full Stack Developer where I was responsible for both frontend and backend development. I built responsive web applications from scratch, designed and implemented RESTful APIs, and worked extensively with database optimization. My contributions helped improve application performance and user experience significantly.",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop",
      team: "5 developers",
      type: "Contract",
      highlights: ["Developed full-stack web applications", "Designed RESTful API architecture", "Implemented user authentication systems", "Optimized database queries for better performance"]
    },
    {
      title: "Research Assistant",
      company: "University of Michigan",
      duration: "September 2023 - December 2023",
      description: "Conducted research on machine learning algorithms and data analysis. Published findings in academic conferences.",
      detailedDescription: "As a Research Assistant at the University of Michigan, I conducted extensive research on machine learning algorithms and their applications in data analysis. I worked under the supervision of faculty members to explore innovative approaches to complex problems, analyze large datasets, and contribute to academic publications. This role enhanced my analytical skills and deepened my understanding of theoretical computer science concepts.",
      skills: ["Python", "TensorFlow", "Pandas", "Jupyter"],
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop",
      team: "3 researchers",
      type: "Academic",
      highlights: ["Conducted machine learning research", "Analyzed large datasets using Python", "Published findings in academic conferences", "Collaborated with faculty and graduate students"]
    }
  ];

  const handleExperienceClick = (experience: any) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="experience" className="py-20 gradient-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="card-hover animate-fade-in-up bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg cursor-pointer"
                onClick={() => handleExperienceClick(exp)}
              >
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
                      <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
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
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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

      {/* Experience Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">
                  {selectedExperience.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Company Logo and Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedExperience.logo}
                    alt={`${selectedExperience.company} logo`}
                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{selectedExperience.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedExperience.duration}</p>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-medium">{selectedExperience.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                      <p className="font-medium">{selectedExperience.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                      <p className="font-medium">{selectedExperience.type}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">About This Role</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedExperience.detailedDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm border-gray-300 dark:border-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedExperience.highlights.map((highlight: string, index: number) => (
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

export default Experience;

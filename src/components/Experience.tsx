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
      title: "Software Development Intern",
      company: "Dream11",
      duration: "June 2024 - July 2024",
      description: "Developed a comprehensive release management website using Remix full-stack framework, Prisma ORM, and MySQL to facilitate tracking and creation of Dream11 app releases with detailed build history and release information.",
      detailedDescription: "As a Software Development Intern at Dream11 in Mumbai, India, I was responsible for building a release management system from the ground up using Remix, Prisma ORM, and MySQL. I designed and implemented dynamic, user-friendly frontend components with React, Shadcn, Tailwind CSS, and custom hooks, collaborating closely with backend engineers to ensure seamless data flow. Additionally, I executed thorough test cases using Callstack's Reassure to evaluate the functionality and performance of custom React Native components against baseline metrics.",
      skills: ["Remix", "Prisma ORM", "MySQL", "React", "TypeScript", "Tailwind CSS", "React Native"],
      logo: "../public/assets/dream11.jpg",
      type: "Internship",
      highlights: [
        "Built a comprehensive release management website using Remix, Prisma ORM, and MySQL for Dream11 app releases",
        "Designed dynamic frontend components with React, Shadcn, Tailwind CSS, and custom hooks to enhance user experience",
        "Collaborated with backend teams to integrate detailed build history and release information",
        "Executed test cases with Callstack's Reassure to validate custom React Native component performance"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Web Spiders",
      duration: "June 2023 - July 2023",
      description: "Built EmpowerMeAI, a job-seeking and career-advising chatbot powered by GPT-3.5 Turbo 16k with a Python CLI and dynamic job fetching.",
      skills: ["Python", "GPT-3.5 Turbo 16k", "CLI", "Glassdoor API", "Indeed API"],
      logo: "../public/assets/webspiders.jpeg",
      type: "Internship",
      highlights: [
        "Built EmpowerMeAI, a job-seeking and career-advising chatbot tailored for job seekers in Kolkata, powered by the GPT-3.5 Turbo 16k model",
        "Engineered the application in Python with an intuitive CLI interface",
        "Integrated Glassdoor and Indeed APIs to dynamically fetch job listings based on users’ skills and expectations"
      ]
    },
    {
      title: "AI/ML Engineer",
      company: "Michigan Data Science Team",
      duration: "August 2023 - November 2023",
      description: "Programmed and trained an AI poker bot using Python and RLCard, leveraging Deep Q-Learning, Deep Monte Carlo, and Neural Fictitious Self-Play to optimize performance and achieve a 9% average money increase against a random agent.",
      skills: ["Python", "NumPy", "pandas", "Matplotlib", "RLCard", "Deep Q-Learning (DQN)", "Deep Monte Carlo", "Neural Fictitious Self-Play"],
      logo: "../public/assets/mdst.png",
      type: "Role",
      highlights: [
        "Programmed an AI poker bot in Python using NumPy, pandas, and Matplotlib",
        "Integrated the RLCard engine and trained the bot with Deep Q-Learning (DQN) and Deep Monte Carlo",
        "Employed Neural Fictitious Self-Play with a replay memory size of 20,000 and training every 4 iterations to optimize learning",
        "Achieved an average 9% increase in money after 100 iterations against a random agent"
      ]
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-medium">{selectedExperience.duration}</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                      <p className="font-medium">{selectedExperience.team}</p>
                    </div>
                  </div> */}
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                      <p className="font-medium">{selectedExperience.type}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {/* <div>
                  <h3 className="text-lg font-semibold mb-2">About This Role</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedExperience.detailedDescription}
                  </p>
                </div> */}

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
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Experience;

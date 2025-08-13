import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Dart", level: 75 },
        { name: "Java", level: 70 },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 89 },
        { name: "Remix", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Redux", level: 75 },
        { name: "Next.js", level: 70 },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "FastAPI", level: 93 },
        { name: "Prisma ORM", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Chrome Extension Manifest V3", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Reassure", level: 68 },
        { name: "GitHub Actions", level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-gray-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="animate-fade-in-up bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-gray-600 to-black h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Skills Tags */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "C++",
              "React",
              "Remix",
              "FastAPI",
              "Prisma ORM",
              "PostgreSQL",
              "TypeScript",
              "Tailwind CSS",
              "Flutter",
              "Node.js",
              "Express",
              "MySQL",
              "MongoDB",
              "Git",
              "Docker",
              "Postman",
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "Go", "TypeScript", "JavaScript", "SQL", "Dart", "Java"]
    },
    {
      title: "Backend & Database",
      skills: ["FastAPI", "Node.js", "Express", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma", "SQLAlchemy", "REST API Design"]
    },
    {
      title: "AI/ML",
      skills: ["OpenAI API", "Gemini API", "LLM Tool Calling", "Structured Outputs", "Vector Search", "pgvector"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Remix", "Flutter", "Tailwind CSS", "Redux", "React Native", "HTML/CSS"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Git", "Webpack", "Reassure"]
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
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

export default Skills;

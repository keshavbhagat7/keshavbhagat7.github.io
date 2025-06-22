
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Code, Gamepad2, Music, Plane, Camera, Coffee, Bike } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      category: "Technology",
      icon: Code,
      items: [
        "Open Source Projects",
        "Tech Podcasts",
        "Hackathons",
        "Code Reviews"
      ]
    },
    {
      category: "Learning",
      icon: Book,
      items: [
        "Technical Books",
        "Online Courses",
        "Programming Languages",
        "System Design"
      ]
    },
    {
      category: "Creative",
      icon: Camera,
      items: [
        "Photography",
        "UI/UX Design",
        "Digital Art",
        "Video Editing"
      ]
    },
    {
      category: "Lifestyle",
      icon: Coffee,
      items: [
        "Coffee Brewing",
        "Travel",
        "Cycling",
        "Gaming"
      ]
    }
  ];

  return (
    <section id="interests" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interests & Hobbies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Beyond coding, I'm passionate about continuous learning and exploring creative outlets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="card-hover animate-fade-in-up bg-white dark:bg-gray-800 border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-gray-600 to-black rounded-full flex items-center justify-center">
                  <interest.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  {interest.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {interest.items.map((item, itemIndex) => (
                    <Badge
                      key={itemIndex}
                      variant="secondary"
                      className="block w-full text-center py-2 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {item}
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

export default Interests;

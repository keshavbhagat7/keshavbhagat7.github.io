import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Coursework = () => {
  const courseCategories = [
    {
      title: "Core Computer Science",
      courses: [
        "Data Structures & Algorithms",
        "Computer Systems Programming", 
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    },
    {
      title: "AI & Machine Learning",
      courses: [
        "Introduction to Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Data Mining"
      ]
    },
    {
      title: "Mathematics & Theory",
      courses: [
        "Discrete Mathematics",
        "Linear Algebra",
        "Statistics & Probability",
        "Algorithms & Complexity",
        "Mathematical Reasoning",
        "Calculus I-III"
      ]
    },
    {
      title: "Business & Leadership",
      courses: [
        "Business Administration",
        "Project Management",
        "Entrepreneurship",
        "Marketing Strategy",
        "Financial Analysis",
        "Leadership Principles"
      ]
    }
  ];

  const getRandomColor = (index: number) => {
    const colors = [
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      "bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-gray-100",
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      "bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-gray-100",
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      "bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-gray-100"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="coursework" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Relevant Coursework
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive foundation in computer science, mathematics, and business principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="card-hover animate-fade-in-up bg-white dark:bg-gray-800 border-0 shadow-lg"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    categoryIndex === 0 ? 'bg-gray-500' :
                    categoryIndex === 1 ? 'bg-gray-600' :
                    categoryIndex === 2 ? 'bg-gray-700' : 'bg-black'
                  }`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="group p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:transform hover:scale-105"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GPA and Academic Standing */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-600 to-black text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2">3.85</div>
              <div className="text-sm opacity-90">Cumulative GPA</div>
            </div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2">Dean's List</div>
              <div className="text-sm opacity-90">3 Semesters</div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-black text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-sm opacity-90">Credit Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coursework;

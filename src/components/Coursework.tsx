import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Coursework = () => {
  const courseCategories = [
    {
      title: "Core Computer Science & Programming",
      courses: [
        "EECS 183 Elementary Programming Concepts",
        "EECS 203 Discrete Mathematics",
        "EECS 280 Programming & Data Structures",
        "EECS 281 Data Structures & Algorithms",
        "EECS 376 Theory of Computation",
        "EECS 201 Computer Science Pragmatics"
      ]
    },
    {
      title: "Computer Science Electives",
      courses: [
        "EECS 370 Introduction to Computer Organization",
        "EECS 482 Introduction to Operating Systems",
        "EECS 491 Introduction to Distributed Systems",
        "EECS 485 Web Systems",
        "EECS 484 Database Management Systems",
        "EECS 492 Introduction to Artificial Intelligence"
      ]
    },
    {
      title: "Business & Economics",
      courses: [
        "MKT 302 Marketing Management",
        "TO 302 Managing Business Operations",
        "FIN 302 Making Financial Decisions",
        "STRATEGY 302 Business Strategy",
        "ECON 101 Principles of Economics I",
      ]
    },
    {
      title: "Mathematics & Statistics",
      courses: [
        "MATH 116 Calculus II",
        "STATS 250 Introduction to Statistics & Data Analysis"
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
    <section id="coursework" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Relevant Coursework
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-gray-300 mx-auto rounded-full"></div>
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
                    categoryIndex === 0 ? 'bg-gray-600 dark:bg-gray-400' :
                    categoryIndex === 1 ? 'bg-gray-600 dark:bg-gray-400' :
                    categoryIndex === 2 ? 'bg-gray-600 dark:bg-gray-400' : 'bg-gray-600 dark:bg-gray-400'
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
        {/* <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-100/30 to-blue-200 text-black p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2">3.829</div>
              <div className="text-sm opacity-90">Cumulative GPA</div>
            </div>
            <div className="bg-gradient-to-r from-blue-100/30 to-blue-200/40 text-black p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2">6 Semesters</div>
              <div className="text-sm opacity-90">University Honors</div>
            </div>
            <div className="bg-gradient-to-r from-blue-100/30 to-blue-200 text-black p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Credit Hours</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Coursework;

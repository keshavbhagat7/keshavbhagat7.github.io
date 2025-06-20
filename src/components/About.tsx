
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
              alt="Working on laptop"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div className="animate-slide-in-right">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science student at the University of Michigan with a strong 
                foundation in software development, data structures, and algorithms. My journey in tech 
                began with curiosity about how things work, and has evolved into a deep love for creating 
                solutions that make a difference.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or working on personal projects that challenge me to grow as a developer. I believe 
                in the power of clean code, thoughtful design, and collaborative development.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always excited to connect with fellow developers, discuss new ideas, and explore 
                opportunities where I can contribute my skills while continuing to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

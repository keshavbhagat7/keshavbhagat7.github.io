import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl animate-float">
              <img
                src={`${import.meta.env.BASE_URL}assets/headshot.jpg`}
                alt="Profile"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">Hello, I'm</span>
            <span className="block gradient-text pb-2">Keshav Bhagat</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 mb-4 font-medium">
            Computer Science and Business @ University of Michigan
          </p>

          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer and rising Computer Science senior dedicated to crafting elegant, user-centric solutions.
            Always eager to learn and take on new challenges.
          </p>

          {/* CTA */}
          <div className="mb-12">
            <Button
              size="lg"
              onClick={() => window.open(`${import.meta.env.BASE_URL}assets/resume.pdf`, '_blank')}
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

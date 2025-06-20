
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl animate-fade-in-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Email */}
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">alex.johnson@umich.edu</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <a href="mailto:alex.johnson@umich.edu">Send Email</a>
                  </Button>
                </div>

                {/* LinkedIn */}
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Linkedin className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">@alexjohnson</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </div>

                {/* GitHub */}
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Github className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">@alexjohnson</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Ready to start a conversation? I'd love to hear from you!
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  asChild
                >
                  <a href="mailto:alex.johnson@umich.edu">
                    <Mail className="mr-2 h-5 w-5" />
                    Say Hello
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 Alex Johnson. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

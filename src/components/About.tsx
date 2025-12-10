import { Code2, Lightbulb, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer who loves creating elegant solutions to complex problems.
              With expertise in modern web technologies, I focus on building scalable and user-friendly applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className={`space-y-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Clean Code</h3>
                <p className="text-gray-600 dark:text-gray-400">Writing maintainable and scalable code is my priority</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Problem Solver</h3>
                <p className="text-gray-600 dark:text-gray-400">Finding creative solutions to challenging problems</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Fast Learner</h3>
                <p className="text-gray-600 dark:text-gray-400">Always exploring and adapting to new technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

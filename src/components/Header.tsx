import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ darkMode, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
}

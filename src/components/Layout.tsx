import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Calendar, Database, FileText, Home, Info, Mail, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', icon: <Home size={20} />, label: 'Home' },
    { path: '/catalog', icon: <Search size={20} />, label: 'Catalog' },
    { path: '/databases', icon: <Database size={20} />, label: 'Databases' },
    { path: '/e-resources', icon: <FileText size={20} />, label: 'E-Resources' },
    { path: '/events', icon: <Calendar size={20} />, label: 'Events' },
    { path: '/about', icon: <Info size={20} />, label: 'About' },
    { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-indigo-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-8 w-8" />
              <span className="font-bold text-xl">PCE College Library</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname === link.path
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500'
                    }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium
                    ${location.pathname === link.path
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/catalog" className="hover:text-indigo-300">Catalog Search</Link></li>
                <li><Link to="/databases" className="hover:text-indigo-300">Databases</Link></li>
                <li><Link to="/e-resources" className="hover:text-indigo-300">E-Resources</Link></li>
                <li><Link to="/events" className="hover:text-indigo-300">Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:text-indigo-300">Borrowing</Link></li>
                <li><Link to="/services" className="hover:text-indigo-300">Research Help</Link></li>
                <li><Link to="/services" className="hover:text-indigo-300">Study Spaces</Link></li>
                <li><Link to="/services" className="hover:text-indigo-300">Printing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="hover:text-indigo-300">FAQs</Link></li>
                <li><Link to="/help" className="hover:text-indigo-300">Tutorials</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-300">Contact Us</Link></li>
                <li><Link to="/help" className="hover:text-indigo-300">Technical Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic">
                <p>123 Library Street</p>
                <p>College Town, ST 12345</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
                <p>Email: library@college.edu</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} College Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
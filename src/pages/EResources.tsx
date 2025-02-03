import React, { useState } from 'react';
import { BookOpen, FileText, Search, ExternalLink, Book, Newspaper, GraduationCap, Globe } from 'lucide-react';

const EResources = () => {
  const [activeTab, setActiveTab] = useState('subscribed');

  const resources = {
    subscribed: [
      {
        title: 'IEEE Digital Library',
        description: 'Access to IEEE journals, conferences, and standards',
        url: 'https://ieeexplore.ieee.org'
      },
      {
        title: 'DELNET',
        description: 'Access to shared library resources and databases',
        url: 'https://delnet.in'
      },
      {
        title: 'J-Gate',
        description: 'Portal to journal literature',
        url: 'https://jgateplus.com'
      },
      {
        title: 'Sage Journals',
        description: 'Access to Sage Publishing journals',
        url: 'https://journals.sagepub.com'
      }
    ],
    government: [
      {
        title: 'National Digital Library of India',
        description: 'Virtual repository of learning resources',
        url: 'https://ndl.iitkgp.ac.in'
      },
      {
        title: 'e-PG Pathshala',
        description: 'E-content for postgraduate courses',
        url: 'https://epgp.inflibnet.ac.in'
      },
      {
        title: 'SWAYAM',
        description: 'Online courses from MHRD',
        url: 'https://swayam.gov.in'
      },
      {
        title: 'Shodhganga',
        description: 'Repository of Indian theses',
        url: 'https://shodhganga.inflibnet.ac.in'
      }
    ],
    free: [
      {
        title: 'DOAJ',
        description: 'Directory of Open Access Journals',
        url: 'https://doaj.org'
      },
      {
        title: 'Google Scholar',
        description: 'Search scholarly literature',
        url: 'https://scholar.google.com'
      },
      {
        title: 'Research Gate',
        description: 'Professional network for scientists',
        url: 'https://www.researchgate.net'
      },
      {
        title: 'MDPI',
        description: 'Open Access Publishing',
        url: 'https://www.mdpi.com'
      }
    ],
    ebooks: [
      {
        title: 'PIET E-Books',
        description: 'Institution\'s digital book collection',
        url: '#'
      },
      {
        title: 'Project Gutenberg',
        description: 'Free eBooks collection',
        url: 'https://www.gutenberg.org'
      },
      {
        title: 'DOAB',
        description: 'Directory of Open Access Books',
        url: 'https://www.doabooks.org'
      },
      {
        title: 'PDF Drive',
        description: 'Search engine for PDF files',
        url: 'https://www.pdfdrive.com'
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">E-Resources</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Access our comprehensive collection of digital resources, databases, and e-learning materials.
          Available 24/7 for PCE students and faculty.
        </p>
      </section>

      {/* Search Bar */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search e-resources..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
      </section>

      {/* Resource Categories */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex space-x-8 px-6 overflow-x-auto" aria-label="Tabs">
            {[
              { id: 'subscribed', label: 'Subscribed Resources', icon: <Book size={20} /> },
              { id: 'government', label: 'Government Initiatives', icon: <GraduationCap size={20} /> },
              { id: 'free', label: 'Free Resources', icon: <Globe size={20} /> },
              { id: 'ebooks', label: 'E-Books', icon: <BookOpen size={20} /> }
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources[activeTab as keyof typeof resources].map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 rounded-lg border hover:shadow-md transition-shadow group"
              >
                <div className="bg-teal-100 p-3 rounded-lg">
                  <BookOpen className="text-teal-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold group-hover:text-teal-600 flex items-center">
                    {resource.title}
                    <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 mt-1">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-teal-100 p-3 rounded-lg">
              <Newspaper className="text-teal-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Previous Year Papers</h3>
          </div>
          <div className="space-y-2">
            <a href="#" className="block text-teal-600 hover:text-teal-800">• MID Term Papers</a>
            <a href="#" className="block text-teal-600 hover:text-teal-800">• RTU Term Papers</a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-teal-100 p-3 rounded-lg">
              <FileText className="text-teal-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Hindi E-Books</h3>
          </div>
          <div className="space-y-2">
            <a href="https://epustakalay.com" target="_blank" rel="noopener noreferrer" className="block text-teal-600 hover:text-teal-800">• E-Pustakalay</a>
            <a href="https://www.44books.com" target="_blank" rel="noopener noreferrer" className="block text-teal-600 hover:text-teal-800">• 44books</a>
            <a href="https://www.hindikitab.com" target="_blank" rel="noopener noreferrer" className="block text-teal-600 hover:text-teal-800">• Hindi Books</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EResources;
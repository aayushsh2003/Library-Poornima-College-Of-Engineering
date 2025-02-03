import React, { useState } from 'react';
import { Search, Database, ExternalLink } from 'lucide-react';
import data from '../data/data.json';

const Databases = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Multidisciplinary', 'Science', 'Medicine', 'Engineering'];

  const filteredDatabases = data.databases.filter(db => {
    const matchesSearch = db.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         db.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || db.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Research Databases</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Access our comprehensive collection of academic databases for your research needs.
          These resources provide access to scholarly articles, primary sources, and more.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search databases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-48 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {categories.map((category) => (
              <option key={category.toLowerCase()} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Database List */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDatabases.map((db) => (
          <div key={db.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Database className="text-indigo-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{db.name}</h3>
                <p className="text-gray-600 mb-4">{db.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {db.category}
                  </span>
                  <a
                    href={db.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    Access Database <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Help Section */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Database Tutorials</h3>
            <p className="text-gray-600">
              Access our video tutorials and guides for using research databases effectively.
            </p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">
              View Tutorials →
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Research Consultation</h3>
            <p className="text-gray-600">
              Schedule a one-on-one session with a research librarian.
            </p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">
              Book Appointment →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Databases;
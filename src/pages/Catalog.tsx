import React, { useState } from 'react';
import { Search, Filter, Book, Download, ExternalLink } from 'lucide-react';
import booksData from '../data/books.json';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('engineering');

  const filterBooks = () => {
    const books = selectedType === 'engineering' ? booksData.engineering.books : booksData.mba.books;
    return books.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Library Catalog</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Browse our extensive collection of e-books for Engineering and MBA programs.
          Access high-quality academic resources anytime, anywhere.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by title, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full md:w-48 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="engineering">Engineering</option>
            <option value="mba">MBA</option>
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-48 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Categories</option>
            {booksData.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Books List */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">
          {selectedType === 'engineering' ? 'Engineering E-Books' : 'MBA E-Books'}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {filterBooks().map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Book className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{book.title}</h3>
                      <p className="text-gray-600 mt-1">by {book.author}</p>
                      <p className="text-gray-500 mt-1">
                        {book.publisher}, {book.year} • {book.pages} pages
                      </p>
                      <span className="inline-block mt-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {book.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {book.url !== "#" && (
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <ExternalLink size={20} />
                      <span>View Online</span>
                    </a>
                  )}
                  <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    <Download size={20} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">How to Access E-Books</h3>
            <p className="text-gray-600">
              Learn how to download and access our e-book collection on different devices.
            </p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">
              View Guide →
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Technical Support</h3>
            <p className="text-gray-600">
              Having trouble accessing the e-books? Contact our technical support team.
            </p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">
              Get Help →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
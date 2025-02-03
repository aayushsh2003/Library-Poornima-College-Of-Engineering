import React from 'react';
import { Search, BookOpen, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

const Home = () => {
  const { announcements, events } = data;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-8 mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Library interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Poornima College of Engineering Library
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Your gateway to knowledge, research, and academic excellence
          </p>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books, articles, and more..."
                className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="https://webopac.piet.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow group"
        >
          <BookOpen size={40} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            Web OPAC
            <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p>Search our extensive collection through KOHA Library Management System</p>
        </a>
        <Link
          to="/e-resources"
          className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow"
        >
          <Calendar size={40} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">E-Resources</h3>
          <p>Access IEEE, DELNET, J-Gate, and more digital resources</p>
        </Link>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-xl text-white">
          <Clock size={40} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">Library Hours</h3>
          <div className="space-y-2 text-sm">
            <p>Monday - Saturday:</p>
            <p className="font-semibold">8:00 AM - 8:00 PM</p>
            <p>Sunday:</p>
            <p className="font-semibold">1:00 PM - 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* Digital Library Section */}
      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Digital Library</h2>
        <p className="text-gray-600 mb-6">
          The Digital Library at PCE is a hub of knowledge, offering a diverse range of resources accessible to students, faculty, and researchers. Users have access to online databases, e-journals, and comprehensive digital resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Subscribed Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• IEEE Digital Library</li>
              <li>• J-Gate</li>
              <li>• DELNET</li>
              <li>• Sage Journals</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Government Initiatives</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• National Digital Library of India</li>
              <li>• e-PG Pathshala</li>
              <li>• SWAYAM</li>
              <li>• Shodhganga</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Free Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• DOAJ</li>
              <li>• Google Scholar</li>
              <li>• Research Gate</li>
              <li>• MDPI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Circulation Hours */}
      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Circulation Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Summer Timings</h3>
            <p className="text-gray-600">8:30 AM to 3:00 PM (Monday to Saturday)</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Winter Timings</h3>
            <p className="text-gray-600">9:00 AM to 3:30 PM</p>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Announcements */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Latest Announcements
          </h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border-l-4 border-indigo-500 pl-4 py-2"
              >
                <h3 className="font-semibold text-lg">{announcement.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {new Date(announcement.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{announcement.content}</p>
              </div>
            ))}
          </div>
          <Link
            to="/announcements"
            className="inline-block mt-4 text-indigo-600 hover:text-indigo-800"
          >
            View all announcements →
          </Link>
        </section>

        {/* Quick Links */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://tcsion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
            >
              <span>TCSion</span>
              <ExternalLink size={16} />
            </a>
            <a
              href="https://ndl.iitkgp.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
            >
              <span>NDLI</span>
              <ExternalLink size={16} />
            </a>
            <a
              href="https://delnet.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
            >
              <span>DELNET</span>
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
            >
              <span>IEEE</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
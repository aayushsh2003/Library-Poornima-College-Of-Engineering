import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import data from '../data/data.json';

const About = () => {
  const { staff } = data;

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">About Our Library</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Supporting academic excellence through comprehensive resources, innovative services,
          and collaborative learning spaces.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower our academic community by providing comprehensive access to knowledge resources, fostering information literacy, and supporting research
            and learning through innovative services and technologies.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be a leading academic library that inspires intellectual discovery,
            advances learning, and connects diverse communities in their pursuit of knowledge.
          </p>
        </div>
      </section>

      {/* Staff Section */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staff.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-indigo-600 hover:text-indigo-800 text-sm"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Hours & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-bold">Library Hours</h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Thursday</span>
              <span>8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Friday</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span>12:00 PM - 8:00 PM</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-bold">Location & Contact</h2>
          </div>
          <div className="space-y-4">
            <p className="flex items-start space-x-2">
              <MapPin size={20} className="text-gray-400 flex-shrink-0 mt-1" />
              <span>123 Library Street<br />College Town, ST 12345</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={20} className="text-gray-400" />
              <span>(555) 123-4567</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail size={20} className="text-gray-400" />
              <span>library@college.edu</span>
            </p>
          </div>
        </section>
      </div>

      {/* Statistics */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Print Volumes', value: '500,000+' },
          { label: 'E-Books', value: '1,000,000+' },
          { label: 'Databases', value: '200+' },
          { label: 'Study Spaces', value: '1,000+' }
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
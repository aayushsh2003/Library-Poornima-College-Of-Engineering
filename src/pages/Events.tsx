import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import data from '../data/data.json';

const Events = () => {
  const { events } = data;

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'lecture':
        return 'bg-purple-100 text-purple-800';
      case 'exhibition':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Events & Workshops</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Join us for exciting events, workshops, and lectures. Expand your knowledge and connect
          with fellow researchers and scholars.
        </p>
      </section>

      {/* Calendar View */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      2:00 PM - 4:00 PM
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      Library Conference Room
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      30 spots available
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Workshops',
            description: 'Hands-on learning sessions on research tools and methods',
            color: 'from-blue-500 to-blue-600',
            icon: <Users className="mb-4" size={40} />
          },
          {
            title: 'Lectures',
            description: 'Guest speakers and academic presentations',
            color: 'from-purple-500 to-purple-600',
            icon: <Calendar className="mb-4" size={40} />
          },
          {
            title: 'Exhibitions',
            description: 'Showcasing special collections and student work',
            color: 'from-emerald-500 to-emerald-600',
            icon: <MapPin className="mb-4" size={40} />
          }
        ].map((category) => (
          <div
            key={category.title}
            className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white hover:shadow-lg transition-shadow`}
          >
            {category.icon}
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </section>

      {/* Past Events */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg p-4">
              <span className="text-sm text-gray-500">March {item}, 2024</span>
              <h3 className="font-semibold mt-2">Past Event Title {item}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Brief description of the past event that took place...
              </p>
              <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">
                View Recording →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
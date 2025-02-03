import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Have questions? We're here to help. Reach out to us through any of the channels below.
        </p>
      </section>

      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700"
            >
              Send Message
            </button>
          </form>
        </section>

        <div className="space-y-6">
          {/* Quick Contact */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-rose-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-rose-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">library@college.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-rose-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Library Street<br />
                    College Town, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How do I get a library card?</h3>
                <p className="text-gray-600">
                  Visit the circulation desk with your student ID to get your library card.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">What are the loan periods?</h3>
                <p className="text-gray-600">
                  Books can be borrowed for 21 days, with up to 2 renewals if no one else has requested them.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">How do I access e-resources?</h3>
                <p className="text-gray-600">
                  Use your college credentials to access all electronic resources through our website.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Help Options */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Chat with Us',
            description: 'Get instant help from our librarians via chat',
            icon: <MessageSquare className="mb-4" size={40} />,
            color: 'from-rose-500 to-rose-600'
          },
          {
            title: 'Book a Consultation',
            description: 'Schedule a one-on-one session with a librarian',
            icon: <Calendar className="mb-4" size={40} />,
            color: 'from-pink-500 to-pink-600'
          },
          {
            title: 'Support Ticket',
            description: 'Submit a support ticket for technical issues',
            icon: <Mail className="mb-4" size={40} />,
            color: 'from-fuchsia-500 to-fuchsia-600'
          }
        ].map((option) => (
          <div
            key={option.title}
            className={`bg-gradient-to-br ${option.color} p-6 rounded-xl text-white hover:shadow-lg transition-shadow`}
          >
            {option.icon}
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p>{option.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contact;
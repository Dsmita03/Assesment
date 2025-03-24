import React from 'react';

interface AboutProps {
  data: {
    bio: string;
    contacts: {
      email: string;
      phone: string;
      address: string;
    };
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">About Me</h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">{data.bio}</p>
      <div className="mt-8 bg-blue-50 p-6 rounded-xl shadow-inner max-w-md mx-auto">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact Information</h3>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {data.contacts.email}</p>
        <p className="text-gray-600 mb-2"><strong>Phone:</strong> {data.contacts.phone}</p>
        <p className="text-gray-600"><strong>Address:</strong> {data.contacts.address}</p>
      </div>
    </section>
  );
};

export default About;

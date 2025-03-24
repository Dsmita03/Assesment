import React from 'react';

interface Hobby {
  name: string;
  image: string;
}

interface HobbiesProps {
  hobbies: Hobby[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Hobbies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center text-lg font-semibold text-gray-700 bg-blue-50">
              {hobby.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;

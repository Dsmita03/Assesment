import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-xl text-center shadow-md hover:scale-105 transition transform duration-300 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

interface ExperienceProps {
  experience: { company: string; role: string; duration: string; description: string }[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-blue-800">
              {exp.role} at {exp.company}
            </h3>
            <p className="text-sm text-gray-500 mb-2 italic">{exp.duration}</p>
            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

interface CertificationProps {
  certifications: {
    name: string;
    issuer: string;
    year: string;
    credentialUrl?: string;
  }[];
}

const Certification: React.FC<CertificationProps> = ({ certifications }) => {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105 duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-1">{cert.name}</h3>
            <p className="text-gray-600 mb-1">
              <strong>Issuer:</strong> {cert.issuer}
            </p>
            <p className="text-gray-500 text-sm mb-3">Year: {cert.year}</p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;

import { useState, useEffect } from 'react';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Hobbies from './components/hobbies';
import Certification from './components/certification';
import Experience from './components/experience';

interface HeaderData {
  name: string;
  title: string;
  profileImage: string;
  socials: { [key: string]: string };
}

interface AboutData {
  bio: string;
  contacts: { email: string; phone: string; address: string };
}

interface Hobby {
  name: string;
  image: string;
}

interface CertificationData {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Data {
  header: HeaderData;
  about: AboutData;
  skills: string[];
  hobbies: Hobby[];
  certifications: CertificationData[];
  experience: ExperienceData[];
}

function App() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="text-center mt-20 text-2xl font-bold text-gray-600 animate-pulse">
        Loading portfolio...
      </div>
    );
  }

  return (
    <div className="font-sans bg-gradient-to-br from-blue-100 via-white to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-20">
        <Header content={data.header} />
        <About data={data.about} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Hobbies hobbies={data.hobbies} />
        <Certification certifications={data.certifications} />
        <footer className="text-center text-gray-500 text-sm py-6 mt-20 border-t-2 border-blue-200">
          © {new Date().getFullYear()} {data.header.name} — Crafted with ❤️ and React
        </footer>
      </div>
    </div>
  );
}

export default App;

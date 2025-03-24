import React from 'react';

interface HeaderProps {
  content: {
    name: string;
    title: string;
    profileImage: string;
    socials: {
      [key: string]: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-10 text-center shadow-lg rounded-b-2xl">
      <img
        src={content.profileImage}
        alt="profile"
        className="rounded-full mx-auto w-32 h-32 border-4 border-white shadow-xl"
      />
      <h1 className="text-4xl font-extrabold mt-4">{content.name}</h1>
      <p className="text-xl mt-2">{content.title}</p>
      <div className="flex justify-center gap-6 mt-5">
        {Object.entries(content.socials).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 text-lg transition"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

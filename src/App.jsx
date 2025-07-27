import React from "react";

const App = () => {
  return (
    <main className="min-h-screen bg-[#fef2f2] text-[#111827] font-sans">
      {/* Header */}
      <header className="bg-[#d946ef] text-white p-6 shadow">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ul className="flex gap-6 text-lg">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Home */}
      <section id="home" className="py-20 px-6 bg-[#fef2f2]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-2xl">Hello, I’m</h2>
            <h1 className="text-5xl font-extrabold mt-2 text-[#d946ef]">Napatsorn Sawangsri</h1>
            <a href="#projects" className="mt-6 inline-block bg-[#d946ef] text-white px-6 py-3 rounded-full hover:bg-[#c026d3] transition">
              View My Projects
            </a>
          </div>

          {/* Profile Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#d946ef] shadow-lg">
            <img src="/me.jpg" alt="Napatsorn Sawangsri" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#fef2f2] p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-700">Description of the first project.</p>
            </div>
            <div className="bg-[#fef2f2] p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-700">Description of the second project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d946ef] text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Napatsorn Sawangsri. All rights reserved.
      </footer>
    </main>
  );
};

export default App;
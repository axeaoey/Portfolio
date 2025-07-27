import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#fef2f2] text-[#111827] font-sans px-6 py-12">
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Hello, I’m <span className="text-[#d946ef]">Napatsorn</span>
      </h1>
      <p className="text-xl mb-8 text-center">
        A front-end developer passionate about building beautiful web experiences.
      </p>
      <a href="#projects" className="bg-[#d946ef] text-white px-6 py-3 rounded-full hover:bg-[#c026d3] transition">
        View My Projects
      </a>
      <section id="projects" className="mt-20 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-700">Description of the first project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-700">Description of the second project.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
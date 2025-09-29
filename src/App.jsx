import React from "react";
import {
  FaSchool as School,
  FaGraduationCap as GraduationCap,
  FaUniversity as University,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Github,
  Link,
} from "lucide-react";

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
          <div className="text-left">
            <h2 className="text-2xl">Hello, I’m</h2>
            <h1 className="text-5xl font-extrabold mt-2 text-[#d946ef]">Napatsorn Sawangsri</h1>
            <p className="mt-4 text-xl text-gray-700">Software Engineering Student</p>
            <a href="#projects" className="mt-6 inline-block bg-[#d946ef] text-white px-6 py-3 rounded-full hover:bg-[#c026d3] transition">
              View My Projects
            </a>
          </div>
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#d946ef] shadow-lg">
            <img src="/me.jpg" alt="Napatsorn Sawangsri" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 bg-white animate-fade-in">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#d946ef]">About Me</h2>
          <p className="mb-12">I am a software engineering student passionate about building websites and learning new technologies.</p>

          {/* Horizontal Education Timeline */}
          <div className="overflow-x-auto">
            <h3 className="text-2xl font-semibold text-[#d946ef] mb-6">Education</h3>
            <div className="flex justify-center gap-12 whitespace-nowrap">
              <div className="flex flex-col items-center">
                <School size={32} className="text-[#d946ef] mb-2" />
                <div className="text-sm font-semibold">Junior High</div>
                <div className="text-xs text-gray-600">Gifted Program</div>
                <div className="text-xs text-gray-600">Satri Si Suriyothai</div>
              </div>
              <div className="h-px w-12 bg-[#f0abfc] self-center"></div>
              <div className="flex flex-col items-center">
                <GraduationCap size={32} className="text-[#d946ef] mb-2" />
                <div className="text-sm font-semibold">High School</div>
                <div className="text-xs text-gray-600">SMEP Program</div>
                <div className="text-xs text-gray-600">Wat Nuannoradit</div>
              </div>
              <div className="h-px w-12 bg-[#f0abfc] self-center"></div>
              <div className="flex flex-col items-center">
                <University size={32} className="text-[#d946ef] mb-2" />
                <div className="text-sm font-semibold">University</div>
                <div className="text-xs text-gray-600">Faculty of ICT</div>
                <div className="text-xs text-gray-600">Univ. of Phayao</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6 bg-[#fef2f2] animate-scale-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#d946ef]">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left text-[#111827]">
            <div>
              <h3 className="text-xl font-semibold text-[#d946ef] mb-2">Design & Tools</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Proficient in Photoshop and Figma</li>
                <li>Familiar with Trello</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#d946ef] mb-2">Programming Languages</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Java, Python</li>
                <li>JavaScript, TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#d946ef] mb-2">Web & Backend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>HTML, CSS, SCSS, TailwindCSS</li>
                <li>React, Vite, Nest.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#d946ef] mb-2">Other Skills</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>MySQL</li>
                <li>Scrum</li>
                <li>Problem-solving</li>
                <li>Teamwork & Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#d946ef]">Explore My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 animate-stagger">
            {/* Repeat project card below with your images & links */}
            {[
              {
                title: "Novelvers",
                desc: "Web novel platform with video promotion for authors.",
                img: "/Novelvers.png",
                links: [
                  ["Figma", "https://www.figma.com/design/mMvWIc4xIL1iZhAHp0zyP8/Novelvers--GROUP-10?node-id=1534-1461"],
                  ["Figjam", "https://www.figma.com/board/MP4iwCQqNUT2NjLxlDKwVX/G.14--?node-id=0-1"],
                ],
              },
              {
                title: "ProjectBingsu",
                desc: "Online Bingsu Ordering and Point Collection System via Code",
                img: "/bingsu.png",
                links: [
                  ["Figma", "https://www.figma.com/design/wcA8oO2DPnliGXYf87dsTu/Bigsuu?node-id=0-1&t=akmJ7ZG4gVprxtnv-1"],
                  ["GitHub", "https://github.com/axeaoey/ProjectBingsu"],
                  ["Demo", "https://projectbingsu.vercel.app/"],
                ],
              },
              {
                title: "แอพรวมเพจ มพ.",
                desc: "News aggregation app for Phayao University students.",
                img: "/apppage.png",
                links: [["Figma", "https://www.figma.com/design/p1ZBilVw2ite9gJJMO6Ijs"]],
              },
              {
                title: "Social Pets",
                desc: "A chat community for pet lovers and owners.",
                img: "/Social Pets.png",
                links: [["Figma", "https://www.figma.com/design/kipbtOevrxZ6N3bERQiUs8/G14"]],
              },
              {
                title: "Game-Quick math",
                desc: "Math game for kids to improve basic arithmetic skills.",
                img: "/Game-Quick math.png",
                links: [["Figma", "https://www.figma.com/design/KhAWkECkfQDZS8rZ259vDw/Game-Quick-math"]],
              },
              {
                title: "5star",
                desc: "Review system for restaurants with admin dashboard.",
                img: "/5star.png",
                links: [
                  ["Figma", "https://www.figma.com/design/ZiKU0WSgSAI8LqlMa0ecd7/5star"],
                  ["GitHub", "https://github.com/kobbmm/5star"],
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{project.desc}</p>
                </div>
                <div className="flex justify-center space-x-6 mb-5 text-[#d946ef]">
                  {project.links.map(([label, url], i) => (
                    <a key={i} href={url} className="underline" target="_blank" rel="noopener noreferrer">{label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-[#fef2f2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#d946ef]">Contact</h2>
          <p className="mb-6">
            If you're looking for an enthusiastic intern ready to learn and contribute, feel free to contact me!
          </p>
          <div className="text-left text-sm space-y-3">
            <p className="flex items-center gap-2"><MapPin className="text-[#d946ef]" /> <strong>Address:</strong> 182/28 Q Nirun Condo, Bang Khae, Bangkok 10160</p>
            <p className="flex items-center gap-2"><Phone className="text-[#d946ef]" /> <strong>Phone:</strong> 065 493 5773</p>
            <p className="flex items-center gap-2"><Mail className="text-[#d946ef]" /> <strong>Email:</strong> <a href="mailto:n.napatsornsawangsri@gmail.com" className="underline">n.napatsornsawangsri@gmail.com</a></p>
            <p className="flex items-center gap-2"><Facebook className="text-[#d946ef]" /> <strong>Facebook:</strong> <a href="https://facebook.com/napatsorn.sawangsri.54" className="underline">facebook.com/napatsorn.sawangsri.54</a></p>
            <p className="flex items-center gap-2"><Github className="text-[#d946ef]" /> <strong>GitHub:</strong> <a href="https://github.com/axeaoey" className="underline">github.com/axeaoey</a></p>
            <p className="flex items-center gap-2"><Link className="text-[#d946ef]" /> <strong>Link.me:</strong> <a href="https://heylink.me/Napatsorn.Sawangsri/" className="underline">heylink.me/Napatsorn.Sawangsri/</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-purple-500 text-center text-sm text-white py-6 animate-fade-in-delay">
        © CopyRight By Napatsorn Sawangsri
      </footer>

    </main>
  );
};

export default App;

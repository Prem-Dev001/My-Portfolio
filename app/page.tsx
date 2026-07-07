import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 scroll-smooth">
      
      {/* Sticky Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 md:px-24 py-12">
        
        {/* Hero Section */}
        <div className="w-full flex flex-col justify-center min-h-[60vh] mb-12">
          <p className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-4">Software Developer</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Hi, I'm Prem.</h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            I build modern websites and manage server setups. Instead of just learning theory, I believe in learning by doing—writing clean code, fixing real errors, and getting projects live on the internet.
          </p>
          <a href="#projects" className="bg-indigo-600 text-white px-7 py-3.5 rounded-lg font-medium w-max shadow-sm hover:bg-indigo-700 transition-all text-center">
            View My Work
          </a>
        </div>

        {/* Behind the Code (About Section) */}
        <div id="about" className="w-full py-16 border-t border-slate-200 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Behind the Code</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>I am currently in my 4th semester of Bachelor of Computer Applications (BCA), but my learning goes far beyond the classroom. I am a self-driven developer who believes in building real things to solve real problems.</p>
                <p>My journey isn't just about writing frontend syntax. From configuring server hardware and managing network infrastructure for multiplayer environments, to designing responsive interfaces, I enjoy understanding the complete lifecycle of an application.</p>
                <p>Right now, I am expanding my arsenal with modern frameworks like Next.js and Tailwind CSS, focusing on writing clean, scalable, and human-readable code.</p>
              </div>
            </div>
            
            <div className="border border-slate-200 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Current Arsenal</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'].map((skill) => (
                      <span key={skill} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Core & Ops</p>
                  <div className="flex flex-wrap gap-2">
                    {['Server Configuration', 'Hardware Optimization', 'Web Deployment'].map((skill) => (
                      <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Work (Projects Section) */}
        <div id="projects" className="w-full py-16 border-t border-slate-200 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1: Fitness Centre */}
            <div className="border border-slate-200 p-8 rounded-2xl bg-slate-50 flex flex-col justify-between min-h-[220px] hover:border-slate-300 transition-all shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Fitness Centre Supaul</h3>
                <p className="text-slate-600 text-base mb-6">A responsive commercial website engineered for a local fitness business.</p>
              </div>
              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'Tailwind CSS', 'React'].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md font-medium shadow-2xs">{tech}</span>
                  ))}
                </div>
                {/* Action Links */}
                <div className="flex gap-4 text-sm font-semibold">
                  <a href="https://github.com/Prem-Dev001" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">Code →</a>
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 2: Game Server Infrastructure */}
            <div className="border border-slate-200 p-8 rounded-2xl bg-slate-50 flex flex-col justify-between min-h-[220px] hover:border-slate-300 transition-all shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Game Server Infrastructure</h3>
                <p className="text-slate-600 text-base mb-6">Architected and deployed a highly optimized public multiplayer server.</p>
              </div>
              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Linux', 'Docker', 'Bash', 'Networking'].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md font-medium shadow-2xs">{tech}</span>
                  ))}
                </div>
                {/* Action Links */}
                <div className="flex gap-4 text-sm font-semibold">
                  <a href="https://github.com/Prem-Dev001" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">Documentation →</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Contact Section & Footer */}
        <div id="contact" className="scroll-mt-24">
          <Footer />
        </div>
        
      </div>
    </main>
  );
}
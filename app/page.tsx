import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 scroll-smooth">
      
      {/* Sticky Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 md:px-24 py-12">
        
        {/* Hero Section */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[60vh] mb-12 gap-10">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-4">Software Developer</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Hi, I'm Prem</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              I build modern websites and manage server setups. Instead of just learning theory, I believe in learning by doing—writing clean code, fixing real errors, and getting projects live on the internet.
            </p>
            <a href="#projects" className="bg-indigo-600 text-white px-7 py-3.5 rounded-lg font-medium w-max shadow-sm hover:bg-indigo-700 hover:-translate-y-1 transition-all text-center">
              View My Work
            </a>
          </div>
          
          {/* Profile Image Space */}
          <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-slate-100 shadow-xl shrink-0 bg-slate-100">
            <Image 
              src="/profile.jpg" 
              alt="Prem - Software Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Behind the Code (About Section) */}
        <div id="about" className="w-full py-16 border-t border-slate-200 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Behind the Code</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>I am currently in my 5th semester of Bachelor of Computer Applications (BCA), but my learning goes far beyond the classroom. I am a self-driven developer who believes in building real things to solve real problems.</p>
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
            <div className="border border-slate-200 rounded-2xl bg-slate-50 flex flex-col overflow-hidden hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              
              {/* Gym Image */}
              <div className="w-full h-48 relative border-b border-slate-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
                  alt="Gym Website Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">Fitness Centre Supaul</h3>
                  <div className="mb-6 space-y-3">
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">They Ask</span>
                      <p className="text-slate-600 text-sm mt-1">The gym owner was tired of answering the same calls about fees and timings. They needed a simple place online to point people to.</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">My Approach</span>
                      <p className="text-slate-600 text-sm mt-1">I built a fast, mobile-friendly website to showcase their pricing plans and details. I handled everything from writing the code to deploying it live.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'Tailwind CSS', 'React'].map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md font-medium shadow-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-semibold">
                    <a href="https://github.com/Prem-Dev001" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">Code →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Game Server Infrastructure */}
            <div className="border border-slate-200 rounded-2xl bg-slate-50 flex flex-col overflow-hidden hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              
              {/* Server Image */}
              <div className="w-full h-48 relative border-b border-slate-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop" 
                  alt="Server Infrastructure Preview" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">Public Game Server</h3>
                  <div className="mb-6 space-y-3">
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">The Problem</span>
                      <p className="text-slate-600 text-sm mt-1">We needed a 24/7 public Minecraft server, but standard hosting was either too expensive or lagged heavily when too many players joined.</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">What I Did</span>
                      <p className="text-slate-600 text-sm mt-1">I rented a raw Linux machine and set up the server myself. I managed network ports, tweaked hardware allocation, and optimized it to run lag-free.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Linux', 'Bash', 'Networking'].map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md font-medium shadow-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-semibold">
                    <a href="https://github.com/Prem-Dev001" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">Documentation →</a>
                  </div>
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
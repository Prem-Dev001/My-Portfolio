export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 md:px-24 py-4">
        {/* Brand/Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors">
          Prem<span className="text-indigo-600">.</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
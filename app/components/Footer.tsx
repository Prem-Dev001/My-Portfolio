export default function Footer() {
  return (
    <div className="w-full py-20 border-t border-slate-200 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Build Something.</h2>
      <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
        Whether you have a project idea, a job opportunity, or just want to talk about server optimizations and web dev, my inbox is always open.
      </p>
      {/* Apna asli email update karna mat bhulna */}
      <a href="mailto:prem@example.com" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-medium shadow-md hover:bg-indigo-600 transition-all">
        Say Hello 👋
      </a>
      
      <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 font-medium text-sm">
        <p>© 2026 Prem. All rights reserved.</p>
        <div className="flex gap-6">
          <a 
            href="https://github.com/Prem-Dev001" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://x.com/Prem_dev069" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-600 transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </div>
  );
}
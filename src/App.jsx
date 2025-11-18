import Hero from './components/Hero';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Header */}
      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-500/30" />
          <div>
            <p className="text-sm tracking-widest text-white/60">Production House</p>
            <h1 className="-mt-0.5 text-lg font-semibold">Your Studio</h1>
          </div>
        </div>
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero />

      {/* Contact */}
      <main className="px-6">
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-10 w-full max-w-6xl px-6 pb-10 pt-6 text-center text-sm text-white/60">
        <div className="mb-4 sm:hidden">
          <SocialLinks />
        </div>
        <p>© {new Date().getFullYear()} Your Studio — All rights reserved.</p>
        <p className="mt-1">We’re under construction. New and exciting things are coming soon.</p>
      </footer>
    </div>
  );
}

export default App;

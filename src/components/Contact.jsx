export default function Contact() {
  return (
    <section className="relative mx-auto -mt-8 w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-lg sm:p-12">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Let’s collaborate</h2>
          <p className="mt-3 text-white/70">Commercials, music videos, brand films, and post-production. Tell us about your project and we’ll get back within 24 hours.</p>

          <div className="mt-6 space-y-2 text-white/80">
            <p><span className="text-white/60">Email:</span> <a className="text-sky-300 hover:underline" href="mailto:hello@yourstudio.com">hello@yourstudio.com</a></p>
            <p><span className="text-white/60">Phone:</span> <a className="text-sky-300 hover:underline" href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-white/70">Name</label>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-sky-400/40 focus:bg-white/10" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Email</label>
            <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-sky-400/40 focus:bg-white/10" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-sky-400/40 focus:bg-white/10" placeholder="What are you looking to create?" />
          </div>
          <button type="button" className="group inline-flex items-center gap-2 rounded-xl bg-sky-500/90 px-5 py-3 font-medium text-white transition hover:bg-sky-400">
            Send message
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 transition group-hover:translate-x-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </button>
        </form>
      </div>
    </section>
  );
}

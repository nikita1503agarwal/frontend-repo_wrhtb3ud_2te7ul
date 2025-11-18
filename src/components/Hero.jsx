import Spline from '@splinetool/react-spline';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden rounded-b-[2rem] bg-slate-950">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_20%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,0.95)_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
          Production House
        </span>
        <h1 className="mb-4 text-4xl font-black tracking-tight text-white drop-shadow-sm sm:text-6xl">
          We’re crafting something cinematic
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
          Our new home is in the edit. Bigger stories, bolder visuals, and a brand experience built for the big screen.
        </p>
        <div className="mb-10">
          <SocialLinks size={24} variant="solid" />
        </div>
        <p className="text-xs uppercase tracking-widest text-white/60">Site under construction • New reels dropping soon</p>
      </div>
    </section>
  );
}

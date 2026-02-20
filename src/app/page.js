import {MapPinned} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/imgs/home.JPG')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
      <div className="relative flex min-h-screen flex-col items-center px-6 text-center">
        <div className="flex flex-1 flex-col -translate-y-[10vh] justify-center">
          <h1 className="page-title font-[family-name:var(--font-pinyon-script)] text-5xl leading-tight tracking-wide drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] lg:text-9xl">
            Stewart & Monique
          </h1>
          <p className="page-subtitle mt-3 text-base uppercase tracking-[0.35em] text-white/90 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] lg:text-4xl">
            Are Getting Married
          </p>
          
          <p className="page-lede mt-2 flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] text-white/85 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] lg:text-xl">
            <MapPinned className="h-5 w-5 shrink-0 lg:h-6 lg:w-6" /> L'Olivo Cicchetti & Lounge
          </p>
          <p className="page-lede mt-2 text-sm uppercase tracking-[0.3em] text-white/85 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] lg:text-xl">
            July 23, 2026 at 5:00pm
          </p>
        </div>
      </div>
    </div>
  );
}

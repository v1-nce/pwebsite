import Link from 'next/link';
import { RetroImage } from './RetroImage';

export const ProjectShowcase = () => {
  return (
    // Changed grid-cols-1 to grid-cols-2 to force side-by-side on mobile
    <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 mb-4">
      {/* ThreadTalk - Left Square */}
      <Link 
        href="https://threadtalk-app.vercel.app" 
        target="_blank"
        className="block opacity-0 animate-slide-up hover:scale-105 transition-transform duration-300 w-full max-w-[250px] mx-auto"
      >
        <RetroImage 
          src="/images/ThreadTalk.png" 
          alt="ThreadTalk Backend" 
          width={220} 
          height={220} 
          color="green" 
          caption="THREADTALK" 
          aspect="square"
        />
      </Link>

      {/* Veridian - Right Square */}
      <Link 
        href="https://github.com/v1-nce/veridian-backend" 
        target="_blank"
        className="block opacity-0 animate-slide-up hover:scale-105 transition-transform duration-300 w-full max-w-[250px] mx-auto"
        style={{ animationDelay: '200ms' }}
      >
        <RetroImage 
          src="/images/Veridian_1.png" 
          alt="Veridian Backend" 
          width={220} 
          height={220} 
          color="blue" 
          caption="VERIDIAN_BACKEND" 
          aspect="square"
        />
      </Link>
    </div>
  );
};

import { RadioPlayer } from '@/components/RadioPlayer';

export function LiveRadioSection() {
  return (
    <section className="py-12 bg-techno-dark">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display mb-6 text-center">ESCUCHA NUESTRO RADIO EN VIVO</h2>
          <div className="glass border border-neon-purple/30 p-2 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4 px-4 pt-2">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-[#ea384c] rounded-full animate-pulse mr-2"></span>
                <h3 className="text-xl font-display">IMPCORE RADIO</h3>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-[#ea384c] rounded-full animate-pulse mr-1"></span>
                <p className="text-[#ea384c] text-sm font-medium">EN VIVO</p>
              </div>
            </div>
            <RadioPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}

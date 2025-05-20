
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Instagram, Radio, Headphones, Download } from 'lucide-react';
import { DjProfile } from '@/types/dj';

type ProfileHeroProps = {
  djProfile: DjProfile;
};

export function ProfileHero({ djProfile }: ProfileHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-techno-darker via-techno-darker/60 to-techno-darker"></div>
      </div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* DJ Profile Image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-2 border-neon-purple glow"></div>
              <img 
                src={djProfile.image} 
                alt={djProfile.name} 
                className="w-full h-full object-cover rounded-full border-4 border-neon-purple/30"
              />
              <div className="absolute -bottom-2 -right-2 bg-neon-purple text-black px-3 py-1 rounded-full text-xs font-bold">
                RESIDENTE
              </div>
            </div>
            
            {/* DJ Info */}
            <div className="text-center md:text-left md:flex-1">
              <div className="mb-2 flex flex-wrap justify-center md:justify-start gap-2">
                {djProfile.residencies.map(residency => (
                  <Badge key={residency} variant="outline" className="bg-neon-purple/10 text-neon-purple border-neon-purple/30">
                    {residency}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-2 tracking-wider text-white">
                {djProfile.name}
              </h1>
              
              <p className="text-xl text-neon-cyan mb-3">{djProfile.fullName}</p>
              
              <p className="text-gray-300 mb-6 max-w-2xl">
                {djProfile.genre}
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {/* Social Media Links */}
                <a 
                  href={djProfile.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-techno-dark p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-neon-purple" />
                </a>
                <a 
                  href={djProfile.soundcloud} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-techno-dark p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                >
                  <Radio className="h-5 w-5 text-neon-purple" />
                </a>
                
                <Button className="bg-neon-purple text-black hover:bg-neon-purple/80 ml-2">
                  <Headphones className="mr-2 h-4 w-4" />
                  Escuchar Ahora
                </Button>
                
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/20">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Presskit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

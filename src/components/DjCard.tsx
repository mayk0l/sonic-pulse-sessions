
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

type DjCardProps = {
  name: string;
  genre: string;
  image: string;
}

export function DjCard({ name, genre, image }: DjCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="techno-card group transition-all duration-300 hover:translate-y-[-5px]">
          <div className="relative overflow-hidden aspect-square">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="font-display text-xl">{name}</h3>
              <p className="text-sm text-gray-300">{genre}</p>
            </div>
            <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 bg-techno-dark border-gray-800">
        <div className="flex flex-col gap-2">
          <h4 className="font-display text-lg">{name}</h4>
          <p className="text-sm text-gray-300">{genre}</p>
          <p className="text-xs text-gray-400">Check out {name}'s latest mixes and upcoming events. This DJ specializes in {genre} and has performed at major venues worldwide.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

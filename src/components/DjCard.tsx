
import { Card, CardContent } from '@/components/ui/card';

type DjCardProps = {
  name: string;
  genre: string;
  image: string;
}

export function DjCard({ name, genre, image }: DjCardProps) {
  return (
    <Card className="techno-card group">
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
  );
}

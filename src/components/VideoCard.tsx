
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type VideoCardProps = {
  title: string;
  artist: string;
  thumbnail: string;
  duration: string;
}

export function VideoCard({ title, artist, thumbnail, duration }: VideoCardProps) {
  return (
    <Card className="techno-card group">
      <div className="relative overflow-hidden">
        <div className="aspect-video">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
          {duration}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-neon-purple/80 rounded-full p-4">
            <Play className="h-8 w-8" />
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium truncate">{title}</h3>
        <p className="text-sm text-gray-400">{artist}</p>
      </CardContent>
    </Card>
  );
}

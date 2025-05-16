
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

type SpotlightProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  type: 'dj' | 'event';
}

export function FeaturedSpotlight({ 
  title, 
  subtitle, 
  description, 
  image, 
  ctaText, 
  ctaLink,
  type
}: SpotlightProps) {
  return (
    <Card className="glass overflow-hidden mb-8 border-neon-purple/20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative">
          <div className="aspect-video md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-0 left-0 bg-neon-purple/80 py-1 px-3 rounded-br">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current" />
                <span className="text-xs font-medium">Featured {type === 'dj' ? 'Artist' : 'Event'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 md:w-3/5 flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <h3 className="text-2xl font-display mb-1">{title}</h3>
              <p className="text-neon-cyan text-sm">{subtitle}</p>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
          </div>
          
          <div className="mt-4">
            <Button asChild className="bg-neon-purple hover:bg-neon-purple/80 text-black">
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

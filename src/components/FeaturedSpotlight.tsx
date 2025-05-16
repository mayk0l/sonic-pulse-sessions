
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
    <Card className="glass overflow-hidden mb-8 border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-500 group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative overflow-hidden">
          <div className="aspect-video md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 bg-neon-purple/90 py-1 px-3 rounded-br flex items-center">
              <Star className="h-4 w-4 mr-1 fill-current text-black" />
              <span className="text-xs font-medium text-black">Featured {type === 'dj' ? 'Artist' : 'Event'}</span>
            </div>
          </div>
        </div>
        
        <CardContent className={cn(
          "p-6 md:w-3/5 flex flex-col justify-between relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-purple/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
        )}>
          <div>
            <Badge className="bg-neon-purple/20 text-neon-purple border-none mb-2 hover:bg-neon-purple/30">
              {type === 'dj' ? 'Artist Spotlight' : 'Featured Event'}
            </Badge>
            <div className="mb-2">
              <h3 className="text-2xl font-display mb-1 group-hover:text-neon-purple transition-colors duration-300">{title}</h3>
              <p className="text-neon-cyan text-sm">{subtitle}</p>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
          </div>
          
          <div className="mt-4">
            <Button asChild className="bg-neon-purple hover:bg-neon-purple/80 text-black group">
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}


import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
    <Card className="glass overflow-hidden mb-8 border-impcore-pink/20 hover:border-impcore-pink/50 transition-all duration-500 group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative overflow-hidden">
          <div className="aspect-video md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 bg-impcore-pink py-1 px-3 rounded-br flex items-center">
              <Star className="h-4 w-4 mr-1 fill-current text-white" />
              <span className="text-xs font-medium text-white">
                {type === 'dj' ? 'Artista Destacado' : 'Evento Destacado'}
              </span>
            </div>
          </div>
        </div>
        
        <CardContent className={cn(
          "p-4 sm:p-6 md:w-3/5 flex flex-col justify-between relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-impcore-pink/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
        )}>
          <div>
            <Badge className="bg-impcore-pink/20 text-impcore-pink border-none mb-2 hover:bg-impcore-pink/30">
              {type === 'dj' ? 'Artista Destacado' : 'Evento Destacado'}
            </Badge>
            <div className="mb-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-impcore-pink transition-colors duration-300">{title}</h3>
              <p className="text-impcore-pink text-xs sm:text-sm">{subtitle}</p>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">{description}</p>
          </div>
          
          <div className="mt-3 sm:mt-4">
            <Button asChild className="bg-impcore-pink hover:bg-impcore-darkpink text-white group w-full sm:w-auto">
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

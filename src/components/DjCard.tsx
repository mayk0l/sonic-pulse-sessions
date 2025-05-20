
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

type DjCardProps = {
  id: number;
  name: string;
  genre: string;
  image: string;
};

export function DjCard({ id, name, genre, image }: DjCardProps) {
  // Get slug from DJ name (simplified version)
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Card className="techno-card overflow-hidden group">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="backdrop-blur-sm bg-black/60 p-3 rounded-lg">
            <Badge className="bg-impcore-pink/20 text-impcore-pink border-none mb-1 hover:bg-impcore-pink/30">
              {genre}
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <Link to={`/dj/${slug}`}>
              <Button 
                variant="outline" 
                className="border-impcore-pink hover:bg-impcore-pink/20 text-white w-full group"
              >
                <span className="group-hover:text-impcore-pink transition-colors">Ver Perfil</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

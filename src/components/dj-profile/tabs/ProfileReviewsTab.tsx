
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Sample review data
const reviews = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    venue: 'Club Vision, Santiago',
    date: '12 Feb, 2025',
    rating: 5,
    content: 'Increíble energía durante toda la noche. El DJ supo mantener la pista llena y conectar con el público. Una de las mejores experiencias de techno que he tenido en Santiago.',
    verified: true,
  },
  {
    id: 2,
    name: 'Alejandra Rojas',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    venue: 'Warehouse 23, Valparaíso',
    date: '03 Mar, 2025',
    rating: 4,
    content: 'Gran selección musical y excelente progresión durante el set. El ambiente fue perfecto y la técnica impecable. Solo le faltó un poco más de interacción con el público.',
    verified: true,
  },
  {
    id: 3,
    name: 'Miguel Ángel',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    venue: 'Blondie Club, Santiago',
    date: '28 Jan, 2025',
    rating: 5,
    content: 'Una experiencia completamente inmersiva. La mezcla de sonidos hipnóticos y beats potentes creó una atmósfera única. Definitivamente uno de los mejores DJs de la escena local.',
    verified: false,
  },
];

export function ProfileReviewsTab() {
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'fill-neon-purple text-neon-purple' : 'text-gray-500'}`} 
      />
    ));
  };

  return (
    <div className="animate-fade-in">
      <Card className="glass border-neon-purple/20 mb-8">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-display mb-2">RESEÑAS DE EVENTOS</h2>
              <p className="text-gray-400">Opiniones de organizadores y asistentes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                {renderStars(Math.round(averageRating))}
                <span className="ml-2 text-neon-purple font-bold">{averageRating.toFixed(1)}</span>
              </div>
              <p className="text-sm text-gray-400">{reviews.length} reseñas verificadas</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-800 pb-6 last:border-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{review.venue}</span>
                        <span className="opacity-50">•</span>
                        <span>{review.date}</span>
                        {review.verified && (
                          <>
                            <span className="opacity-50">•</span>
                            <Badge variant="outline" className="text-xs py-0 h-5 border-neon-purple/30 text-neon-purple">
                              Verificado
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mt-2 md:mt-0">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

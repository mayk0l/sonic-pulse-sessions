
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  image: string;
}

export function EventCard({ title, date, location, image }: EventCardProps) {
  return (
    <Card className="techno-card overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <div className="aspect-square md:aspect-auto md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        
        <CardContent className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CalendarDays className="h-4 w-4 text-impcore-pink" />
              <span className="text-sm text-gray-300">{date}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{location}</p>
          </div>
          
          <div className="mt-4">
            <Button className="bg-impcore-pink hover:bg-impcore-darkpink text-white">
              Conseguir Tickets
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

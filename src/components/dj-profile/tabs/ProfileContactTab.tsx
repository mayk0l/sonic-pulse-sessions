
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Radio, Mail } from 'lucide-react';
import { BookingForm } from '@/components/dj-profile/BookingForm';

export function ProfileContactTab() {
  return (
    <div className="animate-fade-in space-y-8">
      <Card className="glass border-neon-purple/20">
        <CardContent className="p-6 md:p-8 text-center">
          <h2 className="text-2xl font-display mb-6">CONTRATACIONES</h2>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            <div className="p-6 border border-neon-purple/30 rounded-lg backdrop-blur-sm hover:bg-neon-purple/5 transition-colors">
              <h3 className="text-xl font-display mb-3">Booking Nacional</h3>
              <p className="text-gray-300 mb-4">Para eventos dentro del país</p>
              <Button asChild className="bg-neon-purple hover:bg-neon-purple/80 text-black">
                <a href="mailto:impcoreclg@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  impcoreclg@gmail.com
                </a>
              </Button>
            </div>
            
            <div className="p-6 border border-neon-cyan/30 rounded-lg backdrop-blur-sm hover:bg-neon-cyan/5 transition-colors">
              <h3 className="text-xl font-display mb-3">Booking Internacional</h3>
              <p className="text-gray-300 mb-4">Para eventos fuera del país</p>
              <Button asChild variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                <a href="mailto:international@impcore.cl">
                  <Mail className="mr-2 h-4 w-4" />
                  international@impcore.cl
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-10">
            <p className="text-gray-400 mb-4">También puedes encontrarnos en redes sociales</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/impcore.cl" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-techno-dark p-3 rounded-full hover:bg-neon-purple/20 transition-colors"
              >
                <Instagram className="h-6 w-6 text-neon-purple" />
              </a>
              <a 
                href="https://soundcloud.com/imp-records-820395379" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-techno-dark p-3 rounded-full hover:bg-neon-purple/20 transition-colors"
              >
                <Radio className="h-6 w-6 text-neon-purple" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Booking Form */}
      <BookingForm />
    </div>
  );
}

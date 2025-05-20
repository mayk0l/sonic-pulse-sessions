
import { Button } from '@/components/ui/button';
import { Instagram, Radio, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-impcore-darker border-t border-gray-800 py-12 mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              IMP<span className="text-impcore-pink">CORE</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              El destino definitivo para los entusiastas de la música techno. Transmitiendo sets en vivo, presentando DJs talentosos y trayéndote los mejores eventos.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <h3 className="text-sm font-medium mb-4 text-gray-300">SUSCRÍBETE A NUESTRO BOLETÍN</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-impcore-dark border border-gray-700 rounded px-3 py-2 text-sm focus:border-impcore-pink outline-none"
              />
              <Button className="bg-impcore-pink hover:bg-impcore-darkpink text-white">
                Suscribir
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4 text-white">Navegación</h3>
            <ul className="space-y-2">
              {['Inicio', 'Radio', 'DJs', 'Lanzamientos', 'Eventos'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-impcore-pink text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white">Conectar</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/impcore.cl" className="text-gray-400 hover:text-impcore-pink text-sm flex items-center gap-2">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://soundcloud.com/imp-records-820395379" className="text-gray-400 hover:text-impcore-pink text-sm flex items-center gap-2">
                  <Radio className="h-4 w-4" /> SoundCloud
                </a>
              </li>
              <li>
                <a href="https://impcore.bandcamp.com" className="text-gray-400 hover:text-impcore-pink text-sm flex items-center gap-2">
                  <Music className="h-4 w-4" /> Bandcamp
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white">Información</h3>
            <ul className="space-y-2">
              {['Sobre Nosotros', 'Contacto', 'Press Kit', 'Colaboraciones', 'Empleo'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-impcore-pink text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {['Términos', 'Privacidad', 'Cookies', 'Licencias', 'Copyright'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-impcore-pink text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} IMPCORE. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              {['Términos', 'Privacidad', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

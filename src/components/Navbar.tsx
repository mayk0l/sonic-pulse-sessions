
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Radio } from "lucide-react";
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', href: '#radio' },
  { name: 'Eventos', href: '#events' },
  { name: 'Lanzamientos', href: '#videos' },
  { name: 'Residentes', href: '#djs' },
  { name: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-impcore-darker/80 backdrop-blur-md py-2 shadow-lg' : 'py-4'
    )}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white tracking-widest">
            IMP<span className="text-impcore-pink">CORE</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-impcore-pink transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://www.instagram.com/impcore.cl" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-300 hover:text-impcore-pink transition-colors duration-200"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://soundcloud.com/imp-records-820395379" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-300 hover:text-impcore-pink transition-colors duration-200"
          >
            <Radio className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-impcore-dark border-gray-800">
            <div className="flex flex-col space-y-6 mt-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl text-gray-300 hover:text-impcore-pink transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">Síguenos en:</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/impcore.cl" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-300 hover:text-impcore-pink transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://soundcloud.com/imp-records-820395379" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-300 hover:text-impcore-pink transition-colors duration-200"
                  >
                    <Radio className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

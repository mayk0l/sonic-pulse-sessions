
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, SoundCloud } from "lucide-react";

const navItems = [
  { name: 'Radio', href: '#radio' },
  { name: 'DJs', href: '#djs' },
  { name: 'Videos', href: '#videos' },
  { name: 'Eventos', href: '#events' },
  { name: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-techno-darker/80 backdrop-blur-md py-2 shadow-lg' : 'py-4'
    )}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display text-white tracking-widest">
            IMP<span className="text-neon-purple">CORE</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-neon-purple transition-colors duration-200"
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
            className="text-gray-300 hover:text-neon-purple transition-colors duration-200"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://soundcloud.com/imp-records-820395379" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-300 hover:text-neon-purple transition-colors duration-200"
          >
            <SoundCloud className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-techno-dark border-gray-800">
            <div className="flex flex-col space-y-6 mt-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl text-gray-300 hover:text-neon-purple transition-colors duration-200"
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
                    className="text-gray-300 hover:text-neon-purple transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://soundcloud.com/imp-records-820395379" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-300 hover:text-neon-purple transition-colors duration-200"
                  >
                    <SoundCloud className="h-5 w-5" />
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

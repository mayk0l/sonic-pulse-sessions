
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: 'Radio', href: '#radio' },
  { name: 'DJs', href: '#djs' },
  { name: 'Videos', href: '#videos' },
  { name: 'Events', href: '#events' },
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
            SONIC<span className="text-neon-purple">PULSE</span>
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

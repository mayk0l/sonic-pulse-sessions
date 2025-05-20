
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FeaturedSpotlight } from '@/components/FeaturedSpotlight';
import { RadioPlayer } from '@/components/RadioPlayer';
import { ExternalLink, Instagram, SoundCloud, Headphones, Download, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Mock data for DJ profiles - in a real app, this would come from an API
const djProfiles = {
  nasac: {
    id: 'nasac',
    name: 'NASAC',
    fullName: 'Nicolás Sanhueza',
    genre: 'Techno / Peak Time / Hard Techno',
    image: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    bio: 'Nicolás Sanhueza, conocido como Nasac, es un DJ emergente apasionado por el techno. Su viaje comenzó en 2019 como parte del público, y en 2022 decidió dedicarse profesionalmente. En 2023 adquirió su primera controladora y estudió en DJ School, presentando sus primeros sets en The House. Actualmente, es residente en BigBang Label, IMPCORE y Delotrolado Club, explorando géneros como peak time, raw/hypnotic, hardgroove y hard techno. También se dedica a la producción musical, enfocándose en raw techno y hardgroove. Su estilo busca generar una conexión profunda con el público, creando una atmósfera inmersiva a través de sonidos estimulantes. Su objetivo es mantener a la audiencia en sintonía con la música, estableciendo una experiencia de baile única y envolvente.',
    instagram: 'https://www.instagram.com/nasac_dj',
    soundcloud: 'https://soundcloud.com/user-375594295',
    youtubeEmbed: 'https://www.youtube.com/embed/4EGyOAcQhxY?si=kHG7MZdnG2wZgW5H',
    soundcloudEmbed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1869560490&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    residencies: ['IMPCORE', 'BigBang Label', 'Delotrolado Club'],
    styles: ['Peak Time', 'Raw/Hypnotic', 'Hardgroove', 'Hard Techno'],
  },
  // Add more DJs as needed
};

export default function DjProfile() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'bio' | 'media' | 'contact'>('bio');
  
  // Default to first DJ if ID not found
  const djProfile = id && djProfiles[id as keyof typeof djProfiles] 
    ? djProfiles[id as keyof typeof djProfiles]
    : djProfiles.nasac;

  // Featured DJ spotlight content for reuse
  const featuredContent = {
    title: djProfile.name,
    subtitle: djProfile.genre,
    description: djProfile.bio.substring(0, 120) + '...',
    image: djProfile.image,
    ctaText: "Ver perfil completo",
    ctaLink: "#bio",
    type: "dj" as const
  };

  return (
    <div className="min-h-screen bg-techno-darker">
      <Navbar />
      
      {/* Hero Section with DJ Feature */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-techno-darker via-techno-darker/60 to-techno-darker"></div>
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* DJ Profile Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full border-2 border-neon-purple glow"></div>
                <img 
                  src={djProfile.image} 
                  alt={djProfile.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-neon-purple/30"
                />
                <div className="absolute -bottom-2 -right-2 bg-neon-purple text-black px-3 py-1 rounded-full text-xs font-bold">
                  RESIDENTE
                </div>
              </div>
              
              {/* DJ Info */}
              <div className="text-center md:text-left md:flex-1">
                <div className="mb-2 flex flex-wrap justify-center md:justify-start gap-2">
                  {djProfile.residencies.map(residency => (
                    <Badge key={residency} variant="outline" className="bg-neon-purple/10 text-neon-purple border-neon-purple/30">
                      {residency}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-2 tracking-wider text-white">
                  {djProfile.name}
                </h1>
                
                <p className="text-xl text-neon-cyan mb-3">{djProfile.fullName}</p>
                
                <p className="text-gray-300 mb-6 max-w-2xl">
                  {djProfile.genre}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {/* Social Media Links */}
                  <a 
                    href={djProfile.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-techno-dark p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-neon-purple" />
                  </a>
                  <a 
                    href={djProfile.soundcloud} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-techno-dark p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                  >
                    <SoundCloud className="h-5 w-5 text-neon-purple" />
                  </a>
                  
                  <Button className="bg-neon-purple text-black hover:bg-neon-purple/80 ml-2">
                    <Headphones className="mr-2 h-4 w-4" />
                    Escuchar Ahora
                  </Button>
                  
                  <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/20">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Presskit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Tabs */}
      <section className="py-8 bg-techno-dark border-y border-gray-800">
        <div className="container">
          <div className="flex justify-center gap-4 overflow-x-auto no-scrollbar">
            <Button 
              variant={activeTab === 'bio' ? 'default' : 'ghost'} 
              className={activeTab === 'bio' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('bio')}
            >
              Biografía
            </Button>
            <Button 
              variant={activeTab === 'media' ? 'default' : 'ghost'} 
              className={activeTab === 'media' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('media')}
            >
              Media
            </Button>
            <Button 
              variant={activeTab === 'contact' ? 'default' : 'ghost'} 
              className={activeTab === 'contact' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('contact')}
            >
              Contacto
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tab Content */}
      <section className="py-12 bg-techno-darker">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Bio Tab */}
            {activeTab === 'bio' && (
              <div className="animate-fade-in">
                <Card className="glass border-neon-purple/20">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-display mb-6 text-center">BIOGRAFÍA</h2>
                    <p className="text-gray-300 mb-8 leading-relaxed text-center sm:text-justify">
                      {djProfile.bio}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-display mb-4 text-neon-purple">Estilos</h3>
                      <div className="flex flex-wrap gap-2">
                        {djProfile.styles.map(style => (
                          <Badge key={style} className="bg-techno-dark border border-neon-purple/30 text-white">
                            {style}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display mb-4 text-neon-purple">Residencias</h3>
                      <div className="flex flex-wrap gap-2">
                        {djProfile.residencies.map(residency => (
                          <Badge key={residency} className="bg-techno-dark border border-neon-cyan/30 text-white">
                            {residency}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Media Tab */}
            {activeTab === 'media' && (
              <div className="animate-fade-in">
                <Card className="glass border-neon-purple/20 mb-8">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-display mb-4">Live en Vivo</h3>
                    <div className="aspect-video w-full overflow-hidden rounded-md">
                      <iframe 
                        className="w-full h-full"
                        src={djProfile.youtubeEmbed} 
                        title="YouTube video player" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass border-neon-purple/20">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-display mb-4">Último Set</h3>
                    <div className="w-full h-80 overflow-hidden rounded-md">
                      <iframe 
                        className="w-full h-full"
                        src={djProfile.soundcloudEmbed}
                        title="SoundCloud Player"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="animate-fade-in">
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
                          <SoundCloud className="h-6 w-6 text-neon-purple" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Live Radio */}
      <section className="py-12 bg-techno-dark">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-display mb-6 text-center">ESCUCHA NUESTRO RADIO EN VIVO</h2>
            <div className="glass border border-neon-purple/30 p-2 rounded-lg mb-8">
              <div className="flex justify-between items-center mb-4 px-4 pt-2">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-neon-purple rounded-full animate-pulse mr-2"></span>
                  <h3 className="text-xl font-display">IMPCORE RADIO</h3>
                </div>
                <p className="text-neon-cyan text-sm">Broadcasting 24/7</p>
              </div>
              <RadioPlayer />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

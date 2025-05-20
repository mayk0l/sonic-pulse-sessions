import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { RadioPlayer } from '@/components/RadioPlayer';
import { DjCard } from '@/components/DjCard';
import { VideoCard } from '@/components/VideoCard';
import { EventCard } from '@/components/EventCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FilterBar } from '@/components/FilterBar';
import { NewsletterForm } from '@/components/NewsletterForm';
import { FeaturedSpotlight } from '@/components/FeaturedSpotlight';
import { PaginatedList } from '@/components/PaginatedList';

const Index = () => {
  // State for filtering
  const [djFilter, setDjFilter] = useState('all');
  const [videoFilter, setVideoFilter] = useState('all');
  const [djSearch, setDjSearch] = useState('');
  const [videoSearch, setVideoSearch] = useState('');

  // Mock data
  const djs = [
    {
      id: 1,
      name: 'Techna',
      genre: 'Techno / Minimal',
      image: 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 2,
      name: 'Pulse Rider',
      genre: 'Deep Tech / Progressive',
      image: 'https://images.unsplash.com/photo-1571266028253-6c7f817e4bad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 3,
      name: 'Bass Kontrol',
      genre: 'Hard Techno',
      image: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 4,
      name: 'Synthetika',
      genre: 'Melodic Techno',
      image: 'https://images.unsplash.com/photo-1619229666372-3c756129f2ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 5,
      name: 'Neural Beats',
      genre: 'Techno / Minimal',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 6,
      name: 'Tempo Drift',
      genre: 'Deep Tech / Progressive',
      image: 'https://images.unsplash.com/photo-1470225628253-6c7f817e4bad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 7,
      name: 'Quantum Echo',
      genre: 'Hard Techno',
      image: 'https://images.unsplash.com/photo-1511924473169-56f7a8adeaaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 8,
      name: 'Phase Modulator',
      genre: 'Melodic Techno',
      image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ];
  
  const videos = [
    {
      id: 1,
      title: 'Night Transmission Live',
      artist: 'Techna',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:23:45',
      genre: 'Minimal',
    },
    {
      id: 2,
      title: 'Underground Berlin Session',
      artist: 'Bass Kontrol',
      thumbnail: 'https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '0:58:22',
      genre: 'Hard Techno',
    },
    {
      id: 3,
      title: 'Warehouse Project #42',
      artist: 'Pulse Rider',
      thumbnail: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '2:05:17',
      genre: 'Progressive',
    },
    {
      id: 4,
      title: 'Sunset Rooftop Live',
      artist: 'Synthetika',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:47:33',
      genre: 'Melodic',
    },
    {
      id: 5,
      title: 'Deep Space Journey',
      artist: 'Neural Beats',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:12:18',
      genre: 'Minimal',
    },
    {
      id: 6,
      title: 'Industrial Complex Live',
      artist: 'Tempo Drift',
      thumbnail: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '2:22:05',
      genre: 'Progressive',
    },
    {
      id: 7,
      title: 'Techno Fusion Festival',
      artist: 'Quantum Echo',
      thumbnail: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:35:42',
      genre: 'Hard Techno',
    },
    {
      id: 8,
      title: 'Ambient Voyage',
      artist: 'Phase Modulator',
      thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:58:29',
      genre: 'Melodic',
    },
  ];
  
  const events = [
    {
      id: 1,
      title: 'TechnoFusion Festival',
      date: 'June 25, 2025',
      location: 'Warehouse 23, Berlin',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 2,
      title: 'Night Pulse Sessions',
      date: 'July 12, 2025',
      location: 'Club Vision, Amsterdam',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 3,
      title: 'Underground Collective',
      date: 'August 05, 2025',
      location: 'Fabric, London',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ];

  // Filter options
  const djGenreOptions = [
    { value: 'minimal', label: 'Minimal' },
    { value: 'progressive', label: 'Progressive' },
    { value: 'hard-techno', label: 'Hard Techno' },
    { value: 'melodic', label: 'Melodic' }
  ];

  const videoGenreOptions = [
    { value: 'minimal', label: 'Minimal' },
    { value: 'progressive', label: 'Progressive' },
    { value: 'hard-techno', label: 'Hard Techno' },
    { value: 'melodic', label: 'Melodic' }
  ];

  // Filter DJs
  const filteredDjs = djs.filter(dj => {
    const matchesFilter = djFilter === 'all' || dj.genre.toLowerCase().includes(djFilter.toLowerCase());
    const matchesSearch = djSearch === '' || dj.name.toLowerCase().includes(djSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Filter Videos
  const filteredVideos = videos.filter(video => {
    const matchesFilter = videoFilter === 'all' || video.genre.toLowerCase() === videoFilter.toLowerCase();
    const matchesSearch = videoSearch === '' || 
                         video.title.toLowerCase().includes(videoSearch.toLowerCase()) ||
                         video.artist.toLowerCase().includes(videoSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Featured content
  const featuredDj = {
    title: "NASAC",
    subtitle: "Techno / Minimal",
    description: "Nicolás Sanhueza, conocido como Nasac, es un DJ emergente apasionado por el techno. Explorando géneros como peak time, raw/hypnotic, hardgroove y hard techno. Su estilo busca generar una conexión profunda con el público, creando una atmósfera inmersiva.",
    image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "Ver Perfil",
    ctaLink: "/dj/nasac",
    type: "dj" as const
  };

  const featuredEvent = {
    title: "IMPCORE Showcase",
    subtitle: "25 Junio, 2025 • Club Vision, Santiago",
    description: "El evento más grande de techno del año regresa a Santiago con tres días de música ininterrumpida en cinco escenarios. Con headliners internacionales y talentos underground, este es el evento que ningún entusiasta del techno debe perderse.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "Conseguir Tickets",
    ctaLink: "#events",
    type: "event" as const
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Radio Player */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Techno Event" 
            className="w-full h-full object-cover"
            style={{ filter: 'hue-rotate(320deg) saturate(1.5)' }} // Adds a red tint to the image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-impcore-dark via-impcore-dark/90 to-transparent" 
              style={{ background: 'linear-gradient(to top, rgb(10, 10, 15), rgba(10, 10, 15, 0.9), transparent)' }}></div>
        </div>
        
        <div className="container relative z-10 text-center px-4 mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider animate-fade-in">
            IMP<span className="text-[#ea384c]">CORE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Sumérgete en la escena techno underground con sets en vivo, DJs talentosos y eventos exclusivos
          </p>
        </div>
        
        {/* Featured Radio Player */}
        <div className="container relative z-10 px-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="max-w-5xl mx-auto">
            <div className="glass border border-[#ea384c]/30 p-2 rounded-lg mb-8">
              <div className="flex justify-between items-center mb-4 px-4 pt-2">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#ea384c] rounded-full animate-pulse mr-2"></span>
                  <h2 className="text-xl font-bold">RADIO EN VIVO</h2>
                </div>
                <p className="text-[#ea384c] text-sm">Transmitiendo 24/7</p>
              </div>
              <RadioPlayer />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#ea384c] hover:bg-[#ea384c]/80 text-white text-lg px-8 py-6">
                Escuchar En Vivo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Explorar Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* DJs Section */}
      <section id="djs" className="py-20 bg-impcore-dark">
        <div className="container px-4">
          <FeaturedSpotlight {...featuredDj} />
          
          <FilterBar 
            title="DJS RESIDENTES" 
            options={djGenreOptions}
            onFilterChange={setDjFilter}
            onSearchChange={setDjSearch}
          />
          
          <PaginatedList 
            items={filteredDjs} 
            itemsPerPage={4}
            renderItem={(dj) => <DjCard key={dj.id} {...dj} />}
          />
        </div>
      </section>
      
      {/* Videos Section */}
      <section id="videos" className="py-20">
        <div className="container px-4">
          <FilterBar 
            title="LANZAMIENTOS" 
            options={videoGenreOptions}
            onFilterChange={setVideoFilter}
            onSearchChange={setVideoSearch}
          />
          
          <PaginatedList 
            items={filteredVideos} 
            itemsPerPage={4}
            renderItem={(video) => <VideoCard key={video.id} {...video} />}
          />
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-20 bg-impcore-dark">
        <div className="container px-4">
          <FeaturedSpotlight {...featuredEvent} />
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">PRÓXIMOS EVENTOS</h2>
              <p className="text-gray-400">Únete a estos exclusivos eventos de techno</p>
            </div>
            <Button variant="link" className="text-impcore-pink">
              Todos los Eventos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-impcore-pink hover:bg-impcore-darkpink text-white px-8">
              Enviar Tu Evento
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">MANTENTE INFORMADO</h2>
            <p className="text-gray-400 mb-8">
              Suscríbete a nuestro boletín para contenido exclusivo, próximos eventos y ofertas especiales
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;


import { Navbar } from '@/components/Navbar';
import { RadioPlayer } from '@/components/RadioPlayer';
import { DjCard } from '@/components/DjCard';
import { VideoCard } from '@/components/VideoCard';
import { EventCard } from '@/components/EventCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
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
  ];
  
  const videos = [
    {
      id: 1,
      title: 'Night Transmission Live',
      artist: 'Techna',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:23:45',
    },
    {
      id: 2,
      title: 'Underground Berlin Session',
      artist: 'Bass Kontrol',
      thumbnail: 'https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '0:58:22',
    },
    {
      id: 3,
      title: 'Warehouse Project #42',
      artist: 'Pulse Rider',
      thumbnail: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '2:05:17',
    },
    {
      id: 4,
      title: 'Sunset Rooftop Live',
      artist: 'Synthetika',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      duration: '1:47:33',
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Techno Event" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-techno-darker via-techno-darker/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6 tracking-wider">
            SONIC<span className="text-neon-purple">PULSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Immerse yourself in the underground techno scene with live sets, talented DJs, and exclusive events
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-black text-lg px-8 py-6">
              Listen Live
            </Button>
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 text-lg px-8 py-6">
              Explore Events
            </Button>
          </div>
        </div>
      </section>
      
      {/* Radio Section */}
      <section id="radio" className="py-20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display mb-2">LIVE RADIO</h2>
              <p className="text-gray-400">Tune in to our 24/7 streaming techno radio</p>
            </div>
            <Button variant="link" className="text-neon-purple">
              View Schedule
            </Button>
          </div>
          
          <RadioPlayer />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['Deep Techno', 'Minimal', 'Industrial'].map((channel) => (
              <div key={channel} className="techno-card p-6">
                <h3 className="font-medium mb-2">{channel} Channel</h3>
                <p className="text-sm text-gray-400 mb-4">Specialized streams for focused listening</p>
                <Button variant="outline" className="w-full">Listen</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* DJs Section */}
      <section id="djs" className="py-20 bg-techno-dark">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display mb-2">RESIDENT DJs</h2>
              <p className="text-gray-400">Meet the talented artists behind our sound</p>
            </div>
            <Button variant="link" className="text-neon-purple">
              View All DJs
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {djs.map((dj) => (
              <DjCard key={dj.id} {...dj} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Videos Section */}
      <section id="videos" className="py-20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display mb-2">VIDEO SETS</h2>
              <p className="text-gray-400">Watch exclusive performances from our archive</p>
            </div>
            <Button variant="link" className="text-neon-purple">
              Browse Library
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="events" className="py-20 bg-techno-dark">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display mb-2">UPCOMING EVENTS</h2>
              <p className="text-gray-400">Join us at these exclusive techno gatherings</p>
            </div>
            <Button variant="link" className="text-neon-purple">
              All Events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-black px-8">
              Submit Your Event
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display mb-6">STAY IN THE LOOP</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for exclusive content, upcoming events and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-techno-dark border border-gray-700 rounded px-4 py-2 focus:border-neon-purple outline-none"
              />
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

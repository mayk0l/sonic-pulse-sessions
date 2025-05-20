
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Play, Pause, Volume2, VolumeX, Calendar, SkipForward, SkipBack, Mic } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';

const radioTracks = [
  { title: "Night Drive Sessions", artist: "NASAC", duration: "12:34" },
  { title: "Deep Diver", artist: "Bass Kontrol", duration: "8:45" },
  { title: "Hypnotic State", artist: "Pulse Rider", duration: "9:22" },
  { title: "Santiago Minimal", artist: "Synthetika", duration: "11:05" },
];

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showSchedule, setShowSchedule] = useState(false);
  
  // Simulate track changes
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTrackIndex((prev) => (prev + 1) % radioTracks.length);
      }, 30000); // Change track every 30 seconds for demo
      
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Audio logic would be implemented here
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Audio mute logic would be implemented here
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0]);
    if (newVolume[0] === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    // Volume change logic would be implemented here
  };

  const skipTrack = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentTrackIndex((prev) => (prev + 1) % radioTracks.length);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + radioTracks.length) % radioTracks.length);
    }
  };

  const currentTrack = radioTracks[currentTrackIndex];

  return (
    <div className="space-y-4">
      <Card className="glass border-impcore-pink/20 relative overflow-hidden">
        {/* Background animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-impcore-pink/10 to-neon-cyan/10 opacity-50"></div>
        <div className={cn(
          "absolute inset-0 bg-gradient-to-tr from-impcore-pink/20 to-neon-cyan/20 opacity-30",
          isPlaying && "animate-pulse-slow"
        )}></div>
        
        <CardContent className="p-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-impcore-pink glow">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-impcore-dark to-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-impcore-pink text-white px-3 py-1">
                    EN VIVO
                  </Badge>
                  <Mic className={cn(
                    "w-10 h-10 text-impcore-pink opacity-80",
                    isPlaying && "animate-pulse"
                  )} />
                </div>
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-tr from-impcore-pink/30 to-neon-cyan/30",
                  isPlaying && "animate-pulse-slow"
                )}></div>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h3 className="text-2xl font-bold">IMPCORE RADIO</h3>
                {isPlaying && (
                  <div className="inline-flex items-center bg-impcore-pink/20 px-2 py-1 rounded text-impcore-pink text-xs">
                    <span className="animate-pulse mr-1">●</span> AL AIRE
                  </div>
                )}
              </div>
              
              {isPlaying ? (
                <div>
                  <p className="text-impcore-pink text-sm mt-2 text-center md:text-left">
                    Reproduciendo: <span className="text-white">{currentTrack.title}</span>
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5 text-center md:text-left">
                    por {currentTrack.artist}
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 text-sm mt-2 text-center md:text-left">
                  Sets en vivo 24/7 — Presiona play para comenzar a escuchar
                </p>
              )}
              
              {isPlaying && (
                <div className="flex justify-center md:justify-start mt-3 space-x-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-1 bg-impcore-pink rounded-full",
                        `animate-waveform-${i % 5 + 1}`
                      )}
                      style={{ 
                        height: "20px", 
                        animation: `waveform ${Math.random() * 0.5 + 0.5}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800/50"
                  onClick={() => skipTrack('prev')}
                >
                  <SkipBack className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-impcore-pink text-impcore-pink hover:bg-impcore-pink/20 w-12 h-12"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800/50"
                  onClick={() => skipTrack('next')}
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                <Slider
                  defaultValue={[volume]}
                  max={100}
                  step={1}
                  className="w-24"
                  onValueChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <ToggleGroup type="single" value={showSchedule ? "schedule" : ""} className="bg-impcore-dark border border-gray-800 rounded-lg">
          <ToggleGroupItem 
            value="schedule" 
            onClick={() => setShowSchedule(!showSchedule)}
            className="text-sm data-[state=on]:bg-impcore-pink/20 data-[state=on]:text-impcore-pink"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Horario
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {showSchedule && (
        <Card className="bg-impcore-dark border-gray-800 animate-fade-in">
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-impcore-pink" />
              Horario de Hoy
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-800">
                <div>
                  <p className="font-medium">Morning Beats</p>
                  <p className="text-xs text-gray-400">DJ Techna</p>
                </div>
                <p className="text-sm text-gray-400">08:00 - 12:00</p>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <div>
                  <p className="font-medium">Afternoon Groove</p>
                  <p className="text-xs text-gray-400">Bass Kontrol</p>
                </div>
                <p className="text-sm text-gray-400">12:00 - 16:00</p>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800 bg-impcore-darker/30">
                <div>
                  <p className="font-medium text-impcore-pink">Night Drive Sessions</p>
                  <p className="text-xs text-gray-400">NASAC</p>
                </div>
                <p className="text-sm text-gray-400">16:00 - 22:00</p>
              </div>
              <div className="flex justify-between py-2">
                <div>
                  <p className="font-medium">Late Night Minimal</p>
                  <p className="text-xs text-gray-400">Synthetika</p>
                </div>
                <p className="text-sm text-gray-400">22:00 - 08:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

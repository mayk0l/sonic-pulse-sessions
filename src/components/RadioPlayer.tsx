
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Play, Pause, Volume2, VolumeX, Calendar, List } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const radioTracks = [
  { title: "Night Drive Sessions", artist: "Techna", duration: "12:34" },
  { title: "Deep Diver", artist: "Bass Kontrol", duration: "8:45" },
  { title: "Hypnotic State", artist: "Pulse Rider", duration: "9:22" },
  { title: "Berlin Minimal", artist: "Synthetika", duration: "11:05" },
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

  const currentTrack = radioTracks[currentTrackIndex];

  return (
    <div className="space-y-4">
      <Card className="glass border-neon-purple/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-neon-purple glow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xl">LIVE</span>
                </div>
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-tr from-neon-purple/30 to-neon-cyan/30",
                  isPlaying && "animate-pulse-slow"
                )}></div>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-display text-center md:text-left">SONIC PULSE RADIO</h3>
              {isPlaying ? (
                <div>
                  <p className="text-neon-purple text-sm mt-1 text-center md:text-left">
                    Now Playing: <span className="text-white">{currentTrack.title}</span>
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5 text-center md:text-left">
                    by {currentTrack.artist}
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 text-sm mt-1 text-center md:text-left">
                  Stream Live Sets 24/7
                </p>
              )}
              
              {isPlaying && (
                <div className="flex justify-center md:justify-start mt-3 space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-1 bg-neon-purple rounded-full",
                        `animate-waveform-${i}`
                      )}
                      style={{ height: "15px", animation: `waveform ${Math.random() * 0.5 + 0.5}s ease-in-out infinite alternate` }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-neon-purple text-neon-purple hover:bg-neon-purple/20"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              
              <div className="hidden md:flex items-center gap-3">
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
        <ToggleGroup type="single" value={showSchedule ? "schedule" : ""}>
          <ToggleGroupItem 
            value="schedule" 
            onClick={() => setShowSchedule(!showSchedule)}
            className="text-sm"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {showSchedule && (
        <Card className="bg-techno-dark border-gray-800">
          <CardContent className="p-4">
            <h3 className="font-display text-lg mb-3">Today's Schedule</h3>
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
              <div className="flex justify-between py-2 border-b border-gray-800 bg-techno-darker/30">
                <div>
                  <p className="font-medium text-neon-purple">Night Drive Sessions</p>
                  <p className="text-xs text-gray-400">Pulse Rider</p>
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

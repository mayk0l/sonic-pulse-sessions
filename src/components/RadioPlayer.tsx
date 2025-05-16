
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);

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

  return (
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
            <p className="text-gray-400 text-sm mt-1 text-center md:text-left">
              {isPlaying ? "Now Playing: Night Drive Sessions" : "Stream Live Sets 24/7"}
            </p>
            
            {isPlaying && (
              <div className="flex justify-center md:justify-start mt-3 space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-1 bg-neon-purple rounded-full",
                      `animate-waveform-${i}`
                    )}
                    style={{ height: "15px" }}
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
  );
}

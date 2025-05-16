
import { Card, CardContent } from '@/components/ui/card';
import { Play, Share2, Heart, BookmarkPlus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

type VideoCardProps = {
  title: string;
  artist: string;
  thumbnail: string;
  duration: string;
}

export function VideoCard({ title, artist, thumbnail, duration }: VideoCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `"${title}" by ${artist} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
      duration: 3000,
    });
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Bookmarked",
      description: `"${title}" by ${artist} has been ${isBookmarked ? "removed from" : "added to"} your bookmarks.`,
      duration: 3000,
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Share link copied!",
      description: `Share link for "${title}" copied to clipboard.`,
      duration: 3000,
    });
  };

  return (
    <Card className="techno-card group transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative overflow-hidden">
        <div className="aspect-video">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
          {duration}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-neon-purple/80 rounded-full p-4 cursor-pointer transform hover:scale-110 transition-transform">
            <Play className="h-8 w-8" />
          </div>
        </div>

        <div className="absolute bottom-2 right-2 flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className={cn(
                  "bg-black/70 p-1.5 rounded-full transition-colors",
                  isFavorite ? "text-red-500" : "text-gray-300 hover:text-red-500"
                )}
                onClick={handleFavorite}
              >
                <Heart className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{isFavorite ? "Remove from favorites" : "Add to favorites"}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className={cn(
                  "bg-black/70 p-1.5 rounded-full transition-colors",
                  isBookmarked ? "text-neon-cyan" : "text-gray-300 hover:text-neon-cyan"
                )}
                onClick={handleBookmark}
              >
                <BookmarkPlus className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{isBookmarked ? "Remove bookmark" : "Bookmark"}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="bg-black/70 p-1.5 rounded-full text-gray-300 hover:text-neon-purple transition-colors"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Share</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium truncate">{title}</h3>
        <p className="text-sm text-gray-400">{artist}</p>
      </CardContent>
    </Card>
  );
}

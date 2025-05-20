
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { DjProfile } from '@/types/dj';

type ProfileBioTabProps = {
  djProfile: DjProfile;
};

export function ProfileBioTab({ djProfile }: ProfileBioTabProps) {
  return (
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
  );
}

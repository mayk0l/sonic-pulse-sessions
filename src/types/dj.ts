
export interface DjProfile {
  id: string;
  name: string;
  fullName: string;
  genre: string;
  image: string;
  bio: string;
  instagram: string;
  soundcloud: string;
  youtubeEmbed: string;
  soundcloudEmbed: string;
  residencies: string[];
  styles: string[];
}

export const djProfiles: Record<string, DjProfile> = {
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

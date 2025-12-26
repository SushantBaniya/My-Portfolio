import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    alt: "Coding workspace",
    caption: "My development setup",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    alt: "Laptop coding",
    caption: "Late night coding session",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    alt: "Monitor with code",
    caption: "Building new features",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    alt: "Code on screen",
    caption: "Clean code principles",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop",
    alt: "Team collaboration",
    caption: "Collaborating with the team",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    alt: "Tech meetup",
    caption: "Tech community events",
  },
];

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="photos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary font-mono">05.</span> Photos
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A glimpse into my journey as a developer
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-foreground font-medium text-center px-4">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.src.replace("w=600&h=400", "w=1200&h=800")}
              alt={selectedPhoto.alt}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-center text-foreground mt-4 text-lg">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;

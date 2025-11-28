import { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const AnniversaryVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Video Section */}
      <section className="relative py-0 overflow-hidden shadow-xl">
        <div 
          className="relative h-[600px] bg-cover bg-center cursor-pointer group"
          style={{ backgroundImage: "url('/images/about_us/anniversary.jpg')" }}
          onClick={() => setIsModalOpen(true)}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            {/* Play Button */}
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Play className="w-10 h-10 text-white ml-1" fill="white" strokeWidth={0} />
            </div>
            
            {/* Text */}
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              Watch Our Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              15th Anniversary Celebration
            </h2>
            <p className="text-white/90 text-lg max-w-2xl">
              Celebrating 15 years of empowering dreams and transforming lives across Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-0">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Video Player */}
          <div className="relative aspect-video bg-black">
            {isModalOpen && (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8Ec8LjHepdc?autoplay=1"
                title="Bills Microcredit 15th Anniversary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnniversaryVideo;

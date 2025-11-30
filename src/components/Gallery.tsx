import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface GalleryProps {
  images?: string[];
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const Gallery = ({
  images = [],
  title = "News & Gallery",
  subtitle = "Moments that define our journey",
  showCTA = true,
  ctaText = "See More",
  ctaLink = "/gallery",
}: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default images if none provided
  const defaultImages = [
    "https://ik.imagekit.io/nsuolqs5g/others/ambassador/793fdd3a-20e0-4d6a-8c3c-07478cf3f308.jpg?updatedAt=1764463235515",
    "https://ik.imagekit.io/nsuolqs5g/BILLS%20DONATE%20TO%20HOMOWO%20HEALTH%20WALK/Ga%20Homowo%20HW%20-%2015.jpg?updatedAt=1764454566331",
    "https://ik.imagekit.io/nsuolqs5g/Events/39331bfe-0951-4d68-9f0b-97f087bcb26d.jpg?updatedAt=1764484377247",
    "https://ik.imagekit.io/nsuolqs5g/others/a1952fd6-8dc4-4bc7-883a-2d78f0116c92.jpg",
    "https://ik.imagekit.io/nsuolqs5g/STAFF%20TRAINING/Staff%20Training%20ATU-113.jpg?updatedAt=1764365596686",
    "https://ik.imagekit.io/nsuolqs5g/others/tailor.jpg?updatedAt=1764454764353",
    "https://ik.imagekit.io/nsuolqs5g/others/c8981339-359d-4606-b15b-b3a0f73f61d0.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/a1952fd6-8dc4-4bc7-883a-2d78f0116c92.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/d1e97c5c-f4be-4b35-8f2d-aa0b64c410dd.jpg",
    "https://ik.imagekit.io/nsuolqs5g/BILLS%20DONATE%20TO%20HOMOWO%20HEALTH%20WALK/Ga%20Homowo%20HW%20-%2012.jpg?updatedAt=1764454565710",
    "https://ik.imagekit.io/nsuolqs5g/others/11d4b6f8-d5cf-410c-9a15-671ca4043982.jpg",
    "https://ik.imagekit.io/nsuolqs5g/STAFF%20TRAINING/Staff%20Training%20ATU-113.jpg?updatedAt=1764365596686",
    "https://ik.imagekit.io/nsuolqs5g/others/d1e97c5c-f4be-4b35-8f2d-aa0b64c410dd.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/11d4b6f8-d5cf-410c-9a15-671ca4043982.jpg",
    "https://ik.imagekit.io/nsuolqs5g/DONATION%20TO%20CHIEF%20IMAM/c80ce1b3-3425-4d72-a558-0ee9153b77cb.jpg?updatedAt=1764482362446",
    
    "https://ik.imagekit.io/nsuolqs5g/BILLS%20DONATE%20TO%20HOMOWO%20HEALTH%20WALK/Ga%20Homowo%20HW%20-%2012.jpg?updatedAt=1764454565710",
    "https://ik.imagekit.io/nsuolqs5g/others/a1952fd6-8dc4-4bc7-883a-2d78f0116c92.jpg",
    "https://ik.imagekit.io/nsuolqs5g/BILLS%20DONATE%20TO%20HOMOWO%20HEALTH%20WALK/Ga%20Homowo%20HW%20-%2015.jpg?updatedAt=1764454566331",
    "https://ik.imagekit.io/nsuolqs5g/others/tailor.jpg?updatedAt=1764454764353",
    "https://ik.imagekit.io/nsuolqs5g/others/ambassador/34ec9612-8166-4784-8271-258f68612354.jpg?updatedAt=1764463849571",
    "https://ik.imagekit.io/nsuolqs5g/Events/39331bfe-0951-4d68-9f0b-97f087bcb26d.jpg?updatedAt=1764484377247",
    "https://ik.imagekit.io/nsuolqs5g/STAFF%20TRAINING/Staff%20Training%20ATU-113.jpg?updatedAt=1764365596686",
    "https://ik.imagekit.io/nsuolqs5g/others/11d4b6f8-d5cf-410c-9a15-671ca4043982.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/a1952fd6-8dc4-4bc7-883a-2d78f0116c92.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/ambassador/moment_3.jpg?updatedAt=1764461608844",
    "https://ik.imagekit.io/nsuolqs5g/others/c8981339-359d-4606-b15b-b3a0f73f61d0.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/11d4b6f8-d5cf-410c-9a15-671ca4043982.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/d1e97c5c-f4be-4b35-8f2d-aa0b64c410dd.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/d1e97c5c-f4be-4b35-8f2d-aa0b64c410dd.jpg",
    "https://ik.imagekit.io/nsuolqs5g/STAFF%20TRAINING/Staff%20Training%20ATU-113.jpg?updatedAt=1764365596686",


        "https://ik.imagekit.io/nsuolqs5g/BILLS%20DONATE%20TO%20HOMOWO%20HEALTH%20WALK/Ga%20Homowo%20HW%20-%2012.jpg?updatedAt=1764454565710",
    "https://ik.imagekit.io/nsuolqs5g/others/a1952fd6-8dc4-4bc7-883a-2d78f0116c92.jpg",
    "https://ik.imagekit.io/nsuolqs5g/BILLS%20DONATE%20TO%20HOMOWO%20HEALTH%20WALK/Ga%20Homowo%20HW%20-%2015.jpg?updatedAt=1764454566331",
    "https://ik.imagekit.io/nsuolqs5g/others/tailor.jpg?updatedAt=1764454764353",
    "https://ik.imagekit.io/nsuolqs5g/others/ambassador/34ec9612-8166-4784-8271-258f68612354.jpg?updatedAt=1764463849571",
    "https://ik.imagekit.io/nsuolqs5g/Events/39331bfe-0951-4d68-9f0b-97f087bcb26d.jpg?updatedAt=1764484377247",
    "https://ik.imagekit.io/nsuolqs5g/STAFF%20TRAINING/Staff%20Training%20ATU-113.jpg?updatedAt=1764365596686",
    "https://ik.imagekit.io/nsuolqs5g/others/11d4b6f8-d5cf-410c-9a15-671ca4043982.jpg",
    "https://ik.imagekit.io/nsuolqs5g/others/a1952fd6-8dc4-4bc7-883a-2d78f0116c92.jpg",
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4">
              {title}
            </h2>
          </div>

          {/* 3D Marquee */}
          <div className="mx-auto rounded-2xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800/50">
            <ThreeDMarquee images={galleryImages} onImageClick={handleImageClick} />
          </div>

          {/* CTA Button */}
          {showCTA && (
            <div className="text-center mt-12">
              <a href={ctaLink}>
                <Button className="group text-lg hover:bg-topbar hover:text-topbar-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl bg-transparent p-0 border-0">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Image */}
          <div className="relative w-full h-[80vh] bg-transparent flex items-center justify-center">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-md"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;

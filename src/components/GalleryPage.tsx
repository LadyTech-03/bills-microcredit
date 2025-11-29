import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { X, Award, Users, Heart, TrendingUp, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/galleryImages";

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: any;
  color: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Categories with icons
  const categories: Category[] = [
    { id: "all", name: "All Events", icon: Calendar, color: "bg-primary" },
    { id: "csr", name: "CSR Activities", icon: Heart, color: "bg-red-500" },
    { id: "training", name: "Training", icon: Users, color: "bg-blue-500" },
    { id: "outreach", name: "Client Outreach", icon: TrendingUp, color: "bg-green-500" },
    { id: "awards", name: "Awards & Recognition", icon: Award, color: "bg-yellow-500" },
    { id: "events", name: "Corporate Events", icon: Briefcase, color: "bg-purple-500" },
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Browse by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? `${category.color} text-white shadow-lg scale-105`
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory} // Re-trigger animation on category change
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100 dark:bg-gray-800"
                onClick={() => handleImageClick(image)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  {/* <div className="absolute top-4 right-4">
                    {categories.find(cat => cat.id === image.category) && (
                      <div className={`${categories.find(cat => cat.id === image.category)?.color} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                        {(() => {
                          const cat = categories.find(c => c.id === image.category);
                          const Icon = cat?.icon;
                          return Icon ? <Icon className="w-3 h-3" /> : null;
                        })()}
                        {categories.find(cat => cat.id === image.category)?.name}
                      </div>
                    )}
                  </div> */}
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No images found in this category
              </p>
            </motion.div>
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
          
          {/* Image and Caption */}
          <div className="relative w-full">
            {selectedImage && (
              <>
                <div className="relative h-[80vh] bg-transparent flex items-center justify-center p-8">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
                {/* Caption Overlay */}
                <div className="absolute -bottom-8 left-0 right-0 p-8">
                  <p className="text-white text-lg text-center max-w-4xl mx-auto">
                    {selectedImage.caption}
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryPage;

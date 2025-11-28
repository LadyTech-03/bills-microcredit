import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageHero from "@/components/PageHero"
import TopBar from "@/components/TopBar"
import GalleryPage from "@/components/GalleryPage"
import FAQs from "@/components/about/FAQs"

const MediaGallery = () => {
    return (
        <div className="min-h-screen bg-background">
            <TopBar />
            <Navbar />
            {/* Hero Section */}
            <PageHero
                title="Gallery"
                image="/images/gallery/hero.jpg"
                breadcrumbItems="Gallery"
            />
            
            {/* Gallery Content */}
            <GalleryPage />
            <FAQs />

            
            <Footer />
        </div>
    )
}

export default MediaGallery

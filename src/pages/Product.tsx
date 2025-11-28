import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageHero from "@/components/PageHero"
import TopBar from "@/components/TopBar"

const Product = () => {
    return (
        <div className="min-h-screen bg-background">
            <TopBar />
            <Navbar />
            {/* Hero Section */}
            <PageHero
                title="Products"
                image="/images/products/hero.jpg"
                breadcrumbItems="Products"
            />
            
            <Footer />
        </div>
    )
}

export default Product

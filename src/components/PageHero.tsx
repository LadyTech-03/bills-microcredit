import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const PageHero = ({
    title,
    image,
    breadcrumbItems,
    imageStyle = {},
}) => {
    return (
        <div 
            className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center h-42"
            style={{ backgroundImage: `url('${image}')`, ...imageStyle }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-topbar/70" />
            
            <div className="relative max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-6">
                <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-white/80 hover:text-white">
                    Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-white font-medium">
                    {breadcrumbItems}
                    </BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                {title}
            </h1>
            </div>
        </div>
    );
};

export default PageHero;
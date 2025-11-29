import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Kwame Mensah",
    role: "Small Business Owner",
    // image: "/images/testimonials/kwame.png",
    image: "https://ik.imagekit.io/nsuolqs5g/others/testimonials/kwame.png",
    rating: 5,
    text: "Bills Microcredit helped me expand my business when I needed it most. The process was quick, and they came right to my shop. Highly recommended!",
  },
  {
    id: 2,
    name: "Ama Osei",
    role: "Market Trader",
    // image: "/images/testimonials/ama.png",
    image: "https://ik.imagekit.io/nsuolqs5g/others/testimonials/ama.png",
    rating: 5,
    text: "I've been working with Bills for 3 years now. Their customer service is excellent, and the repayment terms are very flexible. They truly understand our needs.",
  },
  {
    id: 3,
    name: "Kofi Asante",
    role: "Entrepreneur",
    // image: "/images/testimonials/kofi.png",
    image: "https://ik.imagekit.io/nsuolqs5g/others/testimonials/kofi.png",
    rating: 4,
    text: "The branchless model is a game-changer. No more wasting time in queues. They process everything quickly and professionally.",
  },
  {
    id: 4,
    name: "Abena Owusu",
    role: "Fashion Designer",
    // image: "/images/testimonials/abena.png",
    image: "https://ik.imagekit.io/nsuolqs5g/others/testimonials/abena.png",
    rating: 5,
    text: "Fast approval, friendly staff, and flexible payment plans. Bills Microcredit has been a lifesaver for my growing business!",
  },
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Real stories from real people who trust Bills Microcredit
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 ${isPaused ? "" : "animate-scroll"}`}
              style={{
                width: "max-content",
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group w-[400px] flex-shrink-0"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-16 h-16 text-primary" fill="currentColor" />
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join thousands of satisfied customers
          </p>
          <button className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Call us now
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

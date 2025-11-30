import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Globe
} from "lucide-react";
import FAQs from "@/components/about/FAQs";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        image="/images/contact/hero.jpg"
        breadcrumbItems="Contact"
      />

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Contact Methods - Simple & Clean */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Call Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-primary flex items-center justify-center">
                <Phone className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:0302200390"
                  className="block text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +233 (0) 302 200 390
                </a>
                <span className="text-gray-400 dark:text-gray-500">/</span>
                <a
                  href="tel:0596920833"
                  className="block text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +233 (0) 596 920 833
                </a>
              </div>
            </motion.div>

            {/* Email Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-primary flex items-center justify-center">
                <Mail className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Email
              </h3>
              <a
                href="mailto:info@billsmicrocredit.com"
                className="block text-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                info@billsmicrocredit.com
              </a>
            </motion.div>

            {/* Visit Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-primary flex items-center justify-center">
                <MapPin className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Location
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Osu Danguah Circle Ring Road E Citizen Kofi House,
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Nuumo GOA Street, Accra GA-035-4662, Accra - Ghana
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0XX XXX XXXX"
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="resize-none text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto px-12 py-6 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-xl group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Map Section */}
      <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 bg-topbar">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-topbar-foreground rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-topbar" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-topbar-foreground">
                Find Us on the Map
              </h2>
            </div>
            <p className="text-lg text-topbar-foreground">
              Visit our office in Accra, Ghana
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40990.64740478214!2d-0.22418013075448645!3d5.590692402611465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b08bbeb7e2f%3A0xc9d0a0d293a3d167!2sBILLS%20MICRO-CREDIT%20LTD!5e1!3m2!1sen!2sgh!4v1764488734159!5m2!1sen!2sgh"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <FAQs />

      <Footer />
    </div>
  );
};

export default ContactUs;

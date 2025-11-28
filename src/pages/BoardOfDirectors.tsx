import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { boardMembers } from "@/data/teamData";

const BoardOfDirectors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <PageHero
        title="Board of Directors"
        image="/images/team/board-hero.jpg"
        breadcrumbItems="Board of Directors"
      />

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Leadership & Governance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our Board of Directors brings together decades of experience in finance, 
              governance, and social impact. They provide strategic oversight and ensure 
              Bills Microcredit remains committed to its mission of financial inclusion.
            </p>
          </div> */}

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {boardMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                category="board"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoardOfDirectors;

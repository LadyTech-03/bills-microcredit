import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getTeamMemberById, getTeamMembers, TeamCategory } from "@/data/teamData";
import { Linkedin, Mail, Phone, Award, GraduationCap, Briefcase, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TeamMemberDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  
  const member = getTeamMemberById(id || "");
  const categoryMembers = getTeamMembers(category as TeamCategory);

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Member Not Found
          </h1>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Header with Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Basic Info */}
                  <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h1>
                    <p className="text-xl text-primary font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {member.bio}
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-wrap gap-3">
                      {member.linkedIn && (
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="p-8 border-t border-gray-200 dark:border-gray-700 space-y-8">
                  {/* Achievements */}
                  {member.achievements && member.achievements.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Key Achievements
                        </h2>
                      </div>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Education */}
                  {member.education && member.education.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Education
                        </h2>
                      </div>
                      <ul className="space-y-2">
                        {member.education.map((edu, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Experience */}
                  {member.experience && member.experience.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Professional Experience
                        </h2>
                      </div>
                      <ul className="space-y-2">
                        {member.experience.map((exp, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Other Team Members */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Other {member.role} Members
                </h3>
                <div className="space-y-4">
                  {categoryMembers
                    .filter((m) => m.id !== member.id)
                    .map((teamMember) => (
                      <Link
                        key={teamMember.id}
                        to={`/team/${category}/${teamMember.id}`}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                          <img
                            src={teamMember.photo}
                            alt={teamMember.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors duration-300">
                            {teamMember.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {teamMember.position}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                      </Link>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberDetail;

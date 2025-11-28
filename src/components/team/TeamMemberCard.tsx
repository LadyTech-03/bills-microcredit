import { motion } from "framer-motion";
import { TeamMember } from "@/data/teamData";
import { Linkedin, Mail, Phone, Award, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMemberCardProps {
  member: TeamMember;
  category: string;
}

const TeamMemberCard = ({ member, category }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <Link
            to={`/team/${category}/${member.id}`}
            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-semibold mb-3">{member.position}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-9 h-9 rounded-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;


import React from 'react';
import { TeamMember } from '@/app/types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="transform transition-transform hover:scale-105 hover:translate-y-2 bg-gradient-to-r from-teal-400 to-amber-500 p-1 rounded-lg shadow-lg hover:shadow-2xl duration-300 ease-in-out">
      <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 duration-300 hover:ring-4 hover:ring-teal-300 hover:ring-opacity-50">
        {/* Name */}
        <h1 className="text-3xl font-bold text-gray-900 text-center tracking-wide">{member.name}</h1>
        {/* Role */}
        <h2 className="text-lg font-semibold text-gray-700 text-center mt-2">{member.role}</h2>
        {/* Bio */}
        <p className="text-sm text-gray-600 mt-4 text-center italic">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;




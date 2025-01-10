// components/TeamCard.tsx
import { TeamMember } from '@/app/types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
      <h2 className="text-lg text-gray-700 mt-2">{member.role}</h2>
      <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
    </div>
  );
};

export default TeamCard;

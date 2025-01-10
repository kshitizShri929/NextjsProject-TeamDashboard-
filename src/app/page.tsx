// "use client"
// // app/page.tsx
// import React, { useEffect, useState } from 'react';
// import TeamCard from './components/TeamCard';
// import { TeamMember } from './types';

// const HomePage: React.FC = () => {
//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchTeamData = async () => {
//       try {
//         const response = await fetch('/api/team');
//         const data = await response.json();
//         setTeamMembers(data);
//       } catch (error) {
//         console.error('Error fetching team data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeamData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl">Team Dashboard</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//         {teamMembers.map((member) => (
//           <TeamCard key={member.id} member={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


'use client';

import React, { useEffect, useState } from 'react';
import TeamCard from './components/TeamCard';
import { TeamMember } from './types';

const HomePage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('All');

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/api/team');
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All' || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl">Team Dashboard</h1>
      <div className="my-4 flex items-center space-x-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-64"
        />
        {/* Filter dropdown */}
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="All">All Roles</option>
          <option value="Full-Stack Developer">Full-Stack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
          <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
          <option value="Content Strategist">Content Strategist</option>
          <option value="Machine Learning Engineer">Machine Learning Engineer</option>
          <option value="Business Analyst">Business Analyst</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;



     
// 'use client';

// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { TeamMember } from '@/app/types';

// const TeamMemberProfile: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query; // Access the dynamic ID from the route
//   const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (!id) return;

//     const fetchTeamMember = async () => {
//       try {
//         const response = await fetch(`/api/team/${id}`);
//         if (!response.ok) throw new Error('Failed to fetch team member details');
//         const data = await response.json();
//         setTeamMember(data);
//       } catch (error) {
//         console.error('Error fetching team member:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeamMember();
//   }, [id]);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
//   }

//   if (!teamMember) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p>Team member not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">{teamMember.name}</h1>
//         <p className="text-gray-600 text-lg mb-2">
//           <strong>Role:</strong> {teamMember.role}
//         </p>
//         <p className="text-gray-600 mb-4">
//           <strong>Bio:</strong> {teamMember.bio || 'No bio available.'}
//         </p>
//         <button
//           onClick={() => router.push('/')}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TeamMemberProfile;





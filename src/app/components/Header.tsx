// app/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
//     <header className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* <h1 className="text-xl font-semibold">Team Dashboard</h1> */}
//         <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//   Team Dashboard
// </h1>

//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/" className="hover:text-gray-400">Home</Link>
//             </li>
//             <li>
//               <Link href="/tasks" className="hover:text-gray-400">Task Management</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>


<header className="bg-gray-800 text-white p-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <h1 className="text-2xl font-bold">Team Dashboard</h1>

    {/* Navigation */}
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/tasks" className="hover:text-gray-400">Task Management</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>


  );
};




export default Header;

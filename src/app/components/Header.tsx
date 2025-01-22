
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Team Dashboard</h1>
        <nav>
          <ul className="flex flex-wrap space-x-6 mt-2 md:mt-0">
            <li>
              <Link href="/" className="hover:text-gray-400 text-sm md:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tasks" className="hover:text-gray-400 text-sm md:text-base">
                Task Management
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;




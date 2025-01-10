// app/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Team Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/tasks" className="hover:text-gray-400">Tasks</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

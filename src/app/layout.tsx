
import Header from './components/Header';  // Corrected import path
import Footer from './components/Footer';
import './globals.css'; // Make sure to import global styles (Tailwind)

export const metadata = {
  title: 'Team Dashboard',
  description: 'A dashboard to manage team members and tasks.',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
    </body>
    </html>
  );
};

export default Layout;

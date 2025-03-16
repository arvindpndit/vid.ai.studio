import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-[1200px] mx-auto p-3 flex justify-between items-center">
        <div className="text-xl font-bold">vid.ai.studio</div>
        {/* Desktop Menu */}
        <DesktopMenu />
        {/* Mobile Menu Button */}
        <MobileMenu />
      </nav>
    </div>
  );
};

export default Navbar;


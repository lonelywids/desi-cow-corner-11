
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-earth-800">
            Vardini Farms
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="/shop" label="Shop" />
          <NavLink href="/meet-our-cows" label="Meet Our Cows" />
          <NavLink href="/rescue-mission" label="Rescue Mission" />
          <NavLink href="/farm-experience" label="Farm Experience" />
          <NavLink href="/desi-initiatives" label="Feel Desi Initiatives" />
          <Link to="/shop" className="btn-primary">Visit Farm</Link>
          <button className="p-2 relative">
            <ShoppingBag className="h-6 w-6 text-earth-800" />
            <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden p-2 rounded-md text-earth-700 hover:bg-earth-100"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 px-6 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          <MobileNavLink href="/shop" label="Shop" />
          <MobileNavLink href="/meet-our-cows" label="Meet Our Cows" />
          <MobileNavLink href="/rescue-mission" label="Rescue Mission" />
          <MobileNavLink href="/farm-experience" label="Farm Experience" />
          <MobileNavLink href="/desi-initiatives" label="Feel Desi Initiatives" />
          
          <div className="pt-4 space-y-4">
            <Link to="/farm-experience" className="block w-full btn-primary text-center">
              Visit Farm
            </Link>
            <button className="w-full btn-secondary flex items-center justify-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>View Cart (0)</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => (
  <Link 
    to={href} 
    className="relative text-earth-800 font-medium hover:text-earth-600 transition-colors duration-200 group"
  >
    <div className="flex items-center space-x-1">
      <span>{label}</span>
      {hasDropdown && <ChevronDown className="h-4 w-4" />}
    </div>
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ href, label }: { href: string; label: string }) => (
  <Link 
    to={href} 
    className="text-lg font-medium text-earth-800 py-2 border-b border-earth-100"
  >
    {label}
  </Link>
);

export default Navbar;

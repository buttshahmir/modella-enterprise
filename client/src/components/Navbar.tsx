import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const navigate = (href: string) => {
    setLocation(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileOpen
            ? 'bg-black/60 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <motion.div
              className="flex-shrink-0 cursor-pointer flex items-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/')}
            >
              <img
                src="/logo.png"
                alt="Modella Enterprise"
                className="h-10 w-auto object-contain"
                loading="eager"
              />
            </motion.div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => navigate(item.href)}
                  className="text-white font-poppins font-medium text-sm relative group"
                  whileHover={{ color: '#f2c94c' }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />
                </motion.button>
              ))}
            </div> {/* ✅ FIX: yeh missing tha */}

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <motion.button
                className="text-white p-2"
                onClick={() => setMobileOpen((prev) => !prev)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10"
            >
              <div className="flex flex-col px-6 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.href)}
                    className="text-left text-white py-3 border-b border-white/10 last:border-b-0"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
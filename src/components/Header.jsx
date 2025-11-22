import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-parchment border-b border-charcoal/10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/" className="block text-center group">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <img
              src={logo}
              alt="Balance & Broth Logo"
              className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
            />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            BALANCE <span className="text-sage">&</span> BROTH
          </h1>
          <p className="text-charcoal/60 text-sm mt-1 tracking-widest uppercase">
            Culinary Case Files
          </p>
        </Link>

        {/* Navigation links */}
        <nav className="flex justify-center gap-8 mt-6 text-sm">
          <Link
            to="/"
            className="text-charcoal hover:text-sage transition-colors tracking-wide"
          >
            Recipes
          </Link>
          <Link
            to="/about"
            className="text-charcoal/50 hover:text-sage transition-colors tracking-wide cursor-not-allowed"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-charcoal/50 hover:text-sage transition-colors tracking-wide cursor-not-allowed"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

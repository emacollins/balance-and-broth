import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  // Sync local state with URL param
  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // If on home page, update URL immediately for real-time filtering
    if (location.pathname === '/') {
      if (term) {
        setSearchParams({ q: term });
      } else {
        setSearchParams({});
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // If not on home page, navigate to home with search param
    if (location.pathname !== '/') {
      navigate(`/?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="bg-parchment border-b border-charcoal/10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/" className="block text-center group">
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal tracking-wide flex items-center justify-center gap-4">
            BALANCE
            <img
              src={logo}
              alt="&"
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
            />
            BROTH
          </h1>
          <p className="text-charcoal/60 text-sm mt-3 tracking-widest uppercase">
            Culinary Case Files
          </p>
        </Link>

        {/* Navigation & Search */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <nav className="flex gap-8 text-sm">
            <Link
              to="/"
              className="text-charcoal hover:text-sage transition-colors tracking-wide"
            >
              Recipes
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-white/50 border border-charcoal/20 rounded-full py-2 pl-4 pr-10 text-sm text-charcoal focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all placeholder:text-charcoal/30 font-mono"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-sage transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;

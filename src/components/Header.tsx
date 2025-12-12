import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, forwardRef } from 'react';
import { SearchBar } from '../components/SearchBar';
import type { Recipe } from '../types/recipe';

import logo from '../assets/logo.png';

const Header = forwardRef<HTMLDivElement>((props, ref) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('q') || '');

  // Sync local state with URL param
  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchTermChange = (term: string): void => {
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

  const handleSelectResult = (recipe: Recipe): void => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <header ref={ref} className="bg-parchment border-b border-charcoal/10 py-6 relative">
      <div className="max-w-6xl mx-auto px-4 overflow-visible">
        <Link to="/" className="block text-center group">
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal tracking-wide flex items-center justify-center gap-4">
            BALANCE
            <img
              src={logo}
              alt="&"
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-210 drop-shadow-sm"
            />
            BROTH
          </h1>
          <p className="text-charcoal/60 text-sm mt-3 tracking-widest uppercase">
            Claire's Recipe Collection
          </p>
        </Link>

        {/* Navigation & Search */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 overflow-visible">
          <nav className="flex gap-8 text-sm">
            <Link
              to="/"
              className="text-charcoal hover:text-sage transition-colors tracking-wide"
            >
              Recipes
            </Link>
          </nav>

          {/* Search Bar Component */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={handleSearchTermChange}
            onSelectResult={handleSelectResult}
          />
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

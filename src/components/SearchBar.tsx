import { useState } from 'react';
import { recipes } from '../data/recipes';
import { filterRecipes } from '../utils/search';
import type { Recipe } from '../types/recipe';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSelectResult: (recipe: Recipe) => void;
}

export function SearchBar({ searchTerm, setSearchTerm, onSelectResult }: SearchBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Get top 5 matching recipes
  const topMatches: Recipe[] = filterRecipes(recipes, searchTerm, 'All', 5, false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term: string = e.target.value;
    setSearchTerm(term);

    // Check matches with the NEW term (not the old topMatches)
    const newMatches = filterRecipes(recipes, term, 'All', 5, false);
    const shouldShowDropdown = term !== '' && newMatches.length > 0;
    setIsDropdownOpen(shouldShowDropdown);
  };

  const handleResultClick = (recipe: Recipe): void => {
    onSelectResult(recipe);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs z-50">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleInputChange}
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

      {isDropdownOpen && topMatches.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-charcoal/20 rounded-lg shadow-lg z-[100] overflow-hidden max-h-64 overflow-y-auto">
          {topMatches.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => handleResultClick(recipe)}
              className="block w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-sage/10 transition-colors border-b border-charcoal/5 last:border-b-0"
            >
              {recipe.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
import { useState } from 'react';
import { recipes } from '../data/recipes';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import RecipeCard from '../components/RecipeCard';
import Navigation from '../components/Navigation';

function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter recipes based on active category
  const filteredRecipes = activeFilter === 'All'
    ? recipes
    : recipes.filter(recipe => recipe.category === activeFilter);

  // Only show complete recipes (those with protocols)
  const completeRecipes = filteredRecipes.filter(recipe => recipe.protocol.length > 0);

  return (
    <div className="min-h-screen bg-parchment grid-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">Case Files</h2>
          <div className="flex items-center justify-center gap-3 text-charcoal/60 text-sm font-mono uppercase tracking-widest">
            <span className="h-px w-8 bg-charcoal/20"></span>
            <span>{completeRecipes.length} active cases</span>
            <span className="h-px w-8 bg-charcoal/20"></span>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {completeRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Empty state */}
        {completeRecipes.length === 0 && (
          <div className="text-center py-24 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 text-charcoal/10">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-2">No Cases Found</h3>
            <p className="text-charcoal/50 font-mono text-sm uppercase tracking-widest">
              Try adjusting your filter criteria
            </p>
          </div>
        )}

        {/* Coming Soon Section */}
        {filteredRecipes.some(r => r.protocol.length === 0) && (
          <div className="mt-24 pt-12 border-t border-charcoal/10">
            <h3 className="font-serif text-2xl text-charcoal/40 text-center mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-charcoal/10"></span>
              Pending Review
              <span className="h-px w-12 bg-charcoal/10"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredRecipes
                .filter(r => r.protocol.length === 0)
                .map(recipe => (
                  <span
                    key={recipe.id}
                    className="px-4 py-2 bg-charcoal/5 text-charcoal/40 text-sm font-mono rounded-sm border border-transparent hover:border-charcoal/10 transition-colors cursor-default"
                  >
                    {recipe.title}
                  </span>
                ))}
            </div>
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
}

export default HomePage;

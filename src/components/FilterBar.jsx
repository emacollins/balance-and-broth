import { categories } from '../data/recipes';

function FilterBar({ activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-0 py-8 border-b border-charcoal/10 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveFilter(category.id)}
          className={`
            relative px-6 py-3 text-sm md:text-base font-serif tracking-wide
            transition-all duration-300 ease-out
            ${activeFilter === category.id
              ? 'text-charcoal z-10'
              : 'text-charcoal/50 hover:text-charcoal/80 hover:bg-charcoal/5'
            }
          `}
        >
          {/* Tab Shape Background */}
          {activeFilter === category.id && (
            <div className="absolute inset-0 bg-parchment border-t-2 border-x border-charcoal/20 rounded-t-lg -mb-px shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-[-1]" />
          )}

          {/* Active Indicator Line */}
          {activeFilter === category.id && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-sage" />
          )}

          <span className="relative z-10 flex items-center gap-2">
            {category.label}
            {activeFilter === category.id && (
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-fade-in" />
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

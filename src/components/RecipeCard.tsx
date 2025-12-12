import { Link } from 'react-router-dom';
import { getDifficultyLabel } from '../data/recipes';
import type { RecipeCardProps } from '../types/components';

function RecipeCard({ recipe }: RecipeCardProps) {
  const difficultyPercent: number = (recipe.difficultyLevel / 3) * 100;

  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="block group relative"
    >
      {/* Card Container - File Folder Look */}
      <div className="bg-paper border border-charcoal/20 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col relative z-10">

        {/* Image container with overlay */}
        <div className="relative h-56 overflow-hidden bg-manila border-b border-charcoal/10">
          <div className="absolute inset-0 bg-charcoal/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
          <img
            src={recipe.img}
            alt={recipe.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Category Stamp */}
          <div className="absolute top-4 right-4 z-20 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
            <div className="bg-parchment/95 px-3 py-1 text-xs font-bold uppercase tracking-widest text-charcoal border-2 border-charcoal/20 shadow-sm backdrop-blur-sm">
              {recipe.category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col relative">
          {/* Decorative top line */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />

          {/* Title */}
          <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-sage-dark transition-colors leading-tight">
            {recipe.title}
          </h3>

          {/* Difficulty Level */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-charcoal/60 mb-1.5 font-mono">
              <span className="uppercase tracking-wider">Difficulty</span>
              <span className="font-bold">{getDifficultyLabel(recipe.difficultyLevel)}</span>
            </div>
            <div className="h-1.5 bg-charcoal/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-sage transition-all duration-500 ease-out group-hover:bg-sage-dark"
                style={{ width: `${difficultyPercent}%` }}
              />
            </div>
          </div>

          {/* Metadata Footer */}
          <div className="mt-auto pt-4 border-t border-charcoal/10 flex justify-between items-center">
            <div className="flex gap-4 text-xs text-charcoal/50 font-mono uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {recipe.time}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {recipe.servings}
              </span>
            </div>

            {/* Arrow Icon */}
            <div className="text-charcoal/30 group-hover:text-sage group-hover:translate-x-1 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked paper effect behind */}
      <div className="absolute top-2 left-2 right-[-4px] bottom-[-4px] bg-charcoal/5 rounded-sm -z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
    </Link>
  );
}

export default RecipeCard;

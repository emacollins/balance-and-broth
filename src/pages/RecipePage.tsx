import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes, getDifficultyLabel } from '../data/recipes';
import type { Recipe } from '../types/recipe';
import Header from '../components/Header';

function RecipePage() {
  const { id } = useParams<{ id: string }>();
  const headerRef = useRef<HTMLDivElement>(null);

  // Type-safe recipe lookup with defensive check
  const recipe: Recipe | undefined = id
    ? recipes.find((r: Recipe) => r.id === parseInt(id, 10))
    : undefined;

  if (!recipe) {
    return (
      <div className="min-h-screen bg-parchment grid-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-4">Recipe Not Found</h2>
          <Link to="/" className="text-sage hover:text-sage-light underline">
            Return to Recipe Collection
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      window.scrollTo({ top: headerHeight, behavior: 'smooth' });
    }
  }, [id]);

  // TypeScript now knows recipe is defined here!
  const difficultyPercent: number = (recipe.difficultyLevel / 3) * 100;

  return (
    <div className="min-h-screen bg-parchment grid-background pb-20 md:pb-8">
      <Header ref={headerRef} />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-charcoal/40 hover:text-sage mb-8 transition-colors group font-mono text-sm tracking-widest uppercase"
        >
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Recipe Collection
        </Link>

        {/* Title Section */}
        <div className="mb-12 text-center relative">
          <p className="text-sage font-mono uppercase tracking-[0.2em] text-xs mb-4 animate-fade-in">
            Recipe Card &mdash; {recipe.category}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-6 animate-slide-up">
            {recipe.title}
          </h1>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full" />
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Image */}
          <div className="md:col-span-7 relative group">
            <div className="absolute inset-0 bg-charcoal/5 transform translate-x-2 translate-y-2 rounded-sm -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
            <img
              src={recipe.img}
              alt={recipe.title}
              className="w-full h-[400px] object-cover rounded-sm border border-charcoal/20 shadow-sm grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Info Panel */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-6">
            {/* Difficulty Level */}
            <div className="bg-paper border border-charcoal/10 rounded-sm p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              <h3 className="text-xs uppercase tracking-widest text-charcoal/50 mb-3 font-mono">
                Difficulty
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-2 bg-charcoal/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sage transition-all duration-1000 ease-out"
                      style={{ width: `${difficultyPercent}%` }}
                    />
                  </div>
                </div>
                <span className="text-charcoal font-serif italic text-lg">
                  {getDifficultyLabel(recipe.difficultyLevel)}
                </span>
              </div>
            </div>

            {/* Session Info */}
            <div className="bg-paper border border-charcoal/10 rounded-sm p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              <h3 className="text-xs uppercase tracking-widest text-charcoal/50 mb-4 font-mono">
                Session Details
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-charcoal/40 text-xs mb-1">Duration</span>
                  <p className="text-charcoal font-serif text-xl">{recipe.time}</p>
                </div>
                <div>
                  <span className="block text-charcoal/40 text-xs mb-1">Yield</span>
                  <p className="text-charcoal font-serif text-xl">{recipe.servings}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chef's Notes */}
        {recipe.description && recipe.description !== "Recipe details coming soon." && (
          <div className="relative bg-sage/10 border-l-4 border-sage rounded-r-sm p-8 mb-16 max-w-3xl mx-auto transform -rotate-1">
            <div className="absolute -top-3 -left-3 text-sage opacity-20">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703C7.91246 16 7.01703 16.8954 7.01703 18V21H5.01703V18C5.01703 15.7909 6.80789 14 9.01703 14H12.017C14.2262 14 16.017 15.7909 16.017 18V21H14.017ZM12.017 6C12.017 7.10457 11.1216 8 10.017 8C8.91246 8 8.01703 7.10457 8.01703 6C8.01703 4.89543 8.91246 4 10.017 4C11.1216 4 12.017 4.89543 12.017 6ZM10.017 10C12.2262 10 14.017 8.20914 14.017 6C14.017 3.79086 12.2262 2 10.017 2C7.80789 2 6.01703 3.79086 6.01703 6C6.01703 8.20914 7.80789 10 10.017 10ZM19.017 12C19.017 13.1046 18.1216 14 17.017 14C15.9125 14 15.017 13.1046 15.017 12C15.017 10.8954 15.9125 10 17.017 10C18.1216 10 19.017 10.8954 19.017 12ZM17.017 16C19.2262 16 21.017 14.2091 21.017 12C21.017 9.79086 19.2262 8 17.017 8C14.8079 8 13.017 9.79086 13.017 12C13.017 14.2091 14.8079 16 17.017 16Z" /></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-sage-dark mb-3">
              Chef's Notes
            </h3>
            <p className="font-serif text-xl md:text-2xl text-charcoal/80 italic leading-relaxed">
              "{recipe.description}"
            </p>
          </div>
        )}

        {/* Two Column Layout for Composition and Protocol */}
        <div className="grid md:grid-cols-12 gap-12">
          {/* Ingredients - Sticky Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-8">
              <h2 className="font-serif text-2xl text-charcoal mb-6 pb-2 border-b-2 border-charcoal/10">
                Ingredients
              </h2>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-sage/40 group-hover:bg-sage transition-colors flex-shrink-0" />
                    <span className="text-charcoal/80 font-sans leading-relaxed group-hover:text-charcoal transition-colors">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-8">
            <h2 className="font-serif text-2xl text-charcoal mb-8 pb-2 border-b-2 border-charcoal/10">
              Instructions
            </h2>
            <ol className="relative space-y-12">
              {/* Spine line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-charcoal/10" />

              {recipe.instructions.map((step: string, index: number) => (
                <li key={index} className="flex gap-8 relative group">
                  {/* Step number node */}
                  <div className="w-10 h-10 rounded-full bg-parchment border-2 border-charcoal/20 text-charcoal/60 flex items-center justify-center font-serif text-lg font-bold flex-shrink-0 z-10 group-hover:border-sage group-hover:text-sage transition-colors shadow-sm">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-charcoal/80 leading-relaxed text-lg group-hover:text-charcoal transition-colors">
                      {step}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tips Section */}
        {recipe.tips && (
          <div className="mt-16 bg-terracotta/5 border border-terracotta/20 rounded-sm p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-bl-full -mr-12 -mt-12" />
            <h3 className="font-serif text-xl text-terracotta mb-4 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tips & Notes
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              {recipe.tips}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default RecipePage;

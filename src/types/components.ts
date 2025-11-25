/**
 * Component Props Type Definitions
 *
 * These interfaces define the props (parameters) for React components.
 * They ensure components receive the correct data types.
 */

import type { Recipe, RecipeCategory } from './recipe';

// RecipeCard component props
export interface RecipeCardProps {
  recipe: Recipe;
}

// FilterBar component props
export interface FilterBarProps {
  activeFilter: RecipeCategory | 'All';
  setActiveFilter: (category: RecipeCategory | 'All') => void;
}

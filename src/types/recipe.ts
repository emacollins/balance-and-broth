/**
 * Recipe Type Definitions
 *
 * These types define the core data structure for recipes in the Balance & Broth app.
 * Using union types and literal types provides autocomplete and type safety.
 */

// Union type for recipe categories (provides autocomplete!)
export type RecipeCategory = 'Restorative' | 'Structural' | 'Mobilization';

// Literal type for difficulty (more precise than just 'number')
export type StabilityGrade = 1 | 2 | 3;

// Return type for stability label helper function
export type StabilityLabel = 'Easy' | 'Moderate' | 'Advanced' | 'Unknown';

// Main recipe interface - defines the shape of a recipe object
export interface Recipe {
  id: number;
  title: string;
  category: RecipeCategory;
  time: string;
  servings: string;
  stabilityGrade: StabilityGrade;
  clinicalImpression: string;
  composition: string[];  // Ingredients array
  protocol: string[];     // Instructions array
  tips: string;
  img: string;           // Image path
}

// Category filter structure used in FilterBar
export interface CategoryFilter {
  id: RecipeCategory | 'All';  // 'All' is special case for showing all recipes
  label: string;
  description: string;
}

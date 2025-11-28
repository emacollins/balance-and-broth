import type { Recipe, RecipeCategory } from '../types/recipe';


export function filterRecipes(
    recipes: Recipe[],
    searchQuery: string,
    category: RecipeCategory | 'All' = 'All',
    limit: number = Infinity,
    onlyComplete: boolean = true
): Recipe[] {

    // Filter recipes based on active category and search query
    let filteredRecipes: Recipe[] = recipes.filter((recipe: Recipe) => {
        const matchesCategory: boolean = category === 'All' || recipe.category === category;
        const matchesSearch: boolean = !searchQuery ||
            recipe.title.toLowerCase().includes(searchQuery) ||
            recipe.clinicalImpression.toLowerCase().includes(searchQuery) ||
            recipe.composition.some((ing: string) => ing.toLowerCase().includes(searchQuery));

        return matchesCategory && matchesSearch;
    });

    const completeRecipes = onlyComplete
        ? filteredRecipes.filter((recipe: Recipe) => recipe.protocol.length > 0)
        : filteredRecipes;

    return completeRecipes.slice(0, limit)
}
// Recipe data for Balance & Broth
// Categories organize recipes by meal type:
// - Breakfast: Morning meals
// - Lunch: Midday dishes
// - Dinner: Evening meals
// - Dessert: Sweet treats
// - Sides & Snacks: Accompaniments and appetizers

import type { Recipe, CategoryFilter, DifficultyLabel, DifficultyLevel } from '../types/recipe';
import placeholder from '../assets/placeholder.jpg';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Chocolate Chip Cookies",
    category: "Dessert",
    time: "30 minutes",
    servings: "30 cookies",
    difficultyLevel: 1,
    description: "A classic dish for mood elevation and household harmony. Best served warm.",
    ingredients: [
      "3 Cups Flour",
      "1 Tsp Baking Soda",
      "1 Tsp Baking Powder",
      "1/4 Tsp Salt",
      "1 Cup Granulated Sugar",
      "1 Cup Brown Sugar",
      "2 Tsp Vanilla",
      "2 Eggs",
      "2 Sticks Butter (1 cup)",
      "1 Bag Chocolate Chips",
      "Pinch of sea salt"
    ],
    instructions: [
      "Preheat oven to 350 degrees",
      "Mix granulated sugar, brown sugar, vanilla, and softened butter",
      "Add eggs to mix",
      "Mix flour, baking soda, baking powder, and salt in a separate bowl",
      "Slowly add dry mixture into the bowl while mixing",
      "Fold chocolate chips in",
      "Roll into 2 inch balls and place on cookie sheet",
      "Bake for 7-10 minutes and place cookies on a cooling rack",
      "Sprinkle sea salt over cookies immediatley after taking out of the oven"
    ],
    tips: "Cool the batter in the fridge for better cookies, not required!",
    img: placeholder
  },
  {
    id: 2,
    title: "Molokhia",
    category: "Dinner",
    time: "1.5 hours",
    servings: "20 servings",
    difficultyLevel: 3,
    description: "A traditional Egyptian comfort food that nourishes both body and soul. Excellent for family gatherings.",
    ingredients: [
      "1 Package Minced Molokhia",
      "1 Uncooked Chicken (or 4-5 Chicken Breasts)",
      "2 Stalks Celery",
      "2 Carrots",
      "1/2 an Onion",
      "2 Strands of Parsley",
      "Salt and Pepper",
      "1/2 Tbsp Coriander",
      "4-5 Cloves Garlic",
      "1.5 Tbsp Butter",
      "3 cups rice",
      "1 Tbsp Vegetable Oil"
    ],
    instructions: [
      "Chicken Broth: Bring a medium-large pot of water to a boil",
      "Cut up carrots, celery, onion, and parsley",
      "Put chicken and cut veggies into water once boiling",
      "Add a couple pinches of salt and pepper to the pot",
      "Turn down stove and simmer for about an hour",
      "Taste chicken broth and add spices if needed",
      "Take out chicken and veggies (can use a slotted spoon)",
      "Rice: Take 3 cups of rice and rinse it",
      "Cook rice in a pan with 1 tbsp of vegetable oil until golden",
      "Add 1.5 tsp of salt and 6 cups of chicken broth",
      "Simmer for 18 minutes with lid on",
      "Molokhia: Shred/cut the chicken",
      "Simmer frozen molokhia in 4 cups of chicken broth and frequently stir",
      "Add salt and pepper",
      "Cook 4-5 minced cloves of garlic in 1 tbsp of butter",
      "Once garlic has a light golden color, add 1/2 tbsp of coriander and mix",
      "Take off heat and pour into molokhia when it is fully melted/mixed",
      "Cut up 1/2 an onion very thinly and place in a bowl with lemon juice to top"
    ],
    tips: "You can buy chicken broth and a rotisserie chicken if you do not want to make chicken broth. I like to shred the chicken by using two forks.",
    img: placeholder
  },
  {
    id: 3,
    title: "Foul",
    category: "Dinner",
    time: "15 minutes",
    servings: "4 servings",
    difficultyLevel: 1,
    description: "A quick protein-rich dish from the Mediterranean. Perfect for busy mornings requiring lasting energy.",
    ingredients: [
      "Olive Oil",
      "Tomato",
      "Cucumber",
      "Green Onion",
      "Parsley",
      "Lemon",
      "Salt and Pepper",
      "Cumin",
      "Can of Foul Moudammas",
      "Pita Bread"
    ],
    instructions: [
      "Dice up cucumber, tomato, green onion, and parsley and put in a bowl",
      "Add olive oil, salt, pepper, lemon, cumin, and the can of foul",
      "Mix and serve with pita bread"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 4,
    title: "Banana Bread",
    category: "Dessert",
    time: "1.5 hours",
    servings: "1 loaf",
    difficultyLevel: 2,
    description: "A comforting baked dish that utilizes overripe bananas. Wonderful aroma fills the kitchen.",
    ingredients: [
      "1/2 cup butter, melted",
      "1 cup white sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1.5 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/2 cup sour cream",
      "1/2 cup chocolate chips (optional)",
      "2 medium bananas, sliced",
      "2 tsp cinnamon"
    ],
    instructions: [
      "Preheat oven to 350 degrees F. Grease a 9x5 inch loaf pan",
      "In a large bowl, stir together the melted butter and sugar. Add the eggs and vanilla, mix well",
      "Combine the flour, baking soda, salt, and cinnamon, stir into the butter mixture until smooth",
      "Fold in the sour cream and bananas. Spread evenly into the prepared pan",
      "Bake at 350 degrees F for 60 minutes, or until a toothpick inserted into the center comes out clean"
    ],
    tips: "You can use the same recipe for muffins, but bake for 35 minutes instead.",
    img: placeholder
  },
  {
    id: 5,
    title: "Tortillas",
    category: "Sides & Snacks",
    time: "30 minutes",
    servings: "16-20 tortillas",
    difficultyLevel: 2,
    description: "Foundation elements for multiple meal applications. Homemade preparation significantly improves taste.",
    ingredients: [
      "3 cups all-purpose flour",
      "1 teaspoon salt",
      "1 teaspoon baking powder",
      "1/3 cup extra virgin olive oil",
      "1 cup warm water"
    ],
    instructions: [
      "Combine flour, baking powder, and salt in a large bowl and mix",
      "Add olive oil and warm water and mix until solid ball of dough",
      "Add flour if too sticky and water if too doughy",
      "Form into 1 inch balls and cover for 15 minutes-2 hours",
      "Roll out balls into tortillas and heat on a pan over medium heat"
    ],
    tips: "You can make the tortillas any size, small for tacos or large for a burrito.",
    img: placeholder
  },
  {
    id: 6,
    title: "Tomato Soup",
    category: "Lunch",
    time: "50 minutes",
    servings: "6 servings",
    difficultyLevel: 2,
    description: "Perfect when you're feeling cold. This dish provides immediate warmth and comfort.",
    ingredients: [
      "2 Tbs. extra-virgin olive oil",
      "1 Tbs. unsalted butter",
      "1.5 large white onion, finely chopped",
      "6 large cloves garlic, smashed and peeled",
      "2 Tbs. all-purpose flour",
      "3 cups lower-salt chicken broth (or water)",
      "28-oz. can whole peeled plum tomatoes, pureed",
      "1 sprig fresh rosemary",
      "Salt and pepper",
      "3 Tbs. thinly sliced fresh basil"
    ],
    instructions: [
      "Heat the oil and butter over medium-low heat until the butter melts. Add the onion and garlic and cook",
      "Add the flour and stir to coat the onion and garlic",
      "Add the broth, tomatoes, rosemary, basil, salt and pepper. Bring to a simmer over medium-high heat while stirring",
      "Reduce the heat to low, cover, and simmer for 40 minutes",
      "Let cool briefly and then puree in batches in a blender or food processor"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 7,
    title: "Coffee Cake",
    category: "Breakfast",
    time: "45 minutes",
    servings: "15 servings",
    difficultyLevel: 2,
    description: "Ideal for morning gatherings. The cinnamon streusel layer provides exceptional satisfaction.",
    ingredients: [
      "1 cup oil",
      "2 eggs beaten",
      "1 tsp vanilla",
      "1 cup milk",
      "1 cup sugar",
      "3 cups flour",
      "3 tsp baking powder",
      "1/2 tsp salt",
      "1.5 cup brown sugar",
      "2 tsp cinnamon",
      "1/3 - 1/2 cup butter melted"
    ],
    instructions: [
      "In a large mixing bowl, combine oil, eggs, vanilla and milk together",
      "In a medium bowl, blend together sugar, flour, baking powder and salt",
      "Combine egg mixture with flour mixture. Pour half the batter into a lightly greased 9x13 pan",
      "In a medium bowl, prepare streusel by combining brown sugar and cinnamon",
      "Sprinkle half of streusel on top of the batter. Top with remaining batter then sprinkle remaining streusel on top",
      "Drizzle with melted butter",
      "Bake, covered with foil at 350 for 25-30 minutes. Take off foil and bake an additional 10 minutes"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 8,
    title: "Boursin Pasta",
    category: "Dinner",
    time: "35 minutes",
    servings: "4 servings",
    difficultyLevel: 1,
    description: "A creamy roasted tomato dish. The boursin cheese provides remarkable depth with minimal effort.",
    ingredients: [
      "Boursin cheese (or garlic and herb spread)",
      "4-5 medium tomatoes",
      "1 small/medium onion",
      "1 entire stock of garlic",
      "Olive oil (couple tablespoons)",
      "Balsamic vinegar (1/2 - 1 tbsp)",
      "Salt and pepper",
      "Basil (4 leaves)",
      "Spinach",
      "One box/lb pasta",
      "French bread"
    ],
    instructions: [
      "Preheat oven to ~400 degrees",
      "Pour olive oil on bottom of cake pan",
      "Cut tomatoes and onions into quarters and put in pan",
      "Add the cheese and all of the garlic",
      "Add salt and pepper and balsamic vinegar",
      "Put in oven until tomatoes and onions are roasted (~15-20 min)",
      "Make pasta",
      "Once the items are baked, put in food processor with basil",
      "Once blended, put over pasta and top with chopped spinach",
      "Serve with french bread"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 9,
    title: "Chili",
    category: "Dinner",
    time: "3+ hours",
    servings: "8 servings",
    difficultyLevel: 2,
    description: "A hearty warming dish. Extended cooking time develops complex comforting flavors.",
    ingredients: [
      "3 cans petite diced tomatoes",
      "2-3 cans of beans of your choice",
      "1 can of whole corn",
      "1 green bell pepper",
      "1 white or yellow onion",
      "2 cups of beef broth (optional)",
      "1 jalapeno",
      "4 cloves garlic",
      "Salt and pepper",
      "3 TBSP chili powder",
      "1 TBSP garlic powder",
      "1 TBSP onion powder",
      "2 TBSP brown sugar",
      "(optional) sprinkle of red pepper flakes"
    ],
    instructions: [
      "Put all the cans after draining and rinsing, broth and spices/sugar in a crockpot/stove pot on medium/high",
      "Dice onion, jalapeno, bell pepper, and garlic",
      "Stir and add water/broth as needed",
      "Cook for ~3 hours (can cook overnight on low or up to 6 hours on med/high)",
      "Season as needed"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 10,
    title: "Queso",
    category: "Sides & Snacks",
    time: "15 minutes",
    servings: "6 servings",
    difficultyLevel: 1,
    description: "A crowd-pleasing appetizer dish. Homemade preparation far exceeds processed alternatives.",
    ingredients: [
      "3 TBSP flour",
      "3.5 TBSP butter",
      "10 oz of cheddar cheese",
      "2 cups milk",
      "1.5 TSP salt",
      "1 TSP pepper",
      "1 TSP chili powder",
      "1 TSP garlic powder",
      "Sprinkle of chili flakes"
    ],
    instructions: [
      "Heat stove to medium heat and put butter in pan",
      "After butter has melted, add the flour and stir",
      "Slowly add milk and continue to stir",
      "Add the spices and continue to stir until it thickens",
      "Add the cheese and seasoning as needed"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 11,
    title: "Chicken Tortilla Soup",
    category: "Lunch",
    time: "45 minutes",
    servings: "6 servings",
    difficultyLevel: 2,
    description: "A spicy, comforting dish with excellent protein. The dried peppers provide authentic depth.",
    ingredients: [
      "2 ancho peppers (dried)",
      "2 guajillo peppers (dried)",
      "2 tbsps olive oil",
      "3 heaping spoonfuls of diced chipotle peppers",
      "1 chicken breast",
      "7 garlic cloves",
      "1.5 cup of dried brown basmati rice",
      "1 can black beans",
      "1 can (14.5oz) petite diced tomatoes",
      "1 medium yellow onion (diced)",
      "6 cups of chicken broth",
      "1 tsp sea salt",
      "1 tsp chili powder",
      "1/2 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp pepper",
      "1 Bay Leaf",
      "1/4 cup of heavy cream",
      "1/3 cup of greek yogurt",
      "Cilantro, lime, avocado to top",
      "Tortilla chips"
    ],
    instructions: [
      "Heat olive oil in large pot, simmer garlic dried peppers, and chipotle peppers for 2-3 minutes",
      "Add 1/4 cup of chicken broth to pot, cover and simmer for ~5 minutes",
      "Immersion blend pot ingredients when soft",
      "Add about 6 cups of chicken broth to pot with blended ingredients",
      "Add rice, raw chicken breast, petite diced tomatoes, yellow onion, bay leaf, spices to pot",
      "Let soup cook 25-30 minutes on low heat",
      "When done, remove chicken breast and shred. Add back to pot with black beans",
      "Add heavy cream and greek yogurt, stir in",
      "Remove bay leaf, sprinkle of brown sugar",
      "Serve with cilantro, lime, avocado, and chips"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 12,
    title: "Red Sauce Gnocchi",
    category: "Dinner",
    time: "1 hour",
    servings: "4 servings",
    difficultyLevel: 3,
    description: "Homemade gnocchi provides superior texture and satisfaction. The roasted red pepper sauce adds complexity.",
    ingredients: [
      "2 medium sweet or russet potatoes",
      "1.75 - 2 cups of flour",
      "1 tsp salt",
      "1 red bell pepper",
      "1 small yellow onion",
      "1 head of garlic",
      "2 tbsp olive oil",
      "1/2 cup basil",
      "~1/2 tsp salt",
      "4 tsp of pepper",
      "1/3 cup of greek yogurt",
      "1 tbsp tomato paste",
      "2 tbsp butter",
      "1 stick of fresh rosemary",
      "1/3 cup of starch water from cooked gnocchi",
      "1 tbsp of balsamic vinegar",
      "1 small lemon",
      "Parmesan to your liking"
    ],
    instructions: [
      "Gnocchi: Pierce potatoes several times with a fork and microwave for 5-8 minutes until soft",
      "Scoop out the insides of the potatoes into a bowl and mash until smooth",
      "Add flour and salt to the mashed potatoes, mixing with your hands until the dough forms",
      "Knead the dough, adding more flour as needed, until it is firm but slightly sticky",
      "Divide the dough into four sections. Roll each section into a long rope about 3/4 inch thick",
      "Cut the rope into small gnocchi-sized pieces and lightly toss them with flour",
      "Bring a pot of salted water to a boil. Boil the gnocchi in batches, removing them when they float",
      "Sauce: Preheat oven to 400F. Roughly chop red bell pepper and yellow onion",
      "Place vegetables on baking sheet with garlic cloves. Drizzle with olive oil, salt and pepper, roast 15-20 min",
      "Once roasted, blend vegetables with balsamic vinegar, basil, and 1/3 cup gnocchi starch water",
      "In saucepan, melt butter. Add rosemary sprig and lemon juice. Cook for 3 minutes",
      "Add tomato paste and remaining starch water. Stir, remove rosemary, add blended vegetables. Cook 5 min",
      "Stir in Greek yogurt and Parmesan. Simmer 2-3 minutes until creamy",
      "Add cooked gnocchi to sauce, stirring gently to coat"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 13,
    title: "Pesto",
    category: "Dinner",
    time: "20 minutes",
    servings: "4 servings",
    difficultyLevel: 1,
    description: "A nutrient-dense sauce. The broccoli adds fiber while maintaining classic pesto appeal.",
    ingredients: [
      "1/2 cup of walnuts",
      "1/2 cup of cashews",
      "1 medium head of broccoli",
      "3 cloves of garlic",
      "Handful of cilantro with stems",
      "Handful of parsley with stems",
      "1 large lemon (juiced)",
      "Bit of lemon zest",
      "3/4 cup of olive oil",
      "1/4 tsp salt",
      "5 handfuls of spinach",
      "1/2 cup of grated Parmesan",
      "Dash of pepper to taste"
    ],
    instructions: [
      "Boil water for pasta, drop in broccoli to pot to steam before adding pasta",
      "Boil pasta and drain, saving some starch water",
      "To food processor, add all ingredients and blend"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 14,
    title: "Ramen",
    category: "Dinner",
    time: "1.5 hours",
    servings: "4 servings",
    difficultyLevel: 2,
    description: "A deeply warming dish with customizable protein. Homemade broth elevates the comforting effect.",
    ingredients: [
      "7.5 Cups of Chicken Broth",
      "3/4 cup of carrots (Diced)",
      "1 small yellow onion (largely diced)",
      "1/2 Jalapeno (SEED IN, thinly sliced)",
      "4 white mushrooms (sliced)",
      "1/2 TSP of Iodized Salt",
      "1 TSP Garlic Powder",
      "1/4 TSP Pepper",
      "1 TSP Red Pepper Flakes",
      "3 TSP Hoisin Sauce",
      "3 TBS Soy Sauce",
      "2 TSP Oyster Sauce",
      "1 TSP Sriracha",
      "1 TBS Olive Oil",
      "Green onion",
      "1/2 cup of cooked chicken (optional)",
      "1 cup of spinach",
      "1/4 cup of cilantro"
    ],
    instructions: [
      "For homemade broth: Bring pot of water to boil with carrots, celery, onion, and parsley",
      "Add chicken and simmer for about an hour",
      "Taste and add spices if needed. Remove chicken and veggies",
      "For soup: Sautee carrots, mushroom, onion in olive oil for ~2 min",
      "Add broth, sauces, jalapeno, cover and bring to simmer",
      "Reduce heat, cook 5 minutes to allow vegetables to soften",
      "Add noodles and cook",
      "Add chicken and spinach"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 15,
    title: "Whole Wheat Buttermilk Pancakes",
    category: "Breakfast",
    time: "25 minutes",
    servings: "8 pancakes",
    difficultyLevel: 1,
    description: "A wholesome breakfast dish. The buttermilk substitute creates excellent fluffiness.",
    ingredients: [
      "1 Cup of whole wheat flour",
      "1.5 tsp of baking powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1 tsp of cinnamon",
      "1 cup of milk",
      "1 tbsp of apple cider vinegar",
      "2 tbsp butter",
      "1 tsp vanilla",
      "1 egg",
      "1/4 cup of greek yogurt",
      "1 tbsp maple syrup"
    ],
    instructions: [
      "Mix dry ingredients in large mixing bowl",
      "In separate cup, mix milk and vinegar and let sit for 5-10 minutes, until curdled",
      "Once milk mixture has sat, mix in vanilla, egg, maple syrup and butter and whisk",
      "Add greek yogurt and milk mixture to dry mixture bowl and whisk all together"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 16,
    title: "Zesty Avocado Salad Dressing",
    category: "Sides & Snacks",
    time: "10 minutes",
    servings: "6 servings",
    difficultyLevel: 1,
    description: "A healthy fat-rich dressing. Transforms simple salads into satisfying meals.",
    ingredients: [
      "1 Medium Avocado",
      "Small handful of parsley (stems included!)",
      "2 tablespoons of olive oil",
      "1/4 teaspoon of pepper",
      "Pinch of sea salt",
      "1 small clove of garlic",
      "1/4 Cup of greek yogurt",
      "1 Tablespoon of Balsamic Vinegar",
      "1/2 teaspoon of oregano",
      "2 tablespoons of water"
    ],
    instructions: [
      "Put all ingredients in food processor"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 17,
    title: "Sweet Potato Pancakes",
    category: "Breakfast",
    time: "30 minutes",
    servings: "12 pancakes",
    difficultyLevel: 2,
    description: "A nutrient-dense breakfast alternative. Sweet potato provides lasting energy.",
    ingredients: [
      "2 cups of mashed sweet potato",
      "3 Tablespoons of Grass Fed Butter",
      "1.5 Tablespoons of Brown Sugar",
      "1 Teaspoon of Vanilla",
      "3 Eggs",
      "1.75 Cup of Organic Unsweetened Oatmilk",
      "1.5 teaspoon of salt",
      "1 tsp of baking powder",
      "1 teaspoon of cinnamon",
      "2.5 Cup of Flour",
      "1 Tablespoon of vegetable oil",
      "1 cup of water"
    ],
    instructions: [
      "Mix mashed sweet potato, melted butter, brown sugar, and vanilla",
      "Add eggs and oatmilk, mix well",
      "In separate bowl, combine flour, salt, baking powder, and cinnamon",
      "Combine wet and dry ingredients",
      "Add water to reach desired consistency",
      "Cook on griddle with vegetable oil until golden brown on each side"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 18,
    title: "Mango Sorbet",
    category: "Dessert",
    time: "3 hours",
    servings: "6 servings",
    difficultyLevel: 1,
    description: "A refreshing frozen treat. Natural sweetness without excessive processing.",
    ingredients: [
      "4 Cups of Frozen Mango",
      "1/2 lemon squeezed",
      "2 tbsp greek yogurt",
      "3 tbsp honey",
      "1/2 cup of oatmilk"
    ],
    instructions: [
      "Put mango and lemon in food processor",
      "Put honey and oat milk in separate bowl and heat in microwave, then mix",
      "Put honey and milk mixture in food processor",
      "Blend until smooth",
      "Put sorbet in freezer for 2-3 hours"
    ],
    tips: "",
    img: placeholder
  },
  {
    id: 19,
    title: "Split Pea Soup",
    category: "Dinner",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 2,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 20,
    title: "Mac and Cheese",
    category: "Dinner",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 1,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 21,
    title: "Veggie Sandwiches",
    category: "Lunch",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 1,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 22,
    title: "Fish Tacos",
    category: "Dinner",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 2,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 23,
    title: "Feta Pasta",
    category: "Dinner",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 1,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 24,
    title: "Hummus",
    category: "Sides & Snacks",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 1,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 25,
    title: "Snickerdoodles",
    category: "Dessert",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 2,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 26,
    title: "Gravy",
    category: "Sides & Snacks",
    time: "Coming soon",
    servings: "Coming soon",
    difficultyLevel: 1,
    description: "Recipe details coming soon.",
    ingredients: [],
    instructions: [],
    tips: "",
    img: placeholder
  },
  {
    id: 28,
    title: "Whole Wheat Lemon Poppy Seed Muffins",
    category: "Breakfast",
    time: "50 minutes",
    servings: "12 muffins",
    difficultyLevel: 2,
    description: "A healthy and guilt free way to enjoy muffins.",
    ingredients: [
      "1 cup milk (of choice)",
      "2 tbsp lemon juice",
      "Zest of ½ lemon",
      "¼ cup olive oil",
      "¼ cup honey",
      "¼ cup maple syrup (or ½ cup honey or maple syrup total if not mixing both)",
      "1 large egg",
      "½ cup greek yogurt",
      "1 tsp baking powder",
      "1 tsp baking soda",
      "½ tsp salt",
      "2 cups whole wheat flour",
      "⅓ cup oats",
      "2 tsp poppy seeds"
    ],
    instructions: [
      "Mix lemon juice and milk first and set aside for ~2 minutes",
      "In a large bowl, whisk together olive oil with honey and maple syrup",
      "Whisk in the egg and the milk-lemon mixture",
      "In a separate bowl, mix dry ingredients - whole wheat flour, oats, salt, baking soda, and baking powder",
      "Add wet ingredients to dry ingredients and mix until combined",
      "Fold in the greek yogurt and poppy seeds last",
      "Let batter sit for 30 minutes. Preheat oven to 400°F",
      "Pour into a lined or greased muffin tin and bake at 400°F for 15 minutes, or until a toothpick comes out clean"
    ],
    tips: "You can use ½ cup of honey or ½ cup of maple syrup instead of mixing both if preferred.",
    img: placeholder
  }
];

export const categories: readonly CategoryFilter[] = [
  { id: "All", label: "All Recipes", description: "View complete collection" },
  { id: "Breakfast", label: "Breakfast", description: "Morning meals" },
  { id: "Lunch", label: "Lunch", description: "Midday dishes" },
  { id: "Dinner", label: "Dinner", description: "Evening meals" },
  { id: "Dessert", label: "Dessert", description: "Sweet treats" },
  { id: "Sides & Snacks", label: "Sides & Snacks", description: "Accompaniments & appetizers" }
] as const;

export function getDifficultyLabel(level: DifficultyLevel): DifficultyLabel {
  switch(level) {
    case 1: return "Easy";
    case 2: return "Moderate";
    case 3: return "Advanced";
    default: return "Unknown";
  }
}

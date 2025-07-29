import { Recipe } from './home2.types';

export const recipesData: Recipe[] = [
  {
    id: 'R1',
    name: 'Masala Dosa',
    category: 'Rice & other grains',
    cookingTime: '30 mins',
    servings: '4 servings',
    difficulty: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tXNH_xCEYOU9wjkNFLKfCHUf1mvc8QmR4g&s',
    description: 'Crispy dosa with potato masala filling, served with coconut chutney and sambar. Perfect for breakfast or brunch.',
    ingredients: [
      '2 cups rice',
      '1/2 cup urad dal',
      '1/4 cup poha (flattened rice)',
      '1/4 tsp fenugreek seeds',
      'Salt to taste',
      'Oil for cooking',
      'For potato filling: 4 medium potatoes, 1 onion, 2 green chilies, curry leaves, mustard seeds, turmeric powder'
    ],
    instructions: [
      'Soak rice, urad dal, and fenugreek seeds separately for 6-8 hours',
      'Grind urad dal to smooth batter, then grind rice and poha together',
      'Mix both batters, add salt, and ferment overnight in a warm place',
      'For potato filling, heat oil in Hawkins Nonstick Pan, add mustard seeds and curry leaves',
      'Add chopped onions, green chilies, and sauté until translucent',
      'Add boiled and mashed potatoes, turmeric, salt, and mix well',
      'Heat Hawkins Nonstick Tava on medium heat, pour batter in circular motion',
      'Drizzle oil around edges and cook until crispy and golden brown',
      'Place potato filling in center, fold dosa, and serve hot with chutney and sambar'
    ]
  },
  {
    id: 'R2',
    name: 'Chicken Biryani',
    category: 'Poultry',
    cookingTime: '45 mins',
    servings: '6 servings',
    difficulty: 'Hard',
    image: 'https://www.umami.recipes/api/image/recipes/xhclvNWmyYYlkT2Fz7WC/images/Q7xXdx1TDDjrQGTOhsBaOK?w=3840&q=75',
    description: 'Aromatic basmati rice cooked with tender chicken and aromatic spices. A perfect one-pot meal for special occasions.',
    ingredients: [
      '2 cups basmati rice',
      '500g chicken pieces',
      '2 onions, thinly sliced',
      '2 tomatoes, chopped',
      '1/2 cup yogurt',
      '2 tbsp biryani masala',
      '1/4 cup mint leaves',
      '1/4 cup coriander leaves',
      '4 tbsp ghee',
      'Whole spices: bay leaves, cardamom, cinnamon, cloves',
      'Saffron soaked in warm milk'
    ],
    instructions: [
      'Marinate chicken with yogurt, biryani masala, ginger-garlic paste, and salt for 2 hours',
      'Wash and soak basmati rice for 30 minutes',
      'In Hawkins Futura Pressure Cooker, heat ghee and add whole spices',
      'Add sliced onions and cook until golden brown',
      'Add marinated chicken and cook for 5-7 minutes',
      'Add chopped tomatoes and cook until soft',
      'Add soaked rice, mint, coriander, and saffron milk',
      'Add 3 cups water, close lid, and pressure cook for 2 whistles',
      'Let pressure release naturally, open lid, and gently mix',
      'Serve hot with raita and onion salad'
    ]
  },
  {
    id: 'R3',
    name: 'Paneer Butter Masala',
    category: 'Paneer',
    cookingTime: '25 mins',
    servings: '4 servings',
    difficulty: 'Easy',
    image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg',
    description: 'Creamy and rich paneer curry in tomato-based gravy with butter. A restaurant-style dish perfect for dinner parties.',
    ingredients: [
      '200g paneer, cubed',
      '2 large tomatoes, chopped',
      '1 onion, chopped',
      '2 tbsp butter',
      '1/4 cup cream',
      '1 tbsp kasoori methi',
      '1 tsp garam masala',
      '1 tsp red chili powder',
      '1/2 tsp turmeric powder',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'Heat Hawkins Nonstick Frying Pan and add 1 tbsp butter',
      'Sauté chopped onions until translucent',
      'Add chopped tomatoes and cook until soft and mushy',
      'Let the mixture cool, then blend to smooth paste',
      'In the same pan, add remaining butter and the tomato-onion paste',
      'Add all dry spices and cook for 2-3 minutes',
      'Add paneer cubes and gently mix',
      'Add cream and kasoori methi, simmer for 2 minutes',
      'Garnish with fresh coriander and serve hot with naan or rice'
    ]
  },
  {
    id: 'R4',
    name: 'Dal Makhani',
    category: 'Legumes, dals & curries',
    cookingTime: '40 mins',
    servings: '4 servings',
    difficulty: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69FeaPjtsF4HJ5FnURAZmRg8MhZTWaW9mRg&s',
    description: 'Creamy black lentils slow-cooked with spices and finished with cream. A rich and comforting dish perfect for cold days.',
    ingredients: [
      '1 cup black lentils (urad dal)',
      '1/4 cup kidney beans (rajma)',
      '2 onions, finely chopped',
      '2 tomatoes, chopped',
      '2 tbsp butter',
      '1/4 cup cream',
      '1 tbsp ginger-garlic paste',
      '1 tsp garam masala',
      '1 tsp red chili powder',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'Soak black lentils and kidney beans overnight',
      'In Hawkins Futura Pressure Cooker, add soaked lentils and beans',
      'Add 4 cups water and pressure cook for 4-5 whistles',
      'Let pressure release naturally, open lid and check if lentils are soft',
      'In Hawkins Stainless Steel Handi, heat butter and add chopped onions',
      'Sauté until golden brown, add ginger-garlic paste',
      'Add chopped tomatoes and cook until soft',
      'Add cooked lentils, salt, and spices, simmer for 10 minutes',
      'Add cream and simmer for 5 more minutes',
      'Garnish with fresh coriander and serve hot with rice or roti'
    ]
  },
  {
    id: 'R5',
    name: 'Vegetable Pizza',
    category: 'Pizza',
    cookingTime: '35 mins',
    servings: '4 servings',
    difficulty: 'Medium',
    image: 'https://www.allrecipes.com/thmb/gKD4hlJ26TYEvBTrYzX2SiF95Io=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-15022-veggie-pizza-DDMFS-4x3-hero-3dabf0783ef544eeaa23bdf28b48b178.jpg',
    description: 'Fresh vegetable pizza with homemade dough and tomato sauce. A healthy and delicious meal for the whole family.',
    ingredients: [
      'For dough: 2 cups all-purpose flour, 1 tsp yeast, 1 tsp sugar, 1/2 tsp salt, 1 tbsp olive oil',
      'For sauce: 2 tomatoes, 1 onion, 2 garlic cloves, 1 tsp oregano',
      'Toppings: bell peppers, mushrooms, olives, corn, mozzarella cheese',
      'Olive oil for brushing',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Mix flour, yeast, sugar, salt, and warm water to make soft dough',
      'Knead for 10 minutes, cover and let rise for 1 hour',
      'For sauce, blend tomatoes, onion, garlic, and oregano to smooth paste',
      'Roll out dough on floured surface to desired thickness',
      'Place on Hawkins Nonstick Pizza Pan or Tava',
      'Brush with olive oil and spread tomato sauce',
      'Add vegetable toppings and sprinkle cheese',
      'Bake in preheated oven at 450°F for 15-20 minutes',
      'Or cook on stovetop using Hawkins Tava with lid for 10-12 minutes',
      'Cut into slices and serve hot'
    ]
  },
  {
    id: 'R6',
    name: 'Fish Curry',
    category: 'Seafood',
    cookingTime: '20 mins',
    servings: '3 servings',
    difficulty: 'Easy',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVPc49Ep0ehv9ZskczFpcOsCZKy56lji7Zw&s',
    description: 'Spicy fish curry with coconut milk and aromatic spices. A coastal delicacy that pairs perfectly with steamed rice.',
    ingredients: [
      '500g fish fillets (any white fish)',
      '1 cup coconut milk',
      '2 onions, finely chopped',
      '2 tomatoes, chopped',
      '2 tbsp ginger-garlic paste',
      '1 tsp turmeric powder',
      '1 tsp red chili powder',
      '1 tsp coriander powder',
      'Curry leaves and coriander for garnish',
      'Salt to taste',
      '2 tbsp oil'
    ],
    instructions: [
      'Clean and cut fish into medium pieces, marinate with turmeric and salt',
      'Heat oil in Hawkins Nonstick Frying Pan',
      'Add curry leaves and chopped onions, sauté until translucent',
      'Add ginger-garlic paste and cook for 2 minutes',
      'Add chopped tomatoes and cook until soft',
      'Add all dry spices and cook for 1 minute',
      'Add coconut milk and bring to boil',
      'Gently add fish pieces and simmer for 5-7 minutes',
      'Do not stir vigorously to avoid breaking fish',
      'Garnish with fresh coriander and serve hot with steamed rice'
    ]
  }
]; 
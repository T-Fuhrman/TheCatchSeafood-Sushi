
import { Category, MenuItem, SocialPost } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Home Smoked Fish Dip',
    description: 'Tomatoes, Onions, Jalapenos And Grilled Pita.',
    price: 16,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/smoked%20fish%20dip%20appetizer%20with%20crackers%20and%20jalapenos%20food%20photography'
  },
  {
    id: 's2',
    name: 'Killer Wings',
    description: 'Garlic Buffalo Or Honey Barbecue, Served With Celery And Blue Cheese.',
    price: 16,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/buffalo%20chicken%20wings%20celery%20blue%20cheese%20platter'
  },
  {
    id: 's3',
    name: 'Asparagus Tempura',
    description: 'Topped With Eel Sauce And Sesame Seeds.',
    price: 12,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/asparagus%20tempura%20fried%20japanese%20food'
  },
  {
    id: 's4',
    name: 'Mixed Jalea',
    description: 'Fresh Criolla Sauce, Red Onion, Garlic, Cilantro Tomato, Corn, Lime Juice, Olive Oil, Crispy Fish, Shrimp, Scallop, Squid And Mussels.',
    price: 18,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/peruvian%20jalea%20fried%20seafood%20platter%20calamari%20shrimp'
  },
  {
    id: 's5',
    name: 'Veggie Spring Roll',
    description: 'Carrot, Celery, Napa Cabbage, Scallion, Zucchini, With Thai Chili Sauce.',
    price: 12,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/crispy%20vegetable%20spring%20rolls%20asian%20food'
  },
  {
    id: 's6',
    name: 'Chicharon',
    description: 'Crispy Pork, Caramelized Onion, Lime, Garlic And Cilantro.',
    price: 13,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/pork%20belly%20chicharon%20fried%20pork%20chunks%20lime'
  },
  {
    id: 's7',
    name: 'Tapas',
    description: 'Crispy Plantain, Pork, Scallion, Red Peppers, Onions, White Beans, Avocado, Cilantro And Parmesan Cheese.',
    price: 14,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/tostones%20plantain%20appetizer%20gourmet%20tapas'
  },
  {
    id: 's8',
    name: 'Empanadas',
    description: 'Stuffed with Beef & Potato, served with Homemade Hot Sauce.',
    price: 10,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/beef%20empanadas%20golden%20fried%20pastry'
  },
  {
    id: 's9',
    name: 'Spinach Artichoke Dip',
    description: 'Parmesan Cheese and Fresh Grilled Pita.',
    price: 16,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/spinach%20artichoke%20dip%20bread%20bowl%20cheese'
  },
  {
    id: 's10',
    name: 'Edamame',
    description: 'Steamed soybeans.',
    price: 8,
    category: Category.STARTERS,
    imageUrl: 'https://image.pollinations.ai/prompt/steamed%20edamame%20soybeans%20bowl%20salt'
  },

  // Salads
  {
    id: 'sl1',
    name: 'Roasted Beet',
    description: 'Sweet Roasted Beets Topped With Arugula, Julienne Carrots, Red Onions, Goat Cheese And Pecans Served With Citrus Herb Vinaigrette.',
    price: 15,
    category: Category.SALADS,
    imageUrl: 'https://image.pollinations.ai/prompt/roasted%20beet%20salad%20goat%20cheese%20arugula%20fancy'
  },
  {
    id: 'sl2',
    name: 'Classic Wedge',
    description: 'Iceberg, Bacon, Egg, Tomato, Cilantro And Blue Cheese.',
    price: 14,
    category: Category.SALADS,
    imageUrl: 'https://image.pollinations.ai/prompt/wedge%20salad%20blue%20cheese%20bacon%20iceberg%20lettuce'
  },
  {
    id: 'sl3',
    name: 'The Catch',
    description: 'Greens, Red Onion, Pecan, Cherry Tomato, Carrot, Avocado, Queso Fresco Cheese, Cilantro And Citrus Vinaigrette.',
    price: 14,
    category: Category.SALADS,
    imageUrl: 'https://image.pollinations.ai/prompt/fresh%20garden%20salad%20avocado%20cherry%20tomatoes%20gourmet'
  },
  {
    id: 'sl4',
    name: 'Caesar',
    description: 'Romaine Hearts, Parmesan Cheese And Homemade Crostinis.',
    price: 13,
    category: Category.SALADS,
    imageUrl: 'https://image.pollinations.ai/prompt/caesar%20salad%20parmesan%20shaved%20croutons'
  },

  // Soups
  {
    id: 'sp1',
    name: 'Clam Chowder',
    description: 'Potatoes, Clams, Bacon And Cilantro.',
    price: 11,
    category: Category.SOUPS,
    imageUrl: 'https://image.pollinations.ai/prompt/creamy%20clam%20chowder%20soup%20bowl%20spoon'
  },
  {
    id: 'sp2',
    name: 'Shrimp Chowder',
    description: 'Rice, Poached Egg, Cream, And Cilantro In A Tomato Broth.',
    price: 13,
    category: Category.SOUPS,
    imageUrl: 'https://image.pollinations.ai/prompt/shrimp%20chowder%20bisque%20soup%20creamy%20tomato'
  },
  {
    id: 'sp3',
    name: 'Miso Soup',
    description: 'Traditional Japanese soybean paste soup.',
    price: 9,
    category: Category.SOUPS,
    imageUrl: 'https://image.pollinations.ai/prompt/miso%20soup%20tofu%20scallions%20japanese%20bowl'
  },
  {
    id: 'sp4',
    name: 'Aguadito',
    description: 'Shrimp, Scallops, Mussels, Clams, Rice And Cilantro Broth.',
    price: 13,
    category: Category.SOUPS,
    imageUrl: 'https://image.pollinations.ai/prompt/aguadito%20de%20mariscos%20peruvian%20seafood%20soup%20green%20cilantro'
  },
  {
    id: 'sp5',
    name: 'Parihuela',
    description: 'Shrimp, Scallops, Mussels, Clams, And Cilantro In A Tomato Broth.',
    price: 13,
    category: Category.SOUPS,
    imageUrl: 'https://image.pollinations.ai/prompt/parihuela%20peruvian%20spicy%20seafood%20soup%20crab'
  },

  // Sandwiches
  {
    id: 'sw1',
    name: 'Catch Of The Day',
    description: 'Lettuce, Tomato, Remoulade, Served With Fingerling Potatoes.',
    price: 'MP',
    category: Category.SANDWICHES,
    imageUrl: 'https://image.pollinations.ai/prompt/grilled%20mahi%20mahi%20sandwich%20brioche%20bun%20gourmet'
  },
  {
    id: 'sw2',
    name: 'Catch Burger',
    description: 'Bacon, Lettuce, Cheese, Tomato, Onion, Pickles Served With Truffle Fries. Add Avocado/Fried Egg/Mushrooms +1/ea.',
    price: 18,
    category: Category.SANDWICHES,
    imageUrl: 'https://image.pollinations.ai/prompt/juicy%20gourmet%20cheeseburger%20bacon%20fries%20restaurant'
  },
  {
    id: 'sw3',
    name: 'The Ultimate Chicken',
    description: 'Cheddar Cheese, Bacon, Avocado, Lettuce, Tomato, Sauteed Onions, Served With Sweet Fries.',
    price: 17,
    category: Category.SANDWICHES,
    imageUrl: 'https://image.pollinations.ai/prompt/grilled%20chicken%20sandwich%20bacon%20avocado%20melted%20cheese%20bun'
  },
  {
    id: 'sw4',
    name: 'Fish And Chips',
    description: 'Served with Reggae Fries.',
    price: 17,
    category: Category.SANDWICHES,
    imageUrl: 'https://image.pollinations.ai/prompt/fish%20and%20chips%20basket%20fried%20cod%20fries%20lemon'
  },
  {
    id: 'sw5',
    name: 'Pan Con Bistec',
    description: 'Marinated Steak, Grilled Onions, Tomatoes, Crispy Potato Strings, Citrus Aioli On Cuban Bread With Fried Plantains.',
    price: 17,
    category: Category.SANDWICHES,
    imageUrl: 'https://image.pollinations.ai/prompt/pan%20con%20bistec%20cuban%20steak%20sandwich%20pressed'
  },

  // Entrees
  {
    id: 'e1',
    name: 'Macadamia Snapper',
    description: 'Sweet Potato Mash, Curry Cauliflower And Passionfruit Thai Sauce.',
    price: 33,
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/macadamia%20nut%20crusted%20snapper%20fish%20filet%20plated%20gourmet'
  },
  {
    id: 'e2',
    name: 'Chaufa Peruvian Fried Rice',
    description: 'Squid, Scallops, Shrimp, Clams, Mussels, Ginger, Red Pepper, Scallion And Egg. (Chicken 22 / Beef 25 / Seafood 30)',
    price: 30,
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/arroz%20chaufa%20de%20mariscos%20peruvian%20fried%20rice%20seafood'
  },
  {
    id: 'e3',
    name: 'Whole Fried Snapper',
    description: 'Served with Catch Salad And Fried Plantains.',
    price: 'MP',
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/whole%20fried%20red%20snapper%20fish%20on%20plate%20crispy'
  },
  {
    id: 'e4',
    name: 'BBQ Spare Ribs',
    description: 'Served with Reggae Fries and Citrus Slaw.',
    price: 18,
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/bbq%20pork%20spare%20ribs%20rack%20grilled%20sauce'
  },
  {
    id: 'e5',
    name: 'Lomo Saltado',
    description: 'A Stir-fry Of Beef, Grilled Tomato And Onion, Cilantro, Over White Rice And Fries.',
    price: 25,
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/lomo%20saltado%20peruvian%20beef%20stir%20fry%20fries%20rice'
  },
  {
    id: 'e6',
    name: 'Sesame Tuna',
    description: 'Tuna, Asian Veggies With A Tuna Egg Roll, Topped With Homemade Spicy Yuzu.',
    price: 33,
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/seared%20ahi%20tuna%20sesame%20crust%20sliced%20plate'
  },
  {
    id: 'e7',
    name: 'Carne Asada',
    description: 'White Rice, White Beans With Bacon, Topped with Chimichurri.',
    price: 26,
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/carne%20asada%20grilled%20steak%20chimichurri%20sauce'
  },
  {
    id: 'e8',
    name: 'The Catch Bucket',
    description: 'Whole Lobster Tail, Clams, Mussels, Shrimp, Fish, Scallops, Squid, Peruvian Corn and Yucca in a White Wine Garlic Broth with Thai Basil.',
    price: 'MP',
    category: Category.ENTREES,
    imageUrl: 'https://image.pollinations.ai/prompt/seafood%20boil%20bucket%20lobster%20clams%20shrimp%20corn%20feast'
  },

  // Under The Sea
  {
    id: 'u1',
    name: 'Fresh Oysters',
    description: 'Raw / Grilled - Garlic Butter, Parmesan and Brie Cheese.',
    price: 'MP',
    category: Category.UNDER_THE_SEA,
    imageUrl: 'https://image.pollinations.ai/prompt/fresh%20oysters%20on%20ice%20lemon%20platter'
  },
  {
    id: 'u2',
    name: 'Chef\'s Choice Tiradito',
    description: 'Chef\'s Choice Fish marinated in Ginger, Soy Sauce, Lime Juice, Yuzu And Cilantro.',
    price: 'MP',
    category: Category.UNDER_THE_SEA,
    imageUrl: 'https://image.pollinations.ai/prompt/tiradito%20peruvian%20sashimi%20sauce%20yellow%20pepper'
  },
  {
    id: 'u3',
    name: 'Vuelve A La Vida',
    description: 'Fish, Shrimp, Squid, Mussels, Diced Onion, Tomato, Cilantro And Lime Juice.',
    price: 16,
    category: Category.UNDER_THE_SEA,
    imageUrl: 'https://image.pollinations.ai/prompt/seafood%20cocktail%20vuelve%20a%20la%20vida%20shrimp%20cocktail%20glass'
  },
  {
    id: 'u4',
    name: 'Leche De Tigre',
    description: 'Diced Fish, Onion, Lime, Cilantro.',
    price: 12,
    category: Category.UNDER_THE_SEA,
    imageUrl: 'https://image.pollinations.ai/prompt/leche%20de%20tigre%20ceviche%20glass%20peruvian'
  },
  {
    id: 'u5',
    name: 'Seaweed Salad',
    description: 'Traditional seaweed salad.',
    price: 10,
    category: Category.UNDER_THE_SEA,
    imageUrl: 'https://image.pollinations.ai/prompt/seaweed%20salad%20wakame%20japanese%20bowl'
  },
  {
    id: 'u6',
    name: 'Sashimi Pizza',
    description: 'Tuna, Salmon, White Fish, Avocado, Massago, Sesame Seeds, Apple, Scallion, Red Onion, Crispy Potato Strings, Topped With Eel Sauce, Spicy Mayo, Passionfruit Thai And Kimchee Served On Crispy Corn Tortilla.',
    price: 19,
    category: Category.UNDER_THE_SEA,
    imageUrl: 'https://image.pollinations.ai/prompt/sushi%20pizza%20tortilla%20tuna%20salmon%20avocado%20fusion'
  },

  // Rolls
  {
    id: 'r1',
    name: 'The Caliente Roll',
    description: 'Lump Crab, Cucumber, Avocado, Carrot Topped with Salmon, Fresh Jalapeno And Spicy Citrus Aioli.',
    price: 28,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/sushi%20roll%20salmon%20jalapeno%20topping%20spicy%20gourmet'
  },
  {
    id: 'r2',
    name: 'In Your Face Roll',
    description: 'Shrimp Tempura, Mango, Asparagus, Avocado, Cucumber, Cream Cheese, Greens, Wrapped In Soy Paper, Topped With Coconut Flakes And Passionfruit Thai Sauce.',
    price: 21,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/sushi%20roll%20soy%20paper%20mango%20coconut%20tropical'
  },
  {
    id: 'r3',
    name: 'Tuna Bomb',
    description: 'Spicy Tuna, Scallion And Avocado, Tempura Style With Spicy Mayo.',
    price: 19,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/tempura%20fried%20sushi%20roll%20spicy%20tuna%20drizzle'
  },
  {
    id: 'r4',
    name: 'Catch This Roll',
    description: 'Snapper, Cucumber, Cream Cheese, Avocado, Asparagus, Tempura Style Topped With Tuna Tartar.',
    price: 26,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/sushi%20roll%20tuna%20tartare%20topping%20fancy'
  },
  {
    id: 'r5',
    name: 'Luna Roll',
    description: 'Shrimp Tempura And Scallion Topped with Sesame Seared Tuna, Avocado, Hot Chile Sauce and Eel Sauce.',
    price: 22,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/sushi%20roll%20seared%20tuna%20avocado%20topping'
  },
  {
    id: 'r6',
    name: 'Lobster Roll',
    description: 'Tempura Lobster, Krab, Asparagus, Cucumber, Scallion, Masago And Citrus Aioli.',
    price: 21,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/lobster%20sushi%20roll%20tempura%20fancy%20plating'
  },
  {
    id: 'r7',
    name: 'Beet This Roll',
    description: 'Beet, Tofu, Creamy Avocado, Greens, And Pickled Daikon.',
    price: 15,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/vegan%20sushi%20roll%20beet%20tofu%20avocado%20colorful'
  },
  {
    id: 'r8',
    name: 'Slammin Salmon Roll',
    description: 'Krab, Avocado, Cucumber, Cream Cheese Topped with Baked Salmon, Sriracha and Eel Sauce.',
    price: 18,
    category: Category.ROLLS,
    imageUrl: 'https://image.pollinations.ai/prompt/baked%20salmon%20sushi%20roll%20creamy%20sauce'
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'p1',
    // #1 Top Left - Macadamia Snapper
    imageUrl: 'https://lh3.googleusercontent.com/d/1NT9_8mgU2cxKZ0jptLxNnM34BAi-NMrj',
    caption: 'Golden crusted and island kissed, our macadamia encrusted snapper is a tropical twist on a seafood classic. Fresh flakey snapper is coated in a buttery macadamia nut crust, pan seared to a golden crunch finished with a drizzle of passion fruit sauce. Served atop a velvety sweet potato puree and curry cauliflower florets.',
    tags: ['snapper', 'tasty', 'fyp', 'explore', 'instagood', 'food', 'foodlover', 'foodie'],
    mediaType: 'image'
  },
  {
    id: 'p2',
    // #2 Top Right - Mixed Jalea
    imageUrl: 'https://lh3.googleusercontent.com/d/1zyoyNs40RgG81SIQ190Lvaq5g-QHaFmG',
    caption: 'Mixed Jalea, a crispy ocean symphony. Dive into a golden fried medley where the sea sings in every bite. Calamari, shrimp, fish and shellfish join forces in a crunchy carnival of flavor. Bold, briny and irresistibly Peruvian.',
    tags: ['jalea', 'peruvianfood', 'seafood', 'foodie', 'delicious'],
    mediaType: 'image'
  },
  {
    id: 'p3',
    // #3 Middle Left - Sushi Pizza
    imageUrl: 'https://lh3.googleusercontent.com/d/1Dx9CPhRnUzrWu0U0N6LyyZh9s-wplyIE',
    caption: 'A daring fusion of east and west, this sushi slice of pizza combines the delicate artistry of sushi with the crave-worthy goodness of pizza. Think crispy seaweed ‘crust,’ sushi rice ‘dough,’ fresh sashimi toppings and a drizzle of spicy mayo for the ultimate umami explosion. 🍣🍕',
    tags: ['sushipizza', 'fusion', 'sushi', 'pizza', 'foodporn'],
    mediaType: 'image'
  },
  {
    id: 'p4',
    // #4 Middle Right - Tapas (IMAGE ID from User, correcting the mistakenly pasted video ID)
    // User wants "Tapas" caption, so we use the Tapas image ID: 1wL4C8gx5ee2OdehmFRU3F5Fxti6u9VW-
    imageUrl: 'https://lh3.googleusercontent.com/d/1wL4C8gx5ee2OdehmFRU3F5Fxti6u9VW-',
    caption: 'Tapas: the most delicious way to avoid choosing just one dish',
    tags: ['tapas', 'sharing', 'foodie', 'delicious', 'appetizers'],
    mediaType: 'image'
  },
  {
    id: 'p5',
    // #5 Bottom Left - Tuna Bomb
    imageUrl: 'https://lh3.googleusercontent.com/d/15zs9EWlZRXtjzWut95sRJGLHkDDH8kr6',
    caption: 'This Tuna bomb roll is exploding with flavor! Fresh tuna, spicy mayo, and a burst of umami in every bite. Are you ready for the detonation? 🧨 🍣',
    tags: ['tunabomb', 'sushi', 'spicytuna', 'foodie', 'instafood'],
    mediaType: 'image'
  },
  {
    id: 'p6',
    // #6 Bottom Right - Sushi Art / Warhol
    imageUrl: 'https://lh3.googleusercontent.com/d/1tTCcuCEmiiFaC5TLw8WXhX_HVRzyc9r1',
    caption: 'Where wasabi meets Warhol, every piece a masterpiece.',
    tags: ['sushiart', 'masterpiece', 'foodart', 'sushi', 'presentation'],
    mediaType: 'image'
  }
];

require('dotenv').config();
const mongoose = require('mongoose');
const productsModel = require('./models/productsModel');

const MONGODB_URI = process.env.MONGODB_URI;

// Sample foodstuff data for CampusCart - UNN Student Pricing in Nigerian Naira (₦)
const foodstuffItems = [
  {
    image: ["https://picsum.photos/400/300?random=1", "https://picsum.photos/400/300?random=2"],
    title: "Local Rice (1kg)",
    description: "Premium quality local rice, perfect for jollof rice, fried rice, and other Nigerian dishes.",
    price: 1600.00,
    priceBeforeDeal: 1800.00,
    priceOff: 11.11,
    stars: 4.5,
    numberOfReview: 128,
    ukSide: ["1kg", "2kg", "5kg"],
    tags: ["grains", "rice", "staple", "essential"],
    status: {
      icon: "�",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=3", "https://picsum.photos/400/300?random=4"],
    title: "Brown Beans (1kg)",
    description: "Fresh brown beans (honey beans), excellent source of protein for student meals.",
    price: 2800.00,
    priceBeforeDeal: 3200.00,
    priceOff: 12.50,
    stars: 4.3,
    numberOfReview: 89,
    ukSide: ["1kg", "2kg", "3kg"],
    tags: ["beans", "protein", "grains", "healthy"],
    status: {
      icon: "🫘",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=5", "https://picsum.photos/400/300?random=6"],
    title: "White Garri (1kg)",
    description: "Premium white garri from cassava, perfect for drinking or making eba.",
    price: 1100.00,
    priceBeforeDeal: 1300.00,
    priceOff: 15.38,
    stars: 4.7,
    numberOfReview: 156,
    ukSide: ["1kg", "2kg", "5kg"],
    tags: ["thai", "chicken", "noodles", "spicy"],
    status: {
      icon: "🍜",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=7", "https://picsum.photos/400/300?random=8"],
    title: "Caesar Salad",
    description: "Fresh romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
    price: 1500.00,
    priceBeforeDeal: 1800.00,
    priceOff: 16.67,
    stars: 4.2,
    numberOfReview: 67,
    ukSide: ["Small", "Large"],
    tags: ["salad", "healthy", "vegetarian", "fresh"],
    status: {
      icon: "🥗",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=9", "https://picsum.photos/400/300?random=10"],
    title: "Beef Tacos",
    description: "Three soft tacos filled with seasoned ground beef, lettuce, cheese, and salsa.",
    price: 1700.00,
    priceBeforeDeal: 2000.00,
    priceOff: 15.00,
    stars: 4.4,
    numberOfReview: 201,
    ukSide: ["3 pack", "6 pack"],
    tags: ["mexican", "beef", "tacos", "spicy"],
    status: {
      icon: "🌮",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=11", "https://picsum.photos/400/300?random=12"],
    title: "Chocolate Brownie",
    description: "Rich, fudgy chocolate brownie served warm. Perfect dessert to share or enjoy alone!",
    price: 800.00,
    priceBeforeDeal: 1000.00,
    priceOff: 20.00,
    stars: 4.8,
    numberOfReview: 312,
    ukSide: ["Single", "Double"],
    tags: ["dessert", "chocolate", "sweet", "popular"],
    status: {
      icon: "🍫",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=13", "https://picsum.photos/400/300?random=14"],
    title: "Iced Coffee",
    description: "Freshly brewed coffee served over ice. Choose from various flavors and milk options.",
    price: 600.00,
    priceBeforeDeal: 750.00,
    priceOff: 20.00,
    stars: 4.1,
    numberOfReview: 89,
    ukSide: ["Small", "Medium", "Large"],
    tags: ["coffee", "beverage", "cold", "caffeine"],
    status: {
      icon: "☕",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=15", "https://picsum.photos/400/300?random=16"],
    title: "Sushi Roll Combo",
    description: "Fresh sushi rolls including California roll, spicy tuna, and salmon avocado roll.",
    price: 3500.00,
    priceBeforeDeal: 4000.00,
    priceOff: 12.50,
    stars: 4.6,
    numberOfReview: 134,
    ukSide: ["8 pieces", "12 pieces", "16 pieces"],
    tags: ["sushi", "japanese", "fresh", "seafood"],
    status: {
      icon: "🍣",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=17", "https://picsum.photos/400/300?random=18"],
    title: "Veggie Burger",
    description: "Plant-based patty with fresh vegetables and vegan mayo on a whole grain bun.",
    price: 1600.00,
    priceBeforeDeal: 1900.00,
    priceOff: 15.79,
    stars: 4.0,
    numberOfReview: 78,
    ukSide: ["Regular", "Large"],
    tags: ["vegetarian", "vegan", "healthy", "burger"],
    status: {
      icon: "🥬",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=19", "https://picsum.photos/400/300?random=20"],
    title: "Green Smoothie",
    description: "Healthy blend of spinach, banana, mango, and coconut water. Great post-workout drink!",
    price: 1200.00,
    priceBeforeDeal: 1500.00,
    priceOff: 20.00,
    stars: 4.3,
    numberOfReview: 95,
    ukSide: ["Regular", "Large"],
    tags: ["smoothie", "healthy", "vegan", "fresh"],
    status: {
      icon: "🥤",
      name: "Available"
    }
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await productsModel.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new food items
    const result = await productsModel.insertMany(foodItems);
    console.log(`Successfully seeded ${result.length} food items`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

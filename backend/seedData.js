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
    tags: ["garri", "cassava", "staple", "carbohydrate"],
    status: {
      icon: "🥣",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=7", "https://picsum.photos/400/300?random=8"],
    title: "Fresh Tomatoes (1kg)",
    description: "Fresh red tomatoes, perfect for stew, jollof rice, and salads.",
    price: 1850.00,
    priceBeforeDeal: 2100.00,
    priceOff: 11.90,
    stars: 4.2,
    numberOfReview: 67,
    ukSide: ["1kg", "2kg", "3kg"],
    tags: ["vegetables", "fresh", "tomatoes", "cooking"],
    status: {
      icon: "🍅",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=9", "https://picsum.photos/400/300?random=10"],
    title: "Palm Oil (1 liter)",
    description: "Pure red palm oil, essential for authentic Nigerian cooking and frying.",
    price: 1700.00,
    priceBeforeDeal: 1900.00,
    priceOff: 10.53,
    stars: 4.4,
    numberOfReview: 201,
    ukSide: ["1L", "2L", "4L"],
    tags: ["oil", "cooking", "palm oil", "essential"],
    status: {
      icon: "🛢️",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=11", "https://picsum.photos/400/300?random=12"],
    title: "Stock Fish (500g)",
    description: "Premium dried stock fish, adds rich flavor to soups and stews.",
    price: 2100.00,
    priceBeforeDeal: 2400.00,
    priceOff: 12.50,
    stars: 4.8,
    numberOfReview: 312,
    ukSide: ["500g", "1kg"],
    tags: ["protein", "fish", "dried", "seasoning"],
    status: {
      icon: "🐟",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=13", "https://picsum.photos/400/300?random=14"],
    title: "Maggi Cubes (50 pack)",
    description: "Essential seasoning cubes for cooking Nigerian dishes. Long-lasting value pack.",
    price: 750.00,
    priceBeforeDeal: 850.00,
    priceOff: 11.76,
    stars: 4.1,
    numberOfReview: 89,
    ukSide: ["20 pack", "50 pack", "100 pack"],
    tags: ["seasoning", "maggi", "cooking", "essential"],
    status: {
      icon: "🧂",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=15", "https://picsum.photos/400/300?random=16"],
    title: "Yam Tubers (Medium)",
    description: "Fresh yam tubers, perfect for pounded yam, boiled yam, or yam porridge.",
    price: 1000.00,
    priceBeforeDeal: 1200.00,
    priceOff: 16.67,
    stars: 4.6,
    numberOfReview: 134,
    ukSide: ["Small", "Medium", "Large"],
    tags: ["tubers", "yam", "carbohydrate", "fresh"],
    status: {
      icon: "�",
      name: "Available"
    }
  },
  {
    image: ["https://picsum.photos/400/300?random=17", "https://picsum.photos/400/300?random=18"],
    title: "Pure Water (20 sachets)",
    description: "Clean drinking water in convenient sachets. Essential for daily hydration.",
    price: 400.00,
    priceBeforeDeal: 500.00,
    priceOff: 20.00,
    stars: 4.0,
    numberOfReview: 78,
    ukSide: ["10 sachets", "20 sachets", "50 sachets"],
    tags: ["water", "beverage", "essential", "hydration"],
    status: {
      icon: "💧",
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

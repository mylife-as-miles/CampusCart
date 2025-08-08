# CampusCart 🍕📱

**A Food Delivery App for University of Nigeria, Nsukka (UNN) Students**

# CampusCart 🛒📱

**A Foodstuffs Delivery App for University of Nigeria, Nsukka (UNN) Students**

CampusCart is a React Native e-commerce application specifically designed for foodstuffs delivery at the University of Nigeria, Nsukka. Students can browse essential staple foods and groceries, place orders, and get foodstuffs delivered directly to their hostels or study locations within the university.

## 🚀 Features

### 📱 Mobile App Features
- **Browse Foodstuffs**: Explore various staple food categories (Grains, Tubers, Vegetables, Oils, etc.)
- **Quick Search**: Find your essential food items instantly
- **Favorites**: Save your preferred foodstuffs for quick reordering
- **Shopping Cart**: Add multiple items and customize quantities
- **Student-Friendly Pricing**: Affordable foodstuffs with bulk purchase discounts
- **Real-time Delivery Tracking**: Track your order from store to delivery
- **Multiple Payment Options**: Support for student allowances, digital wallets, and cards
- **Bulk Ordering**: Order larger quantities at discounted rates
- **Price Alerts**: Get notified when foodstuff prices drop

### 🛒 Foodstuffs Categories
- 🌾 Grains & Cereals (Rice, Beans, Garri, Maize)
- 🍠 Tubers & Root Crops (Yam, Cassava, Potato, Sweet Potato)
- 🥬 Vegetables & Tomatoes (Fresh tomatoes, peppers, onions, vegetables)
- 🛢️ Cooking Oils (Palm oil, Vegetable oil, Groundnut oil)
- 🥫 Proteins (Stock fish, Crayfish, Dry fish)
- 🧂 Spices & Seasonings (Salt, Maggi, Curry, Thyme)
- 🍞 Breakfast Items (Bread, Tea, Milk, Sugar)
- 🥤 Beverages (Pure water, Soft drinks, Fruit juices)

### 💻 Backend Features
- RESTful API built with Node.js and Express
- MongoDB database for foodstuff items and orders
- User authentication and authorization
- Order management system
- Real-time order status updates
- **Price Monitoring**: Track foodstuff inflation and update prices accordingly
- **Inventory Management**: Real-time stock updates for perishable items

## 🚀 Features

### 📱 Mobile App Features
- **Browse Menu**: Explore various food categories (Pizza, Burgers, Asian, Mexican, Healthy, Desserts, etc.)
- **Quick Search**: Find your favorite dishes instantly
- **Favorites**: Save your preferred meals for quick reordering
- **Shopping Cart**: Add multiple items and customize orders
- **Student-Friendly Pricing**: Affordable meals with special campus discounts
- **Real-time Delivery Tracking**: Track your order from kitchen to delivery
- **Multiple Payment Options**: Support for meal plans, digital wallets, and cards

### 🍜 Food Categories
- 🍕 Pizza
- 🍔 Burgers  
- 🍜 Asian Cuisine
- 🌮 Mexican Food
- 🥗 Healthy Options
- 🍰 Desserts
- ☕ Beverages
- 🍿 Snacks

### 💻 Backend Features
- RESTful API built with Node.js and Express
- MongoDB database for food items and orders
- User authentication and authorization
- Order management system
- Real-time order status updates

## 🛠️ Tech Stack

### Frontend (React Native)
- **React Native 0.74.3**
- **TypeScript** for type safety
- **React Navigation** for screen navigation
- **TailwindCSS** for styling (NativeWind)
- **Async Storage** for local data persistence
- **React Native Gesture Handler** for smooth interactions

### Backend (Node.js)
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **CORS** enabled for cross-origin requests
- **dotenv** for environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)
- MongoDB database

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file and configure MongoDB URI**

4. **Seed the database with sample food data:**
   ```bash
   npm run seed
   ```

5. **Start the backend server:**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Metro bundler:**
   ```bash
   npx react-native start
   ```

4. **Run on Android:**
   ```bash
   npx react-native run-android
   ```

## 📱 App Screens

### Main Navigation Tabs
- **Menu (Home)**: Browse food categories and featured items
- **Favorites**: View saved favorite dishes
- **Cart**: Review and checkout selected items
- **Search**: Find specific food items
- **Profile**: User account and settings

## 🍔 Sample Menu Items

The app comes pre-loaded with delicious food options at student-friendly prices:

- **Margherita Pizza** - ₦2,500
- **Classic Cheeseburger** - ₦1,800  
- **Chicken Pad Thai** - ₦2,000
- **Caesar Salad** - ₦1,500
- **Beef Tacos** - ₦1,700
- **Chocolate Brownie** - ₦800
- **Iced Coffee** - ₦600
- **Sushi Roll Combo** - ₦3,500
- **Veggie Burger** - ₦1,600
- **Green Smoothie** - ₦1,200

## 🔧 Development

### Backend API Endpoints
- `GET /api/products/` - Get all food items
- `GET /api/products/:id` - Get specific food item
- `POST /api/products/` - Create new food item
- `PUT /api/products/:id` - Update food item
- `DELETE /api/products/:id` - Delete food item

---

**Happy Eating! 🍽️**

*CampusCart - Fresh food delivered fast to UNN students*

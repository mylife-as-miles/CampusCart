# CampusCart 🍕📱

**A Food Delivery App for Campus Students**

CampusCart is a React Native e-commerce application specifically designed for food delivery on campus. Students can browse delicious meals from campus restaurants and local eateries, place orders, and get food delivered directly to their dorm rooms or study locations.

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

The app comes pre-loaded with delicious food options:

- **Margherita Pizza** - $12.99
- **Classic Cheeseburger** - $9.99  
- **Chicken Pad Thai** - $11.50
- **Caesar Salad** - $8.99
- **Beef Tacos** - $10.99
- **Chocolate Brownie** - $5.99
- **Iced Coffee** - $3.99
- **Sushi Roll Combo** - $16.99
- **Veggie Burger** - $10.99
- **Green Smoothie** - $6.99

## 🔧 Development

### Backend API Endpoints
- `GET /api/products/` - Get all food items
- `GET /api/products/:id` - Get specific food item
- `POST /api/products/` - Create new food item
- `PUT /api/products/:id` - Update food item
- `DELETE /api/products/:id` - Delete food item

---

**Happy Eating! 🍽️**

*CampusCart - Fresh food delivered fast to your campus location*

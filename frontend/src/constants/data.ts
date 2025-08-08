import icons from './icons';
import images from './images';
import {FeaturesTypes, ProductTypes, SplashTypes, TabBarTypes} from './types';
// random number between 1 to 1000 :)
const randomNumber = () => Math.floor(Math.random() * 1000) + 1;
// set the random number to the URL
const randomImage = (): string =>
  `https://picsum.photos/${Math.floor(Math.random() * 1000) + 1}/${
    Math.floor(Math.random() * 1000) + 1
  }`;

const SplashData: SplashTypes[] = [
  {
    image: images.splash1,
    title: 'Browse Menu',
    description:
      'Discover delicious meals from your favorite campus restaurants and local eateries. Fresh food delivered right to your dorm or study spot.',
  },
  {
    image: images.splash2,
    title: 'Quick Ordering',
    description:
      'Easy payment with student discounts available. Multiple payment options including meal plans and digital wallets.',
  },
  {
    image: images.splash3,
    title: 'Fast Delivery',
    description:
      'Get your food delivered quickly to anywhere on campus. Track your order in real-time from kitchen to your location.',
  },
];
const CategoriesData: FeaturesTypes[] = [
  {
    image: randomImage(),
    title: 'Pizza',
  },
  {
    image: randomImage(),
    title: 'Burgers',
  },
  {
    image: randomImage(),
    title: 'Asian',
  },
  {
    image: randomImage(),
    title: 'Mexican',
  },
  {
    image: randomImage(),
    title: 'Healthy',
  },
  {
    image: randomImage(),
    title: 'Desserts',
  },
  {
    image: randomImage(),
    title: 'Beverages',
  },
  {
    image: randomImage(),
    title: 'Snacks',
  },
];

// Random Food Titles
const titles = [
  'Margherita Pizza',
  'Classic Cheeseburger',
  'Chicken Pad Thai',
  'Beef Tacos',
  'Caesar Salad',
  'Chocolate Brownie',
  'Iced Coffee',
  'Club Sandwich',
  'Sushi Roll',
  'Pepperoni Pizza',
  'Veggie Burger',
  'Chicken Wings',
  'Pasta Carbonara',
  'Fish and Chips',
  'Green Smoothie',
  'Chicken Burrito',
  'Chocolate Chip Cookies',
  'Bubble Tea',
];

const randomTitle = (): string =>
  titles[Math.floor(Math.random() * titles.length)];

const randomPrice = (): number =>
  parseFloat((Math.floor(Math.random() * 30) + 5).toFixed(2));

const randomPriceBeforeDeal = (): number =>
  parseFloat(
    (randomPrice() + (Math.floor(Math.random() * 10) + 2)).toFixed(2),
  );

const randomPriceOff = (price: number, priceBeforeDeal: number): string =>
  ((1 - price / priceBeforeDeal) * 100).toFixed(2);

const randomStars = (): number => (Math.random()  * 5);

const randomNumberOfReview = (): number => Math.floor(Math.random() * 10000);

const ProductData: ProductTypes[] = Array.from(
  {length: 15},
  (_, index): ProductTypes => {
    const price = randomPrice();
    const priceBeforeDeal = randomPriceBeforeDeal();
    return {
      _id: `food_${index + 1}`,
      image: [randomImage(), randomImage(), randomImage()],
      title: randomTitle(),
      description: 'Delicious and freshly prepared food item available for delivery to your campus location.',
      price: price,
      priceBeforeDeal: priceBeforeDeal,
      priceOff: randomPriceOff(price, priceBeforeDeal),
      stars: randomStars(),
      numberOfReview: randomNumberOfReview(),
      tags: ['food', 'delivery', 'campus'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    };
  },
);
/**

 */
// TabBar data
const tabName = ['Menu', 'Favorites', 'Cart', 'Search', 'Profile'];
const TabBarData: TabBarTypes[] = [
  {
    title: tabName[0],
    image: icons.home,
    link: tabName[0],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[1],
    image: icons.heart,
    link: tabName[1],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[2],
    image: icons.cart_circle,
    link: tabName[2],
    inActiveColor: '#050404',
    activeColor: '#EB3030',
    inActiveBGColor: '#FFFFFF',
    activeBGColor: '#EB3030',
  },
  {
    title: tabName[3],
    image: icons.search,
    link: tabName[3],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[4],
    image: icons.profile,
    link: tabName[4],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
];

export { 
  TabBarData,
  ProductData,
  CategoriesData,
  SplashData
}
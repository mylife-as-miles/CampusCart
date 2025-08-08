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
    title: 'Browse Foodstuffs',
    description:
      'Discover essential staple foods and groceries for UNN students. Fresh foodstuffs delivered right to your hostel or study spot.',
  },
  {
    image: images.splash2,
    title: 'Easy Shopping',
    description:
      'Affordable pricing with bulk discounts in Nigerian Naira. Student-friendly payment options available for essential foodstuffs.',
  },
  {
    image: images.splash3,
    title: 'Fast Delivery',
    description:
      'Get your foodstuffs delivered quickly anywhere on UNN campus. Track your order from store to your location.',
  },
];
const CategoriesData: FeaturesTypes[] = [
  {
    image: randomImage(),
    title: 'Grains',
  },
  {
    image: randomImage(),
    title: 'Tubers',
  },
  {
    image: randomImage(),
    title: 'Vegetables',
  },
  {
    image: randomImage(),
    title: 'Oils',
  },
  {
    image: randomImage(),
    title: 'Proteins',
  },
  {
    image: randomImage(),
    title: 'Spices',
  },
  {
    image: randomImage(),
    title: 'Beverages',
  },
  {
    image: randomImage(),
    title: 'Breakfast',
  },
];

// Random Foodstuff Titles
const titles = [
  'Local Rice (1kg)',
  'Brown Beans (1kg)',
  'White Garri (1kg)',
  'Yam Tubers (Medium)',
  'Fresh Tomatoes (1kg)',
  'Red Onions (1kg)',
  'Palm Oil (1 liter)',
  'Vegetable Oil (1 liter)',
  'Stock Fish (500g)',
  'Crayfish (250g)',
  'Maggi Cubes (50 pack)',
  'Pure Water (20 sachets)',
  'Bread (Large loaf)',
  'Sugar (1kg)',
  'Salt (500g)',
  'Fresh Pepper (500g)',
  'Plantain (Per hand)',
  'Irish Potato (1kg)',
];

const randomTitle = (): string =>
  titles[Math.floor(Math.random() * titles.length)];

const randomPrice = (): number =>
  parseFloat((Math.floor(Math.random() * 2500) + 400).toFixed(2));

const randomPriceBeforeDeal = (): number =>
  parseFloat(
    (randomPrice() + (Math.floor(Math.random() * 500) + 100)).toFixed(2),
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
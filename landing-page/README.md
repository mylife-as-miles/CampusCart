# CampusCart Landing Page 🛒

A beautiful, modern landing page for CampusCart - the essential foodstuffs delivery app for University of Nigeria, Nsukka (UNN) students.

## 🎨 Features

- **Modern Design**: Clean, professional design that matches the CampusCart mobile app aesthetics
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and scroll-based animations
- **Fast Loading**: Optimized for performance with minimal dependencies
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: Built with accessibility best practices

## 🚀 Technologies Used

- **HTML5**: Semantic markup with proper SEO structure
- **CSS3**: Modern CSS with CSS Variables, Grid, Flexbox, and animations
- **Vanilla JavaScript**: No framework dependencies for fast loading
- **Poppins Font**: Matches the app's typography
- **Font Awesome**: Icons for better visual hierarchy

## 🎯 Design System

### Colors
- **Primary Action**: `#F83758` (Red)
- **Blue Accent**: `#4392F9` (Blue)
- **Text Dark**: `#2D3748`
- **Text Light**: `#718096`
- **Background**: `#FFFFFF` / `#F9F9F9`

### Typography
- **Font Family**: Poppins (100-900 weights)
- **Responsive Typography**: Fluid font sizing for different screen sizes

### Layout
- **Max Width**: 1200px container
- **Grid System**: CSS Grid for modern layouts
- **Spacing**: Consistent spacing scale using CSS variables

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with app mockup and floating product cards
2. **Features**: Key benefits of using CampusCart
3. **Foodstuff Categories**: Visual showcase of available food categories
4. **How It Works**: Simple 4-step process explanation
5. **Testimonials**: Real student reviews and feedback
6. **Download Section**: App store download links and stats
7. **Contact**: Contact form and business information
8. **Footer**: Additional links and information

## 🔧 Setup & Development

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Getting Started

1. **Clone or navigate to the landing page directory:**
   ```bash
   cd landing-page
   ```

2. **Open with a local server** (recommended for development):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using Live Server (VS Code extension)
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **Or simply open the HTML file in your browser:**
   ```bash
   open src/index.html
   ```

### Project Structure

- **src/**: Contains the main files for the landing page.
  - **index.html**: The main HTML document for the landing page.
  - **styles/**: Contains the CSS styles for the landing page.
    - **main.css**: The main stylesheet defining the layout and visual aspects.
  - **scripts/**: Contains the JavaScript code for the landing page.
    - **main.js**: The main script handling interactivity and dynamic content.
  - **assets/**: Contains image assets used in the landing page.
    - **images/**: Folder for image files.
- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

## 🎨 Customization

### Colors
Update the CSS variables in `:root` section of `main.css`:
```css
:root {
    --action-color: #F83758;
    --blue-accent: #4392F9;
    /* ... other colors */
}
```

### Content
- Update text content in `index.html`
- Replace placeholder images in `assets/images/`
- Modify contact information and links

### Images
Place your images in `src/assets/images/` and update the `src` attributes in HTML:
- `logo.png` - App logo
- `app-mockup.png` - Phone mockup with app screenshot
- `phone-mockup-2.png` - Second phone mockup
- Category images: `grains.png`, `tubers.png`, etc.
- Student testimonial images: `student1.jpg`, `student2.jpg`, `student3.jpg`
- App store badges: `google-play.png`, `app-store.png`

## 📊 Performance

- **Optimized Images**: Use WebP format for better compression
- **Minimal JavaScript**: Vanilla JS for fast execution
- **CSS Grid/Flexbox**: Modern layout methods for better performance
- **Debounced Scroll Events**: Optimized scroll event handling

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Access via `https://username.github.io/repository-name`

### Netlify
1. Connect GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `landing-page/src`
4. Deploy automatically on push

### Vercel
1. Import project from GitHub
2. Set framework preset: Other
3. Set output directory: `landing-page/src`
4. Deploy

## 📱 Mobile Optimization

- **Responsive Design**: Works on all device sizes
- **Touch-Friendly**: Proper button sizes and spacing
- **Fast Loading**: Optimized for mobile networks
- **Progressive Enhancement**: Works without JavaScript

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Focus Indicators**: Clear focus states for interactive elements

## 🔍 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card meta tags
- **Structured Data**: Schema.org markup for better search results
- **Semantic HTML**: Proper HTML5 semantic elements
- **Fast Loading**: Optimized for Core Web Vitals

## 📞 Support

For questions or issues with the landing page:
- Email: support@campuscart.ng
- GitHub Issues: Create an issue in the repository

## 📄 License

This landing page is part of the CampusCart project. All rights reserved.

---

**Built with ❤️ for UNN students**
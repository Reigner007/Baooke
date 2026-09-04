# Baooke Global Services Website

A modern, responsive website for Baooke Global Services - an electronics and home appliance business in Lagos, Nigeria.

## Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Product Catalog** - Browse categories and featured products
- **Search & Filter** - Find products by name or category
- **WhatsApp Integration** - Direct enquiry buttons for every product
- **Store Locations** - Three Lagos locations with Google Maps directions
- **Contact Form** - Enquiry form that opens WhatsApp
- **Modern UI** - Clean design with purple/gold/orange brand colors
- **Accessible** - Semantic HTML, proper ARIA labels, keyboard navigation
- **Fast** - Vanilla HTML/CSS/JS, no frameworks, lazy-loaded images

## Project Structure

```
baooke-global-services/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.jpg
│   │   ├── about.jpg
│   │   ├── categories/
│   │   ├── products/
│   │   └── brands/
│   └── icons/
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process, no dependencies, no server required

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #4A148C;      /* Deep purple */
    --secondary: #7B1FA2;    /* Bright purple */
    --accent: #FFD600;       /* Yellow/gold */
    --cta: #FF6D00;          /* Orange */
}
```

### Products
Edit the `products` array in `js/script.js`:
```javascript
const products = [
    {
        name: "Product Name",
        category: "Category Name",
        description: "Product description",
        image: "assets/images/products/image.jpg"
    },
    // Add more products...
];
```

### Business Information
Update in `index.html`:
- Phone numbers
- Store addresses
- Business description
- WhatsApp number

### Images
Replace placeholder images in `assets/images/`:
- `logo.png` - Company logo
- `hero.jpg` - Hero section background
- `about.jpg` - About section image
- `products/` - Product images
- `categories/` - Category images
- `brands/` - Brand logos

## WhatsApp Integration

The site uses `https://wa.me/2348093267000` for all WhatsApp links.

Product enquiry buttons automatically generate messages like:
> "Hello Baooke Global Services, I am interested in [Product Name]. Please provide more information and the current price."

Contact form submissions open WhatsApp with:
> "Hello Baooke Global Services,
> My name is [NAME].
> I am interested in: [PRODUCT]
> Message: [MESSAGE]
> My phone number is: [PHONE]"

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Deployment

Deploy as a static site to:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server (Apache, Nginx, etc.)

Simply upload the entire `baooke-global-services` folder.

## Business Information

**Baooke Global Services**
- Phone: 08093267000, 09151792941
- WhatsApp: 08093267000
- Head Office: Block 14, Plot 13A, Oga Oloye, Bayeku Road, Igbogbo, Ikorodu, Lagos
- Ikorodu Branch: 50, Obafemi Awolowo Way, Setz Plaza, Igbogbo, Ikorodu, Lagos
- Victoria Island Branch: Shop A5, Tele Plaza, 5 Saka Tinubu Street, Victoria Island, Lagos

## License

© 2026 Baooke Global Services. All rights reserved.
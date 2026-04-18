# Ankit Rana - Portfolio Website

A modern, high-performance personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features beautiful animations, smooth transitions, and a premium dark theme design.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0f/a855f7?text=Ankit+Rana+Portfolio)

## 🚀 Features

- **Modern Tech Stack**: Built with React (Vite), Tailwind CSS, and Framer Motion
- **Stunning Animations**: Smooth scroll animations, hover effects, and micro-interactions
- **Dark Theme**: Premium dark theme with purple/blue gradient accents
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **SEO Friendly**: Proper meta tags and Open Graph tags for better discoverability
- **Theme Toggle**: Dark/Light mode support (currently defaulted to dark)
- **Smooth Scrolling**: Buttery smooth navigation between sections

## 📋 Sections

1. **Hero Section** - Eye-catching landing with animated background and CTA buttons
2. **About Section** - Introduction with animated highlight cards
3. **Skills Section** - Categorized skills with animated progress indicators
4. **Experience Section** - Timeline view of work experience
5. **Projects Section** - Showcase of featured projects
6. **Featured Work Section** - Premium spotlight on key projects
7. **Contact Section** - Functional contact form with social links
8. **Footer** - Clean footer with navigation and scroll-to-top

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The optimized files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file to update:

- **Hero.jsx** - Name, title, and introduction
- **About.jsx** - Biography and highlights
- **Skills.jsx** - Technical skills and proficiency levels
- **Experience.jsx** - Work experience details
- **Projects.jsx** - Project information and links
- **FeaturedWork.jsx** - Highlighted projects
- **Contact.jsx** - Contact information

### Modify Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Your primary color shades */ },
  accent: { /* Your accent color shades */ }
}
```

### Adjust Animations

Modify animation settings in component files using Framer Motion's configuration options.

## ⚡ Performance Optimizations

- **Lazy Loading**: Components are lazy-loaded for faster initial load
- **Code Splitting**: Automatic code splitting by Vite
- **Optimized Images**: Use WebP format and proper sizing
- **Smooth Animations**: 60fps animations using Framer Motion
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: CSS and JS are minified in production

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Ankit Rana**

- Portfolio: [https://www.ranadev.in](https://www.ranadev.in)
- Email: [ranaankitr@outlook.com](mailto:ranaankitr@outlook.com)
- GitHub: [@AnkitRana26](https://github.com/AnkitRana26)
- LinkedIn: [ankitofficial](https://www.linkedin.com/in/ankitofficial/)
- Phone: +91-9650817217

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons
- Animations powered by Framer Motion
- Built with love and ☕

---

**Made with ❤️ by Ankit Rana**

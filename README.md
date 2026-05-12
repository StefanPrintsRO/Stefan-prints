# Stefan Prints RO - 3D Printing Business Website

A modern, professional 3D printing business website built with React, Vite, and designed for GitHub Pages deployment.

## Features

- Modern dark aesthetic with orange, white, and blue accent colors
- Smooth animations and transitions
- Fully responsive design for desktop and mobile
- Loading screen with 3D cube animation
- Scroll-triggered animations
- Product showcase with pricing
- Custom print request form
- Gallery with hover effects
- Process timeline
- Contact section

## Tech Stack

- React 19
- Vite 8
- CSS3 (Custom CSS variables, animations, Grid/Flexbox)
- GitHub Pages deployment ready

## Project Structure

```
Stefan-prints-ro/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── CustomPrints.jsx
│   │   ├── Gallery.jsx
│   │   ├── Process.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingScreen.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone or navigate to the project directory
cd Stefan-prints-ro

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com)
   - Create a new repository named `Stefan-prints-ro`

2. **Update package.json**
   - Edit the `homepage` field with your GitHub username:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/Stefan-prints-ro"
   ```

3. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/Stefan-prints-ro.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / (root)
   - Click Save

5. **Deploy**
   ```bash
   npm run deploy
   ```

Your site will be live at: `https://YOUR-USERNAME.github.io/Stefan-prints-ro`

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder contents to your GitHub repository

3. Enable GitHub Pages in repository settings

### Custom Domain (Optional)

If using a custom domain:

1. Add a `CNAME` file to the `public` folder:
   ```
   yourdomain.com
   ```

2. Update GitHub Pages settings with your custom domain

## Setting Up Email Notifications

The custom print form uses [Formspree](https://formspree.io/) to send emails directly to your inbox.

### Setup Instructions

1. **Create a Formspree account**
   - Go to [formspree.io](https://formspree.io/)
   - Sign up for free (50 submissions/month on free plan)

2. **Create a new form**
   - Click "New Form" 
   - Set the form name (e.g., "Custom Print Requests")
   - Your forwarding email should be your Proton Mail address

3. **Get your form ID**
   - In your form settings, you'll see a URL like:
     `https://formspree.io/f/xpwqvpqr`
   - Copy the part after `/f/` (e.g., `xpwqvpqr`)

4. **Update the code**
   - Open `src/components/CustomPrints.jsx`
   - Find this line:
     ```javascript
     const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
     ```
   - Replace `YOUR_FORMSPREE_ID` with your actual form ID:
     ```javascript
     const response = await fetch('https://formspree.io/f/xpwqvpqr', {
     ```

5. **Redeploy**
   ```bash
   npm run build
   npm run deploy
   ```

Now when someone submits the form, you'll receive an email with all the details!

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-bg-primary: #0a0a0a;
  --color-accent-orange: #ff6b35;
  --color-accent-blue: #4a9eff;
  /* ... */
}
```

### Content

- **Products**: Edit `src/components/Products.jsx` - array of products
- **Custom Print Features**: Edit `src/components/CustomPrints.jsx` - features array
- **Gallery**: Edit `src/components/Gallery.jsx` - gallery items array
- **Contact**: Edit `src/components/Contact.jsx` - email and social links

### Images

Replace placeholder icons with actual images:

1. Add images to `src/assets/`
2. Update component references to use actual image paths

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ by Stefan Prints RO

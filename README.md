# Adelante Landscapes Website

Professional landscape design website for Adelante Landscapes featuring responsive Jekyll design, edible landscaping portfolio, and sustainable gardening blog. Built for GitHub Pages deployment with custom domain support.

## About Adelante Landscapes

Founded by Cheryl Beesley, a landscape designer with 30+ years of experience and author of "Landscaping with Edible Plants in Texas." The company focuses on creating beautiful, functional outdoor spaces that blend aesthetics with sustainability, specializing in Texas-native plants and edible garden integration.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Gallery**: Filterable showcase of landscape projects (Edible, Modern, Naturalistic, Sustainable)
- **Blog System**: Educational articles on gardening tips and landscape design
- **Service Pages**: Comprehensive information on all services offered
- **Contact Integration**: Professional contact forms and business information
- **SEO Optimized**: Proper meta tags, structured data, and sitemap
- **Fast Loading**: Optimized images and minimal JavaScript

## Services Showcased

- **Edible Landscaping Design** - Beautiful gardens that produce food
- **Sustainable & Eco-Friendly Design** - Environmentally responsible landscapes
- **Perennial Garden Planning** - Year-round color and interest
- **Installation & Maintenance Services** - Complete project support
- **Educational Workshops & Presentations** - Sharing expertise with the community

## Live Website

**Production:** [https://adelantelandscapes.com](https://adelantelandscapes.com)  
**GitHub Pages:** [https://benjination.github.io/AdelanteLandscapes/](https://benjination.github.io/AdelanteLandscapes/)

## Technical Details

**Built With:**
- Jekyll (GitHub Pages compatible)
- Custom CSS with responsive grid
- Vanilla JavaScript for interactivity
- Optimized image galleries
- Contact form integration

**Browser Support:**
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Quick Start

### Prerequisites
- Ruby 2.7+ 
- Bundler gem

### Local Development

1. **Clone/Download** this repository to your local machine

2. **Install dependencies**:
   ```bash
   cd website
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site** at `http://localhost:4000`

### GitHub Pages Deployment

1. **Create a new GitHub repository** named `adelante-landscapes` (or any name you prefer)

2. **Push this code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial website setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/adelante-landscapes.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Configure custom domain** (optional):
   - In Pages settings, add your domain: `adelantelandscapes.com`
   - Create a CNAME file in the repository root with your domain
   - Update your domain's DNS settings to point to GitHub Pages

## Customization

### Content Updates

- **Site information**: Edit `_config.yml`
- **Homepage**: Edit `index.html`
- **About page**: Edit `about.html`
- **Contact page**: Edit `contact.html`
- **Styling**: Edit `assets/css/main.css`

### Adding Blog Posts

Create new files in `_posts/` with the format: `YYYY-MM-DD-post-title.md`

Example:
```markdown
---
layout: post
title: "Your Blog Post Title"
date: 2025-07-29
categories: [landscaping, tips]
excerpt: "Brief description of the post"
---

Your blog post content here...
```

### Adding Portfolio Projects

Create new files in `_projects/` with the format: `project-name.md`

Example:
```markdown
---
layout: project
title: "Modern Backyard Transformation"
category: "Modern"
featured_image: "/assets/images/projects/modern-backyard.jpg"
gallery:
  - "/assets/images/projects/modern-1.jpg"
  - "/assets/images/projects/modern-2.jpg"
---

Project description here...
```

### Contact Form Setup

1. **Sign up** for [Formspree](https://formspree.io/)
2. **Create a new form** and get your form ID
3. **Update** the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## File Structure

```
website/
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   └── default.html
├── _posts/              # Blog posts
├── _projects/           # Portfolio projects
├── assets/
│   ├── css/
│   │   └── main.css     # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Images and media
├── index.html           # Homepage
├── about.html           # About page
├── contact.html         # Contact page
├── services.html        # Services page
├── portfolio.html       # Portfolio page
├── blog.html           # Blog listing page
└── README.md           # This file
```

## Next Steps

1. **Add more content**: Convert blog posts from Word documents
2. **Add portfolio projects**: Create project pages with your landscape photos
3. **Optimize images**: Resize and compress images for web
4. **Set up analytics**: Add Google Analytics or similar
5. **Test thoroughly**: Check all functionality before going live
6. **Set up domain**: Configure DNS settings for your custom domain

## Support

For questions about Jekyll or GitHub Pages:
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## License

This website template is created specifically for Adelante Landscapes.

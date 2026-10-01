# Vishwa Subash - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing projects, skills, experience, and professional journey.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark aesthetic with blue and green accents
- **Smooth Navigation** - Smooth scrolling between sections with fixed navigation
- **Mobile Menu** - Hamburger menu for mobile devices
- **Project Showcase** - Display of multiple projects with tags
- **Skills Section** - Organized technical proficiency across different domains
- **Experience Timeline** - Professional journey and internship highlights
- **Contact Section** - Multiple ways to get in touch
- **Modern Tech Stack** - Built with latest web technologies

## 📋 Project Structure

```
├── src/
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles with Tailwind
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # This file
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm

## ⚡ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd vishwa-subash-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Update Personal Information

Edit `src/App.jsx` to update:
- Name and title
- Personal description
- Social links
- Email and contact details
- Resume download link

### Modify Skills

Update the skill cards in the "Technical Proficiency" section:

```jsx
<ProjectCard 
  title="Frontend"
  description="..."
  tags={['React.js', 'Next.js', 'Tailwind CSS']}
/>
```

### Add Projects

Add more projects by creating additional `ProjectCard` components:

```jsx
<ProjectCard 
  title="Your Project Name"
  description="Project description"
  tags={['Tech1', 'Tech2', 'Tech3']}
/>
```

### Update Experience

Add more experience entries using the `ExperienceCard` component:

```jsx
<ExperienceCard 
  title="Your Position"
  company="Company Name"
  period="Date Range"
  description="Description of your work"
/>
```

### Change Colors

Modify Tailwind colors in `tailwind.config.js` or use Tailwind's built-in colors:
- Blue accent: `text-blue-500`, `bg-blue-600`
- Green accent: `text-green-400`, `border-green-600`
- Dark background: `bg-slate-950`, `bg-slate-900`

## 🔗 Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Personal background and focus areas
3. **Technical Proficiency** - Organized skills by category
4. **Selected Projects** - Showcase of key projects
5. **Professional Journey** - Experience and internships
6. **Contact Section** - Contact form and social links
7. **Footer** - Copyright and quick links

## 🎯 Navigation

- **Smooth Scrolling** - Click navigation items to smoothly scroll to sections
- **Fixed Header** - Navigation stays visible while scrolling
- **Mobile Responsive** - Hamburger menu on small screens
- **Active Section Tracking** - Navigate with keyboard or mouse

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px



## 📞 Contact Links

Update these in the Contact Section:
- Email: Change email address
- LinkedIn: Add your profile URL
- GitHub: Add your profile URL
- Phone: Add your contact number

## 🎨 Design Features

- **Dark Theme**: Professional dark aesthetic
- **Accent Colors**: Blue (#3B82F6) and Green (#22C55E)
- **Modern Typography**: Clean, readable font hierarchy
- **Smooth Animations**: Hover effects and transitions
- **Consistent Spacing**: Using Tailwind's spacing scale

## 🚀 Performance

- Optimized bundle size with Vite
- Lazy loading support
- CSS purging with Tailwind
- Smooth scrolling without heavy libraries

## 📈 SEO Optimization

- Meta tags in HTML
- Semantic HTML structure
- Mobile-friendly design
- Fast loading performance

## 🤝 Contributing

Feel free to customize and extend this portfolio template!

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

**Built with ❤️ for developers**

Happy coding! 🚀

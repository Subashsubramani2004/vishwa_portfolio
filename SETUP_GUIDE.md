# Portfolio Setup & Customization Guide

## 🎯 Initial Setup

### Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages:
- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:3000`

## 🎨 Customization Guide

### 1. Update Personal Information

Open `src/App.jsx` and find the navigation section:

```jsx
<div className="text-2xl font-bold text-white">VISHWA SUBASH</div>
```

Change to your name.

### 2. Customize Hero Section

```jsx
<h1 className="text-5xl md:text-6xl font-bold mb-6">
  Building ideas into
  <span className="text-blue-500 block">practical software</span>
</h1>

<p className="text-gray-400 text-lg mb-8 max-w-xl">
  I am a final-year CSE student passionate about full-stack development...
</p>
```

Update the heading and description with your own text.

### 3. Add Your Profile Picture

Replace the emoji placeholder in the hero section:

```jsx
<div className="text-6xl">👨‍💻</div>
```

With an actual image:

```jsx
<img 
  src="/path-to-your-image.jpg" 
  alt="Profile" 
  className="w-full h-full object-cover"
/>
```

### 4. Update Skills Section

Modify the skill cards:

```jsx
<div className="space-y-2 text-gray-300">
  <p>• React.js & Next.js</p>
  <p>• Tailwind CSS & Material UI</p>
  {/* Add more skills */}
</div>
```

### 5. Add Your Projects

Replace existing projects with your own:

```jsx
<ProjectCard 
  title="Your Project Name"
  description="Brief description of what your project does"
  tags={['React', 'Node.js', 'MongoDB']}
/>
```

### 6. Update Experience Section

Modify experience entries:

```jsx
<ExperienceCard 
  title="Your Job Title"
  company="Company Name"
  period="Start Date - End Date"
  description="Description of your responsibilities and achievements"
/>
```

### 7. Customize Contact Information

Update the contact details:

```jsx
<ContactItem icon="✉️" label="Email" value="your-email@example.com" />
<ContactItem icon="🔗" label="LinkedIn" value="linkedin.com/in/yourprofile" />
<ContactItem icon="🐙" label="GitHub" value="github.com/yourusername" />
```

### 8. Update Footer

Change the footer text:

```jsx
<p className="text-gray-500">© 2024 Your Name. Built for performance.</p>
```

## 🎨 Style Customization

### Change Color Scheme

Edit `src/App.jsx` and replace color classes:

**Blue Accent** (currently `text-blue-500`, `bg-blue-600`):
- Replace with `text-cyan-500`, `bg-cyan-600` for cyan
- Or `text-indigo-500`, `bg-indigo-600` for indigo
- Or `text-purple-500`, `bg-purple-600` for purple

**Green Accent** (currently `text-green-400`):
- Replace with `text-emerald-400` for emerald
- Or `text-teal-400` for teal

### Modify Dark Theme

In `tailwind.config.js`:

```js
colors: {
  slate: {
    950: '#03071e',  // Change to your preferred dark color
  }
}
```

### Adjust Font Sizes

In `src/App.jsx`, modify heading sizes:
- `text-5xl` → `text-4xl` (smaller) or `text-6xl` (larger)
- `text-2xl` → adjust as needed

### Change Spacing

Use Tailwind's spacing utilities:
- `mb-6` → increase margin bottom
- `px-4` → adjust padding
- `gap-8` → adjust gaps between elements

## 📱 Mobile Optimization

The portfolio is already responsive, but you can customize breakpoints:

### Test Different Screen Sizes

```bash
# Use browser dev tools (F12) to test:
# Mobile: 375px
# Tablet: 768px
# Desktop: 1024px+
```

### Adjust Mobile Menu

The mobile menu is automatically hidden on screens >= 768px:

```jsx
{mobileMenuOpen && (
  <div className="md:hidden pb-4 border-t border-slate-800">
    {/* Mobile menu items */}
  </div>
)}
```

## 🔗 Add Social Links

Update the footer social links:

```jsx
<a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-400 transition">
  LinkedIn
</a>
```

## 📧 Contact Form Integration

To enable the contact form, you need a backend service. Options:

### Option 1: Formspree (No backend needed)

1. Go to formspree.io
2. Create an account
3. Get your form ID
4. Update the form in contact section:

```jsx
<form action={`https://formspree.io/f/YOUR_FORM_ID`} method="POST">
  {/* form fields */}
</form>
```

### Option 2: EmailJS

1. Install: `npm install @emailjs/browser`
2. Set up account on emailjs.com
3. Initialize and use in your component

### Option 3: Backend API

Create your own backend endpoint and send form data there.

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Vercel auto-configures for Vite
5. Deploy!

### Deploy to Netlify

1. Run `npm run build`
2. Go to netlify.com
3. Drag and drop the `dist` folder
4. Or connect your GitHub repo

### Custom Domain

After deployment, go to your hosting platform's settings and:
1. Add your custom domain
2. Update DNS records
3. Enable SSL/HTTPS

## 🎯 SEO Optimization

### Update Meta Tags

In `index.html`:

```html
<meta name="description" content="Your description here" />
<meta name="keywords" content="your, keywords, here" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your description" />
```

### Add Structured Data

Add JSON-LD schema for better SEO (optional):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Job Title",
  "url": "https://yourportfolio.com",
  "sameAs": ["https://linkedin.com/in/yourprofile"]
}
</script>
```

## 🔍 Performance Tips

1. **Optimize Images**: Use compressed images
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Code Splitting**: Already handled by Vite
4. **Minification**: Automatic in production build
5. **Caching**: Configure on your hosting platform

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Change port in vite.config.js
server: {
  port: 3001,  // Use different port
}
```

### Styles not updating

Clear cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Build errors

```bash
npm install
npm run build
```

## 📚 Additional Resources

- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev
- Vite: https://vitejs.dev
- Lucide Icons: https://lucide.dev

## 💡 Best Practices

1. **Keep content updated** - Update projects and experience regularly
2. **Use high-quality images** - Compress and optimize
3. **Test on mobile** - Always check mobile responsiveness
4. **Update frequently** - Keep skills and projects current
5. **Add new projects** - Showcase your latest work

## 🎓 Next Steps

1. ✅ Install dependencies
2. ✅ Customize content
3. ✅ Test locally
4. ✅ Build for production
5. ✅ Deploy to hosting
6. ✅ Set up custom domain
7. ✅ Monitor analytics

Good luck with your portfolio! 🚀

# Shanyu Thibaut's Blog

A modern, minimalist blog built with [Astro](https://astro.build/) and deployed to GitHub Pages. Features a clean design focused on readability and performance.

## 🚀 Features

- **Fast & Modern**: Built with Astro for optimal performance
- **Markdown-first**: Write blog posts in Markdown with frontmatter
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **GitHub Pages Ready**: Automated deployment via GitHub Actions
- **Developer Experience**: TypeScript support and hot reload during development

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── blog/           # Blog posts in Markdown
│   │   └── config.ts       # Content collections config
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout component
│   └── pages/
│       ├── index.astro     # Homepage
│       ├── projects.astro  # Projects showcase
│       ├── thoughts.astro  # Blog listing page
│       └── thoughts/
│           └── [...slug].astro # Dynamic blog post routes
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✍️ Writing Blog Posts

Blog posts are stored in `src/content/blog/` as Markdown files. Each post requires frontmatter with the following structure:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 'Dec 25 2024'
tags: ['tag1', 'tag2', 'tag3']
---

# Your content here

Write your blog post content in Markdown...
```

### Supported Frontmatter Fields

- `title` (required): The post title
- `description` (required): Brief description for SEO and post listing
- `pubDate` (required): Publication date
- `updatedDate` (optional): Last updated date
- `tags` (optional): Array of tags for categorization
- `heroImage` (optional): Hero image path

## 🎨 Customization

### Styling
The site uses a custom CSS design system with CSS variables defined in `src/layouts/BaseLayout.astro`. Key variables:

```css
:root {
  --text-color: #333;
  --link-color: #2563eb;
  --border-color: #e5e7eb;
  --background-color: #ffffff;
  --secondary-text: #666;
}
```

### Projects Page
Update the projects array in `src/pages/projects.astro` to showcase your own projects. Set `hackathonWin: true` for projects that have won competitions to display a trophy icon.

### Navigation
Modify the navigation links in `src/layouts/BaseLayout.astro` to add or remove pages.

## 🌐 Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions. 

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**:
   - The workflow in `.github/workflows/deploy.yml` will automatically build and deploy
   - Site will be available at `https://yourusername.github.io/repository-name`

3. **Update configuration**:
   - Modify `site` and `base` in `astro.config.mjs` to match your GitHub Pages URL

### Manual Deployment

```bash
npm run build
npm run preview  # Test the build locally
```

## 🔧 Configuration

### Astro Config
Key settings in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
```

### Content Collections
Blog content is managed through Astro's content collections. The schema is defined in `src/content/config.ts`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 👤 Author

**Shanyu Thibaut**

- GitHub: [@terminalsin](https://github.com/terminalsin)
- Website: [https://terminalsin.github.io/ghast.dev.2](https://terminalsin.github.io/ghast.dev.2)

---

Built with ❤️ using [Astro](https://astro.build/)

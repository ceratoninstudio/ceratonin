# Ceratonin

A beautiful static website for Ceratonin pottery studio, built with React, TypeScript, and Vite.

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository: https://github.com/ceratoninstudio/ceratonin
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Pages setup"
   git branch -M main
   git remote add origin https://github.com/ceratoninstudio/ceratonin.git
   git push -u origin main
   ```

3. **Automatic Deployment:**
   - Once you push to the `main` branch, GitHub Actions will automatically:
     - Build your React app
     - Deploy it to GitHub Pages
   - The site will be available at: `https://ceratoninstudio.github.io/ceratonin/`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` folder

3. Push the `dist` folder contents to the `gh-pages` branch (requires additional setup)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- The base path is configured as `/ceratonin/` in `vite.config.ts` to match your repository name
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles automatic deployment
- Your site will be live at: `https://ceratoninstudio.github.io/ceratonin/`

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

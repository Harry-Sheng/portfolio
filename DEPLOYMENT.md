# Deployment Guide

This portfolio is automatically deployed to GitHub Pages at [harrysheng.com](https://harrysheng.com) via the `HarryShengCS.github.io` repository.

## How It Works

1. **Source Code**: This repository contains your Next.js source code
2. **Build Process**: GitHub Actions builds a static export when you push to `main`
3. **Deployment**: The built files are automatically pushed to `HarryShengCS/HarryShengCS.github.io`
4. **Custom Domain**: GitHub Pages serves the site at `harrysheng.com` via the CNAME file

## Initial Setup

### 1. Create GitHub Personal Access Token

You need to create a token that allows the GitHub Action to push to your `HarryShengCS.github.io` repository.

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Deployment"
4. Set expiration (recommend 90 days or No expiration)
5. Select scopes:
   - ✅ `repo` (Full control of private repositories)
6. Click "Generate token"
7. **Copy the token immediately** (you won't see it again!)

### 2. Add Token to Repository Secrets

1. Go to this repository's Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `DEPLOY_TOKEN`
4. Value: Paste your token from step 1
5. Click "Add secret"

### 3. Configure DNS (if not already done)

Your domain registrar needs to point `harrysheng.com` to GitHub Pages:

**For apex domain (harrysheng.com):**
Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For www subdomain (optional):**
Add a CNAME record:
```
www.harrysheng.com → HarryShengCS.github.io
```

### 4. Enable GitHub Pages

In your `HarryShengCS.github.io` repository:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Custom domain: `harrysheng.com`
5. ✅ Enforce HTTPS

## Deployment

### Automatic Deployment

Every time you push to the `main` branch, the site will automatically:
1. Build the static export
2. Deploy to `HarryShengCS.github.io`
3. Be live at `harrysheng.com` within 1-2 minutes

### Manual Deployment

If you need to deploy manually:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# You can manually push this to HarryShengCS.github.io if needed
```

## Testing Locally

To test the production build locally:

```bash
# Build the static export
npm run build

# Serve the 'out' directory with any static server
npx serve out
```

## Troubleshooting

### Build Fails
- Check the Actions tab in GitHub for error logs
- Ensure all dependencies are in `package.json`
- Test the build locally: `npm run build`

### Site Not Updating
- Check that the GitHub Action completed successfully
- Clear your browser cache (Cmd+Shift+R)
- Check `HarryShengCS.github.io` repo to see if files were updated

### Custom Domain Not Working
- Verify DNS settings with your domain registrar
- Ensure CNAME file contains `harrysheng.com`
- Check GitHub Pages settings in `HarryShengCS.github.io` repo

### Images Not Loading
- Ensure images are in the `public` folder
- Use relative paths: `/image.jpg` not `./image.jpg`
- Check that `images.unoptimized: true` is in `next.config.ts`

## File Structure

```
portfolio/                          # This repo (source code)
├── .github/workflows/deploy.yml   # Auto-deployment workflow
├── public/CNAME                   # Custom domain config
├── out/                           # Built files (generated, not committed)
└── ...

HarryShengCS.github.io/            # Deployment repo
└── [built files from out/]        # Auto-updated by GitHub Actions
```

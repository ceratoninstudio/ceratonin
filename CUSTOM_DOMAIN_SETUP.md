# Custom Domain Setup for GitHub Pages

## Step 1: Add Custom Domain in GitHub

1. Go to your repository: https://github.com/ceratoninstudio/ceratonin
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter your domain (e.g., `ceratonin.studio` or `www.ceratonin.studio`)
4. Click **Save**
5. GitHub will automatically create a `CNAME` file in your repository

## Step 2: Configure DNS Records

### Option A: Apex Domain (e.g., ceratonin.studio)

If you want to use your root domain (without www), add these **A records** in your DNS:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** Replace `@` with your root domain or leave blank depending on your DNS provider.

### Option B: Subdomain (e.g., www.ceratonin.studio)

If you want to use a subdomain (recommended), add a **CNAME record**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | ceratoninstudio.github.io | 3600 |

### Option C: Both Apex and WWW

For maximum compatibility, set up both:

1. **A Records** for apex domain (as shown in Option A)
2. **CNAME Record** for www subdomain (as shown in Option B)

## Step 3: Wait for DNS Propagation

- DNS changes can take anywhere from a few minutes to 48 hours
- Check DNS propagation: https://www.whatsmydns.net/
- GitHub will show a warning until DNS is properly configured

## Step 4: Enable HTTPS (Automatic)

1. After DNS is configured, go back to **Settings** → **Pages**
2. Check **Enforce HTTPS** (this will be enabled automatically once DNS is verified)
3. GitHub provides free SSL certificates via Let's Encrypt

## Step 5: Update Vite Configuration

After setting up the custom domain, you'll need to update `vite.config.ts` to remove the base path (since custom domains don't need `/ceratonin/`):

```typescript
// Change from:
base: '/ceratonin/',

// To:
base: '/',
```

## Step 6: Verify Setup

1. Visit your custom domain in a browser
2. Check that HTTPS is working (padlock icon)
3. Verify all assets (images, CSS, JS) load correctly

## Troubleshooting

### DNS Not Resolving
- Wait 24-48 hours for full propagation
- Verify DNS records are correct using `dig` or online DNS checkers
- Make sure you're using the correct IP addresses (GitHub's IPs may change)

### HTTPS Not Working
- Ensure DNS is fully propagated
- Wait for GitHub to provision SSL certificate (can take up to 24 hours)
- Check **Enforce HTTPS** is enabled in repository settings

### Mixed Content Warnings
- Ensure all resources use HTTPS
- Check that external images use `https://` URLs

## Important Notes

- **CNAME file**: GitHub automatically creates this when you add a custom domain. Don't delete it!
- **DNS TTL**: Lower TTL (300-600 seconds) helps with faster updates during setup
- **Both www and apex**: If you want both, you'll need to choose one as primary in GitHub and redirect the other

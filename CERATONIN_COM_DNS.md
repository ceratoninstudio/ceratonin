# DNS Setup for ceratonin.com

## DNS Records to Add

### Option 1: Apex Domain Only (ceratonin.com)

Add these **4 A records** in your DNS provider:

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** 
- `@` means the root domain (ceratonin.com)
- Some DNS providers use blank/empty for root domain
- Some use `ceratonin.com` explicitly

### Option 2: Both Apex and WWW (Recommended)

**For ceratonin.com (apex):**
Add the 4 A records above.

**For www.ceratonin.com:**
Add this CNAME record:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | www | ceratoninstudio.github.io | 3600 |

## Step-by-Step Instructions

1. **In your DNS provider's control panel:**
   - Add 4 A records for `@` (or root domain) with the IPs above
   - (Optional) Add CNAME for `www` pointing to `ceratoninstudio.github.io`

2. **In GitHub:**
   - Go to: https://github.com/ceratoninstudio/ceratonin/settings/pages
   - Under **Custom domain**, enter: `ceratonin.com`
   - Click **Save**
   - Check **Enforce HTTPS** (will be available after DNS propagates)

3. **Wait for DNS propagation:**
   - Usually takes 5 minutes to 24 hours
   - Check status: https://www.whatsmydns.net/#A/ceratonin.com
   - Verify it resolves to GitHub's IPs: 185.199.108.153, 185.199.109.153, etc.

4. **Verify HTTPS:**
   - GitHub automatically provisions SSL certificate
   - Can take up to 24 hours after DNS is configured
   - Visit https://ceratonin.com to verify

## Quick Reference

- **GitHub Pages IPs:** 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- **CNAME target:** ceratoninstudio.github.io
- **Custom domain:** ceratonin.com

## After Setup

Your site will be available at:
- https://ceratonin.com
- https://www.ceratonin.com (if you set up the CNAME)

The old GitHub Pages URL (ceratoninstudio.github.io/ceratonin) will redirect to your custom domain.

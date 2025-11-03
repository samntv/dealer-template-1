# Cloudinary Image Management Guide

This guide explains how to set up and use Cloudinary for image management with this Astro website.

---

## 📋 Table of Contents

1. [Why Cloudinary?](#why-cloudinary)
2. [Free Tier Details](#free-tier-details)
3. [Setup Instructions](#setup-instructions)
4. [Folder Structure](#folder-structure)
5. [Uploading Images](#uploading-images)
6. [Using Images in Content](#using-images-in-content)
7. [AI Workflow](#ai-workflow)
8. [Advanced Features](#advanced-features)

---

## 🎯 Why Cloudinary?

**Benefits:**
- ✅ **Free tier** - 25GB storage, 25GB bandwidth/month
- ✅ **Automatic optimization** - WebP, AVIF, responsive images
- ✅ **Fast CDN** - Global edge network
- ✅ **AI-friendly** - Easy URL-based management
- ✅ **No build slowdown** - Images don't affect build time
- ✅ **Transformations** - Resize, crop, effects on-the-fly

---

## 💰 Free Tier Details

**What you get FREE forever:**
- 25 GB storage (~10,000 images)
- 25 GB bandwidth/month (~100,000 page views)
- Unlimited transformations
- Image optimization (WebP, AVIF)
- Responsive images
- Lazy loading
- AI-powered features

**Perfect for:**
- Small to medium businesses
- Marketing websites
- Portfolios
- Blogs

---

## 🚀 Setup Instructions

### Step 1: Create Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for free account
3. Note your **Cloud Name** (e.g., `demo`)

### Step 2: Install Astro Cloudinary Integration

```bash
npm install astro-cloudinary
```

### Step 3: Update `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import cloudinary from 'astro-cloudinary';

export default defineConfig({
  integrations: [
    cloudinary({
      cloudName: 'YOUR_CLOUD_NAME', // Replace with your cloud name
    }),
  ],
});
```

### Step 4: Add Cloud Name to `config.yaml`

```yaml
cloudinary:
  cloudName: 'YOUR_CLOUD_NAME'
```

---

## 📁 Folder Structure

**Recommended Cloudinary folder organization:**

```
your-cloud/
├── hero/              # Hero/banner images
│   ├── home-hero.jpg
│   ├── solutions-hero.jpg
│   └── about-hero.jpg
├── services/          # Service page images
│   ├── website-design.jpg
│   ├── social-media.jpg
│   └── seo.jpg
├── billboards/        # Indoor billboard images
│   ├── location-1.jpg
│   └── location-2.jpg
├── logos/             # Brand logos
│   ├── brand-logo.svg
│   └── partner-logos/
├── team/              # Team photos
│   ├── john-doe.jpg
│   └── jane-smith.jpg
└── og/                # Open Graph images
    └── default-og.jpg
```

---

## 📤 Uploading Images

### Method 1: Dashboard Upload (Easiest)

1. Log in to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Go to **Media Library**
3. Click **Upload** button
4. Drag & drop images or browse
5. Organize into folders
6. Copy the image URL

**Example URL:**
```
https://res.cloudinary.com/your-cloud/image/upload/v1/hero/home-hero.jpg
```

### Method 2: Upload Widget (For Non-Technical Users)

Cloudinary provides an upload widget you can embed on a page for easy uploads.

### Method 3: API Upload (Programmatic)

```js
// upload-images.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'your-cloud',
  api_key: 'your-api-key',
  api_secret: 'your-api-secret'
});

// Upload single image
cloudinary.uploader.upload('local-image.jpg', {
  public_id: 'hero/home-hero',
  folder: 'hero'
});
```

### Method 4: Remote Fetch (No Upload Needed)

Cloudinary can fetch images from any URL:

```
https://res.cloudinary.com/your-cloud/image/fetch/https://example.com/image.jpg
```

---

## 🖼️ Using Images in Content

### In MDX Files

```mdx
---
title: "Website Design Services"
description: "Custom website design"
image: "https://res.cloudinary.com/your-cloud/image/upload/v1/services/website-design.jpg"
---

# Website Design

![Service Image](https://res.cloudinary.com/your-cloud/image/upload/v1/services/website-design.jpg)
```

### In Astro Components

```astro
---
import { CldImage } from 'astro-cloudinary';
---

<CldImage 
  src="services/website-design"
  width="800"
  height="600"
  alt="Website Design"
/>
```

### In config.yaml

```yaml
metadata:
  openGraph:
    images:
      - url: 'https://res.cloudinary.com/your-cloud/image/upload/v1/og/default-og.jpg'
        width: 1200
        height: 628
```

---

## 🤖 AI Workflow

### How AI Manages Images

**Step 1: Upload Image**
- Upload image to Cloudinary dashboard
- Get URL: `https://res.cloudinary.com/demo/image/upload/v1/hero/new-hero.jpg`

**Step 2: AI Updates Content**

AI edits MDX file:
```mdx
---
title: "Home"
heroImage: "https://res.cloudinary.com/demo/image/upload/v1/hero/new-hero.jpg"
---
```

**Step 3: Done!**
- No build needed
- Image appears instantly
- Automatically optimized

### AI Instructions

**To change an image:**
1. Upload new image to Cloudinary
2. Copy the URL
3. Replace the URL in the MDX frontmatter or config.yaml
4. Commit changes

**Example:**
```diff
---
title: "Website Design"
- image: "https://res.cloudinary.com/demo/image/upload/v1/old-image.jpg"
+ image: "https://res.cloudinary.com/demo/image/upload/v1/new-image.jpg"
---
```

---

## 🎨 Advanced Features

### Image Transformations

Cloudinary URLs support transformations:

**Resize:**
```
https://res.cloudinary.com/demo/image/upload/w_800,h_600/v1/hero.jpg
```

**Convert to WebP:**
```
https://res.cloudinary.com/demo/image/upload/f_webp/v1/hero.jpg
```

**Crop & Resize:**
```
https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/v1/hero.jpg
```

**Quality:**
```
https://res.cloudinary.com/demo/image/upload/q_auto/v1/hero.jpg
```

**Multiple transformations:**
```
https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill,f_webp,q_auto/v1/hero.jpg
```

### Responsive Images

```astro
<CldImage 
  src="hero/home-hero"
  width="1200"
  height="800"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Hero"
/>
```

Automatically generates:
- Multiple sizes (400w, 800w, 1200w, etc.)
- WebP/AVIF formats
- Lazy loading
- Responsive srcset

### AI-Powered Features

**Auto-crop to faces:**
```
https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill,g_face/v1/team/john.jpg
```

**Remove background:**
```
https://res.cloudinary.com/demo/image/upload/e_background_removal/v1/product.jpg
```

**Auto-enhance:**
```
https://res.cloudinary.com/demo/image/upload/e_improve/v1/photo.jpg
```

---

## 📊 URL Structure Explained

**Basic URL:**
```
https://res.cloudinary.com/{cloud_name}/image/upload/{public_id}.{format}
```

**With transformations:**
```
https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{public_id}.{format}
```

**Example breakdown:**
```
https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill,f_webp/v1/hero/home-hero.jpg
                          ^^^^              ^^^^^^^^^^^^^^^^^^^^^^^^      ^^^^^^^^^^^^^^^^^^
                       cloud name          transformations                  public_id
```

---

## 🔒 Security Best Practices

1. **Never commit API secrets** to Git
2. Use **environment variables** for API keys
3. Enable **unsigned uploads** for public forms
4. Use **signed URLs** for private images
5. Set up **upload presets** for consistent settings

---

## 📈 Monitoring Usage

**Check your usage:**
1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Click **Dashboard** → **Usage**
3. Monitor:
   - Storage used
   - Bandwidth used
   - Transformations
   - Credits remaining

**Free tier limits:**
- Storage: 25 GB
- Bandwidth: 25 GB/month
- Transformations: Unlimited

---

## 🆚 Cloudinary vs Local Images

| Feature | Cloudinary | Local Images |
|---------|-----------|--------------|
| **Setup** | Account needed | None |
| **Cost** | Free tier (25GB) | Free |
| **Build time** | Fast | Slower (optimization) |
| **AI management** | Easy (URLs) | Medium (file paths) |
| **Optimization** | Automatic | Manual/build-time |
| **CDN** | Global | Hosting CDN |
| **Transformations** | On-the-fly | Build-time only |
| **Storage** | Cloud | Git repo |

---

## 🚀 Quick Start Checklist

- [ ] Create Cloudinary account
- [ ] Note your Cloud Name
- [ ] Install `astro-cloudinary`
- [ ] Update `astro.config.mjs`
- [ ] Add Cloud Name to `config.yaml`
- [ ] Create folder structure in Cloudinary
- [ ] Upload initial images
- [ ] Update MDX files with Cloudinary URLs
- [ ] Test image loading
- [ ] Document URLs for AI

---

## 📞 Support

**Cloudinary Resources:**
- [Documentation](https://cloudinary.com/documentation)
- [Astro Integration](https://astro-cloudinary.dev/)
- [Community Forum](https://community.cloudinary.com/)
- [Support](https://support.cloudinary.com/)

**Common Issues:**
- **Images not loading?** Check Cloud Name is correct
- **Slow loading?** Enable auto-format and auto-quality
- **Wrong size?** Add width/height transformations
- **Quota exceeded?** Check dashboard usage

---

## 💡 Tips & Tricks

1. **Use folders** - Organize images by type/section
2. **Name consistently** - Use kebab-case: `hero-image.jpg`
3. **Optimize uploads** - Upload high-quality, let Cloudinary optimize
4. **Use transformations** - Don't upload multiple sizes
5. **Enable auto-format** - Automatically serve WebP/AVIF
6. **Set up presets** - Consistent upload settings
7. **Monitor usage** - Check dashboard monthly
8. **Use signed URLs** - For private/sensitive images

---

## 🎯 Next Steps

1. **Set up account** - Create Cloudinary account
2. **Upload images** - Add your initial images
3. **Update content** - Replace local image paths with Cloudinary URLs
4. **Test** - Verify images load correctly
5. **Document** - Keep a list of image URLs for AI reference

---

**Ready to use Cloudinary?** Follow the setup instructions above and start uploading!

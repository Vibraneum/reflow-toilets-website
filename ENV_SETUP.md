# ReFlow Toilets - Environment Variables

## Required Environment Variables

### Google Analytics
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# or
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Google Search Console Verification
Update in `app/layout.tsx`:
```typescript
verification: {
  google: 'YOUR_VERIFICATION_CODE_HERE',
}
```

## Setup Instructions

1. **Google Analytics Setup:**
   - Go to https://analytics.google.com
   - Create a new property or use existing
   - Copy your Measurement ID (format: G-XXXXXXXXXX)
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

2. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your property
   - Get verification code
   - Update in `app/layout.tsx` metadata

3. **Service Worker:**
   - Already configured in `public/sw.js`
   - Automatically registered on page load
   - No additional setup needed

4. **PWA Install Prompt:**
   - Automatically shows on supported browsers
   - No configuration needed

## Testing

- **Analytics:** Check browser console for "SW registered" message
- **PWA:** Open DevTools > Application > Service Workers
- **Install Prompt:** Visit site on mobile or desktop (Chrome/Edge)







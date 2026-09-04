# 🎁 Interactive Birthday Gift Website

A beautiful, romantic, and interactive web-based birthday gift experience. Perfect for sending to your loved one through a shareable link!

## ✨ Features

- 🎂 **Interactive Cake & Candle** - Click/tap to blow out the candle and trigger animations
- 🎉 **Confetti Animation** - Celebratory particles when the candle is blown
- 🎵 **Background Music** - Romantic music plays after blowing the candle
- 💌 **Typed Letter Section** - Romantic letter with character-by-character typing animation
- 📸 **Photo Background** - Your memories displayed subtly in the background
- 🎥 **Video Embed** - Play your edited video gift
- 🎤 **Voice Message** - Record and share a personalized voice message
- 💕 **Floating Hearts Animation** - Beautiful floating heart effects
- 📱 **Fully Responsive** - Works perfectly on smartphones, tablets, and desktops
- 🎨 **Romantic Aesthetic** - Mature, elegant dark theme with pink/purple accents

## 🚀 Quick Start

### Option 1: Deploy on GitHub Pages (Recommended - FREE)

1. Your repository is already set up at: `https://github.com/aayush8477-coder/birthday-gift`

2. Go to **Settings** → **Pages**

3. Select **Deploy from a branch** and choose `main` branch

4. Your site will be live at: `https://aayush8477-coder.github.io/birthday-gift/`

5. Share this link with your girlfriend! 🎉

### Option 2: Deploy on Vercel (FREE)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Connect your GitHub repository
4. Click "Deploy"
5. Your site will be live in seconds!

### Option 3: Deploy on Netlify (FREE)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Click "Deploy"
5. Done! 🚀

## 🎨 Customization Guide

### 1. Change the Letter Text
Open `script.js` and find the `letterContent` variable:

```javascript
const letterContent = `Your custom letter text here...`;
```

Replace with your romantic message!

### 2. Add Your Video
- Replace `your-video.mp4` in `index.html` with your video file path
- Or upload your video and get the URL, then update this line:
  ```html
  <source src="your-video.mp4" type="video/mp4">
  ```

### 3. Add Voice Message
- Record your voice message as an MP3 file
- Upload it to the repository or use a hosting service
- Update this line in `index.html`:
  ```html
  <audio id="voice-note" src="your-voice-note.mp3"></audio>
  ```

### 4. Add Your Photos
Replace the placeholder photo URLs in `index.html`:

```html
<div class="image-bg" style="background-image: url('YOUR-PHOTO-URL-HERE')"></div>
```

**To get photo URLs:**
- Upload photos to GitHub (drag & drop in the repo)
- Right-click → Copy image address
- Paste the URL where indicated

### 5. Change Background Music
Update the audio source in `index.html`:

```html
<audio id="background-music" src="your-music-url.mp3" loop></audio>
```

**Free Romantic Music Sources:**
- [Bensound](https://www.bensound.com) - Free royalty-free music
- [Epidemic Sound](https://www.epidemicsound.com) - Free tier available
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Free music

### 6. Customize Colors
Edit `styles.css` and look for color values like:
- `#ff6ec7` - Main pink color
- `#d946a6` - Secondary pink
- `#1a1a2e`, `#16213e`, `#0f3460` - Dark background colors

Change these to your preferred colors!

## 📱 How to Use on Mobile

1. Open the shared link on your smartphone
2. You'll see an interactive cake with a candle
3. **Tap or click on the cake** to blow the candle
4. Watch the confetti animation and listen to the music
5. Tap "Next Gift 💝" to read the letter
6. Continue through the video and voice message
7. Enjoy the final romantic message with floating hearts! 💕

## 🎬 How to Add Media Files

### Method 1: Upload to GitHub (Easy)

1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop your video/audio/images
4. Commit changes
5. Copy the file URL and paste it in the HTML

### Method 2: Use External Hosting (Recommended)

For faster loading, use:
- **Videos:** YouTube, Vimeo, or Drive (embed link)
- **Audio:** SoundCloud, Dropbox, or Google Drive
- **Photos:** Imgur, Cloudinary (free tier), or Google Drive

## 🛠️ Technical Details

- **HTML5** for structure
- **CSS3** for animations and styling
- **Vanilla JavaScript** for interactivity
- No external dependencies required
- Fully responsive and mobile-optimized

## 📝 File Structure

```
birthday-gift/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🎯 Steps to Personalize

1. **Edit the Letter** - Open `script.js`, update `letterContent`
2. **Add Your Video** - Upload video, update HTML
3. **Add Voice Message** - Record voice, upload, update HTML
4. **Add Photos** - Upload images, get URLs, update HTML
5. **Change Music** - Find royalty-free song, update audio source
6. **Customize Colors** - Edit `styles.css` color values
7. **Deploy** - Use GitHub Pages, Vercel, or Netlify
8. **Share the Link** - Send to your girlfriend! 🎁

## 🎵 Recommended Royalty-Free Romantic Songs

- "Ukulele" by Bensound
- "Sunny Day" by Bensound
- "Romantic Comedy" by Bensound
- Search YouTube Audio Library for "romantic" category

## 💡 Tips for the Best Experience

- Test on your phone before sending
- Use high-quality video (not too large)
- Keep the letter concise but heartfelt
- Use a clear audio recording for voice message
- Send during a romantic moment! 💕
- Make sure she has good internet to load everything

## 🐛 Troubleshooting

### Video not playing?
- Check the file format (MP4 recommended)
- Ensure the URL is correct
- Test video on a different browser

### Audio not playing?
- Check file format (MP3 recommended)
- Ensure file is hosted correctly
- Some browsers require user interaction first

### Photos not showing?
- Verify the image URLs are correct
- Check that images are publicly accessible
- Try different image hosting services

### Mobile display issues?
- Refresh the page
- Check your internet connection
- Try in a different mobile browser

## 📞 Support

If something doesn't work:
1. Check that all file URLs are correct
2. Test in a different browser
3. Clear browser cache and refresh
4. Check browser console for errors (F12 → Console)

## 🎁 Final Tips

- **Timing:** Send the link at a special moment
- **Surprise:** Don't tell her what to expect!
- **Presentation:** Write a heartfelt intro message
- **Follow-up:** Plan something special after she experiences it
- **Love:** Most importantly, let your genuine feelings shine through! 💕

---

**Made with ❤️ for your special someone**

Happy Birthday! 🎂🎉💝

---

### 🚀 Quick Deployment Checklist

- [ ] Customized the love letter
- [ ] Added your video file
- [ ] Recorded and added voice message
- [ ] Updated photo URLs
- [ ] Changed background music
- [ ] Tested on mobile
- [ ] Deployed to GitHub Pages/Vercel/Netlify
- [ ] Shared the link! 🎉

**You're all set! Enjoy the magic! ✨💕**

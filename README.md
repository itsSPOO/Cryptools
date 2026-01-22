# 🔐 CryptoTools

A modern, production-ready web application providing comprehensive encryption, hashing, and text conversion tools. Built with React, TypeScript, and TailwindCSS.

![CryptoTools](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6)

## ⚡ Features

### 🔧 11+ Tools Included

**Text Conversions:**
- Base64 Encode/Decode
- Binary Converter (Text ↔ Binary)
- URL Encode/Decode
- Hex ↔ ASCII Converter
- Leet Speak Converter

**Hash Generators:**
- MD5 Hash (128-bit)
- SHA-1 Hash (160-bit)
- SHA-256 Hash (256-bit)

**Password Ciphers:**
- Caesar Cipher (with adjustable shift)
- ROT13 / ROT47
- Vigenère Cipher (with keyword)
- Atbash Cipher

**Custom Tools:**
- Custom Cipher Generator (create and save your own mappings)

### 🎨 Modern UI/UX
- **Dark mode by default** with light mode toggle
- Responsive design (desktop + mobile)
- Smooth animations and transitions
- Monospace fonts (JetBrains Mono) for code/crypto output
- Full keyboard navigation and ARIA labels
- High contrast colors for accessibility

### 🔒 Privacy & Security
- **100% client-side processing** - no data sent to servers
- All operations run in your browser
- localStorage for saving presets locally
- Educational warning displayed prominently
- Input sanitization to prevent XSS

### 🚀 Developer Features
- Copy result buttons for all outputs
- JavaScript code snippet generation for each tool
- Save/load custom cipher presets
- Import/export cipher mappings as JSON
- Real-time output updates
- Comprehensive error handling

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd cryptotools

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Development

### Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Lint code
npm run lint
```

### Project Structure

```
cryptotools/
├── src/
│   ├── components/          # React components
│   │   ├── tools/          # Individual tool components
│   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   ├── ToolCard.tsx    # Reusable tool card wrapper
│   │   ├── Header.tsx      # App header with theme toggle
│   │   ├── WelcomeScreen.tsx
│   │   └── ConsentBanner.tsx
│   ├── utils/
│   │   └── cryptoUtils.ts  # Crypto/conversion algorithms
│   ├── store/
│   │   └── useStore.ts     # Zustand state management
│   ├── data/
│   │   └── tools.ts        # Tool definitions
│   ├── types/
│   │   └── index.ts        # TypeScript types
│   ├── tests/              # Jest + React Testing Library
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🧪 Testing

The project includes comprehensive unit tests for core functionality:

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- cryptoUtils.test.ts
```

**Test Coverage:**
- ✅ Base64 encoding/decoding
- ✅ Caesar cipher encryption/decryption
- ✅ MD5, SHA-1, SHA-256 hashing
- ✅ Binary, URL, Hex conversions
- ✅ ROT13, Atbash ciphers
- ✅ Component rendering and interactions

## 🎨 Customization

### Theme Configuration

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#3b82f6',  // Change primary color
        dark: '#2563eb',
        light: '#60a5fa',
      },
    },
  },
}
```

### Adding New Tools

1. Create tool component in `src/components/tools/`
2. Add tool definition to `src/data/tools.ts`
3. Import and register in `src/App.tsx`
4. Implement algorithm in `src/utils/cryptoUtils.ts`

Example:

```typescript
// src/data/tools.ts
{
  id: 'newtool',
  name: 'New Tool',
  category: 'conversions',
  description: 'Description here',
  icon: 'IconName',
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

4. **Or use Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

3. **Or use Netlify Dashboard:**
   - Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push to main branch

2. **Manual deployment (optional):**
```bash
# Install gh-pages
npm install -D gh-pages

# Deploy
npm run deploy
```

3. **Your site will be available at:**
   `https://itsspoo.github.io/Cryptools`

### Environment Variables

For analytics or other integrations, create `.env`:

```env
VITE_GA_TRACKING_ID=your-ga-id
VITE_API_URL=your-api-url
```

Access in code:
```typescript
const gaId = import.meta.env.VITE_GA_TRACKING_ID;
```

## 📊 SEO & Analytics

The app includes comprehensive SEO optimization:
- ✅ Meta tags with rich keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (Schema.org)
- ✅ Semantic HTML structure
- ✅ Accessible ARIA labels
- ✅ Complete sitemap.xml with all tools
- ✅ Optimized robots.txt
- ✅ Google Analytics integration
- ✅ Google AdSense ready

**Setup Instructions:** See [SEO_SETUP.md](./SEO_SETUP.md) for detailed configuration steps.

## 🔐 Security Considerations

⚠️ **Important:** This application is designed for **educational and demonstration purposes only**.

- **Do NOT use for production security:** The implementations are simplified for learning
- **Do NOT store sensitive data:** All processing is client-side but not hardened
- **MD5 and SHA-1 are deprecated:** Use SHA-256 for any real security needs
- **Custom ciphers are not secure:** Classical ciphers are easily broken
- **Input sanitization:** All user inputs are sanitized to prevent XSS

For production security needs, use established libraries like:
- `crypto-js` for encryption
- `bcrypt` for password hashing
- `jsonwebtoken` for JWT tokens

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow existing component patterns
- Add tests for new features
- Update documentation

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TailwindCSS](https://tailwindcss.com/)

## 📧 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: spoo@cryptools.com

## 🗺️ Roadmap

Future enhancements:
- [ ] Additional hash algorithms (SHA-512, BLAKE2)
- [ ] More ciphers (Playfair, Rail Fence)
- [ ] File encryption/decryption
- [ ] QR code generation
- [ ] Password strength checker
- [ ] Bulk operations
- [ ] Export results as PDF
- [ ] PWA support for offline use

---

**Made with ❤️ for the crypto community**

⚠️ **Remember:** Do not use these tools for storing real passwords or illegal activities.

# PyLearn - Python Course Website

A beautiful, modern frontend website for learning Python programming from beginner to advanced level, built with Next.js and styled with a cute pastel color palette.

## Features

### Pages
1. **Homepage** - Hero section with course overview and feature highlights
2. **Beginner Course** - 12 comprehensive topics for Python beginners
3. **Intermediate Course** - 14 advanced topics including OOP, APIs, databases
4. **Advanced Course** - 15 expert-level topics including async, design patterns, performance

### Design Features
- Cute pastel color palette (pink, purple, blue, mint, peach, lavender, coral)
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Modern gradient effects
- Interactive navigation with mobile menu
- Card-based layouts for easy navigation

### Technologies
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Turbopack** - Fast build tool

## Project Structure

```
learnpythoncourse/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles with cute colors
│   └── courses/
│       ├── beginner/page.tsx       # Beginner course page
│       ├── intermediate/page.tsx   # Intermediate course page
│       └── advanced/page.tsx       # Advanced course page
├── components/
│   ├── Navbar.tsx                  # Navigation component
│   ├── CourseCard.tsx              # Course preview cards
│   └── TopicCard.tsx               # Individual topic cards
└── public/                         # Static assets
```

## Color Palette

The website uses a cute pastel color scheme:
- **Pink**: #FFB6C1 (cute-pink)
- **Purple**: #E0BBE4 (cute-purple)
- **Blue**: #A8D8EA (cute-blue)
- **Mint**: #B4E4CC (cute-mint)
- **Peach**: #FFDAB9 (cute-peach)
- **Lavender**: #D4C5F9 (cute-lavender)
- **Coral**: #FFB8A6 (cute-coral)
- **Yellow**: #FFF9A6 (cute-yellow)

## Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3019](http://localhost:3019) to view the website.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Course Content Overview

### Beginner Course (12 Topics)
- Getting Started, Variables, Operators
- Control Flow, Loops, Data Structures
- Functions, Modules, File Handling

### Intermediate Course (14 Topics)
- Object-Oriented Programming
- APIs, Databases, Testing
- Decorators, Generators, Web Scraping

### Advanced Course (15 Topics)
- Async Programming, Design Patterns
- Performance Optimization, Type Hints
- Security, Machine Learning, DevOps

## Customization

### Changing Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --cute-pink: #FFB6C1;
  --cute-purple: #E0BBE4;
  /* ... modify other colors */
}
```

### Adding New Topics
Edit the `topics` array in the respective course page file:
```typescript
const topics = [
  {
    number: 1,
    title: "Your Topic",
    icon: "🎯",
    description: "Topic description",
    points: ["Point 1", "Point 2"]
  }
];
```

## License
Free to use for educational purposes.

## Made with Love
Built with Next.js, TypeScript, and Tailwind CSS for aspiring Python developers everywhere!

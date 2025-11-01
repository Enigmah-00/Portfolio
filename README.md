# Mahdi Hasan Qurishi - Interactive Portfolio

A modern, interactive portfolio built with React.js and Framer Motion, featuring smooth animations and responsive design.

## Features

- 🎨 Modern UI with animated components
- ⚡ Smooth page transitions and hover effects
- 📱 Fully responsive design
- 🎬 Video background
- 🎯 Interactive skill bars
- 🌟 Framer Motion animations
- 🔗 Social media links integration

## Technologies Used

- React.js
- Framer Motion
- CSS3
- HTML5

## Installation

1. Navigate to the project directory:
```bash
cd react-portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Copy your images folder to `public/images/`

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deploying to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://Enigmah-00.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
react-portfolio/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js/css
│   │   ├── Hero.js/css
│   │   ├── Stats.js/css
│   │   ├── Projects.js/css
│   │   ├── Skills.js/css
│   │   ├── Activities.js/css
│   │   └── Footer.js/css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Contact

Mahdi Hasan Qurishi - [mahdiqureshi9@gmail.com](mailto:mahdiqureshi9@gmail.com)

Project Link: [https://github.com/Enigmah-00/Portfolio](https://github.com/Enigmah-00/Portfolio)

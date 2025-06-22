# Algorand Payments App

A simple React application for sending Algorand payments using MyAlgo wallet.

## Features

- Connect to MyAlgo wallet
- Send Algorand payments on testnet
- Modern UI with gradient design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### 3. GitHub Pages
```bash
npm run build
# Push to GitHub and enable GitHub Pages
```

### 4. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Configuration

- Update the `receiver` address in `src/AlgoPayment.jsx` with your wallet address
- The app currently uses Algorand testnet - change the API endpoint for mainnet

## Dependencies

- React 18
- Vite (build tool)
- Algorand SDK
- MyAlgo Connect 
# Phish or Legit?

Phish or Legit is an interactive web game designed to help users improve their cybersecurity awareness by identifying phishing attempts in emails, SMS, and websites. The game presents realistic scenarios and educates users on spotting red flags to stay safe online.

## Features

- **Multiple Game Modes:** Classic, Timed, and Challenge modes to test your skills.
- **Difficulty Levels:** Easy, Medium, Hard, and Mixed for all experience levels.
- **Visual Feedback:** Animated icons and clear indicators for phishing and legitimate items.
- **Leaderboard & Badges:** Track your progress and earn achievements.
- **Responsive Design:** Works on desktop and mobile devices.

## Project Structure

```
phish_or_legit/
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── components/        # React components (GameMenu, GameCard, ParticleBackground, etc.)
│   ├── data/              # Game data and items (gameItems.ts)
│   ├── styles/            # Global and component-specific styles
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for React
│   └── ...                # Other utilities and hooks
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── ...                    # Other config files (tsconfig.json, .gitignore, etc.)
```

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the development server:**
   ```
   npm start
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to play the game.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements

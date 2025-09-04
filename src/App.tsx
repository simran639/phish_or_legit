import React, { useState } from 'react';
import { useGame } from './hooks/useGame';
import { ParticleBackground } from './components/ParticleBackground';
import { GameMenu } from './components/GameMenu';
import { GamePlay } from './components/GamePlay';
import { GameResults } from './components/GameResults';
import { Leaderboard } from './components/Leaderboard';
import { BadgeCollection } from './components/BadgeCollection';

type Screen = 'menu' | 'game' | 'results' | 'leaderboard' | 'badges';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const { gameState, startGame, makeChoice, nextQuestion, endGame } = useGame();

  const handleStartGame = (mode: 'classic' | 'timed' | 'challenge', difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => {
    startGame(mode, difficulty);
    setCurrentScreen('game');
  };

  const handleGameEnd = () => {
    endGame();
    setCurrentScreen('results');
  };

  const handlePlayAgain = () => {
    const { gameMode, difficulty } = gameState;
    startGame(gameMode, difficulty);
    setCurrentScreen('game');
  };

  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return (
          <GameMenu
            onStartGame={handleStartGame}
            onShowLeaderboard={() => setCurrentScreen('leaderboard')}
            onShowBadges={() => setCurrentScreen('badges')}
          />
        );
      case 'game':
        return (
          <GamePlay
            gameState={gameState}
            onChoice={makeChoice}
            onNext={nextQuestion}
            onEndGame={handleGameEnd}
          />
        );
      case 'results':
        return (
          <GameResults
            gameState={gameState}
            onPlayAgain={handlePlayAgain}
            onBackToMenu={handleBackToMenu}
          />
        );
      case 'leaderboard':
        return <Leaderboard onBack={handleBackToMenu} />;
      case 'badges':
        return <BadgeCollection onBack={handleBackToMenu} />;
      default:
        return null;
    }
  };

  // Auto-end game when time runs out or no more questions
  React.useEffect(() => {
    if (gameState.isGameActive && 
        ((gameState.gameMode === 'timed' && gameState.timeRemaining === 0) ||
         (!gameState.currentItem && gameState.totalAnswered > 0))) {
      handleGameEnd();
    }
  }, [gameState.timeRemaining, gameState.currentItem, gameState.isGameActive, gameState.gameMode, gameState.totalAnswered]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <div className="container mx-auto py-8">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}

export default App;
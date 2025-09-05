import { useState, useEffect } from 'react';
import { GameState, GameItem } from '../types/game';
import { gameItems } from '../data/gameItems';

const initialGameState: GameState = {
  currentItem: null,
  score: 0,
  streak: 0,
  totalAnswered: 0,
  correctAnswers: 0,
  timeRemaining: 0,
  gameMode: 'classic',
  difficulty: 'mixed',
  isGameActive: false,
  showFeedback: false,
  lastAnswer: null
};

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [usedItems, setUsedItems] = useState<string[]>([]);

  const getFilteredItems = () => {
    if (gameState.difficulty === 'mixed') {
      return gameItems;
    }
    return gameItems.filter(item => item.difficulty === gameState.difficulty);
  };

  const getRandomItem = (): GameItem | null => {
    const availableItems = getFilteredItems().filter(item => !usedItems.includes(item.id));
    if (availableItems.length === 0) {
      setUsedItems([]);
      return getFilteredItems()[Math.floor(Math.random() * getFilteredItems().length)];
    }
    return availableItems[Math.floor(Math.random() * availableItems.length)];
  };

  const startGame = (mode: 'classic' | 'timed' | 'challenge', difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => {
    const newItem = getRandomItem();
    setGameState({
      ...initialGameState,
      gameMode: mode,
      difficulty,
      isGameActive: true,
      currentItem: newItem,
      timeRemaining: mode === 'timed' ? 60 : mode === 'challenge' ? 120 : 0
    });
    setUsedItems([]);
  };

  const makeChoice = (isPhishing: boolean) => {
    if (!gameState.currentItem || !gameState.isGameActive || gameState.showFeedback) return;

    const correct = isPhishing;
    const newScore = gameState.score + (correct ? 10 : 0) + (gameState.streak >= 5 ? 5 : 0);
    const newStreak = correct ? gameState.streak + 1 : 0;

    setGameState(prev => ({
      ...prev,
      score: newScore,
      streak: newStreak,
      totalAnswered: prev.totalAnswered + 1,
      correctAnswers: prev.correctAnswers + (correct ? 1 : 0),
      showFeedback: true,
      lastAnswer: {
        correct,
        userChoice: isPhishing,
        explanation: prev.currentItem!.explanation,
        indicators: prev.currentItem!.indicators
      }
    }));

    setUsedItems(prev => [...prev, gameState.currentItem!.id]);
  };

  const nextQuestion = () => {
    const newItem = getRandomItem();
    setGameState(prev => ({
      ...prev,
      currentItem: newItem,
      showFeedback: false,
      lastAnswer: null
    }));
  };

  const endGame = () => {
    setGameState(prev => ({
      ...prev,
      isGameActive: false,
      currentItem: null
    }));
  };

  // Timer for timed mode
  useEffect(() => {
    if (gameState.gameMode === 'timed' && gameState.isGameActive && gameState.timeRemaining > 0) {
      const timer = setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        }));
      }, 1000);

      return () => clearTimeout(timer);
    } else if (gameState.gameMode === 'timed' && gameState.timeRemaining === 0 && gameState.isGameActive) {
      endGame();
    }
  }, [gameState.timeRemaining, gameState.isGameActive, gameState.gameMode]);

  return {
    gameState,
    startGame,
    makeChoice,
    nextQuestion,
    endGame
  };
}
import React from 'react';
import { Trophy, Target, Clock, Award, Home, RotateCcw } from 'lucide-react';
import { GameState } from '../types/game';

interface GameResultsProps {
  gameState: GameState;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

export function GameResults({ gameState, onPlayAgain, onBackToMenu }: GameResultsProps) {
  const accuracy = gameState.totalAnswered > 0 
    ? Math.round((gameState.correctAnswers / gameState.totalAnswered) * 100) 
    : 0;

  const getPerformanceMessage = () => {
    if (accuracy >= 90) return { text: "Outstanding! You're a cybersecurity expert!", color: "text-green-400" };
    if (accuracy >= 75) return { text: "Great job! Your phishing detection skills are strong.", color: "text-blue-400" };
    if (accuracy >= 60) return { text: "Good work! Keep practicing to improve your accuracy.", color: "text-yellow-400" };
    return { text: "Keep learning! Review the explanations to get better.", color: "text-orange-400" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Game Complete!</h1>
        <p className={`text-xl font-semibold ${performance.color}`}>
          {performance.text}
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{gameState.score}</div>
            <div className="text-white/70">Final Score</div>
          </div>
          
          <div className="text-center">
            <Target className="w-12 h-12 text-green-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{accuracy}%</div>
            <div className="text-white/70">Accuracy</div>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{gameState.streak}</div>
            <div className="text-white/70">Best Streak</div>
          </div>
          
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{gameState.totalAnswered}</div>
            <div className="text-white/70">Questions</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
        <h3 className="text-white font-semibold mb-3">Performance Summary</h3>
        <div className="space-y-2 text-sm text-white/90">
          <div className="flex justify-between">
            <span>Correct Answers:</span>
            <span>{gameState.correctAnswers} / {gameState.totalAnswered}</span>
          </div>
          <div className="flex justify-between">
            <span>Game Mode:</span>
            <span className="capitalize">{gameState.gameMode}</span>
          </div>
          <div className="flex justify-between">
            <span>Difficulty:</span>
            <span className="capitalize">{gameState.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onPlayAgain}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Play Again
        </button>
        
        <button
          onClick={onBackToMenu}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          Main Menu
        </button>
      </div>
    </div>
  );
}
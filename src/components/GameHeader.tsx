import React from 'react';
import { Timer, Shield, Trophy, Zap } from 'lucide-react';
import { GameState } from '../types/game';

interface GameHeaderProps {
  gameState: GameState;
}

export function GameHeader({ gameState }: GameHeaderProps) {
  const accuracy = gameState.totalAnswered > 0 
    ? Math.round((gameState.correctAnswers / gameState.totalAnswered) * 100) 
    : 0;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">{gameState.score}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-white font-semibold">{gameState.streak}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">{accuracy}%</span>
          </div>
        </div>
        
        {gameState.gameMode === 'timed' && (
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-red-400" />
            <span className="text-white font-bold text-lg">
              {Math.floor(gameState.timeRemaining / 60)}:{(gameState.timeRemaining % 60).toString().padStart(2, '0')}
            </span>
          </div>
        )}
        
        <div className="flex items-center gap-2 text-sm text-white/80">
          <span className="capitalize">{gameState.gameMode} Mode</span>
          <span>•</span>
          <span className="capitalize">{gameState.difficulty} Difficulty</span>
        </div>
      </div>
    </div>
  );
}
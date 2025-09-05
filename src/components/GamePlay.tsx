import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { GameHeader } from './GameHeader';
import { GameCard } from './GameCard';
import { GameState } from '../types/game';

interface GamePlayProps {
  gameState: GameState;
  onChoice: (isPhishing: boolean) => void;
  onNext: () => void;
  onEndGame: () => void;
}

export function GamePlay({ gameState, onChoice, onNext, onEndGame }: GamePlayProps) {
  if (!gameState.currentItem) {
    return (
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Game Complete!</h2>
        <button
          onClick={onEndGame}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={onEndGame}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-2 px-4 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit
        </button>
        
        <button
          onClick={onEndGame}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-2 rounded-xl hover:bg-white/20 transition-all duration-200"
        >
          <Home className="w-5 h-5" />
        </button>
      </div>

      <GameHeader gameState={gameState} />
      
      <GameCard
        item={gameState.currentItem}
        onChoice={onChoice}
        showFeedback={gameState.showFeedback}
        lastAnswer={gameState.lastAnswer}
      />

      {gameState.showFeedback && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Next Question
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
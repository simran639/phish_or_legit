import React from 'react';
import { Play, Timer, Sword, Trophy, Settings, Info, AlertTriangle, CheckCircle } from 'lucide-react';

interface GameMenuProps {
  onStartGame: (mode: 'classic' | 'timed' | 'challenge', difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => void;
  onShowLeaderboard: () => void;
  onShowBadges: () => void;
}

export function GameMenu({ onStartGame, onShowLeaderboard, onShowBadges }: GameMenuProps) {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<'easy' | 'medium' | 'hard' | 'mixed'>('mixed');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white mb-2">
          Phish or Legit?
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Test your cybersecurity skills by identifying phishing attempts in emails, SMS, and websites.
          Learn to spot the red flags that keep you safe online.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Select Difficulty</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { key: 'easy', label: 'Easy', desc: 'Nigerian princes & obvious scams' },
            { key: 'medium', label: 'Medium', desc: 'Fake logins & billing scams' },
            { key: 'hard', label: 'Hard', desc: 'CEO fraud & advanced attacks' },
            { key: 'mixed', label: 'Mixed', desc: 'All levels' }
          ].map(({ key, label, desc }) => (
            <button
              key={key}
              onClick={() => setSelectedDifficulty(key as any)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${selectedDifficulty === key
                ? 'bg-blue-500 border-blue-400 text-white'
                : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                }`}
            >
              <div className="font-bold">{label}</div>
              <div className="text-sm opacity-80">{desc}</div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onStartGame('classic', selectedDifficulty)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Play className="w-6 h-6 mx-auto mb-2" />
            <div className="text-lg">Classic Mode</div>
            <div className="text-sm opacity-90">Practice at your own pace</div>
          </button>

          <button
            onClick={() => onStartGame('timed', selectedDifficulty)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Timer className="w-6 h-6 mx-auto mb-2" />
            <div className="text-lg">Timed Mode</div>
            <div className="text-sm opacity-90">60 seconds to score big</div>
          </button>

          <button
            onClick={() => onStartGame('challenge', selectedDifficulty)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Sword className="w-6 h-6 mx-auto mb-2" />
            <div className="text-lg">Challenge Mode</div>
            <div className="text-sm opacity-90">Boss fight scenario</div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={onShowLeaderboard}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-3"
        >
          <Trophy className="w-5 h-5" />
          Leaderboard
        </button>

        <button
          onClick={onShowBadges}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-3"
        >
          <Settings className="w-5 h-5" />
          Achievements
        </button>
      </div>

      <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-white/90">
            <h3 className="font-semibold mb-2">How to Play</h3>
            <ul className="space-y-1 text-sm">
                <li>• 📧 Analyze real-world emails, SMS messages, and websites</li>
                <li>• 🔍 Look for suspicious domains, urgency tactics, and social engineering</li>
                <li>• 🎯 Choose "Phishing" or "Legitimate" based on your analysis</li>
                <li>• 📚 Learn from detailed explanations of actual attack techniques</li>
                <li>• 🏆 Unlock achievements as you master cybersecurity skills</li>
                <li>• Learn from detailed feedback to improve your skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
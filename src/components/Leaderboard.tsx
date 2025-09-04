import React from 'react';
import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';
import { LeaderboardEntry } from '../types/game';

interface LeaderboardProps {
  onBack: () => void;
}

export function Leaderboard({ onBack }: LeaderboardProps) {
  // Mock leaderboard data - in a real app this would come from a backend
  const leaderboardData: LeaderboardEntry[] = [
    { id: '1', name: 'CyberGuardian', score: 850, accuracy: 95, mode: 'Timed', difficulty: 'Hard', date: '2025-01-01' },
    { id: '2', name: 'PhishSlayer', score: 820, accuracy: 92, mode: 'Challenge', difficulty: 'Mixed', date: '2024-12-31' },
    { id: '3', name: 'SecurityPro', score: 780, accuracy: 89, mode: 'Classic', difficulty: 'Hard', date: '2024-12-30' },
    { id: '4', name: 'AlertExpert', score: 750, accuracy: 94, mode: 'Timed', difficulty: 'Medium', date: '2024-12-29' },
    { id: '5', name: 'SafeBrowser', score: 720, accuracy: 87, mode: 'Classic', difficulty: 'Mixed', date: '2024-12-28' }
  ];

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1: return <Medal className="w-6 h-6 text-gray-400" />;
      case 2: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">{index + 1}</span>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-2 px-4 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="text-4xl font-bold text-white">Leaderboard</h1>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Top Players</h2>
          <p className="text-white/70">See how you stack up against other phishing detectives</p>
        </div>
        
        <div className="divide-y divide-white/10">
          {leaderboardData.map((entry, index) => (
            <div key={entry.id} className="p-6 hover:bg-white/5 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {getRankIcon(index)}
                  <div>
                    <div className="text-white font-semibold text-lg">{entry.name}</div>
                    <div className="text-white/60 text-sm">
                      {entry.mode} • {entry.difficulty} • {entry.date}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-white font-bold text-xl">{entry.score}</div>
                  <div className="text-white/70 text-sm">{entry.accuracy}% accuracy</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/60 text-sm">
          Play more games to improve your ranking and unlock achievements!
        </p>
      </div>
    </div>
  );
}
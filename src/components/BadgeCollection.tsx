import React from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { badges } from '../data/badges';

interface BadgeCollectionProps {
  onBack: () => void;
}

export function BadgeCollection({ onBack }: BadgeCollectionProps) {
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
        <h1 className="text-4xl font-bold text-white">Achievements</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge) => {
          const IconComponent = (LucideIcons as any)[badge.icon] || LucideIcons.Award;
          
          return (
            <div
              key={badge.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                badge.unlocked
                  ? 'border-yellow-400/50 shadow-lg shadow-yellow-400/20'
                  : 'border-white/20 opacity-60'
              }`}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                  badge.unlocked ? 'bg-yellow-400/20' : 'bg-gray-400/20'
                }`}>
                  {badge.unlocked ? (
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  ) : (
                    <Lock className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                
                <div>
                  <h3 className={`font-bold text-lg ${badge.unlocked ? 'text-white' : 'text-gray-400'}`}>
                    {badge.name}
                  </h3>
                  <p className={`text-sm ${badge.unlocked ? 'text-white/80' : 'text-gray-500'}`}>
                    {badge.description}
                  </p>
                  <div className={`text-xs mt-2 px-2 py-1 rounded-full inline-block ${
                    badge.unlocked ? 'bg-yellow-400/20 text-yellow-400' : 'bg-gray-500/20 text-gray-500'
                  }`}>
                    {badge.requirement}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
          <p className="text-white/80">
            <span className="font-bold">{badges.filter(b => b.unlocked).length}</span> of {badges.length} badges unlocked
          </p>
          <div className="w-full bg-white/20 rounded-full h-2 mt-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(badges.filter(b => b.unlocked).length / badges.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Mail, MessageSquare, Globe, AlertTriangle, CheckCircle } from 'lucide-react';
import { GameItem } from '../types/game';

interface GameCardProps {
  item: GameItem;
  onChoice: (isPhishing: boolean) => void;
  showFeedback: boolean;
  lastAnswer: any;
}

export function GameCard({ item, onChoice, showFeedback, lastAnswer }: GameCardProps) {
  const getIcon = () => {
    switch (item.type) {
      case 'email': return <Mail className="w-6 h-6" />;
      case 'sms': return <MessageSquare className="w-6 h-6" />;
      case 'website': return <Globe className="w-6 h-6" />;
    }
  };

  const getDifficultyColor = () => {
    switch (item.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
    }
  };

  const handleScreenshotChoice = (side: 'left' | 'right') => {
    const isPhishingChoice = item.correctChoice === side;
    onChoice(isPhishingChoice);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getDifficultyColor()}`}>
              {item.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 mb-4 text-center font-medium">{item.content}</p>
      </div>

      {!showFeedback ? (
        <div className="flex gap-4">
          <button
            onClick={() => onChoice(true)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Phishing
            </span>
          </button>
          <button
            onClick={() => onChoice(false)}
            className="flex-1 bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Legitimate
            </span>
          </button>
        </div>
      ) : (
        <div className={`p-4 rounded-xl border-2 ${lastAnswer?.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center gap-2 mb-3">
            {lastAnswer?.correct ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800">Correct!</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="font-bold text-red-800">Incorrect</span>
              </>
            )}
            <span className="text-gray-600 text-sm ml-2">
              The phishing attempt was in Option {item.correctChoice === 'left' ? 'A' : 'B'}
            </span>
          </div>

          <p className="text-gray-700 mb-3">{lastAnswer?.explanation}</p>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Key Indicators to Watch For:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {lastAnswer?.indicators?.map((indicator: string, index: number) => (
                <li key={index}>{indicator}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-700">
              💡 <strong>Learning Tip:</strong> {item.isPhishing
                ? 'Always verify suspicious communications by contacting the organization directly through official channels.'
                : 'Legitimate communications typically have consistent branding, official domains, and don\'t create false urgency.'}
            </p>
          </div>

          {/* Show the comparison with indicators */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-3 rounded-lg border-2 ${item.correctChoice === 'left' ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
              <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                {item.correctChoice === 'left' ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-red-800">Phishing (Option A)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-green-800">Legitimate (Option A)</span>
                  </>
                )}
              </h5>
              <img src={item.phishingScreenshot} alt="Option A Analysis" className="w-full h-24 object-cover rounded" />
            </div>

            <div className={`p-3 rounded-lg border-2 ${item.correctChoice === 'right' ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
              <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                {item.correctChoice === 'right' ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-red-800">Phishing (Option B)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-green-800">Legitimate (Option B)</span>
                  </>
                )}
              </h5>
              <img src={item.legitimateScreenshot} alt="Option B Analysis" className="w-full h-24 object-cover rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
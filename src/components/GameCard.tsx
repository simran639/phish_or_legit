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

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
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

      <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
          {item.content}
        </pre>
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
          </div>

          <p className="text-gray-700 mb-3">{lastAnswer?.explanation}</p>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Key Indicators:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {lastAnswer?.indicators?.map((indicator: string, index: number) => (
                <li key={index}>{indicator}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
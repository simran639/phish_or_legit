export interface GameItem {
  id: string;
  type: 'email' | 'sms' | 'website';
  title: string;
  content: string;
  isPhishing: boolean;
  explanation: string;
  indicators: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  screenshot?: string;
}

export interface GameState {
  currentItem: GameItem | null;
  score: number;
  streak: number;
  totalAnswered: number;
  correctAnswers: number;
  timeRemaining: number;
  gameMode: 'classic' | 'timed' | 'challenge';
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
  isGameActive: boolean;
  showFeedback: boolean;
  lastAnswer: {
    correct: boolean;
    userChoice: boolean;
    explanation: string;
    indicators: string[];
  } | null;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  requirement: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  accuracy: number;
  mode: string;
  difficulty: string;
  date: string;
}
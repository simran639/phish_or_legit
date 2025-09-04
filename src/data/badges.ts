import { Badge } from '../types/game';

export const badges: Badge[] = [
  {
    id: 'eagle-eye',
    name: 'Eagle Eye',
    description: 'Achieve 100% accuracy in a game session',
    icon: 'Eye',
    unlocked: false,
    requirement: '100% accuracy'
  },
  {
    id: 'fast-responder',
    name: 'Fast Responder',
    description: 'Make decisions in under 5 seconds consistently',
    icon: 'Zap',
    unlocked: false,
    requirement: 'Under 5s average'
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Get 10 correct answers in a row',
    icon: 'Target',
    unlocked: false,
    requirement: '10 correct streak'
  },
  {
    id: 'phish-hunter',
    name: 'Phish Hunter',
    description: 'Correctly identify 50 phishing attempts',
    icon: 'Shield',
    unlocked: false,
    requirement: '50 phishing detected'
  },
  {
    id: 'security-expert',
    name: 'Security Expert',
    description: 'Complete all difficulty levels',
    icon: 'Award',
    unlocked: false,
    requirement: 'Complete all levels'
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Score 15+ points in Timed Mode',
    icon: 'Timer',
    unlocked: false,
    requirement: '15+ in Timed Mode'
  }
];
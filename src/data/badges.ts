import { Badge } from '../types/game';

export const badges: Badge[] = [
  {
    id: 'eagle-eye',
    name: 'Eagle Eye',
    description: 'Achieve 100% accuracy in a complete game session',
    icon: 'Eye',
    unlocked: false,
    requirement: 'Perfect accuracy (10+ questions)'
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
    description: 'Correctly identify 25 phishing attempts',
    icon: 'Shield',
    unlocked: false,
    requirement: '25 phishing detected'
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
  },
  {
    id: 'scam-buster',
    name: 'Scam Buster',
    description: 'Identify 5 Nigerian Prince scams correctly',
    icon: 'AlertTriangle',
    unlocked: false,
    requirement: '5 advance-fee scams'
  },
  {
    id: 'url-detective',
    name: 'URL Detective',
    description: 'Spot 10 suspicious URLs in phishing attempts',
    icon: 'Link',
    unlocked: false,
    requirement: '10 malicious URLs detected'
  },
  {
    id: 'social-engineer-stopper',
    name: 'Social Engineer Stopper',
    description: 'Resist 15 social engineering tactics',
    icon: 'Users',
    unlocked: false,
    requirement: '15 social engineering attempts'
  }
];
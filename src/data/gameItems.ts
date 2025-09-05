import { GameItem } from '../types/game';

export const gameItems: GameItem[] = [
  // Easy Level - Obvious Scams
  {
    id: 'easy-1',
    type: 'email',
    title: 'Nigerian Prince Inheritance',
    content: `Compare these two emails and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'This is a classic advance-fee scam (419 scam) with multiple obvious red flags.',
    indicators: [
      'Claims inheritance from unknown person',
      'Requests sensitive financial information',
      'Poor grammar and excessive capitalization',
      'Generic Gmail address for "royalty"',
      'Unrealistic monetary amounts',
      'Creates false urgency with "TIME IS RUNNING OUT"'
    ],
    difficulty: 'easy',
    phishingScreenshot: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'easy-2',
    type: 'sms',
    title: 'Fake Bank Security Alert',
    content: `Compare these two SMS messages and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'Banks never send urgent security links via SMS, and this uses classic fear tactics.',
    indicators: [
      'Creates panic with "LOCKED" and "CLOSED FOREVER"',
      'Suspicious domain (.tk is a free domain)',
      'Real banks use official short codes, not phone numbers',
      'Urgent 1-hour deadline pressure',
      'Generic sender name instead of official bank code'
    ],
    difficulty: 'easy',
    phishingScreenshot: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'easy-3',
    type: 'website',
    title: 'Fake Login vs Real Login Page',
    content: `Compare these two login pages and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left page uses a deceptive URL that appears legitimate at first glance, while the right is the official Microsoft login.',
    indicators: [
      'Domain is "secure-auth.net" not "microsoft.com"',
      'Subdomain manipulation to look official',
      'URL structure mimics real Microsoft OAuth',
      'Missing official Microsoft security indicators',
      'Suspicious extra domain in the URL path'
    ],
    difficulty: 'easy',
    phishingScreenshot: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'easy-4',
    type: 'email',
    title: 'Fake PayPal vs Real PayPal Email',
    content: `Compare these two PayPal emails and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The right email uses a fake PayPal domain and creates urgency around a fictional dispute, while the left is legitimate.',
    indicators: [
      'Fake domain "paypal-resolution.com" instead of "paypal.com"',
      'Generic greeting instead of account holder name',
      'Creates fear with account limitation threat',
      'Suspicious transaction ID format',
      'Urgent 10-day deadline pressure',
      'URL doesn\'t match official PayPal dispute system'
    ],
    difficulty: 'easy',
    phishingScreenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    correctChoice: 'right'
  },

  // Medium Level - Sophisticated Phishing
  {
    id: 'medium-1',
    type: 'website',
    title: 'Fake Microsoft vs Real Microsoft Login',
    content: `Compare these two Microsoft login pages and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left page uses a deceptive URL that appears legitimate at first glance, while the right is the official Microsoft login.',
    indicators: [
      'Domain is "secure-auth.net" not "microsoft.com"',
      'Subdomain manipulation to look official',
      'URL structure mimics real Microsoft OAuth',
      'Missing official Microsoft security indicators',
      'Suspicious extra domain in the URL path'
    ],
    difficulty: 'medium',
    phishingScreenshot: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'medium-2',
    type: 'email',
    title: 'Fake Netflix vs Real Netflix Email',
    content: `Compare these two Netflix emails and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left email uses a fake Netflix domain and threatens permanent closure, while the right is a legitimate Netflix communication.',
    indicators: [
      'Fake domain "netflix-billing.com" instead of "netflix.com"',
      'Creates fear with permanent account closure threat',
      'Generic greeting instead of account holder name',
      '48-hour deadline creates urgency',
      'Suspicious billing domain separate from main Netflix site',
      'Real Netflix handles billing through official app/website'
    ],
    difficulty: 'medium',
    phishingScreenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'medium-3',
    type: 'email',
    title: 'Fake Google vs Real Google Security Alert',
    content: `Compare these two Google security alerts and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The right email is a legitimate Google security notification with proper branding, while the left uses suspicious tactics.',
    indicators: [
      'Official Google domain (accounts.google.com)',
      'Personalized greeting with actual name',
      'Specific device and location information',
      'Official Google security URL',
      'Professional formatting with Google footer',
      'No urgent action required or threats'
    ],
    difficulty: 'medium',
    phishingScreenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'medium-4',
    type: 'sms',
    title: 'Fake Bank vs Real Bank SMS',
    content: `Compare these two bank SMS messages and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left SMS uses domain spoofing to appear legitimate, while the right is from an official bank short code.',
    indicators: [
      'Sender shows "BankOfAmerica" but may be spoofed',
      'Domain "security-verification.online" is not bankofamerica.com',
      'Uses realistic transaction amount and merchant',
      'Creates urgency with 24-hour deadline',
      'URL designed to look official with bankofamerica.com prefix',
      'Real banks use official short codes, not spoofed names'
    ],
    difficulty: 'medium',
    phishingScreenshot: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'left'
  },

  // Hard Level - Spear Phishing & Advanced Attacks
  {
    id: 'hard-1',
    type: 'email',
    title: 'CEO Fraud vs Legitimate Executive Email',
    content: `Compare these two executive emails and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left email is a sophisticated Business Email Compromise (BEC) attack impersonating the CEO, while the right is legitimate.',
    indicators: [
      'Creates urgency with "before market close today"',
      'Requests secrecy ("do not discuss with anyone")',
      'Uses company-specific terminology and names',
      'Unusual request for direct wire transfer',
      'Appeals to authority and company loyalty',
      'May be sent from compromised or spoofed email'
    ],
    difficulty: 'hard',
    phishingScreenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'hard-2',
    type: 'email',
    title: 'Sophisticated LinkedIn Phishing vs Real LinkedIn',
    content: `Compare these two LinkedIn emails and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left email combines security concerns with professional FOMO to steal credentials, while the right is legitimate.',
    indicators: [
      'Fake domain "verify-now.net" despite appearing to be linkedin.com',
      'Uses professional anxiety and FOMO tactics',
      'Mixes legitimate security language with suspicious urgency',
      'Promises exclusive benefits to encourage clicking',
      '24-hour deadline creates pressure',
      'URL structure designed to deceive (linkedin.com.account-security...)'
    ],
    difficulty: 'hard',
    phishingScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'hard-3',
    type: 'email',
    title: 'Advanced Tax Scam vs Real IRS Notice',
    content: `Compare these two tax-related communications and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The IRS never initiates contact via email and the left uses fear tactics with fake legal threats, while the right is legitimate.',
    indicators: [
      'IRS never contacts taxpayers via email initially',
      'Fake domain "tax-compliance.net" added to irs.gov',
      'Creates extreme fear with criminal charges threat',
      'Urgent 72-hour deadline pressure',
      'Requests immediate online verification',
      'Uses official-sounding case numbers and terminology'
    ],
    difficulty: 'hard',
    phishingScreenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    correctChoice: 'left'
  },
  {
    id: 'hard-4',
    type: 'website',
    title: 'Fake Apple vs Real Apple Login Page',
    content: `Compare these two Apple login pages and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The right page uses domain spoofing to appear legitimate, while the left is the official Apple login.',
    indicators: [
      'Domain is "secure-login.net" not "apple.com"',
      'Subdomain spoofing with "appleid.apple.com" prefix',
      'URL structure designed to deceive quick glances',
      'Missing official Apple security features',
      'Suspicious domain extension and path'
    ],
    difficulty: 'hard',
    phishingScreenshot: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'right'
  },
  {
    id: 'hard-5',
    type: 'sms',
    title: 'Sophisticated Banking Trojan vs Real Bank Alert',
    content: `Compare these two banking SMS messages and identify which one is the phishing attempt.`,
    isPhishing: true,
    explanation: 'The left SMS phishing uses realistic transaction details and official-looking sender, while the right is from a real bank.',
    indicators: [
      'Sender shows "BankOfAmerica" but may be spoofed',
      'Domain "security-verification.online" is not bankofamerica.com',
      'Uses realistic transaction amount and merchant',
      'Creates urgency with account restriction threat',
      'URL designed to look official with bankofamerica.com prefix',
      'Real banks use official short codes, not spoofed names'
    ],
    difficulty: 'hard',
    phishingScreenshot: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    legitimateScreenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    correctChoice: 'left'
  }
];
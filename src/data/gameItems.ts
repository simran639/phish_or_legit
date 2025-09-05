import { GameItem } from '../types/game';

export const gameItems: GameItem[] = [
  // Easy Level - Obvious Scams
  {
    id: 'easy-1',
    type: 'email',
    title: 'Congratulations Winner!',
    content: `From: Nigerian Prince <prince@gmail.com>
    To: you@email.com
    Subject: YOU WON $1,000,000 USD!!!

    CONGRATULATIONS!!! 

    You have been selected as the LUCKY WINNER of our international lottery! You have won the sum of ONE MILLION US DOLLARS ($1,000,000.00).

    To claim your prize, please send us your bank account details immediately:
    - Full Name
    - Bank Account Number  
    - Social Security Number
    - Copy of ID

    Contact us urgently: prince@gmail.com

    Best regards,
    Nigerian Prince`,
    isPhishing: true,
    explanation: 'This is a classic advance-fee scam with multiple red flags.',
    indicators: [
      'Claims you won money you never entered to win',
      'Requests sensitive personal information like SSN',
      'Urgency tactics ("immediately", "urgently")',
      'Suspicious sender address',
      'Poor grammar and excessive capitalization'
    ],
    difficulty: 'easy'
  },
  {
    id: 'easy-2',
    type: 'sms',
    title: 'Bank Alert',
    content: `SMS from: +1-555-BANK

ALERT: Your account has been COMPROMISED! Click link immediately to secure your account: http://bank-security.fake-site.com/login

Reply STOP to cancel.`,
    isPhishing: true,
    explanation: 'Legitimate banks never send urgent security links via SMS.',
    indicators: [
      'Creates false sense of urgency',
      'Suspicious URL not matching bank domain',
      'Banks don\'t use generic phone numbers',
      'Requests immediate action via link'
    ],
    difficulty: 'easy'
  },
  {
    id: 'easy-3',
    type: 'email',
    title: 'Amazon Order Confirmation',
    content: `From: Amazon <orders@amazon.com>
To: customer@email.com
Subject: Your Order #112-7418965-8376235 has been shipped

Dear Valued Customer,

Thank you for your order. Your package containing:
- Apple AirPods Pro (2nd generation)
- Order Total: $249.99

Your package has been shipped and will arrive within 2-3 business days.

Track your order: https://amazon.com/track/112-7418965-8376235

Thank you for choosing Amazon!

Best regards,
Amazon Customer Service`,
    isPhishing: false,
    explanation: 'This is a legitimate order confirmation with proper formatting and official branding.',
    indicators: [
      'Official Amazon email domain',
      'Proper order number format',
      'Professional formatting and language',
      'Valid Amazon tracking link',
      'No requests for personal information'
    ],
    difficulty: 'easy'
  },
  {
    "id": "easy-4",
    "type": "email",
    "title": "Amazon Account Suspended",
    "content": "Dear Customer, your Amazon account has been suspended due to suspicious activity. Please verify your information here: http://amazon-verification-login.com",
    "isPhishing": true,
    "explanation": "The email uses a fake login link to steal credentials.",
    "indicators": [
      "Suspicious domain (not amazon.com)",
      "Urgency to verify account",
      "Generic greeting (Dear Customer)"
    ],
    "difficulty": "easy"
  },
  {
    "id": "easy-5",
    "type": "sms",
    "title": "Bank OTP Request",
    "content": "Your OTP for online banking is 764321. Do not share this with anyone. - XYZ Bank",
    "isPhishing": false,
    "explanation": "Legitimate banks send OTPs but never ask you to share them. This message contains no malicious links.",
    "indicators": [
      "No links included",
      "Clear warning not to share",
      "Comes from trusted bank source"
    ],
    "difficulty": "easy"
  },

  // Medium Level - Fake Login Pages
  {
    id: 'medium-1',
    type: 'website',
    title: 'Microsoft Login Page',
    content: `Microsoft Account Sign In

Email: [___________________]
Password: [___________________]

[Sign in] [Forgot password?]

Stay signed in? ☐

URL: https://microsft-login.secure-portal.net/signin`,
    isPhishing: true,
    explanation: 'This is a fake Microsoft login page with subtle URL manipulation.',
    indicators: [
      'Misspelled domain (microsft instead of microsoft)',
      'Suspicious subdomain structure',
      'URL doesn\'t match official Microsoft domains',
      'Missing proper SSL indicators'
    ],
    difficulty: 'medium'
  },
  {
    id: 'medium-2',
    type: 'email',
    title: 'PayPal Security Notice',
    content: `From: PayPal Security <security@paypal-notification.com>
To: user@email.com
Subject: Action Required: Verify Your Account

Dear PayPal User,

We have detected unusual activity on your account. For your security, we have temporarily limited your account access.

To restore full access, please verify your account information by clicking the link below:

Verify Account Now: https://paypal-security.verify-now.com/account

Please complete this verification within 24 hours to avoid permanent account suspension.

If you did not request this, please contact PayPal Support immediately.

PayPal Security Team`,
    isPhishing: true,
    explanation: 'This email uses fear tactics and fake urgency to steal PayPal credentials.',
    indicators: [
      'Fake PayPal domain (paypal-notification.com)',
      'Generic greeting instead of your name',
      'Creates fear with account limitation threat',
      'Suspicious verification URL',
      '24-hour deadline pressure tactic'
    ],
    difficulty: 'medium'
  },
  {
    "id": "medium-3",
    "type": "email",
    "title": "University Exam Schedule",
    "content": "Dear Student, your final exam schedule is now available on the official portal. Please log in at https://portal.university.edu/exams",
    "isPhishing": false,
    "explanation": "This is a legitimate university communication with a valid official link.",
    "indicators": [
      "Domain matches official university",
      "No request for sensitive personal data",
      "Contextually relevant content"
    ],
    "difficulty": "medium"
  },
  // Hard Level - Spear Phishing
  {
    id: 'hard-1',
    type: 'email',
    title: 'IT Department Update',
    content: `From: IT Support <it-support@yourcompany.com>
To: employees@yourcompany.com
Subject: Mandatory Security Update - Action Required

Dear Team,

As part of our ongoing security improvements, all employees must update their system passwords by end of day today.

Please log into the employee portal using the link below to complete your mandatory password update:

Employee Portal: https://yourcompany.employee-security-update.com/portal

This update is required for compliance with our new security policy. Failure to complete this update may result in temporary account suspension.

For questions, contact IT at ext. 4455.

Best regards,
IT Security Team
YourCompany Inc.`,
    isPhishing: true,
    explanation: 'Sophisticated spear-phishing targeting company employees with realistic context.',
    indicators: [
      'Domain looks official but has extra subdomain',
      'Creates urgency with end-of-day deadline',
      'Uses company-specific terminology',
      'Threatens consequences for non-compliance',
      'URL doesn\'t match company\'s actual domain structure'
    ],
    difficulty: 'hard'
  },
  {
    id: 'hard-2',
    type: 'email',
    title: 'Google Workspace Admin',
    content: `From: Google Workspace <noreply@google.com>
To: admin@yourcompany.com
Subject: Security Alert - New Device Sign In

Hello Administrator,

A new device has signed into your Google Workspace account:

Device: iPhone 14 Pro
Location: San Francisco, CA, USA
Time: Today at 2:45 PM PST
IP Address: 192.168.1.105

If this was you, no action is needed. If you don't recognize this activity, please secure your account immediately by reviewing recent activity.

Review Account Activity
https://accounts.google.com/security-activity

The Google Accounts team`,
    isPhishing: false,
    explanation: 'This is a legitimate Google security notification with proper formatting and official branding.',
    indicators: [
      'Official Google domain (google.com)',
      'Professional formatting and language',
      'Includes specific device and location info',
      'Proper Google branding and tone',
      'Links to official Google security pages',
      'Doesn\'t request sensitive information'
    ],
    difficulty: 'hard'
  },
   {
    "id": "hard-3",
    "type": "email",
    "title": "Security Alert: Multiple Login Attempts",
    "content": "We noticed multiple login attempts from unknown devices. Please confirm your identity here: http://google.verify-user-security.com",
    "isPhishing": true,
    "explanation": "Tries to impersonate Google with a fake verification link.",
    "indicators": [
      "Domain does not belong to Google",
      "Creates fear/urgency",
      "Generic formatting unlike real Google emails"
    ],
    "difficulty": "hard"
  },
   {
    "id": "hard-4",
    "type": "email",
    "title": "CEO Urgent Request",
    "content": "From: CEO <ceo@yourcompany-support.com>\nTo: finance@yourcompany.com\nSubject: URGENT: Wire Transfer Needed Today\n\nHi John,\n\nI’m currently in an important board meeting and can’t talk. We need to process an urgent payment for a new supplier before the end of the day, or we risk delaying a critical project. Please wire $49,750 to the following account:\n\nAccount Name: Global Solutions Ltd.\nIBAN: GB29 NWBK 6016 1331 9268 19\nBank: Northwest Bank, London\n\nMake sure this is handled immediately and confirm once done. Keep this confidential.\n\nThank you,\n[CEO Name]\n\n--\nYourCompany Leadership",
    "isPhishing": true,
    "explanation": "This is a business email compromise (BEC) scam impersonating the CEO, demanding an urgent wire transfer.",
    "indicators": [
      "Spoofed sender domain (yourcompany-support.com vs yourcompany.com)",
      "Unusual urgency and secrecy request",
      "Large wire transfer request to unknown supplier",
      "CEO claims to be unavailable, creating pressure"
    ],
    "difficulty": "hard"
  },
   {
    "id": "hard-5",
    "type": "email",
    "title": "Legitimate Finance Report Delivery",
    "content": "From: Finance Department <finance@yourcompany.com>\nTo: board@yourcompany.com\nSubject: Q2 Financial Report - Confidential\n\nDear Board Members,\n\nAttached is the Q2 Financial Report including earnings, expenses, and forecasts. This report is intended for board review only and should not be shared externally.\n\nIf you have any questions, please reach out directly to the Finance office.\n\nBest regards,\n[Finance Director]\nFinance Department\nYourCompany Inc.",
    "isPhishing": false,
    "explanation": "This is a legitimate internal company email with correct sender domain and professional tone.",
    "indicators": [
      "Correct official company domain",
      "Relevant context (quarterly report)",
      "Professional formatting and no suspicious links",
      "No urgency or request for sensitive data"
    ],
    "difficulty": "hard"
  }
];
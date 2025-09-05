import { GameItem } from '../types/game';

export const gameItems: GameItem[] = [
  // Easy Level - Obvious Scams
  {
    id: 'easy-1',
    type: 'email',
    title: 'Nigerian Prince Inheritance',
    content: `From: Prince Abubakar <prince.abubakar@gmail.com>
To: you@email.com
Subject: URGENT: $25,000,000 INHERITANCE FUND

DEAR BENEFICIARY,

I AM PRINCE ABUBAKAR FROM NIGERIA. MY FATHER LEFT $25 MILLION USD IN A BANK BEFORE HE DIED. I NEED YOUR HELP TO TRANSFER THIS MONEY TO YOUR ACCOUNT.

YOU WILL GET 40% OF THE MONEY ($10,000,000) FOR HELPING ME.

PLEASE SEND ME:
- YOUR FULL NAME
- BANK ACCOUNT NUMBER
- SOCIAL SECURITY NUMBER
- COPY OF YOUR PASSPORT

TIME IS RUNNING OUT!!! REPLY IMMEDIATELY!!!

GOD BLESS YOU,
PRINCE ABUBAKAR`,
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
    screenshot: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg'
  },
  {
    id: 'easy-2',
    type: 'sms',
    title: 'Fake Bank Security Alert',
    content: `SMS from: +1-555-SECURITY

🚨 SECURITY ALERT 🚨
Your Bank of America account has been LOCKED due to suspicious activity!

Click here NOW to unlock: http://bankofamerica-security.tk/unlock

You have 1 HOUR or account will be CLOSED FOREVER!

Reply STOP to opt out`,
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
    screenshot: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
  },
  {
    id: 'easy-3',
    type: 'email',
    title: 'Legitimate Amazon Order',
    content: `From: Amazon.com <ship-confirm@amazon.com>
To: customer@email.com
Subject: Your order of AirPods Pro has shipped

Hello John Smith,

Your order has been shipped and is on the way. You can track the status of this order, and all your orders, online by visiting Your Orders on Amazon.com.

Order #114-3941234-1234567
AirPods Pro (2nd generation) with MagSafe Case
Qty: 1
$249.00

Shipped via: UPS
Tracking number: 1Z999AA1234567890
Estimated delivery: Tomorrow by 10 PM

Track your package: https://www.amazon.com/progress-tracker/package/ref=ppx_yo_dt_b_track_package

Thanks for shopping with us.
Amazon.com`,
    isPhishing: false,
    explanation: 'This is a legitimate Amazon shipping confirmation with proper formatting and official details.',
    indicators: [
      'Official Amazon domain (ship-confirm@amazon.com)',
      'Personalized greeting with actual name',
      'Proper order number format',
      'Valid tracking number format',
      'Official Amazon tracking URL',
      'Professional formatting without urgency tactics'
    ],
    difficulty: 'easy',
    screenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
  },
  {
    id: 'easy-4',
    type: 'sms',
    title: 'Fake Package Delivery',
    content: `SMS from: +1-800-FEDEX

📦 FedEx Delivery Update

Your package could not be delivered. Please confirm delivery details:
http://fedex-redelivery.info/confirm?id=FX123456789

Package will be returned if not confirmed within 24 hours.

FedEx Customer Service`,
    isPhishing: true,
    explanation: 'FedEx uses official short codes and would never ask for confirmation via suspicious links.',
    indicators: [
      'Fake domain (fedex-redelivery.info instead of fedex.com)',
      'Generic phone number instead of official FedEx short code',
      'Creates urgency with 24-hour deadline',
      'Requests confirmation for unordered package',
      'Suspicious URL structure with tracking ID'
    ],
    difficulty: 'easy',
    screenshot: 'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg'
  },

  // Medium Level - Sophisticated Phishing
  {
    id: 'medium-1',
    type: 'website',
    title: 'Fake Microsoft Login',
    content: `Microsoft
Sign in to your account

Email, phone, or Skype
[____________________]

Password
[____________________]

☐ Keep me signed in

[Sign in]

Can't access your account?

URL: https://login.microsoftonline.com.secure-auth.net/common/oauth2/authorize`,
    isPhishing: true,
    explanation: 'This fake login page uses a deceptive URL that appears legitimate at first glance.',
    indicators: [
      'Domain is "secure-auth.net" not "microsoft.com"',
      'Subdomain manipulation to look official',
      'URL structure mimics real Microsoft OAuth',
      'Missing official Microsoft security indicators',
      'Suspicious extra domain in the URL path'
    ],
    difficulty: 'medium',
    screenshot: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
  },
  {
    id: 'medium-2',
    type: 'email',
    title: 'Fake PayPal Dispute',
    content: `From: PayPal <service@paypal-resolution.com>
To: user@email.com
Subject: Case ID PP-D-40417: Dispute opened against your account

Dear PayPal User,

A dispute has been opened against your account for transaction #4GF89023HN567234K.

Dispute Amount: $847.99
Merchant: TechGadgets Store
Reason: Item not received

To avoid account limitations, please review and respond to this dispute within 10 days.

Review Dispute: https://paypal-resolution.com/dispute/PP-D-40417

If you believe this dispute was opened in error, please contact our Resolution Center immediately.

PayPal Dispute Resolution Team`,
    isPhishing: true,
    explanation: 'This email uses a fake PayPal domain and creates urgency around a fictional dispute.',
    indicators: [
      'Fake domain "paypal-resolution.com" instead of "paypal.com"',
      'Generic greeting instead of account holder name',
      'Creates fear with account limitation threat',
      'Suspicious transaction ID format',
      'Urgent 10-day deadline pressure',
      'URL doesn\'t match official PayPal dispute system'
    ],
    difficulty: 'medium',
    screenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
  },
  {
    id: 'medium-3',
    type: 'email',
    title: 'Legitimate Google Security Alert',
    content: `From: Google <no-reply@accounts.google.com>
To: user@gmail.com
Subject: Security alert for your Google Account

Hi John,

We noticed a new sign-in to your Google Account on a Windows device. If this was you, you don't need to do anything. If not, we'll help you secure your account.

Device: Windows 10 • Chrome
Location: San Francisco, CA, USA (based on IP address)
Time: December 15, 2024, 2:30 PM PST

You can also see security activity at https://myaccount.google.com/security

You received this email to let you know about important changes to your Google Account and services.

© 2024 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA`,
    isPhishing: false,
    explanation: 'This is a legitimate Google security notification with proper branding and official links.',
    indicators: [
      'Official Google domain (accounts.google.com)',
      'Personalized greeting with actual name',
      'Specific device and location information',
      'Official Google security URL',
      'Professional formatting with Google footer',
      'No urgent action required or threats'
    ],
    difficulty: 'medium',
    screenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  },
  {
    id: 'medium-4',
    type: 'website',
    title: 'Fake Apple ID Login',
    content: `Apple ID
Sign In

Apple ID
[____________________]

Password
[____________________]

☐ Remember me

[Sign In →]

Forgot Apple ID or password?

Create Your Apple ID

URL: https://appleid.apple.com-verification.secure-login.net/account/signin`,
    isPhishing: true,
    explanation: 'This fake Apple login page uses domain spoofing to appear legitimate.',
    indicators: [
      'Domain is "secure-login.net" not "apple.com"',
      'Subdomain spoofing with "appleid.apple.com" prefix',
      'URL structure designed to deceive quick glances',
      'Missing official Apple security features',
      'Suspicious domain extension and path'
    ],
    difficulty: 'medium',
    screenshot: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
  },

  // Hard Level - Spear Phishing & Advanced Attacks
  {
    id: 'hard-1',
    type: 'email',
    title: 'CEO Fraud / Business Email Compromise',
    content: `From: Robert Johnson <robert.johnson@yourcompany.com>
To: finance@yourcompany.com
Subject: Urgent Wire Transfer - Confidential Acquisition

Sarah,

I'm currently in meetings with our legal team regarding the confidential acquisition we discussed last month. I need you to process an urgent wire transfer to secure the deal.

Amount: $89,500
Recipient: Meridian Capital Partners LLC
Account: 4847291038475629
Routing: 021000021
Reference: Project Atlas - Q4 Acquisition

This needs to be completed before market close today. Please confirm once the transfer is initiated. Do not discuss this with anyone else on the team until the announcement.

The board is counting on us to close this quietly.

Best regards,
Robert Johnson
CEO, YourCompany Inc.
Mobile: +1 (555) 123-4567`,
    isPhishing: true,
    explanation: 'This is a sophisticated Business Email Compromise (BEC) attack impersonating the CEO.',
    indicators: [
      'Creates urgency with "before market close today"',
      'Requests secrecy ("do not discuss with anyone")',
      'Uses company-specific terminology and names',
      'Unusual request for direct wire transfer',
      'Appeals to authority and company loyalty',
      'May be sent from compromised or spoofed email'
    ],
    difficulty: 'hard',
    screenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
  },
  {
    id: 'hard-2',
    type: 'email',
    title: 'Sophisticated LinkedIn Phishing',
    content: `From: LinkedIn <security@linkedin.com>
To: professional@email.com
Subject: Your LinkedIn account shows unusual activity

Hello Sarah,

We've detected some unusual activity on your LinkedIn account that requires your immediate attention.

Recent activity:
• Login from new device: iPhone 13 Pro (San Jose, CA)
• Profile viewed by 47 recruiters from Fortune 500 companies
• 3 new connection requests from senior executives

To ensure your account security and maintain access to these valuable networking opportunities, please verify your account credentials.

Secure your account: https://linkedin.com.account-security.verify-now.net/checkpoint

This verification will also unlock premium insights about who's been viewing your profile, including hiring managers from:
• Google • Microsoft • Apple • Amazon

Please complete this verification within 24 hours to maintain your professional network access.

Best regards,
LinkedIn Security Team`,
    isPhishing: true,
    explanation: 'This sophisticated attack combines security concerns with professional FOMO to steal credentials.',
    indicators: [
      'Fake domain "verify-now.net" despite appearing to be linkedin.com',
      'Uses professional anxiety and FOMO tactics',
      'Mixes legitimate security language with suspicious urgency',
      'Promises exclusive benefits to encourage clicking',
      '24-hour deadline creates pressure',
      'URL structure designed to deceive (linkedin.com.account-security...)'
    ],
    difficulty: 'hard',
    screenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  },
  {
    id: 'hard-3',
    type: 'email',
    title: 'Legitimate Microsoft 365 Admin Alert',
    content: `From: Microsoft 365 <no-reply@email.microsoftonline.com>
To: admin@yourcompany.com
Subject: Action required: User sign-in risk detected

Hello Administrator,

We've detected a sign-in to your Microsoft 365 tenant that our security systems have flagged as potentially risky.

User: john.smith@yourcompany.com
Risk level: Medium
Location: Toronto, Canada
Device: Windows 11 • Edge Browser
Time: December 15, 2024 at 3:45 PM EST

Recommended actions:
• Review the user's recent activity in the Security & Compliance Center
• Consider requiring multi-factor authentication for this user
• Monitor for any unusual file access or sharing

View full details in the Microsoft 365 Security Center:
https://security.microsoft.com/alerts

This is an automated message from Microsoft 365 Security. You're receiving this because you're listed as a security administrator for your organization.

Microsoft Corporation
One Microsoft Way, Redmond, WA 98052`,
    isPhishing: false,
    explanation: 'This is a legitimate Microsoft 365 security alert with proper formatting and official branding.',
    indicators: [
      'Official Microsoft domain (email.microsoftonline.com)',
      'Specific user and technical details',
      'Professional security terminology',
      'Official Microsoft 365 Security Center URL',
      'Proper Microsoft corporate footer',
      'No urgent action demanded, just recommendations'
    ],
    difficulty: 'hard',
    screenshot: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  },
  {
    id: 'hard-4',
    type: 'email',
    title: 'Advanced Tax Scam',
    content: `From: Internal Revenue Service <notices@irs.gov.tax-compliance.net>
To: taxpayer@email.com
Subject: Final Notice: Tax Compliance Verification Required - Case #IRS-2024-TC-891047

Dear Taxpayer,

This is your final notice regarding discrepancies found in your 2023 tax return filing. Our automated systems have flagged your return for immediate compliance verification.

Case Number: IRS-2024-TC-891047
Tax Year: 2023
Amount in Question: $3,247.89
Status: URGENT REVIEW REQUIRED

Failure to complete this verification within 72 hours will result in:
• Immediate tax lien placement on your assets
• Wage garnishment proceedings
• Potential criminal tax evasion charges

To resolve this matter immediately and avoid legal action:

1. Verify your identity: https://irs.gov.tax-compliance.net/verify/case-891047
2. Provide supporting documentation for questioned deductions
3. Complete payment arrangement if additional taxes are owed

This matter requires immediate attention. Do not ignore this notice.

Internal Revenue Service
Tax Compliance Division
Philadelphia, PA 19255`,
    isPhishing: true,
    explanation: 'The IRS never initiates contact via email and this uses fear tactics with fake legal threats.',
    indicators: [
      'IRS never contacts taxpayers via email initially',
      'Fake domain "tax-compliance.net" added to irs.gov',
      'Creates extreme fear with criminal charges threat',
      'Urgent 72-hour deadline pressure',
      'Requests immediate online verification',
      'Uses official-sounding case numbers and terminology'
    ],
    difficulty: 'hard',
    screenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
  },
  {
    id: 'hard-5',
    type: 'sms',
    title: 'Sophisticated Banking Trojan',
    content: `SMS from: BankOfAmerica

Security Alert: We've detected suspicious activity on your account ending in 4829.

Recent transaction: $2,847.99 at "AMAZON PRIME SERVICES"

If you did not authorize this transaction, please verify your account immediately:

https://bankofamerica.com.security-verification.online/mobile

Your account will be temporarily restricted until verification is complete.

Text STOP to opt out of alerts.`,
    isPhishing: true,
    explanation: 'This sophisticated SMS phishing uses realistic transaction details and official-looking sender.',
    indicators: [
      'Sender shows "BankOfAmerica" but may be spoofed',
      'Domain "security-verification.online" is not bankofamerica.com',
      'Uses realistic transaction amount and merchant',
      'Creates urgency with account restriction threat',
      'URL designed to look official with bankofamerica.com prefix',
      'Real banks use official short codes, not spoofed names'
    ],
    difficulty: 'hard',
    screenshot: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
  },

  // Additional Medium Level Examples
  {
    id: 'medium-5',
    type: 'email',
    title: 'Fake Netflix Suspension',
    content: `From: Netflix <account@netflix-billing.com>
To: subscriber@email.com
Subject: Your Netflix account has been suspended

Hi there,

We're having trouble with your current billing information. Your Netflix account has been placed on hold.

To keep watching, please update your payment method within 48 hours.

Update Payment Method: https://netflix-billing.com/account/update

Current plan: Premium - $15.49/month
Account status: Suspended
Last payment: Failed on Dec 13, 2024

If you don't update your payment information, your account will be permanently closed and you'll lose access to your viewing history and saved shows.

Questions? Visit our Help Center.

The Netflix Team`,
    isPhishing: true,
    explanation: 'Netflix uses official domains and would never threaten permanent closure for billing issues.',
    indicators: [
      'Fake domain "netflix-billing.com" instead of "netflix.com"',
      'Creates fear with permanent account closure threat',
      'Generic greeting instead of account holder name',
      '48-hour deadline creates urgency',
      'Suspicious billing domain separate from main Netflix site',
      'Real Netflix handles billing through official app/website'
    ],
    difficulty: 'medium',
    screenshot: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
  },
  {
    id: 'medium-6',
    type: 'email',
    title: 'Legitimate Bank Statement',
    content: `From: Chase Bank <statements@chase.com>
To: customer@email.com
Subject: Your December 2024 statement is ready

Dear John Smith,

Your Chase checking account statement for December 2024 is now available.

Account: Chase Total Checking (...4829)
Statement Period: December 1-31, 2024
Ending Balance: $2,847.32

View your statement: https://secure.chase.com/statements

You can also view your statement anytime by signing into chase.com or using the Chase Mobile app.

Thank you for banking with Chase.

JPMorgan Chase Bank, N.A.
Member FDIC`,
    isPhishing: false,
    explanation: 'This is a legitimate bank statement notification with proper Chase branding and security.',
    indicators: [
      'Official Chase domain (statements@chase.com)',
      'Personalized with actual account holder name',
      'Proper account number format (partial with ...)',
      'Official Chase URL (secure.chase.com)',
      'Professional banking language and formatting',
      'Includes proper bank regulatory information (FDIC)'
    ],
    difficulty: 'medium',
    screenshot: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
  }
];
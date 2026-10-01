/**
 * ====================================================================
 * AKSHAY VERMA (ANDUA) - BIRTHDAY WEBSITE CONFIGURATION
 * Simplified & fun brotherly version for a 9th class brother!
 * ====================================================================
 */

export const BROTHER_CONFIG = {
  // Personal Info
  name: "Akshay Verma",
  nickname: "Andua",
  age: 17,
  schoolClass: "9th Standard",
  version: "17.0",
  birthdayDate: "2026",
  relationship: "Younger Brother",
  elderBrotherName: "Sonu (Bhai)",
  
  // Recurring Inside Joke
  schoolExcuse: "Pet dard ho raha hai.",

  // Terminal Boot Sequence (Simple & Fun)
  bootSequence: [
    { text: "sonu@brother:~$ ./start_party.sh", delay: 300, isPrompt: true },
    { text: "Starting Birthday Setup...", delay: 400 },
    { text: "> Loading brother memories........ ✓", delay: 350 },
    { text: "> Checking homework status....... ✓ (Not Done 😂)", delay: 350 },
    { text: "> Loading special message ........ ✓", delay: 350 },
    { text: "> Loading gaming & fun skills.... ✓", delay: 350 },
    { text: "> Loading birthday cake.......... ✓", delay: 350 },
    { text: "PARTY READY! [100%]", delay: 500, status: "READY" },
  ],

  // Brother Profile Card Details (Simple & Relatable for 9th grader)
  profileSpecs: [
    { key: "Full Name", value: "Akshay Verma", icon: "User" },
    { key: "Nickname", value: "Andua", icon: "Tag" },
    { key: "Age", value: "17 Years Old", icon: "Calendar" },
    { key: "School Class", value: "9th Standard 🎒", icon: "BookOpen" },
    { key: "Role", value: "Legendary Younger Brother", icon: "Heart" },
    { key: "Famous Excuse", value: '"Pet dard ho raha hai" 😂', icon: "Smile", highlight: true },
    { key: "Homework Status", value: "Pending Forever 📚", icon: "Clock" },
    { key: "Special Skill", value: "Making Everyone Laugh 🌟", icon: "Zap" },
    { key: "Bhai Rating", value: "100/10 Star Brother", icon: "Award" },
    { key: "Current Status", value: "100% Ready to Celebrate 🎉", icon: "Activity", highlight: true },
  ],

  profileFooterQuote: '"No other brother can ever replace you, Andua!"',

  // Our Journey / Timeline
  journeyTimeline: [
    {
      id: "childhood",
      tag: "Childhood Days 👶",
      title: "The Little Akshay Era",
      subtitle: "Small Akshay / Andua",
      date: "Early Years",
      description: "From tiny mischievous smiles to running around the house causing full fun and chaos. You were always the cute little star of the family!",
      codeSnippet: `const littleAndua = {\n  cuteness: "100%",\n  mischief: "MAX",\n  status: "Super Cute Brother"\n};`,
      badge: "Chapter 1"
    },
    {
      id: "school",
      tag: "School Life 🎒",
      title: "The Famous School Excuse Generator",
      subtitle: "9th Class Morning Story",
      date: "School Era",
      description: "Remember those mornings when going to school felt like mission impossible and suddenly your stomach started hurting right before the school bus arrived?",
      warningBox: {
        title: "ALERT ⚠ School Morning Detected",
        command: "Running excuse_generator.exe...",
        output: '"Bhai, aaj pet dard ho raha hai!"',
        status: "EXCUSE APPROVED! 😂"
      },
      codeSnippet: `function morningRoutine() {\n  if (wantToGoToSchool === false) {\n    return "Pet dard ho raha hai! 😂";\n  }\n}`,
      badge: "Chapter 2"
    },
    {
      id: "teenage",
      tag: "9th Class Swag 🚀",
      title: "Growing Up & Leveling Up",
      subtitle: "More Fun & Big Dreams",
      date: "Present",
      description: "Watching you grow into a confident, smart, and funny 9th class student has made me super proud of you.",
      features: [
        "+ More confidence & style",
        "+ Big dreams for the future",
        "+ Always making everyone laugh",
        "+ Bhai's favorite younger brother"
      ],
      badge: "Chapter 3"
    },
    {
      id: "today",
      tag: "Birthday Today 🎉",
      title: "LEVEL 17 UNLOCKED!",
      subtitle: "Welcome to 17 Years of Greatness",
      date: "Today",
      description: "17 years of fun, fights, laughter, and brotherhood. Ready for an awesome year ahead!",
      codeSnippet: `console.log("HAPPY BIRTHDAY ANDUA! 🎉");`,
      badge: "Level 17"
    }
  ],

  // Developer Code Section (brother.js - Simplified)
  codeFile: {
    filename: "brother_rules.js",
    language: "javascript",
    content: `// ===============================================
// FILE: brother_rules.js
// WRITTEN BY: Sonu (Bhai)
// FOR: Akshay Verma (Andua)
// ===============================================

const myBrother = {
    name: "Akshay Verma",
    nickname: "Andua",
    class: "9th Standard",
    age: 17,

    happiness: "100%",
    future: "Super Bright 🌟",
    schoolExcuse: "Bhai, pet dard hai! 😂",
    brotherBond: "Forever Strong ❤️"
};

function messageFromBhai() {
    return \`
        Keep smiling.
        Keep dreaming.
        Keep working hard in 9th class.
        You are going to achieve big things, bro! 🚀
    \`;
}

// Print birthday wish
console.log(messageFromBhai());`
  },

  // Photo Gallery Configuration
  galleryImages: [
    {
      id: 1,
      title: "MEMORY_01",
      subtitle: "Brotherhood Moment",
      imagePath: "/images/akshay-01.jpg",
      date: "Memory 1",
      caption: "Bhai-giri at its finest!"
    },
    {
      id: 2,
      title: "MEMORY_02",
      subtitle: "Classic Andua",
      imagePath: "/images/akshay-02.jpg",
      date: "Memory 2",
      caption: "Always up to something funny!"
    },
    {
      id: 3,
      title: "MEMORY_03",
      subtitle: "School Swag",
      imagePath: "/images/akshay-03.jpg",
      date: "Memory 3",
      caption: "Before claiming 'pet dard ho raha hai' 😂"
    },
    {
      id: 4,
      title: "MEMORY_04",
      subtitle: "Family Fun",
      imagePath: "/images/akshay-04.jpg",
      date: "Memory 4",
      caption: "Good times with the family."
    },
    {
      id: 5,
      title: "MEMORY_05",
      subtitle: "Level 17 Swag",
      imagePath: "/images/akshay-05.jpg",
      date: "Memory 5",
      caption: "Growing up fast!"
    },
    {
      id: 6,
      title: "MEMORY_06",
      subtitle: "Unstoppable Dreams",
      imagePath: "/images/akshay-06.jpg",
      date: "Memory 6",
      caption: "Ready to conquer the world."
    },
    {
      id: 7,
      title: "MEMORY_07",
      subtitle: "Brother Bond",
      imagePath: "/images/akshay-07.jpg",
      date: "Memory 7",
      caption: "Brothers for life."
    },
    {
      id: 8,
      title: "MEMORY_08",
      subtitle: "Future Star",
      imagePath: "/images/akshay-08.jpg",
      date: "Memory 8",
      caption: "The best is yet to come! 🚀"
    },
  ],

  // Emotional Personal Message
  personalMessage: {
    tag: "// message_from_bhai",
    title: "A Special Letter From Your Bhai",
    paragraphs: [
      "Akshay, you're 17 now! ❤️",
      "We fight, argue, irritate each other and make fun of each other — that's what makes us the best brothers.",
      "But behind all the masti, I genuinely want to see you happy, confident and successful in 9th class and in life.",
      "Keep being the same crazy, funny and hardworking Andua.",
      "Chase whatever you want in life, learn from your mistakes, and never be afraid to try new things.",
      "And please... when school starts, maybe we can finally retire the legendary \"pet dard hai\" excuse. 😂",
      "No matter how old you get, you'll always be my little brother.",
      "I'll always be standing right beside you — today, tomorrow, and forever."
    ],
    signOff: "— Your Bhai (Sonu) ❤️"
  },

  // Interactive Terminal Commands (Simplified & Fun)
  terminalCommands: [
    { command: "./celebrate", description: "Trigger fireworks & party confetti explosion!" },
    { command: "./memories", description: "Go directly to photo memory gallery" },
    { command: "./letter", description: "Read personal letter from elder brother (Bhai)" },
    { command: "./profile", description: "Display Akshay's 9th Class Profile Card" },
    { command: "whoami", description: "Show who is the coolest brother" },
    { command: "pet-dard", description: "Try emergency school excuse!" },
    { command: "bhai", description: "Check Bhai's support status" },
    { command: "clear", description: "Clear terminal screen" },
    { command: "help", description: "List all easy commands" }
  ],

  // Audio track settings
  audioPath: "/audio/birthday.mp3"
};

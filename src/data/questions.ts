export const schoolQuestions = [
  {
    id: 1,
    question: "What type of problems do you enjoy solving the most?",
    options: [
      {
        text: "Technical and mathematical problems",
        scores: { SSE: 2, SHSS: 0, SBA: 1 }
      },
      {
        text: "Business and organizational challenges",
        scores: { SSE: 0, SHSS: 0, SBA: 2 }
      },
      {
        text: "Social and cultural issues",
        scores: { SSE: 0, SHSS: 2, SBA: 1 }
      }
    ]
  },
  {
    id: 2,
    question: "How do you prefer to work on projects?",
    options: [
      {
        text: "Independently, focusing on technical details",
        scores: { SSE: 2, SHSS: 1, SBA: 0 }
      },
      {
        text: "In teams, managing and coordinating with others",
        scores: { SSE: 0, SHSS: 0, SBA: 2 }
      },
      {
        text: "Through discussion and collaborative analysis",
        scores: { SSE: 0, SHSS: 2, SBA: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "Which career outcome interests you the most?",
    options: [
      {
        text: "Developing innovative technologies and solutions",
        scores: { SSE: 2, SHSS: 0, SBA: 1 }
      },
      {
        text: "Leading organizations and business ventures",
        scores: { SSE: 0, SHSS: 0, SBA: 2 }
      },
      {
        text: "Influencing society and cultural development",
        scores: { SSE: 0, SHSS: 2, SBA: 0 }
      }
    ]
  },
  {
    id: 4,
    question: "What kind of reading material interests you most?",
    options: [
      {
        text: "Technical manuals and scientific papers",
        scores: { SSE: 2, SHSS: 0, SBA: 0 }
      },
      {
        text: "Business news and market analysis",
        scores: { SSE: 0, SHSS: 0, SBA: 2 }
      },
      {
        text: "Literature and social science publications",
        scores: { SSE: 0, SHSS: 2, SBA: 0 }
      }
    ]
  },
  {
    id: 5,
    question: "How do you approach decision making?",
    options: [
      {
        text: "Through logical analysis and systematic evaluation",
        scores: { SSE: 2, SHSS: 0, SBA: 1 }
      },
      {
        text: "By considering market trends and financial implications",
        scores: { SSE: 0, SHSS: 0, SBA: 2 }
      },
      {
        text: "Based on social impact and human factors",
        scores: { SSE: 0, SHSS: 2, SBA: 0 }
      }
    ]
  }
];

export const sseQuestions = [
  {
    id: 'sse1',
    question: "How interested are you in programming and software development?",
    description: "From 1 (Not interested at all) to 5 (Extremely passionate)",
    scores: {
      1: { CS: 0, BDA: 1, RESE: 2, TPM: 2, GE: 2, EMS: 2 },
      2: { CS: 1, BDA: 2, RESE: 3, TPM: 3, GE: 3, EMS: 3 },
      3: { CS: 3, BDA: 3, RESE: 2, TPM: 2, GE: 3, EMS: 2 },
      4: { CS: 4, BDA: 3, RESE: 1, TPM: 1, GE: 2, EMS: 2 },
      5: { CS: 5, BDA: 3, RESE: 0, TPM: 0, GE: 1, EMS: 1 }
    }
  },
  {
    id: 'sse2',
    question: "How much do you enjoy working with data and statistical analysis?",
    description: "From 1 (Not at all) to 5 (Love analyzing data)",
    scores: {
      1: { CS: 1, BDA: 0, RESE: 2, TPM: 2, GE: 2, EMS: 2 },
      2: { CS: 2, BDA: 1, RESE: 2, TPM: 2, GE: 2, EMS: 2 },
      3: { CS: 2, BDA: 3, RESE: 2, TPM: 2, GE: 2, EMS: 3 },
      4: { CS: 3, BDA: 4, RESE: 1, TPM: 1, GE: 2, EMS: 3 },
      5: { CS: 2, BDA: 5, RESE: 1, TPM: 1, GE: 1, EMS: 2 }
    }
  },
  {
    id: 'sse3',
    question: "How passionate are you about environmental sustainability and renewable energy?",
    description: "From 1 (Not interested) to 5 (Extremely passionate)",
    scores: {
      1: { CS: 2, BDA: 2, RESE: 0, TPM: 1, GE: 2, EMS: 2 },
      2: { CS: 2, BDA: 2, RESE: 1, TPM: 2, GE: 2, EMS: 2 },
      3: { CS: 1, BDA: 1, RESE: 3, TPM: 3, GE: 2, EMS: 2 },
      4: { CS: 0, BDA: 1, RESE: 4, TPM: 3, GE: 2, EMS: 2 },
      5: { CS: 0, BDA: 0, RESE: 5, TPM: 3, GE: 2, EMS: 1 }
    }
  },
  {
    id: 'sse4',
    question: "How interested are you in urban planning and development?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 2, BDA: 2, RESE: 2, TPM: 0, GE: 2, EMS: 2 },
      2: { CS: 2, BDA: 2, RESE: 2, TPM: 1, GE: 2, EMS: 2 },
      3: { CS: 1, BDA: 1, RESE: 2, TPM: 3, GE: 2, EMS: 2 },
      4: { CS: 0, BDA: 1, RESE: 2, TPM: 4, GE: 2, EMS: 3 },
      5: { CS: 0, BDA: 0, RESE: 2, TPM: 5, GE: 2, EMS: 2 }
    }
  },
  {
    id: 'sse5',
    question: "How much do you enjoy managing and leading projects?",
    description: "From 1 (Prefer working alone) to 5 (Love leading teams)",
    scores: {
      1: { CS: 3, BDA: 3, RESE: 3, TPM: 1, GE: 2, EMS: 0 },
      2: { CS: 2, BDA: 2, RESE: 2, TPM: 2, GE: 2, EMS: 1 },
      3: { CS: 1, BDA: 1, RESE: 2, TPM: 3, GE: 3, EMS: 3 },
      4: { CS: 1, BDA: 1, RESE: 1, TPM: 3, GE: 3, EMS: 4 },
      5: { CS: 0, BDA: 0, RESE: 1, TPM: 4, GE: 2, EMS: 5 }
    }
  },
  {
    id: 'sse6',
    question: "How comfortable are you with advanced mathematics?",
    description: "From 1 (Basic math only) to 5 (Love complex mathematics)",
    scores: {
      1: { CS: 1, BDA: 0, RESE: 0, TPM: 2, GE: 1, EMS: 2 },
      2: { CS: 2, BDA: 1, RESE: 1, TPM: 2, GE: 2, EMS: 2 },
      3: { CS: 3, BDA: 3, RESE: 3, TPM: 2, GE: 3, EMS: 2 },
      4: { CS: 4, BDA: 4, RESE: 4, TPM: 2, GE: 3, EMS: 2 },
      5: { CS: 5, BDA: 5, RESE: 4, TPM: 2, GE: 3, EMS: 2 }
    }
  },
  {
    id: 'sse7',
    question: "How interested are you in artificial intelligence and machine learning?",
    description: "From 1 (Not interested) to 5 (Extremely interested)",
    scores: {
      1: { CS: 1, BDA: 0, RESE: 2, TPM: 2, GE: 2, EMS: 2 },
      2: { CS: 2, BDA: 1, RESE: 2, TPM: 2, GE: 2, EMS: 2 },
      3: { CS: 3, BDA: 3, RESE: 1, TPM: 1, GE: 2, EMS: 2 },
      4: { CS: 4, BDA: 4, RESE: 0, TPM: 0, GE: 1, EMS: 1 },
      5: { CS: 5, BDA: 5, RESE: 0, TPM: 0, GE: 1, EMS: 1 }
    }
  },
  {
    id: 'sse8',
    question: "How much do you enjoy solving complex technical problems?",
    description: "From 1 (Prefer simple solutions) to 5 (Love complex challenges)",
    scores: {
      1: { CS: 0, BDA: 0, RESE: 1, TPM: 2, GE: 1, EMS: 2 },
      2: { CS: 1, BDA: 1, RESE: 2, TPM: 2, GE: 2, EMS: 2 },
      3: { CS: 3, BDA: 3, RESE: 3, TPM: 2, GE: 3, EMS: 2 },
      4: { CS: 4, BDA: 4, RESE: 4, TPM: 2, GE: 4, EMS: 3 },
      5: { CS: 5, BDA: 4, RESE: 5, TPM: 2, GE: 5, EMS: 3 }
    }
  },
  {
    id: 'sse9',
    question: "How interested are you in business and management aspects of engineering?",
    description: "From 1 (Pure technical focus) to 5 (Strong business interest)",
    scores: {
      1: { CS: 3, BDA: 3, RESE: 3, TPM: 2, GE: 3, EMS: 0 },
      2: { CS: 2, BDA: 2, RESE: 2, TPM: 2, GE: 3, EMS: 1 },
      3: { CS: 1, BDA: 2, RESE: 2, TPM: 3, GE: 3, EMS: 3 },
      4: { CS: 1, BDA: 2, RESE: 1, TPM: 3, GE: 2, EMS: 4 },
      5: { CS: 0, BDA: 1, RESE: 1, TPM: 3, GE: 2, EMS: 5 }
    }
  },
  {
    id: 'sse10',
    question: "How much do you value having a broad engineering knowledge vs. specializing in one area?",
    description: "From 1 (Highly specialized) to 5 (Broad knowledge)",
    scores: {
      1: { CS: 5, BDA: 5, RESE: 5, TPM: 4, GE: 0, EMS: 2 },
      2: { CS: 4, BDA: 4, RESE: 4, TPM: 3, GE: 1, EMS: 2 },
      3: { CS: 2, BDA: 2, RESE: 2, TPM: 3, GE: 3, EMS: 3 },
      4: { CS: 1, BDA: 1, RESE: 1, TPM: 2, GE: 4, EMS: 4 },
      5: { CS: 0, BDA: 0, RESE: 0, TPM: 2, GE: 5, EMS: 4 }
    }
  }
];

export const sbaMinorQuestions = [
  {
    id: 'minor1',
    question: "How interested are you in computer programming and software development?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 3, MATH: 1, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      3: { CS: 4, MATH: 2, IS: 1, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 1, PL: 0 },
      4: { CS: 5, MATH: 2, IS: 1, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 1, PL: 0 },
      5: { CS: 5, MATH: 3, IS: 1, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 2, PL: 0 }
    }
  },
  {
    id: 'minor2',
    question: "How much do you enjoy mathematical and statistical analysis?",
    description: "From 1 (Dislike) to 5 (Love it)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 1, MATH: 3, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      3: { CS: 2, MATH: 4, IS: 1, HRD: 0, OS: 1, COMM: 0, GS: 1, AS: 0, ENG: 1, PL: 1 },
      4: { CS: 3, MATH: 5, IS: 1, HRD: 0, OS: 1, COMM: 0, GS: 1, AS: 0, ENG: 1, PL: 1 },
      5: { CS: 3, MATH: 5, IS: 2, HRD: 0, OS: 1, COMM: 0, GS: 1, AS: 0, ENG: 2, PL: 1 }
    }
  },
  {
    id: 'minor3',
    question: "How interested are you in international business and global markets?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 0, MATH: 0, IS: 3, HRD: 0, OS: 1, COMM: 1, GS: 3, AS: 3, ENG: 1, PL: 1 },
      3: { CS: 0, MATH: 1, IS: 4, HRD: 1, OS: 2, COMM: 2, GS: 4, AS: 4, ENG: 1, PL: 2 },
      4: { CS: 0, MATH: 1, IS: 5, HRD: 1, OS: 2, COMM: 2, GS: 5, AS: 5, ENG: 2, PL: 2 },
      5: { CS: 0, MATH: 2, IS: 5, HRD: 2, OS: 3, COMM: 3, GS: 5, AS: 5, ENG: 2, PL: 3 }
    }
  },
  {
    id: 'minor4',
    question: "How interested are you in human behavior and psychology?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 0, MATH: 0, IS: 1, HRD: 3, OS: 3, COMM: 2, GS: 1, AS: 1, ENG: 1, PL: 3 },
      3: { CS: 0, MATH: 0, IS: 2, HRD: 4, OS: 4, COMM: 3, GS: 2, AS: 2, ENG: 2, PL: 4 },
      4: { CS: 0, MATH: 0, IS: 2, HRD: 5, OS: 5, COMM: 3, GS: 2, AS: 2, ENG: 2, PL: 5 },
      5: { CS: 0, MATH: 0, IS: 3, HRD: 5, OS: 5, COMM: 4, GS: 3, AS: 3, ENG: 3, PL: 5 }
    }
  },
  {
    id: 'minor5',
    question: "How interested are you in communication and media studies?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 0, MATH: 0, IS: 1, HRD: 1, OS: 1, COMM: 3, GS: 1, AS: 1, ENG: 3, PL: 1 },
      3: { CS: 0, MATH: 0, IS: 2, HRD: 2, OS: 2, COMM: 4, GS: 2, AS: 2, ENG: 4, PL: 2 },
      4: { CS: 0, MATH: 0, IS: 2, HRD: 2, OS: 2, COMM: 5, GS: 2, AS: 2, ENG: 5, PL: 2 },
      5: { CS: 0, MATH: 0, IS: 3, HRD: 3, OS: 3, COMM: 5, GS: 3, AS: 3, ENG: 5, PL: 3 }
    }
  },
  {
    id: 'minor6',
    question: "How interested are you in organizational leadership?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 0, MATH: 0, IS: 1, HRD: 3, OS: 3, COMM: 1, GS: 1, AS: 1, ENG: 1, PL: 3 },
      3: { CS: 0, MATH: 0, IS: 2, HRD: 4, OS: 4, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 4 },
      4: { CS: 0, MATH: 0, IS: 2, HRD: 5, OS: 5, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 5 },
      5: { CS: 0, MATH: 0, IS: 3, HRD: 5, OS: 5, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 5 }
    }
  },
  {
    id: 'minor7',
    question: "How interested are you in global affairs and cultural studies?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 0, MATH: 0, IS: 3, HRD: 1, OS: 1, COMM: 2, GS: 3, AS: 3, ENG: 2, PL: 1 },
      3: { CS: 0, MATH: 0, IS: 4, HRD: 2, OS: 2, COMM: 3, GS: 4, AS: 4, ENG: 3, PL: 2 },
      4: { CS: 0, MATH: 0, IS: 5, HRD: 2, OS: 2, COMM: 3, GS: 5, AS: 5, ENG: 3, PL: 2 },
      5: { CS: 0, MATH: 0, IS: 5, HRD: 3, OS: 3, COMM: 4, GS: 5, AS: 5, ENG: 4, PL: 3 }
    }
  },
  {
    id: 'minor8',
    question: "How interested are you in data analysis and research methods?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 3, MATH: 3, IS: 1, HRD: 1, OS: 1, COMM: 1, GS: 1, AS: 1, ENG: 1, PL: 1 },
      3: { CS: 4, MATH: 4, IS: 2, HRD: 2, OS: 2, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 2 },
      4: { CS: 5, MATH: 5, IS: 2, HRD: 2, OS: 2, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 2 },
      5: { CS: 5, MATH: 5, IS: 3, HRD: 3, OS: 3, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 3 }
    }
  },
  {
    id: 'minor9',
    question: "How interested are you in project management?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 1, MATH: 1, IS: 2, HRD: 3, OS: 3, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 3 },
      3: { CS: 2, MATH: 2, IS: 3, HRD: 4, OS: 4, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 4 },
      4: { CS: 2, MATH: 2, IS: 3, HRD: 5, OS: 5, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 5 },
      5: { CS: 3, MATH: 3, IS: 4, HRD: 5, OS: 5, COMM: 4, GS: 4, AS: 4, ENG: 4, PL: 5 }
    }
  },
  {
    id: 'minor10',
    question: "How interested are you in business strategy and innovation?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 },
      2: { CS: 1, MATH: 1, IS: 3, HRD: 3, OS: 3, COMM: 2, GS: 3, AS: 3, ENG: 2, PL: 3 },
      3: { CS: 2, MATH: 2, IS: 4, HRD: 4, OS: 4, COMM: 3, GS: 4, AS: 4, ENG: 3, PL: 4 },
      4: { CS: 2, MATH: 2, IS: 5, HRD: 5, OS: 5, COMM: 3, GS: 5, AS: 5, ENG: 3, PL: 5 },
      5: { CS: 3, MATH: 3, IS: 5, HRD: 5, OS: 5, COMM: 4, GS: 5, AS: 5, ENG: 4, PL: 5 }
    }
  },
  {
    id: 'minor11',
    question: "How do you prefer to solve problems?",
    description: "From 1 (Intuitive/Creative) to 5 (Analytical/Systematic)",
    scores: {
      1: { CS: 0, MATH: 0, IS: 2, HRD: 3, OS: 2, COMM: 4, GS: 2, AS: 3, ENG: 4, PL: 2 },
      2: { CS: 1, MATH: 1, IS: 3, HRD: 3, OS: 3, COMM: 4, GS: 3, AS: 3, ENG: 4, PL: 3 },
      3: { CS: 3, MATH: 3, IS: 3, HRD: 3, OS: 3, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 3 },
      4: { CS: 4, MATH: 4, IS: 2, HRD: 2, OS: 3, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 3 },
      5: { CS: 5, MATH: 5, IS: 1, HRD: 2, OS: 2, COMM: 1, GS: 2, AS: 2, ENG: 1, PL: 2 }
    }
  },
  {
    id: 'minor12',
    question: "How do you prefer to work?",
    description: "From 1 (Independently) to 5 (In teams)",
    scores: {
      1: { CS: 4, MATH: 4, IS: 1, HRD: 1, OS: 1, COMM: 1, GS: 2, AS: 2, ENG: 2, PL: 1 },
      2: { CS: 3, MATH: 3, IS: 2, HRD: 2, OS: 2, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 2 },
      3: { CS: 2, MATH: 2, IS: 3, HRD: 3, OS: 3, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 3 },
      4: { CS: 1, MATH: 1, IS: 4, HRD: 4, OS: 4, COMM: 4, GS: 4, AS: 4, ENG: 4, PL: 4 },
      5: { CS: 1, MATH: 1, IS: 5, HRD: 5, OS: 5, COMM: 5, GS: 5, AS: 5, ENG: 5, PL: 5 }
    }
  },
  {
    id: 'minor13',
    question: "How comfortable are you with ambiguity and uncertainty?",
    description: "From 1 (Prefer clear structure) to 5 (Comfortable with uncertainty)",
    scores: {
      1: { CS: 4, MATH: 5, IS: 1, HRD: 2, OS: 2, COMM: 1, GS: 1, AS: 1, ENG: 2, PL: 2 },
      2: { CS: 3, MATH: 4, IS: 2, HRD: 2, OS: 3, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 3 },
      3: { CS: 2, MATH: 3, IS: 3, HRD: 3, OS: 3, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 3 },
      4: { CS: 1, MATH: 2, IS: 4, HRD: 4, OS: 4, COMM: 4, GS: 4, AS: 4, ENG: 4, PL: 4 },
      5: { CS: 1, MATH: 1, IS: 5, HRD: 5, OS: 4, COMM: 5, GS: 5, AS: 5, ENG: 5, PL: 4 }
    }
  },
  {
    id: 'minor14',
    question: "How do you prefer to learn new concepts?",
    description: "From 1 (Through practice) to 5 (Through theory)",
    scores: {
      1: { CS: 2, MATH: 1, IS: 3, HRD: 4, OS: 4, COMM: 4, GS: 3, AS: 3, ENG: 4, PL: 4 },
      2: { CS: 3, MATH: 2, IS: 3, HRD: 4, OS: 4, COMM: 4, GS: 3, AS: 3, ENG: 4, PL: 4 },
      3: { CS: 3, MATH: 3, IS: 3, HRD: 3, OS: 3, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 3 },
      4: { CS: 4, MATH: 4, IS: 2, HRD: 2, OS: 2, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 2 },
      5: { CS: 5, MATH: 5, IS: 1, HRD: 1, OS: 1, COMM: 1, GS: 2, AS: 2, ENG: 1, PL: 1 }
    }
  },
  {
    id: 'minor15',
    question: "What's your preferred pace of work?",
    description: "From 1 (Steady/Methodical) to 5 (Fast-paced/Dynamic)",
    scores: {
      1: { CS: 3, MATH: 4, IS: 1, HRD: 2, OS: 2, COMM: 1, GS: 2, AS: 2, ENG: 1, PL: 2 },
      2: { CS: 3, MATH: 3, IS: 2, HRD: 2, OS: 2, COMM: 2, GS: 2, AS: 2, ENG: 2, PL: 2 },
      3: { CS: 3, MATH: 2, IS: 3, HRD: 3, OS: 3, COMM: 3, GS: 3, AS: 3, ENG: 3, PL: 3 },
      4: { CS: 2, MATH: 1, IS: 4, HRD: 4, OS: 4, COMM: 4, GS: 4, AS: 4, ENG: 4, PL: 4 },
      5: { CS: 1, MATH: 1, IS: 5, HRD: 5, OS: 5, COMM: 5, GS: 5, AS: 5, ENG: 5, PL: 5 }
    }
  }
];

export const minorOptions = {
  CS: {
    name: "Minor in Computer Science",
    description: "Perfect for business students interested in technology and software development."
  },
  MATH: {
    name: "Minor in Mathematics",
    description: "Ideal for those focusing on quantitative analysis and financial modeling."
  },
  IS: {
    name: "Minor in International Studies",
    description: "Great for students interested in global business and cross-cultural management."
  },
  HRD: {
    name: "Minor in Human Resource Development",
    description: "Focuses on people management and organizational development."
  },
  // ... add all other minors
};

export const majorDescriptions = {
  CS: {
    name: "Bachelor of Science in Computer Science",
    description: "Perfect for those passionate about programming, software development, and computing systems. This program focuses on algorithms, software engineering, and computer systems.",
    careers: ["Software Developer", "Systems Architect", "Application Developer", "DevOps Engineer"],
    keySkills: ["Programming", "Software Design", "Problem Solving", "System Architecture"]
  },
  BDA: {
    name: "Bachelor of Science in Big Data Analytics",
    description: "Ideal for those interested in analyzing large datasets and extracting meaningful insights. Combines statistics, programming, and business analytics.",
    careers: ["Data Scientist", "Data Analyst", "Business Intelligence Analyst", "Analytics Consultant"],
    keySkills: ["Data Analysis", "Statistical Modeling", "Machine Learning", "Data Visualization"]
  },
  RESE: {
    name: "Bachelor of Science in Renewable Energy Systems Engineering",
    description: "For students passionate about sustainable energy solutions and environmental technology. Focuses on renewable energy systems and sustainable engineering practices.",
    careers: ["Renewable Energy Engineer", "Sustainability Consultant", "Energy Systems Designer"],
    keySkills: ["Energy Systems", "Sustainability", "System Design", "Environmental Analysis"]
  },
  TPM: {
    name: "Bachelor of Science in Territorial Planning and Management",
    description: "Combines urban planning with environmental management. Perfect for those interested in sustainable development and urban infrastructure.",
    careers: ["Urban Planner", "Environmental Manager", "Development Consultant"],
    keySkills: ["Urban Planning", "Environmental Management", "GIS", "Project Planning"]
  },
  GE: {
    name: "Bachelor of Science in General Engineering",
    description: "Provides a broad foundation in engineering principles. Ideal for those wanting flexibility in their engineering career path.",
    careers: ["Project Engineer", "Systems Engineer", "Technical Consultant"],
    keySkills: ["Engineering Fundamentals", "Problem Solving", "Technical Design", "Project Management"]
  },
  EMS: {
    name: "Bachelor of Science in Engineering and Management Science",
    description: "Combines engineering principles with management skills. Perfect for those aiming for leadership roles in technical fields.",
    careers: ["Engineering Manager", "Technical Project Manager", "Operations Manager"],
    keySkills: ["Engineering", "Project Management", "Leadership", "Operations Management"]
  }
};

export const minorDescriptions = {
  CS: {
    name: "Minor in Computer Science",
    description: "Perfect for business students interested in technology and software development. Combines business acumen with programming skills.",
    keySkills: ["Programming", "Software Development", "Problem Solving", "Technical Analysis"],
    careers: ["Tech Entrepreneur", "Business Systems Analyst", "Product Manager", "Digital Transformation Consultant"]
  },
  MATH: {
    name: "Minor in Mathematics",
    description: "Ideal for students focusing on quantitative analysis and financial modeling. Strengthens analytical and problem-solving abilities.",
    keySkills: ["Mathematical Analysis", "Statistical Methods", "Quantitative Reasoning", "Problem Solving"],
    careers: ["Financial Analyst", "Data Analyst", "Risk Manager", "Quantitative Researcher"]
  },
  IS: {
    name: "Minor in International Studies",
    description: "Great for students interested in global business and cross-cultural management. Enhances understanding of international markets.",
    keySkills: ["Cross-cultural Communication", "Global Market Analysis", "International Relations", "Strategic Thinking"],
    careers: ["International Business Developer", "Global Market Analyst", "Trade Specialist", "Cultural Liaison Officer"]
  },
  HRD: {
    name: "Minor in Human Resource Development",
    description: "Focuses on people management and organizational development. Perfect for future leaders and managers.",
    keySkills: ["People Management", "Organizational Development", "Training & Development", "Employee Relations"],
    careers: ["HR Manager", "Training Coordinator", "Organizational Development Specialist", "Talent Manager"]
  },
  OS: {
    name: "Minor in Organizational Studies",
    description: "Explores organizational behavior and management principles. Ideal for future business leaders.",
    keySkills: ["Leadership", "Organizational Behavior", "Change Management", "Strategic Planning"],
    careers: ["Management Consultant", "Business Analyst", "Operations Manager", "Change Management Specialist"]
  },
  COMM: {
    name: "Minor in Communication Studies",
    description: "Develops effective communication and media skills. Essential for business communication and marketing roles.",
    keySkills: ["Business Communication", "Media Relations", "Content Strategy", "Public Speaking"],
    careers: ["Communications Manager", "PR Specialist", "Marketing Coordinator", "Media Relations Manager"]
  },
  GS: {
    name: "Minor in Global Studies",
    description: "Focuses on global markets and international business environments. Perfect for students aiming for international careers.",
    keySkills: ["Global Business", "Cultural Awareness", "International Relations", "Market Analysis"],
    careers: ["Global Business Developer", "International Project Manager", "Cross-cultural Consultant", "Trade Analyst"]
  },
  AS: {
    name: "Minor in African Studies",
    description: "Specializes in African markets and business environments. Ideal for those interested in emerging markets.",
    keySkills: ["Regional Expertise", "Market Analysis", "Cultural Understanding", "Business Development"],
    careers: ["Regional Business Developer", "Market Entry Specialist", "Cultural Consultant", "Trade Relations Manager"]
  },
  ENG: {
    name: "Minor in English Studies",
    description: "Enhances business communication and writing skills. Valuable for international business and content creation.",
    keySkills: ["Business Writing", "Content Creation", "Communication", "Critical Analysis"],
    careers: ["Business Communication Specialist", "Content Manager", "Technical Writer", "Editorial Manager"]
  },
  PL: {
    name: "Minor in Professional Leadership",
    description: "Develops leadership and management capabilities. Essential for future business leaders and entrepreneurs.",
    keySkills: ["Leadership", "Strategic Planning", "Team Management", "Decision Making"],
    careers: ["Business Leader", "Project Manager", "Entrepreneurship", "Operations Director"]
  }
};

export const shssQuestions = [
  {
    id: 'shss1',
    question: "How interested are you in global politics and international relations?",
    description: "From 1 (Not interested) to 5 (Very passionate)",
    scores: {
      IS: { 1: 0, 2: 1, 3: 3, 4: 4, 5: 5 },
      CS: { 1: 1, 2: 2, 3: 2, 4: 1, 5: 1 },
      TPM: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      ESS: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 3 },
      HRD: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 }
    }
  },
  {
    id: 'shss2',
    question: "How much do you enjoy analyzing media and communication strategies?",
    description: "From 1 (Not at all) to 5 (Love it)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 2, 4: 3, 5: 3 },
      CS: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 },
      TPM: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      ESS: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      HRD: { 1: 2, 2: 2, 3: 3, 4: 3, 5: 3 }
    }
  },
  {
    id: 'shss3',
    question: "How passionate are you about environmental conservation and sustainability?",
    description: "From 1 (Not interested) to 5 (Very passionate)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 2, 4: 3, 5: 3 },
      CS: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      TPM: { 1: 2, 2: 2, 3: 3, 4: 4, 5: 4 },
      ESS: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 },
      HRD: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 }
    }
  },
  {
    id: 'shss4',
    question: "How interested are you in urban development and city planning?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2 },
      CS: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      TPM: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 },
      ESS: { 1: 2, 2: 2, 3: 3, 4: 3, 5: 4 },
      HRD: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 }
    }
  },
  {
    id: 'shss5',
    question: "How much do you enjoy working with and developing people?",
    description: "From 1 (Prefer working alone) to 5 (Love developing others)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 2, 4: 3, 5: 3 },
      CS: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 4 },
      TPM: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      ESS: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      HRD: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 }
    }
  },
  {
    id: 'shss6',
    question: "How interested are you in cultural studies and cross-cultural communication?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      IS: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 },
      CS: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 4 },
      TPM: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      ESS: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2 },
      HRD: { 1: 2, 2: 2, 3: 3, 4: 3, 5: 4 }
    }
  },
  {
    id: 'shss7',
    question: "How much do you care about social and environmental justice?",
    description: "From 1 (Not particularly) to 5 (Deeply passionate)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 4 },
      CS: { 1: 1, 2: 2, 3: 2, 4: 3, 5: 3 },
      TPM: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 4 },
      ESS: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 },
      HRD: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3 }
    }
  },
  {
    id: 'shss8',
    question: "How interested are you in organizational behavior and workplace dynamics?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      IS: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      CS: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3 },
      TPM: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2 },
      ESS: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 },
      HRD: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5 }
    }
  },
  {
    id: 'shss9',
    question: "How much do you enjoy analyzing public policy and governance?",
    description: "From 1 (Not at all) to 5 (Very much)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
      CS: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2 },
      TPM: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 4 },
      ESS: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3 },
      HRD: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2 }
    }
  },
  {
    id: 'shss10',
    question: "How interested are you in research and data analysis in social sciences?",
    description: "From 1 (Not interested) to 5 (Very interested)",
    scores: {
      IS: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 4 },
      CS: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3 },
      TPM: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3 },
      ESS: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 4 },
      HRD: { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3 }
    }
  }
];

export const shssMajorDescriptions = {
  IS: {
    name: "Bachelor of Arts in International Studies",
    description: "Perfect for those interested in global affairs, diplomacy, and cross-cultural understanding. This program focuses on international relations, politics, and cultural studies.",
    keySkills: ["Global Analysis", "Cross-cultural Communication", "Policy Analysis", "Research Methods"],
    careers: ["Diplomat", "International Development Officer", "Policy Analyst", "NGO Manager"]
  },
  CS: {
    name: "Bachelor of Arts in Communication Studies",
    description: "Ideal for creative minds interested in media, journalism, and strategic communication. Combines theoretical knowledge with practical media skills.",
    keySkills: ["Media Production", "Strategic Communication", "Content Creation", "Public Relations"],
    careers: ["Media Specialist", "Public Relations Manager", "Content Strategist", "Communications Director"]
  },
  TPM: {
    name: "Bachelor of Science in Territorial Planning and Management",
    description: "For those passionate about urban development and spatial planning. Focuses on sustainable urban development and territorial management.",
    keySkills: ["Urban Planning", "GIS", "Project Management", "Spatial Analysis"],
    careers: ["Urban Planner", "Development Manager", "GIS Specialist", "Regional Planning Consultant"]
  },
  ESS: {
    name: "Bachelor of Science in Environmental Studies & Sustainability",
    description: "Perfect for environmentally conscious individuals interested in sustainability and conservation. Combines natural and social sciences approaches.",
    keySkills: ["Environmental Analysis", "Sustainability Planning", "Research Methods", "Policy Development"],
    careers: ["Environmental Consultant", "Sustainability Manager", "Conservation Specialist", "Environmental Policy Analyst"]
  },
  HRD: {
    name: "Bachelor of Science in Human Resource Development",
    description: "Ideal for those interested in organizational development and employee growth. Focuses on workplace learning, training, and organizational behavior.",
    keySkills: ["Training & Development", "Organizational Development", "Performance Management", "Employee Relations"],
    careers: ["HR Manager", "Training Specialist", "Organizational Development Consultant", "Talent Development Manager"]
  }
};

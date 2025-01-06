export type School = 'SSE' | 'SHSS' | 'SBA';

export interface SchoolInfo {
  name: School;
  fullName: string;
  description: string;
}

export interface Major {
  name: string;
  school: School;
  description: string;
  careers: string[];
  keySkills: string[];
}

export interface StudentInfo {
  isStudent: boolean;
  academicYear?: 'freshman' | 'sophomore' | 'junior' | 'senior';
  currentMajor?: string;
  gpa?: number;
}

export interface QuizResults {
  schoolMatch: SchoolInfo;
  majorMatches: Major[];
  timestamp: string;
}

import { SchoolInfo, Major } from '../types';

export const schools: SchoolInfo[] = [
  {
    name: 'SSE',
    fullName: 'School of Science and Engineering',
    description: 'Perfect for analytical minds who enjoy solving complex problems through technology and scientific methods. This school offers programs in computer science, engineering, and data analytics.'
  },
  {
    name: 'SHSS',
    fullName: 'School of Humanities and Social Sciences',
    description: 'Ideal for those passionate about understanding society, human behavior, and global interactions. This school offers programs in communication, international studies, and human development.'
  },
  {
    name: 'SBA',
    fullName: 'School of Business Administration',
    description: 'Suited for those interested in business, management, and entrepreneurship. This school offers a comprehensive business administration program.'
  }
];

export const majors: Major[] = [
  {
    name: 'Computer Science',
    school: 'SSE',
    description: 'Focus on software development, algorithms, and computing systems.',
    careers: ['Software Developer', 'System Architect', 'Data Scientist'],
    keySkills: ['Programming', 'Problem Solving', 'Analytical Thinking']
  },
  {
    name: 'Renewable Energy Systems Engineering',
    school: 'SSE',
    description: 'Study sustainable energy solutions and green technologies.',
    careers: ['Energy Systems Engineer', 'Sustainability Consultant', 'Project Manager'],
    keySkills: ['Technical Design', 'Environmental Analysis', 'System Planning']
  },
  // ... add all other majors
];

export type ClassLevel = '5' | '6' | '7' | '8' | '9' | '10';

export interface ClassInfo {
  id: ClassLevel;
  numeric: number;
  bengaliName: string;
  badge: string;
  tagline: string;
  totalStudentsHelped: string;
}

export type SubjectCategory = 
  | 'bengali'
  | 'english'
  | 'mathematics'
  | 'science'
  | 'physical_science'
  | 'life_science'
  | 'history'
  | 'geography'
  | 'environment';

export interface Subject {
  id: string;
  classId: ClassLevel;
  code: SubjectCategory;
  nameBengali: string;
  nameEnglish: string;
  bookName: string;
  iconName: string;
  colorTheme: string;
  bgLight: string;
  totalChapters: number;
  totalNotes: number;
  totalSuggestions: number;
  totalPracticeSets: number;
}

export type ResourceType = 'note' | 'suggestion' | 'practice';

export interface QuestionItem {
  id: string;
  question: string;
  options?: string[];
  correctAnswer?: number | string;
  explanation: string;
  marks: number;
  type: 'mcq' | 'saq' | 'broad';
}

export interface ResourceItem {
  id: string;
  classId: ClassLevel;
  subjectId: string;
  subjectName: string;
  type: ResourceType;
  title: string;
  chapter: string;
  chapterNumber: number;
  readTime: string;
  difficulty?: 'সহজ' | 'মাঝারি' | 'গুরুত্বপূর্ণ' | 'ভেরি ইম্পর্ট্যান্ট' | string;
  summary: string;
  content: string; // rich formatted text/markdown-like
  importantFormulas?: string[];
  keyPoints?: string[];
  questions?: QuestionItem[];
  viewsCount: number;
  publishedDate: string;
  isTrending?: boolean;
  isNew?: boolean;
}

export interface UpcomingPost {
  id: string;
  title: string;
  classLevel: ClassLevel[];
  category: 'নতুন নোটস' | 'পরীক্ষা স্পেশাল' | 'সাজেশন আপডেট' | 'মডেল কোশ্চেন' | 'রুটিন ও গাইড';
  releaseDate: string;
  badge: string;
  description: string;
  author: string;
  authorRole: string;
  highlightPoints: string[];
  isPinned?: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  phoneOrEmail: string;
  studentClass: ClassLevel | 'other';
  subject: string;
  message: string;
  createdAt: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  quizTitle: string;
  classId: ClassLevel;
  subjectId: string;
  subjectName: string;
  score: number;
  totalMarks: number;
  percentage: number;
  timeSpentSeconds: number;
  completedAt: string;
  correctCount: number;
  wrongCount: number;
}

export interface StudentUser {
  id: string;
  name: string;
  email: string;
  classLevel: ClassLevel;
  enrolledSubjectIds: string[];
  savedNoteIds: string[];
  quizHistory: QuizAttempt[];
  targetGoal?: string;
  joinedDate: string;
}

export interface InteractiveQuiz {
  id: string;
  classId: ClassLevel;
  subjectId: string;
  subjectName: string;
  title: string;
  topic: string;
  difficulty: 'সহজ' | 'মাঝারি' | 'কঠিন' | 'গুরুত্বপূর্ণ';
  timeLimitMinutes: number;
  totalMarks: number;
  questions: QuestionItem[];
}

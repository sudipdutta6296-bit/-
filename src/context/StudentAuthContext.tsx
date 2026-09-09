import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StudentUser, QuizAttempt, ClassLevel } from '../types';

interface AuthContextType {
  currentUser: StudentUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => { success: boolean; message?: string };
  register: (name: string, email: string, password: string, classLevel: ClassLevel, enrolledSubjectIds: string[]) => { success: boolean; message?: string };
  logout: () => void;
  loginAsDemo: (demoType: 'rahul' | 'sneha') => void;
  toggleSaveFavorite: (noteId: string) => void;
  isNoteFavorite: (noteId: string) => boolean;
  recordQuizAttempt: (attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => void;
  updateClassLevel: (classLevel: ClassLevel) => void;
  updateEnrolledSubjects: (subjectIds: string[]) => void;
  updateTargetGoal: (goal: string) => void;
}

const DEMO_USERS: Record<string, StudentUser> = {
  rahul: {
    id: 'user-demo-rahul',
    name: 'রাহুল ব্যানার্জী',
    email: 'rahul@shiksha.in',
    classLevel: '10',
    enrolledSubjectIds: ['c10-physci', 'c10-math', 'c10-lifesci', 'c10-bengali'],
    savedNoteIds: ['res-c10-phys-01', 'res-c10-math-02', 'res-c10-ben-02'],
    quizHistory: [
      {
        id: 'qa-1',
        quizId: 'quiz-c10-phys-01',
        quizTitle: 'পরিবেশের জন্য ভাবনা ও ওজোন স্তর টেস্ট',
        classId: '10',
        subjectId: 'c10-physci',
        subjectName: 'ভৌত বিজ্ঞান',
        score: 5,
        totalMarks: 5,
        percentage: 100,
        timeSpentSeconds: 165,
        completedAt: '২০২৬-০৩-০৭',
        correctCount: 5,
        wrongCount: 0,
      },
      {
        id: 'qa-2',
        quizId: 'quiz-c10-math-01',
        quizTitle: 'একচলবিশিষ্ট দ্বিঘাত সমীকরণ স্পেশাল মক টেস্ট',
        classId: '10',
        subjectId: 'c10-math',
        subjectName: 'গণিত',
        score: 4,
        totalMarks: 5,
        percentage: 80,
        timeSpentSeconds: 240,
        completedAt: '২০২৬-০৩-০৬',
        correctCount: 4,
        wrongCount: 1,
      },
    ],
    targetGoal: 'মাধ্যমিক ২০২৬ পরীক্ষায় ৯০% এর বেশি নম্বর ও স্টার মার্কস অর্জন',
    joinedDate: '২০২৬-০১-১৫',
  },
  sneha: {
    id: 'user-demo-sneha',
    name: 'স্নেহা রায়',
    email: 'sneha@shiksha.in',
    classLevel: '8',
    enrolledSubjectIds: ['c8-science', 'c8-mathematics', 'c8-bengali'],
    savedNoteIds: ['res-c8-sci-01'],
    quizHistory: [
      {
        id: 'qa-3',
        quizId: 'quiz-c8-sci-01',
        quizTitle: 'বল ও চাপ এবং তরলের প্রবাহী ধর্ম কুইজ',
        classId: '8',
        subjectId: 'c8-science',
        subjectName: 'পরিবেশ ও বিজ্ঞান',
        score: 5,
        totalMarks: 5,
        percentage: 100,
        timeSpentSeconds: 140,
        completedAt: '২০২৬-০৩-০৫',
        correctCount: 5,
        wrongCount: 0,
      },
    ],
    targetGoal: 'NMMS স্কলারশিপ পরীক্ষায় সাফল্য এবং বিজ্ঞান বিষয়ে পূর্ণ প্রস্তুতি',
    joinedDate: '২০২৬-০২-০১',
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function StudentAuthProvider({ children }: { children: ReactNode }) {
  // Initialize current user from localStorage or start with Demo Rahul for a rich, instantly interactive experience
  const [currentUser, setCurrentUser] = useState<StudentUser | null>(() => {
    try {
      const saved = localStorage.getItem('shiksha_current_student');
      if (saved) {
        return JSON.parse(saved);
      }
      // Default to Rahul for rich initial demonstration
      return DEMO_USERS.rahul;
    } catch {
      return DEMO_USERS.rahul;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('shiksha_current_student', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('shiksha_current_student');
      }
    } catch (e) {
      console.error('Failed to save student user to localStorage', e);
    }
  }, [currentUser]);

  // Login handler
  const login = (email: string, password: string): { success: boolean; message?: string } => {
    const trimmedEmail = email.trim().toLowerCase();
    
    // Check demo users
    if (trimmedEmail === 'rahul@shiksha.in') {
      setCurrentUser(DEMO_USERS.rahul);
      return { success: true };
    }
    if (trimmedEmail === 'sneha@shiksha.in') {
      setCurrentUser(DEMO_USERS.sneha);
      return { success: true };
    }

    // Check stored users
    try {
      const stored = localStorage.getItem('shiksha_registered_students');
      const users: Array<{ user: StudentUser; pass: string }> = stored ? JSON.parse(stored) : [];
      const match = users.find((u) => u.user.email.toLowerCase() === trimmedEmail);
      
      if (!match) {
        return { success: false, message: 'প্রদত্ত ইমেইলটির কোনো একাউন্ট পাওয়া যায়নি। দয়া করে সঠিক ইমেইল দিন বা নতুন রেজিস্ট্রেশন করুন।' };
      }
      if (match.pass !== password) {
        return { success: false, message: 'ভুল পাসওয়ার্ড। দয়া করে পুনরায় চেষ্টা করুন।' };
      }

      setCurrentUser(match.user);
      return { success: true };
    } catch {
      return { success: false, message: 'লগইন করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।' };
    }
  };

  // Register handler
  const register = (
    name: string, 
    email: string, 
    password: string, 
    classLevel: ClassLevel, 
    enrolledSubjectIds: string[]
  ): { success: boolean; message?: string } => {
    if (!name.trim() || !email.trim() || !password) {
      return { success: false, message: 'নাম, ইমেইল এবং পাসওয়ার্ড আবশ্যক।' };
    }

    const trimmedEmail = email.trim().toLowerCase();

    try {
      const stored = localStorage.getItem('shiksha_registered_students');
      const users: Array<{ user: StudentUser; pass: string }> = stored ? JSON.parse(stored) : [];
      
      if (users.some((u) => u.user.email.toLowerCase() === trimmedEmail) || trimmedEmail === 'rahul@shiksha.in' || trimmedEmail === 'sneha@shiksha.in') {
        return { success: false, message: 'এই ইমেইলটি দিয়ে ইতিমধ্যে একাউন্ট তৈরি করা আছে। লগইন করুন।' };
      }

      const newUser: StudentUser = {
        id: `user-${Date.now()}`,
        name: name.trim(),
        email: trimmedEmail,
        classLevel,
        enrolledSubjectIds: enrolledSubjectIds.length > 0 ? enrolledSubjectIds : ['c10-bengali', 'c10-math'],
        savedNoteIds: [],
        quizHistory: [],
        targetGoal: `ক্লাস ${classLevel} পরীক্ষায় সর্বোচ্চ নম্বর ও সুদৃঢ় প্রস্তুতি`,
        joinedDate: new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' }),
      };

      users.push({ user: newUser, pass: password });
      localStorage.setItem('shiksha_registered_students', JSON.stringify(users));
      setCurrentUser(newUser);

      return { success: true };
    } catch {
      return { success: false, message: 'রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।' };
    }
  };

  // Logout handler
  const logout = () => {
    setCurrentUser(null);
  };

  // Switch demo account
  const loginAsDemo = (demoType: 'rahul' | 'sneha') => {
    setCurrentUser(DEMO_USERS[demoType]);
  };

  // Save/Unsave favorite note
  const toggleSaveFavorite = (noteId: string) => {
    if (!currentUser) return;
    const isSaved = currentUser.savedNoteIds.includes(noteId);
    const updatedNotes = isSaved
      ? currentUser.savedNoteIds.filter((id) => id !== noteId)
      : [...currentUser.savedNoteIds, noteId];

    setCurrentUser({
      ...currentUser,
      savedNoteIds: updatedNotes,
    });
  };

  const isNoteFavorite = (noteId: string): boolean => {
    return currentUser ? currentUser.savedNoteIds.includes(noteId) : false;
  };

  // Record quiz attempt to student progress history
  const recordQuizAttempt = (attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => {
    if (!currentUser) return;

    const newAttempt: QuizAttempt = {
      ...attempt,
      id: `qa-${Date.now()}`,
      completedAt: new Date().toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    };

    setCurrentUser({
      ...currentUser,
      quizHistory: [newAttempt, ...currentUser.quizHistory],
    });
  };

  // Update target class
  const updateClassLevel = (newClass: ClassLevel) => {
    if (!currentUser) return;
    setCurrentUser({
      ...currentUser,
      classLevel: newClass,
    });
  };

  // Update enrolled subjects
  const updateEnrolledSubjects = (subjectIds: string[]) => {
    if (!currentUser) return;
    setCurrentUser({
      ...currentUser,
      enrolledSubjectIds: subjectIds,
    });
  };

  // Update study goal
  const updateTargetGoal = (goal: string) => {
    if (!currentUser) return;
    setCurrentUser({
      ...currentUser,
      targetGoal: goal,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        register,
        logout,
        loginAsDemo,
        toggleSaveFavorite,
        isNoteFavorite,
        recordQuizAttempt,
        updateClassLevel,
        updateEnrolledSubjects,
        updateTargetGoal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useStudentAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useStudentAuth must be used within a StudentAuthProvider');
  }
  return context;
}

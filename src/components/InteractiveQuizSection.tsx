import { useState, useMemo } from 'react';
import { 
  Award, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  Filter,
  Flame,
  Search,
  Check
} from 'lucide-react';
import { ClassLevel } from '../types';
import { INTERACTIVE_QUIZZES } from '../data/interactiveQuizzesData';
import { CLASSES_LIST } from '../data/curriculumData';
import { useStudentAuth } from '../context/StudentAuthContext';

interface InteractiveQuizSectionProps {
  onStartQuiz: (quizId: string) => void;
  selectedClass?: ClassLevel;
  onClassChange?: (cls: ClassLevel) => void;
}

export default function InteractiveQuizSection({
  onStartQuiz,
  selectedClass,
  onClassChange,
}: InteractiveQuizSectionProps) {
  const { currentUser } = useStudentAuth();
  const [filterClass, setFilterClass] = useState<ClassLevel | 'all'>(selectedClass || 'all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Update filterClass if parent changes selectedClass
  useState(() => {
    if (selectedClass) {
      setFilterClass(selectedClass);
    }
  });

  // Unique subjects from quizzes
  const availableSubjects = useMemo(() => {
    const set = new Set<string>();
    INTERACTIVE_QUIZZES.forEach((q) => set.add(q.subjectName));
    return Array.from(set);
  }, []);

  // Filtered quizzes
  const filteredQuizzes = useMemo(() => {
    return INTERACTIVE_QUIZZES.filter((q) => {
      const matchClass = filterClass === 'all' || q.classId === filterClass;
      const matchSubject = selectedSubject === 'all' || q.subjectName === selectedSubject;
      const matchSearch =
        !searchQuery.trim() ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.subjectName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchClass && matchSubject && matchSearch;
    });
  }, [filterClass, selectedSubject, searchQuery]);

  return (
    <section id="interactive-quiz-portal" className="py-12 bg-gradient-to-b from-slate-50 to-indigo-50/30 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>ইন্টারেক্টিভ বিষয়ভিত্তিক কুইজ ও সেলফ-অ্যাসেসমেন্ট</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif tracking-tight">
            ক্লাস ৫ থেকে ১০: প্রতিটি বিষয়ের প্র্যাকটিস টেস্ট
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            তাৎক্ষণিক সঠিক উত্তরের পূর্ণাঙ্গ বাংলা ব্যাখ্যা, স্বয়ংক্রিয় স্কোরিং ও টাইমার। টেস্ট দেওয়ার পর ফলাফল সরাসরি আপনার স্টুডেন্ট প্রোফাইলে সংরক্ষিত হবে।
          </p>
        </div>

        {/* Filter & Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          {/* Top Row: Class Pills */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              শ্রেণী অনুযায়ী বাছাই করুন:
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setFilterClass('all');
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filterClass === 'all'
                    ? 'bg-indigo-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                সব শ্রেণী (৫-১০)
              </button>
              {CLASSES_LIST.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setFilterClass(c.id);
                    if (onClassChange) onClassChange(c.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    filterClass === c.id
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ক্লাস {c.id}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Subject dropdown + search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
            {/* Subject selector */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-indigo-600" />
                <span>বিষয়:</span>
              </span>
              <button
                onClick={() => setSelectedSubject('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  selectedSubject === 'all'
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                সব বিষয়
              </button>
              {availableSubjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    selectedSubject === sub
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Quick search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="কুইজের নাম বা অধ্যায় অনুসন্ধান..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Quiz Cards Grid */}
        {filteredQuizzes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredQuizzes.map((quiz) => {
              // Check if logged in user already completed this quiz
              const pastAttempts = currentUser?.quizHistory.filter((q) => q.quizId === quiz.id) || [];
              const bestScore = pastAttempts.length > 0
                ? Math.max(...pastAttempts.map((a) => a.score))
                : null;

              return (
                <div
                  key={quiz.id}
                  className="bg-white rounded-3xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all p-5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top badging */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                          ক্লাস {quiz.classId}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">
                          {quiz.subjectName}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {quiz.difficulty}
                      </span>
                    </div>

                    {/* Title & Topic */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                      {quiz.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {quiz.topic}
                    </p>

                    {/* Details pill bar */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                        <span>{quiz.questions.length} টি প্রশ্ন</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-slate-400" />
                        <span>মোট {quiz.totalMarks} নম্বর</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{quiz.timeLimitMinutes} মিনিট</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action / Previous Score */}
                  <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                    {bestScore !== null && (
                      <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200">
                        <span className="flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>আপনার পূর্ববর্তী সেরা স্কোর:</span>
                        </span>
                        <span className="font-black">{bestScore}/{quiz.totalMarks}</span>
                      </div>
                    )}

                    <button
                      onClick={() => onStartQuiz(quiz.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>{bestScore !== null ? 'পুনরায় কুইজ দিন' : 'কুইজ শুরু করুন'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-800">কোনো কুইজ মেলেনি</h4>
            <p className="text-xs text-slate-500">
              দয়া করে শ্রেণী বা বিষয়ের ফিল্টার পরিবর্তন করে পুনরায় দেখুন।
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

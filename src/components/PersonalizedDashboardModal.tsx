import { useState, useMemo } from 'react';
import {
  X,
  User,
  GraduationCap,
  BookMarked,
  Award,
  Clock,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  ArrowRight,
  LogOut,
  Settings,
  Flame,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Trash2
} from 'lucide-react';
import { useStudentAuth } from '../context/StudentAuthContext';
import { ClassLevel, ResourceItem, Subject } from '../types';
import { CLASSES_LIST, SUBJECTS_MAP, SAMPLE_RESOURCES } from '../data/curriculumData';
import { INTERACTIVE_QUIZZES } from '../data/interactiveQuizzesData';

interface PersonalizedDashboardModalProps {
  onClose: () => void;
  onSelectResource: (res: ResourceItem) => void;
  onStartQuiz: (quizId: string) => void;
  onSelectSubjectInExplorer: (classId: ClassLevel, subjectId: string) => void;
  onOpenAuthModal: () => void;
}

export default function PersonalizedDashboardModal({
  onClose,
  onSelectResource,
  onStartQuiz,
  onSelectSubjectInExplorer,
  onOpenAuthModal,
}: PersonalizedDashboardModalProps) {
  const {
    currentUser,
    logout,
    toggleSaveFavorite,
    updateClassLevel,
    updateEnrolledSubjects,
    updateTargetGoal,
  } = useStudentAuth();

  const [activeTab, setActiveTab] = useState<'subjects' | 'favorites' | 'quizzes' | 'settings'>('subjects');
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalText, setGoalText] = useState(currentUser?.targetGoal || '');

  if (!currentUser) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
        <div className="bg-white max-w-md w-full rounded-3xl p-6 text-center space-y-4 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mx-auto">
            <User className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">লগইন প্রয়োজন</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            আপনার ব্যক্তিগত ড্যাশবোর্ড, সংরক্ষিত প্রিয় নোটস ও কুইজ অগ্রগতি দেখতে দয়া করে আপনার স্টুডেন্ট একাউন্টে লগইন করুন।
          </p>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenAuthModal();
              }}
              className="flex-1 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
            >
              লগইন / রেজিস্টার করুন
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      </div>
    );
  }

  const studentClassInfo = CLASSES_LIST.find((c) => c.id === currentUser.classLevel) || CLASSES_LIST[5];
  const allClassSubjects = SUBJECTS_MAP[currentUser.classLevel] || [];

  // Enrolled subjects for this student
  const enrolledSubjects = useMemo(() => {
    if (!currentUser.enrolledSubjectIds || currentUser.enrolledSubjectIds.length === 0) {
      return allClassSubjects;
    }
    return allClassSubjects.filter((s) => currentUser.enrolledSubjectIds.includes(s.id));
  }, [allClassSubjects, currentUser.enrolledSubjectIds]);

  // Saved favorite resources
  const savedResources = useMemo(() => {
    return SAMPLE_RESOURCES.filter((r) => currentUser.savedNoteIds.includes(r.id));
  }, [currentUser.savedNoteIds]);

  // Stats calculation
  const totalQuizzesTaken = currentUser.quizHistory.length;
  const averagePercentage = totalQuizzesTaken > 0
    ? Math.round(
        currentUser.quizHistory.reduce((acc, q) => acc + q.percentage, 0) / totalQuizzesTaken
      )
    : 0;

  const handleSaveGoal = () => {
    updateTargetGoal(goalText);
    setEditingGoal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative bg-slate-50 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Profile Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            title="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-indigo-950 font-black text-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-bold font-serif">{currentUser.name}</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                    {studentClassInfo.bengaliName}
                  </span>
                </div>
                <p className="text-xs text-indigo-200 mt-0.5">{currentUser.email} • সদস্য হওয়ার তারিখ: {currentUser.joinedDate}</p>

                {/* Target Goal Pill */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-amber-300 flex items-center gap-1 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
                    <Sparkles className="w-3 h-3" />
                    <span>লক্ষ্য: {currentUser.targetGoal || 'ক্লাস টপার হওয়া ও সুদৃঢ় প্রস্তুতি'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-rose-500/20 text-slate-300 hover:text-rose-200 border border-white/10 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>লগআউট</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="text-xs text-indigo-200 font-medium flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>কুইজ সম্পন্ন</span>
              </div>
              <div className="text-xl font-black text-white mt-1">
                {totalQuizzesTaken} টি
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="text-xs text-indigo-200 font-medium flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>গড় সাফল্য</span>
              </div>
              <div className="text-xl font-black text-emerald-300 mt-1">
                {averagePercentage}%
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="text-xs text-indigo-200 font-medium flex items-center gap-1">
                <BookMarked className="w-3.5 h-3.5 text-blue-400" />
                <span>প্রিয় নোটস</span>
              </div>
              <div className="text-xl font-black text-white mt-1">
                {currentUser.savedNoteIds.length} টি
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="text-xs text-indigo-200 font-medium flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                <span>ফোকাস বিষয়</span>
              </div>
              <div className="text-xl font-black text-white mt-1">
                {enrolledSubjects.length} টি
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-slate-200 px-6 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('subjects')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'subjects'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>আমার বিষয়সমূহ ও প্রস্তুতি ({enrolledSubjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'favorites'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>সংরক্ষিত প্রিয় নোটস ({savedResources.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quizzes')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'quizzes'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>কুইজ অগ্রগতি ট্র্যাকার ({currentUser.quizHistory.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'settings'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>স্টাডি প্রেফারেন্স</span>
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {/* ================= TAB 1: MY SUBJECTS ================= */}
          {activeTab === 'subjects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {studentClassInfo.bengaliName} - আপনার ফোকাস পাঠ্য বিষয়সমূহ
                  </h3>
                  <p className="text-xs text-slate-500">
                    নির্দিষ্ট বিষয়ের নোটস পড়তে বা তাৎক্ষণিক কুইজ দিয়ে বিষয়ভিত্তিক দুর্বলতা যাচাই করুন
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {enrolledSubjects.map((sub) => {
                  // Count quizzes taken in this subject
                  const subjectQuizzes = currentUser.quizHistory.filter(
                    (q) => q.subjectId === sub.id || q.subjectName.includes(sub.nameBengali.split(' ')[0])
                  );
                  const subAvg = subjectQuizzes.length > 0
                    ? Math.round(subjectQuizzes.reduce((a, b) => a + b.percentage, 0) / subjectQuizzes.length)
                    : null;

                  // Find interactive quiz for this subject
                  const availableQuiz = INTERACTIVE_QUIZZES.find(
                    (q) => q.classId === currentUser.classLevel && (q.subjectId === sub.id || q.subjectName.includes(sub.nameBengali.split(' ')[0]))
                  );

                  return (
                    <div
                      key={sub.id}
                      className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                              {sub.bookName}
                            </span>
                            <h4 className="text-base font-bold text-slate-900 mt-1">
                              {sub.nameBengali}
                            </h4>
                          </div>
                          {subAvg !== null && (
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 block font-semibold">গড় নম্বর</span>
                              <span className="text-sm font-black text-emerald-600">{subAvg}%</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-3">
                          <span>মোট অধ্যায়: {sub.totalChapters}</span>
                          <span>•</span>
                          <span>নোটস: {sub.totalNotes} টি</span>
                          <span>•</span>
                          <span>টেস্ট দিয়েছেন: {subjectQuizzes.length} বার</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectSubjectInExplorer(currentUser.classLevel, sub.id);
                          }}
                          className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>নোটস পড়ুন</span>
                        </button>

                        {availableQuiz && (
                          <button
                            onClick={() => {
                              onClose();
                              onStartQuiz(availableQuiz.id);
                            }}
                            className="flex-1 py-2 px-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>কুইজ শুরু করুন</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= TAB 2: SAVED FAVORITES ================= */}
          {activeTab === 'favorites' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    আপনার সংরক্ষিত প্রিয় নোটস ও সাজেশনসমূহ
                  </h3>
                  <p className="text-xs text-slate-500">
                    যেকোনো সময়ে পরীক্ষার আগে দ্রুত রিভিশনের জন্য সাজিয়ে রাখা
                  </p>
                </div>
              </div>

              {savedResources.length > 0 ? (
                <div className="space-y-2.5">
                  {savedResources.map((res) => (
                    <div
                      key={res.id}
                      className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:border-indigo-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
                          <span className="bg-indigo-50 px-2 py-0.5 rounded-md">ক্লাস {res.classId}</span>
                          <span>•</span>
                          <span>{res.subjectName}</span>
                          <span>•</span>
                          <span className="capitalize">{res.type === 'note' ? 'অধ্যায় নোটস' : res.type === 'suggestion' ? 'পরীক্ষা সাজেশন' : 'প্র্যাকটিস প্রশ্ন'}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-800">
                          {res.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          {res.chapter} • সময়: {res.readTime}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectResource(res);
                          }}
                          className="px-3.5 py-1.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>পড়ুন</span>
                        </button>
                        <button
                          onClick={() => toggleSaveFavorite(res.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                          title="সংরক্ষণ তালিকা থেকে সরান"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <BookMarked className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">এখনো কোনো নোটস সংরক্ষণ করা হয়নি</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    যেকোনো বিষয়ের নোটস পড়ার সময় উপরে থাকা বুকমার্ক বা প্রিয় বাটনে ক্লিক করলে তা সরাসরি আপনার এখানে যুক্ত হবে।
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ================= TAB 3: QUIZ PROGRESS TRACKER ================= */}
          {activeTab === 'quizzes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    কুইজ পারফরম্যান্স ও অগ্রগতি ট্র্যাকার
                  </h3>
                  <p className="text-xs text-slate-500">
                    আপনার প্রতিটি পরীক্ষার স্কোর, সময় ও নির্ভুলতার বিস্তারিত রেকর্ড
                  </p>
                </div>
              </div>

              {currentUser.quizHistory.length > 0 ? (
                <div className="space-y-3">
                  {currentUser.quizHistory.map((item) => {
                    const isPerfect = item.percentage >= 90;
                    const isGood = item.percentage >= 70 && item.percentage < 90;

                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:border-indigo-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap text-xs">
                            <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                              {item.subjectName}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 font-medium">{item.completedAt}</span>
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900">
                            {item.quizTitle}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-slate-500 pt-0.5">
                            <span>সঠিক উত্তর: {item.correctCount} টি</span>
                            <span>•</span>
                            <span>ভুল: {item.wrongCount} টি</span>
                            <span>•</span>
                            <span>ব্যয়িত সময়: {Math.floor(item.timeSpentSeconds / 60)} মিনিট {item.timeSpentSeconds % 60} সেকেন্ড</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                          {/* Score Badge */}
                          <div className={`px-4 py-2 rounded-2xl text-center border ${
                            isPerfect
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : isGood
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}>
                            <div className="text-lg font-black leading-none">
                              {item.score}/{item.totalMarks}
                            </div>
                            <div className="text-[10px] font-bold mt-0.5">
                              {item.percentage}% ({isPerfect ? 'A+ চমৎকার' : isGood ? 'A অসাধারণ' : 'B ভালো'})
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              onClose();
                              onStartQuiz(item.quizId);
                            }}
                            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                            title="পুনরায় টেস্ট দিন"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>রিটেস্ট</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">এখনো কোনো কুইজ সম্পন্ন করা হয়নি</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    যেকোনো বিষয়ের ইন্টারেক্টিভ কুইজে অংশগ্রহণ করলে আপনার তাৎক্ষণিক ফলাফল এবং অগ্রগতি এখানে জমা হবে।
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ================= TAB 4: SETTINGS & PREFERENCES ================= */}
          {activeTab === 'settings' && (
            <div className="space-y-5 bg-white p-5 rounded-2xl border border-slate-200">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  আপনার স্টাডি প্রেফারেন্স ও সেটিংস
                </h3>
                <p className="text-xs text-slate-500">
                  আপনার পড়াশোনার শ্রেণী ও ফোকাস পাঠ্য বিষয়সমূহ আপডেট করুন
                </p>
              </div>

              {/* Class Switcher */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  বর্তমান শ্রেণী পরিবর্তন করুন:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {CLASSES_LIST.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => updateClassLevel(c.id)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                        currentUser.classLevel === c.id
                          ? 'bg-indigo-700 text-white border-indigo-700 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      ক্লাস {c.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Study Goal Setting */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700">
                  আপনার পড়াশোনার লক্ষ্য (Study Goal):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={goalText}
                    onChange={(e) => setGoalText(e.target.value)}
                    placeholder="যেমনঃ মাধ্যমিকে ৯০% এর বেশি নম্বর ও গণিতে ১০০ তে ১০০ পাওয়া..."
                    className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                  <button
                    onClick={handleSaveGoal}
                    className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    সেভ করুন
                  </button>
                </div>
              </div>

              {/* Focus subjects selection */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700">
                  ফোকাস পাঠ্য বিষয়সমূহ নির্বাচন করুন:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {allClassSubjects.map((sub) => {
                    const isChecked = currentUser.enrolledSubjectIds?.includes(sub.id) ?? true;
                    return (
                      <label
                        key={sub.id}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            const current = currentUser.enrolledSubjectIds || [];
                            const next = isChecked
                              ? current.filter((id) => id !== sub.id)
                              : [...current, sub.id];
                            updateEnrolledSubjects(next);
                          }}
                          className="rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="truncate">{sub.nameBengali}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

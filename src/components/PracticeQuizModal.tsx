import { useState, useEffect, useRef } from 'react';
import { ResourceItem, InteractiveQuiz } from '../types';
import { useStudentAuth } from '../context/StudentAuthContext';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  HelpCircle, 
  Clock, 
  ChevronRight,
  Sparkles,
  BookOpen,
  UserCheck
} from 'lucide-react';

interface PracticeQuizModalProps {
  resource?: ResourceItem | null;
  interactiveQuiz?: InteractiveQuiz | null;
  onClose: () => void;
  onOpenNotes?: () => void;
  onOpenDashboard?: () => void;
}

export default function PracticeQuizModal({
  resource,
  interactiveQuiz,
  onClose,
  onOpenNotes,
  onOpenDashboard,
}: PracticeQuizModalProps) {
  const { currentUser, recordQuizAttempt } = useStudentAuth();
  const recordedRef = useRef(false);

  // Normalize quiz attributes from resource or interactiveQuiz
  const quizTitle = interactiveQuiz?.title || resource?.title || 'ইন্টারেক্টিভ মক টেস্ট';
  const subjectName = interactiveQuiz?.subjectName || resource?.subjectName || 'বিষয়ভিত্তিক';
  const classId = interactiveQuiz?.classId || resource?.classId || '10';
  const subjectId = interactiveQuiz?.subjectId || resource?.subjectId || 'general';
  const quizId = interactiveQuiz?.id || resource?.id || `quiz-${Date.now()}`;
  const questions = interactiveQuiz?.questions || resource?.questions || [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Timer
  useEffect(() => {
    if (isCompleted) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCompleted]);

  // Record quiz progress when completed
  useEffect(() => {
    if (isCompleted && !recordedRef.current && questions.length > 0) {
      recordedRef.current = true;
      let score = 0;
      let correctCount = 0;
      let wrongCount = 0;

      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctAnswer) {
          score += q.marks;
          correctCount++;
        } else if (userAnswers[idx] !== undefined) {
          wrongCount++;
        }
      });

      const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
      const percentage = totalMarks > 0 ? Math.round((score / totalMarks) * 100) : 0;

      if (currentUser) {
        recordQuizAttempt({
          quizId,
          quizTitle,
          classId,
          subjectId,
          subjectName,
          score,
          totalMarks,
          percentage,
          timeSpentSeconds: elapsedSeconds,
          correctCount,
          wrongCount,
        });
      }
    }
  }, [isCompleted]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (userAnswers[qIdx] !== undefined) return; // Prevent changing after selected
    setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    setShowExplanation((prev) => ({ ...prev, [qIdx]: true }));
  };

  const handleRestart = () => {
    setUserAnswers({});
    setShowExplanation({});
    setCurrentIdx(0);
    setIsCompleted(false);
    setElapsedSeconds(0);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        score += q.marks;
      }
    });
    return score;
  };

  const totalPossibleMarks = questions.reduce((sum, q) => sum + q.marks, 0);
  const currentQ = questions[currentIdx];
  const isLastQuestion = currentIdx === questions.length - 1;
  const allAnswered = Object.keys(userAnswers).length === questions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Quiz Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-0.5">
              <span>{subjectName}</span>
              <span>•</span>
              <span>ক্লাস {classId}</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
              {quizTitle}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quiz Body */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1">
          {!isCompleted ? (
            <div>
              {/* Question Progress bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>প্রশ্ন {currentIdx + 1} / {questions.length}</span>
                  <span>
                    অগ্রগতি: {Math.round(((Object.keys(userAnswers).length) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              {currentQ ? (
                <div className="space-y-5">
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-bold text-indigo-700 mb-2">
                      <span>প্রশ্ন নং {currentIdx + 1}</span>
                      <span className="bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded">
                        {currentQ.marks} নম্বর
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                      {currentQ.question}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {currentQ.options?.map((opt, optIdx) => {
                      const hasSelected = userAnswers[currentIdx] !== undefined;
                      const isChosen = userAnswers[currentIdx] === optIdx;
                      const isCorrect = optIdx === currentQ.correctAnswer;

                      let btnStyle = 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';

                      if (hasSelected) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                        } else if (isChosen && !isCorrect) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                        } else {
                          btnStyle = 'bg-white border-slate-100 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(currentIdx, optIdx)}
                          disabled={hasSelected}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all text-sm sm:text-base flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>

                          {hasSelected && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {hasSelected && isChosen && !isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation card appears right after selecting */}
                  {showExplanation[currentIdx] && (
                    <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 space-y-1 animate-in fade-in">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>সঠিক উত্তরের ব্যাখ্যা:</span>
                      </div>
                      <p className="leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}

                  {/* Navigation between questions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                      disabled={currentIdx === 0}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      পূর্ববর্তী প্রশ্ন
                    </button>

                    <div className="flex items-center gap-2">
                      {!isLastQuestion ? (
                        <button
                          onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <span>পরবর্তী প্রশ্ন</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsCompleted(true)}
                          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                        >
                          <Award className="w-4 h-4" />
                          <span>ফলাফল দেখুন</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 sm:py-8 space-y-6">
              <div className="w-18 h-18 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  মক টেস্ট সম্পন্ন হয়েছে!
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 font-serif">
                  আপনার অর্জিত স্কোর: {calculateScore()} / {totalPossibleMarks}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  মোট সময় লেগেছে: {formatTime(elapsedSeconds)} মিনিট
                </p>
              </div>

              {/* Performance message */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                {calculateScore() === totalPossibleMarks ? (
                  <p className="font-semibold text-emerald-700">
                    চমৎকার! আপনি প্রতিটি প্রশ্নেরই সঠিক উত্তর দিয়েছেন। আপনার প্রস্তুতি অত্যন্ত জোরালো।
                  </p>
                ) : calculateScore() >= totalPossibleMarks / 2 ? (
                  <p className="font-semibold text-indigo-700">
                    ভালো চেষ্টা! আরও নির্ভুল হতে সংশ্লিষ্ট বিষয়ের হ্যান্ডনোট এবং সূত্রগুলি আরেকবার রিভিশন দিন।
                  </p>
                ) : (
                  <p className="font-semibold text-amber-700">
                    ভয় পাওয়ার কিছু নেই! বিষয়ের অধ্যায় নোটস ভালো করে পড়ে পুনরায় টেস্ট দিন।
                  </p>
                )}
              </div>

              {/* Progress Saved Notice */}
              {currentUser && (
                <div className="max-w-md mx-auto p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>আপনার ড্যাশবোর্ডে ({currentUser.name}) এই কুইজের অগ্রগতি যুক্ত করা হয়েছে!</span>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>পুনরায় টেস্ট দিন</span>
                </button>

                {onOpenDashboard && currentUser && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDashboard();
                    }}
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Award className="w-4 h-4" />
                    <span>অগ্রগতি দেখুন</span>
                  </button>
                )}

                {onOpenNotes && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenNotes();
                    }}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>অধ্যায় নোটস পড়ুন</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

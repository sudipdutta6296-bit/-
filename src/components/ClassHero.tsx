import { ClassInfo } from '../types';
import { BookOpen, Sparkles, Award, Users, CheckCircle2, User, ArrowRight } from 'lucide-react';
import { useStudentAuth } from '../context/StudentAuthContext';

interface ClassHeroProps {
  currentClass: ClassInfo;
  totalSubjects: number;
  onExploreSubjectsClick: () => void;
  onOpenDashboard?: () => void;
}

export default function ClassHero({
  currentClass,
  totalSubjects,
  onExploreSubjectsClick,
  onOpenDashboard,
}: ClassHeroProps) {
  const { currentUser } = useStudentAuth();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-indigo-800/40">
      {/* Subtle decorative background blur circles */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logged-in Student Personalized Welcome Banner */}
        {currentUser && (
          <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-indigo-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    নমস্কার, {currentUser.name}!
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
                    ক্লাস {currentUser.classLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {currentUser.targetGoal ? `আপনার লক্ষ্য: "${currentUser.targetGoal}"` : 'আপনার পড়া ও কুইজ অগ্রগতি নিয়মিত ট্র্যাক করুন।'}
                </p>
              </div>
            </div>

            {onOpenDashboard && (
              <button
                onClick={onOpenDashboard}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-indigo-950 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer shrink-0"
              >
                <Award className="w-3.5 h-3.5" />
                <span>আমার ড্যাশবোর্ড খুলুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Main Info */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentClass.badge}</span>
              <span className="text-slate-400">•</span>
              <span>পর্ষদের সিলেবাস ভিত্তিক</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
              {currentClass.bengaliName}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {currentClass.tagline}। প্রতিটি বিষয়ের অধ্যায়ভিত্তিক নোটস, পরীক্ষার কমন সাজেশন এবং নিজে নিজে যাচাই করার প্র্যাকটিস কোশ্চেন সেট।
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>সম্পূর্ণ অধ্যায়ভিত্তিক নোটস</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>১০০% কমন উপযোগী সাজেশন</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>ইন্টারেক্টিভ প্র্যাকটিস টেস্ট</span>
              </span>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="lg:w-80 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs text-slate-400 font-medium block">বর্তমান শ্রেণী</span>
                <span className="text-xl font-bold text-white">ক্লাস {currentClass.numeric}</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
                {currentClass.numeric}ম
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>পাঠ্য বিষয়</span>
                </div>
                <span className="text-xl font-extrabold text-white">{totalSubjects} টি বিষয়</span>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>উপকৃত ছাত্রছাত্রী</span>
                </div>
                <span className="text-sm font-bold text-emerald-300">{currentClass.totalStudentsHelped}</span>
              </div>
            </div>

            <button
              id="hero-view-subjects-btn"
              onClick={onExploreSubjectsClick}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>নিচের বিষয়গুলি দেখুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

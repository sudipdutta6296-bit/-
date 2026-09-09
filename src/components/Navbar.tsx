import { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  CalendarClock, 
  PhoneCall, 
  Sparkles,
  ChevronRight,
  User,
  Award,
  LogIn
} from 'lucide-react';
import { ClassLevel } from '../types';
import { CLASSES_LIST } from '../data/curriculumData';
import { useStudentAuth } from '../context/StudentAuthContext';

interface NavbarProps {
  activeClass: ClassLevel;
  onSelectClass: (classId: ClassLevel) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarkedCount: number;
  onNavigateToUpcoming: () => void;
  onNavigateToContact: () => void;
  onOpenDashboard: () => void;
  onOpenAuth: () => void;
  onNavigateToQuizzes?: () => void;
}

export default function Navbar({
  activeClass,
  onSelectClass,
  onOpenSearch,
  onOpenBookmarks,
  bookmarkedCount,
  onNavigateToUpcoming,
  onNavigateToContact,
  onOpenDashboard,
  onOpenAuth,
  onNavigateToQuizzes,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, isAuthenticated } = useStudentAuth();

  const handleClassClick = (id: ClassLevel) => {
    onSelectClass(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro-bar for quick announcements */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-indigo-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 font-semibold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" />
              নতুন আপডেট
            </span>
            <p className="truncate text-slate-200 text-xs sm:text-sm">
              পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ (WBBSE) পাঠ্যক্রম অনুযায়ী ২০২৬ সালের ক্লাস ৫ থেকে ১০ পর্যন্ত অধ্যায়ভিত্তিক নোটস ও সাজেশন লাইভ!
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300 text-xs shrink-0">
            {onNavigateToQuizzes && (
              <button 
                id="topbar-quizzes-btn"
                onClick={onNavigateToQuizzes} 
                className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>মক টেস্ট ও কুইজ</span>
              </button>
            )}
            <span className="text-slate-600">|</span>
            <button 
              id="topbar-upcoming-btn"
              onClick={onNavigateToUpcoming} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <CalendarClock className="w-3.5 h-3.5" />
              আসন্ন পোস্টসমূহ
            </button>
            <span className="text-slate-600">|</span>
            <button 
              id="topbar-contact-btn"
              onClick={onNavigateToContact} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              শিক্ষক সহায়তা
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-2 sm:gap-4">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-serif">
                  শিক্ষাদর্পণ
                </span>
                <span className="hidden sm:inline-block bg-indigo-50 text-indigo-700 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-indigo-200">
                  বাংলা মাধ্যম
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-none mt-0.5">
                ক্লাস ৫ - ১০ পাঠ্যসহায়িকা ও সাজেশন
              </p>
            </div>
          </div>

          {/* Desktop Class Navigation Bar - Exact user requirement */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
            {CLASSES_LIST.map((cls) => {
              const isActive = activeClass === cls.id;
              return (
                <button
                  key={cls.id}
                  id={`nav-class-${cls.id}-btn`}
                  onClick={() => handleClassClick(cls.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-white text-indigo-900 shadow-xs ring-1 ring-slate-200/90 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span>ক্লাস {cls.numeric}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search, Bookmarks, Quiz, Profile/Auth */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 text-slate-700 hover:text-indigo-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium border border-transparent sm:border-slate-200 cursor-pointer"
              title="বিষয় ও নোটস খুঁজুন"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">খুঁজুন</span>
            </button>

            {onNavigateToQuizzes && (
              <button
                id="header-quizzes-btn"
                onClick={onNavigateToQuizzes}
                className="hidden sm:flex items-center gap-1.5 p-2 px-3 py-2 text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors text-xs font-bold border border-indigo-100 cursor-pointer"
                title="ইন্টারেক্টিভ কুইজ পোর্টাল"
              >
                <Award className="w-4 h-4 text-indigo-600" />
                <span>কুইজ</span>
              </button>
            )}

            <button
              id="header-bookmarks-btn"
              onClick={onOpenBookmarks}
              className="relative p-2 text-slate-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors border border-transparent sm:border-slate-200 cursor-pointer"
              title="বুকমার্ক করা নোটস"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarkedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarkedCount}
                </span>
              )}
            </button>

            {/* Student User Account Trigger */}
            {currentUser ? (
              <button
                id="header-profile-btn"
                onClick={onOpenDashboard}
                className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-indigo-50/90 border border-indigo-200/90 hover:bg-indigo-100 transition-all cursor-pointer group shadow-2xs"
                title="আমার স্টুডেন্ট ড্যাশবোর্ড ও অগ্রগতি"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-500 text-indigo-950 font-black text-xs flex items-center justify-center shadow-xs">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="hidden sm:block text-left">
                  <span className="block text-xs font-bold text-indigo-950 leading-tight group-hover:text-indigo-700">
                    {currentUser.name}
                  </span>
                  <span className="block text-[10px] font-semibold text-emerald-700 leading-none">
                    ক্লাস {currentUser.classLevel} • ড্যাশবোর্ড
                  </span>
                </div>
              </button>
            ) : (
              <button
                id="header-login-btn"
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>লগইন / একাউন্ট</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Second bar for Mobile/Tablet to switch classes seamlessly */}
        <div className="lg:hidden py-2.5 overflow-x-auto scrollbar-none border-t border-slate-100 flex items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-400 shrink-0 mr-1">শ্রেণী:</span>
          {CLASSES_LIST.map((cls) => {
            const isActive = activeClass === cls.id;
            return (
              <button
                key={cls.id}
                id={`mobile-class-chip-${cls.id}`}
                onClick={() => handleClassClick(cls.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-indigo-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                ক্লাস {cls.numeric}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            শ্রেণী নির্বাচন করুন (Class 5 - 10)
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {CLASSES_LIST.map((cls) => {
              const isActive = activeClass === cls.id;
              return (
                <button
                  key={cls.id}
                  id={`drawer-class-btn-${cls.id}`}
                  onClick={() => handleClassClick(cls.id)}
                  className={`p-2.5 rounded-lg text-left text-sm font-semibold flex items-center justify-between border ${
                    isActive
                      ? 'bg-indigo-50 border-indigo-300 text-indigo-950 font-bold'
                      : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{cls.bengaliName}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            {/* Student Account Button */}
            {currentUser ? (
              <button
                id="drawer-profile-btn"
                onClick={() => {
                  onOpenDashboard();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-indigo-50 border border-indigo-200 text-left text-sm font-bold text-indigo-900 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-500 text-indigo-950 font-black text-xs flex items-center justify-center">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div>
                    <span>{currentUser.name}</span>
                    <span className="block text-[11px] font-semibold text-emerald-700">
                      ক্লাস {currentUser.classLevel} • আমার ড্যাশবোর্ড দেখুন
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-indigo-500" />
              </button>
            ) : (
              <button
                id="drawer-login-btn"
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-indigo-700 text-white text-left text-sm font-bold flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  <span>স্টুডেন্ট লগইন / নতুন রেজিস্ট্রেশন</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {onNavigateToQuizzes && (
              <button
                id="drawer-quizzes-btn"
                onClick={() => {
                  onNavigateToQuizzes();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-lg text-left text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>ইন্টারেক্টিভ বিষয়ভিত্তিক কুইজ ও টেস্ট</span>
              </button>
            )}

            <button
              id="drawer-upcoming-btn"
              onClick={() => {
                onNavigateToUpcoming();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg text-left text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
            >
              <CalendarClock className="w-4 h-4 text-indigo-600" />
              <span>আসন্ন পোস্ট ও নোটিশ (Upcoming Posts)</span>
            </button>
            <button
              id="drawer-contact-btn"
              onClick={() => {
                onNavigateToContact();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg text-left text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>যোগাযোগ ও ডাউট সমাধান (Contact Us)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

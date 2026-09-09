import { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  BookMarked,
  Tag
} from 'lucide-react';
import { ResourceItem, ClassLevel } from '../types';
import { SAMPLE_RESOURCES, CLASSES_LIST } from '../data/curriculumData';
import { useStudentAuth } from '../context/StudentAuthContext';

interface SearchBarSectionProps {
  onSelectResource: (res: ResourceItem) => void;
  onSelectClass: (cls: ClassLevel) => void;
  onStartPracticeQuiz?: (res: ResourceItem) => void;
}

export default function SearchBarSection({
  onSelectResource,
  onSelectClass,
  onStartPracticeQuiz,
}: SearchBarSectionProps) {
  const { isNoteFavorite, toggleSaveFavorite, currentUser } = useStudentAuth();

  const [keyword, setKeyword] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'note' | 'suggestion' | 'practice'>('all');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Extract all distinct subject names
  const subjectList = useMemo(() => {
    const set = new Set<string>();
    SAMPLE_RESOURCES.forEach((r) => set.add(r.subjectName));
    return Array.from(set);
  }, []);

  // Filtered resources
  const results = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    
    return SAMPLE_RESOURCES.filter((res) => {
      // Keyword matching
      const matchesKeyword =
        !q ||
        res.title.toLowerCase().includes(q) ||
        res.subjectName.toLowerCase().includes(q) ||
        res.chapter.toLowerCase().includes(q) ||
        res.summary.toLowerCase().includes(q) ||
        (res.content && res.content.toLowerCase().includes(q)) ||
        (res.keyPoints && res.keyPoints.some((kp) => kp.toLowerCase().includes(q)));

      // Class matching
      const matchesClass = selectedClass === 'all' || res.classId === selectedClass;

      // Subject matching
      const matchesSubject = selectedSubject === 'all' || res.subjectName === selectedSubject;

      // Type matching
      const matchesType = selectedType === 'all' || res.type === selectedType;

      // Favorite matching
      const matchesFav = !showOnlyFavorites || (currentUser && currentUser.savedNoteIds.includes(res.id));

      return matchesKeyword && matchesClass && matchesSubject && matchesType && matchesFav;
    });
  }, [keyword, selectedClass, selectedSubject, selectedType, showOnlyFavorites, currentUser]);

  const quickKeywords = [
    'দ্বিঘাত সমীকরণ',
    'ওজোন স্তর',
    'উপপাদ্য ৩৪',
    'ভরদুপুরে',
    'মেলানিন ও চামড়া',
    'কোষ ও মাইটোকনড্রিয়া',
    'আর্কিমিডিসের নীতি',
    'জ্ঞানচক্ষু',
  ];

  return (
    <section id="search-portal" className="py-10 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search Header Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
            <Search className="w-3.5 h-3.5" />
            <span>স্মার্ট অনুসন্ধান ও ফিল্টার পোর্টাল</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            নোটস, সাজেশন ও প্র্যাকটিস প্রশ্ন খুঁজুন
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            কী-ওয়ার্ড, শ্রেণী এবং বিষয় অনুযায়ী একসাথে সমস্ত শিক্ষা উপকরণ অনুসন্ধান করুন
          </p>
        </div>

        {/* Search Console Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          {/* Main Search Input */}
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-indigo-600 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="অধ্যায়, টপিক, সূত্র বা কী-ওয়ার্ড লিখুন (যেমন: ওজোন স্তর, দ্বিঘাত সমীকরণ, উপপাদ্য)..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 focus:bg-white transition-all shadow-inner"
            />
            {keyword && (
              <button
                onClick={() => setKeyword('')}
                className="absolute right-3.5 p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                title="মুছে ফেলুন"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Keyword Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <Tag className="w-3 h-3 text-amber-500" />
              <span>জনপ্রিয় অনুসন্ধান:</span>
            </span>
            {quickKeywords.map((kw, idx) => (
              <button
                key={idx}
                onClick={() => setKeyword(kw)}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-medium transition-colors cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Filters Row: Class, Subject, Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
            {/* Class Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                শ্রেণী নির্বাচন:
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value as ClassLevel | 'all')}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              >
                <option value="all">সব শ্রেণী (Class 5 - 10)</option>
                {CLASSES_LIST.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.bengaliName}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                বিষয় নির্বাচন:
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              >
                <option value="all">সব বিষয় (All Subjects)</option>
                {subjectList.map((sub, i) => (
                  <option key={i} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            {/* Content Type Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                উপকরণের ধরন:
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              >
                <option value="all">সকল ধরন (নোটস, সাজেশন ও প্রশ্ন)</option>
                <option value="note">অধ্যায় নোটস (Chapter Notes)</option>
                <option value="suggestion">পরীক্ষা সাজেশন (Exam Suggestions)</option>
                <option value="practice">প্র্যাকটিস প্রশ্ন / কুইজ (Practice Sets)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header & Counter */}
        <div className="flex items-center justify-between px-1">
          <div className="text-xs sm:text-sm font-bold text-slate-700">
            অনুসন্ধানের ফলাফল: <span className="text-indigo-700 font-black">{results.length} টি</span> উপাদান পাওয়া গেছে
          </div>

          {(keyword || selectedClass !== 'all' || selectedSubject !== 'all' || selectedType !== 'all') && (
            <button
              onClick={() => {
                setKeyword('');
                setSelectedClass('all');
                setSelectedSubject('all');
                setSelectedType('all');
              }}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 cursor-pointer"
            >
              ফিল্টার রিসেট করুন
            </button>
          )}
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((item) => {
              const isSaved = isNoteFavorite(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all p-4 flex flex-col justify-between group"
                >
                  <div>
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                          ক্লাস {item.classId}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-bold">
                          {item.subjectName}
                        </span>
                      </div>

                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                        item.type === 'note'
                          ? 'bg-blue-50 text-blue-700'
                          : item.type === 'suggestion'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        {item.type === 'note' ? 'নোটস' : item.type === 'suggestion' ? 'সাজেশন' : 'প্র্যাকটিস'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-800 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {item.chapter}
                    </p>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] text-slate-400 font-medium">
                      ⏱ {item.readTime}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Save to Favorites Button */}
                      <button
                        onClick={() => toggleSaveFavorite(item.id)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-amber-50 border-amber-300 text-amber-600'
                            : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700'
                        }`}
                        title={isSaved ? 'সংরক্ষিত তালিকা থেকে সরান' : 'প্রোফাইলে প্রিয় হিসেবে সংরক্ষণ করুন'}
                      >
                        <BookMarked className="w-3.5 h-3.5" />
                      </button>

                      {item.type === 'practice' && item.questions && onStartPracticeQuiz ? (
                        <button
                          onClick={() => onStartPracticeQuiz(item)}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>কুইজ দিন</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            onSelectResource(item);
                            onSelectClass(item.classId);
                          }}
                          className="px-3.5 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>পড়ুন</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-slate-800">কোনো শিক্ষা উপকরণ পাওয়া যায়নি</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              আপনার দেওয়া কী-ওয়ার্ড "{keyword}" বা নির্বাচিত ফিল্টারে কোনো নোটস মেলেনি। দয়া করে সহজ বাংলা শব্দ দিয়ে খুঁজুন বা ফিল্টার পরিবর্তন করুন।
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

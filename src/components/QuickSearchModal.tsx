import { useState, useMemo } from 'react';
import { Search, X, BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ResourceItem, ClassLevel } from '../types';
import { SAMPLE_RESOURCES } from '../data/curriculumData';

interface QuickSearchModalProps {
  onClose: () => void;
  onSelectResource: (res: ResourceItem) => void;
  onSelectClass: (classId: ClassLevel) => void;
}

export default function QuickSearchModal({
  onClose,
  onSelectResource,
  onSelectClass,
}: QuickSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const q = searchTerm.toLowerCase();
    return SAMPLE_RESOURCES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subjectName.toLowerCase().includes(q) ||
        r.chapter.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        (r.content && r.content.toLowerCase().includes(q))
    );
  }, [searchTerm]);

  const quickTopics = [
    'দ্বিঘাত সমীকরণ',
    'ওজোন স্তর',
    'উপপাদ্য ৩৪',
    'ভরদুপুরে',
    'আর্কিমিডিসের নীতি',
    'কোষ ও কলা',
    'সিরাজদ্দৌলা নাটক',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto pt-16">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="যেকোনো বিষয়, অধ্যায়, উপপাদ্য বা নোটস অনুসন্ধান করুন..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-700 font-bold px-2 py-1"
            >
              ✕
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Quick Topics */}
        <div className="overflow-y-auto p-4 flex-1">
          {searchTerm.trim() ? (
            searchResults.length > 0 ? (
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-slate-400 px-1">
                  {searchResults.length} টি ফলাফল পাওয়া গেছে:
                </div>
                {searchResults.map((res) => (
                  <div
                    key={res.id}
                    onClick={() => {
                      onClose();
                      onSelectResource(res);
                      onSelectClass(res.classId);
                    }}
                    className="p-3 rounded-xl border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-0.5">
                        <span>ক্লাস {res.classId}</span>
                        <span>•</span>
                        <span>{res.subjectName}</span>
                        <span>•</span>
                        <span className="capitalize">{res.type}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-900">
                        {res.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {res.chapter}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-sm font-semibold text-slate-700">কোনো ফলাফল মেলেনি</p>
                <p className="text-xs text-slate-400 mt-1">ভিন্ন শব্দ বা বাংলা বানান দিয়ে চেষ্টা করুন।</p>
              </div>
            )
          ) : (
            <div className="space-y-4 py-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                জনপ্রিয় অনুসন্ধানের টপিক:
              </div>
              <div className="flex flex-wrap gap-2">
                {quickTopics.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchTerm(topic)}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-slate-700 cursor-pointer"
                  >
                    🔍 {topic}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

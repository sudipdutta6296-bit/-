import { useState, useMemo } from 'react';
import { ResourceItem, ResourceType, Subject } from '../types';
import { 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Clock, 
  Eye, 
  Bookmark, 
  ArrowUpRight,
  Filter,
  PlayCircle
} from 'lucide-react';

interface ContentExplorerProps {
  resources: ResourceItem[];
  subjects: Subject[];
  selectedSubjectId: string | null;
  activeTypeTab: ResourceType | 'all';
  onSelectTypeTab: (type: ResourceType | 'all') => void;
  onSelectSubject: (subjectId: string) => void;
  onOpenResource: (resource: ResourceItem) => void;
  onToggleBookmark: (resourceId: string) => void;
  bookmarkedIds: string[];
}

export default function ContentExplorer({
  resources,
  subjects,
  selectedSubjectId,
  activeTypeTab,
  onSelectTypeTab,
  onSelectSubject,
  onOpenResource,
  onToggleBookmark,
  bookmarkedIds,
}: ContentExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resources based on type, subject, and search query
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      // Type match
      if (activeTypeTab !== 'all' && item.type !== activeTypeTab) {
        return false;
      }
      // Subject match
      if (selectedSubjectId && item.subjectId !== selectedSubjectId) {
        return false;
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(query);
        const inSummary = item.summary.toLowerCase().includes(query);
        const inChapter = item.chapter.toLowerCase().includes(query);
        const inSubject = item.subjectName.toLowerCase().includes(query);
        return inTitle || inSummary || inChapter || inSubject;
      }
      return true;
    });
  }, [resources, activeTypeTab, selectedSubjectId, searchQuery]);

  const getBadgeForType = (type: ResourceType) => {
    switch (type) {
      case 'note':
        return {
          label: 'অধ্যায় নোটস',
          icon: <FileText className="w-3 h-3" />,
          className: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        };
      case 'suggestion':
        return {
          label: 'পরীক্ষা সাজেশন',
          icon: <Sparkles className="w-3 h-3" />,
          className: 'bg-amber-50 text-amber-800 border-amber-200',
        };
      case 'practice':
        return {
          label: 'প্র্যাকটিস সেট',
          icon: <CheckCircle2 className="w-3 h-3" />,
          className: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        };
    }
  };

  return (
    <section id="content-explorer-section" className="scroll-mt-24 py-6 border-t border-slate-200/80">
      {/* Tab Switcher & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 max-w-full">
          <button
            id="tab-all-resources"
            onClick={() => onSelectTypeTab('all')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTypeTab === 'all'
                ? 'bg-white text-indigo-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            সকল সামগ্রী
          </button>

          <button
            id="tab-notes"
            onClick={() => onSelectTypeTab('note')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTypeTab === 'note'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>বিষয় নোটস</span>
          </button>

          <button
            id="tab-suggestions"
            onClick={() => onSelectTypeTab('suggestion')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTypeTab === 'suggestion'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>পরীক্ষা সাজেশন</span>
          </button>

          <button
            id="tab-practice"
            onClick={() => onSelectTypeTab('practice')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTypeTab === 'practice'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>প্র্যাকটিস কোশ্চেন</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="content-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="নোট বা প্রশ্ন খুঁজুন..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Active filters indicators */}
      {(selectedSubjectId || searchQuery) && (
        <div className="flex flex-wrap items-center gap-2 mb-5 text-xs text-slate-600">
          <span className="flex items-center gap-1 font-semibold text-slate-500">
            <Filter className="w-3 h-3" /> ফিল্টার:
          </span>
          {selectedSubjectId && (
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-800 px-2.5 py-1 rounded-md border border-indigo-200">
              বিষয়: {subjects.find((s) => s.id === selectedSubjectId)?.nameBengali || selectedSubjectId}
              <button
                onClick={() => onSelectSubject('')}
                className="hover:text-indigo-950 font-bold ml-1 cursor-pointer"
              >
                ✕
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200">
              অনুসন্ধান: "{searchQuery}"
              <button
                onClick={() => setSearchQuery('')}
                className="hover:text-slate-950 font-bold ml-1 cursor-pointer"
              >
                ✕
              </button>
            </span>
          )}
          <button
            onClick={() => {
              onSelectSubject('');
              setSearchQuery('');
            }}
            className="text-indigo-600 hover:underline font-semibold ml-2 cursor-pointer"
          >
            সব ফিল্টার মুছুন
          </button>
        </div>
      )}

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4 px-1">
        <span>মোট {filteredResources.length} টি সামগ্রী পাওয়া গেছে</span>
        <span className="text-slate-400">নিয়মিত নতুন নোটস সংযোজিত হচ্ছে</span>
      </div>

      {/* Cards Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((item) => {
            const badge = getBadgeForType(item.type);
            const isBookmarked = bookmarkedIds.includes(item.id);

            return (
              <div
                key={item.id}
                id={`resource-card-${item.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5">
                  {/* Top Metadata row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md border ${badge.className}`}
                    >
                      {badge.icon}
                      <span>{badge.label}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {item.isTrending && (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          জনপ্রিয়
                        </span>
                      )}
                      {item.isNew && (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          নতুন
                        </span>
                      )}
                      <button
                        id={`bookmark-btn-${item.id}`}
                        onClick={() => onToggleBookmark(item.id)}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isBookmarked
                            ? 'text-amber-600 bg-amber-50'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                        }`}
                        title={isBookmarked ? 'বুকমার্ক সরানো হয়েছে' : 'পরে পড়ার জন্য সেভ করুন'}
                      >
                        <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Chapter & Title */}
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-indigo-700 block mb-1">
                      {item.subjectName} • {item.chapter}
                    </span>
                    <h3
                      onClick={() => onOpenResource(item)}
                      className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Key Highlights preview if available */}
                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1 mb-4">
                      <span className="font-semibold text-slate-500 text-[11px] block">
                        মূল বিষয়বস্তু:
                      </span>
                      <p className="line-clamp-2 text-slate-700">
                        • {item.keyPoints[0]}
                      </p>
                    </div>
                  )}

                  {/* Practice set question count banner */}
                  {item.type === 'practice' && item.questions && (
                    <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-2.5 text-xs text-emerald-800 flex items-center justify-between mb-4">
                      <span className="font-semibold">মোট {item.questions.length}টি প্রশ্ন সংকলন</span>
                      <span className="text-[11px] text-emerald-600 bg-white px-2 py-0.5 rounded font-bold">
                        তাৎক্ষণিক উত্তর
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Footer actions */}
                <div className="px-5 py-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {item.viewsCount.toLocaleString('bn-BD')}
                    </span>
                  </div>

                  <button
                    id={`open-resource-btn-${item.id}`}
                    onClick={() => onOpenResource(item)}
                    className={`font-bold flex items-center gap-1 py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                      item.type === 'practice'
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {item.type === 'practice' ? (
                      <>
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>টেস্ট শুরু করুন</span>
                      </>
                    ) : (
                      <>
                        <span>সম্পূর্ণ পড়ুন</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200">
          <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">কোনো সামগ্রী পাওয়া যায়নি</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
            আপনার অনুসন্ধানের সাথে মিলে এমন কোনো নোট বা সাজেশন পাওয়া যায়নি। ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।
          </p>
          <button
            onClick={() => {
              onSelectSubject('');
              onSelectTypeTab('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            সকল সামগ্রী রিসেট করুন
          </button>
        </div>
      )}
    </section>
  );
}

import { Subject, ResourceType } from '../types';
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Dna, 
  Landmark, 
  Globe, 
  Languages, 
  Trees, 
  FileText, 
  Sparkles, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface SubjectGridProps {
  subjects: Subject[];
  selectedSubjectId: string | null;
  onSelectSubject: (subjectId: string) => void;
  onQuickFilterType: (subjectId: string, type: ResourceType) => void;
}

export default function SubjectGrid({
  subjects,
  selectedSubjectId,
  onSelectSubject,
  onQuickFilterType,
}: SubjectGridProps) {
  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Dna': return <Dna className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Languages': return <Languages className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="subjects-section" className="scroll-mt-24 py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-700 font-semibold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>সিলেবাস অনুযায়ী পাঠ্য বিষয়সমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
            যে কোনো বিষয়ে ক্লিক করে অধ্যায়ন শুরু করুন
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            নির্দিষ্ট বিষয়ে ক্লিক করলে নিচে সেই বিষয়ের হ্যান্ডনোট, পরীক্ষার সাজেশন ও প্র্যাকটিস সেট দেখা যাবে।
          </p>
        </div>

        {selectedSubjectId && (
          <button
            id="clear-subject-filter-btn"
            onClick={() => onSelectSubject('')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 py-1.5 px-3 rounded-lg border border-indigo-200 transition-colors self-start sm:self-auto cursor-pointer"
          >
            সব বিষয়ের সামগ্রী দেখুন
          </button>
        )}
      </div>

      {/* Grid of Subjects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {subjects.map((subj) => {
          const isSelected = selectedSubjectId === subj.id;

          return (
            <div
              key={subj.id}
              id={`subject-card-${subj.id}`}
              onClick={() => onSelectSubject(isSelected ? '' : subj.id)}
              className={`group relative rounded-2xl p-5 transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Header Icon + Book info */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${subj.colorTheme} text-white flex items-center justify-center shadow-xs`}
                >
                  {getSubjectIcon(subj.iconName)}
                </div>

                <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                  {subj.totalChapters} টি অধ্যায়
                </span>
              </div>

              {/* Title & Official Textbook */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {subj.nameBengali}
                </h3>
                <p className="text-xs text-slate-500 truncate mt-0.5" title={subj.bookName}>
                  পাঠ্যবই: {subj.bookName}
                </p>
              </div>

              {/* Resource Count Pills */}
              <div className="grid grid-cols-3 gap-1.5 py-2.5 border-y border-slate-100 text-[11px] mb-3">
                <button
                  id={`subject-quick-note-${subj.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickFilterType(subj.id, 'note');
                  }}
                  className="flex flex-col items-center p-1.5 rounded-lg bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-slate-600 cursor-pointer"
                  title="নোটস দেখুন"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-500 mb-0.5" />
                  <span className="font-bold text-slate-800">{subj.totalNotes}</span>
                  <span className="text-[10px] text-slate-400">নোটস</span>
                </button>

                <button
                  id={`subject-quick-suggestion-${subj.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickFilterType(subj.id, 'suggestion');
                  }}
                  className="flex flex-col items-center p-1.5 rounded-lg bg-slate-50 hover:bg-amber-50 hover:text-amber-800 transition-colors text-slate-600 cursor-pointer"
                  title="সাজেশন দেখুন"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 mb-0.5" />
                  <span className="font-bold text-slate-800">{subj.totalSuggestions}</span>
                  <span className="text-[10px] text-slate-400">সাজেশন</span>
                </button>

                <button
                  id={`subject-quick-practice-${subj.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickFilterType(subj.id, 'practice');
                  }}
                  className="flex flex-col items-center p-1.5 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 transition-colors text-slate-600 cursor-pointer"
                  title="প্র্যাকটিস সেট"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mb-0.5" />
                  <span className="font-bold text-slate-800">{subj.totalPracticeSets}</span>
                  <span className="text-[10px] text-slate-400">প্র্যাকটিস</span>
                </button>
              </div>

              {/* Bottom selection indicator */}
              <div className="flex items-center justify-between text-xs font-semibold pt-1">
                <span className={isSelected ? 'text-indigo-600 font-bold' : 'text-slate-500 group-hover:text-indigo-600'}>
                  {isSelected ? '✓ নির্বাচিত বিষয়' : 'অধ্যায় ও প্রশ্ন দেখুন'}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isSelected ? 'translate-x-1 text-indigo-600' : 'text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600'
                }`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

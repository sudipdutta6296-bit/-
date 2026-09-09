import { useState } from 'react';
import { ResourceItem } from '../types';
import { 
  X, 
  Printer, 
  Bookmark, 
  Copy, 
  Check, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Share2, 
  ZoomIn, 
  ZoomOut,
  HelpCircle,
  FileText
} from 'lucide-react';

interface StudyReaderModalProps {
  resource: ResourceItem;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenPracticeIfAvailable?: () => void;
}

export default function StudyReaderModal({
  resource,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenPracticeIfAvailable,
}: StudyReaderModalProps) {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1); // 0: sm, 1: base, 2: lg, 3: xl
  const [copied, setCopied] = useState(false);

  const fontSizes = [
    'text-sm leading-relaxed',
    'text-base leading-relaxed',
    'text-lg leading-loose',
    'text-xl leading-loose',
  ];

  const handleCopy = () => {
    const fullText = `${resource.title}\n${resource.chapter}\n\n${resource.summary}\n\n${resource.content}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="no-print bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              {resource.type === 'suggestion' ? (
                <Sparkles className="w-4 h-4 text-amber-600" />
              ) : (
                <FileText className="w-4 h-4 text-indigo-600" />
              )}
            </span>
            <div className="truncate">
              <span className="text-xs font-semibold text-slate-500 block truncate">
                {resource.subjectName} • {resource.chapter}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                {resource.title}
              </h2>
            </div>
          </div>

          {/* Reader controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Font Size controls */}
            <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs text-slate-600">
              <button
                onClick={() => setFontSizeLevel((prev) => Math.max(0, prev - 1))}
                className="p-1.5 hover:bg-slate-100 rounded disabled:opacity-40"
                title="ছোট ফন্ট"
                disabled={fontSizeLevel === 0}
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 font-bold text-[11px]">A</span>
              <button
                onClick={() => setFontSizeLevel((prev) => Math.min(3, prev + 1))}
                className="p-1.5 hover:bg-slate-100 rounded disabled:opacity-40"
                title="বড় ফন্ট"
                disabled={fontSizeLevel === 3}
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="প্রিন্ট করুন"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="নোট কপি করুন"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(resource.id)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={isBookmarked ? 'বুকমার্ক সরানো হয়েছে' : 'বুকমার্কে যোগ করুন'}
            >
              <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reading Content Body */}
        <div className="overflow-y-auto px-5 sm:px-10 py-6 sm:py-8 space-y-6 flex-1 print:p-0">
          
          {/* Article Header info */}
          <div className="border-b border-slate-200 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-indigo-50 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded-md border border-indigo-200">
                {resource.subjectName}
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                ক্লাস {resource.classId}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                পড়ার আনুমানিক সময়: {resource.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif leading-tight">
              {resource.title}
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              অধ্যায়: {resource.chapter} • প্রকাশিত: {resource.publishedDate}
            </p>
          </div>

          {/* Quick Summary Callout */}
          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              এক নজরে সারসংক্ষেপ
            </h4>
            <p className="text-sm text-amber-950/90 leading-relaxed font-medium">
              {resource.summary}
            </p>
          </div>

          {/* Key Formulae if present */}
          {resource.importantFormulas && resource.importantFormulas.length > 0 && (
            <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-4">
              <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                জরুরি সূত্র ও রাসায়নিক সমীকরণ
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-indigo-950">
                {resource.importantFormulas.map((formula, idx) => (
                  <li key={idx} className="bg-white/80 p-2 rounded border border-indigo-100">
                    {formula}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Points bullets */}
          {resource.keyPoints && resource.keyPoints.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                পরীক্ষার জন্য স্মরণীয় বিশেষ পয়েন্ট:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                {resource.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Body Markdown-like content rendered neatly */}
          <div className={`prose max-w-none text-slate-800 ${fontSizes[fontSizeLevel]}`}>
            {resource.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-6 mb-3 border-b border-slate-200 pb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-base sm:text-lg font-bold text-slate-800 mt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="mb-4 whitespace-pre-line text-slate-700">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Footer note in modal */}
          <div className="no-print pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              প্রস্তুতিমূলক সহায়িকা: পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ (WBBSE) অনুমোদিত কারিকুলাম অনুসারে সংকলিত।
            </p>
            {onOpenPracticeIfAvailable && (
              <button
                onClick={() => {
                  onClose();
                  onOpenPracticeIfAvailable();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 py-2 px-3.5 rounded-lg border border-emerald-200 transition-colors self-start sm:self-auto cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>এই বিষয়ের প্র্যাকটিস টেস্ট দিন</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

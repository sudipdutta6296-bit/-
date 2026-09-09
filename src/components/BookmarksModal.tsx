import { ResourceItem } from '../types';
import { Bookmark, X, Trash2, ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface BookmarksModalProps {
  bookmarkedResources: ResourceItem[];
  onClose: () => void;
  onOpenResource: (res: ResourceItem) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export default function BookmarksModal({
  bookmarkedResources,
  onClose,
  onOpenResource,
  onRemoveBookmark,
  onClearAll,
}: BookmarksModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                আমার বুকমার্ক করা তালিকা ({bookmarkedResources.length})
              </h3>
              <p className="text-xs text-slate-500">
                দ্রুত রিভিশনের জন্য সংরক্ষিত নোটস ও সাজেশন
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {bookmarkedResources.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1 hover:bg-rose-50 rounded transition-colors cursor-pointer"
              >
                সব মুছুন
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto p-5 space-y-3 flex-1">
          {bookmarkedResources.length > 0 ? (
            bookmarkedResources.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all flex items-start justify-between gap-3 bg-white"
              >
                <div 
                  onClick={() => {
                    onClose();
                    onOpenResource(item);
                  }}
                  className="cursor-pointer flex-1"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 mb-1">
                    <span>ক্লাস {item.classId}</span>
                    <span>•</span>
                    <span>{item.subjectName}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 hover:text-indigo-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {item.chapter}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenResource(item);
                    }}
                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                    title="পড়ুন"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    title="বুকমার্ক থেকে সরান"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Bookmark className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">এখনো কোনো বুকমার্ক নেই</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                যেকোনো নোট বা সাজেশনের কার্ডে থাকা বুকমার্ক আইকনে ক্লিক করে এখানে দ্রুত জমিয়ে রাখতে পারেন।
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

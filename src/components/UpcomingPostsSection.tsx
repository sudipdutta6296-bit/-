import { useState } from 'react';
import { UpcomingPost, ClassLevel } from '../types';
import { 
  CalendarClock, 
  Bell, 
  BellRing, 
  Sparkles, 
  User, 
  Tag, 
  CheckCircle2, 
  ArrowRight,
  Pin
} from 'lucide-react';

interface UpcomingPostsSectionProps {
  posts: UpcomingPost[];
  onSelectClass?: (classId: ClassLevel) => void;
}

export default function UpcomingPostsSection({
  posts,
  onSelectClass,
}: UpcomingPostsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [remindedPostIds, setRemindedPostIds] = useState<string[]>([]);
  const [selectedPreviewPost, setSelectedPreviewPost] = useState<UpcomingPost | null>(null);

  const categories = [
    { id: 'all', label: 'সকল পোস্ট' },
    { id: 'নতুন নোটস', label: 'নতুন নোটস' },
    { id: 'মডেল কোশ্চেন', label: 'মডেল কোশ্চেন' },
    { id: 'পরীক্ষা স্পেশাল', label: 'পরীক্ষা স্পেশাল' },
    { id: 'সাজেশন আপডেট', label: 'সাজেশন আপডেট' },
    { id: 'রুটিন ও গাইড', label: 'রুটিন ও গাইড' },
  ];

  const filteredPosts = posts.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const toggleReminder = (postId: string) => {
    setRemindedPostIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  return (
    <section id="upcoming-posts-section" className="scroll-mt-24 py-12 border-t border-slate-200/90 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-2">
              <CalendarClock className="w-3.5 h-3.5 text-indigo-600" />
              <span>নিয়মিত আপডেট ও নোটিশ বোর্ড</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
              আসন্ন পোস্ট ও নতুন স্টাডি ম্যাটেরিয়াল
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              আমাদের অভিজ্ঞ শিক্ষক প্যানেল দ্বারা তৈরি করা আসন্ন অধ্যায় নোটস, টেস্ট পেপারের সমাধান ও মাধ্যমিক স্পেশাল মডেল কোশ্চেন পেপারের সময়সূচী।
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const hasReminder = remindedPostIds.includes(post.id);

            return (
              <div
                key={post.id}
                id={`upcoming-post-${post.id}`}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 relative group ${
                  post.isPinned
                    ? 'border-indigo-300 shadow-md ring-1 ring-indigo-200'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {post.isPinned && (
                  <div className="absolute top-4 right-4 text-indigo-600" title="পিন করা পোস্ট">
                    <Pin className="w-4 h-4 fill-indigo-600 rotate-45" />
                  </div>
                )}

                <div>
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-0.5 rounded-md border border-indigo-200/80">
                      {post.category}
                    </span>
                    <span className="bg-amber-50 text-amber-800 text-[11px] font-semibold px-2 py-0.5 rounded-md border border-amber-200 flex items-center gap-1">
                      <CalendarClock className="w-3 h-3 text-amber-600" />
                      {post.releaseDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug mb-2.5">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Target Classes */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    <span className="text-[11px] font-medium text-slate-400">উপযোগী:</span>
                    {post.classLevel.map((cls) => (
                      <span
                        key={cls}
                        onClick={() => onSelectClass && onSelectClass(cls)}
                        className="bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-[11px] font-bold px-2 py-0.5 rounded cursor-pointer transition-colors"
                      >
                        ক্লাস {cls}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  {post.highlightPoints && post.highlightPoints.length > 0 && (
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 text-xs text-slate-700 mb-5">
                      {post.highlightPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: Author & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate text-xs">
                      <span className="font-semibold text-slate-800 block truncate">{post.author}</span>
                      <span className="text-[10px] text-slate-400 block truncate">{post.authorRole}</span>
                    </div>
                  </div>

                  <button
                    id={`upcoming-reminder-btn-${post.id}`}
                    onClick={() => toggleReminder(post.id)}
                    className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      hasReminder
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                    }`}
                  >
                    {hasReminder ? (
                      <>
                        <BellRing className="w-3.5 h-3.5 text-emerald-700 animate-bounce" />
                        <span>রিমাইন্ডার অন</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5" />
                        <span>বিজ্ঞপ্তি পান</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

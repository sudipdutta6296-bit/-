import { GraduationCap, Heart, BookOpen, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';
import { ClassLevel } from '../types';
import { CLASSES_LIST } from '../data/curriculumData';

interface FooterProps {
  onSelectClass: (classId: ClassLevel) => void;
  onNavigateToUpcoming: () => void;
  onNavigateToContact: () => void;
}

export default function Footer({
  onSelectClass,
  onNavigateToUpcoming,
  onNavigateToContact,
}: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white font-serif">
                শিক্ষাদর্পণ
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদের (WBBSE) বাংলা মাধ্যম ছাত্র-ছাত্রীদের জন্য এক নির্ভরযোগ্য ডিজিটাল শিক্ষামঞ্চ। ক্লাস ৫ থেকে ১০ পর্যন্ত সকল বিষয়ের হ্যান্ডনোটস, সাজেশন ও প্র্যাকটিস টেস্টের সম্পূর্ণ সমাধান।
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 p-2.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>১০০% ফ্রি শিক্ষামূলক উন্মুক্ত প্ল্যাটফর্ম</span>
            </div>
          </div>

          {/* Quick Class links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              শ্রেণী অনুযায়ী পাঠ্যক্রম
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CLASSES_LIST.map((cls) => (
                <li key={cls.id}>
                  <button
                    onClick={() => {
                      onSelectClass(cls.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors text-slate-400 text-left cursor-pointer"
                  >
                    {cls.bengaliName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              স্টাডি সামগ্রী
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  অধ্যায়ভিত্তিক নোটস
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  পরীক্ষা স্পেশাল সাজেশন
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  অনলাইন মক টেস্ট
                </span>
              </li>
              <li>
                <button
                  onClick={onNavigateToUpcoming}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  আসন্ন পোস্ট ও নোটিশ
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              সহায়তা ও যোগাযোগ
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p>শিক্ষক হেল্পলাইন:</p>
              <p className="font-mono text-white font-bold">+91 98300 12345</p>
              <p className="text-[11px] text-slate-500">সোম - শনি (সকাল ১০টা - রাত ৮টা)</p>
              <div className="pt-1">
                <button
                  onClick={onNavigateToContact}
                  className="px-3 py-1.5 bg-indigo-800/80 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  ডাউট বা প্রশ্ন পাঠান
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} শিক্ষাদর্পণ — বাংলা মাধ্যম ডিজিটাল শিক্ষা উদ্যোগ। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>পশ্চিমবঙ্গের সকল ছাত্র-ছাত্রীদের সাফল্যের শুভকামনায়</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}

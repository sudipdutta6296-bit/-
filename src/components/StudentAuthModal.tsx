import { useState, FormEvent } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  LogIn,
  UserPlus
} from 'lucide-react';
import { useStudentAuth } from '../context/StudentAuthContext';
import { ClassLevel } from '../types';
import { CLASSES_LIST, SUBJECTS_MAP } from '../data/curriculumData';

interface StudentAuthModalProps {
  onClose: () => void;
  initialMode?: 'login' | 'register';
  onSuccess?: () => void;
}

export default function StudentAuthModal({
  onClose,
  initialMode = 'login',
  onSuccess,
}: StudentAuthModalProps) {
  const { login, register, loginAsDemo } = useStudentAuth();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [classLevel, setClassLevel] = useState<ClassLevel>('10');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Available subjects for the chosen class
  const classSubjects = SUBJECTS_MAP[classLevel] || [];

  const handleClassChange = (newCls: ClassLevel) => {
    setClassLevel(newCls);
    // Auto-select all subjects of the class by default
    const available = SUBJECTS_MAP[newCls] || [];
    setSelectedSubjects(available.map((s) => s.id));
  };

  const toggleSubject = (subId: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subId) ? prev.filter((id) => id !== subId) : [...prev, subId]
    );
  };

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const res = login(email, password);
    if (res.success) {
      setSuccessMsg('লগইন সফল হয়েছে! ড্যাশবোর্ডে স্বাগতম...');
      setTimeout(() => {
        onClose();
        if (onSuccess) onSuccess();
      }, 700);
    } else {
      setErrorMsg(res.message || 'লগইন ব্যর্থ হয়েছে।');
    }
  };

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const subIds = selectedSubjects.length > 0 ? selectedSubjects : classSubjects.map((s) => s.id);
    const res = register(name, email, password, classLevel, subIds);
    if (res.success) {
      setSuccessMsg('রেজিস্ট্রেশন সফল হয়েছে! আপনার একাউন্ট প্রস্তুত...');
      setTimeout(() => {
        onClose();
        if (onSuccess) onSuccess();
      }, 700);
    } else {
      setErrorMsg(res.message || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে।');
    }
  };

  const handleDemoClick = (demoType: 'rahul' | 'sneha') => {
    loginAsDemo(demoType);
    setSuccessMsg(`ডেমো প্রোফাইলে লগইন করা হয়েছে!`);
    setTimeout(() => {
      onClose();
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient branding */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif">শিক্ষাদর্পণ স্টুডেন্ট একাউন্ট</h2>
              <p className="text-xs text-indigo-200">নিজের ক্লাস অনুযায়ী প্রস্তুতি ও কুইজ ট্র্যাকিং</p>
            </div>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex bg-white/10 p-1 rounded-xl mt-4 border border-white/10">
            <button
              onClick={() => {
                setMode('login');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                mode === 'login'
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>লগইন করুন</span>
            </button>
            <button
              onClick={() => {
                setMode('register');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                mode === 'register'
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>নতুন রেজিস্ট্রেশন</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs font-semibold">
              ⚠️ {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Quick Demo Access banner */}
          <div className="bg-indigo-50/80 border border-indigo-100 rounded-2xl p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>দ্রুত এক-ক্লিকে টেস্ট করতে ডেমো একাউন্ট:</span>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoClick('rahul')}
                className="text-left p-2 rounded-xl bg-white border border-indigo-200/80 hover:border-indigo-400 hover:shadow-xs transition-all text-xs cursor-pointer group"
              >
                <span className="font-bold text-slate-800 group-hover:text-indigo-700 block">
                  রাহুল ব্যানার্জী
                </span>
                <span className="text-[11px] text-slate-500 block">ক্লাস ১০ • ৪টি টেস্ট সম্পন্ন</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoClick('sneha')}
                className="text-left p-2 rounded-xl bg-white border border-indigo-200/80 hover:border-indigo-400 hover:shadow-xs transition-all text-xs cursor-pointer group"
              >
                <span className="font-bold text-slate-800 group-hover:text-indigo-700 block">
                  স্নেহা রায়
                </span>
                <span className="text-[11px] text-slate-500 block">ক্লাস ৮ • বিজ্ঞান ফোকাস</span>
              </button>
            </div>
          </div>

          {mode === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ইমেইল আইডি *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="যেমনঃ student@example.com বা rahul@shiksha.in"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  পাসওয়ার্ড *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="আপনার পাসওয়ার্ড দিন..."
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <LogIn className="w-4 h-4" />
                <span>একাউন্টে প্রবেশ করুন</span>
              </button>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  শিক্ষার্থীর পূর্ণ নাম *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমনঃ অনিরুদ্ধ মুখার্জী"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ইমেইল আইডি *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="যেমনঃ student@gmail.com"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  পাসওয়ার্ড তৈরি করুন *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড..."
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  আপনার শ্রেণী নির্বাচন করুন (Class 5 - 10) *
                </label>
                <select
                  value={classLevel}
                  onChange={(e) => handleClassChange(e.target.value as ClassLevel)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                >
                  {CLASSES_LIST.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.bengaliName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject enrollment selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  আপনার ফোকাস পাঠ্য বিষয়সমূহ নির্বাচন করুন:
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200">
                  {classSubjects.map((sub) => {
                    const isChecked = selectedSubjects.includes(sub.id);
                    return (
                      <label
                        key={sub.id}
                        className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium cursor-pointer border transition-colors ${
                          isChecked
                            ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-bold'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleSubject(sub.id)}
                          className="rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="truncate">{sub.nameBengali}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>বিনামূল্যে একাউন্ট তৈরি করুন</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

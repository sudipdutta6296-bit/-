import { useState, FormEvent } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  MapPin, 
  ChevronDown,
  Sparkles,
  Users
} from 'lucide-react';
import { ClassLevel, ContactMessage } from '../types';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [studentClass, setStudentClass] = useState<ClassLevel | 'other'>('10');
  const [subject, setSubject] = useState('গণিত');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneOrEmail.trim() || !message.trim()) return;

    const newMsg: ContactMessage = {
      id: Date.now().toString(),
      name,
      phoneOrEmail,
      studentClass,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    // Save to local storage for persistence
    const existing = JSON.parse(localStorage.getItem('shiksha_contacts') || '[]');
    localStorage.setItem('shiksha_contacts', JSON.stringify([newMsg, ...existing]));

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhoneOrEmail('');
      setMessage('');
    }, 1500);
  };

  const faqs = [
    {
      q: 'শিক্ষাদর্পণ পোর্টালের নোটস ও সাজেশন কি সম্পূর্ণ বিনামূল্যে পড়তে পারা যাবে?',
      a: 'হ্যাঁ, ক্লাস ৫ থেকে ক্লাস ১০ পর্যন্ত প্রতিটি বিষয়ের মৌলিক নোটস, ব্লুপ্রিন্ট ও প্র্যাকটিস কোশ্চেন সেট সকল ছাত্র-ছাত্রীদের জন্য সম্পূর্ণ ফ্রি। যেকোনো শিক্ষার্থী মোবাইল বা কম্পিউটার থেকে সরাসরি অনুশীলন করতে পারবে।'
    },
    {
      q: 'মাধ্যমিক (Class 10) সাজেশন কতটা নির্ভরযোগ্য?',
      a: 'আমাদের সাজেশনগুলি পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদের (WBBSE) বিগত ১০ বছরের প্রশ্ন কাঠামো ও অভিজ্ঞ প্রধান পরীক্ষকদের পর্যালোচনার মাধ্যমে তৈরি করা হয়। টেস্ট এবং ফাইনাল পরীক্ষার আগে এটি রিভিশনের জন্য অত্যন্ত কার্যকরী।'
    },
    {
      q: 'আমি কি কোনো নোটস বা সাজেশন প্রিন্ট অথবা সেভ করে রাখতে পারি?',
      a: 'অবশ্যই! যেকোনো নোটস বা সাজেশন পড়ার সময় উপরে থাকা "প্রিন্ট" বাটনে ক্লিক করে সরাসরি প্রিন্ট করতে পারেন অথবা পিডিএফ হিসেবে সেভ করে অফলাইনে পড়তে পারেন। এছাড়া বুকমার্ক অপশন দিয়ে অ্যাপেই জমা রাখতে পারেন।'
    },
    {
      q: 'কোনো অঙ্কে বা বিজ্ঞানের প্রশ্নে আটকে গেলে কীভাবে সমাধান পাব?',
      a: 'নিচের ফর্মটিতে আপনার নাম, শ্রেণী এবং সমস্যাটি লিখে পাঠান অথবা আমাদের হোয়াটসঅ্যাপ হেল্পলাইনে ম্যাসেজ করুন। আমাদের শিক্ষক দল যথাসম্ভব দ্রুত উত্তর বুঝিয়ে দেবেন।'
    },
  ];

  return (
    <section id="contact-us-section" className="scroll-mt-24 py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
            <span>সরাসরি শিক্ষক সহায়তা ও ডাউট ক্লিয়ারেন্স</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            কন্টাক্ট আস — আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            পড়াশোনায় কোনো বিষয়ে সমস্যা বা সন্দেহ থাকলে নির্দ্বিধায় আমাদের শিক্ষক প্যানেলকে জানান। আমরা ছাত্র-ছাত্রী ও অভিভাবকদের সহায়তায় সর্বদা দায়বদ্ধ।
          </p>
        </div>

        {/* Contact Grid: Form on left, Helpline/Info on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              <span>আপনার প্রশ্ন বা মতামত জানান</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              ২৪ ঘণ্টার মধ্যে আমাদের বিষয়ভিত্তিক শিক্ষক উত্তর প্রদান করবেন।
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">
                  আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed max-w-md mx-auto">
                  ধন্যবাদ, {name || 'শিক্ষার্থী'}। আপনার প্রশ্নটি আমাদের শিক্ষক বিভাগে প্রেরণ করা হয়েছে। প্রদত্ত নম্বরে বা ইমেইলে দ্রুত উত্তর পাঠানো হবে।
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  অন্য প্রশ্ন লিখুন
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      শিক্ষার্থীর নাম *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="উদাঃ রাহুল ব্যানার্জী"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      মোবাইল / হোয়াটসঅ্যাপ / ইমেইল *
                    </label>
                    <input
                      id="contact-phone-input"
                      type="text"
                      required
                      value={phoneOrEmail}
                      onChange={(e) => setPhoneOrEmail(e.target.value)}
                      placeholder="উদাঃ 98XXXXXXXX / email@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      শ্রেণী নির্বাচন করুন *
                    </label>
                    <select
                      id="contact-class-select"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    >
                      <option value="5">ক্লাস ৫ (পঞ্চম শ্রেণী)</option>
                      <option value="6">ক্লাস ৬ (ষষ্ঠ শ্রেণী)</option>
                      <option value="7">ক্লাস ৭ (সপ্তম শ্রেণী)</option>
                      <option value="8">ক্লাস ৮ (অষ্টম শ্রেণী)</option>
                      <option value="9">ক্লাস ৯ (নবম শ্রেণী)</option>
                      <option value="10">ক্লাস ১০ (দশম শ্রেণী / মাধ্যমিক)</option>
                      <option value="other">অন্যান্য / অভিভাবক</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      সংশ্লিষ্ট বিষয় *
                    </label>
                    <select
                      id="contact-subject-select"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    >
                      <option value="বাংলা">বাংলা</option>
                      <option value="ইংরেজি">ইংরেজি</option>
                      <option value="গণিত">গণিত</option>
                      <option value="ভৌত বিজ্ঞান">ভৌত বিজ্ঞান</option>
                      <option value="জীবন বিজ্ঞান">জীবন বিজ্ঞান</option>
                      <option value="পরিবেশ ও বিজ্ঞান">পরিবেশ ও বিজ্ঞান</option>
                      <option value="ইতিহাস">ইতিহাস</option>
                      <option value="ভূগোল">ভূগোল</option>
                      <option value="সাধারণ প্রশ্ন">সাধারণ পরামর্শ / পরীক্ষা প্রস্তুতি</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    আপনার প্রশ্ন বা সমস্যা বিস্তারিত লিখুন *
                  </label>
                  <textarea
                    id="contact-message-input"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="অধ্যায় বা অংকের নম্বর উল্লেখ করে আপনার প্রশ্নটি লিখুন..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-700 hover:bg-indigo-800 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>বার্তা ও প্রশ্ন পাঠান</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Support & Helpline Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Helpline Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  শিক্ষাদর্পণ স্টুডেন্ট কেয়ার
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  জরুরি সহায়তায় সরাসরি কথা বলুন
                </h4>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">টেলিফোন ও হোয়াটসঅ্যাপ হেল্পলাইন:</span>
                    <span className="font-mono text-base font-bold text-white">+91 98300 12345</span>
                    <span className="text-[11px] text-emerald-300 block">সোম - শনি (সকাল ১০টা - সন্ধ্যা ৮টা)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-indigo-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">ইমেইল যোগাযোগ:</span>
                    <span className="font-semibold text-white">support@shikshadarpan.edu.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">কেন্দ্রীয় শিক্ষাকেন্দ্র:</span>
                    <span className="font-medium text-slate-200">কলেজ স্ট্রিট এডুকেশনাল হাব, কলকাতা - ৭০০০৭৩</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  গড় উত্তর প্রদানের সময়: ২ ঘণ্টা
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[11px] font-bold">
                  সক্রিয়
                </span>
              </div>
            </div>

            {/* Telegram / Social study group */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 text-emerald-950 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-sm text-emerald-900">
                  টেলিগ্রাম স্টাডি গ্রুপ
                </h5>
                <p className="text-xs text-emerald-700 mt-0.5">
                  প্রতিদিন ফ্রি কুইজ ও নতুন পিডিএফ নোটস
                </p>
              </div>
              <span className="px-3 py-1.5 bg-emerald-700 text-white rounded-xl text-xs font-bold shrink-0">
                যোগ দিন
              </span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-slate-100 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              সাধারণ জিজ্ঞাসা (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              ছাত্র-ছাত্রী ও অভিভাবকদের সবচেয়ে ঘন ঘন জিজ্ঞাসিত প্রশ্নাবলীর উত্তর
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-800 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

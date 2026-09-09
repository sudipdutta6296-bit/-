import { ClassInfo, Subject, ResourceItem } from '../types';

export const CLASSES_LIST: ClassInfo[] = [
  {
    id: '5',
    numeric: 5,
    bengaliName: 'ক্লাস ৫ (পঞ্চম শ্রেণী)',
    badge: 'প্রাইমারি কমপ্লিশন',
    tagline: 'মৌলিক ভিত্তি গঠন ও সহজ ভাষায় বিষয়ভিত্তিক ধারণা',
    totalStudentsHelped: '১৫,০০০+ শিক্ষার্থী',
  },
  {
    id: '6',
    numeric: 6,
    bengaliName: 'ক্লাস ৬ (ষষ্ঠ শ্রেণী)',
    badge: 'জুনিয়র সেকশন',
    tagline: 'হাইস্কুলের নতুন পাঠ্যক্রম ও অনুশীলনী সমাধান',
    totalStudentsHelped: '১৮,৫০০+ শিক্ষার্থী',
  },
  {
    id: '7',
    numeric: 7,
    bengaliName: 'ক্লাস ৭ (সপ্তম শ্রেণী)',
    badge: 'মিডল স্কুল',
    tagline: 'বিজ্ঞান, গণিত ও সাহিত্যের ধারণাগত বিকাশ',
    totalStudentsHelped: '২২,০০০+ শিক্ষার্থী',
  },
  {
    id: '8',
    numeric: 8,
    bengaliName: 'ক্লাস ৮ (অষ্টম শ্রেণী)',
    badge: 'স্কলারশিপ ও বেস',
    tagline: 'NMMS স্কলারশিপ ও হাইস্কুল বোর্ড প্রস্তুতির বুনিয়াদ',
    totalStudentsHelped: '২৬,০০০+ শিক্ষার্থী',
  },
  {
    id: '9',
    numeric: 9,
    bengaliName: 'ক্লাস ৯ (নবম শ্রেণী)',
    badge: 'মাধ্যমিক প্রি-বোর্ড',
    tagline: 'ভৌত ও জীবন বিজ্ঞানের পূর্ণাঙ্গ আলোচনা ও গণিত বিশ্লেষণ',
    totalStudentsHelped: '৩২,০০০+ শিক্ষার্থী',
  },
  {
    id: '10',
    numeric: 10,
    bengaliName: 'ক্লাস ১০ (দশম শ্রেণী / মাধ্যমিক)',
    badge: 'মাধ্যমিক স্পেশাল',
    tagline: 'WBBSE মাধ্যমিক পরীক্ষার ১০০% কমন উপযোগী সাজেশন ও টেস্ট পেপার সমাধান',
    totalStudentsHelped: '৪৫,০০০+ শিক্ষার্থী',
  },
];

export const SUBJECTS_MAP: Record<string, Subject[]> = {
  '5': [
    {
      id: 'c5-bengali',
      classId: '5',
      code: 'bengali',
      nameBengali: 'বাংলা (পাতাবাহার)',
      nameEnglish: 'Bengali (Patabahar)',
      bookName: 'পাতাবাহার ও ভাষাপাঠ',
      iconName: 'BookOpen',
      colorTheme: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      totalChapters: 12,
      totalNotes: 24,
      totalSuggestions: 14,
      totalPracticeSets: 8,
    },
    {
      id: 'c5-english',
      classId: '5',
      code: 'english',
      nameBengali: 'ইংরেজি (Butterfly)',
      nameEnglish: 'English (Butterfly)',
      bookName: 'Butterfly & Wings',
      iconName: 'Languages',
      colorTheme: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      totalChapters: 10,
      totalNotes: 20,
      totalSuggestions: 10,
      totalPracticeSets: 6,
    },
    {
      id: 'c5-math',
      classId: '5',
      code: 'mathematics',
      nameBengali: 'গণিত (আমার গণিত)',
      nameEnglish: 'Mathematics (Amar Ganit)',
      bookName: 'আমার গণিত',
      iconName: 'Calculator',
      colorTheme: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      totalChapters: 14,
      totalNotes: 28,
      totalSuggestions: 16,
      totalPracticeSets: 10,
    },
    {
      id: 'c5-environment',
      classId: '5',
      code: 'environment',
      nameBengali: 'আমাদের পরিবেশ',
      nameEnglish: 'Our Environment',
      bookName: 'আমাদের পরিবেশ ও স্বাস্থ্য',
      iconName: 'Trees',
      colorTheme: 'from-green-500 to-emerald-700',
      bgLight: 'bg-green-50 text-green-900 border-green-200',
      totalChapters: 8,
      totalNotes: 18,
      totalSuggestions: 12,
      totalPracticeSets: 7,
    },
  ],
  '6': [
    {
      id: 'c6-bengali',
      classId: '6',
      code: 'bengali',
      nameBengali: 'বাংলা (সাহিত্যমেলা)',
      nameEnglish: 'Bengali (Sahityamela)',
      bookName: 'সাহিত্যমেলা ও ব্যাকরণ',
      iconName: 'BookOpen',
      colorTheme: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      totalChapters: 14,
      totalNotes: 26,
      totalSuggestions: 15,
      totalPracticeSets: 9,
    },
    {
      id: 'c6-english',
      classId: '6',
      code: 'english',
      nameBengali: 'ইংরেজি (Blossoms)',
      nameEnglish: 'English (Blossoms)',
      bookName: 'Blossoms',
      iconName: 'Languages',
      colorTheme: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      totalChapters: 12,
      totalNotes: 22,
      totalSuggestions: 12,
      totalPracticeSets: 8,
    },
    {
      id: 'c6-math',
      classId: '6',
      code: 'mathematics',
      nameBengali: 'গণিত (গণিতপ্রভা)',
      nameEnglish: 'Mathematics (Ganit Prabha)',
      bookName: 'গণিতপ্রভা',
      iconName: 'Calculator',
      colorTheme: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      totalChapters: 18,
      totalNotes: 32,
      totalSuggestions: 18,
      totalPracticeSets: 12,
    },
    {
      id: 'c6-science',
      classId: '6',
      code: 'science',
      nameBengali: 'পরিবেশ ও বিজ্ঞান',
      nameEnglish: 'Science & Environment',
      bookName: 'পরিবেশ ও বিজ্ঞান',
      iconName: 'Atom',
      colorTheme: 'from-cyan-500 to-blue-600',
      bgLight: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      totalChapters: 11,
      totalNotes: 24,
      totalSuggestions: 14,
      totalPracticeSets: 9,
    },
    {
      id: 'c6-history',
      classId: '6',
      code: 'history',
      nameBengali: 'ইতিহাস (অতীত ও ঐতিহ্য)',
      nameEnglish: 'History (Atit O Oitijhyo)',
      bookName: 'অতীত ও ঐতিহ্য',
      iconName: 'Landmark',
      colorTheme: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 text-rose-900 border-rose-200',
      totalChapters: 9,
      totalNotes: 20,
      totalSuggestions: 12,
      totalPracticeSets: 7,
    },
    {
      id: 'c6-geography',
      classId: '6',
      code: 'geography',
      nameBengali: 'ভূগোল (আমাদের পৃথিবী)',
      nameEnglish: 'Geography (Amader Prithibi)',
      bookName: 'আমাদের পৃথিবী',
      iconName: 'Globe',
      colorTheme: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50 text-teal-900 border-teal-200',
      totalChapters: 10,
      totalNotes: 22,
      totalSuggestions: 13,
      totalPracticeSets: 8,
    },
  ],
  '7': [
    {
      id: 'c7-bengali',
      classId: '7',
      code: 'bengali',
      nameBengali: 'বাংলা (সাহিত্যমেলা)',
      nameEnglish: 'Bengali (Sahityamela)',
      bookName: 'সাহিত্যমেলা ও মাকু',
      iconName: 'BookOpen',
      colorTheme: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      totalChapters: 15,
      totalNotes: 28,
      totalSuggestions: 16,
      totalPracticeSets: 10,
    },
    {
      id: 'c7-english',
      classId: '7',
      code: 'english',
      nameBengali: 'ইংরেজি (Blossoms)',
      nameEnglish: 'English (Blossoms)',
      bookName: 'Blossoms',
      iconName: 'Languages',
      colorTheme: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      totalChapters: 12,
      totalNotes: 24,
      totalSuggestions: 14,
      totalPracticeSets: 8,
    },
    {
      id: 'c7-math',
      classId: '7',
      code: 'mathematics',
      nameBengali: 'গণিত (গণিতপ্রভা)',
      nameEnglish: 'Mathematics (Ganit Prabha)',
      bookName: 'গণিতপ্রভা',
      iconName: 'Calculator',
      colorTheme: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      totalChapters: 20,
      totalNotes: 35,
      totalSuggestions: 20,
      totalPracticeSets: 14,
    },
    {
      id: 'c7-science',
      classId: '7',
      code: 'science',
      nameBengali: 'পরিবেশ ও বিজ্ঞান',
      nameEnglish: 'Science & Environment',
      bookName: 'পরিবেশ ও বিজ্ঞান',
      iconName: 'Atom',
      colorTheme: 'from-cyan-500 to-blue-600',
      bgLight: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      totalChapters: 12,
      totalNotes: 26,
      totalSuggestions: 15,
      totalPracticeSets: 10,
    },
    {
      id: 'c7-history',
      classId: '7',
      code: 'history',
      nameBengali: 'ইতিহাস (অতীত ও ঐতিহ্য)',
      nameEnglish: 'History (Atit O Oitijhyo)',
      bookName: 'অতীত ও ঐতিহ্য',
      iconName: 'Landmark',
      colorTheme: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 text-rose-900 border-rose-200',
      totalChapters: 9,
      totalNotes: 21,
      totalSuggestions: 13,
      totalPracticeSets: 7,
    },
    {
      id: 'c7-geography',
      classId: '7',
      code: 'geography',
      nameBengali: 'ভূগোল (আমাদের পৃথিবী)',
      nameEnglish: 'Geography (Amader Prithibi)',
      bookName: 'আমাদের পৃথিবী',
      iconName: 'Globe',
      colorTheme: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50 text-teal-900 border-teal-200',
      totalChapters: 11,
      totalNotes: 23,
      totalSuggestions: 14,
      totalPracticeSets: 9,
    },
  ],
  '8': [
    {
      id: 'c8-bengali',
      classId: '8',
      code: 'bengali',
      nameBengali: 'বাংলা (সাহিত্যমেলা)',
      nameEnglish: 'Bengali (Sahityamela)',
      bookName: 'সাহিত্যমেলা ও পথের পাঁচালী',
      iconName: 'BookOpen',
      colorTheme: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      totalChapters: 16,
      totalNotes: 30,
      totalSuggestions: 18,
      totalPracticeSets: 11,
    },
    {
      id: 'c8-english',
      classId: '8',
      code: 'english',
      nameBengali: 'ইংরেজি (Blossoms)',
      nameEnglish: 'English (Blossoms)',
      bookName: 'Blossoms',
      iconName: 'Languages',
      colorTheme: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      totalChapters: 13,
      totalNotes: 26,
      totalSuggestions: 15,
      totalPracticeSets: 9,
    },
    {
      id: 'c8-math',
      classId: '8',
      code: 'mathematics',
      nameBengali: 'গণিত (গণিতপ্রভা)',
      nameEnglish: 'Mathematics (Ganit Prabha)',
      bookName: 'গণিতপ্রভা',
      iconName: 'Calculator',
      colorTheme: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      totalChapters: 22,
      totalNotes: 40,
      totalSuggestions: 22,
      totalPracticeSets: 15,
    },
    {
      id: 'c8-science',
      classId: '8',
      code: 'science',
      nameBengali: 'পরিবেশ ও বিজ্ঞান',
      nameEnglish: 'Science & Environment',
      bookName: 'পরিবেশ ও বিজ্ঞান',
      iconName: 'Atom',
      colorTheme: 'from-cyan-500 to-blue-600',
      bgLight: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      totalChapters: 14,
      totalNotes: 32,
      totalSuggestions: 19,
      totalPracticeSets: 12,
    },
    {
      id: 'c8-history',
      classId: '8',
      code: 'history',
      nameBengali: 'ইতিহাস (অতীত ও ঐতিহ্য)',
      nameEnglish: 'History (Atit O Oitijhyo)',
      bookName: 'অতীত ও ঐতিহ্য',
      iconName: 'Landmark',
      colorTheme: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 text-rose-900 border-rose-200',
      totalChapters: 10,
      totalNotes: 24,
      totalSuggestions: 14,
      totalPracticeSets: 8,
    },
    {
      id: 'c8-geography',
      classId: '8',
      code: 'geography',
      nameBengali: 'ভূগোল (আমাদের পৃথিবী)',
      nameEnglish: 'Geography (Amader Prithibi)',
      bookName: 'আমাদের পৃথিবী',
      iconName: 'Globe',
      colorTheme: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50 text-teal-900 border-teal-200',
      totalChapters: 11,
      totalNotes: 25,
      totalSuggestions: 15,
      totalPracticeSets: 10,
    },
  ],
  '9': [
    {
      id: 'c9-bengali',
      classId: '9',
      code: 'bengali',
      nameBengali: 'বাংলা (সাহিত্য সঞ্চয়ন)',
      nameEnglish: 'Bengali (Sahitya Sanchayan)',
      bookName: 'সাহিত্য সঞ্চয়ন ও প্রফেসর শঙ্কুর ডায়েরি',
      iconName: 'BookOpen',
      colorTheme: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      totalChapters: 18,
      totalNotes: 36,
      totalSuggestions: 22,
      totalPracticeSets: 14,
    },
    {
      id: 'c9-english',
      classId: '9',
      code: 'english',
      nameBengali: 'ইংরেজি (Bliss)',
      nameEnglish: 'English (Bliss)',
      bookName: 'Bliss (Class IX)',
      iconName: 'Languages',
      colorTheme: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      totalChapters: 12,
      totalNotes: 28,
      totalSuggestions: 16,
      totalPracticeSets: 10,
    },
    {
      id: 'c9-math',
      classId: '9',
      code: 'mathematics',
      nameBengali: 'গণিত (গণিত প্রকাশ)',
      nameEnglish: 'Mathematics (Ganit Prakash)',
      bookName: 'গণিত প্রকাশ - নবম শ্রেণী',
      iconName: 'Calculator',
      colorTheme: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      totalChapters: 21,
      totalNotes: 44,
      totalSuggestions: 26,
      totalPracticeSets: 18,
    },
    {
      id: 'c9-physci',
      classId: '9',
      code: 'physical_science',
      nameBengali: 'ভৌত বিজ্ঞান ও পরিবেশ',
      nameEnglish: 'Physical Science',
      bookName: 'ভৌত বিজ্ঞান ও পরিবেশ (Class 9)',
      iconName: 'Atom',
      colorTheme: 'from-violet-500 to-purple-600',
      bgLight: 'bg-violet-50 text-violet-900 border-violet-200',
      totalChapters: 8,
      totalNotes: 38,
      totalSuggestions: 24,
      totalPracticeSets: 16,
    },
    {
      id: 'c9-lifesci',
      classId: '9',
      code: 'life_science',
      nameBengali: 'জীবন বিজ্ঞান ও পরিবেশ',
      nameEnglish: 'Life Science',
      bookName: 'জীবন বিজ্ঞান ও পরিবেশ (Class 9)',
      iconName: 'Dna',
      colorTheme: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50 text-teal-900 border-teal-200',
      totalChapters: 5,
      totalNotes: 34,
      totalSuggestions: 20,
      totalPracticeSets: 14,
    },
    {
      id: 'c9-history',
      classId: '9',
      code: 'history',
      nameBengali: 'ইতিহাস ও পরিবেশ',
      nameEnglish: 'History & Environment',
      bookName: 'ইতিহাস ও পরিবেশ (Class 9)',
      iconName: 'Landmark',
      colorTheme: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 text-rose-900 border-rose-200',
      totalChapters: 7,
      totalNotes: 30,
      totalSuggestions: 18,
      totalPracticeSets: 11,
    },
    {
      id: 'c9-geography',
      classId: '9',
      code: 'geography',
      nameBengali: 'ভূগোল ও পরিবেশ',
      nameEnglish: 'Geography & Environment',
      bookName: 'ভূগোল ও পরিবেশ (Class 9)',
      iconName: 'Globe',
      colorTheme: 'from-cyan-500 to-sky-600',
      bgLight: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      totalChapters: 10,
      totalNotes: 32,
      totalSuggestions: 19,
      totalPracticeSets: 12,
    },
  ],
  '10': [
    {
      id: 'c10-bengali',
      classId: '10',
      code: 'bengali',
      nameBengali: 'বাংলা (সাহিত্য সঞ্চয়ন ও কোনি)',
      nameEnglish: 'Bengali (Sahitya Sanchayan)',
      bookName: 'সাহিত্য সঞ্চয়ন, কোনি ও ব্যাকরণ',
      iconName: 'BookOpen',
      colorTheme: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      totalChapters: 19,
      totalNotes: 48,
      totalSuggestions: 30,
      totalPracticeSets: 20,
    },
    {
      id: 'c10-english',
      classId: '10',
      code: 'english',
      nameBengali: 'ইংরেজি (Bliss - Madhyamik)',
      nameEnglish: 'English (Bliss)',
      bookName: 'Bliss (Class X)',
      iconName: 'Languages',
      colorTheme: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      totalChapters: 8,
      totalNotes: 36,
      totalSuggestions: 24,
      totalPracticeSets: 15,
    },
    {
      id: 'c10-math',
      classId: '10',
      code: 'mathematics',
      nameBengali: 'গণিত (গণিত প্রকাশ - মাধ্যমিক)',
      nameEnglish: 'Mathematics (Ganit Prakash)',
      bookName: 'গণিত প্রকাশ - দশম শ্রেণী',
      iconName: 'Calculator',
      colorTheme: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      totalChapters: 26,
      totalNotes: 60,
      totalSuggestions: 40,
      totalPracticeSets: 25,
    },
    {
      id: 'c10-physci',
      classId: '10',
      code: 'physical_science',
      nameBengali: 'ভৌত বিজ্ঞান ও পরিবেশ (মাধ্যমিক)',
      nameEnglish: 'Physical Science (Madhyamik)',
      bookName: 'ভৌত বিজ্ঞান ও পরিবেশ',
      iconName: 'Atom',
      colorTheme: 'from-violet-500 to-purple-600',
      bgLight: 'bg-violet-50 text-violet-900 border-violet-200',
      totalChapters: 8,
      totalNotes: 52,
      totalSuggestions: 35,
      totalPracticeSets: 22,
    },
    {
      id: 'c10-lifesci',
      classId: '10',
      code: 'life_science',
      nameBengali: 'জীবন বিজ্ঞান ও পরিবেশ (মাধ্যমিক)',
      nameEnglish: 'Life Science (Madhyamik)',
      bookName: 'জীবন বিজ্ঞান ও পরিবেশ',
      iconName: 'Dna',
      colorTheme: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50 text-teal-900 border-teal-200',
      totalChapters: 5,
      totalNotes: 50,
      totalSuggestions: 32,
      totalPracticeSets: 20,
    },
    {
      id: 'c10-history',
      classId: '10',
      code: 'history',
      nameBengali: 'ইতিহাস ও পরিবেশ (মাধ্যমিক)',
      nameEnglish: 'History & Environment (Madhyamik)',
      bookName: 'ইতিহাস ও পরিবেশ',
      iconName: 'Landmark',
      colorTheme: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 text-rose-900 border-rose-200',
      totalChapters: 8,
      totalNotes: 42,
      totalSuggestions: 28,
      totalPracticeSets: 18,
    },
    {
      id: 'c10-geography',
      classId: '10',
      code: 'geography',
      nameBengali: 'ভূগোল ও পরিবেশ (মাধ্যমিক)',
      nameEnglish: 'Geography & Environment (Madhyamik)',
      bookName: 'ভূগোল ও পরিবেশ',
      iconName: 'Globe',
      colorTheme: 'from-cyan-500 to-sky-600',
      bgLight: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      totalChapters: 6,
      totalNotes: 45,
      totalSuggestions: 30,
      totalPracticeSets: 19,
    },
  ],
};

export const SAMPLE_RESOURCES: ResourceItem[] = [
  // CLASS 10 - Physical Science
  {
    id: 'res-c10-phys-01',
    classId: '10',
    subjectId: 'c10-physci',
    subjectName: 'ভৌত বিজ্ঞান ও পরিবেশ',
    type: 'note',
    title: 'পরিবেশের জন্য ভাবনা: ওজোন স্তর ও গ্রিনহাউস প্রভাব',
    chapter: 'অধ্যায় ১: পরিবেশের জন্য ভাবনা',
    chapterNumber: 1,
    readTime: '৮ মিনিট',
    difficulty: 'ভেরি ইম্পর্্যান্ট',
    viewsCount: 14200,
    publishedDate: '2026-03-01',
    isTrending: true,
    isNew: false,
    summary: 'বায়ুমণ্ডলের বিভিন্ন স্তরের বিন্যাস, ওজোন স্তর সৃষ্টি ও ধ্বংসের সমীকরণ, সিএফসির ভূমিকা এবং অপ্রচলিত শক্তির সম্ভাবনা সংক্রান্ত বিশদ হ্যান্ডনোট।',
    keyPoints: [
      'ট্রপোস্ফিয়ারকে ক্ষুব্ধমণ্ডল বলা হয় কারণ এই স্তরে ঝড়-বৃষ্টি ইত্যাদি প্রাকৃতিক দুর্যোগ ঘটে।',
      'স্ট্র্যাটোস্ফিয়ারকে শান্তমণ্ডল বলে, বিমান এই স্তর দিয়ে যাতায়াত করে।',
      'ওজোন স্তর বিনষ্টে CFC (ক্লোরোফ্লুরো কার্বন) থেকে মুক্ত ক্লোরিন পরমাণু (Cl•) অনুঘটক হিসেবে কাজ করে।',
      'গ্রিনহাউস গ্যাসের প্রভাব: পৃথিবী পৃষ্ঠের গড় উষ্ণতা বজায় রাখা (+15°C)। বৃদ্ধি পেলে গ্লোবাল ওয়ার্মিং সৃষ্টি হয়।',
      'পুনর্নবীকরণযোগ্য শক্তি: সৌরশক্তি, বায়ুশক্তি, ভূতাপীয় শক্তি, বায়োমাস ইত্যাদি।',
    ],
    importantFormulas: [
      'CF2Cl2 + UV → CF2Cl• + Cl•',
      'Cl• + O3 → ClO• + O2',
      'ClO• + O → Cl• + O2',
      'মিথেন হাইড্রট সূত্র: 4CH4·23H2O (একে ফায়ার আইস বলা হয়)',
    ],
    content: `## ১. বায়ুমণ্ডলের স্তরবিন্যাস
বায়ুমণ্ডলকে উষ্ণতার তারতম্য ও রাসায়নিক গঠন অনুসারে প্রধানত ছয়টি স্তরে বিভক্ত করা যায়:
1. **ট্রপোস্ফিয়ার (Troposphere):** ভূপৃষ্ঠ থেকে প্রায় ১২ কিমি পর্যন্ত বিস্তৃত। প্রতি ১০০০ মিটার উচ্চতা বৃদ্ধিতে তাপমাত্রা ৬.৫°C হারে হ্রাস পায় (Normal Lapse Rate)। মেঘ, বৃষ্টি, কুয়াশা এই স্তরেই তৈরি হয়।
2. **স্ট্র্যাটোস্ফিয়ার (Stratosphere):** ১২ কিমি থেকে ৪৫ কিমি। কোনো জলকণা বা ধূলিকণা না থাকায় শান্তমণ্ডল নামে পরিচিত। জেট বিমান এই স্তর দিয়েই চলাচল করে।
3. **ওজোন স্তর (Ozonosphere):** স্ট্র্যাটোস্ফিয়ারের ২০-৩৫ কিমির মধ্যে অবস্থিত ওজোন গ্যাস সূর্যের অতিবেগুনি রশ্মি (UV-B, UV-C) শোষণ করে ক্ষতিকর প্রভাব থেকে জীবজগৎ রক্ষা করে।
4. **মেসোস্ফিয়ার (Mesosphere):** ৪৫ থেকে ৮৫ কিমি। বায়ুমণ্ডলের শীতলতম স্তর (সর্বনিম্ন তাপমাত্রা -৯৫°C পর্যন্ত)। উল্কা এই স্তরে এসে পুড়ে ছাই হয়।
5. **থার্মোস্ফিয়ার বা আয়নোস্ফিয়ার (Thermosphere/Ionosphere):** বেতার তরঙ্গ এই স্তর থেকে প্রতিফলিত হয়ে পৃথিবীতে ফিরে আসে। মেরুজ্যোতি (Aurora) এই স্তরে সৃষ্টি হয়।
6. **এক্সোস্ফিয়ার ও ম্যাগনেটোস্ফিয়ার:** বায়ুমণ্ডলের সর্বোচ্চ স্তর।

## ২. ওজোন স্তরের ক্ষয় ও কারণ
- ওজোন অণু সৃষ্টি: O2 + UV রশ্মি → O + O; O + O2 → O3
- ওজোন ধ্বংসকারী গ্যাসসমূহ: CFC (ক্লোরোফ্লুরো কার্বন বা ফ্রিয়ন), নাইট্রোজেনের অক্সাইডসমূহ (NO, NO2), হ্যালন ইত্যাদি।
- প্রধান বিক্রিয়া:
  - CF2Cl2 + UV-ray → •CF2Cl + •Cl
  - •Cl + O3 → •ClO + O2
  - •ClO + O → •Cl + O2
  একটি সক্রিয় ক্লোরিন পরমাণু প্রায় এক লক্ষ ওজোন অণুকে ভেঙে নষ্ট করতে পারে।

## ৩. গ্রিনহাউস গ্যাস ও বিশ্ব উষ্ণায়ন
- **প্রধান গ্রিনহাউস গ্যাসসমূহ:** জলীয় বাষ্প (সবচেয়ে বেশি প্রভাব), কার্বন ডাই-অক্সাইড (CO2 - প্রধান মানবসৃষ্ট), মিথেন (CH4), নাইট্রাস অক্সাইড (N2O), ওজোন (O3), CFCs।
- **ফায়ার আইস (Fire Ice):** মিথেন হাইড্রেট (4CH4·23H2O) দেখতে বরফের মতো অথচ দাহ্য। সমুদ্রের তলদেশে উচ্চ চাপে ও কম তাপমাত্রায় সঞ্চিত থাকে। ভবিষ্যৎ জ্বালানির বিকল্প উৎস।`,
  },
  {
    id: 'res-c10-phys-02',
    classId: '10',
    subjectId: 'c10-physci',
    subjectName: 'ভৌত বিজ্ঞান ও পরিবেশ',
    type: 'suggestion',
    title: 'মাধ্যমিক ভৌত বিজ্ঞান ১০০% কমন লাস্ট মিনিট সাজেশন',
    chapter: 'অধ্যায় ১ ও ২: পরিবেশ ও গ্যাসের আচরণ',
    chapterNumber: 2,
    readTime: '১২ মিনিট',
    difficulty: 'ভেরি ইম্পর্্যান্ট',
    viewsCount: 28900,
    publishedDate: '2026-03-05',
    isTrending: true,
    isNew: true,
    summary: 'বয়েলের সূত্র, চার্লসের সূত্র, অ্যাভোগাড্রো প্রকল্পের গাণিতিক সমস্যা এবং পরিবেশ সম্পর্কিত সম্ভাব্য ২ ও ৩ নম্বরের নির্বাচিত প্রশ্ন সংকলন।',
    keyPoints: [
      '★ চার্লসের সূত্রের V-t লেখচিত্র ও পরম শূন্য উষ্ণতার সংজ্ঞা (-২৭৩°C)।',
      '★ আদর্শ গ্যাস ও বাস্তব গ্যাসের বিচ্যুতির কারণ (ভ্যান ডার ওয়ালস সংশোধন)।',
      '★ বয়েলের সূত্রের গাণিতিক রূপ P1V1 = P2V2 এবং PV বনাম P লেখচিত্র।',
      '★ পিভি = এনআরটি (PV = nRT) সম্পর্কিত নিউমেরিক্যাল প্রবলেম।',
      '★ বায়োগ্যাস ও কয়লাখনির মিথেন ব্যবহারের উপকারিতা।',
    ],
    importantFormulas: [
      'বয়েল ও চার্লসের সমন্বয় সূত্র: P1V1 / T1 = P2V2 / T2',
      'গ্যাসের আদর্শ সমীকরণ: PV = (W / M) RT',
      'বাষ্পঘনত্ব ও আণবিক ভরের সম্পর্ক: M = 2D',
    ],
    content: `## মাধ্যমিক স্পেশাল সাজেশন: গ্যাসের আচরণ ও পরিবেশ

### [২ নম্বরের গুরুত্বপূর্ণ প্রশ্নাবলী]
1. পরম শূন্য উষ্ণতা কাকে বলে? চার্লসের সূত্র থেকে এর মান কীভাবে নির্ণয় করা যায়? ★★★
2. বায়ুমণ্ডলের কোন স্তরকে কেন 'ক্ষুব্ধমণ্ডল' এবং কোন স্তরকে কেন 'শান্তমণ্ডল' বলা হয়? ★★★
3. বাস্তব গ্যাসগুলি আদর্শ গ্যাসের মতো আচরণ করে কোন কোন শর্তে? আদর্শ আচরণ থেকে বিচ্যুতির দুটি কারণ লেখো। ★★★
4. বেলুনে বাতাস ভরলে আয়তন ও চাপ উভয়ই বৃদ্ধি পায়। এক্ষেত্রে কি বয়েলের সূত্র লঙ্ঘিত হয়? ব্যাখ্যা করো। ★★★
5. মিথেন হাইড্রেট কী? একে 'ফায়ার আইস' বলা হয় কেন? ★★☆
6. ওজোন স্তর ধ্বংসে CFC এর ক্ষতিকর ভূমিকা সমীকরণসহ লেখো। ★★★

### [৩ নম্বরের গাণিতিক ও ব্যাখ্যামূলক প্রশ্নাবলী]
1. চার্লস ও বয়েলের সূত্র সমন্বয় করে PV = nRT প্রতিষ্ঠা করো (যেখানে প্রতীকগুলি প্রচলিত অর্থে ব্যবহৃত)। ★★★
2. নির্দিষ্ট উষ্ণতা ও চাপে একটি নির্দিষ্ট ভরের গ্যাসের আয়তন 750 mL। চাপ স্থির রেখে উষ্ণতা কত গুণ করলে আয়তন দ্বিগুণ হবে?
3. 27°C উষ্ণতায় ও 750 mm Hg চাপে কোনো গ্যাসের আয়তন 300 cm³। প্রমাণ উষ্ণতা ও চাপে (STP) ওই গ্যাসের আয়তন কত হবে? ★★★
4. গ্যাসের গতীয় তত্ত্বের প্রধান তিনটি স্বীকার্য উল্লেখ করো।
5. সার্বজনীন গ্যাস ধ্রুবক R-এর SI এককে মান কত এবং এর মাত্রীয় সংকেত নির্ণয় করো। ★★★`,
  },
  {
    id: 'res-c10-phys-03',
    classId: '10',
    subjectId: 'c10-physci',
    subjectName: 'ভৌত বিজ্ঞান ও পরিবেশ',
    type: 'practice',
    title: 'প্র্যাকটিস সেট ১: পরিবেশ ও গ্যাসের আচরণ মক টেস্ট (MCQ ও SAQ)',
    chapter: 'অধ্যায় ১ ও ২: পরিবেশ ও গ্যাসের আচরণ',
    chapterNumber: 2,
    readTime: '১৫ মিনিট টেস্ট',
    difficulty: 'মাঝারি',
    viewsCount: 19400,
    publishedDate: '2026-03-08',
    isTrending: true,
    isNew: true,
    summary: 'মাধ্যমিক বোর্ডের প্রশ্নকাঠামো অনুযায়ী সম্পূর্ণ ব্যাখ্যাসহ ৫টি গুরুত্বপূর্ণ বহুনির্বাচনী প্রশ্ন (MCQ) এবং স্বমূল্যায়ন মডিউল।',
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        marks: 1,
        question: 'নিচের কোনটি গ্রিনহাউস গ্যাস নয়?',
        options: ['মিথেন (CH4)', 'জলীয় বাষ্প (H2O)', 'নাইট্রোজেন (N2)', 'কার্বন ডাই-অক্সাইড (CO2)'],
        correctAnswer: 2,
        explanation: 'নাইট্রোজেন (N2) এবং অক্সিজেন (O2) দ্বি-পরমাণুক গ্যাস হওয়ায় অবলোহিত রশ্মি (IR) শোষণ করতে পারে না, তাই এরা গ্রিনহাউস গ্যাস নয়।'
      },
      {
        id: 'q2',
        type: 'mcq',
        marks: 1,
        question: 'ফারেনহাইট স্কেলে পরম শূন্য উষ্ণতার মান কত?',
        options: ['-273°F', '-459.67°F', '0°F', '-491.67°F'],
        correctAnswer: 1,
        explanation: 'সেলসিয়াস স্কেলে পরম শূন্য হলো -273.15°C। ফারেনহাইটে রূপান্তর করলে F = (9/5)C + 32 সূত্র অনুযায়ী মান আসে -459.67°F।'
      },
      {
        id: 'q3',
        type: 'mcq',
        marks: 1,
        question: 'মিথেন হাইড্রেটের রাসায়নিক সংকেত নিচের কোনটি?',
        options: ['CH4·6H2O', '4CH4·23H2O', '2CH4·10H2O', 'CH4·2H2O'],
        correctAnswer: 1,
        explanation: 'মিথেন হাইড্রেটের নির্দিষ্ট সংকেত 4CH4·23H2O। একে ফায়ার আইস বলা হয় কারণ এটি দেখতে বরফের মতো কিন্তু এতে থাকা মিথেন গ্যাসে আগুন ধরে।'
      },
      {
        id: 'q4',
        type: 'mcq',
        marks: 1,
        question: 'স্থির চাপে কোনো নির্দিষ্ট ভরের গ্যাসের উষ্ণতা 0°C থেকে বৃদ্ধি পেয়ে 273°C হলে আয়তন কত গুণ হবে?',
        options: ['অর্ধেক হবে', 'একই থাকবে', 'দ্বিগুণ হবে', 'চারগুণ হবে'],
        correctAnswer: 2,
        explanation: 'চার্লসের পরম স্কেলের সূত্র V ∝ T। শুরুতে T1 = 273 K, পরে T2 = 273 + 273 = 546 K (যা দ্বিগুণ)। ফলে আয়তনও দ্বিগুণ হবে।'
      },
      {
        id: 'q5',
        type: 'mcq',
        marks: 1,
        question: 'একটি আদর্শ গ্যাসের ক্ষেত্রে PV বনাম P লেখচিত্রটির প্রকৃতি কী হবে?',
        options: ['মূলবিন্দুগামী সরলরেখা', 'P-অক্ষের সমান্তরাল সরলরেখা', 'অধিবৃত্তাকার', 'V-অক্ষের সমান্তরাল'],
        correctAnswer: 1,
        explanation: 'বয়েলের সূত্রানুযায়ী স্থির উষ্ণতায় PV সর্বদা ধ্রুবক থাকে। ফলে চাপ P পরিবর্তিত হলেও PV অপরিবর্তিত থাকে, তাই লেখচিত্রটি P-অক্ষের সমান্তরাল সরলরেখা।'
      }
    ],
    content: 'এই প্র্যাকটিস সেটে পরিবেশের জন্য ভাবনা ও গ্যাসের আচরণের নির্বাচিত ৫টি প্রশ্ন রয়েছে। প্রতিটি প্রশ্নের সাথে সঠিক উত্তর এবং যুক্তি ব্যাখ্যা করা আছে।',
  },

  // CLASS 10 - Mathematics
  {
    id: 'res-c10-math-01',
    classId: '10',
    subjectId: 'c10-math',
    subjectName: 'গণিত (গণিত প্রকাশ)',
    type: 'note',
    title: 'একচল বিশিষ্ট দ্বিঘাত সমীকরণ: সূত্র ও প্রয়োগ পদ্ধতি',
    chapter: 'অধ্যায় ১: একচল বিশিষ্ট দ্বিঘাত সমীকরণ',
    chapterNumber: 1,
    readTime: '১০ মিনিট',
    difficulty: 'গুরুত্বপূর্ণ',
    viewsCount: 16500,
    publishedDate: '2026-03-02',
    isTrending: true,
    isNew: false,
    summary: 'ax² + bx + c = 0 সাধারণ আকার, শ্রীধর আচার্যের সূত্র, নিরূপক (Discriminant) ও বীজের প্রকৃতি সংক্রান্ত সম্পূর্ণ অধ্যায় নোট।',
    keyPoints: [
      'সাধারণ রূপ: ax² + bx + c = 0, যেখানে a, b, c বাস্তব সংখ্যা এবং a ≠ 0।',
      'শ্রীধর আচার্যের সূত্রের সাহায্যে সরাসরি বীজ নির্ণয়: x = [-b ± √(b² - 4ac)] / (2a)।',
      'নিরূপক (D) = b² - 4ac এর ৩টি ক্ষেত্র:',
      '  - D > 0 হলে বীজদ্বয় বাস্তব ও অসমান।',
      '  - D = 0 হলে বীজদ্বয় বাস্তব ও সমান (প্রত্যেক বীজ = -b / 2a)।',
      '  - D < 0 হলে কোনো বাস্তব বীজ পাওয়া যায় না।',
      'বীজদ্বয়ের যোগফল (α + β) = -b/a এবং গুণফল (α · β) = c/a।',
    ],
    importantFormulas: [
      'D = b² - 4ac (নিরূপক)',
      'x = (-b ± √D) / (2a)',
      'α + β = -b/a',
      'α · β = c/a',
      'সমীকরণ গঠন: x² - (বীজদ্বয়ের সমষ্টি)x + (বীজদ্বয়ের গুণফল) = 0',
    ],
    content: `## ১. দ্বিঘাত সমীকরণের প্রাথমিক ধারণা
যে সমীকরণকে ax² + bx + c = 0 (যেখানে a, b, c বাস্তব এবং a ≠ 0) আকারে প্রকাশ করা যায়, তাকে একচল বিশিষ্ট দ্বিঘাত সমীকরণ বলে।
যদি a = 0 হয় তবে এটি আর দ্বিঘাত থাকে না, একঘাত রৈখিক সমীকরণ হয়ে যায়।

## ২. শ্রীধর আচার্যের সূত্র
যেকোনো দ্বিঘাত সমীকরণ ax² + bx + c = 0 সমাধান করার জন্য ভারতীয় গণিতবিদ শ্রীধর আচার্য এই পদ্ধতি আবিষ্কার করেন:
x = [-b ± √(b² - 4ac)] / 2a

এখানে b² - 4ac রাশিটিকে সমীকরণের **নিরূপক (Discriminant)** বলা হয়।

## ৩. বীজের প্রকৃতি বিশ্লেষণ
1. **b² - 4ac > 0:** বীজ দুটি বাস্তব ও অসমান হবে।
2. **b² - 4ac = 0:** বীজ দুটি বাস্তব ও সমান হবে।
3. **b² - 4ac < 0:** কোনো বাস্তব বীজ থাকবে না (বীজদ্বয় কাল্পনিক)।
4. **b² - 4ac পূর্ণবর্গ সংখ্যা হলে:** বীজদ্বয় মূলদ হবে।

## ৪. বাস্তব সমস্যায় দ্বিঘাত সমীকরণের গঠন
গতিবেগ, কাজের অঙ্ক, ট্রেন সমস্যা এবং ত্রিভুজ-আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয়ে চলরাশি 'x' ধরে ax² + bx + c = 0 আকার গঠন করে সমাধান করতে হয়।`,
  },
  {
    id: 'res-c10-math-02',
    classId: '10',
    subjectId: 'c10-math',
    subjectName: 'গণিত (গণিত প্রকাশ)',
    type: 'suggestion',
    title: 'মাধ্যমিক গণিত উপপাদ্য ও সম্পাদ্য চূড়ান্ত সাজেশন',
    chapter: 'অধ্যায় ৭ ও ১১: বৃত্তস্থ কোণ ও সম্পাদ্য',
    chapterNumber: 7,
    readTime: '৭ মিনিট',
    difficulty: 'ভেরি ইম্পর্্যান্ট',
    viewsCount: 34100,
    publishedDate: '2026-03-04',
    isTrending: true,
    isNew: true,
    summary: 'বোর্ডের টেস্ট ও ফাইনাল পরীক্ষায় ১০০% কমনযোগ্য ৩টি প্রধান উপপাদ্য, ২টি সম্পাদ্য এবং পরিমিতির গুরুত্বপূর্ণ অংক।',
    keyPoints: [
      '★ উপপাদ্য ৩৪: কোনো বৃত্তের একই বৃত্তচাপের ওপর গঠিত সম্মুখ কেন্দ্রস্থ কোণ ওই বৃত্তচাপের ওপর গঠিত যেকোনো বৃত্তস্থ কোণের দ্বিগুণ। (Most Important)',
      '★ উপপাদ্য ৩৮: বৃত্তস্থ চতুর্ভুজের বিপরীত কোণগুলি পরস্পর সম্পূরক।',
      '★ উপপাদ্য ৪৯: পিথাগোরাসের উপপাদ্য প্রমাণ করো।',
      '★ সম্পাদ্য: ত্রিভুজের পরিবৃত্ত ও অন্তর্বৃত্ত অঙ্কন (স্কেল ও পেন্সিল কম্পাস)।',
      '★ জ্যামিতিক পদ্ধতিতে √21 বা √23 এর মান নির্ণয়।',
    ],
    importantFormulas: [
      'কেন্দ্রস্থ কোণ = ২ × বৃত্তস্থ কোণ (∠AOB = 2 ∠ACB)',
      'বৃত্তস্থ চতুর্ভুজ ABCD হলে ∠A + ∠C = 180°',
      'পিথাগোরাস: অতিভুজ² = লম্ব² + ভূমি²',
    ],
    content: `## মাধ্যমিক উপপাদ্য সাজেশন (প্রতিটি ৫ নম্বর)
1. **উপপাদ্য ৩৪:** প্রমাণ করো যে, কোনো বৃত্তের একই বৃত্তচাপের ওপর অবস্থিত কেন্দ্রস্থ কোণ ওই বৃত্তচাপের ওপর অবস্থিত যেকোনো বৃত্তস্থ কোণের দ্বিগুণ। ★★★★★
2. **উপপাদ্য ৪৯ (পিথাগোরাসের উপপাদ্য):** প্রমাণ করো যে, যেকোনো সমকোণী ত্রিভুজের অতিভুজের ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল অপর দুই বাহুর ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফলের সমষ্টির সমান। ★★★★★
3. **উপপাদ্য ৪৮ (সদৃশতা):** যে-কোনো সমকোণী ত্রিভুজের সমকৌণিক বিন্দু থেকে অতিভুজের ওপর লম্ব অঙ্কন করলে, ওই লম্বের উভয় পার্শ্বস্থিত ত্রিভুজদ্বয় সদৃশ এবং প্রত্যেকে মূল ত্রিভুজের সাথে সদৃশ। ★★★★☆
4. **উপপাদ্য ৩২:** ব্যাস নয় এরূপ কোনো জ্যা-এর ওপর বৃত্তের কেন্দ্র থেকে লম্ব অঙ্কন করা হলে, ওই লম্ব জ্যাটিকে সমদ্বিখণ্ডিত করে। ★★★☆☆

## সম্পাদ্য সাজেশন (প্রতিটি ৫ নম্বর)
1. একটি ত্রিভুজ অঙ্কন করো যার বাহুত্রয় 5 cm, 6 cm ও 7 cm। ওই ত্রিভুজটির পরিবৃত্ত অঙ্কন করো। ★★★★★
2. একটি সমবাহু ত্রিভুজ অঙ্কন করে তার অন্তর্বৃত্ত অঙ্কন করো। কেবল অঙ্কন চিহ্ন দিতে হবে। ★★★★☆
3. জ্যামিতিক উপায়ে √21 অথবা √28 এর মান নির্ণয় করো। ★★★★☆`,
  },
  {
    id: 'res-c10-math-03',
    classId: '10',
    subjectId: 'c10-math',
    subjectName: 'গণিত (গণিত প্রকাশ)',
    type: 'practice',
    title: 'প্র্যাকটিস সেট: দ্বিঘাত সমীকরণ ও সরল সুদকষা টেস্ট',
    chapter: 'অধ্যায় ১ ও ২',
    chapterNumber: 1,
    readTime: '২০ মিনিট টেস্ট',
    difficulty: 'গুরুত্বপূর্ণ',
    viewsCount: 22000,
    publishedDate: '2026-03-07',
    isTrending: false,
    isNew: true,
    summary: 'মাধ্যমিক শর্ট কোশ্চেন এবং ২ নম্বরের সংক্ষিপ্ত সমাধান সমৃদ্ধ ৫টি প্র্যাকটিস অংক।',
    questions: [
      {
        id: 'qm1',
        type: 'mcq',
        marks: 1,
        question: 'ax² + bx + c = 0 সমীকরণের বীজ দুটি বাস্তব ও সমান হলে নিচের কোন সম্পর্কটি সঠিক?',
        options: ['b² = 4ac', 'b² > 4ac', 'b² < 4ac', 'b = 0'],
        correctAnswer: 0,
        explanation: 'দ্বিঘাত সমীকরণের নিরূপক b² - 4ac = 0 হলেই বীজদ্বয় বাস্তব ও সমান হয়। সুতরাং b² = 4ac।'
      },
      {
        id: 'qm2',
        type: 'mcq',
        marks: 1,
        question: 'কোনো মূলধন বার্ষিক 6¼% সরল সুদে কত বছরে দ্বিগুণ হবে?',
        options: ['12 বছর', '16 বছর', '10 বছর', '20 বছর'],
        correctAnswer: 1,
        explanation: 'ধরি আসল P টাকা। দ্বিগুণ হলে সুদ I = P টাকা। t = (I × 100) / (P × r) = (P × 100) / (P × 25/4) = (100 × 4) / 25 = 16 বছর।'
      },
      {
        id: 'qm3',
        type: 'mcq',
        marks: 1,
        question: '2x² - 6x + 3 = 0 সমীকরণের বীজদ্বয়ের গুণফল কত?',
        options: ['3', '3/2', '-3', '-3/2'],
        correctAnswer: 1,
        explanation: 'বীজদ্বয়ের গুণফল = c / a = 3 / 2।'
      },
      {
        id: 'qm4',
        type: 'mcq',
        marks: 1,
        question: 'একটি লম্ব বৃত্তাকার চোঙের ব্যাসার্ধ অর্ধেক ও উচ্চতা দ্বিগুণ করলে তার আয়তন শতকরা কত পরিবর্তিত হবে?',
        options: ['একই থাকবে', '৫০% হ্রাস পাবে', '৫০% বৃদ্ধি পাবে', '২৫% হ্রাস পাবে'],
        correctAnswer: 1,
        explanation: 'আদি আয়তন V1 = π r² h। পরিবর্তিত আয়তন V2 = π (r/2)² (2h) = π (r²/4) (2h) = ½ π r² h = ½ V1। অর্থাৎ আয়তন ৫০% কমে যায়।'
      }
    ],
    content: 'এই প্র্যাকটিস সেটে বোর্ডের সম্ভাব্য প্রশ্নাবলীর গাণিতিক সমাধান ও শর্টকাট কৌশল সংযোজিত রয়েছে।',
  },

  // CLASS 10 - Bengali
  {
    id: 'res-c10-ben-01',
    classId: '10',
    subjectId: 'c10-bengali',
    subjectName: 'বাংলা (সাহিত্য সঞ্চয়ন)',
    type: 'note',
    title: 'জ্ঞানচক্ষু (আশাপূর্ণা দেবী): মূল ভাববস্তু ও চরিত্র বিশ্লেষণ',
    chapter: 'গল্প: জ্ঞানচক্ষু',
    chapterNumber: 1,
    readTime: '৯ মিনিট',
    difficulty: 'সহজ',
    viewsCount: 18700,
    publishedDate: '2026-02-28',
    isTrending: true,
    isNew: false,
    summary: 'তপনের লেখক হওয়ার স্বপ্ন, ছোট মেসোমশাইয়ের হাত দিয়ে সন্ধ্যাতারা পত্রিকায় গল্প ছাপা এবং অন্তিমে তপনের আত্মসম্মান ও প্রকৃত জ্ঞানচক্ষু উন্মোচনের বিশদ আলোচনা।',
    keyPoints: [
      'লেখক আশাপূর্ণা দেবীর বিখ্যাত উপন্যাসত্রয়ীর রচয়িতা (প্রথম প্রতিশ্রুতি, সুবর্ণলতা, বকুলকথা)।',
      'তপন জানত লেখকেরা অন্য জগতের মানুষ, কিন্তু ছোট মেসোকে দেখে সে বুঝল লেখকেরা আমাদের মতোই রক্তমাংসের সাধারণ মানুষ।',
      'তপনের প্রথম গল্পের নাম: "প্রথম দিন"।',
      'ছোট মেসোমশাই গল্পটিতে "একটু কারেকশন" করার নামে সমগ্র গল্পটি পরিবর্তন করে নিজের ভাষায় লেখেন।',
      'মার অনুরোধে গল্পটি পড়ে তপন বুঝল প্রতিটি লাইন অচেনা। এই গ্লানি থেকে তপন সংকল্প করে সে নিজের লেখা নিজেই পত্রিকা অফিসে দেবে, অন্য কারও দয়ায় নয়।',
    ],
    content: `## জ্ঞানচক্ষু গল্পের মর্মার্থ
'জ্ঞানচক্ষু' গল্পে লেখিকা আশাপূর্ণা দেবী এক কিশোরের অন্তর্দৃষ্টি জাগরণের কাহিনী বর্ণনা করেছেন।

### তপনের মোহভঙ্গ:
তপনের ধারণা ছিল লেখকেরা বোধহয় সাধারণ মানুষদের মতো নন। কিন্তু তার সদ্য বিবাহিতা ছোট মাসির স্বামী অর্থাৎ ছোট মেসোমশাইকে চাক্ষুষ দেখে তার মোহভঙ্গ হয়। ছোট মেসো একজন অধ্যাপক ও প্রতিষ্ঠিত লেখক। তিনি সিনেমা দেখেন, দাড়ি কামান, সিগারেট খান ও নিয়মিত ঘুমান। তপন উপলব্ধি করে লেখকরা অন্য কোনো গ্রহের প্রাণী নন।

### গল্পের মোড়:
উদ্বুদ্ধ হয়ে তপন একটি আস্ত গল্প লিখে ফেলে যার নাম "প্রথম দিন"। মেসো সেই গল্প দেখে প্রশংসা করেন এবং "সন্ধ্যাতারা" পত্রিকায় প্রকাশের প্রতিশ্রুতি দেন। কিন্তু ছাপার অক্ষরে প্রকাশিত গল্প পড়তে গিয়ে তপন দেখে তার প্রতিটি লাইন মেসো নিজের ভাষায় সংশোধন করেছেন। সেখানে তপনের অনুভূতির কোনো মৌলিকত্ব অবশিষ্ট নেই। 

### তপনের প্রকৃত জ্ঞানচক্ষুর উন্মেষ:
অন্যের নামের কৃতিত্বে গল্প ছাপার যে লজ্জা ও অপমান, তা তপনকে বিদ্ধ করে। সে চোখের জল মুছে প্রতিজ্ঞা করে—যদি কখনো লেখা ছাপতে হয়, তবে সে নিজের লেখা নিজেই দিয়ে আসবে, কারও সুপারিশে নয়। এভাবে গল্পে তপনের রূপক ও আত্মচেতনার 'জ্ঞানচক্ষু' উন্মোচিত হয়।`,
  },
  {
    id: 'res-c10-ben-02',
    classId: '10',
    subjectId: 'c10-bengali',
    subjectName: 'বাংলা (সাহিত্য সঞ্চয়ন)',
    type: 'suggestion',
    title: 'মাধ্যমিক বাংলা কোনি ও নাটক সিরাজদ্দৌলা স্পেশাল সাজেশন',
    chapter: 'সহায়ক পাঠ: কোনি ও সিরাজদ্দৌলা',
    chapterNumber: 2,
    readTime: '১১ মিনিট',
    difficulty: 'ভেরি ইম্পর্্যান্ট',
    viewsCount: 31200,
    publishedDate: '2026-03-03',
    isTrending: true,
    isNew: true,
    summary: 'কোনি উপন্যাসে ক্ষিতীশ সিংহের ভূমিকা, কোনির লড়াই, "যাতনা থেকেই তো সৃষ্টি" তাৎপর্য এবং শচীন্দ্রনাথ সেনগুপ্তের সিরাজদ্দৌলা নাটকের ৫ নম্বরের সম্ভাব্য প্রশ্ন।',
    keyPoints: [
      '★ "ফাইট কোনি ফাইট!"—উক্তিটির তাৎপর্য এবং কোনির জীবনে ক্ষিতীশের অবদান।',
      '★ "দারিদ্র্য আর বঞ্চনার বিরুদ্ধে কোনির লড়াই"—আলোচনা করো।',
      '★ সিরাজদ্দৌলা নাটকে দেশপ্রেমিক সিরাজের ট্র্যাজিক চরিত্র বিশ্লেষণ।',
      '★ "জানিনা আজ কার রক্ত সে চায়"—সিরাজদ্দৌলার এই উক্তির ঐতিহাসিক প্রেক্ষাপট।',
      '★ ব্যাকরণ: সমাস, কারক ও বাক্য পরিবর্তনের সম্ভাব্য ট্রিকস।',
    ],
    content: `## কোনি উপন্যাস থেকে ৫ নম্বরের সাজেশন
1. "ফাইট কোনি ফাইট"—সাধারণ সাঁতারু থেকে চ্যাম্পিয়ন হয়ে ওঠার পেছনে ক্ষিতীশ সিংহ কীভাবে কোনির প্রেরণা হয়েছিলেন? ★★★★★
2. "ওইটেই তো আমি রে, ওটাই তো আমি"—বক্তার এই আত্মোপলব্ধির তাৎপর্য ব্যাখ্যা করো। ক্ষিতীশ সিংহের চরিত্রটি সংক্ষেপে আলোচনা করো। ★★★★★
3. "তোর আসল লজ্জা জলে, আসল গর্বও জলে"—উক্তিটি কার? কোন প্রসঙ্গে তিনি এ কথা বলেছেন? উক্তিটির মধ্য দিয়ে বক্তার কী মানসিকতা প্রকাশ পেয়েছে? ★★★★☆
4. প্রজাপতি ক্লাবের অভ্যর্থনা সভায় ক্ষিতীশ সিংহের সঙ্গে ক্লাবের কর্মকর্তাদের সংঘাতের বিবরণ দাও। ★★★☆☆

## সিরাজদ্দৌলা নাটক থেকে ৪ নম্বরের সাজেশন
1. "বাংলার এই দুর্দিনে আমাকে ত্যাগ করবেন না"—কে, কাদের উদ্দেশ্যে এই আহ্বান জানিয়েছেন? এই আহ্বানের কারণ কী ছিল? ★★★★★
2. "জাতির সৌভাগ্য-সূর্য আজ অস্তাচলগামী"—বক্তা কে? তাঁর এমন মনে হওয়ার কারণ কী? ★★★★☆
3. সিরাজদ্দৌলা নাট্যাংশ অবলম্বনে দেশপ্রেমিক নবাব সিরাজদ্দৌলার চরিত্র বৈশিষ্ট্য পর্যালোচনা করো। ★★★★★`,
  },

  // CLASS 9 - Life Science
  {
    id: 'res-c9-life-01',
    classId: '9',
    subjectId: 'c9-lifesci',
    subjectName: 'জীবন বিজ্ঞান ও পরিবেশ',
    type: 'note',
    title: 'কোষ ও কলা: উদ্ভিদকলা এবং প্রাণীকলা তুলনামূলক আলোচনা',
    chapter: 'অধ্যায় ২: জীবন সংগঠনের স্তর',
    chapterNumber: 2,
    readTime: '১০ মিনিট',
    difficulty: 'গুরুত্বপূর্ণ',
    viewsCount: 13900,
    publishedDate: '2026-02-25',
    isTrending: true,
    isNew: false,
    summary: 'ভাজক কলা ও স্থায়ী কলার পার্থক্য, সরল ও জটিল স্থায়ী কলা (জাইলেম ও ফ্লোয়েম), রক্ত, তরুণাস্থি ও পেশীকলা সম্পর্কিত সম্পূর্ণ সহায়িকা।',
    keyPoints: [
      'ভাজক কলার বৈশিষ্ট্য: কোষগুলি বিভাজনে সক্ষম, ঘন সাইটোপ্লাজম, সুস্পষ্ট নিউক্লিয়াস এবং ভ্যাকুওল সাধারণত অনুপস্থিত।',
      'জাইলেম কলা: জল ও খনিজ লবণ সংবহন করে (উর্ধমুখী)। এর সজীব উপাদান একমাত্র জাইলেম প্যারেনকাইমা।',
      'ফ্লোয়েম কলা: তৈরি খাদ্য উদ্ভিদের বিভিন্ন অঙ্গে পরিবহন করে (উভমুখী)। এর একমাত্র মৃত উপাদান ফ্লোয়েম তন্তু বা বাস্ট তন্তু।',
      'তরল যোগকলা রক্ত: রক্তরস (৫৫%) এবং রক্তকণিকা (৪৫%) নিয়ে গঠিত।',
      'পেশীকলা তিন প্রকার: ঐচ্ছিক বা রেখিত পেশী, অনৈচ্ছিক বা মসৃণ পেশী, এবং হৃদপেশী।',
    ],
    content: `## উদ্ভিদকলা (Plant Tissue)
উৎপত্তি ও গঠনের দিক থেকে সদৃশ নির্দিষ্ট কাজ সম্পন্নকারী কোষ সমষ্টিকে কলা বলে।

### ১. ভাজক কলা (Meristematic Tissue)
যে কলার কোষগুলি অপরিণত এবং অবিরাম মাইটোসিস প্রক্রিয়ায় বিভাজিত হতে পারে তাকে ভাজক কলা বলে।
- **বৈশিষ্ট্য:** কোষপ্রাচীর পাতলা ও সেলুলোজ নির্মিত। কোষগুলির মাঝে কোনো আন্তঃকোষীয় ফাঁক থাকে না। সুনির্দিষ্ট নিউক্লিয়াস বর্তমান।
- **প্রকারভেদ:** অগ্রস্থ ভাজক কলা, নিবেশিত ভাজক কলা, ও পার্শ্বস্থ ভাজক কলা।

### ২. স্থায়ী কলা (Permanent Tissue)
ভাজক কলা থেকে উৎপন্ন বিভাজনে অক্ষম পরিণত কলাকে স্থায়ী কলা বলে।
- **সরল স্থায়ী কলা:** প্যারেনকাইমা (খাদ্য তৈরি ও সঞ্চয়), কোলেনকাইমা (নমনীয়তা ও দৃঢ়তা), স্ক্লেরেনকাইমা (যান্ত্রিক দৃঢ়তা প্রদান, মৃত কোষ)।
- **জটিল স্থায়ী কলা:**
  1. **জাইলেম (Xylem):** ট্র্যাকিড, ট্রাকিয়া, জাইলেম প্যারেনকাইমা ও জাইলেম তন্তু। কাজ: মূলরোম দ্বারা শোষিত জল ও খনিজ লবণ পাতায় পরিবহন।
  2. **ফ্লোয়েম (Phloem):** সিভনল, সঙ্গীকোষ, ফ্লোয়েম প্যারেনকাইমা ও ফ্লোয়েম তন্তু। কাজ: পাতায় প্রস্তুত খাদ্য সমগ্র উদ্ভিদে পৌঁছানো।`,
  },
  {
    id: 'res-c9-life-02',
    classId: '9',
    subjectId: 'c9-lifesci',
    subjectName: 'জীবন বিজ্ঞান ও পরিবেশ',
    type: 'practice',
    title: 'ক্লাস ৯ জীবন বিজ্ঞান মক টেস্ট: কোষ ও কলা',
    chapter: 'অধ্যায় ২: জীবন সংগঠনের স্তর',
    chapterNumber: 2,
    readTime: '১৫ মিনিট টেস্ট',
    difficulty: 'সহজ',
    viewsCount: 9800,
    publishedDate: '2026-03-06',
    isTrending: false,
    isNew: true,
    summary: 'কোষ অঙ্গাণু এবং কলা সম্পর্কিত গুরুত্বপূর্ণ ৫টি অবজেক্টিভ প্রশ্নপত্র ও সমাধান।',
    questions: [
      {
        id: 'ql1',
        type: 'mcq',
        marks: 1,
        question: 'উদ্ভিদের জাইলেম কলার একমাত্র সজীব উপাদানটি কী?',
        options: ['ট্র্যাকিড', 'ট্রাকিয়া', 'জাইলেম প্যারেনকাইমা', 'জাইলেম তন্তু'],
        correctAnswer: 2,
        explanation: 'জাইলেমের চারটি উপাদানের মধ্যে ট্র্যাকিড, ট্রাকিয়া ও জাইলেম তন্তু মৃত। কেবলমাত্র জাইলেম প্যারেনকাইমা সজীব উপাদান।'
      },
      {
        id: 'ql2',
        type: 'mcq',
        marks: 1,
        question: 'কোষের "আত্মঘাতী থলি" (Suicide Bag) বলা হয় কোন অঙ্গাণুকে?',
        options: ['মাইটোকনড্রিয়া', 'রাইবোজোম', 'গলগি বডি', 'লাইসোজোম'],
        correctAnswer: 3,
        explanation: 'লাইসোজোমে থাকা আর্দ্রবিশ্লেষক উৎসেচক প্রতিকূল অবস্থায় নিজস্ব কোষকে পরিপাক করে ধ্বংস করতে পারে, তাই একে সুইসাইড ব্যাগ বলে।'
      },
      {
        id: 'ql3',
        type: 'mcq',
        marks: 1,
        question: 'মানবদেহের কোন রক্তকণিকা জীবাণু ধ্বংস করে রোগ প্রতিরোধে প্রধান ভূমিকা নেয়?',
        options: ['লোহিত রক্তকণিকা (RBC)', 'শ্বেত রক্তকণিকা (WBC)', 'অণুচক্রিকা (Platelet)', 'প্লাজমা প্রোটিন'],
        correctAnswer: 1,
        explanation: 'শ্বেত রক্তকণিকা (বিশেষ করে নিউট্রোফিল ও মনোসাইট ফ্যাগোসাইটোসিস পদ্ধতিতে) জীবাণু ধ্বংস করে দেহের অনাক্রম্যতা বজায় রাখে।'
      }
    ],
    content: 'জীবন সংগঠনের স্তর অধ্যায়ের সম্পূর্ণ প্রস্তুতি যাচাই করতে এই মক টেস্টটি অনুশীলন করুন।',
  },

  // CLASS 8 - Science & History
  {
    id: 'res-c8-sci-01',
    classId: '8',
    subjectId: 'c8-science',
    subjectName: 'পরিবেশ ও বিজ্ঞান',
    type: 'note',
    title: 'বল ও চাপ: তরলের চাপ, প্লবতা ও আর্কিমিডিসের নীতি',
    chapter: 'অধ্যায় ১: ভৌত পরিবেশ - বল ও চাপ',
    chapterNumber: 1,
    readTime: '৭ মিনিট',
    difficulty: 'গুরুত্বপূর্ণ',
    viewsCount: 11200,
    publishedDate: '2026-02-26',
    isTrending: false,
    isNew: false,
    summary: 'চাপ = বল/ক্ষেত্রফল, সাইফনের কার্যনীতি, পাস্কালের সূত্র এবং কোনো বস্তু কেন জলে ভাসে বা ডোবে তার বৈজ্ঞানিক ব্যাখ্যা।',
    keyPoints: [
      'চাপ (P) = প্রযুক্ত বল (F) / ক্ষেত্রফল (A)। SI একক পাস্কাল (Pascal বা N/m²)।',
      'তরলের অভ্যন্তরে চাপ P = h · d · g (গভীরতা × ঘনত্ব × অভিকর্ষজ ত্বরণ)।',
      'প্লবতা: কোনো বস্তুকে কোনো তরল বা গ্যাসে নিমজ্জিত করলে তরল বস্তুটির ওপর যে উর্ধ্বমুখী বল প্রয়োগ করে।',
      'ভাসনের শর্ত: বস্তুর ওজন < বা = অপসারিত তরলের ওজন।',
    ],
    importantFormulas: [
      'P = F / A',
      'P = h · d · g',
      'প্লবতা বল = V · d · g',
    ],
    content: `## বল ও চাপের সম্পর্ক
কোনো তলের একক ক্ষেত্রফলের ওপর লম্বভাবে প্রযুক্ত বলকে চাপ বলা হয়।
চাপ = প্রযুক্ত বল / তলটির ক্ষেত্রফল
ক্ষেত্রফল কমলে চাপ বৃদ্ধি পায়, এই কারণেই ধারালো ছুরিতে সহজে ফল কাটা যায় এবং ভোঁতা ছুরিতে কষ্ট হয়।

## তরলের চাপ ও তার বৈশিষ্ট্য
1. তরল পাত্রের তলদেশে ও পার্শ্বদেশ উভয়দিকেই সমান চাপ প্রয়োগ করে।
2. কোনো নির্দিষ্ট গভীরতায় তরলের চাপ সবদিকে সমান।
3. গভীরতা বাড়লে তরলের চাপ বাড়ে (P ∝ h)।
4. তরলের ঘনত্ব বাড়লে তরলের চাপ বাড়ে (P ∝ d)।`,
  },
  {
    id: 'res-c8-sci-02',
    classId: '8',
    subjectId: 'c8-science',
    subjectName: 'পরিবেশ ও বিজ্ঞান',
    type: 'suggestion',
    title: 'অষ্টম শ্রেণী পরিবেশ ও বিজ্ঞান ১ম ও ২য় ইউনিট টেস্ট সাজেশন',
    chapter: 'অধ্যায় ১ ও ২: বল ও চাপ এবং পদার্থের প্রকৃতি',
    chapterNumber: 1,
    readTime: '৮ মিনিট',
    difficulty: 'ভেরি ইম্পর্্যান্ট',
    viewsCount: 15400,
    publishedDate: '2026-03-04',
    isTrending: true,
    isNew: true,
    summary: 'স্কুল ইউনিট টেস্টে কমন উপযোগী অতিসংক্ষিপ্ত ও সংক্ষিপ্ত ২০টি সম্ভাব্য প্রশ্নের তালিকা।',
    keyPoints: [
      '★ ছুরি বা ব্লেডের ধারালো প্রান্ত দিয়ে কাটার সুবিধা বৈজ্ঞানিক কারণসহ লেখো।',
      '★ জলের ওপর লোহার তৈরি ছুঁচ কেন ভাসে এবং পেরেক কেন ডুবে যায়?',
      '★ সাইফন কী? এর দুটি ব্যবহারিক প্রয়োগ ও শর্ত লেখো।',
      '★ ডালটনের পরমাণুবাদের সীমাবদ্ধতা ও রাদারফোর্ডের পরমাণু মডেলের ত্রুটি।',
    ],
    content: `## ১ম পর্যায়ক্রমিক মূল্যায়ন স্পেশাল সাজেশন
1. ভোঁতা পেরেকের চেয়ে সূঁচালো পেরেক কাঠের মধ্যে সহজে গাঁথা যায় কেন? ★★☆
2. আর্কিমিডিসের নীতিটি বিবৃত করো। লোহার জাহাজ জলে ভাসে অথচ একটি লোহার টুকরো ডুবে যায় কেন? ★★★★★
3. সাইফনের তিনটি অত্যাবশ্যকীয় শর্ত উল্লেখ করো। ★★★
4. ব্যারোমিটারে পারদ ব্যবহারের দুটি সুবিধা লেখো। ★★☆
5. ডালটনের পরমাণুবাদের মূল তিনটি শিকার্য লেখো। পরবর্তীতে এটি কীভাবে সংশোধিত হয়? ★★★★☆`,
  },

  // CLASS 7 - Mathematics & Science
  {
    id: 'res-c7-math-01',
    classId: '7',
    subjectId: 'c7-math',
    subjectName: 'গণিত (গণিতপ্রভা)',
    type: 'note',
    title: 'বীজগাণিতিক সূত্রাবলী ও তাদের জ্যামিতিক তাৎপর্য',
    chapter: 'অধ্যায় ১২: বীজগাণিতিক সূত্রাবলী',
    chapterNumber: 12,
    readTime: '৮ মিনিট',
    difficulty: 'গুরুত্বপূর্ণ',
    viewsCount: 14300,
    publishedDate: '2026-03-01',
    isTrending: false,
    isNew: false,
    summary: '(a+b)², (a-b)², a²-b², 4ab, 2(a²+b²) সূত্রের প্রমাণ, মনে রাখার কৌশল ও উৎপাদকে বিশ্লেষণ।',
    importantFormulas: [
      '(a + b)² = a² + 2ab + b²',
      '(a - b)² = a² - 2ab + b²',
      'a² - b² = (a + b)(a - b)',
      '4ab = (a + b)² - (a - b)²',
      '2(a² + b²) = (a + b)² + (a - b)²',
      'ab = [(a + b)/2]² - [(a - b)/2]²',
    ],
    keyPoints: [
      'বীজগাণিতিক সূত্রগুলি যে-কোনো বাস্তব সংখ্যার জন্য অভেদ (Identity)।',
      'দুটি বর্গের অন্তরূপে প্রকাশ করার নিয়ম হলো ab সূত্র প্রয়োগ করা।',
      'মান নির্ণয়ের অংকে সরাসরি অনুসিদ্ধান্ত ব্যবহার করলে সময় বাঁচে।',
    ],
    content: `## বীজগাণিতিক বর্গের সূত্রাবলী
সপ্তম শ্রেণীর গণিতের একটি স্তম্ভ হলো বীজগাণিতিক সূত্রাবলী।

### ১. বর্গের মূল সূত্রসমূহ:
- (a + b)² = a² + 2ab + b²
- (a - b)² = a² - 2ab + b²

### ২. গুরুত্বপূর্ণ অনুসিদ্ধান্ত (Deductions):
- a² + b² = (a + b)² - 2ab
- a² + b² = (a - b)² + 2ab
- 4ab = (a + b)² - (a - b)²
- 2(a² + b²) = (a + b)² + (a - b)²

### উদাহরণ:
যদি x + 1/x = 5 হয়, তবে x² + 1/x² এর মান কত?
আমরা জানি: x² + 1/x² = (x + 1/x)² - 2(x)(1/x) = 5² - 2 = 25 - 2 = 23।`,
  },
  {
    id: 'res-c7-math-02',
    classId: '7',
    subjectId: 'c7-math',
    subjectName: 'গণিত (গণিতপ্রভা)',
    type: 'practice',
    title: 'ক্লাস ৭ বীজগাণিতিক সূত্রাবলী প্র্যাকটিস কুইজ',
    chapter: 'অধ্যায় ১২: বীজগাণিতিক সূত্রাবলী',
    chapterNumber: 12,
    readTime: '১০ মিনিট টেস্ট',
    difficulty: 'সহজ',
    viewsCount: 8900,
    publishedDate: '2026-03-05',
    isTrending: false,
    isNew: true,
    summary: 'বীজগণিতের মৌলিক ধারণা ও সূত্র ভিত্তিক ৪টি ইন্টারঅ্যাক্টিভ প্রশ্ন।',
    questions: [
      {
        id: 'qc7_1',
        type: 'mcq',
        marks: 1,
        question: 'যদি a + b = 7 এবং a - b = 3 হয়, তবে 4ab এর মান কত?',
        options: ['40', '49', '16', '36'],
        correctAnswer: 0,
        explanation: 'আমরা জানি 4ab = (a + b)² - (a - b)² = 7² - 3² = 49 - 9 = 40।'
      },
      {
        id: 'qc7_2',
        type: 'mcq',
        marks: 1,
        question: 'a² - b² কে উৎপাদকে বিশ্লেষণ করলে নিচের কোনটি পাওয়া যায়?',
        options: ['(a - b)²', '(a + b)(a - b)', '(a + b)²', 'a² - 2ab + b²'],
        correctAnswer: 1,
        explanation: 'a² - b² এর উৎপাদক সূত্র হলো (a + b)(a - b)।'
      }
    ],
    content: 'সপ্তম শ্রেণীর শিক্ষার্থীদের জন্য সহজ ও সুস্পষ্ট গণিত প্র্যাকটিস সেট।',
  },

  // CLASS 6 - Bengali & Science
  {
    id: 'res-c6-ben-01',
    classId: '6',
    subjectId: 'c6-bengali',
    subjectName: 'বাংলা (সাহিত্যমেলা)',
    type: 'note',
    title: 'ভরদুপুরে (নীরেন্দ্রনাথ চক্রবর্তী): কবিতা বিশ্লেষণ ও প্রশ্নোত্তর',
    chapter: 'কবিতা: ভরদুপুরে',
    chapterNumber: 1,
    readTime: '৬ মিনিট',
    difficulty: 'সহজ',
    viewsCount: 11800,
    publishedDate: '2026-02-24',
    isTrending: false,
    isNew: false,
    summary: 'গ্রাম বাংলার নিস্তব্ধ দুপুরের শান্ত পরিবেশ, বটগাছের ছায়ায় রাখাল বালকের বিশ্রাম ও অলস মেঘের ভেসে চলার অপরূপ রূপচিত্র।',
    keyPoints: [
      'কবি নীরেন্দ্রনাথ চক্রবর্তীর অন্যতম বিখ্যাত কবিতা।',
      'অশ্বত্থ গাছটিকে এখানে "পথিকজনের ছাতা" বলা হয়েছে।',
      'নদীর কূলে খড়ের আঁটি বোঝাই করা শুকনো খড়ের নৌকো বাঁধা আছে।',
      'মানুষজন ঘরে দুপুরের নিদ্রায় মগ্ন, যেন সমগ্র বিশ্বই শান্তিতে ঘুমাচ্ছে।',
    ],
    content: `## কবিতার মূল ভাববস্তু
'ভরদুপুরে' কবিতায় কবি নীরেন্দ্রনাথ চক্রবর্তী গ্রাম বাংলার নির্জন দুপুরের এক মনোহর চিত্র এঁকেছেন। শহরের কোলাহল মুক্ত নিঝুম দুপুরের শান্ত পরিবেশই এখানে মূল বিষয়।

পথের ধারে দাঁড়িয়ে থাকা পুরোনো অশ্বত্থ গাছটি যেন কোনো ক্লান্ত পথিকের আশ্রয়ের ছাতা। তার নিচে ঘাসের গালিচায় শুয়ে রাখাল ছেলে উদাস চোখে দেখছে আকাশে অলস মেঘের ভেলা ভেসে যাওয়া। দূরে নদীর ঘাটে বাঁধা রয়েছে খড়ে বোঝাই করা নৌকো, কিন্তু কোথাও মানুষের ব্যস্ততা নেই। সবাই যে যার ঘরে শান্তিতে ঘুমোচ্ছে। কবির মনে হয়েছে শুধু মানুষ নয়, যেন ভরদুপুরে সারা বিশ্বই পরম শান্তিতে বিশ্রাম নিচ্ছে।`,
  },
  {
    id: 'res-c6-ben-02',
    classId: '6',
    subjectId: 'c6-bengali',
    subjectName: 'বাংলা (সাহিত্যমেলা)',
    type: 'suggestion',
    title: 'ষষ্ঠ শ্রেণী বাংলা প্রথম পর্যায়ক্রমিক মূল্যায়ন সাজেশন',
    chapter: 'ভরদুপুরে ও মন-ভালো-করা',
    chapterNumber: 1,
    readTime: '৭ মিনিট',
    difficulty: 'গুরুত্বপূর্ণ',
    viewsCount: 14700,
    publishedDate: '2026-03-02',
    isTrending: true,
    isNew: true,
    summary: 'স্কুল পরীক্ষার সংক্ষিপ্ত উত্তর ও ভাবার্থ বিষয়ক সম্ভাব্য প্রশ্নের উত্তর সংকেতসহ তালিকা।',
    keyPoints: [
      '★ "ওই যে অসথ গাছটি ও তো পথিকজনের ছাতা"—তাৎপর্য বিশ্লেষণ করো।',
      '★ "মন-ভালো-করা রোদ্দুর"কে কবি কার সঙ্গে তুলনা করেছেন এবং কেন?',
      '★ ব্যাকরণ: ধ্বনি ও বর্ণ, ব্যঞ্জনসন্ধি ও সমোচ্চারিত ভিন্নার্থক শব্দ।',
    ],
    content: `## প্রথম ইউনিট টেস্ট সাজেশন
1. "ভরদুপুরে" কবিতায় রাখাল বালকটি কীভাবে অলস সময় কাটাচ্ছে? ★★☆
2. অশ্বত্থ গাছকে কেন "পথিকজনের ছাতা" বলা হয়েছে? ★★★
3. "মন-ভালো-করা রোদ্দুর"কে কবি শক্তি চট্টোপাধ্যায় মাছরাঙা পাখির রঙের সাথে তুলনা করেছেন কেন? ★★★
4. ব্যাকরণ: সন্ধি বিচ্ছেদ করো—দিগন্ত, বিদ্যালয়, পরিষ্কার, বৃষ্টি।`,
  },

  // CLASS 5 - Environment & Bengali
  {
    id: 'res-c5-env-01',
    classId: '5',
    subjectId: 'c5-environment',
    subjectName: 'আমাদের পরিবেশ',
    type: 'note',
    title: 'মানবদেহ: চামড়া, হাড় ও পেশির সুরক্ষা ও স্বাস্থ্যবিধি',
    chapter: 'অধ্যায় ১: মানবদেহ',
    chapterNumber: 1,
    readTime: '৫ মিনিট',
    difficulty: 'সহজ',
    viewsCount: 10400,
    publishedDate: '2026-02-20',
    isTrending: false,
    isNew: false,
    summary: 'শরীরের বর্ম ত্বক (চামড়া), মেলানিনের ভূমিকা, মেলানোমা রোধ, বিভিন্ন অস্থিসন্ধি এবং পুষ্টিকর খাদ্যাভ্যাস।',
    keyPoints: [
      'চামড়া বা ত্বককে দেহের প্রথম বর্ম বলা হয় কারণ এটি অভ্যন্তরীণ অঙ্গসমূহকে ধুলোবালি ও ব্যাকটেরিয়া থেকে বাঁচায়।',
      'চামড়ায় "মেলানিন" নামক রঞ্জক থাকার কারণে ত্বকের রঙ কালো বা বাদামি হয়।',
      'সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি শোষণ করে মেলানিন ত্বকের ক্যান্সার (মেলানোমা) প্রতিরোধ করে।',
      'রোদ থেকে আমাদের ত্বক ভিটামিন ডি তৈরি করতে সাহায্য করে।',
      'শরীরের সবচেয়ে বড় হাড় হলো ফিমার (ঊরুর হাড়)।',
    ],
    content: `## আমাদের দেহের বর্ম: ত্বক বা চামড়া
আমাদের শরীরের উপরিভাগকে ঢেকে রাখে চামড়া বা ত্বক। ঠিক যেমন পুরনো দিনে সৈন্যরা যুদ্ধক্ষেত্রে নিজেদের বাঁচাতে লোহার বর্ম পরত, তেমনি আমাদের দেহের বর্ম হলো চামড়া।

### ১. মেলানিনের ভূমিকা
আমাদের চামড়ার নিচে একটি রঞ্জক পদার্থ থাকে যার নাম **মেলানিন**।
- যার চামড়ায় মেলানিন বেশি থাকে তার গায়ের রং কালো হয়।
- যার চামড়ায় মেলানিন কম থাকে তার রং ফর্সা হয়।
- মেলানিন সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি (UV rays) শুষে নিয়ে ত্বকের ক্যানসার আটকায়। তাই রোদে যাদের চামড়া কালো হয়, তারা মূলত নিজেদের শরীরকে মেলানিন তৈরি করে সুরক্ষিত করছে।

### ২. দেহের অস্থি ও অস্থিসন্ধি
- দুটি হাড় যেখানে যুক্ত হয় তাকে অস্থিসন্ধি (Joint) বলে।
- লিগামেন্ট দড়ির মতো দুটি হাড়কে শক্ত করে ধরে রাখে।
- কনুই ও হাঁটুর সন্ধিকে কবজা সন্ধি বলে, যা একমুখী খোলা যায়।`,
  },
  {
    id: 'res-c5-env-02',
    classId: '5',
    subjectId: 'c5-environment',
    subjectName: 'আমাদের পরিবেশ',
    type: 'practice',
    title: 'ক্লাস ৫ আমাদের পরিবেশ: মানবদেহ ও মাটি-জল প্র্যাকটিস সেট',
    chapter: 'অধ্যায় ১ ও ২',
    chapterNumber: 1,
    readTime: '৮ মিনিট টেস্ট',
    difficulty: 'সহজ',
    viewsCount: 7600,
    publishedDate: '2026-03-03',
    isTrending: false,
    isNew: true,
    summary: 'পঞ্চম শ্রেণীর ছাত্র-ছাত্রীদের উপযোগী ৩টি বহুনির্বাচনী প্রশ্ন।',
    questions: [
      {
        id: 'qc5_1',
        type: 'mcq',
        marks: 1,
        question: 'চামড়ার নিচে থাকা কোন উপাদান সূর্যের ক্ষতিকর রশ্মি শুষে নিয়ে ক্যানসার আটকায়?',
        options: ['হিমোগ্লোবিন', 'মেলানিন', 'ক্যালসিয়াম', 'কেরাটিন'],
        correctAnswer: 1,
        explanation: 'ত্বকে থাকা মেলানিন সূর্যের ক্ষতিকর অতিবেগুনি রশ্মি শোষণ করে শরীরকে রক্ষা করে।'
      },
      {
        id: 'qc5_2',
        type: 'mcq',
        marks: 1,
        question: 'মানবদেহের সবচেয়ে বড় হাড় বা অস্থির নাম কী?',
        options: ['টিবিয়া', 'হিউমেরাস', 'ফিমার', 'রেডিয়াস'],
        correctAnswer: 2,
        explanation: 'কোমর থেকে হাঁটু পর্যন্ত বিস্তৃত ঊরুর হাড় বা ফিমার হলো মানবদেহের দীর্ঘতম অস্থি।'
      },
      {
        id: 'qc5_3',
        type: 'mcq',
        marks: 1,
        question: 'দুটি হাড়কে দড়ির মতো শক্ত করে ধরে রাখে কোনটি?',
        options: ['টেন্ডন', 'লিগামেন্ট', 'পেশি', 'তরুণাস্থি'],
        correctAnswer: 1,
        explanation: 'অস্থিসন্ধিতে দুটি হাড়কে পরস্পরের সাথে দৃঢ়ভাবে ধরে রাখে লিগামেন্ট।'
      }
    ],
    content: 'পঞ্চম শ্রেণীর জন্য তৈরি সহজ এবং মজার প্রশ্নমালা।',
  },
];

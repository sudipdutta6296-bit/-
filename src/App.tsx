import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import ClassHero from './components/ClassHero';
import SubjectGrid from './components/SubjectGrid';
import ContentExplorer from './components/ContentExplorer';
import StudyReaderModal from './components/StudyReaderModal';
import PracticeQuizModal from './components/PracticeQuizModal';
import UpcomingPostsSection from './components/UpcomingPostsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookmarksModal from './components/BookmarksModal';
import QuickSearchModal from './components/QuickSearchModal';
import SearchBarSection from './components/SearchBarSection';
import InteractiveQuizSection from './components/InteractiveQuizSection';
import StudentAuthModal from './components/StudentAuthModal';
import PersonalizedDashboardModal from './components/PersonalizedDashboardModal';

import { ClassLevel, ResourceItem, ResourceType, InteractiveQuiz } from './types';
import { CLASSES_LIST, SUBJECTS_MAP, SAMPLE_RESOURCES } from './data/curriculumData';
import { UPCOMING_POSTS } from './data/upcomingPostsData';
import { INTERACTIVE_QUIZZES } from './data/interactiveQuizzesData';
import { useStudentAuth } from './context/StudentAuthContext';

export default function App() {
  const { currentUser } = useStudentAuth();

  // Current active class selected in navigation bar (5, 6, 7, 8, 9, 10)
  const [activeClass, setActiveClass] = useState<ClassLevel>('10');
  
  // Selected subject inside the current class (optional filter)
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);

  // Content tab filter: all | note | suggestion | practice
  const [activeTypeTab, setActiveTypeTab] = useState<ResourceType | 'all'>('all');

  // Modals state
  const [readingResource, setReadingResource] = useState<ResourceItem | null>(null);
  const [quizResource, setQuizResource] = useState<ResourceItem | null>(null);
  const [activeInteractiveQuiz, setActiveInteractiveQuiz] = useState<InteractiveQuiz | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState(false);

  // Bookmarked resource IDs persisted in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('shiksha_bookmarks');
      return saved ? JSON.parse(saved) : ['res-c10-phys-01', 'res-c10-math-02'];
    } catch {
      return ['res-c10-phys-01', 'res-c10-math-02'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('shiksha_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore storage error
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  // Switch class handler: resets specific subject filter to show all subjects of new class
  const handleSelectClass = (newClassId: ClassLevel) => {
    setActiveClass(newClassId);
    setSelectedSubjectId(null);
  };

  // Quick filter by resource type directly from subject card
  const handleQuickFilterType = (subjectId: string, type: ResourceType) => {
    setSelectedSubjectId(subjectId);
    setActiveTypeTab(type);
    // Smooth scroll down to content explorer
    const elem = document.getElementById('content-explorer-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Current class details and subjects
  const currentClassInfo = useMemo(() => {
    return CLASSES_LIST.find((c) => c.id === activeClass) || CLASSES_LIST[5];
  }, [activeClass]);

  const currentSubjects = useMemo(() => {
    return SUBJECTS_MAP[activeClass] || [];
  }, [activeClass]);

  // Current class resources (notes, suggestions, practice sets)
  const currentResources = useMemo(() => {
    return SAMPLE_RESOURCES.filter((r) => r.classId === activeClass);
  }, [activeClass]);

  // Bookmarked resource items
  const bookmarkedResources = useMemo(() => {
    return SAMPLE_RESOURCES.filter((r) => bookmarkedIds.includes(r.id));
  }, [bookmarkedIds]);

  // Handler to open either Reader or Quiz modal based on type
  const handleOpenResource = (res: ResourceItem) => {
    if (res.type === 'practice' && res.questions && res.questions.length > 0) {
      setActiveInteractiveQuiz(null);
      setQuizResource(res);
    } else {
      setReadingResource(res);
    }
  };

  // Start quiz by quizId (from interactive quiz portal or dashboard)
  const handleStartQuizById = (quizId: string) => {
    const interactive = INTERACTIVE_QUIZZES.find((q) => q.id === quizId);
    if (interactive) {
      setQuizResource(null);
      setActiveInteractiveQuiz(interactive);
      return;
    }

    const resItem = SAMPLE_RESOURCES.find((r) => r.id === quizId);
    if (resItem) {
      setActiveInteractiveQuiz(null);
      setQuizResource(resItem);
    }
  };

  // Select subject inside explorer from dashboard
  const handleSelectSubjectInExplorer = (classId: ClassLevel, subjectId: string) => {
    setActiveClass(classId);
    setSelectedSubjectId(subjectId);
    setDashboardModalOpen(false);
    setTimeout(() => {
      const el = document.getElementById('content-explorer-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Smooth scroll helpers
  const scrollToUpcoming = () => {
    const el = document.getElementById('upcoming-posts-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-us-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSubjects = () => {
    const el = document.getElementById('subjects-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuizzes = () => {
    const el = document.getElementById('interactive-quiz-portal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearch = () => {
    const el = document.getElementById('search-portal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 1. Top Navigation Bar with Class Switcher (৫, ৬, ৭, ৮, ৯, ১০) & Student Profile */}
      <Navbar
        activeClass={activeClass}
        onSelectClass={handleSelectClass}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBookmarks={() => setBookmarksOpen(true)}
        bookmarkedCount={bookmarkedIds.length}
        onNavigateToUpcoming={scrollToUpcoming}
        onNavigateToContact={scrollToContact}
        onOpenDashboard={() => setDashboardModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onNavigateToQuizzes={scrollToQuizzes}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section for Currently Selected Class with Student Personalization */}
        <ClassHero
          currentClass={currentClassInfo}
          totalSubjects={currentSubjects.length}
          onExploreSubjectsClick={scrollToSubjects}
          onOpenDashboard={() => setDashboardModalOpen(true)}
        />

        {/* 3. Comprehensive On-Page Search Bar Section (Keywords, Subjects, Classes) */}
        <SearchBarSection
          onSelectResource={handleOpenResource}
          onSelectClass={handleSelectClass}
          onStartPracticeQuiz={(res) => {
            setActiveInteractiveQuiz(null);
            setQuizResource(res);
          }}
        />

        {/* 4. Subject Grid for Current Class (বাংলা, ইংরেজি, গণিত, বিজ্ঞান, ইত্যাদি) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubjectGrid
            subjects={currentSubjects}
            selectedSubjectId={selectedSubjectId}
            onSelectSubject={setSelectedSubjectId}
            onQuickFilterType={handleQuickFilterType}
          />

          {/* 5. Content Explorer: Notes, Suggestions, Practice Sets */}
          <ContentExplorer
            resources={currentResources}
            subjects={currentSubjects}
            selectedSubjectId={selectedSubjectId}
            activeTypeTab={activeTypeTab}
            onSelectTypeTab={setActiveTypeTab}
            onSelectSubject={setSelectedSubjectId}
            onOpenResource={handleOpenResource}
            onToggleBookmark={toggleBookmark}
            bookmarkedIds={bookmarkedIds}
          />
        </div>

        {/* 6. Interactive Quiz & Mock Test Module (Classes 5 to 10 with Instant Feedback & Scoring) */}
        <InteractiveQuizSection
          onStartQuiz={handleStartQuizById}
          selectedClass={activeClass}
          onClassChange={handleSelectClass}
        />

        {/* 7. Upcoming Posts & Announcements Section */}
        <UpcomingPostsSection
          posts={UPCOMING_POSTS}
          onSelectClass={handleSelectClass}
        />

        {/* 8. Contact Us & Student Doubt Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer
        onSelectClass={handleSelectClass}
        onNavigateToUpcoming={scrollToUpcoming}
        onNavigateToContact={scrollToContact}
      />

      {/* --- MODALS --- */}
      {/* Study Notes & Suggestions Reader Modal */}
      {readingResource && (
        <StudyReaderModal
          resource={readingResource}
          onClose={() => setReadingResource(null)}
          isBookmarked={bookmarkedIds.includes(readingResource.id)}
          onToggleBookmark={toggleBookmark}
          onOpenPracticeIfAvailable={() => {
            const practiceForSubject = currentResources.find(
              (r) => r.subjectId === readingResource.subjectId && r.type === 'practice'
            );
            if (practiceForSubject) {
              setActiveInteractiveQuiz(null);
              setQuizResource(practiceForSubject);
            }
          }}
        />
      )}

      {/* Practice Test / MCQ Quiz Modal (Supports both ResourceItem and InteractiveQuiz) */}
      {(quizResource || activeInteractiveQuiz) && (
        <PracticeQuizModal
          resource={quizResource}
          interactiveQuiz={activeInteractiveQuiz}
          onClose={() => {
            setQuizResource(null);
            setActiveInteractiveQuiz(null);
          }}
          onOpenDashboard={() => setDashboardModalOpen(true)}
          onOpenNotes={() => {
            const targetSubjectId = quizResource?.subjectId || activeInteractiveQuiz?.subjectId;
            const noteForSubject = currentResources.find(
              (r) => r.subjectId === targetSubjectId && r.type === 'note'
            );
            if (noteForSubject) {
              setReadingResource(noteForSubject);
            }
          }}
        />
      )}

      {/* Student Account Authentication Modal (Login / Register) */}
      {authModalOpen && (
        <StudentAuthModal
          onClose={() => setAuthModalOpen(false)}
          onSuccess={() => {
            setAuthModalOpen(false);
            setDashboardModalOpen(true);
          }}
        />
      )}

      {/* Personalized Student Dashboard Modal */}
      {dashboardModalOpen && (
        <PersonalizedDashboardModal
          onClose={() => setDashboardModalOpen(false)}
          onSelectResource={handleOpenResource}
          onStartQuiz={handleStartQuizById}
          onSelectSubjectInExplorer={handleSelectSubjectInExplorer}
          onOpenAuthModal={() => {
            setDashboardModalOpen(false);
            setAuthModalOpen(true);
          }}
        />
      )}

      {/* Bookmarks Drawer Modal */}
      {bookmarksOpen && (
        <BookmarksModal
          bookmarkedResources={bookmarkedResources}
          onClose={() => setBookmarksOpen(false)}
          onOpenResource={handleOpenResource}
          onRemoveBookmark={toggleBookmark}
          onClearAll={clearAllBookmarks}
        />
      )}

      {/* Quick Search Modal */}
      {searchOpen && (
        <QuickSearchModal
          onClose={() => setSearchOpen(false)}
          onSelectResource={handleOpenResource}
          onSelectClass={handleSelectClass}
        />
      )}
    </div>
  );
}

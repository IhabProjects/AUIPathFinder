import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Welcome from './pages/Welcome';
import SchoolQuiz from './pages/SchoolQuiz';
import SchoolResult from './pages/SchoolResult';
import MajorQuiz from './pages/MajorQuiz';
import MinorQuiz from './pages/MinorQuiz';
import Results from './components/Results';
import MinorResults from './pages/MinorResults';
import SHSSQuiz from './pages/SHSSQuiz';
import SHSSResults from './pages/SHSSResults';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';
import Header from './components/Header';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Welcome /></PageTransition>} />
        <Route path="/school-quiz" element={<PageTransition><SchoolQuiz /></PageTransition>} />
        <Route path="/school-result" element={<PageTransition><SchoolResult /></PageTransition>} />
        <Route path="/major-quiz" element={<PageTransition><MajorQuiz /></PageTransition>} />
        <Route path="/minor-quiz" element={<PageTransition><MinorQuiz /></PageTransition>} />
        <Route path="/recommendations" element={<PageTransition><Results /></PageTransition>} />
        <Route path="/minor-results" element={<PageTransition><MinorResults /></PageTransition>} />
        <Route path="/shss-quiz" element={<PageTransition><SHSSQuiz /></PageTransition>} />
        <Route path="/shss-results" element={<PageTransition><SHSSResults /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface-50 flex flex-col">
        <Header />
        <main className="container mx-auto py-8 flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
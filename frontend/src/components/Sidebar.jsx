import React, { useEffect, useRef, useState } from 'react'
import { sidebarStyles } from '../assets/dummyStyles'
import questionsData from '../assets/dummyData'
import { toast } from 'react-toastify'
import { Award, BookOpen, CheckCircle, ChevronDown, ChevronRight, Globe, Menu, Sparkles, Star, Target, Terminal, X, Zap, ChevronLeft } from 'lucide-react'
import axios from 'axios'

const API_BASE = "https://cbtnextgen-2.onrender.com"

const Sidebar = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const DEFAULT_LEVEL = "basic";
  const [selectedLevel, setSelectedLevel] = useState(DEFAULT_LEVEL);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const submittedRef = useRef(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const asideRef = useRef(null);

  const submitResult = async () => {
    if (submittedRef.current) return;
    if (!selectedTech || !selectedLevel) return;

    const questions = getQuestions();
    const scoreData = calculateScore();

    // 🔥 LOGIC: Responses array build karna backend ke liye
    const detailedResponses = questions.map((q, index) => {
        const selectedIdx = userAnswers[index]; // Jo user ne select kiya (0, 1, 2, 3)
        const isAnswered = selectedIdx !== undefined;
        
        return {
            questionText: q.question,
            selectedOption: isAnswered ? q.options[selectedIdx] : "Not Answered",
            correctOption: q.options[q.correctAnswer],
            isCorrect: selectedIdx === q.correctAnswer
        };
    });

    const payload = {
        title: `${selectedTech.toUpperCase()} - ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} quiz`,
        technology: selectedTech,
        level: selectedLevel,
        totalQuestions: questions.length,
        correct: scoreData.correct,
        wrong: questions.length - scoreData.correct,
        responses: detailedResponses, // 🔥 Yeh raha hamara naya detailed data
    };

    try {
        submittedRef.current = true;
        toast.info('Encrypting & Saving Your Result...');

        const token = localStorage.getItem('token') || localStorage.getItem('authToken');

        const res = await axios.post(`${API_BASE}/api/results`, payload, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            },
            timeout: 10000,
        });

        if (res.data && res.data.success) {
            toast.success('Detailed Result Saved Successfully!');
        } else {
            toast.warn('Result not saved on server.');
            submittedRef.current = false;
        }
    } catch (err) {
        submittedRef.current = false;
        console.error("Database Error:", err);
        toast.error("Network Error: Could not save detailed result.");
    }
};

  const calculateScore = () => {
    const questions = getQuestions();
    let correct = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
    };
  };

  useEffect(() => {
    if (showResults) {
      submitResult();
    }
  }, [showResults]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(true);
      else setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const technologies = [
    { id: "dca", name: "DCA ", icon: <Globe size={18} />, color: "border-orange-500/30 text-orange-400 bg-orange-500/5" },
    // { id: "css", name: "CSS3 Styling", icon: <Zap size={18} />, color: "border-blue-500/30 text-blue-400 bg-blue-500/5" },
    // { id: "js", name: "JavaScript ES6", icon: <Terminal size={18} />, color: "border-yellow-500/30 text-yellow-400 bg-yellow-500/5" },
  ];

  const levels = [
    { id: "basic", name: "Your Exam Starts Now", questions: 20, icon: <Star size={14} />, color: "text-cyan-400" },
  ];

  const handleTechSelect = (techId) => {
    setSelectedTech(selectedTech === techId ? null : techId);
    setSelectedLevel(DEFAULT_LEVEL);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    submittedRef.current = false;
    alert("Your Exam Starts Now, Please Attempt All Qus !! GOOD LUCK !!");
  };

  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleAnswerSelect = (index) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion]: index }));
  };

  const handleNext = () => {
    if (currentQuestion < getQuestions().length - 1) setCurrentQuestion(p => p + 1);
    else setShowResults(true);
  };

  const getQuestions = () => (selectedTech && selectedLevel ? questionsData[selectedTech]?.[selectedLevel] || [] : []);
  const questions = getQuestions();
  const currentQ = questions[currentQuestion];

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    submittedRef.current = false;
  };

  return (
    <div className={sidebarStyles.pageContainer}>
      {isSidebarOpen && <div onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)} className={sidebarStyles.mobileOverlay} />}

      <div className={sidebarStyles.mainContainer}>
        {/* SIDEBAR */}
        <aside ref={asideRef} className={`${sidebarStyles.sidebar} ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className={sidebarStyles.sidebarHeader}>
            <div className={sidebarStyles.headerDecoration1}></div>
            <div className={sidebarStyles.headerContent}>
              <div className={sidebarStyles.logoContainer}>
                <div className={sidebarStyles.logoIcon}><BookOpen size={22} /></div>
                <div>
                  <h1 className={sidebarStyles.logoTitle}>Next Gen CBT</h1>
                  <p className={sidebarStyles.logoSubtitle}>Examination Portal</p>
                </div>
              </div>
              <button className={sidebarStyles.closeButton} onClick={() => setIsSidebarOpen(false)}><X size={18} /></button>
            </div>
          </div>

          <div className={`${sidebarStyles.sidebarContent} custom-scrollbar`}>
            <div className={sidebarStyles.technologiesHeader}>
              <h2 className={sidebarStyles.technologiesTitle}>Available Modules</h2>
              <span className={sidebarStyles.technologiesCount}>{technologies.length}</span>
            </div>

            {technologies.map((tech) => (
              <div key={tech.id} className={sidebarStyles.techItem}>
                <button
                  onClick={() => handleTechSelect(tech.id)}
                  className={`${sidebarStyles.techButton} ${selectedTech === tech.id ? sidebarStyles.techButtonSelected : sidebarStyles.techButtonNormal}`}
                >
                  <div className={sidebarStyles.techButtonContent}>
                    <span className={sidebarStyles.techIcon}>{tech.icon}</span>
                    <span className={sidebarStyles.techName}>{tech.name}</span>
                  </div>
                </button>

                {selectedTech === tech.id && (
                  <div className={sidebarStyles.levelsContainer}>
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => handleLevelSelect(level.id)}
                        className={`${sidebarStyles.levelButton} ${selectedLevel === level.id ? sidebarStyles.levelButtonSelected : sidebarStyles.levelButtonNormal}`}
                      >
                        <div className="flex items-center">
                          <span className={level.color}>{level.icon}</span>
                          <span className="ml-2">{level.name}</span>
                        </div>
                        <span className={sidebarStyles.levelQuestions}>{level.questions} Q</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/5">
            <div className="bg-cyan-500/5 rounded-xl p-3 border border-cyan-500/10 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">System Status</p>
              <p className="text-xs text-cyan-400 font-medium">Ready for Examination</p>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className={sidebarStyles.mainContent}>
          <div className={sidebarStyles.mobileHeader}>
            <button onClick={() => setIsSidebarOpen(true)} className={sidebarStyles.menuButton}><Menu size={20} /></button>
            <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Next Gen CBT</span>
          </div>

          {!selectedTech ? (
            <div className={sidebarStyles.welcomeContainer}>
              <div className={sidebarStyles.welcomeIcon}><Sparkles size={32} /></div>
              <h2 className={sidebarStyles.welcomeTitle}>Prepare for Excellence</h2>
              <p className={sidebarStyles.welcomeDescription}>Select a module from the dashboard to initiate your computer-based assessment.</p>

              <div className={sidebarStyles.featuresGrid}>
                <div className={sidebarStyles.featureCard}>
                  <Target className="text-cyan-400 mb-2" size={20} />
                  <h3 className="text-white text-sm font-semibold">Real-time Score</h3>
                  <p className="text-[11px] text-gray-500">Get instant analytics after submission.</p>
                </div>
                <div className={sidebarStyles.featureCard}>
                  <Award className="text-purple-400 mb-2" size={20} />
                  <h3 className="text-white text-sm font-semibold">Verified Badge</h3>
                  <p className="text-[11px] text-gray-500">Master your tech stack efficiently.</p>
                </div>
              </div>
            </div>
          ) : showResults ? (
            <div className={sidebarStyles.resultsContainer}>
              <div className={sidebarStyles.resultsContent}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-cyan-500 shadow-[0_0_15px_cyan]"></div>
                <div className="w-20 h-20 mx-auto mb-6 bg-cyan-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                  <CheckCircle size={40} className="text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Submission Successful</h2>
                <p className="text-gray-400 mb-8">Your examination responses have been encrypted and saved to our secure servers.</p>
                <button className="px-10 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all active:scale-95">
                  Please Log Out !!
                </button>
              </div>
            </div>
          ) : currentQ && (
            <div className={sidebarStyles.quizContainer}>
              <div className={sidebarStyles.quizHeader}>
                <div className={sidebarStyles.quizTitleContainer}>
                  <h1 className={sidebarStyles.quizTitle}>{selectedTech.toUpperCase()} Assessment</h1>
                  <span className={sidebarStyles.quizCounter}>Q. {currentQuestion + 1}/{questions.length}</span>
                </div>
                <div className={sidebarStyles.progressBar}>
                  <div className={sidebarStyles.progressFill} style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                </div>
              </div>

              <div className={sidebarStyles.questionContainer}>
                <div className={sidebarStyles.questionHeader}>
                  <div className={sidebarStyles.questionIcon}><Terminal size={20} /></div>
                  <h2 className={sidebarStyles.questionText}>{currentQ.question}</h2>
                </div>

                <div className={sidebarStyles.optionsContainer}>
                  {currentQ.options.map((option, index) => {
                    const isSelected = userAnswers[currentQuestion] === index;
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`${sidebarStyles.optionButton} ${isSelected ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                      >
                        <div className={sidebarStyles.optionContent}>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-gray-600'}`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                          </div>
                          <span className={`${sidebarStyles.optionText} ${isSelected ? 'text-cyan-400 font-medium' : 'text-gray-400'}`}>{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-12 flex justify-between items-center">
                  <button
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion(p => p - 1)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20"
                  >
                    <ChevronLeft size={18} /> Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95"
                  >
                    {currentQuestion === questions.length - 1 ? 'Submit Exam' : 'Save & Next'} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <style>{sidebarStyles.customStyles}</style>
    </div>
  )
}

export default Sidebar;
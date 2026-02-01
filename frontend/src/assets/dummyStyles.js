export const navbarStyles = {
  // Main Nav - Sleek Black with Glass effect
  nav: "relative w-full bg-[#0a0a0c] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md",
  
  // Container - Standard width with padding
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",
  
  // Logo Section
  logoContainer: "flex items-center gap-3 group",
  logoButton: "transition-transform duration-300 hover:scale-105",
  logoInner: "w-16 h-16 rounded-xl overflow-hidden border-2 border-indigo-500/50 p-3 bg-black shadow-[0_0_15px_rgba(99,102,241,0.3)]",
  logoImage: "w-full h-full object-cover rounded-lg overflow-hidden",

  // Title Section - Modern Typography
  titleContainer: "hidden md:block",
  titleBackground: "px-4 py-1.5 bg-white/5 rounded-full border border-white/10",
  titleText: "text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 font-bold text-lg tracking-wide uppercase",

  // Desktop Buttons
  desktopButtonsContainer: "hidden md:flex items-center gap-6",
  resultsButton: "flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:translate-y-[-1px]",
  loginButton: "flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(79,70,229,0.4)] active:scale-95",
  buttonIcon: "w-5 h-5",

  // Mobile Menu
  mobileMenuContainer: "md:hidden flex items-center",
  menuToggleButton: "p-2 text-gray-400 hover:text-white transition-colors",
  menuIcon: "w-7 h-7",
  
  // Dark Panel for Mobile
  mobileMenuPanel: "absolute top-20 left-0 w-full bg-[#0f0f12] border-b border-white/10 flex flex-col p-6 gap-4 animate-in slide-in-from-top duration-300",
  mobileMenuItem: "flex items-center gap-4 text-gray-300 hover:text-indigo-400 p-3 rounded-lg hover:bg-white/5 transition-all",
  mobileMenuIcon: "w-6 h-6",

  // Decorative Elements (Optional)
  bubble1: "absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/10 blur-[100px] pointer-events-none",
  bubble2: "absolute -bottom-10 right-20 w-32 h-32 bg-purple-600/10 blur-[80px] pointer-events-none",
  
  animations: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `
};
  
  
export const loginStyles = {
  // Main background with dark mesh gradient
  pageContainer: "min-h-screen w-full bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden font-sans",
  
  // Floating Blur Orbs for background depth
  bubble1: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full",
  bubble2: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full",

  // Back Button
  backButton: "absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-all group z-10",
  backButtonIcon: "w-5 h-5 group-hover:-translate-x-1 transition-transform",
  backButtonText: "font-medium",

  // Form Container & Glassmorphism
  formContainer: "w-full max-w-md z-10",
  formWrapper: "relative p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-transparent shadow-2xl", // Gradient border effect
  formContent: "bg-[#0c0c0e]/80 backdrop-blur-xl rounded-[23px] p-8 md:p-10 border border-white/5",
  
  // Typography
  heading: "flex flex-col items-center gap-2 mb-8",
  headingIcon: "w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center border border-indigo-500/30 mb-2",
  headingIconInner: "w-7 h-7 text-indigo-400",
  titleText: "text-3xl font-bold text-white tracking-tight",
  subtitle: "text-gray-400 text-center text-sm leading-relaxed mb-8",

  // Input Fields
  label: "block mb-5",
  labelText: "block text-sm font-medium text-gray-300 mb-2 ml-1",
  inputContainer: "relative group",
  inputIcon: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors",
  inputIconInner: "w-5 h-5",
  input: "w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all",
  inputError: "border-red-500/50 focus:ring-red-500/20",
  
  // Password Toggle
  passwordToggle: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors",
  passwordToggleIcon: "w-5 h-5",

  // Errors
  errorText: "text-red-400 text-xs mt-2 ml-1 animate-pulse",
  submitError: "bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm mb-6 text-center",

  // Action Buttons
  submitButton: "w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
  submitButtonIcon: "w-5 h-5",
  
  // Signup & Admin Links
  signupContainer: "mt-8 pt-6 border-t border-white/5 flex flex-col gap-4",
  signupContent: "flex items-center justify-between text-sm",
  signupText: "text-gray-500",
  signupLink: "text-indigo-400 hover:text-indigo-300 font-semibold transition-colors",
  
  // Admin specific place styling
  adminBox: "bg-white/[0.02] border border-white/5 rounded-2xl p-4 mt-2 hover:bg-white/[0.04] transition-all group",
  adminLink: "flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-500 group-hover:text-amber-400 transition-all font-bold",

  animations: `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    form { animation: slideUp 0.6s ease-out; }
  `
};
  
  
  
export const signupStyles = {
  // Container & Background
  pageContainer: "min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans",
  bubble1: "absolute top-[-10%] right-[-5%] w-[35%] h-[35%] bg-blue-600/15 blur-[100px] rounded-full",
  bubble2: "absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-cyan-600/15 blur-[100px] rounded-full",

  // Back Button
  backButton: "absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-all group z-20",
  backButtonIcon: "w-5 h-5 group-hover:-translate-x-1 transition-transform",
  backButtonText: "font-medium",

  // Form Container & Glassmorphism
  animatedBorder: "relative p-[1px] rounded-3xl bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-500/30 shadow-2xl w-full max-w-lg",
  formContent: "bg-[#0c0c0e]/80 backdrop-blur-2xl rounded-[23px] p-8 md:p-10 border border-white/5",
  
  // Typography
  heading: "flex flex-col items-center gap-2 mb-6",
  headingIcon: "w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 mb-2",
  headingIconInner: "w-7 h-7 text-cyan-400",
  headingText: "text-3xl font-bold text-white tracking-tight",
  subtitle: "text-gray-400 text-center text-sm leading-relaxed mb-8 max-w-xs mx-auto",

  // Input Fields
  label: "block mb-4",
  labelText: "block text-sm font-medium text-gray-300 mb-2 ml-1",
  inputContainer: "relative group",
  inputIcon: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors",
  inputIconInner: "w-5 h-5",
  input: "w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all",
  inputNormal: "border-white/10",
  inputError: "border-red-500/50 focus:ring-red-500/20",
  
  // Password Specific
  passwordToggle: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors",
  passwordToggleIcon: "w-5 h-5",

  // Errors
  errorText: "text-red-400 text-xs mt-1.5 ml-1 animate-in fade-in slide-in-from-top-1",
  submitError: "bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm mb-6 text-center",

  // Action Buttons
  buttonsContainer: "mt-8",
  submitButton: "w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50",
  
  // Login Prompt
  loginPromptContainer: "mt-8 text-center z-10",
  loginPromptContent: "flex items-center justify-center gap-2 text-sm",
  loginPromptText: "text-gray-500",
  loginPromptLink: "text-cyan-400 hover:text-cyan-300 font-semibold transition-colors underline-offset-4 hover:underline",

  animations: `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    form { animation: fadeInUp 0.5s ease-out forwards; }
  `
};
  
  
  
  
export const sidebarStyles = {
  pageContainer: "min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans",
  mobileOverlay: "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden",
  mainContainer: "flex h-screen relative z-10",

  // Sidebar Glassmorphism
  sidebar: "fixed md:relative z-50 w-72 h-full bg-[#0c0c0e]/90 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 ease-in-out flex flex-col",
  sidebarHeader: "p-6 border-b border-white/5 relative overflow-hidden",
  headerDecoration1: "absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 blur-3xl rounded-full",
  headerContent: "relative z-10 flex items-center justify-between",
  logoContainer: "flex items-center gap-3",
  logoIcon: "p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400",
  logoTitle: "text-sm font-bold tracking-tighter text-white uppercase",
  logoSubtitle: "text-[10px] text-gray-500 leading-none",
  closeButton: "md:hidden p-2 text-gray-400 hover:text-white",

  // Tech Items & Levels
  sidebarContent: "flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar",
  technologiesHeader: "px-2 mb-4 flex items-center justify-between",
  technologiesTitle: "text-[11px] font-semibold uppercase tracking-widest text-gray-500",
  technologiesCount: "text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-gray-400",
  techItem: "group",
  techButton: "w-full flex flex-col p-3 rounded-xl transition-all duration-200 border",
  techButtonNormal: "bg-transparent border-transparent hover:bg-white/5 text-gray-400 hover:text-white",
  techButtonSelected: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)]",
  techButtonContent: "flex items-center gap-3",
  techIcon: "p-2 rounded-lg bg-white/5 transition-colors",
  techName: "font-medium text-sm",
  
  // Levels inside Sidebar
  levelsContainer: "mt-3 ml-4 pl-4 border-l border-white/10 space-y-2 animate-in slide-in-from-left-2",
  levelsTitle: "text-[10px] text-gray-500 mb-2 uppercase flex items-center justify-between",
  techBadge: "bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded text-[9px]",
  levelButton: "w-full flex items-center justify-between p-2.5 rounded-lg text-xs transition-all",
  levelButtonNormal: "text-gray-500 hover:bg-white/5 hover:text-gray-300",
  levelButtonSelected: "bg-white/5 text-white border border-white/10",
  levelIcon: "p-1 rounded-md mr-2",
  levelQuestions: "opacity-50 text-[9px]",

  // Main Content Area
  mainContent: "flex-1 h-full overflow-y-auto bg-[#050505] relative",
  mobileHeader: "md:hidden flex items-center gap-4 p-4 sticky top-0 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 z-30",
  menuButton: "p-2 bg-white/5 rounded-lg text-gray-400",
  
  // Quiz UI
  quizContainer: "max-w-3xl mx-auto py-12 px-6",
  quizHeader: "mb-8",
  quizTitleContainer: "flex items-center justify-between mb-4",
  quizTitle: "text-xl font-bold text-white",
  quizCounter: "text-xs text-gray-500 font-mono",
  progressBar: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden",
  progressFill: "h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]",

  questionContainer: "bg-[#0c0c0e] border border-white/5 rounded-2xl p-8 shadow-2xl",
  questionHeader: "flex gap-4 mb-8",
  questionIcon: "p-3 bg-cyan-500/10 rounded-xl text-cyan-400 h-fit",
  questionText: "text-lg md:text-xl font-medium text-gray-200 leading-relaxed",

  optionsContainer: "grid gap-3",
  optionButton: "w-full p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group",
  optionContent: "flex items-center gap-4",
  optionText: "text-sm md:text-base transition-colors",

  // Welcome / Loading States
  welcomeContainer: "h-full flex flex-col items-center justify-center p-8 text-center",
  welcomeIcon: "w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20 shadow-2xl",
  welcomeTitle: "text-3xl font-bold text-white mb-4",
  welcomeDescription: "text-gray-500 max-w-md mx-auto leading-relaxed",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full max-w-2xl",
  featureCard: "p-5 bg-white/5 border border-white/5 rounded-2xl text-left hover:border-white/10 transition-all",
  featureIcon: "text-cyan-400 mb-3",
  featureTitle: "text-sm font-semibold text-white mb-1",
  featureDescription: "text-xs text-gray-500",

  resultsContainer: "h-full flex items-center justify-center p-6",
  resultsContent: "bg-[#0c0c0e] border border-white/5 rounded-[32px] p-12 text-center max-w-lg w-full shadow-2xl relative overflow-hidden",
  
  customStyles: `
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.1); }
  `
};
  
  
  
  
export const resultStyles = {
  pageContainer: "min-h-screen bg-[#050505] text-white font-sans",
  container: "max-w-7xl mx-auto px-6 py-8",
  header: "mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4",
  title: "text-4xl font-black tracking-tighter text-white uppercase italic",
  adminWelcome: "text-xl font-medium text-cyan-400 flex items-center gap-2",
  
  // Filter System
  filterContainer: "mb-8 p-1 bg-white/5 rounded-2xl inline-flex border border-white/10",
  filterButtons: "flex gap-1",
  filterButton: "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
  filterButtonActive: "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  filterButtonNormal: "text-gray-400 hover:text-white hover:bg-white/5",

  // Cards & Grid
  resultsGrid: "space-y-4",
  card: "bg-[#0c0c0e] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group",
  cardContent: "p-5 flex flex-col md:flex-row md:items-center justify-between gap-4",
  
  // Badge Styles
  badgeExcellent: "px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] uppercase font-bold tracking-widest",
  badgeGood: "px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] uppercase font-bold tracking-widest",
  badgeAverage: "px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-[10px] uppercase font-bold tracking-widest",
  badgeNeedsWork: "px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] uppercase font-bold tracking-widest",

  loadingText: "text-center py-20 text-cyan-500 animate-pulse font-mono tracking-widest"
};
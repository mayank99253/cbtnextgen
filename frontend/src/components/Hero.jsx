import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, GraduationCap, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-[#050505]">

            {/* --- Background Elements --- */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

            {/* --- Floating Badge --- */}
            <div className="z-10 flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 border-white/10 backdrop-blur-md animate-bounce-slow">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium tracking-widest text-cyan-100 uppercase">
                    Revolutionizing Digital Exams
                </span>
            </div>

            {/* --- Main Heading --- */}
            <div className="z-10 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                    Welcome to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">Next Gen Computer Hub</span>
                    <br />
                    <span className="text-3xl md:text-5xl font-light">Computer Based Test</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    The ultimate assessment platform for modern students. Secure, fast, and
                    designed for an unparalleled examination experience. Are you ready to excel?
                </p>

                {/* --- Action Buttons --- */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate('/signup')}
                        className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                        <span className="relative flex items-center gap-2">
                            Start Your Exam <ArrowRight className="w-5 h-5" />
                        </span>
                    </button>

                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl backdrop-blur-md hover:bg-white/10 transition-all">
                        View Instructions
                    </button>
                </div>
            </div>

            {/* --- Feature Grid --- */}
            <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-6xl">
                <FeatureCard
                    icon={<ShieldCheck className="text-blue-400" />}
                    title="Anti-Cheat Tech"
                    desc="AI-powered monitoring to ensure 100% exam integrity."
                />
                <FeatureCard
                    icon={<Cpu className="text-cyan-400" />}
                    title="Zero Latency"
                    desc="Lightning fast response times even on low bandwidth."
                />
                <FeatureCard
                    icon={<Globe className="text-indigo-400" />}
                    title="Global Access"
                    desc="Take your exams from anywhere, anytime, on any device."
                />
            </div>

            {/* --- Custom CSS --- */}
            <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(5px); }
          50% { transform: translateY(25px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
};

// Sub-component for Feature Cards
const FeatureCard = ({ icon, title, desc }) => (
    <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all hover:-translate-y-2">
        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default Hero;
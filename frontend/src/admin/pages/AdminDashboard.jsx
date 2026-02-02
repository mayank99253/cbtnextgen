import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { resultStyles } from '../../assets/dummyStyles';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminNavbar from '../components/AdminNavbar';
import { Users, Trophy, Cpu, Target, Hash, Info } from 'lucide-react';

const Badge = ({ percent }) => {
  if (percent >= 85) return <span className={resultStyles.badgeExcellent}>Excellent</span>;
  if (percent >= 65) return <span className={resultStyles.badgeGood}>Good</span>;
  if (percent >= 45) return <span className={resultStyles.badgeAverage}>Average</span>;
  return <span className={resultStyles.badgeNeedsWork}>Needs Work</span>;
};

const AdminDashboard = ({ apiBase = "https://cbtnextgen-2.onrender.com" }) => {
  const adminData = localStorage.getItem("currentAdmin");
  const adminName = adminData ? (adminData.startsWith('{') ? JSON.parse(adminData).admin_name : adminData) : "Admin";
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [technologies, setTechnologies] = useState([]);

  const getAuthHeader = useCallback(() => {
    const token = localStorage.getItem("adminToken") || localStorage.getItem("currentAdmin");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  const fetchAdminResults = async (tech = "all") => {
    setLoading(true);
    try {
      const q = tech !== "all" ? `?technology=${encodeURIComponent(tech)}` : "";
      const res = await axios.get(`${apiBase}/api/results/admin/all${q}`, { headers: getAuthHeader() });

      if (res.data.success) {
        const fetchedResults = res.data.results || [];
        setResults(fetchedResults);
        if (technologies.length === 0 && fetchedResults.length > 0) {
          const uniqueTechs = [...new Set(fetchedResults.map(r => r.technology))].filter(Boolean);
          setTechnologies(uniqueTechs.sort());
        }
      }
    } catch (err) {
      toast.error("Failed to load results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminResults(selectedTechnology);
  }, [selectedTechnology]);

  const sortedAndRankedResults = useMemo(() => {
    if (!Array.isArray(results)) return [];
    return [...results].sort((a, b) => (b.correct || 0) - (a.correct || 0));
  }, [results]);

  return (
    <div className={resultStyles.pageContainer}>
      <AdminNavbar />
      <div className={resultStyles.container}>
        
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className={resultStyles.adminWelcome}>
            <Cpu className="w-5 h-5" /> SYSTEM ADMINISTRATOR SESSION
          </h2>
          <h1 className={resultStyles.title}>
            Welcome, {adminName} Sir
          </h1>
          <div className="flex gap-6 mt-4">
             <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Users size={16} className="text-cyan-500" />
                <span>Total Attempts: <b className="text-white">{results.length}</b></span>
             </div>
             <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Target size={16} className="text-purple-500" />
                <span>Active Modules: <b className="text-white">{technologies.length}</b></span>
             </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className={resultStyles.filterContainer}>
          <div className={resultStyles.filterButtons}>
            <button
              onClick={() => setSelectedTechnology("all")}
              className={`${resultStyles.filterButton} ${selectedTechnology === "all" ? resultStyles.filterButtonActive : resultStyles.filterButtonNormal}`}
            >
              All Data
            </button>
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTechnology(tech)}
                className={`${resultStyles.filterButton} ${selectedTechnology === tech ? resultStyles.filterButtonActive : resultStyles.filterButtonNormal}`}
              >
                {tech.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className={resultStyles.loadingText}>INITIALIZING DATA STREAM...</div>
        ) : (
          <div className={resultStyles.resultsGrid}>
            {sortedAndRankedResults.map((item, index) => (
              <AdminStripCard
                key={item._id || index}
                item={item}
                rank={index + 1}
                isFiltered={selectedTechnology !== "all"}
              />
            ))}
            {!loading && sortedAndRankedResults.length === 0 && (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <Info className="mx-auto text-gray-600 mb-4" size={40} />
                <p className="text-gray-500">No examination records found for this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

function AdminStripCard({ item, rank, isFiltered }) {
  const percent = item.totalQuestions > 0 ? Math.round((item.correct / item.totalQuestions) * 100) : 0;
  
  return (
    <div className={resultStyles.card}>
      <div className={resultStyles.cardContent}>
        {/* Left: User Info */}
        <div className="flex items-center gap-4 flex-1">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${rank === 1 && isFiltered ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]' : 'bg-white/5 text-gray-500 border border-white/10'}`}>
            {rank}
          </div>
          <div>
            <div className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
              {item.user?.fullName || "Anonymous Student"}
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span className="bg-white/5 px-2 py-0.5 rounded text-cyan-500 border border-white/5">{item.technology}</span>
              <span>• Exam Attempted</span>
            </div>
          </div>
        </div>

        {/* Center: Score Stats */}
        <div className="flex gap-8 px-8 border-x border-white/5 hidden lg:flex">
          <StatBox label="Correct" value={item.correct} color="text-green-400" />
          <StatBox label="Wrong" value={item.wrong} color="text-red-400" />
          <StatBox label="Total" value={item.totalQuestions} color="text-gray-400" />
        </div>

        {/* Right: Percentage & Badge */}
        <div className="flex items-center gap-6 min-w-[150px] justify-end">
          <div className="text-right">
            <div className="text-2xl font-black text-white">{percent}%</div>
            <Badge percent={percent} />
          </div>
          <div className="hidden sm:block">
            <Trophy size={24} className={rank === 1 && isFiltered ? "text-yellow-500 animate-pulse" : "text-gray-800"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const StatBox = ({ label, value, color }) => (
  <div className="text-center">
    <div className={`text-lg font-bold ${color}`}>{value}</div>
    <div className="text-[10px] uppercase tracking-tighter text-gray-600 font-bold">{label}</div>
  </div>
);

export default AdminDashboard;
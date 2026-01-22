
import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  CheckCircle, 
  Award, 
  Loader2,
  ShieldCheck,
  Zap,
  Target,
  Star,
  ChevronRight,
  Sparkles,
  ClipboardList,
  Calendar,
  Trophy
} from 'lucide-react';

interface ReportsViewProps {
  activeRole?: string;
}

export const ReportsView: React.FC<ReportsViewProps> = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('Report exported successfully!');
    }, 1500);
  };

  const performanceStats = [
    { title: 'Curriculum Mastery', value: '94%', color: 'text-emerald-500', bg: 'bg-emerald-50', icon: Target },
    { title: 'Average Quiz Score', value: '88/100', color: 'text-[#3b82f6]', bg: 'bg-blue-50', icon: Zap },
    { title: 'Task Completion', value: '100%', color: 'text-[#F05A28]', bg: 'bg-orange-50', icon: CheckCircle },
    { title: 'Global Star Rank', value: 'Top 5%', color: 'text-amber-500', bg: 'bg-amber-50', icon: Award },
  ];

  const performanceTableData = [
    { module: 'Module 1: Binary Code Secret', task: 'Logic Gates Quiz', score: '98%', rank: 'Elite', date: '2025-01-20', status: 'Completed' },
    { module: 'Module 1: Binary Code Secret', task: 'Counting Quest', score: '92%', rank: 'Master', date: '2025-01-18', status: 'Completed' },
    { module: 'Module 2: Visual Code Architect', task: 'Maze Programming', score: '85%', rank: 'Pass', date: '2025-01-15', status: 'Completed' },
    { module: 'Module 2: Visual Code Architect', task: 'Sprite Movement', score: '100%', rank: 'Elite', date: '2025-01-12', status: 'Completed' },
    { module: 'Module 3: Advanced Hardware', task: 'Sensor Logic', score: '89%', rank: 'Master', date: '2025-01-05', status: 'Completed' },
  ];

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="w-full bg-[#304B9E] rounded-[2.5rem] p-6 md:p-8 text-white shadow-xl border-b-[10px] border-[#F05A28] flex flex-col md:flex-row items-center justify-between gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-4 md:p-5 bg-[#F05A28] rounded-[1.5rem] text-[#304B9E] shadow-xl rotate-3">
             <BarChart3 size={32} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-2xl md:text-3xl font-black leading-none tracking-tight uppercase">Individual <span className="text-[#F05A28]">Learner Report</span></h2>
             <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">U Book Store Global Sync Hub</p>
           </div>
        </div>
        
        <button 
          onClick={handleExport}
          disabled={isExporting}
          className="px-8 py-3.5 bg-white/10 hover:bg-[#F05A28] text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/20 active:scale-95 flex items-center gap-2 relative z-10 group"
        >
          {isExporting ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />}
          {isExporting ? 'Generating...' : 'Export Results'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-10">
        <div className="max-w-6xl mx-auto space-y-6 px-1">
          
          {/* Profile Card */}
          <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16"></div>
            
            <div className="relative">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-[2.5rem] bg-slate-100 p-1.5 shadow-2xl relative overflow-hidden ring-4 ring-white">
                <img src={`https://picsum.photos/seed/Jane/300`} className="w-full h-full object-cover rounded-[2rem]" alt="Jane Smith" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#00a651] text-white p-2 rounded-xl shadow-lg border-4 border-white">
                <ShieldCheck size={18} strokeWidth={3} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <h3 className="text-4xl font-black text-[#304B9E] uppercase tracking-tighter leading-none">Jane Smith</h3>
                <span className="inline-flex px-3 py-1 bg-blue-50 text-[#3b82f6] text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-100 self-center">ID: 73434</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Hub Branch</p>
                    <p className="text-[11px] font-black text-[#304B9E] uppercase">Downtown Hub</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Stage</p>
                    <p className="text-[11px] font-black text-[#304B9E] uppercase">Mover Level 2</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Activity</p>
                    <p className="text-[11px] font-black text-[#304B9E] uppercase">142 Hours</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                    <div className="flex items-center gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#00a651] animate-pulse"></div>
                       <p className="text-[11px] font-black text-[#00a651] uppercase">Excellent</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceStats.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-lg border-2 border-slate-50 hover:border-[#304B9E]/10 transition-all group">
                <div className={`${item.bg} ${item.color} w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                   <item.icon size={20} strokeWidth={3} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                <h4 className={`text-2xl font-black ${item.color} tracking-tight`}>{item.value}</h4>
              </div>
            ))}
          </div>

          {/* Performance Table Section */}
          <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#304B9E] text-white rounded-2xl shadow-lg">
                     <ClipboardList size={22} strokeWidth={3} />
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-[#304B9E] uppercase tracking-tighter">Detailed Performance Matrix</h4>
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Full Curriculum Score History</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                     <Star size={14} className="text-amber-500 fill-current" />
                     <span className="text-[10px] font-black text-[#304B9E] uppercase tracking-widest">Star Points: 42</span>
                  </div>
               </div>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#292667] text-white">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] border-r border-white/5">Curriculum Module</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] border-r border-white/5">Specific Task</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center border-r border-white/5">Raw Score</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center border-r border-white/5">Rank</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center">Submission Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {performanceTableData.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50 transition-all">
                      <td className="px-8 py-5 border-r border-slate-50">
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                           <span className="text-xs font-black text-[#304B9E] uppercase tracking-tight">{row.module}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 border-r border-slate-50">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{row.task}</span>
                      </td>
                      <td className="px-8 py-5 text-center border-r border-slate-50">
                        <span className={`inline-block px-4 py-1 rounded-lg font-black text-sm shadow-sm ${
                          parseInt(row.score) >= 95 ? 'bg-emerald-500 text-white' : 
                          parseInt(row.score) >= 90 ? 'bg-[#304B9E] text-white' : 
                          'bg-indigo-50 text-[#304B9E]'
                        }`}>
                          {row.score}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-center border-r border-slate-50">
                        <div className="flex items-center justify-center gap-2">
                           {row.rank === 'Elite' && <Trophy size={14} className="text-amber-500" />}
                           <span className={`text-[10px] font-black uppercase tracking-widest ${
                             row.rank === 'Elite' ? 'text-amber-500' : 
                             row.rank === 'Master' ? 'text-[#3b82f6]' : 
                             'text-slate-400'
                           }`}>
                             {row.rank}
                           </span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-300">
                           <Calendar size={12} />
                           <span className="text-[10px] font-mono font-black">{row.date}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Live Sync Status: Optimized</span>
               </div>
               <button className="flex items-center gap-2 text-[10px] font-black text-[#304B9E] uppercase tracking-[0.2em] hover:text-[#F05A28] transition-colors">
                  View Full History <ChevronRight size={16} />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            <div className="bg-[#292667] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F05A28]/10 rounded-full blur-2xl"></div>
               <h4 className="text-lg font-black uppercase tracking-tight flex items-center gap-3 mb-6 relative z-10">
                 <Sparkles className="text-[#F05A28]" /> Skills Radar
               </h4>
               <div className="space-y-6 relative z-10">
                  {[
                    { label: 'Logic Reasoning', val: 90, color: 'bg-[#F05A28]' },
                    { label: 'Creative Design', val: 75, color: 'bg-[#3b82f6]' },
                    { label: 'Hardware Theory', val: 85, color: 'bg-[#00a651]' },
                  ].map(skill => (
                     <div key={skill.label} className="space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/60">
                           <span>{skill.label}</span>
                           <span className="text-white">{skill.val}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                           <div className={`h-full ${skill.color} transition-all duration-[2000ms] shadow-[0_0_10px_rgba(240,90,40,0.3)]`} style={{ width: `${skill.val}%` }}></div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center">
               <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-[2rem] flex items-center justify-center mb-5 shadow-inner border border-amber-100 scale-110">
                  <Star size={40} fill="currentColor" className="drop-shadow-sm" />
               </div>
               <h4 className="text-2xl font-black text-[#304B9E] uppercase tracking-tighter leading-none mb-3">Star Collector Rank</h4>
               <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-xs">
                 Jane Smith is currently in the top tier of the Downtown Hub with 42 earned stars!
               </p>
               <div className="mt-8 flex items-center gap-3 bg-slate-50 px-6 py-2.5 rounded-2xl border border-slate-100 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></div>
                  <span className="text-[9px] font-black text-[#304B9E] uppercase tracking-[0.2em]">Tier: Advanced Learner</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-[8px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">U Book Store Global Analytics • node_73434_jane • v2.4.5</p>
    </div>
  );
};

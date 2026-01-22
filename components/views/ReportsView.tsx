
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
  ChevronRight,
  ClipboardList,
  Calendar,
  Check,
  X as CloseIcon,
  BookOpen
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
    { title: 'Overall Marks', value: '482/500', color: 'text-[#F05A28]', bg: 'bg-orange-50', icon: Award },
    { title: 'Completion Rate', value: '100%', color: 'text-indigo-500', bg: 'bg-indigo-50', icon: CheckCircle },
  ];

  const performanceTableData = [
    { course: 'Digital Creators', module: 'Module 1: Binary Code Secret', task: 'Logic Gates Quiz', score: '98%', correct: 10, incorrect: 0, date: '2025-01-20', status: 'Completed' },
    { course: 'Digital Creators', module: 'Module 1: Binary Code Secret', task: 'Counting Quest', score: '92%', correct: 9, incorrect: 1, date: '2025-01-18', status: 'Completed' },
    { course: 'Digital Creators', module: 'Module 2: Visual Code Architect', task: 'Maze Programming', score: '85%', correct: 8, incorrect: 2, date: '2025-01-15', status: 'Completed' },
    { course: 'Digital Creators', module: 'Module 2: Visual Code Architect', task: 'Sprite Movement', score: '100%', correct: 10, incorrect: 0, date: '2025-01-12', status: 'Completed' },
    { course: 'Digital Creators', module: 'Module 3: Advanced Hardware', task: 'Sensor Logic', score: '89%', correct: 9, incorrect: 1, date: '2025-01-05', status: 'Completed' },
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
        <div className="max-w-7xl mx-auto space-y-6 px-1">
          
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
            </div>

            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#292667] text-white">
                  <tr>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] border-r border-white/5">Course Name</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] border-r border-white/5">Curriculum Module</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] border-r border-white/5">Specific Task</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center border-r border-white/5">Score</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center border-r border-white/5">Correct</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center border-r border-white/5">Incorrect</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-center">Submission Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {performanceTableData.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50 transition-all">
                      <td className="px-6 py-5 border-r border-slate-50">
                        <div className="flex items-center gap-3">
                           <BookOpen size={14} className="text-[#3b82f6]" />
                           <span className="text-xs font-black text-[#304B9E] uppercase tracking-tight">{row.course}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 border-r border-slate-50">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{row.module}</span>
                      </td>
                      <td className="px-6 py-5 border-r border-slate-50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{row.task}</span>
                      </td>
                      <td className="px-6 py-5 text-center border-r border-slate-50">
                        <span className={`inline-block px-3 py-1 rounded-lg font-black text-sm shadow-sm ${
                          parseInt(row.score) >= 95 ? 'bg-emerald-500 text-white' : 
                          parseInt(row.score) >= 90 ? 'bg-[#304B9E] text-white' : 
                          'bg-indigo-50 text-[#304B9E]'
                        }`}>
                          {row.score}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center border-r border-slate-50">
                        <div className="flex items-center justify-center gap-1.5 text-emerald-600">
                           <Check size={14} strokeWidth={3} />
                           <span className="text-sm font-black">{row.correct}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center border-r border-slate-50">
                        <div className="flex items-center justify-center gap-1.5 text-rose-600">
                           <CloseIcon size={14} strokeWidth={3} />
                           <span className="text-sm font-black">{row.incorrect}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
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

          <div className="pt-4">
             <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-blue-50 text-[#304B9E] rounded-2xl flex items-center justify-center shadow-inner border border-blue-100">
                      <Award size={32} strokeWidth={2.5} />
                   </div>
                   <div>
                      <h4 className="text-xl font-black text-[#304B9E] uppercase tracking-tighter">Final Evaluation Status</h4>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Jane Smith is tracking at <span className="text-emerald-600">Distinction Level</span> for this term.</p>
                   </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                   <div className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></div>
                   <span className="text-[10px] font-black text-[#304B9E] uppercase tracking-[0.2em]">Verified Performance Record</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-[8px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">U Book Store Global Analytics • node_73434_jane • v2.4.6</p>
    </div>
  );
};


import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  CheckCircle, 
  Award, 
  Loader2, 
  ShieldCheck, 
  Target, 
  ChevronRight, 
  ClipboardList, 
  Calendar, 
  Check, 
  X as CloseIcon, 
  BookOpen,
  XCircle,
  Library
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

  const performanceTableData = [
    { course: 'Digital Creators', class: 'Junior Coders A', totalModules: 5, score: '98%', correct: 10, mistakes: 0, date: '2025-01-20' },
    { course: 'Robotics Masters', class: 'Junior Coders B', totalModules: 10, score: '92%', correct: 9, mistakes: 1, date: '2025-01-18' },
    { course: 'Digital Creators', class: 'Junior Coders A', totalModules: 5, score: '85%', correct: 8, mistakes: 2, date: '2025-01-15' },
    { course: 'Robotics Masters', class: 'Junior Coders B', totalModules: 10, score: '100%', correct: 10, mistakes: 0, date: '2025-01-12' },
  ];

  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 overflow-hidden animate-in fade-in duration-700">
      {/* Header Section - Standardized corner radius to match other dashboard pages */}
      <div className="w-full bg-[#304B9E] rounded-xl md:rounded-2xl p-4 md:p-5 text-white shadow-xl border-b-6 md:border-b-[8px] border-[#F05A28] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-2.5 md:p-3.5 bg-[#F05A28] rounded-xl text-[#304B9E] shadow-xl rotate-3">
             <BarChart3 size={20} md:size={24} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-lg md:text-xl font-black leading-none tracking-tight uppercase">Student <span className="text-[#F05A28]">Report</span></h2>
             <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">Digital Information School</p>
           </div>
        </div>
        
        <button 
          onClick={handleExport}
          disabled={isExporting}
          className="px-4 md:px-6 py-2 md:py-2.5 bg-white/10 hover:bg-[#F05A28] text-white rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all border border-white/20 active:scale-95 flex items-center gap-2 relative z-10 group"
        >
          {isExporting ? <Loader2 size={12} md:size={14} className="animate-spin" /> : <Download size={12} md:size={14} />}
          {isExporting ? 'Syncing...' : 'Export PDF'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6 px-1">
          
          {/* Profile Card - Standardized rounded corners */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
            <div className="relative">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-[1.5rem] md:rounded-2xl bg-slate-100 p-1 shadow-xl relative overflow-hidden ring-2 md:ring-4 ring-white">
                <img src={`https://picsum.photos/seed/Jane/300`} className="w-full h-full object-cover rounded-[1.2rem] md:rounded-xl" alt="Jane Smith" />
              </div>
              <div className="absolute -bottom-1 md:-bottom-2 -right-1 md:-right-2 bg-[#00a651] text-white p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg border-2 md:border-4 border-white">
                <ShieldCheck size={14} md:size={18} strokeWidth={3} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                <h3 className="text-2xl md:text-4xl font-black text-[#304B9E] uppercase tracking-tighter leading-none truncate">Jane Smith</h3>
                <span className="inline-flex px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-[#3b82f6] text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-100 self-center">ID: 1000001</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                 <div className="space-y-0.5 md:space-y-1">
                    <p className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest">School</p>
                    <p className="text-[10px] md:text-[11px] font-black text-[#304B9E] uppercase truncate">Downtown School</p>
                 </div>
                 <div className="space-y-0.5 md:space-y-1">
                    <p className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest">Registered Courses</p>
                    <p className="text-[10px] md:text-[11px] font-black text-[#304B9E] uppercase">2 Courses</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Matrix - Standardized rounded corners */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
               <div className="flex items-center gap-3">
                  <div className="p-2 md:p-2.5 bg-[#304B9E] text-white rounded-lg md:rounded-xl shadow-lg">
                     <ClipboardList size={16} md:size={18} strokeWidth={3} />
                  </div>
                  <div>
                     <h4 className="text-sm md:text-base font-black text-[#304B9E] uppercase tracking-tight">Performance Matrix</h4>
                  </div>
               </div>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead className="bg-[#292667] text-white">
                  <tr>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Course</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Class</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Modules</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">Score</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">Correct</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">Mistakes</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {performanceTableData.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50 transition-all">
                      <td className="px-4 md:px-6 py-4 border-r border-slate-50">
                        <span className="text-[10px] md:text-xs font-black text-[#304B9E] uppercase truncate block">{row.course}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 border-r border-slate-50">
                        <span className="text-[10px] md:text-xs font-bold text-[#F05A28] uppercase truncate block">{row.class}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 border-r border-slate-50">
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase truncate block">Modules {row.totalModules}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center border-r border-slate-50">
                        <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-lg font-black text-xs md:text-sm bg-indigo-50 text-[#304B9E]">{row.score}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center border-r border-slate-50">
                        <div className="flex items-center justify-center gap-1.5">
                           <Check size={12} className="text-emerald-500" strokeWidth={3} />
                           <span className="text-xs md:text-sm font-black text-emerald-600">{row.correct}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center border-r border-slate-50">
                        <div className="flex items-center justify-center gap-1.5">
                           <XCircle size={12} className="text-[#ec2027]" strokeWidth={3} />
                           <span className="text-xs md:text-sm font-black text-[#ec2027]">{row.mistakes}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center">
                        <span className="text-[8px] md:text-[10px] font-mono font-black text-slate-300">{row.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

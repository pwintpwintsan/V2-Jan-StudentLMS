
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
    { title: 'Completion Rate', value: '100%', color: 'text-indigo-500', bg: 'bg-indigo-50', icon: CheckCircle },
  ];

  const performanceTableData = [
    { course: 'Digital Creators', module: 'Module 1', task: 'Logic Gates Quiz', score: '98%', correct: 10, incorrect: 0, date: '2025-01-20' },
    { course: 'Digital Creators', module: 'Module 1', task: 'Counting Quest', score: '92%', correct: 9, incorrect: 1, date: '2025-01-18' },
  ];

  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 overflow-hidden animate-in fade-in duration-700">
      {/* Smaller Header Section */}
      <div className="w-full bg-[#304B9E] rounded-xl md:rounded-[2.5rem] p-4 md:p-5 text-white shadow-xl border-b-6 md:border-b-[8px] border-[#F05A28] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-2.5 md:p-3.5 bg-[#F05A28] rounded-xl text-[#304B9E] shadow-xl rotate-3">
             <BarChart3 size={20} md:size={24} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-lg md:text-xl font-black leading-none tracking-tight uppercase">Learner <span className="text-[#F05A28]">Report</span></h2>
             <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">Digital Information Resources</p>
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
          
          {/* Responsive Profile Card */}
          <div className="bg-white rounded-2xl md:rounded-[3rem] p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
            <div className="relative">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-[1.5rem] md:rounded-[2.5rem] bg-slate-100 p-1 shadow-xl relative overflow-hidden ring-2 md:ring-4 ring-white">
                <img src={`https://picsum.photos/seed/Jane/300`} className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[2rem]" alt="Jane Smith" />
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
                    <p className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest">Hub</p>
                    <p className="text-[10px] md:text-[11px] font-black text-[#304B9E] uppercase truncate">Downtown Hub</p>
                 </div>
                 <div className="space-y-0.5 md:space-y-1">
                    <p className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest">Stage</p>
                    <p className="text-[10px] md:text-[11px] font-black text-[#304B9E] uppercase">Mover LV 2</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Performance Grid - Responsive */}
          <div className="grid grid-cols-2 gap-4">
            {performanceStats.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-6 shadow-lg border-2 border-slate-50 hover:border-[#304B9E]/10 transition-all group">
                <div className={`${item.bg} ${item.color} w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-sm`}>
                   <item.icon size={18} md:size={20} strokeWidth={3} />
                </div>
                <p className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">{item.title}</p>
                <h4 className={`text-xl md:text-2xl font-black ${item.color} tracking-tight`}>{item.value}</h4>
              </div>
            ))}
          </div>

          {/* Matrix - Responsive Table */}
          <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
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
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-[#292667] text-white">
                  <tr>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Program</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Task</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">Score</th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">Correct</th>
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
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase truncate block">{row.task}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center border-r border-slate-50">
                        <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-lg font-black text-xs md:text-sm bg-indigo-50 text-[#304B9E]">{row.score}</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center border-r border-white/5">
                        <span className="text-xs md:text-sm font-black text-emerald-600">{row.correct}</span>
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

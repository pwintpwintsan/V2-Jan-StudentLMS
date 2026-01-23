
import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Rocket, 
  Trophy, 
  Clock, 
  BookOpen, 
  Star, 
  Play, 
  Medal,
  Target,
  Search,
  FilterX,
  Activity,
  Zap,
  ArrowRight,
  Timer
} from 'lucide-react';
import { MOCK_COURSES, MOCK_STUDENTS } from '../../constants.tsx';

interface StudentDashboardViewProps {
  onEnterCourse: (id: string) => void;
  onCourseClick?: (id: string) => void;
  onEnterExams?: () => void;
}

export const StudentDashboardView: React.FC<StudentDashboardViewProps> = ({ onEnterCourse, onCourseClick, onEnterExams }) => {
  const student = MOCK_STUDENTS[0];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Standard', 'Robotics', 'Logic'];

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || course.category?.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const achievements = [
    { name: 'Fast Learner', icon: Rocket, color: 'bg-blue-500' },
    { name: 'Star Student', icon: Star, color: 'bg-[#ec2027]' },
  ];

  return (
    <div className="h-full flex flex-col gap-3 md:gap-4 overflow-hidden animate-in fade-in duration-500">
      {/* Compact Hero Header */}
      <div className="w-full bg-[#292667] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-xl border-b-6 md:border-b-8 border-[#00a651] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
          <div className="p-0.5 bg-white rounded-xl md:rounded-2xl shadow-xl relative shrink-0">
            <img src={`https://picsum.photos/seed/Jane/200`} className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl border-2 border-white object-cover" alt="Jane Smith" />
            <div className="absolute -bottom-1 -right-1 bg-[#ec2027] text-white p-1 rounded-lg shadow-lg rotate-12">
              <Sparkles size={10} md:size={14} strokeWidth={3} />
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-black leading-none tracking-tight uppercase">HI, <span className="text-[#ec2027]">JANE!</span></h2>
            <p className="text-[6px] md:text-[9px] font-black uppercase tracking-widest text-white/40 mt-1">Level 3 School Member</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6 relative z-10 bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm w-full md:w-auto justify-center md:justify-start">
           <div className="text-center">
              <p className="text-lg md:text-2xl font-black text-[#ec2027] leading-none mb-0.5">12</p>
              <p className="text-[6px] md:text-[8px] font-black uppercase text-white/40 tracking-widest">Stars</p>
           </div>
           <div className="w-px h-6 md:h-8 bg-white/10"></div>
           <div className="text-center">
              <p className="text-lg md:text-2xl font-black text-[#00a651] leading-none mb-0.5">08</p>
              <p className="text-[6px] md:text-[8px] font-black uppercase text-white/40 tracking-widest">Quests</p>
           </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 overflow-hidden pb-1">
        <div className="lg:col-span-8 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-slate-100 flex flex-col overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6 shrink-0">
             <h3 className="text-base md:text-xl font-black text-[#292667] uppercase tracking-tight flex items-center gap-2 md:gap-3">
               <div className="p-1.5 md:p-2 bg-red-50 rounded-lg md:rounded-xl text-[#ec2027]"><BookOpen size={18} md:size={24} strokeWidth={3} /></div>
               My Library
             </h3>
             
             <div className="flex items-center gap-2 bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-slate-100 group focus-within:border-[#ec2027] transition-all w-full sm:w-auto">
                <Search size={14} md:size={16} className="text-slate-300" strokeWidth={3} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-[9px] md:text-xs font-black text-[#292667] outline-none placeholder:text-slate-200 w-full sm:w-32 uppercase" 
                />
             </div>
          </div>

          <div className="flex items-center gap-2 mb-4 md:mb-6 overflow-x-auto scrollbar-hide shrink-0 pb-1">
             {categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[7px] md:text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm active:scale-95 ${
                    activeCategory === cat ? 'bg-[#ec2027] text-white' : 'bg-slate-50 text-slate-400'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide space-y-2 md:space-y-3 pr-1">
            <div 
              onClick={onEnterExams}
              className="bg-gradient-to-r from-[#F05A28] to-[#ec2027] p-3 md:p-5 rounded-xl md:rounded-2xl border-2 md:border-4 border-white transition-all cursor-pointer group flex items-center gap-3 md:gap-4 shadow-lg active:scale-[0.98] mb-1 md:mb-2"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur shadow-inner flex items-center justify-center flex-shrink-0">
                 <Zap size={20} md:size={28} className="text-white fill-white" />
              </div>
              <div className="flex-1 min-w-0 text-white">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="px-1.5 py-0.5 bg-white/20 rounded-full text-[5px] md:text-[8px] font-black uppercase tracking-widest whitespace-nowrap">Active Exam</span>
                </div>
                <h4 className="text-[11px] md:text-lg font-black uppercase tracking-tight leading-tight">Take School Exam</h4>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white text-[#ec2027] flex items-center justify-center shadow-xl transition-all">
                <ArrowRight size={14} md:size={18} strokeWidth={4} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {filteredCourses.map((course, idx) => (
              <div key={course.id} onClick={() => onCourseClick?.(course.id)} className="bg-slate-50 p-2.5 md:p-3 rounded-xl md:rounded-[1.5rem] border-2 border-transparent hover:border-[#ec2027] hover:bg-white transition-all cursor-pointer group flex items-center gap-3 md:gap-4 shadow-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl overflow-hidden shadow-md border-2 border-white flex-shrink-0">
                   <img src={course.thumbnail} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[10px] md:text-sm font-black text-[#292667] uppercase tracking-tight truncate group-hover:text-[#ec2027] transition-colors leading-none">{course.name}</h4>
                  <div className="mt-1.5 flex items-center gap-2">
                     <div className="flex-1 h-1 md:h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full transition-all duration-1000 ${idx % 2 === 0 ? 'bg-[#00a651]' : 'bg-[#ec2027]'}`} style={{ width: `${60 + idx * 5}%` }}></div>
                     </div>
                     <span className="text-[6px] md:text-[8px] font-black text-[#292667] whitespace-nowrap">{60 + idx * 5}%</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); onEnterCourse(course.id); }}
                  className="w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-xl bg-[#292667] text-white flex items-center justify-center shadow-lg hover:bg-[#00a651] transition-all active:scale-90"
                >
                   <Play size={12} md:size={14} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4 overflow-hidden">
          <div className="bg-[#292667] rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border-b-6 md:border-b-8 border-[#ec2027] text-white relative overflow-hidden shrink-0">
             <h4 className="font-black text-[7px] md:text-[10px] uppercase tracking-widest text-[#ec2027] mb-3 flex items-center gap-2">
               <Activity size={14} md:size={16} /> Activity Node
             </h4>
             <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                   <p className="text-base md:text-2xl font-black">4.5h</p>
                   <p className="text-[5px] md:text-[8px] font-black uppercase text-white/30 tracking-widest mt-0.5">Study Time</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                   <p className="text-base md:text-2xl font-black text-[#00a651]">92%</p>
                   <p className="text-[5px] md:text-[8px] font-black uppercase text-white/30 tracking-widest mt-0.5">Global Avg</p>
                </div>
             </div>
          </div>
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-slate-100 flex-1 flex flex-col overflow-hidden">
            <h4 className="text-sm md:text-lg font-black text-[#292667] uppercase tracking-tight mb-4 flex items-center gap-2 md:gap-3">
               <Trophy size={16} md:size={22} className="text-red-500" strokeWidth={3} /> Badges
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-2 md:gap-3 overflow-y-auto scrollbar-hide pb-2">
               {achievements.map((item) => (
                 <div key={item.name} className="bg-slate-50 p-2 md:p-4 rounded-xl border-b-2 border-slate-100 flex flex-col items-center text-center hover:bg-white transition-all shadow-sm group">
                    <div className={`${item.color} p-2 rounded-lg text-white shadow-md mb-2 group-hover:scale-110 transition-transform`}>
                       <item.icon size={14} md:size={20} strokeWidth={3} />
                    </div>
                    <p className="text-[6px] md:text-[9px] font-black text-[#292667] uppercase tracking-tight leading-none truncate w-full">{item.name}</p>
                 </div>
               ))}
               <div className="aspect-square bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-100">
                  <Sparkles size={16} md:size={20} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

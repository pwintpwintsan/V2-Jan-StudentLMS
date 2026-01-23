
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
  Activity
} from 'lucide-react';
import { MOCK_COURSES, MOCK_STUDENTS } from '../../constants.tsx';

interface StudentDashboardViewProps {
  onEnterCourse: (id: string) => void;
  onCourseClick?: (id: string) => void;
}

export const StudentDashboardView: React.FC<StudentDashboardViewProps> = ({ onEnterCourse, onCourseClick }) => {
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
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="p-0.5 bg-white rounded-xl md:rounded-2xl shadow-xl relative">
            <img src={`https://picsum.photos/seed/Jane/200`} className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl border-2 border-white object-cover" alt="Jane Smith" />
            <div className="absolute -bottom-1 -right-1 bg-[#ec2027] text-white p-1 rounded-lg shadow-lg rotate-12">
              <Sparkles size={12} md:size={14} strokeWidth={3} />
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black leading-none tracking-tight">HELLO, <span className="text-[#ec2027]">JANE!</span></h2>
            <p className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-white/60 mt-1">Level 3 Hub Member</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6 relative z-10 bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm">
           <div className="text-center">
              <p className="text-xl md:text-2xl font-black text-[#ec2027] leading-none mb-0.5">12</p>
              <p className="text-[6px] md:text-[8px] font-black uppercase text-white/40 tracking-widest">Stars</p>
           </div>
           <div className="w-px h-6 md:h-8 bg-white/10"></div>
           <div className="text-center">
              <p className="text-xl md:text-2xl font-black text-[#00a651] leading-none mb-0.5">08</p>
              <p className="text-[6px] md:text-[8px] font-black uppercase text-white/40 tracking-widest">Quests</p>
           </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 overflow-hidden pb-1">
        {/* Course Library - Responsive */}
        <div className="lg:col-span-8 bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-slate-100 flex flex-col overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6 shrink-0">
             <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight flex items-center gap-3">
               <div className="p-2 bg-red-50 rounded-lg md:rounded-xl text-[#ec2027]"><BookOpen size={20} md:size={24} strokeWidth={3} /></div>
               My Library
             </h3>
             
             <div className="flex items-center gap-2 bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-slate-100 group focus-within:border-[#ec2027] transition-all">
                <Search size={14} md:size={16} className="text-slate-300" strokeWidth={3} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-[10px] md:text-xs font-black text-[#292667] outline-none placeholder:text-slate-200 w-full sm:w-32" 
                />
             </div>
          </div>

          <div className="flex items-center gap-2 mb-4 md:mb-6 overflow-x-auto scrollbar-hide shrink-0">
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

          <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 pr-1">
            {filteredCourses.map((course, idx) => (
              <div key={course.id} onClick={() => onCourseClick?.(course.id)} className="bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border-2 border-transparent hover:border-[#ec2027] hover:bg-white transition-all cursor-pointer group flex items-center gap-3 md:gap-4 shadow-sm">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden shadow-md border-2 border-white flex-shrink-0">
                   <img src={course.thumbnail} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-base font-black text-[#292667] uppercase tracking-tight truncate group-hover:text-[#ec2027] transition-colors">{course.name}</h4>
                  <div className="mt-1 md:mt-2 flex items-center gap-2 md:gap-3">
                     <div className="flex-1 h-1.5 md:h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-1000 ${idx % 2 === 0 ? 'bg-[#00a651]' : 'bg-[#ec2027]'}`} style={{ width: `${60 + idx * 5}%` }}></div>
                     </div>
                     <span className="text-[7px] md:text-[9px] font-black text-[#292667]">{60 + idx * 5}%</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); onEnterCourse(course.id); }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#292667] text-white flex items-center justify-center shadow-lg group-hover:bg-[#00a651] transition-all active:scale-90"
                >
                   <Play size={14} md:size={18} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Sidebar Stats */}
        <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4">
          <div className="bg-[#292667] rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border-b-6 md:border-b-8 border-[#ec2027] text-white relative overflow-hidden shrink-0">
             <h4 className="font-black text-[8px] md:text-[10px] uppercase tracking-widest text-[#ec2027] mb-3 flex items-center gap-2">
               <Activity size={14} md:size={16} /> Performance
             </h4>
             <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                   <p className="text-lg md:text-2xl font-black">4.5h</p>
                   <p className="text-[6px] md:text-[8px] font-black uppercase text-white/30 tracking-widest mt-1">Time</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                   <p className="text-lg md:text-2xl font-black text-[#00a651]">92%</p>
                   <p className="text-[6px] md:text-[8px] font-black uppercase text-white/30 tracking-widest mt-1">Avg</p>
                </div>
             </div>
          </div>
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-slate-100 flex-1 flex flex-col overflow-hidden">
            <h4 className="text-base md:text-lg font-black text-[#292667] uppercase tracking-tight mb-4 flex items-center gap-3">
               <Trophy size={18} md:size={22} className="text-red-500" strokeWidth={3} /> Badges
            </h4>
            <div className="grid grid-cols-2 gap-2 md:gap-3 overflow-y-auto scrollbar-hide">
               {achievements.map((item) => (
                 <div key={item.name} className="bg-slate-50 p-3 md:p-4 rounded-xl border-b-2 border-slate-100 flex flex-col items-center text-center hover:bg-white transition-all shadow-sm">
                    <div className={`${item.color} p-2 rounded-lg text-white shadow-md mb-2`}>
                       <item.icon size={16} md:size={20} strokeWidth={3} />
                    </div>
                    <p className="text-[8px] md:text-[9px] font-black text-[#292667] uppercase tracking-tight">{item.name}</p>
                 </div>
               ))}
               <div className="aspect-square bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-100">
                  <Sparkles size={20} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

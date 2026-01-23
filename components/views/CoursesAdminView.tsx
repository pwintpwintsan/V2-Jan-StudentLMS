
import React, { useState, useMemo } from 'react';
import { MOCK_COURSES } from '../../constants.tsx';
import { Course } from '../../types.ts';
import { 
  Settings2,
  ChevronLeft,
  Search,
  Layers,
  Eye,
  PlayCircle,
  PlusCircle,
  Clock,
  BookOpen,
  MonitorPlay,
  Zap,
  Edit3,
  FileText,
  Target,
  ShieldCheck,
  Award
} from 'lucide-react';

interface CoursesAdminViewProps {
  initialCourseId?: string | null;
  onExitEdit?: () => void;
  onPreviewCourse?: (id: string) => void;
  checkPermission?: (category: any, action: string) => boolean;
}

export const CoursesAdminView: React.FC<CoursesAdminViewProps> = ({ 
  initialCourseId, 
  onExitEdit, 
  onPreviewCourse,
  checkPermission 
}) => {
  const [courses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('ubook_courses_v3');
    return saved ? JSON.parse(saved) : MOCK_COURSES;
  });
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(initialCourseId || null);
  const [searchTerm, setSearchTerm] = useState('');

  const currentCourse = useMemo(() => 
    courses.find(c => c.id === selectedCourseId), 
    [courses, selectedCourseId]
  );

  const filteredCourses = useMemo(() => 
    courses.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [courses, searchTerm]
  );

  if (selectedCourseId && currentCourse) {
     return (
       <div className="h-full flex flex-col gap-6 animate-in slide-in-from-right duration-500 overflow-hidden">
          <div className="w-full bg-[#304B9E] rounded-xl p-4 md:p-5 text-white shadow-xl border-b-6 border-[#ec2027] flex items-center justify-between shrink-0">
             <div className="flex items-center gap-6">
                <button onClick={() => { setSelectedCourseId(null); if(onExitEdit) onExitEdit(); }} className="p-3 bg-white/10 rounded-xl hover:bg-[#ec2027] transition-all border border-white/10 active:scale-90">
                  <ChevronLeft size={24} strokeWidth={4} />
                </button>
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight leading-none">Course <span className="text-[#F05A28]">Navigator</span></h2>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-1 truncate max-w-[250px]">{currentCourse.name}</p>
                </div>
             </div>
             
             <button 
               onClick={() => onPreviewCourse?.(currentCourse.id)}
               className="px-6 py-2.5 bg-white/10 hover:bg-[#F05A28] text-white rounded-xl transition-all border border-white/20 active:scale-95 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
             >
                <PlayCircle size={16} /> View Content
             </button>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide p-2">
             <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div>
                      <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 mb-6">
                         <img src={currentCourse.thumbnail} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex flex-wrap gap-3">
                         <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-black text-[9px] uppercase tracking-widest border border-indigo-100">{currentCourse.category}</span>
                         <span className="px-4 py-2 bg-red-50 text-red-600 rounded-xl font-black text-[9px] uppercase tracking-widest border border-red-100">{currentCourse.level}</span>
                         <span className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest border border-slate-100">{currentCourse.duration}</span>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <h3 className="text-3xl font-black text-[#304B9E] uppercase tracking-tighter leading-none">{currentCourse.name}</h3>
                      <p className="text-slate-500 font-bold uppercase text-xs leading-relaxed">{currentCourse.description}</p>
                      
                      <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                            <p className="text-xs font-black text-[#00a651] uppercase flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></div> Active</p>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Version</p>
                            <p className="text-xs font-black text-[#304B9E] uppercase">v2.4.0 Final</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-12 space-y-6">
                  <h4 className="text-xl font-black text-[#304B9E] uppercase tracking-tighter flex items-center gap-3">
                     <Layers className="text-[#ec2027]" size={24} /> Module Structure
                  </h4>
                  <div className="space-y-4">
                    {currentCourse.modules.map((mod, idx) => (
                      <div key={mod.id} className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100 flex items-center justify-between group transition-all hover:bg-white hover:border-[#304B9E]/10 shadow-sm">
                         <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#304B9E] text-white flex items-center justify-center font-black text-lg shadow-xl">{idx + 1}</div>
                            <div>
                               <h5 className="font-black text-[#304B9E] uppercase tracking-tight leading-none mb-1">{mod.title}</h5>
                               <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{mod.lessons.length} Learning Elements</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                             {mod.lessons.some(l => l.type === 'quiz') && <Zap size={16} className="text-[#F05A28]" fill="currentColor" />}
                             <Eye size={20} className="text-slate-300 group-hover:text-[#304B9E] transition-colors" />
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
       </div>
     );
  }

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden animate-in fade-in duration-500">
      <div className="w-full bg-[#304B9E] rounded-xl p-4 md:p-5 text-white shadow-xl border-b-6 border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="flex items-center gap-3 relative z-10">
           <div className="p-2.5 bg-[#ec2027] rounded-lg text-white shadow-lg rotate-3">
             <Settings2 size={22} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-lg md:text-xl font-black leading-none tracking-tight uppercase">Curriculum <span className="text-[#F05A28]">Inventory</span></h2>
             <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">LMS Content Hub Authority</p>
           </div>
        </div>
      </div>

      <div className="w-full bg-white p-2.5 rounded-2xl shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-2.5 flex-shrink-0">
        <div className="flex-1 relative w-full group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#304B9E] transition-colors" />
          <input 
            type="text" 
            placeholder="Search catalog by title..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 pl-10 pr-4 py-2.5 rounded-xl border border-slate-100 outline-none font-black text-[10px] text-[#304B9E] uppercase placeholder:text-slate-200 focus:border-[#304B9E] transition-all shadow-inner"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group bg-white rounded-[2rem] p-6 shadow-md border-4 border-slate-50 hover:border-[#304B9E]/20 transition-all hover:shadow-xl flex flex-col gap-4 relative overflow-hidden">
                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-2 relative shadow-inner">
                   <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                   <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 bg-[#304B9E]/80 backdrop-blur-md text-[#F05A28] rounded text-[7px] font-black uppercase tracking-widest">{course.category}</span>
                   </div>
                </div>
                
                <div className="min-w-0">
                  <h4 className="text-base font-black text-[#304B9E] uppercase tracking-tight leading-tight group-hover:text-[#ec2027] transition-colors line-clamp-1">{course.name}</h4>
                  <div className="flex items-center gap-3 mt-2">
                     <div className="flex items-center gap-1">
                        <Layers size={10} className="text-[#3b82f6]" />
                        <span className="text-[8px] font-black text-slate-400 uppercase">{course.modules.length} Modules</span>
                     </div>
                     <div className="flex items-center gap-1">
                        <Zap size={10} className="text-[#F05A28]" />
                        <span className="text-[8px] font-black text-slate-400 uppercase">Interactive</span>
                     </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t-2 border-slate-50 flex items-center gap-2 relative z-10">
                   <button 
                     onClick={() => setSelectedCourseId(course.id)} 
                     className="flex-1 py-3 bg-[#304B9E] text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-[#F05A28] transition-all flex items-center justify-center gap-2 shadow-md border-b-4 border-black/10 active:scale-95"
                   >
                     <Eye size={14} strokeWidth={3} /> Details
                   </button>
                   <button 
                     onClick={() => onPreviewCourse?.(course.id)}
                     className="p-3 bg-slate-50 text-slate-400 rounded-xl border border-slate-100 hover:bg-[#304B9E] hover:text-white transition-all shadow-sm active:scale-95"
                     title="Live Preview"
                   >
                      <PlayCircle size={16} />
                   </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

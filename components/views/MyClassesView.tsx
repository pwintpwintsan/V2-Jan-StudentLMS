
import React, { useState, useMemo } from 'react';
import { Teacher, ClassInfo, UserRole, School, Course } from '../../types.ts';
import { 
  Users, 
  Rocket, 
  Sparkles, 
  BookOpen, 
  Search,
  Plus,
  Eye,
  Lock,
  ShoppingCart,
  X,
  Clock,
  Layers,
  ChevronRight,
  Library,
  ArrowRight,
  Edit3,
  User,
  School as SchoolIcon,
  Tag,
  Hash,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Timer
} from 'lucide-react';
import { MOCK_COURSES, MOCK_STUDENTS, MOCK_CLASSES } from '../../constants.tsx';

interface MyClassesViewProps { 
  teacher: Teacher;
  classes: ClassInfo[];
  activeRole: UserRole;
  onEnterClass: (id: string) => void;
  onEnterCenter: (id: string) => void;
  onEnterCourse: (id: string) => void;
  onAddBranch: () => void;
  onPurchaseRedirect?: () => void;
  onEnterExams?: () => void;
}

const UnlockModal = ({ courseName, onClose, onPurchase }: { courseName: string, onClose: () => void, onPurchase?: () => void }) => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#304B9E]/90 backdrop-blur-xl animate-in fade-in duration-300">
    <div className="bg-white rounded-3xl p-6 md:p-10 max-w-md w-full shadow-2xl border-t-[8px] md:border-t-[10px] border-[#ec2027] text-center animate-in zoom-in-95 duration-300 relative">
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-300 hover:text-[#ec2027] transition-all bg-slate-50 rounded-xl">
        <X size={20} strokeWidth={3} />
      </button>
      
      <div className="w-12 h-12 md:w-16 md:h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner text-[#ec2027]">
         <Lock size={28} md:size={32} strokeWidth={3} />
      </div>
      
      <h3 className="text-lg md:text-xl font-black text-[#304B9E] mb-1 uppercase tracking-tight">Unlock Course</h3>
      <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4 md:mb-6 truncate">Course: {courseName}</p>
      
      <p className="text-[10px] md:text-xs font-bold text-slate-500 leading-relaxed mb-6 md:mb-8 px-2 md:px-4 uppercase tracking-tight">
        Activation required for school node enrollment.
      </p>
      
      <div className="space-y-3">
        <button 
          onClick={() => { if (onPurchase) onPurchase(); onClose(); }}
          className="w-full py-3 md:py-4 bg-[#304B9E] text-[#F05A28] rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#00a651] hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 border-b-4 border-black/10 active:scale-95"
        >
          <ShoppingCart size={16} md:size={18} /> Order License
        </button>
        <button 
          onClick={() => onClose()}
          className="w-full py-3 md:py-4 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-200 active:scale-95"
        >
          Return to Library
        </button>
      </div>
    </div>
  </div>
);

export const MyClassesView: React.FC<MyClassesViewProps> = ({ teacher, classes, activeRole, onEnterClass, onEnterCenter, onEnterCourse, onAddBranch, onPurchaseRedirect, onEnterExams }) => {
  const [filterText, setFilterText] = useState('');
  const [unlockCourse, setUnlockCourse] = useState<string | null>(null);
  
  const isAdmin = activeRole === UserRole.MAIN_CENTER || activeRole === UserRole.SUPER_ADMIN;
  
  const currentStudent = MOCK_STUDENTS[0]; 
  const studentClass = MOCK_CLASSES[0]; 
  const studentCourse = MOCK_COURSES[0]; 

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(filterText.toLowerCase());
      return matchesSearch;
    });
  }, [filterText]);

  return (
    <div className="h-full flex flex-col gap-3 md:gap-4 overflow-hidden">
      {unlockCourse && <UnlockModal courseName={unlockCourse} onClose={() => setUnlockCourse(null)} onPurchase={onPurchaseRedirect} />}

      {/* Expanded Account-Centric Header */}
      <div className="w-full bg-[#304B9E] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-xl border-b-6 md:border-b-8 border-[#ec2027] flex flex-col gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3 md:gap-4">
             <div className={`p-2.5 md:p-3 rounded-xl shadow-lg ${isAdmin ? 'bg-[#ec2027]' : 'bg-[#F05A28] text-[#304B9E]'}`}>
               {isAdmin ? <Library size={20} md:size={28} strokeWidth={3} /> : <BookOpen size={20} md:size={28} strokeWidth={3} />}
             </div>
             <div>
               <h2 className="text-lg md:text-2xl font-black leading-none tracking-tight uppercase">
                 Welcome back, <span className="text-[#F05A28]">{currentStudent.firstName}!</span>
               </h2>
               <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white/40 mt-1.5">Learning Node School Portal</p>
             </div>
          </div>
        </div>

        {/* Account Info Bar - Responsive Grid */}
        <div className="relative z-10 bg-white/5 px-3 md:px-4 py-3 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
            <div className="space-y-0.5 md:space-y-1 overflow-hidden">
              <p className="text-[5px] md:text-[7px] font-black uppercase text-white/30 tracking-widest leading-none flex items-center gap-1 whitespace-nowrap"><User size={8} /> Student Name</p>
              <p className="text-[8px] md:text-[10px] font-black text-white uppercase truncate">{currentStudent.firstName} {currentStudent.lastName}</p>
            </div>
            <div className="space-y-0.5 md:space-y-1 overflow-hidden">
              <p className="text-[5px] md:text-[7px] font-black uppercase text-white/30 tracking-widest leading-none flex items-center gap-1 whitespace-nowrap"><Hash size={8} /> Username</p>
              <p className="text-[8px] md:text-[10px] font-black text-[#F05A28] font-mono tracking-wider truncate">{currentStudent.username}</p>
            </div>
            <div className="space-y-0.5 md:space-y-1 overflow-hidden">
              <p className="text-[5px] md:text-[7px] font-black uppercase text-white/30 tracking-widest leading-none flex items-center gap-1 whitespace-nowrap"><SchoolIcon size={8} /> School</p>
              <p className="text-[8px] md:text-[10px] font-black text-white uppercase truncate">{teacher.schoolName}</p>
            </div>
            <div className="space-y-0.5 md:space-y-1 overflow-hidden">
              <p className="text-[5px] md:text-[7px] font-black uppercase text-white/30 tracking-widest leading-none flex items-center gap-1 whitespace-nowrap"><BookOpen size={8} /> Course</p>
              <p className="text-[8px] md:text-[10px] font-black text-white uppercase truncate">{studentCourse.name}</p>
            </div>
            <div className="space-y-0.5 md:space-y-1 overflow-hidden">
              <p className="text-[5px] md:text-[7px] font-black uppercase text-white/30 tracking-widest leading-none flex items-center gap-1 whitespace-nowrap"><Users size={8} /> Class</p>
              <p className="text-[8px] md:text-[10px] font-black text-white uppercase truncate">{studentClass.name}</p>
            </div>
            <div className="space-y-0.5 md:space-y-1 overflow-hidden">
              <p className="text-[5px] md:text-[7px] font-black uppercase text-white/30 tracking-widest leading-none flex items-center gap-1 whitespace-nowrap"><CheckCircle2 size={8} /> Activation</p>
              <p className="text-[8px] md:text-[10px] font-black text-[#00a651] uppercase truncate">DIR-CORE-ACT</p>
            </div>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="w-full bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 flex-shrink-0">
        <div className="flex-1 flex items-center gap-3 bg-slate-50 px-3 md:px-4 py-2 rounded-xl border border-slate-100 w-full group focus-within:border-[#ec2027] transition-all">
          <Search size={16} md:size={18} className="text-slate-400 group-focus-within:text-[#ec2027]" strokeWidth={3} />
          <input 
            type="text" 
            placeholder="Search catalog..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="bg-transparent text-[10px] md:text-sm font-black text-[#304B9E] outline-none w-full placeholder:text-slate-200 uppercase"
          />
        </div>
      </div>

      {/* Main List Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-10">
        <div className="grid grid-cols-1 gap-4">
          
          {/* Course Row Items - Smaller Design */}
          {filteredCourses.map((course, idx) => (
            <div 
              key={course.id} 
              onClick={() => onEnterCourse(course.id)} 
              className="bg-white rounded-2xl md:rounded-[1.5rem] shadow-md border-2 border-transparent hover:border-[#ec2027] transition-all group flex flex-col md:flex-row overflow-hidden cursor-pointer w-full"
            >
              <div className="w-full md:w-44 lg:w-48 aspect-video md:aspect-auto relative overflow-hidden bg-slate-100 shrink-0">
                <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={course.name} />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 bg-[#304B9E]/90 backdrop-blur-md text-[#F05A28] rounded-lg text-[6px] md:text-[7px] font-black uppercase tracking-widest shadow-lg border border-white/10">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-5 flex flex-col flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg lg:text-xl font-black text-[#304B9E] uppercase leading-tight group-hover:text-[#ec2027] transition-colors mb-0.5 truncate">{course.name}</h3>
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-tight line-clamp-1">Explore the {course.category} curriculum.</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                     <div className="bg-slate-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-slate-100">
                        <Clock size={9} md:size={10} className="text-[#ec2027]" strokeWidth={3} />
                        <span className="text-[7px] md:text-[8px] font-black text-[#304B9E]">{course.duration || '20h'}</span>
                     </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                    <div className="p-1 bg-white rounded-lg text-[#3b82f6] shadow-sm"><Layers size={10} md:size={12} strokeWidth={3} /></div>
                    <div className="min-w-0">
                      <p className="text-[5px] md:text-[6px] font-black text-slate-400 uppercase tracking-widest leading-none">Modules</p>
                      <p className="text-[7px] md:text-[9px] font-black text-[#304B9E] truncate leading-none mt-1">{course.modules.length}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                    <div className="p-1 bg-white rounded-lg text-[#00a651] shadow-sm"><Users size={10} md:size={12} strokeWidth={3} /></div>
                    <div className="min-w-0">
                      <p className="text-[5px] md:text-[6px] font-black text-slate-400 uppercase tracking-widest leading-none">Learners</p>
                      <p className="text-[7px] md:text-[9px] font-black text-[#304B9E] truncate leading-none mt-1">120</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                   <button 
                     className="flex items-center gap-1 text-[8px] md:text-[9px] font-black uppercase text-[#ec2027] tracking-widest hover:translate-x-1 transition-transform group/btn"
                     onClick={(e) => { e.stopPropagation(); onEnterCourse(course.id); }}
                   >
                     View Syllabus <ArrowRight size={10} md:size={12} strokeWidth={4} />
                   </button>
                   
                   <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#304B9E] text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all scale-90 md:scale-100">
                      <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">Launch</span>
                      <Eye size={10} md:size={12} strokeWidth={3} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { MOCK_COURSES } from '../../constants.tsx';
import { UserRole, Lesson, Course } from '../../types.ts';
import { 
  ChevronLeft, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  Rocket, 
  Clock, 
  Target,
  MonitorPlay,
  Zap,
  Edit3,
  Layers,
  ChevronRight,
  X,
  FileCheck,
  Star,
  Sparkles,
  FileText,
  Eye,
  Play,
  CheckCircle2
} from 'lucide-react';

interface ProgramSyllabusViewProps {
  courseId: string;
  onBack: () => void;
  onEnroll?: (taskId?: string) => void;
  activeRole?: UserRole;
}

const TaskDetailModal = ({ lesson, onClose }: { lesson: Lesson, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#292667]/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-xl max-h-[85vh] shadow-2xl border-t-[8px] border-[#3b82f6] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
          <div className="flex items-center gap-3">
             <div className="p-2.5 bg-blue-50 text-[#3b82f6] rounded-xl shadow-sm">
               <Eye size={18} strokeWidth={3} />
             </div>
             <div>
               <h2 className="text-sm font-black text-[#292667] uppercase tracking-tighter leading-none">Task Analysis</h2>
               <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Resource Preview Hub</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 bg-white text-slate-300 hover:text-[#ec2027] transition-all rounded-xl shadow-sm border border-slate-100">
            <X size={20} strokeWidth={4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide space-y-6">
           {/* Visual Content Preview */}
           <div className="w-full">
             {lesson.type === 'video' && (
               <div className="aspect-video w-full bg-slate-900 rounded-3xl overflow-hidden relative group border-4 border-slate-50 shadow-2xl transition-transform hover:scale-[1.01]">
                 <img src={`https://picsum.photos/seed/${lesson.id}/800/450`} className="w-full h-full object-cover opacity-60" alt="Video Preview" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl border border-white/30 group-hover:scale-110 transition-transform">
                     <Play size={32} className="text-white fill-white ml-1.5" />
                   </div>
                 </div>
                 <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                   <div className="flex gap-2">
                     <span className="text-[9px] font-black uppercase text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">08:45</span>
                     <span className="text-[9px] font-black uppercase text-white bg-[#F05A28] px-3 py-1.5 rounded-lg shadow-lg">HD Stream</span>
                   </div>
                   <div className="flex gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                     <span className="text-[9px] font-black uppercase text-white tracking-widest">Active</span>
                   </div>
                 </div>
                 {/* Mock UI Overlay */}
                 <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                      <Zap size={14} className="text-[#fbee21]" fill="currentColor" />
                    </div>
                 </div>
               </div>
             )}

             {lesson.type === 'quiz' && (
               <div className="space-y-4">
                 <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Sparkles size={14} className="text-amber-500" /> Assessment Sample
                    </p>
                    <span className="text-[8px] font-black text-[#304B9E] bg-blue-50 px-2 py-1 rounded border border-blue-100 uppercase">2 of {lesson.quiz?.length || 5} Questions</span>
                 </div>
                 {lesson.quiz?.slice(0, 2).map((q, i) => (
                   <div key={i} className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform"></div>
                     <p className="text-sm font-black text-[#292667] mb-5 uppercase tracking-tight leading-tight relative z-10">{q.question}</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                       {q.options.slice(0, 4).map((opt, oi) => (
                         <div key={oi} className="px-4 py-3 bg-white rounded-2xl border-2 border-slate-100 text-[11px] font-bold text-slate-500 uppercase truncate flex items-center gap-3 shadow-sm">
                           <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-[#292667] font-black text-[10px] border border-slate-100">{String.fromCharCode(65+oi)}</div>
                           {opt}
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
                 <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    <p className="text-[9px] font-black text-amber-700 uppercase tracking-widest">Full quiz accessible upon enrollment</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                 </div>
               </div>
             )}

             {(lesson.type === 'assignment' || lesson.type === 'text' || lesson.type === 'document') && (
                <div className="bg-slate-50 rounded-[2.5rem] p-8 border-2 border-slate-100 flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-[#292667] mb-6 border-b-4 border-slate-100">
                      {lesson.type === 'assignment' ? <Edit3 size={32} /> : 
                       lesson.type === 'document' ? <FileText size={32} className="text-teal-500" /> : <BookOpen size={32} className="text-emerald-500" />}
                   </div>
                   <h3 className="text-xl font-black text-[#292667] uppercase tracking-tight leading-none mb-4">{lesson.title}</h3>
                   <div className="bg-white/60 p-5 rounded-2xl w-full border border-white text-left">
                      <p className="text-[11px] text-slate-600 font-bold leading-relaxed uppercase tracking-tight">
                         {lesson.type === 'document' ? `Technical resource: ${lesson.fileName || 'Archive.pdf'} (${lesson.fileSize || '1.5MB'})` : (lesson.content || lesson.assignmentInstructions || "Core curriculum node content focusing on foundational mastery and logic concepts.")}
                      </p>
                   </div>
                </div>
             )}
           </div>

           <div className="space-y-3 pt-2">
              <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                 <Layers size={14} className="text-[#ec2027]" /> Node Specification
              </h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[7px] font-black text-slate-400 uppercase mb-1">Status</p>
                    <p className="text-xs font-black text-[#304B9E] uppercase flex items-center gap-2">
                       <CheckCircle2 size={14} className="text-[#00a651]" /> Published
                    </p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[7px] font-black text-slate-400 uppercase mb-1">Difficulty</p>
                    <p className="text-xs font-black text-[#F05A28] uppercase">Foundation</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
           <button 
             onClick={onClose}
             className="w-full py-5 bg-[#292667] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#F05A28] hover:text-white transition-all active:scale-95 border-b-6 border-black/10"
           >
             RETURN TO SYLLABUS
           </button>
        </div>
      </div>
    </div>
  );
};

export const ProgramSyllabusView: React.FC<ProgramSyllabusViewProps> = ({ courseId, onBack, onEnroll, activeRole }) => {
  const course = MOCK_COURSES.find(c => c.id === courseId) || MOCK_COURSES[0];
  
  const totalTasks = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  
  const canEnroll = activeRole !== UserRole.TEACHER && activeRole !== UserRole.SUPER_ADMIN && activeRole !== UserRole.MAIN_CENTER;

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'video': return <MonitorPlay size={16} />;
      case 'quiz': return <Zap size={16} fill="currentColor" />;
      case 'assignment': return <Edit3 size={16} />;
      case 'document': return <FileText size={16} />;
      case 'exam': return <FileCheck size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const getTaskIconColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-indigo-50 text-indigo-500';
      case 'quiz': return 'bg-amber-50 text-amber-500';
      case 'assignment': return 'bg-rose-50 text-rose-500';
      case 'document': return 'bg-teal-50 text-teal-500';
      case 'exam': return 'bg-red-50 text-[#ec2027]';
      default: return 'bg-emerald-50 text-emerald-500';
    }
  };

  return (
    <div className="h-full flex flex-col gap-4 overflow-y-auto scrollbar-hide animate-in fade-in duration-500 pb-12">
      {selectedLesson && <TaskDetailModal lesson={selectedLesson} onClose={() => setSelectedLesson(null)} />}

      <div className="w-full relative group shrink-0">
        <div className="absolute top-6 left-6 z-30 flex gap-2">
          <button 
            onClick={onBack} 
            className="p-3 bg-[#292667]/90 backdrop-blur-md rounded-2xl text-white shadow-2xl hover:bg-[#ec2027] transition-all active:scale-90 border-2 border-white/20"
          >
            <ChevronLeft size={24} strokeWidth={4} />
          </button>
        </div>

        <div className="w-full h-[220px] md:h-[280px] rounded-[2.5rem] overflow-hidden relative shadow-2xl border-b-[8px] border-[#3b82f6]">
          <img 
            src={course.thumbnail} 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
            alt="Program Banner" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292667]/60 to-transparent"></div>
          <div className="absolute bottom-6 left-8 z-20">
             <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#304B9E] text-white text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/10 shadow-lg">OFFICIAL CURRICULUM</span>
             </div>
             <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none text-balance max-w-2xl drop-shadow-2xl">
               {course.name}
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto w-full px-2">
        <div className={`bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden z-20 -mt-16`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ec2027]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-indigo-50 text-[#3b82f6] text-[10px] font-black uppercase tracking-widest rounded-xl border-2 border-indigo-100 shadow-sm">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-red-50 text-[#ec2027] text-[10px] font-black uppercase tracking-widest rounded-xl border-2 border-red-100 shadow-sm">
                    {course.level}
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-500 font-bold leading-relaxed uppercase tracking-tight max-w-2xl">
                  {course.description || "Official Digital Information Resources curriculum module designed for the next generation of digital pioneers. Master core competencies through structured interactive tasks."}
                </p>
              </div>

              {canEnroll && onEnroll && (
                <button 
                  onClick={() => onEnroll()}
                  className="group/enroll px-8 py-5 bg-[#ec2027] hover:bg-[#292667] text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(236,32,39,0.3)] transition-all active:scale-95 flex items-center gap-4 border-b-8 border-black/10 shrink-0 self-center md:self-end"
                >
                   <Rocket size={20} strokeWidth={3} className="group-hover/enroll:translate-x-1 group-hover/enroll:-translate-y-1 transition-transform" /> 
                   Join Program
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-6 border-t-2 border-slate-50">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 rounded-xl text-[#ec2027]"><Clock size={18} strokeWidth={3} /></div>
                  <span className="text-xs font-black text-[#292667] uppercase tracking-widest">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-green-50 rounded-xl text-[#00a651]"><Target size={18} strokeWidth={3} /></div>
                  <span className="text-xs font-black text-[#292667] uppercase tracking-widest">{totalTasks} Quests</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-blue-50 rounded-xl text-[#3b82f6]"><ShieldCheck size={18} strokeWidth={3} /></div>
                  <span className="text-xs font-black text-[#292667] uppercase tracking-widest">Global Node Verified</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto w-full px-2">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl flex flex-col overflow-hidden">
          <div className="p-6 md:p-8 border-b-2 border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ec2027] text-white rounded-2xl shadow-lg rotate-3">
                    <Target size={24} strokeWidth={3} />
                </div>
                <div>
                   <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tighter">Program Roadmap</h3>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Structured Learning Path</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{course.modules.length} Core Modules</span>
              </div>
          </div>
          
          <div className="p-6 md:p-10 space-y-12">
              {course.modules.map((mod, mIdx) => (
                <div key={mod.id} className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#292667] text-[#ec2027] flex items-center justify-center font-black text-xl shadow-xl border-b-4 border-black/10">
                            {mIdx + 1}
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-[#292667] uppercase tracking-tighter leading-none">{mod.title}</h4>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5 flex items-center gap-2">
                             <Layers size={10} className="text-[#ec2027]" /> {mod.lessons.length} Learning Elements
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="ml-6 pl-8 border-l-4 border-dashed border-slate-100 space-y-4">
                      {mod.lessons.map((lesson, lIdx) => (
                          <div 
                            key={lesson.id} 
                            onClick={() => setSelectedLesson(lesson)}
                            className="flex items-center justify-between p-3 md:p-4 rounded-[1.5rem] bg-white border-2 border-slate-50 hover:border-[#3b82f6] hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer relative"
                          >
                            <div className="flex items-center gap-4 min-w-0">
                                <div className={`w-12 h-12 rounded-2xl shadow-inner flex items-center justify-center transition-all group-hover:scale-105 group-hover:rotate-3 flex-shrink-0 border-b-2 border-black/5 ${getTaskIconColor(lesson.type)}`}>
                                  {getTaskIcon(lesson.type)}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                     <span className="px-2 py-0.5 bg-slate-100 text-slate-400 text-[8px] font-black uppercase tracking-widest rounded shadow-sm">Task {lIdx + 1}</span>
                                     <span className="text-[8px] font-black text-[#F05A28] uppercase tracking-widest">{lesson.type.toUpperCase()}</span>
                                  </div>
                                  <span className="text-sm md:text-base font-black text-[#292667] uppercase tracking-tight truncate block group-hover:text-[#3b82f6] transition-colors">{lesson.title}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                                <div className="hidden sm:block">
                                   <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest group-hover:text-[#3b82f6] transition-colors">Details</span>
                                </div>
                                <div className="p-2 bg-slate-50 rounded-xl text-slate-200 group-hover:text-[#292667] group-hover:bg-white transition-all shadow-sm">
                                   <ChevronRight size={20} strokeWidth={4} className="group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                          </div>
                      ))}
                    </div>
                </div>
              ))}
          </div>

          <div className="p-5 bg-slate-50 border-t-2 border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></div>
                <span className="text-[8px] font-black text-[#292667] uppercase tracking-widest">Rewards Node Active</span>
              </div>
              <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Digital Information Resources LMS v2.4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

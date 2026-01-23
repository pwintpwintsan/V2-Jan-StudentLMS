
import React, { useState, useMemo } from 'react';
import { MOCK_CLASSES, MOCK_COURSES } from '../../constants.tsx';
import { UserRole } from '../../types.ts';
import { 
  ChevronLeft, 
  ChevronRight, 
  Users as UsersIcon, 
  BookOpen, 
  PlusCircle, 
  Zap, 
  CheckCircle2, 
  Play
} from 'lucide-react';

interface ClassDetailViewProps {
  classId: string;
  onStudentClick: (id: string) => void;
  onBack: () => void;
  onEnterCourse: (id: string) => void;
  onViewSyllabus: (id: string) => void;
  onClassSwitch?: (id: string) => void;
  checkPermission?: (category: any, action: string) => boolean;
}

/**
 * UpgradePopup component to handle class capacity expansion requests.
 */
const UpgradePopup = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUpgrade = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onConfirm();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-[#304B9E]/80 backdrop-blur-md animate-in fade-in duration-300">
        <div className="bg-white rounded-[3rem] p-12 max-w-md w-full shadow-2xl border-b-[12px] border-[#00a651] text-center animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-green-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-inner text-[#00a651]">
             <CheckCircle2 size={48} strokeWidth={3} />
          </div>
          <h3 className="text-3xl font-black text-[#304B9E] mb-2 uppercase tracking-tighter">UPGRADE SUCCESS!</h3>
          <p className="text-slate-500 font-bold mb-8 text-sm uppercase tracking-widest">
            Class capacity has been successfully expanded.
          </p>
          <button onClick={onClose} className="w-full py-5 px-8 bg-[#304B9E] text-white rounded-2xl font-black text-lg hover:bg-[#00a651] hover:text-white transition-all uppercase tracking-widest shadow-md border-b-4 border-black/10">
            Great!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#304B9E]/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[3rem] p-10 max-lg w-full shadow-2xl border-b-[12px] border-[#F05A28] text-center animate-in zoom-in-95 duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F05A28]/10 rounded-full -mr-16 -mt-16"></div>
        <div className="w-16 h-16 bg-[#F05A28] rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 rotate-6 shadow-xl text-white">
           <Zap size={30} fill="currentColor" />
        </div>
        <h3 className="text-2xl font-black text-[#304B9E] mb-3 uppercase tracking-tighter">Expand Capacity</h3>
        <p className="text-slate-500 font-bold mb-8 text-sm leading-relaxed uppercase tracking-tight">
          Request additional learner seats for this specific group.
        </p>
        <div className="space-y-4">
          <button 
            onClick={handleUpgrade}
            disabled={isProcessing}
            className="block w-full py-5 px-8 bg-[#304B9E] text-white rounded-2xl font-black text-lg hover:bg-[#F05A28] hover:text-white transition-all uppercase tracking-tighter shadow-md border-b-6 border-black/20 active:scale-95 disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Confirm Upgrade'}
          </button>
          <button onClick={onClose} className="w-full text-slate-400 font-black uppercase text-[10px] tracking-widest hover:text-[#304B9E] transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * ClassDetailView component displays information about a specific class, including students and associated course.
 */
export const ClassDetailView: React.FC<ClassDetailViewProps> = ({ 
  classId, 
  onStudentClick, 
  onBack, 
  onEnterCourse, 
  onViewSyllabus,
  checkPermission 
}) => {
  const classInfo = useMemo(() => MOCK_CLASSES.find(c => c.id === classId) || MOCK_CLASSES[0], [classId]);
  const course = useMemo(() => MOCK_COURSES.find(c => c.id === classInfo.courseId), [classInfo.courseId]);
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden animate-in slide-in-from-right duration-500">
      {showUpgrade && <UpgradePopup onClose={() => setShowUpgrade(false)} onConfirm={() => {}} />}
      
      {/* Header Banner */}
      <div className="w-full bg-[#304B9E] rounded-2xl p-6 text-white shadow-xl border-b-8 border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <button onClick={onBack} className="p-3 bg-white/10 rounded-xl text-white shadow-md hover:bg-[#ec2027] transition-all border border-white/10 active:scale-90">
             <ChevronLeft size={24} strokeWidth={4} />
           </button>
           <div>
             <h2 className="text-2xl font-black leading-none tracking-tight uppercase">Class <span className="text-[#F05A28]">{classInfo.name}</span></h2>
             <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Level Identifier: {classInfo.level}</p>
           </div>
        </div>
        <div className="flex items-center gap-8 relative z-10">
           <div className="text-center">
              <p className="text-3xl font-black text-[#F05A28] leading-none">{classInfo.students.length}</p>
              <p className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Enrollments</p>
           </div>
           <div className="w-px h-10 bg-white/10"></div>
           <div className="text-center">
              <p className="text-3xl font-black text-[#00a651] leading-none">{classInfo.progress}%</p>
              <p className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Syllabus Completion</p>
           </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 flex flex-col gap-6 overflow-hidden">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col flex-1">
            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 shadow-lg border-2 border-slate-50">
              <img src={course?.thumbnail} className="w-full h-full object-cover" alt="" />
            </div>
            <h3 className="text-xl font-black text-[#304B9E] uppercase mb-2 tracking-tight">{course?.name}</h3>
            <p className="text-xs text-slate-500 font-bold mb-6 line-clamp-3 uppercase tracking-tight">{course?.description}</p>
            
            <div className="space-y-3 mt-auto">
              <button 
                onClick={() => onEnterCourse(course?.id || '')}
                className="w-full py-4 bg-[#304B9E] text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-[#F05A28] transition-all flex items-center justify-center gap-2 border-b-4 border-black/10 active:scale-95"
              >
                <Play size={16} fill="currentColor" /> Launch Content
              </button>
              <button 
                onClick={() => onViewSyllabus(course?.id || '')}
                className="w-full py-4 bg-slate-50 text-slate-400 rounded-xl font-black text-xs uppercase tracking-widest border border-slate-100 hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <BookOpen size={16} /> Explore Curriculum
              </button>
            </div>
          </div>
        </div>

        {/* Learner Registry */}
        <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
            <h3 className="text-lg font-black text-[#304B9E] uppercase tracking-tighter flex items-center gap-3">
              <UsersIcon size={24} className="text-[#ec2027]" /> Group Members
            </h3>
            <button 
              onClick={() => setShowUpgrade(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#ec2027] text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg border-b-4 border-black/10 hover:bg-[#304B9E] transition-all active:scale-95"
            >
              <PlusCircle size={14} /> Expand Slots
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {classInfo.students.length > 0 ? (
              <div className="divide-y divide-slate-50">
                {classInfo.students.map((student) => (
                  <div 
                    key={student.id} 
                    onClick={() => onStudentClick(student.id)}
                    className="p-6 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-transform">
                        <img src={`https://picsum.photos/seed/${student.id}/64`} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="font-black text-[#304B9E] uppercase tracking-tight leading-none group-hover:text-[#ec2027] transition-colors">{student.firstName} {student.lastName}</p>
                        <p className="text-[10px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-widest">Learner ID: {student.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[10px] font-black text-[#00a651] uppercase tracking-widest">{student.finalGrade}%</p>
                        <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">Mastery</p>
                      </div>
                      <ChevronRight size={18} className="text-slate-200 group-hover:text-[#ec2027] transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-30">
                <UsersIcon size={64} className="text-slate-200 mb-4" />
                <p className="text-sm font-black text-[#304B9E] uppercase tracking-widest">No learners currently enrolled</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

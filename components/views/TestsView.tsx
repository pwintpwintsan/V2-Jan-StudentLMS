
import React, { useState, useMemo } from 'react';
import { MOCK_COURSES } from '../../constants.tsx';
import { Course, Module, Lesson, QuizQuestion } from '../../types.ts';
import { 
  CheckCircle2, 
  Zap, 
  ChevronLeft, 
  X, 
  Check, 
  ListOrdered,
  Search,
  ChevronDown,
  Layers,
  Eye,
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  Timer,
  AlertCircle
} from 'lucide-react';

// Define the missing TestsViewProps interface
interface TestsViewProps {
  checkPermission?: (category: any, action: string) => boolean;
}

/**
 * ExamSession component allows users to actually answer questions and see results.
 */
export const ExamSession = ({ 
  questions, 
  onClose, 
  title 
}: { 
  questions: QuizQuestion[], 
  onClose: () => void,
  title: string
}) => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'taking' | 'results'>('intro');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState({ correct: 0, total: 0, percent: 0 });

  const startExam = () => {
    setUserAnswers({});
    setCurrentStep('taking');
  };

  const submitExam = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore({
      correct: correctCount,
      total: questions.length,
      percent: Math.round((correctCount / questions.length) * 100)
    });
    setCurrentStep('results');
  };

  const optionColors = [
    { bg: 'bg-indigo-50', text: 'text-indigo-600', active: 'bg-indigo-600', ring: 'ring-indigo-100' },
    { bg: 'bg-rose-50', text: 'text-rose-600', active: 'bg-rose-600', ring: 'ring-rose-100' },
    { bg: 'bg-emerald-50', text: 'text-emerald-600', active: 'bg-emerald-600', ring: 'ring-emerald-100' },
    { bg: 'bg-amber-50', text: 'text-amber-600', active: 'bg-amber-600', ring: 'ring-amber-100' },
  ];

  if (currentStep === 'intro') {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#304B9E]/90 backdrop-blur-md animate-in fade-in duration-300">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] w-full max-w-lg p-6 md:p-10 shadow-2xl border-t-[8px] md:border-t-[12px] border-[#F05A28] text-center animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-50 text-[#F05A28] rounded-2xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-inner rotate-3">
             <Zap size={32} md:size={48} fill="currentColor" strokeWidth={0} />
          </div>
          <h3 className="text-xl md:text-3xl font-black text-[#304B9E] uppercase tracking-tighter mb-1 md:mb-2">{title}</h3>
          <p className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 md:mb-8">Digital Assessment Node</p>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
             <div className="bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100">
                <p className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-xs md:text-sm font-black text-[#304B9E]">15 MINS</p>
             </div>
             <div className="bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100">
                <p className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Tasks</p>
                <p className="text-xs md:text-sm font-black text-[#304B9E]">{questions.length} QUESTS</p>
             </div>
          </div>

          <div className="space-y-2 md:space-y-3">
             <button 
               onClick={startExam}
               className="w-full py-4 md:py-5 bg-[#304B9E] text-white rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#00a651] transition-all border-b-6 border-black/10 active:scale-95"
             >
                Initialize Exam
             </button>
             <button onClick={onClose} className="w-full py-2 text-slate-400 font-black uppercase text-[8px] md:text-[10px] tracking-widest hover:text-rose-500">Cancel and Exit</button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#304B9E]/95 backdrop-blur-xl animate-in fade-in duration-300">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] w-full max-w-xl p-6 md:p-10 shadow-2xl border-t-[8px] md:border-t-[12px] border-[#00a651] text-center animate-in zoom-in-95 duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-green-50 text-[#00a651] rounded-2xl md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-inner relative z-10">
             <Trophy size={40} md:size={56} strokeWidth={2.5} />
          </div>
          
          <h3 className="text-2xl md:text-4xl font-black text-[#304B9E] uppercase tracking-tighter mb-1 relative z-10">Assessment Complete</h3>
          <p className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 md:mb-8 relative z-10">Performance Synchronized</p>
          
          <div className="relative mb-6 md:mb-10 group">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] md:border-[10px] border-slate-50 mx-auto flex flex-col items-center justify-center relative shadow-xl bg-white group-hover:scale-105 transition-transform duration-500">
                <div className={`absolute inset-0 rounded-full border-[6px] md:border-[10px] transition-all duration-1000 ${score.percent >= 80 ? 'border-[#00a651]' : 'border-[#F05A28]'}`} style={{ clipPath: `inset(${100 - score.percent}% 0 0 0)` }}></div>
                <p className="text-3xl md:text-5xl font-black text-[#304B9E] leading-none">{score.percent}%</p>
                <p className="text-[6px] md:text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">Mastery Score</p>
             </div>
             <div className="absolute -top-1 -right-1 bg-emerald-500 text-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg rotate-12 animate-bounce">
                <Sparkles size={16} md:size={20} />
             </div>
          </div>

          <div className="bg-slate-50 rounded-2xl md:rounded-[2rem] p-4 md:p-6 mb-6 md:mb-8 border-2 border-slate-100 grid grid-cols-2 gap-4 md:gap-6">
             <div className="text-center">
                <p className="text-xl md:text-2xl font-black text-[#00a651]">{score.correct}</p>
                <p className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Correct Nodes</p>
             </div>
             <div className="text-center">
                <p className="text-xl md:text-2xl font-black text-[#F05A28]">{score.total - score.correct}</p>
                <p className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Incorrect Nodes</p>
             </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 md:py-5 bg-[#304B9E] text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#F05A28] transition-all border-b-6 border-black/10 active:scale-95"
          >
             Return to Console
          </button>
        </div>
      </div>
    );
  }

  const allAnswered = Object.keys(userAnswers).length === questions.length;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-slate-50 overflow-hidden animate-in fade-in duration-500">
      <div className="bg-white border-b border-slate-200 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-sm shrink-0">
         <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-2.5 bg-indigo-50 text-[#304B9E] rounded-lg md:rounded-xl">
               <ListOrdered size={18} md:size={20} strokeWidth={3} />
            </div>
            <div>
               <h2 className="text-sm md:text-lg font-black text-[#304B9E] uppercase tracking-tighter leading-none truncate max-w-[150px] md:max-w-none">{title}</h2>
               <p className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5 md:mt-1">Live Assessment</p>
            </div>
         </div>
         
         <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border border-slate-100">
               <Timer size={14} md:size={16} className="text-[#F05A28]" />
               <span className="font-mono text-xs md:text-sm font-black text-[#304B9E]">14:52</span>
            </div>
            <button onClick={onClose} className="p-1.5 md:p-2 text-slate-300 hover:text-rose-500 transition-all">
               <X size={20} md:size={24} strokeWidth={3} />
            </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-12 scrollbar-hide">
         <div className="max-w-4xl mx-auto space-y-6 md:y-12 pb-20">
            {questions.map((q, qIdx) => (
              <div key={q.id} className="bg-white rounded-2xl md:rounded-[3rem] p-6 md:p-10 shadow-xl border-2 border-slate-50 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-slate-50 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                 
                 <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 relative z-10">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#304B9E] text-white flex items-center justify-center font-black text-xl md:text-2xl shadow-xl shrink-0 rotate-3 group-hover:rotate-0 transition-all">
                       {qIdx + 1}
                    </div>
                    <div className="flex-1 space-y-4 md:space-y-8">
                       <h4 className="text-lg md:text-2xl font-black text-[#304B9E] uppercase tracking-tight leading-tight pt-1 md:pt-2">
                          {q.question}
                       </h4>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {q.options.map((opt, oIdx) => {
                            const isSelected = userAnswers[q.id] === oIdx;
                            const colors = optionColors[oIdx % optionColors.length];
                            return (
                              <button 
                                key={oIdx}
                                onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                                className={`p-4 md:p-6 rounded-xl md:rounded-[2rem] border-2 text-left transition-all duration-300 flex items-center gap-3 md:gap-5 group/opt ${
                                  isSelected 
                                    ? `bg-white border-[#304B9E] shadow-2xl ring-4 ${colors.ring} scale-[1.02]` 
                                    : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                 <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-black transition-all ${
                                   isSelected ? 'bg-[#304B9E] text-white rotate-6' : `${colors.bg} ${colors.text}`
                                 }`}>
                                    {String.fromCharCode(65 + oIdx)}
                                 </div>
                                 <span className={`text-[11px] md:text-[13px] font-black uppercase tracking-tight leading-tight ${isSelected ? 'text-[#304B9E]' : 'text-slate-500'}`}>{opt}</span>
                                 {isSelected && <Check size={16} md:size={18} strokeWidth={4} className="ml-auto text-[#00a651] animate-in zoom-in" />}
                              </button>
                            );
                          })}
                       </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="bg-white border-t border-slate-200 p-4 md:p-8 flex items-center justify-center shadow-inner relative z-30 shrink-0">
         <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
               <div className="bg-indigo-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black text-indigo-600 uppercase tracking-widest border border-indigo-100">
                  {Object.keys(userAnswers).length} / {questions.length} Answered
               </div>
               {!allAnswered && (
                 <div className="flex items-center gap-1.5 text-amber-500 font-black text-[8px] md:text-[9px] uppercase animate-pulse">
                    <AlertCircle size={12} md:size={14} /> Pending Tasks
                 </div>
               )}
            </div>
            
            <button 
              onClick={submitExam}
              disabled={!allAnswered}
              className={`w-full md:w-auto px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-2xl transition-all border-b-6 border-black/10 flex items-center justify-center gap-3 active:scale-95 ${
                allAnswered ? 'bg-[#00a651] text-white hover:bg-[#304B9E]' : 'bg-slate-200 text-slate-400 cursor-not-allowed grayscale'
              }`}
            >
               Finalize <CheckCircle2 size={18} md:size={22} strokeWidth={3} />
            </button>
         </div>
      </div>
    </div>
  );
};

export const TestsView: React.FC<TestsViewProps> = ({ checkPermission }) => {
  const [courses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('ubook_courses_v3');
    return saved ? JSON.parse(saved) : MOCK_COURSES;
  });

  const [selectedId, setSelectedId] = useState<'all' | string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSessionData, setActiveSessionData] = useState<{ questions: QuizQuestion[], title: string } | null>(null);

  const filteredModules = useMemo(() => {
    let baseModules: (Module & { courseName?: string, courseId: string })[] = [];
    if (selectedId === 'all') {
      courses.forEach(c => {
        c.modules.forEach(m => {
          baseModules.push({ ...m, courseName: c.name, courseId: c.id });
        });
      });
    } else {
      const c = courses.find(c => c.id === selectedId);
      if (c) baseModules = c.modules.map(m => ({ ...m, courseName: c.name, courseId: c.id }));
    }
    return baseModules.filter(m => 
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.courseName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedId, courses, searchTerm]);

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden animate-in fade-in duration-500">
      {activeSessionData && (
        <ExamSession 
          questions={activeSessionData.questions} 
          title={activeSessionData.title} 
          onClose={() => setActiveSessionData(null)} 
        />
      )}

      {/* Smaller Responsive Header */}
      <div className="w-full bg-[#304B9E] rounded-xl p-3 md:p-5 text-white shadow-xl border-b-6 border-[#6366f1] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="flex items-center gap-3 relative z-10">
           <div className="p-2 md:p-2.5 bg-[#6366f1] rounded-lg text-white shadow-lg rotate-3">
             <Zap size={20} md:size={22} strokeWidth={3} fill="currentColor" />
           </div>
           <div>
             <h2 className="text-lg md:text-xl font-black leading-none tracking-tight uppercase">Exam <span className="text-[#F05A28]">Center</span></h2>
             <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">Assessment authority</p>
           </div>
        </div>
      </div>

      {/* Control Strip */}
      <div className="w-full bg-white p-2 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-2 flex-shrink-0">
        <div className="flex-1 relative w-full group">
          <select 
            value={selectedId} 
            onChange={(e) => setSelectedId(e.target.value)} 
            className="w-full bg-slate-50 pl-4 pr-10 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-slate-100 outline-none font-black text-[9px] md:text-[10px] text-[#304B9E] uppercase appearance-none cursor-pointer focus:border-[#6366f1] transition-all"
          >
            <option value="all">All Programs</option>
            {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
        
        <div className="flex-[1.5] relative w-full group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
          <input 
            type="text" 
            placeholder="Search exams..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 pl-10 pr-4 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-slate-100 outline-none font-black text-[9px] md:text-[10px] text-[#304B9E] uppercase placeholder:text-slate-200 focus:border-[#6366f1] transition-all"
          />
        </div>
      </div>

      {/* Modules Grid - Responsive Columns */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {filteredModules.map((module, i) => {
            const quizLesson = module.lessons.find(l => l.type === 'quiz');
            const questions = quizLesson?.quiz || [];
            const isActive = quizLesson?.isPublished || false;
            
            return (
              <div key={module.id} className={`group bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 shadow-md border-4 transition-all hover:shadow-xl flex flex-col gap-4 relative overflow-hidden ${isActive ? 'border-emerald-50 hover:border-emerald-200' : 'border-slate-50 hover:border-slate-200'}`}>
                <div className="flex items-center justify-between relative z-10">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-black text-xs md:text-sm shadow-md border-b-2 border-black/10 transition-all ${isActive ? 'bg-[#00a651] text-white rotate-3' : 'bg-slate-100 text-slate-300'}`}>
                    {isActive ? <Zap size={16} md:size={18} fill="currentColor" /> : i + 1}
                  </div>
                </div>

                <div className="min-w-0 relative z-10">
                  <span className="px-2 py-0.5 bg-blue-50 text-[#304B9E] rounded-md text-[7px] md:text-[8px] font-black uppercase tracking-widest border border-blue-100 mb-2 inline-block">
                    {module.courseName}
                  </span>
                  <h4 className="text-sm md:text-base font-black text-[#304B9E] uppercase tracking-tight leading-tight group-hover:text-[#6366f1] transition-colors line-clamp-1">{module.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                     <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#00a651] animate-pulse' : 'bg-slate-300'}`}></div>
                     <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{isActive ? 'Live Session' : 'Draft Mode'}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t-2 border-slate-50 relative z-10">
                  {questions.length > 0 ? (
                    <button 
                      onClick={() => setActiveSessionData({ questions, title: module.title })}
                      className={`w-full py-3 md:py-4 rounded-lg md:rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 md:gap-3 shadow-lg border-b-4 border-black/10 active:scale-95 group/take ${
                        isActive ? 'bg-[#304B9E] text-white hover:bg-[#00a651]' : 'bg-slate-100 text-slate-400 cursor-not-allowed grayscale'
                      }`}
                      disabled={!isActive}
                    >
                      <ArrowRight size={16} md:size={18} strokeWidth={4} className="group-hover/take:translate-x-1 transition-transform" /> 
                      Start Exam
                    </button>
                  ) : (
                    <div className="py-3 md:py-4 text-center bg-slate-50 rounded-lg md:rounded-xl border border-dashed border-slate-200">
                       <p className="text-[7px] md:text-[8px] font-black text-slate-300 uppercase tracking-widest">No Exam Node</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

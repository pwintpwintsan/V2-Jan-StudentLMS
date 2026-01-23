
import React, { useState } from 'react';
import { MOCK_STUDENTS, MOCK_COURSES, LEVELS } from '../../constants.tsx';
import { Award, Printer, Download, RefreshCw, Sparkles, User, BookOpen, Calendar, Hash, ShieldCheck, ChevronDown } from 'lucide-react';
import { LogoMark } from '../Header.tsx';

const BrandLogo = () => (
  <div className="flex flex-col items-center">
    <LogoMark className="w-16 h-16 md:w-20 md:h-20 mb-2" />
    <div className="flex flex-col items-center text-center">
      <span className="text-[8px] md:text-[10px] font-black text-[#304B9E] uppercase leading-none">Digital Information</span>
      <span className="text-[8px] md:text-[10px] font-black text-[#304B9E] uppercase leading-none">Resources</span>
      <span className="text-[6px] md:text-[7px] font-black text-[#F05A28] tracking-tight uppercase mt-1">Learning Hub</span>
    </div>
  </div>
);

export const CertificatesView: React.FC = () => {
  // Learner name is fixed to Jane Smith
  const fixedStudent = MOCK_STUDENTS[0]; 
  const [certData, setCertData] = useState({
    courseTitle: MOCK_COURSES[0].name,
    date: new Date().toISOString().split('T')[0],
    courseId: 'DIR-ACT-2025',
    level: LEVELS[0]
  });

  const handleUpdate = (field: string, val: string) => {
    setCertData(prev => ({ ...prev, [field]: val }));
  };

  return (
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      {/* Compact Responsive Header */}
      <div className="w-full bg-[#304B9E] rounded-2xl md:rounded-[2.5rem] p-4 md:p-6 text-white shadow-xl border-b-6 md:border-b-[10px] border-[#3b82f6] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-3 md:p-4 bg-[#3b82f6] rounded-xl md:rounded-2xl text-white shadow-xl rotate-3">
             <Award size={24} md:size={32} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-xl md:text-2xl lg:text-3xl font-black leading-none tracking-tight uppercase">Award <span className="text-[#F05A28]">Hub</span></h2>
             <p className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-white/40 mt-1.5 md:mt-2">Certificate generation suite</p>
           </div>
        </div>
        <div className="flex items-center gap-4 md:gap-8 relative z-10 bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm">
           <div className="text-center">
              <p className="text-xl md:text-3xl font-black text-[#F05A28] leading-none">12</p>
              <p className="text-[7px] md:text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Issued</p>
           </div>
           <div className="w-px h-6 md:h-10 bg-white/10"></div>
           <div className="text-center">
              <p className="text-xl md:text-3xl font-black text-[#ec2027] leading-none">0</p>
              <p className="text-[7px] md:text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Pending</p>
           </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 overflow-hidden pb-4">
        {/* Responsive Config Panel */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6 overflow-hidden">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl flex-1 flex flex-col overflow-hidden">
            <h3 className="font-black text-[#304B9E] text-xs md:text-sm uppercase tracking-tight mb-4 md:mb-6 flex items-center gap-3">
              <Sparkles className="text-red-500" size={16} /> Configuration
            </h3>
            
            <div className="space-y-4 md:space-y-5 flex-1 overflow-y-auto scrollbar-hide pr-2">
              {/* Fixed Learner Name - Read Only */}
              <div className="space-y-1.5">
                <label className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Fixed Learner Identity</label>
                <div className="w-full bg-slate-100 px-5 py-3.5 rounded-2xl border border-slate-200 font-black text-slate-400 uppercase text-[10px] flex items-center gap-3 cursor-not-allowed">
                  <User size={14} /> Jane Smith
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Program Title</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-100 outline-none font-black text-[#304B9E] uppercase text-[10px] appearance-none cursor-pointer"
                    value={certData.courseTitle}
                    onChange={(e) => handleUpdate('courseTitle', e.target.value)}
                  >
                    {MOCK_COURSES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Course ID Selector</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-100 outline-none font-black text-[#304B9E] uppercase text-[10px] appearance-none cursor-pointer"
                    value={certData.courseId}
                    onChange={(e) => handleUpdate('courseId', e.target.value)}
                  >
                    <option value="DIR-ACT-2025">DIR-ACT-2025 (Active Session)</option>
                    <option value="DIR-FXD-1001">DIR-FXD-1001 (Fixed Protocol)</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Issue Date</label>
                <input 
                  type="date"
                  className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-100 outline-none font-black text-[#304B9E] uppercase text-[10px]"
                  value={certData.date}
                  onChange={(e) => handleUpdate('date', e.target.value)}
                />
              </div>
            </div>

            <button className="w-full py-4 md:py-5 mt-4 bg-[#F05A28] text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#304B9E] transition-all shadow-xl active:scale-95 border-b-4 border-black/10">
              <RefreshCw size={16} strokeWidth={3} /> Generate Now
            </button>
          </div>
        </div>

        {/* Responsive Preview Panel */}
        <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6 overflow-hidden">
          <div className="flex-1 bg-white rounded-[2rem] md:rounded-[3rem] border-4 md:border-[10px] border-double border-red-200 p-6 md:p-12 text-center relative shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-12 md:w-24 h-12 md:h-24 border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-red-400 rounded-tl-[1.5rem] md:rounded-tl-[2rem] opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-12 md:w-24 h-12 md:h-24 border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-red-400 rounded-br-[1.5rem] md:rounded-br-[2rem] opacity-20"></div>

            <div className="mb-4 md:mb-6 flex flex-col items-center">
              <div className="p-3 md:p-4 bg-white rounded-2xl md:rounded-3xl border-2 border-slate-100 shadow-xl mb-3 md:mb-4 transform scale-75 md:scale-90">
                <BrandLogo />
              </div>
              <h1 className="text-lg md:text-3xl font-serif text-slate-800 mb-1 tracking-tight">Certificate of Achievement</h1>
              <p className="text-slate-400 font-bold italic text-xs md:text-sm">Proudly presented to</p>
            </div>

            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-5xl font-black text-[#304B9E] mb-2 md:mb-4 uppercase tracking-tight leading-none text-balance">Jane Smith</h2>
              <div className="h-0.5 md:h-1 w-32 md:w-48 bg-[#F05A28] mx-auto mb-3 md:mb-4 rounded-full"></div>
              <p className="text-[10px] md:text-base text-slate-600 max-w-lg mx-auto leading-relaxed px-4">
                For successfully completing the <span className="font-black text-[#F05A28] uppercase">{certData.courseTitle}</span> program.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 w-full max-w-md mt-2 md:mt-4 px-4">
              <div className="space-y-1">
                <p className="font-black text-xs md:text-lg text-[#304B9E] uppercase tracking-tighter">Educator Jane</p>
                <div className="h-px md:h-0.5 bg-slate-200 w-full mb-1"></div>
                <p className="text-slate-400 uppercase tracking-widest font-black text-[6px] md:text-[7px]">Head of Hub</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono font-black text-xs md:text-lg text-[#304B9E]">{certData.date}</p>
                <div className="h-px md:h-0.5 bg-slate-200 w-full mb-1"></div>
                <p className="text-slate-400 uppercase tracking-widest font-black text-[6px] md:text-[7px]">Issue Date</p>
              </div>
            </div>

            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-[#304B9E]/5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl flex items-center gap-2">
              <ShieldCheck size={12} md:size={14} className="text-[#00a651]" />
              <span className="text-[7px] md:text-[9px] text-[#304B9E] font-black font-mono tracking-widest uppercase">
                ID: {certData.courseId}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 shrink-0 pb-4">
            <button className="flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-[#304B9E] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
              <Download size={16} strokeWidth={3} /> <span className="hidden sm:inline">Download</span>
            </button>
            <button className="flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-[#00a651] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
              <Printer size={16} strokeWidth={3} /> <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { ShieldCheck, User, Lock, LogIn, Key, ChevronLeft, CheckCircle2, FileText, School, Info, ChevronDown, Sparkles } from 'lucide-react';
import { LogoMark } from '../Header.tsx';

interface LandingPageViewProps {
  onOrderCreate: (order: any) => void;
  onLogin?: () => void;
}

const Logo = ({ className = "", size = 60 }: { className?: string, size?: number }) => (
  <div className={`flex flex-col items-center gap-1 select-none ${className}`}>
    <div className="bg-white p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border-4 border-slate-50 mb-2">
      <LogoMark className="w-12 h-12 md:w-16 md:h-16" />
    </div>
    <div className="flex flex-col items-center text-center px-4">
      <span className="text-sm md:text-lg font-black text-[#304B9E] leading-tight tracking-tighter uppercase">Digital Information Resources</span>
      <span className="text-[6px] md:text-[8px] font-black text-[#F05A28] uppercase tracking-[0.3em] leading-none mt-1">Learning Hub</span>
    </div>
  </div>
);

type UserStatus = 'first' | 'returning';
type FlowStep = 'form' | 'terms' | 'details' | 'activate';

export const LandingPageView: React.FC<LandingPageViewProps> = ({ onLogin }) => {
  const [userStatus, setUserStatus] = useState<UserStatus>('returning');
  const [step, setStep] = useState<FlowStep>('form');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    schoolCode: '',
    firstName: '',
    lastName: '',
    confirmed: false
  });

  const handleNext = () => {
    if (userStatus === 'returning') {
      onLogin?.();
    } else {
      if (step === 'form') setStep('terms');
      else if (step === 'terms') setStep('details');
      else if (step === 'details') setStep('activate');
      else if (step === 'activate' && formData.confirmed) onLogin?.();
    }
  };

  const handleBack = () => {
    if (step === 'terms') setStep('form');
    else if (step === 'details') setStep('terms');
    else if (step === 'activate') setStep('details');
  };

  const renderFormContent = () => {
    if (step === 'form') {
      return (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="space-y-1.5">
            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">User Status</label>
            <div className="relative">
              <select 
                value={userStatus}
                onChange={(e) => setUserStatus(e.target.value as UserStatus)}
                className="w-full bg-slate-50 px-5 py-3 rounded-xl border-2 border-slate-100 outline-none font-black text-[#304B9E] uppercase text-[10px] appearance-none cursor-pointer focus:border-[#304B9E] transition-all"
              >
                <option value="returning">Not First Time User</option>
                <option value="first">First Time User</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {userStatus === 'returning' ? (
            <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-1.5">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Username</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                  <input 
                    type="text" 
                    placeholder="Enter ID" 
                    value={formData.username}
                    onChange={e => setFormData({...formData, username: e.target.value})}
                    className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl border-2 border-slate-50 focus:border-[#304B9E] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase" 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl border-2 border-slate-50 focus:border-[#304B9E] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px]" 
                  />
                </div>
              </div>
              <button 
                onClick={handleNext}
                className="w-full py-4 bg-[#304B9E] text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#00a651] transition-all border-b-4 border-black/10 active:scale-95 flex items-center justify-center gap-2"
              >
                <LogIn size={16} /> Enter System
              </button>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-2 duration-300">
               <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 mb-6">
                  <p className="text-[9px] font-bold text-orange-700 uppercase tracking-tight leading-relaxed text-center">
                    Welcome to the Hub! Select your path below to begin account initialization.
                  </p>
               </div>
               <button 
                onClick={handleNext}
                className="w-full py-4 bg-[#F05A28] text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#304B9E] transition-all border-b-4 border-black/10 active:scale-95 flex items-center justify-center gap-2"
              >
                Start Activation <ChevronRight size={16} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>
      );
    }

    if (step === 'terms') {
      return (
        <div className="animate-in slide-in-from-right-4 duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 text-[#F05A28] rounded-xl shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-sm font-black text-[#304B9E] uppercase tracking-tight leading-none">Terms of use</h3>
              <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mt-1">Foundational Protocols</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 h-32 overflow-y-auto mb-6 border border-slate-100 scrollbar-hide">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tight leading-relaxed">
              By activating your account, you agree to follow the Digital Information Resources code of conduct.
              This includes respectful interaction in hub classes and integrity in curriculum tasks.
              Data is used solely for academic tracking and certification within the U Book Store network.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleBack} className="py-3.5 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 transition-all">Back</button>
            <button onClick={handleNext} className="py-3.5 bg-[#F05A28] text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg hover:bg-[#304B9E] transition-all border-b-4 border-black/10">Agree</button>
          </div>
        </div>
      );
    }

    if (step === 'details') {
      return (
        <div className="animate-in slide-in-from-right-4 duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 text-[#F05A28] rounded-xl shrink-0">
              <Key size={20} />
            </div>
            <div>
              <h3 className="text-sm font-black text-[#304B9E] uppercase tracking-tight leading-none">Your details</h3>
              <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mt-1">Identity Mapping</p>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            <div className="space-y-1">
              <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">My School Code</label>
              <div className="relative">
                <School className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                <input 
                  type="text" 
                  value={formData.schoolCode}
                  onChange={e => setFormData({...formData, schoolCode: e.target.value})}
                  placeholder="DIR-XXXX" 
                  className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl border-2 border-slate-50 focus:border-[#F05A28] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                  placeholder="JANE" 
                  className="w-full bg-slate-50 px-4 py-3 rounded-xl border-2 border-slate-50 focus:border-[#F05A28] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                  placeholder="SMITH" 
                  className="w-full bg-slate-50 px-4 py-3 rounded-xl border-2 border-slate-50 focus:border-[#F05A28] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase" 
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleBack} className="py-3.5 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 transition-all">Back</button>
            <button 
              onClick={handleNext}
              disabled={!formData.schoolCode || !formData.firstName || !formData.lastName}
              className="py-3.5 bg-[#F05A28] text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg hover:bg-[#304B9E] transition-all border-b-4 border-black/10 disabled:grayscale disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      );
    }

    if (step === 'activate') {
      return (
        <div className="animate-in zoom-in-95 duration-500">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-50 text-[#304B9E] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner border border-blue-100">
              <CheckCircle2 size={24} strokeWidth={3} />
            </div>
            <h3 className="text-base font-black text-[#304B9E] uppercase tracking-tight">Final Check</h3>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-4 mb-6 border-2 border-slate-100 space-y-3">
             <div>
               <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Hub Branch Code</p>
               <p className="text-[10px] font-black text-[#304B9E] uppercase">{formData.schoolCode}</p>
             </div>
             <div>
               <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Learner Name</p>
               <p className="text-[10px] font-black text-[#304B9E] uppercase">{formData.firstName} {formData.lastName}</p>
             </div>
          </div>

          <label className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100 mb-6 cursor-pointer hover:bg-orange-100 transition-all group">
             <div className="relative pt-0.5">
               <input 
                 type="checkbox" 
                 className="peer sr-only"
                 checked={formData.confirmed}
                 onChange={e => setFormData({...formData, confirmed: e.target.checked})}
               />
               <div className="w-4 h-4 bg-white border-2 border-orange-200 rounded-[4px] peer-checked:bg-[#F05A28] peer-checked:border-[#F05A28] transition-all" />
               <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                  <CheckCircle2 size={10} strokeWidth={4} />
               </div>
             </div>
             <p className="text-[8px] font-bold text-orange-700 uppercase tracking-tight leading-relaxed select-none">
               I confirm that my school name and my name are correct, and I am ready to start working
             </p>
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleBack} className="py-3.5 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 transition-all">Back</button>
            <button 
              onClick={handleNext}
              disabled={!formData.confirmed}
              className="py-3.5 bg-[#00a651] text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-xl hover:bg-[#304B9E] transition-all border-b-4 border-black/10 disabled:grayscale disabled:opacity-50"
            >
              Activate
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-[#f8fafc] overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F05A28]/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#304B9E]/5 blur-[100px] rounded-full"></div>

      <div className="w-full max-w-[340px] md:max-w-[400px] flex flex-col items-center z-10 animate-in fade-in zoom-in-95 duration-700 px-4">
        <Logo size={80} className="mb-6 md:mb-8" />
        
        <div className="w-full bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_-12px_rgba(48,75,158,0.15)] border-[6px] border-[#304B9E] relative min-h-[360px] flex flex-col justify-center">
          {renderFormContent()}
        </div>

        <p className="text-center mt-6 text-[7px] font-black text-slate-300 uppercase tracking-[0.2em] opacity-60">
          U Book Store LMS • Academic Node 2025
        </p>
      </div>
    </div>
  );
};

const ChevronRight = ({ size = 24, className = "", strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

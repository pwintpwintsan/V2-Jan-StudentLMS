
import React, { useState } from 'react';
import { ShieldCheck, User, Lock, LogIn, Key, ChevronLeft, CheckCircle2, FileText, School, Info, ChevronDown, Sparkles, UserPlus, GraduationCap } from 'lucide-react';
import { LogoMark } from '../Header.tsx';

interface LandingPageViewProps {
  onOrderCreate: (order: any) => void;
  onLogin?: () => void;
}

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center gap-1 select-none ${className}`}>
    <div className="bg-white p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border-4 border-slate-50 mb-2">
      <LogoMark className="w-12 h-12 md:w-16 md:h-16" />
    </div>
    <div className="flex flex-col items-center text-center px-4">
      <span className="text-sm md:text-lg font-black text-[#304B9E] leading-tight tracking-tighter uppercase">Digital Information Resources</span>
      <span className="text-[6px] md:text-[8px] font-black text-[#F05A28] uppercase tracking-[0.3em] leading-none mt-1">U Book Store LMS</span>
    </div>
  </div>
);

type UserStatus = 'returning' | 'first';
type FlowStep = 'auth' | 'terms' | 'details' | 'activate';

export const LandingPageView: React.FC<LandingPageViewProps> = ({ onLogin }) => {
  const [userStatus, setUserStatus] = useState<UserStatus>('returning');
  const [step, setStep] = useState<FlowStep>('auth');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    schoolCode: '',
    firstName: '',
    lastName: '',
    confirmed: false
  });

  const handleAction = () => {
    if (userStatus === 'returning') {
      onLogin?.();
    } else {
      if (step === 'auth') setStep('terms');
      else if (step === 'terms') setStep('details');
      else if (step === 'details') setStep('activate');
      else if (step === 'activate' && formData.confirmed) onLogin?.();
    }
  };

  const handleBack = () => {
    if (step === 'terms') setStep('auth');
    else if (step === 'details') setStep('terms');
    else if (step === 'activate') setStep('details');
  };

  const renderContent = () => {
    switch (step) {
      case 'auth':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Small Dropdown in place of Welcome Back */}
            <div className="flex justify-center mb-2">
              <div className="relative group">
                <select 
                  value={userStatus}
                  onChange={(e) => {
                    setUserStatus(e.target.value as UserStatus);
                    setStep('auth');
                  }}
                  className="bg-slate-100 hover:bg-slate-200 pl-4 pr-10 py-2 rounded-full border-2 border-transparent focus:border-[#304B9E] outline-none font-black text-[#304B9E] uppercase text-[9px] appearance-none cursor-pointer transition-all shadow-sm"
                >
                  <option value="returning">Not First Time User</option>
                  <option value="first">First Time User</option>
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#304B9E] pointer-events-none" strokeWidth={3} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Username / ID</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                  <input 
                    type="text" 
                    placeholder="ENTER ID" 
                    value={formData.username}
                    onChange={e => setFormData({...formData, username: e.target.value})}
                    className="w-full bg-slate-50 pl-10 pr-4 py-3.5 rounded-2xl border-2 border-slate-50 focus:border-[#304B9E] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase shadow-inner" 
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
                    className="w-full bg-slate-50 pl-10 pr-4 py-3.5 rounded-2xl border-2 border-slate-50 focus:border-[#304B9E] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] shadow-inner" 
                  />
                </div>
              </div>
              
              <button 
                onClick={handleAction}
                disabled={!formData.username || !formData.password}
                className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg transition-all border-b-4 border-black/10 active:scale-95 flex items-center justify-center gap-2 ${
                  userStatus === 'returning' 
                    ? 'bg-[#304B9E] text-white hover:bg-[#00a651]' 
                    : 'bg-[#F05A28] text-white hover:bg-[#304B9E]'
                } disabled:grayscale disabled:opacity-50`}
              >
                {userStatus === 'returning' ? <LogIn size={16} /> : <UserPlus size={16} />}
                {userStatus === 'returning' ? 'Enter System' : 'Sign Up'}
              </button>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="animate-in slide-in-from-right-4 duration-500 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 text-[#F05A28] rounded-xl shrink-0">
                <FileText size={20} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#304B9E] uppercase tracking-tight leading-none">Terms of use</h3>
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mt-1">LMS Foundational Protocol</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex-1 h-32 overflow-y-auto mb-6 border border-slate-100 scrollbar-hide text-[9px] font-bold text-slate-500 uppercase tracking-tight leading-relaxed">
              By activating your U Book Store account, you agree to follow the Digital Information Resources code of conduct.
              This includes respectful interaction in hub classes and integrity in curriculum tasks.
              Data is used solely for academic tracking and certification within the network.
            </div>
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <button onClick={handleBack} className="py-4 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                <ChevronLeft size={12} strokeWidth={4} /> Back
              </button>
              <button onClick={handleAction} className="py-4 bg-[#F05A28] text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg hover:bg-[#304B9E] transition-all border-b-4 border-black/10">
                Agree
              </button>
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-50 text-[#F05A28] rounded-xl shrink-0">
                <GraduationCap size={20} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#304B9E] uppercase tracking-tight leading-none">Identity Check</h3>
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mt-1">Mapping Hub Credentials</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="space-y-1">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">My School Code</label>
                <div className="relative">
                  <School className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                  <input 
                    type="text" 
                    value={formData.schoolCode}
                    onChange={e => setFormData({...formData, schoolCode: e.target.value})}
                    placeholder="DIR-XXXX" 
                    className="w-full bg-slate-50 pl-10 pr-4 py-3.5 rounded-xl border-2 border-slate-50 focus:border-[#F05A28] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase shadow-inner" 
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
                    placeholder="FIRST" 
                    className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border-2 border-slate-50 focus:border-[#F05A28] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase shadow-inner" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    placeholder="LAST" 
                    className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border-2 border-slate-50 focus:border-[#F05A28] focus:bg-white outline-none font-black text-[#304B9E] transition-all text-[10px] uppercase shadow-inner" 
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleBack} className="py-4 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 transition-all">Back</button>
              <button 
                onClick={handleAction}
                disabled={!formData.schoolCode || !formData.firstName || !formData.lastName}
                className="py-4 bg-[#F05A28] text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg hover:bg-[#304B9E] transition-all border-b-4 border-black/10 disabled:grayscale disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 'activate':
        return (
          <div className="animate-in zoom-in-95 duration-500">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-50 text-[#304B9E] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner border border-blue-100">
                <CheckCircle2 size={24} strokeWidth={3} />
              </div>
              <h3 className="text-base font-black text-[#304B9E] uppercase tracking-tight">Final Activation</h3>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border-2 border-slate-100 space-y-3">
               <div>
                 <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">School Hub</p>
                 <p className="text-[10px] font-black text-[#304B9E] uppercase">Downtown Branch <span className="text-slate-300 ml-1">({formData.schoolCode})</span></p>
               </div>
               <div>
                 <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Learner Name</p>
                 <p className="text-[10px] font-black text-[#304B9E] uppercase">{formData.firstName} {formData.lastName}</p>
               </div>
            </div>

            <label className="flex items-start gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100 mb-6 cursor-pointer hover:bg-orange-100 transition-all group">
               <div className="relative pt-0.5 shrink-0">
                 <input 
                   type="checkbox" 
                   className="peer sr-only"
                   checked={formData.confirmed}
                   onChange={e => setFormData({...formData, confirmed: e.target.checked})}
                 />
                 <div className="w-5 h-5 bg-white border-2 border-orange-200 rounded-lg peer-checked:bg-[#F05A28] peer-checked:border-[#F05A28] transition-all" />
                 <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                    <CheckCircle2 size={12} strokeWidth={4} />
                 </div>
               </div>
               <p className="text-[9px] font-bold text-orange-700 uppercase tracking-tight leading-relaxed select-none">
                 I confirm that my school name and my name are correct, and I am ready to start working
               </p>
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleBack} className="py-4 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 transition-all">Back</button>
              <button 
                onClick={handleAction}
                disabled={!formData.confirmed}
                className="py-4 bg-[#00a651] text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-xl hover:bg-[#304B9E] transition-all border-b-4 border-black/10 disabled:grayscale disabled:opacity-50"
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

      <div className="w-full max-w-[350px] md:max-w-[420px] flex flex-col items-center z-10 animate-in fade-in zoom-in-95 duration-700 px-4">
        <Logo className="mb-6 md:mb-8" />
        
        <div className="w-full bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_-12px_rgba(48,75,158,0.15)] border-[6px] border-[#304B9E] relative min-h-[380px] flex flex-col justify-center">
          {renderContent()}
        </div>

        <p className="text-center mt-6 text-[7px] font-black text-slate-300 uppercase tracking-[0.2em] opacity-60">
          U Book Store • Academic Excellence Node 2025
        </p>
      </div>
    </div>
  );
};

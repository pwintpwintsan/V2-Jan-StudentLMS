
import React, { useState } from 'react';
import { User, Camera, ShieldCheck, Mail, MapPin, Award, ChevronLeft, Sparkles, Target, Zap } from 'lucide-react';

interface AccountProfileViewProps {
  user: {
    name: string;
    id: string;
    role: string;
    hub: string;
    level: string;
  };
  onBack: () => void;
}

export const AccountProfileView: React.FC<AccountProfileViewProps> = ({ user, onBack }) => {
  const [profileImage, setProfileImage] = useState(`https://picsum.photos/seed/${user.name}/300`);
  const [isHovered, setIsHovered] = useState(false);

  const handleEditPhoto = () => {
    const newSeed = Math.random().toString(36).substring(7);
    setProfileImage(`https://picsum.photos/seed/${newSeed}/300`);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto scrollbar-hide animate-in fade-in duration-700">
      <div className="max-w-2xl w-full">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[#304B9E] font-black uppercase text-[10px] tracking-widest hover:text-[#F05A28] transition-colors group"
        >
          <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:bg-[#F05A28] group-hover:text-white transition-all">
            <ChevronLeft size={16} strokeWidth={3} />
          </div>
          Return to Hub
        </button>

        {/* Profile Card */}
        <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(48,75,158,0.1)] border-[8px] border-white relative overflow-hidden">
          {/* Top Banner Decoration */}
          <div className="h-32 w-full bg-[#304B9E] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F05A28]/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-between px-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <span className="text-white font-black text-xs uppercase tracking-widest">Verified Account</span>
              </div>
              <Sparkles className="text-white/20" size={40} />
            </div>
          </div>

          <div className="px-8 pb-12 -mt-16 relative z-10 flex flex-col items-center">
            {/* Avatar Section */}
            <div 
              className="relative group mb-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-white p-1.5 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ring-4 ring-white">
                <img src={profileImage} className="w-full h-full object-cover rounded-[2rem]" alt="Profile" />
                {isHovered && (
                  <div className="absolute inset-0 bg-[#304B9E]/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
                    <button 
                      onClick={handleEditPhoto}
                      className="bg-white text-[#304B9E] p-3 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
                    >
                      <Camera size={24} strokeWidth={3} />
                    </button>
                  </div>
                )}
              </div>
              <button 
                onClick={handleEditPhoto}
                className="absolute -bottom-2 -right-2 bg-[#F05A28] text-white p-3 rounded-2xl shadow-xl border-4 border-white hover:bg-[#304B9E] transition-all active:scale-90"
              >
                <Camera size={20} strokeWidth={3} />
              </button>
            </div>

            {/* User Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-[#304B9E] uppercase tracking-tighter leading-none mb-2">{user.name}</h2>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
                <div className={`w-2 h-2 rounded-full ${user.role === 'Student' ? 'bg-[#00a651]' : 'bg-[#ec2027]'} animate-pulse`}></div>
                <span className="text-[10px] font-black text-[#304B9E] uppercase tracking-[0.2em]">{user.role} Account</span>
              </div>
            </div>

            {/* Information Grid - Read Only */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoField icon={<Zap className="text-[#F05A28]" />} label="System ID" value={user.id} />
              <InfoField icon={<MapPin className="text-[#3b82f6]" />} label="Learning Hub" value={user.hub} />
              <InfoField icon={<Award className="text-[#00a651]" />} label="Program Level" value={user.level} />
              <InfoField icon={<Target className="text-[#ec2027]" />} label="Member Type" value="U Learner Global" />
            </div>

            {/* Bottom Note */}
            <div className="mt-12 flex items-center gap-4 p-5 bg-blue-50/50 rounded-3xl border-2 border-dashed border-blue-100 w-full">
              <div className="p-2.5 bg-white rounded-2xl shadow-sm text-[#304B9E]">
                <ShieldCheck size={24} strokeWidth={3} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-[#304B9E] uppercase tracking-widest leading-none mb-1">Locked Profile</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Only Hub Administrators can modify account details for security.</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-8 text-[8px] font-black text-slate-300 uppercase tracking-[0.4em]">U Book Store Management Node • V2.4</p>
      </div>
    </div>
  );
};

const InfoField = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="space-y-1.5 group">
    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
      {label}
    </label>
    <div className="flex items-center gap-3 bg-slate-50/50 px-5 py-3.5 rounded-2xl border-2 border-slate-100 group-hover:border-slate-200 transition-all shadow-inner">
      <div className="p-1.5 bg-white rounded-lg shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { size: 14, strokeWidth: 3 })}
      </div>
      <span className="font-black text-[#304B9E] text-xs uppercase tracking-tight select-none opacity-80">{value}</span>
    </div>
  </div>
);

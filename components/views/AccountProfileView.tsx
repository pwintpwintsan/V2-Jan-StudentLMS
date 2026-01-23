
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
  const [profileImage, setProfileImage] = useState(`https://picsum.photos/seed/Jane/300`);
  const [isHovered, setIsHovered] = useState(false);

  const handleEditPhoto = () => {
    const newSeed = Math.random().toString(36).substring(7);
    setProfileImage(`https://picsum.photos/seed/${newSeed}/300`);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-3 md:p-8 overflow-y-auto scrollbar-hide animate-in fade-in duration-700">
      <div className="max-w-2xl w-full">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="mb-4 md:mb-6 flex items-center gap-2 text-[#304B9E] font-black uppercase text-[8px] md:text-[10px] tracking-widest hover:text-[#F05A28] transition-colors group"
        >
          <div className="p-1.5 md:p-2 bg-white rounded-lg md:rounded-xl shadow-sm border border-slate-100 group-hover:bg-[#F05A28] group-hover:text-white transition-all">
            <ChevronLeft size={14} md:size={16} strokeWidth={3} />
          </div>
          Return to Hub
        </button>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-xl border-4 md:border-[8px] border-white relative overflow-hidden">
          {/* Top Banner Decoration */}
          <div className="h-24 md:h-32 w-full bg-[#304B9E] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-between px-6 md:px-10">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-1.5 md:p-2 bg-white/10 rounded-lg md:rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={16} md:size={20} className="text-white" />
                </div>
                <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">Verified</span>
              </div>
              <Sparkles className="text-white/20" size={30} md:size={40} />
            </div>
          </div>

          <div className="px-6 md:px-8 pb-8 md:pb-12 -mt-12 md:-mt-16 relative z-10 flex flex-col items-center">
            {/* Avatar Section */}
            <div 
              className="relative group mb-4 md:mb-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-[1.5rem] md:rounded-[2.5rem] bg-white p-1 md:p-1.5 shadow-2xl relative overflow-hidden ring-2 md:ring-4 ring-white">
                <img src={profileImage} className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[2rem]" alt="Profile" />
              </div>
              <button 
                onClick={handleEditPhoto}
                className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-[#F05A28] text-white p-2 md:p-3 rounded-lg md:rounded-2xl shadow-xl border-2 md:border-4 border-white hover:bg-[#304B9E] transition-all active:scale-90"
              >
                <Camera size={16} md:size={20} strokeWidth={3} />
              </button>
            </div>

            {/* User Title */}
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl md:text-3xl font-black text-[#304B9E] uppercase tracking-tighter leading-none mb-1 md:mb-2">Jane Smith</h2>
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-slate-50 border border-slate-100 rounded-full">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00a651] animate-pulse"></div>
                <span className="text-[8px] md:text-[10px] font-black text-[#304B9E] uppercase tracking-widest">Student Account</span>
              </div>
            </div>

            {/* Information Grid - Responsive columns */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <InfoField icon={<Zap className="text-[#F05A28]" />} label="System ID" value={user.id} />
              <InfoField icon={<MapPin className="text-[#3b82f6]" />} label="Hub" value={user.hub} />
              <InfoField icon={<Award className="text-[#00a651]" />} label="Level" value={user.level} />
              <InfoField icon={<Target className="text-[#ec2027]" />} label="Status" value="Verified" />
            </div>
          </div>
        </div>
        
        <p className="text-center mt-6 md:mt-8 text-[7px] md:text-[8px] font-black text-slate-300 uppercase tracking-widest opacity-60">U Book Store Node v2.4 • Jane Identity Locked</p>
      </div>
    </div>
  );
};

const InfoField = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="space-y-1 group">
    <label className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="flex items-center gap-2 md:gap-3 bg-slate-50/50 px-4 md:px-5 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl border border-slate-100 shadow-inner">
      <div className="p-1 md:p-1.5 bg-white rounded-lg shadow-sm shrink-0">
        {React.cloneElement(icon as React.ReactElement, { size: 12, strokeWidth: 3 })}
      </div>
      <span className="font-black text-[#304B9E] text-[10px] md:text-xs uppercase tracking-tight truncate">{value}</span>
    </div>
  </div>
);

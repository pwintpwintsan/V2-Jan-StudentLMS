
import React from 'react';
import { Menu, X, GraduationCap, LogOut, LogIn, Camera } from 'lucide-react';
import { UserRole } from '../types.ts';

export const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="36" y="25" width="4" height="4" fill="#304B9E" />
    <rect x="42" y="25" width="4" height="4" fill="#F05A28" />
    <rect x="42" y="31" width="4" height="4" fill="#F05A28" />
    <rect x="48" y="31" width="10" height="52" fill="#F05A28" />
    <path d="M58 31H76C84 31 88 38 88 45C88 52 84 59 76 59H58V31Z" fill="#304B9E" />
    <path d="M58 59H68L84 83H74L58 64V59Z" fill="#304B9E" />
    <path d="M35 65C45 55 55 65 65 70C75 75 85 65 85 65L85 70C75 80 65 75 55 70C45 65 35 75 35 75Z" fill="#304B9E" />
    <path d="M35 68C45 58 55 68 65 73C75 78 85 68 85 68L85 71C75 81 65 76 55 71C45 66 35 76 35 76Z" fill="#F05A28" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-1.5 md:gap-3 py-1 select-none group shrink-0">
    <div className="w-7 h-7 md:w-10 md:h-10 bg-white border border-slate-100 rounded-lg md:rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
      <LogoMark className="w-5 h-5 md:w-8 md:h-8" />
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-[6px] md:text-[8px] font-black text-[#304B9E] leading-none tracking-tight uppercase">Digital Information</span>
      <span className="text-[5px] md:text-[7px] font-bold text-[#F05A28] uppercase tracking-widest leading-none mt-1">SCHOOL</span>
    </div>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ 
  schoolName, 
  teacherCode, 
  activeRole, 
  isLoggedIn, 
  isSidebarOpen, 
  onToggleSidebar, 
  onRoleChange, 
  onLogout, 
  onLogin, 
  onProfileClick 
}) => {
  const userName = 'Jane Smith';
  const userSub = activeRole === UserRole.STUDENT ? 'ID: 1000001' : teacherCode;

  return (
    <header className="sticky top-0 z-[60] w-full bg-white border-b border-slate-100 flex items-center shrink-0 h-14 md:h-20 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-3 md:px-6 w-full flex justify-between items-center">
        <div className="flex items-center gap-1 md:gap-4">
          {isLoggedIn && (
            <button 
              onClick={onToggleSidebar}
              className="lg:hidden p-1.5 md:p-2 rounded-lg text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
            >
              {isSidebarOpen ? <X size={20} md:size={24} /> : <Menu size={20} md:size={24} />}
            </button>
          )}
          <Logo />
        </div>

        {isLoggedIn ? (
          <div className="flex items-center space-x-2 md:space-x-6">
            <div className="hidden sm:flex items-center bg-slate-50 p-0.5 rounded-lg md:rounded-xl border border-slate-100/50">
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl transition-all whitespace-nowrap bg-white shadow-sm text-[#304B9E]">
                <GraduationCap size={12} md:size={16} strokeWidth={3} className="text-[#F05A28]" />
                <span className="text-[8px] md:text-[11px] font-black uppercase tracking-tight">
                  Jane Smith
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 pl-2 md:pl-4 border-l border-slate-100">
              <button 
                onClick={onProfileClick}
                className="group flex items-center gap-2 md:gap-3 text-right hover:bg-slate-50 p-1 md:p-2 rounded-lg md:rounded-2xl transition-all overflow-hidden"
              >
                <div className="hidden md:block">
                  <p className="text-[10px] md:text-[11px] font-black text-[#304B9E] uppercase leading-none group-hover:text-[#F05A28] transition-colors">{userName}</p>
                  <p className="text-[6px] md:text-[8px] text-slate-400 font-bold mt-1 uppercase tracking-widest">{userSub}</p>
                </div>
                
                <div className="relative shrink-0">
                  <div className="w-7 h-7 md:w-11 md:h-11 rounded-lg md:rounded-2xl bg-slate-100 border-2 border-white shadow-md md:shadow-lg overflow-hidden group-hover:ring-4 ring-[#F05A28]/20 transition-all">
                    <img src={`https://picsum.photos/seed/Jane/64`} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </button>

              <button 
                onClick={onLogout}
                className="p-1.5 md:p-3 text-slate-300 hover:text-red-500 transition-all bg-slate-50 rounded-lg md:rounded-xl hover:bg-red-50 active:scale-95 shrink-0"
                title="Sign Out"
              >
                <LogOut size={16} md:size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={onLogin}
            className="flex items-center gap-2 px-4 md:px-8 py-2 md:py-3 bg-[#304B9E] text-white rounded-lg md:rounded-2xl font-black text-[9px] md:text-[12px] uppercase tracking-widest hover:bg-[#F05A28] transition-all active:scale-95 shadow-lg shadow-[#304B9E]/20"
          >
            <LogIn size={14} md:size={16} /> <span className="hidden sm:inline">Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
};

interface HeaderProps {
  schoolName: string;
  teacherCode: string;
  activeRole: UserRole;
  isLoggedIn: boolean;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onRoleChange: (role: UserRole) => void;
  onLogout: () => void;
  onLogin: () => void;
  onProfileClick: () => void;
}

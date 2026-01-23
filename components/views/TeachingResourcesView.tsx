
import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  PlayCircle, 
  Search, 
  FileSearch, 
  Plus, 
  FileUp, 
  X, 
  Save, 
  Trash2, 
  ChevronDown,
  Eye,
  MonitorPlay,
  Maximize2,
  ShieldAlert
} from 'lucide-react';

interface LearningResourcesViewProps {
  checkPermission?: (category: any, action: string) => boolean;
}

const ResourceViewer = ({ resource, onClose }: { resource: any, onClose: () => void }) => {
  const isVideo = resource.type === 'Video';
  
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-10 bg-[#304B9E]/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] w-full max-w-4xl h-full max-h-[85vh] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-t-[6px] md:border-t-[8px] border-[#304B9E] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        <div className="p-3 md:p-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
          <div className="flex items-center gap-2 md:gap-3">
             <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl text-white shadow-lg ${isVideo ? 'bg-[#304B9E]' : 'bg-[#F05A28]'}`}>
               {isVideo ? <MonitorPlay size={18} md:size={20} strokeWidth={3} /> : <FileText size={18} md:size={20} strokeWidth={3} />}
             </div>
             <div className="min-w-0">
               <h2 className="text-xs md:text-base font-black text-[#304B9E] uppercase tracking-tighter leading-none truncate">{resource.title}</h2>
               <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-widest mt-1">{resource.book} • {resource.type}</p>
             </div>
          </div>
          <button onClick={onClose} className="p-1.5 md:p-2 bg-white text-slate-300 hover:text-[#ec2027] transition-all rounded-lg md:rounded-xl shadow-sm border border-slate-100 active:scale-95">
            <X size={16} md:size={18} strokeWidth={4} />
          </button>
        </div>

        <div className="flex-1 bg-slate-900 overflow-hidden relative group">
          {isVideo ? (
            <div className="w-full h-full flex items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
               <PlayCircle size={48} md:size={60} className="text-white/20 absolute z-10 group-hover:scale-110 transition-transform cursor-pointer" strokeWidth={1} />
               <img src={`https://picsum.photos/seed/${resource.id}/1280/720`} className="w-full h-full object-contain" alt="" />
            </div>
          ) : (
            <div className="w-full h-full bg-slate-200 overflow-y-auto scrollbar-hide p-2 md:p-6 flex flex-col items-center">
               <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg min-h-[120%] p-4 md:p-10 relative mb-10">
                  <h1 className="text-lg md:text-xl font-serif text-slate-800 mb-4 border-b border-slate-100 pb-4">{resource.title}</h1>
                  <div className="space-y-3">
                     <div className="h-2 bg-slate-50 rounded w-full"></div>
                     <div className="h-2 bg-slate-50 rounded w-11/12"></div>
                     <div className="h-2 bg-slate-50 rounded w-full"></div>
                     <div className="h-3 bg-slate-100 rounded w-full h-32 md:h-48 mt-8 flex items-center justify-center">
                        <MonitorPlay size={32} className="text-slate-200" />
                     </div>
                  </div>
               </div>
            </div>
          )}
        </div>

        <div className="p-3 md:p-4 bg-white border-t border-slate-100 flex items-center justify-between shrink-0">
           <div className="flex items-center gap-2">
              <div className="px-2 md:px-3 py-1 md:py-1.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-1.5">
                 <Maximize2 size={10} md:size={12} className="text-slate-400" />
                 <span className="text-[7px] md:text-[8px] font-black uppercase text-slate-500 tracking-widest">Cinema</span>
              </div>
           </div>
           <button onClick={onClose} className="px-4 md:px-6 py-2 md:py-3 bg-[#304B9E] text-white rounded-lg md:rounded-xl font-black text-[8px] md:text-[9px] uppercase tracking-widest hover:bg-[#6366f1] transition-all shadow-xl active:scale-95">Return</button>
        </div>
      </div>
    </div>
  );
};

export const LearningResourcesView: React.FC<LearningResourcesViewProps> = ({ checkPermission }) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [viewingResource, setViewingResource] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState([
    { id: 1, title: 'Logic Guide: Binary Concepts', type: 'PDF', size: '2.4 MB', lang: 'English', book: 'DIR Starter V1' },
    { id: 2, title: 'Animated Intro: Hardware', type: 'Video', size: '45 MB', lang: 'English', book: 'DIR Starter V1' },
    { id: 3, title: 'Pattern Recognition Lab', type: 'DOCX', size: '1.1 MB', lang: 'English', book: 'DIR Starter V2' },
  ]);

  const filteredResources = useMemo(() => {
    return resources.filter(res => res.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [resources, searchTerm]);

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden animate-in fade-in duration-500">
      {viewingResource && (
        <ResourceViewer resource={viewingResource} onClose={() => setViewingResource(null)} />
      )}

      {/* Shrunk responsive header */}
      <div className="w-full bg-[#304B9E] rounded-xl p-3 md:p-5 text-white shadow-xl border-b-6 border-[#F05A28] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="flex items-center gap-3 relative z-10">
           <div className="p-2 bg-white/10 rounded-lg text-white shadow-xl rotate-3">
             <FileSearch size={20} md:size={22} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-lg md:text-xl font-black leading-none tracking-tight uppercase">Student <span className="text-[#F05A28]">Library</span></h2>
             <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">Learning Resource Vault</p>
           </div>
        </div>
      </div>

      <div className="w-full bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-2 flex-shrink-0">
        <div className="flex-[2] flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 w-full group focus-within:border-[#304B9E] transition-all">
          <Search size={14} md:size={16} className="text-slate-400 group-focus-within:text-[#304B9E]" strokeWidth={3} />
          <input 
            type="text" 
            placeholder="Search resources..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-[10px] md:text-[11px] font-black text-[#304B9E] outline-none w-full placeholder:text-slate-200 uppercase"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredResources.map((res) => (
            <div key={res.id} className="bg-white rounded-xl md:rounded-2xl p-4 border-2 border-slate-50 hover:border-[#304B9E]/20 transition-all group shadow-md flex items-start gap-3 relative overflow-hidden">
              <div className={`w-9 h-9 md:w-11 md:h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6 shadow-md ${res.type === 'Video' ? 'bg-blue-100 text-[#304B9E]' : 'bg-orange-100 text-[#F05A28]'}`}>
                {res.type === 'Video' ? <PlayCircle size={16} md:size={18} strokeWidth={2.5} /> : <FileText size={16} md:size={18} strokeWidth={2.5} />}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[5px] md:text-[6px] font-black uppercase tracking-widest text-[#F05A28] bg-orange-50 px-1.5 py-0.5 rounded-full">{res.type}</span>
                  <span className="text-[5px] md:text-[6px] font-black text-slate-300 uppercase tracking-widest">{res.size}</span>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-black text-[#304B9E] uppercase tracking-tight leading-snug group-hover:text-[#F05A28] transition-colors line-clamp-1">{res.title}</h4>
                <p className="text-[6px] md:text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-1 truncate">{res.book}</p>
              </div>

              <div className="flex flex-col gap-1">
                <button 
                   onClick={() => setViewingResource(res)}
                   className="p-2 md:p-2.5 bg-blue-50 text-[#304B9E] rounded-lg shadow-sm hover:bg-[#304B9E] hover:text-white transition-all active:scale-90 flex items-center gap-1.5 group/btn"
                >
                   <Eye size={12} strokeWidth={3} className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import avatar1 from '../assets/images/client_avatar_one_1791132119059.jpg';
import avatar2 from '../assets/images/client_avatar_two_1791132134513.jpg';
import avatar3 from '../assets/images/client_avatar_three_1791132146897.jpg';

export const ClientAvatars: React.FC = () => {
  return (
    <div className="flex items-center -space-x-3 overflow-hidden p-0.5">
      <div className="relative w-10 h-10 rounded-full border-2 border-[#050508] overflow-hidden bg-purple-900/40">
        <img
          src={avatar1}
          alt="Client portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-10 h-10 rounded-full border-2 border-[#050508] overflow-hidden bg-cyan-900/40">
        <img
          src={avatar2}
          alt="Client portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-10 h-10 rounded-full border-2 border-[#050508] overflow-hidden bg-indigo-900/40">
        <img
          src={avatar3}
          alt="Client portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

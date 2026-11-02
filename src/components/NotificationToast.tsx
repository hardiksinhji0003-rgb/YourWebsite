import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const NotificationToast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 bg-[#171717]/95 backdrop-blur-md text-[#E4D1A3] border border-[#C6A15B] rounded-full shadow-2xl animate-fadeIn text-xs sm:text-sm font-medium tracking-wide">
      <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};

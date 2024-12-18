import React from 'react';
import { Share2, Copy, Gift } from 'lucide-react';

interface ReferralCardProps {
  referralCode: string;
  pointsEarned: number;
  referralsCount: number;
}

export const ReferralCard: React.FC<ReferralCardProps> = ({
  referralCode,
  pointsEarned,
  referralsCount,
}) => {
  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Code copié !');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Mon Code Parrain</h2>
        <Share2 className="text-blue-600 w-6 h-6" />
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-lg font-semibold text-gray-700">{referralCode}</span>
          <button 
            onClick={copyReferralCode}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Points Gagnés</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{pointsEarned}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Share2 className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Parrainages</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{referralsCount}</p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Calendar, User } from 'lucide-react';

interface Referral {
  id: number;
  name: string;
  date: string;
  status: 'pending' | 'completed';
  points: number;
}

interface ReferralHistoryProps {
  referrals: Referral[];
}

export const ReferralHistory: React.FC<ReferralHistoryProps> = ({ referrals }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Historique</h2>
      <div className="space-y-4">
        {referrals.map((referral) => (
          <div
            key={referral.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <User className="w-10 h-10 text-gray-400 bg-white p-2 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">{referral.name}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{referral.date}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                referral.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {referral.status === 'completed' ? 'Complété' : 'En attente'}
              </span>
              <p className="text-sm font-semibold text-gray-600 mt-1">
                +{referral.points} points
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
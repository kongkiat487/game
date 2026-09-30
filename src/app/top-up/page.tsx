import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const mockTopUpGames = [
  { id: '1', name: 'Valorant', publisher: 'Riot Games', color: 'from-red-600 to-red-900', accent: 'text-red-500' },
  { id: '2', name: 'ROV', publisher: 'Garena', color: 'from-blue-600 to-blue-900', accent: 'text-blue-500' },
  { id: '3', name: 'Free Fire', publisher: 'Garena', color: 'from-yellow-500 to-yellow-800', accent: 'text-yellow-500' },
  { id: '4', name: 'Genshin Impact', publisher: 'HoYoverse', color: 'from-indigo-400 to-indigo-800', accent: 'text-indigo-400' },
  { id: '5', name: 'PUBG Mobile', publisher: 'Tencent', color: 'from-orange-500 to-orange-800', accent: 'text-orange-500' },
  { id: '6', name: 'Roblox', publisher: 'Roblox Corp', color: 'from-zinc-500 to-zinc-800', accent: 'text-zinc-400' },
];

export default function TopUpPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-8">
          <Zap className="h-10 w-10 text-cyan-500" />
          <div>
            <h1 className="text-3xl font-bold text-white">เติมเกมออนไลน์ (Top-up)</h1>
            <p className="text-gray-400 mt-1">เลือกเกมที่คุณต้องการเติม บริการไวใน 5 วินาที</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {mockTopUpGames.map((game) => (
            <div key={game.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-cyan-500 cursor-pointer group transition-all">
              <div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center p-4`}>
                <span className="text-white font-black text-xl text-center uppercase tracking-wider drop-shadow-md group-hover:scale-110 transition-transform">{game.name}</span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <span className={`text-xs font-bold mb-1 ${game.accent}`}>{game.publisher}</span>
                <span className="text-white font-medium text-sm text-center">เติม {game.name}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

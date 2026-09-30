"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { GameID } from '../types/game';
import { ChevronRight, Flame, Gamepad2, Gift, Zap } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Game IDs (limited to 4 for homepage)
const mockFeaturedGames: GameID[] = [
  { id: '1', gameName: 'Valorant', code: 'VAL-101', shortDescription: 'แรงค์ Ascendant 3 สกินปืน Phantom/Vandal ครบเซ็ต', price: 3500, status: 'Available', imageUrl: '' },
  { id: '2', gameName: 'ROV', code: 'ROV-245', shortDescription: 'แรงค์ Conqueror ฮีโร่ครบ 114 ตัว', price: 4900, status: 'Available', imageUrl: '' },
  { id: '3', gameName: 'Free Fire', code: 'FF-889', shortDescription: 'เลเวล 75 ชุดซากุระ ปืนลูกซองควงไฟ', price: 1200, status: 'Available', imageUrl: '' },
  { id: '4', gameName: 'Genshin Impact', code: 'GEN-012', shortDescription: 'AR 60 ตัวละคร 5 ดาว 20 ตัว อาวุธเพียบ', price: 8500, status: 'Available', imageUrl: '' },
];

const mockTopUpGames = [
  { id: '1', name: 'Valorant', color: 'from-red-600 to-red-900' },
  { id: '2', name: 'ROV', color: 'from-blue-600 to-blue-900' },
  { id: '3', name: 'Free Fire', color: 'from-yellow-500 to-yellow-800' },
  { id: '4', name: 'Genshin Impact', color: 'from-indigo-400 to-indigo-800' },
];

const mockItemCodes = [
  { id: '1', title: 'Valorant Points - 1,000 VP', price: 290, discount: 300 },
  { id: '2', title: 'ROV - คูปอง 1,200 คูปอง', price: 345, discount: 350 },
  { id: '3', title: 'Steam Wallet $10', price: 330, discount: 350 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        
        {/* Hero Section */}
        <div className="relative bg-zinc-900 border-b border-zinc-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                ศูนย์รวม <span className="text-cyan-400">ไอดีเกม & ไอเทมโค้ด</span> ที่ดีที่สุดในไทย
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                บริการขายไอดีเกมออนไลน์ เติมเกมราคาถูก จัดส่งรวดเร็วด้วยระบบอัตโนมัติ 24 ชั่วโมง ปลอดภัย 100%
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/game-ids" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  เลือกซื้อไอดีเกม
                </Link>
                <Link href="/top-up" className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-lg border border-zinc-700 transition-all flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-yellow-400" /> เติมเกมด่วน
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* Top Up Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-500/20 p-2 rounded-lg"><Zap className="h-6 w-6 text-yellow-500" /></div>
                <h2 className="text-2xl font-bold text-white">เติมเกมยอดฮิต</h2>
              </div>
              <Link href="/top-up" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center transition-colors">
                ดูทั้งหมด <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockTopUpGames.map(game => (
                <Link href="/top-up" key={game.id} className={`h-24 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center p-4 border border-zinc-800 hover:border-cyan-500 transition-all group overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <span className="text-white font-black text-xl text-center uppercase tracking-wider relative z-10 group-hover:scale-110 transition-transform">{game.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Item Codes Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-lg"><Gift className="h-6 w-6 text-purple-500" /></div>
                <h2 className="text-2xl font-bold text-white">ไอเทมโค้ดแนะนำ</h2>
              </div>
              <Link href="/item-codes" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center transition-colors">
                ดูทั้งหมด <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockItemCodes.map(item => (
                <Link href="/item-codes" key={item.id} className="bg-zinc-900 rounded-xl border border-zinc-800 p-5 flex items-center justify-between hover:border-cyan-500 transition-colors group">
                  <div className="flex items-center">
                    <div className="bg-zinc-800 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/20 transition-colors">
                      <Gift className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm line-clamp-1">{item.title}</h3>
                      <div className="flex items-end space-x-2 mt-1">
                        <span className="text-cyan-400 font-bold">{item.price} ฿</span>
                        <span className="text-gray-500 text-xs line-through">{item.discount} ฿</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Game IDs Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg"><Gamepad2 className="h-6 w-6 text-cyan-500" /></div>
                <h2 className="text-2xl font-bold text-white">ไอดีเกมมาใหม่ล่าสุด</h2>
              </div>
              <Link href="/game-ids" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center transition-colors">
                ดูทั้งหมด <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockFeaturedGames.map((game) => (
                <ProductCard key={game.id} game={game} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

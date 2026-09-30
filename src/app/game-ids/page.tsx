"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import React, { useState } from 'react';
import { GameID } from '@/types/game';
import { Filter, Gamepad2, Search } from 'lucide-react';

const mockGameIDs: GameID[] = [
  { id: 'g1', gameName: 'Valorant', code: 'VAL-101', shortDescription: 'แรงค์ Ascendant 3 สกินปืน Phantom/Vandal ครบเซ็ต', price: 3500, status: 'Available', imageUrl: '' },
  { id: 'g2', gameName: 'ROV', code: 'ROV-245', shortDescription: 'แรงค์ Conqueror ฮีโร่ครบ 114 ตัว', price: 4900, status: 'Available', imageUrl: '' },
  { id: 'g3', gameName: 'Free Fire', code: 'FF-889', shortDescription: 'เลเวล 75 ชุดซากุระ ปืนลูกซองควงไฟ', price: 1200, status: 'Available', imageUrl: '' },
  { id: 'g4', gameName: 'Genshin Impact', code: 'GEN-012', shortDescription: 'AR 60 ตัวละคร 5 ดาว 20 ตัว', price: 8500, status: 'Available', imageUrl: '' },
  { id: 'g5', gameName: 'PUBG Mobile', code: 'PUB-112', shortDescription: 'ชุดฟาโรห์อัปเกรดระดับ 6 ปืน M416 น้ำแข็ง', price: 15000, status: 'Available', imageUrl: '' },
  { id: 'g6', gameName: 'Valorant', code: 'VAL-105', shortDescription: 'แรงค์ Diamond 1 สกินเซ็ต Prime ทั้งไอดี', price: 1800, status: 'Sold Out', imageUrl: '' },
  { id: 'g7', gameName: 'ROV', code: 'ROV-299', shortDescription: 'ไอดีเริ่มต้น เหมาะสำหรับสายปั้น รูทแรนดอม', price: 300, status: 'Available', imageUrl: '' },
  { id: 'g8', gameName: 'Minecraft', code: 'MC-001', shortDescription: 'ไอดีแท้ Minecraft Java & Bedrock', price: 890, status: 'Available', imageUrl: '' }
];

export default function GameIDsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredGames = mockGameIDs.filter((game) => {
    const matchesSearch = 
      game.gameName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      game.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === '' || game.gameName.toLowerCase() === category.toLowerCase();
    const matchesMinPrice = minPrice === '' || game.price >= parseInt(minPrice);
    const matchesMaxPrice = maxPrice === '' || game.price <= parseInt(maxPrice);

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-8">
          <Gamepad2 className="h-10 w-10 text-cyan-500" />
          <div>
            <h1 className="text-3xl font-bold text-white">ตลาดซื้อขายไอดีเกมออนไลน์</h1>
            <p className="text-gray-400 mt-1">ไอดีคุณภาพ ปลอดภัย 100% รับประกันทุกไอดี</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-64 bg-zinc-900 border border-zinc-800 rounded-xl p-5 h-fit sticky top-24">
            <h3 className="text-white font-bold mb-4 flex items-center"><Filter className="h-4 w-4 mr-2" /> ตัวกรองการค้นหา</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">คำค้นหา</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="พิมพ์ชื่อเกม, รหัส..." 
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 pl-9 text-white text-sm focus:border-cyan-500 focus:outline-none" 
                  />
                  <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">เกม (Games)</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">ทั้งหมด</option>
                  <option value="valorant">Valorant</option>
                  <option value="rov">ROV</option>
                  <option value="free fire">Free Fire</option>
                  <option value="genshin impact">Genshin Impact</option>
                  <option value="pubg mobile">PUBG Mobile</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">ช่วงราคา</label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="ต่ำสุด" 
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none" 
                  />
                  <span className="text-gray-500">-</span>
                  <input 
                    type="number" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="สูงสุด" 
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none" 
                  />
                </div>
              </div>
              
              <button 
                onClick={() => { setSearchTerm(''); setCategory(''); setMinPrice(''); setMaxPrice(''); }}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-medium py-2 rounded-lg transition-colors mt-2 text-sm border border-zinc-700"
              >
                ล้างตัวกรอง
              </button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="mb-4 text-gray-400 text-sm">
              พบ {filteredGames.length} รายการ
            </div>
            
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                  <ProductCard key={game.id} game={game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800 h-full flex flex-col items-center justify-center">
                <Search className="h-12 w-12 text-zinc-600 mb-4" />
                <p className="text-gray-400 text-lg">ไม่พบข้อมูลที่ตรงกับเงื่อนไข</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

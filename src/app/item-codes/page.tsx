"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import { Ticket, Search, Gift } from 'lucide-react';

const mockItemCodes = [
  { id: '1', title: 'Valorant Points - 1,000 VP', game: 'Valorant', price: 290, discount: 300, stock: 50 },
  { id: '2', title: 'ROV - คูปอง 1,200 คูปอง', game: 'ROV', price: 345, discount: 350, stock: 15 },
  { id: '3', title: 'Free Fire - 520 เพชร', game: 'Free Fire', price: 150, discount: 169, stock: 0 },
  { id: '4', title: 'Steam Wallet $10', game: 'Steam', price: 330, discount: 350, stock: 120 },
  { id: '5', title: 'Genshin Impact - Blessing of the Welkin Moon', game: 'Genshin Impact', price: 140, discount: 149, stock: 34 },
  { id: '6', title: 'Roblox - 800 Robux', game: 'Roblox', price: 310, discount: 329, stock: 200 },
];

export default function ItemCodesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = mockItemCodes.filter((item) => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-8">
          <Ticket className="h-10 w-10 text-cyan-500" />
          <div>
            <h1 className="text-3xl font-bold text-white">ไอเทมโค้ด & บัตรเติมเงิน</h1>
            <p className="text-gray-400 mt-1">ซื้อปุ๊บ ได้โค้ดปั๊บ ระบบอัตโนมัติ 24 ชม.</p>
          </div>
        </div>

        <div className="relative mb-8 max-w-xl">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ค้นหาไอเทมโค้ด หรือชื่อเกม..." 
            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-xl px-5 py-4 pl-12 focus:outline-none focus:border-cyan-500 shadow-lg transition-colors"
          />
          <Search className="h-5 w-5 absolute left-4 top-4.5 text-gray-400" />
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col hover:border-cyan-500 transition-colors group relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  ลดพิเศษ
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Gift className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.game}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-end justify-between pt-4 border-t border-zinc-800/50">
                  <div>
                    <p className="text-gray-500 text-xs line-through">{item.discount} ฿</p>
                    <p className="text-2xl font-bold text-cyan-400">{item.price} <span className="text-sm font-normal">฿</span></p>
                  </div>
                  <button 
                    disabled={item.stock === 0}
                    className={`px-5 py-2 rounded-lg font-medium transition-all ${
                      item.stock > 0 
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                        : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    }`}
                  >
                    {item.stock > 0 ? 'ซื้อโค้ด' : 'สินค้าหมด'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800">
             <Search className="h-12 w-12 text-zinc-600 mb-4 mx-auto" />
             <p className="text-gray-400 text-lg">ไม่พบไอเทมที่ค้นหา</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

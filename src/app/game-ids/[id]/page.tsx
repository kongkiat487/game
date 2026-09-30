import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, CheckCircle2, ChevronRight, Gamepad2, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { GameID } from '@/types/game';

// Combine mock data from page.tsx and game-ids/page.tsx just for the demo
const mockGames: GameID[] = [
  { id: '1', gameName: 'Valorant', code: 'VAL-101', shortDescription: 'แรงค์ Ascendant 3 สกินปืน Phantom/Vandal ครบเซ็ต มีมีดผีเสื้อ', price: 3500, status: 'Available', imageUrl: '' },
  { id: '2', gameName: 'ROV', code: 'ROV-245', shortDescription: 'แรงค์ Conqueror ฮีโร่ครบ 114 ตัว สกินระดับ Ultimate/Supreme 15 สกิน', price: 4900, status: 'Available', imageUrl: '' },
  { id: '3', gameName: 'Free Fire', code: 'FF-889', shortDescription: 'เลเวล 75 ชุดซากุระ ปืนลูกซองควงไฟ สัตว์เลี้ยงครบ สายฟรีห้ามพลาด', price: 1200, status: 'Available', imageUrl: '' },
  { id: '4', gameName: 'Valorant', code: 'VAL-105', shortDescription: 'แรงค์ Diamond 1 สกินเซ็ต Prime ทั้งไอดี เอเจนท์ปลดล็อกครบทุกตัว', price: 1800, status: 'Sold Out', imageUrl: '' },
  { id: '5', gameName: 'Genshin Impact', code: 'GEN-012', shortDescription: 'AR 60 ตัวละคร 5 ดาว 20 ตัว อาวุธประจำตัวเพียบ สำรวจแมพ 100%', price: 8500, status: 'Available', imageUrl: '' },
  { id: '6', gameName: 'ROV', code: 'ROV-299', shortDescription: 'ไอดีเริ่มต้น เหมาะสำหรับสายปั้น รูทแรนดอม ฮีโร่พื้นฐาน', price: 300, status: 'Available', imageUrl: '' },
  { id: 'g1', gameName: 'Valorant', code: 'VAL-101', shortDescription: 'แรงค์ Ascendant 3 สกินปืน Phantom/Vandal ครบเซ็ต', price: 3500, status: 'Available', imageUrl: '' },
  { id: 'g2', gameName: 'ROV', code: 'ROV-245', shortDescription: 'แรงค์ Conqueror ฮีโร่ครบ 114 ตัว', price: 4900, status: 'Available', imageUrl: '' },
  { id: 'g3', gameName: 'Free Fire', code: 'FF-889', shortDescription: 'เลเวล 75 ชุดซากุระ ปืนลูกซองควงไฟ', price: 1200, status: 'Available', imageUrl: '' },
  { id: 'g4', gameName: 'Genshin Impact', code: 'GEN-012', shortDescription: 'AR 60 ตัวละคร 5 ดาว 20 ตัว', price: 8500, status: 'Available', imageUrl: '' },
  { id: 'g5', gameName: 'PUBG Mobile', code: 'PUB-112', shortDescription: 'ชุดฟาโรห์อัปเกรดระดับ 6 ปืน M416 น้ำแข็ง', price: 15000, status: 'Available', imageUrl: '' },
  { id: 'g6', gameName: 'Valorant', code: 'VAL-105', shortDescription: 'แรงค์ Diamond 1 สกินเซ็ต Prime ทั้งไอดี', price: 1800, status: 'Sold Out', imageUrl: '' },
  { id: 'g7', gameName: 'ROV', code: 'ROV-299', shortDescription: 'ไอดีเริ่มต้น เหมาะสำหรับสายปั้น รูทแรนดอม', price: 300, status: 'Available', imageUrl: '' },
  { id: 'g8', gameName: 'Minecraft', code: 'MC-001', shortDescription: 'ไอดีแท้ Minecraft Java & Bedrock', price: 890, status: 'Available', imageUrl: '' }
];

export default async function GameIDDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const game = mockGames.find(g => g.id === resolvedParams.id) || mockGames[0]; // fallback to first if not found

  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">หน้าแรก</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/game-ids" className="hover:text-cyan-400 transition-colors">ไอดีเกมส์</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-cyan-400 font-medium">{game.code}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image & Gallery (Mockup) */}
          <div className="space-y-4">
            <div className="w-full h-80 sm:h-96 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
              <Gamepad2 className="h-24 w-24 text-zinc-700 relative z-10" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
                <span className="text-white font-bold tracking-widest uppercase text-3xl drop-shadow-lg">{game.gameName} Preview</span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-zinc-900 rounded-xl border border-zinc-800 cursor-pointer hover:border-cyan-500 transition-colors"></div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-3">
              <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/30">
                {game.gameName}
              </span>
              {game.status === 'Available' ? (
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  สินค้าพร้อมส่ง (Auto)
                </span>
              ) : (
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">
                  ขายแล้ว
                </span>
              )}
            </div>

            <h1 className="text-3xl font-extrabold text-white mb-2 leading-tight">รหัสไอดี: {game.code}</h1>
            <p className="text-xl text-gray-300 mb-6">{game.shortDescription}</p>
            
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-8 shadow-inner shadow-black/50">
              <p className="text-gray-400 text-sm mb-2">ราคา</p>
              <div className="flex items-end text-cyan-400 font-black text-5xl mb-1 drop-shadow-md">
                {game.price.toLocaleString()} <span className="text-2xl font-bold ml-2 pb-1">฿</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-emerald-500 mr-3" />
                รับประกันไอดีปลอดภัย ไม่โดนแบน (100% Secure)
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-3" />
                ระบบจัดส่งรหัสผ่านอัตโนมัติภายใน 5 วินาที
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-3" />
                เปลี่ยนรหัสผ่าน เปลี่ยนอีเมลได้ครบถ้วน
              </div>
            </div>

            <button 
              disabled={game.status !== 'Available'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex justify-center items-center ${
                game.status === 'Available'
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'bg-zinc-800 text-zinc-600 cursor-not-allowed border border-zinc-700'
              }`}
            >
              {game.status === 'Available' ? 'หยิบใส่ตะกร้า / สั่งซื้อเลย' : 'สินค้านี้ถูกขายไปแล้ว'}
            </button>
            
          </div>
        </div>
        
        {/* Description Text */}
        <div className="mt-16 bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-4">รายละเอียดเพิ่มเติม (Description)</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-3 leading-relaxed">
            <li>ไอดีนี้เป็นไอดีสะอาด ไม่เคยผ่านการใช้โปรแกรมช่วยเล่นใดๆ ทั้งสิ้น</li>
            <li>สามารถเชื่อมต่อและเปลี่ยนข้อมูลเป็นของคุณเองได้อย่างสมบูรณ์ (Full Access)</li>
            <li>สกินปืนและไอเทมภายในเกมมีตามภาพที่แสดงทั้งหมด (ภาพตัวอย่างด้านบน)</li>
            <li>หากมีปัญหาในการล็อกอิน ทีมงานซัพพอร์ตยินดีช่วยเหลือตลอด 24 ชั่วโมง</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

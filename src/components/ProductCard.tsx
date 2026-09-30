import React from 'react';
import { GameID } from '../types/game';
import { ShieldCheck, ShoppingCart, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  game: GameID;
}

export default function ProductCard({ game }: ProductCardProps) {
  return (
    <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-cyan-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] flex flex-col">
      {/* Image section */}
      <Link href={`/game-ids/${game.id}`} className="relative h-48 w-full overflow-hidden bg-zinc-900 block cursor-pointer">
        {/* Placeholder image using gradient since we don't have real images */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
           <span className="text-zinc-600 font-bold text-2xl uppercase tracking-widest">{game.gameName}</span>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {game.status === 'Available' ? (
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">
              พร้อมส่ง
            </span>
          ) : (
            <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 backdrop-blur-sm">
              ขายแล้ว
            </span>
          )}
        </div>
        
        {/* Game Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-md">
            {game.code}
          </span>
        </div>
      </Link>

      {/* Content section */}
      <div className="p-5 flex-1 flex flex-col">
        <Link href={`/game-ids/${game.id}`} className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors">
          {game.gameName}
        </Link>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {game.shortDescription}
        </p>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <ShieldCheck className="h-4 w-4 mr-1 text-cyan-500" />
          รับประกันไอดีปลอดภัย 100%
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-xs text-gray-500 mb-1">ราคา</p>
              <p className="text-xl font-bold text-cyan-400">
                {game.price.toLocaleString()} <span className="text-sm font-normal">฿</span>
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Link 
              href={`/game-ids/${game.id}`}
              className="flex-1 flex justify-center items-center px-3 py-2 rounded-lg font-medium transition-all bg-zinc-700 hover:bg-zinc-600 text-white text-sm"
            >
              <Eye className="h-4 w-4 mr-1.5" />
              ดูรายละเอียด
            </Link>
            
            <button 
              disabled={game.status !== 'Available'}
              className={`flex-1 flex justify-center items-center px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                game.status === 'Available' 
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25' 
                  : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="h-4 w-4 mr-1.5" />
              สั่งซื้อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

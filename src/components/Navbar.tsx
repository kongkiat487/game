"use client";

import React from 'react';
import { Gamepad2, User, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'ไอดีเกมส์', href: '/game-ids' },
    { name: 'ไอเทมโค้ด', href: '/item-codes' },
    { name: 'เติมเกม', href: '/top-up' },
    { name: 'เติมเครดิต', href: '/add-credit' },
  ];

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer group">
            <Gamepad2 className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span className="ml-2 text-xl font-bold text-white tracking-wide group-hover:text-gray-200 transition-colors">
              GAMER<span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">STORE</span>
            </span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`relative px-3 py-2 font-medium transition-all duration-300 rounded-md ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-zinc-800/80'
                  }`}
                >
                  {link.name}
                  {/* Active Indicator Line */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-zinc-800 px-4 py-2 rounded-full border border-zinc-700">
              <Wallet className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-semibold text-white">เครดิต: 0.00 ฿</span>
            </div>
            <Link href="/login" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">เข้าสู่ระบบ</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function PageHeader() {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          ไอดีเกมออนไลน์
        </h1>
        <div className="flex items-center text-sm text-gray-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center">
            <Home className="h-4 w-4 mr-1" />
            หน้าแรก
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-cyan-400 font-medium">ไอดีเกมออนไลน์</span>
        </div>
      </div>
    </div>
  );
}

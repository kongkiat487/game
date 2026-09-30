import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md flex flex-col items-center shadow-xl">
          <UserPlus className="h-16 w-16 text-cyan-500 mb-4" />
          <h1 className="text-2xl font-bold text-white mb-6">สมัครสมาชิก</h1>
          
          <div className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">ชื่อผู้ใช้ (Username)</label>
              <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500" placeholder="ชื่อผู้ใช้ของคุณ" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">อีเมล</label>
              <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500" placeholder="อีเมลของคุณ" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">รหัสผ่าน</label>
              <input type="password" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500" placeholder="รหัสผ่าน" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">ยืนยันรหัสผ่าน</label>
              <input type="password" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500" placeholder="ยืนยันรหัสผ่าน" />
            </div>
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-lg transition-colors mt-6">
              สมัครสมาชิกเลย
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              มีบัญชีอยู่แล้ว? <Link href="/login" className="text-cyan-400 hover:underline">เข้าสู่ระบบที่นี่</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

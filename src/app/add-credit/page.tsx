import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import { Wallet, CreditCard, QrCode } from 'lucide-react';

export default function AddCreditPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Wallet className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">เติมเครดิตเข้าสู่ระบบ</h1>
          <p className="text-gray-400 text-lg">เลือกระบบการชำระเงินที่ต้องการ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TrueMoney Wallet */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-orange-500 transition-colors cursor-pointer group flex flex-col items-center">
            <div className="bg-orange-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="h-12 w-12 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">TrueMoney Wallet</h2>
            <p className="text-gray-400 text-center mb-6">เติมเครดิตผ่านซองของขวัญทรูมันนี่ (ไม่มีค่าธรรมเนียม)</p>
            <div className="w-full">
              <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white text-center focus:outline-none focus:border-orange-500 mb-4" placeholder="วางลิงก์ซองของขวัญที่นี่..." />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors">
                ยืนยันการเติมเงิน
              </button>
            </div>
          </div>

          {/* PromptPay */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 hover:border-cyan-500 transition-colors cursor-pointer group flex flex-col items-center">
            <div className="bg-cyan-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <QrCode className="h-12 w-12 text-cyan-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">PromptPay QR</h2>
            <p className="text-gray-400 text-center mb-6">สแกนจ่ายผ่านแอปธนาคาร (อัปเดตยอดอัตโนมัติ)</p>
            <div className="w-full">
              <input type="number" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white text-center focus:outline-none focus:border-cyan-500 mb-4" placeholder="ระบุจำนวนเงินที่ต้องการเติม..." />
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-colors">
                สร้าง QR Code
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

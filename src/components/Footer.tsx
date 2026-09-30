import React from 'react';
import { Globe, MessageCircle, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold text-white tracking-wide">
                GAMER<span className="text-cyan-400">STORE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              ศูนย์รวมจำหน่ายไอดีเกมออนไลน์คุณภาพ เติมเกมส์ราคาถูก ปลอดภัย ได้รับของทันที บริการตลอด 24 ชั่วโมง
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">เมนูที่เกี่ยวข้อง</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">วิธีการสั่งซื้อ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">เงื่อนไขการรับประกัน</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">แจ้งปัญหาการใช้งาน</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ช่องทางการติดต่อ</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors bg-zinc-800/50 p-3 rounded-lg border border-zinc-800 hover:border-blue-500/50">
                <Globe className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">GamerStore Thailand</span>
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-green-500 transition-colors bg-zinc-800/50 p-3 rounded-lg border border-zinc-800 hover:border-green-500/50">
                <MessageCircle className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">@GamerStore (มี @ นำหน้า)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GamerStore. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-gray-600 text-xs">Platform designed for gamers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

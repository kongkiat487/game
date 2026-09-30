import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
}

export default function FilterBar({
  searchTerm, onSearchChange,
  category, onCategoryChange,
  sortBy, onSortByChange
}: FilterBarProps) {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 justify-between items-center border border-zinc-700 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        {/* Game Category Dropdown */}
        <select 
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-zinc-900 text-gray-300 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-auto cursor-pointer appearance-none"
        >
          <option value="">ทุกหมวดหมู่เกม</option>
          <option value="valorant">Valorant</option>
          <option value="rov">ROV</option>
          <option value="free fire">Free Fire</option>
          <option value="genshin impact">Genshin Impact</option>
        </select>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select 
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="bg-zinc-900 text-gray-300 border border-zinc-700 rounded-lg px-4 py-2.5 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-auto cursor-pointer appearance-none"
          >
            <option value="newest">ใหม่ล่าสุด</option>
            <option value="price-desc">ราคาจากสูงไปต่ำ</option>
            <option value="price-asc">ราคาจากต่ำไปสูง</option>
          </select>
          <SlidersHorizontal className="h-4 w-4 absolute left-3 top-3.5 text-gray-400" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-80">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ค้นหาไอดีเกม (รหัส, ชื่อเกม)..." 
          className="bg-zinc-900 text-white border border-zinc-700 rounded-lg px-4 py-2.5 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <Search className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
      </div>
    </div>
  );
}

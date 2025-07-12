import React from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
  className?: string;
};

export default function SearchBar({ className = '' }: SearchBarProps) {
  return (
    <div className={`flex items-center bg-[#F0F0F1] rounded-md overflow-hidden w-[500px] ${className}`}>
      <input
        type="text"
        placeholder="جستجو..."
        className="flex-grow px-4 py-2 bg-[#F0F0F1] text-gray-700 focus:outline-none text-[14px]"
      />
      <button
        className="p-2 hover:bg-gray-300 transition-colors duration-200"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}

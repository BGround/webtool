"use client";

import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = "Search tools, extensions, blogs..."
}: SearchBarProps) {
  return (
    <div className="relative max-w-md w-full mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eb5e2f] focus:border-[#eb5e2f] transition duration-150 ease-in-out sm:text-sm"
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  );
}

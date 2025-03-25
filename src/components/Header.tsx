"use client";

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-200 sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 md:py-4 lg:py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-5 focus:left-5 bg-white dark:bg-gray-800 p-2 rounded shadow"
          >
            Skip to main content
          </a>
          
          <h1 className="text-2xl font-extrabold">
            <Link href="/" title="WebTool" className="text-[#eb5e2f]">
              WebTool
            </Link>
          </h1>
          
          {/* Navigation links inline */}
          <nav className="ml-10" aria-label="Main navigation">
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <a
                  href="#tools"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200 rounded-full px-4 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                  aria-current="page"
                >
                  SEO Tools
                </a>
              </li>
              <li>
                <a
                  href="#extensions"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200 rounded-full px-4 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                >
                  SEO Extensions
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200 rounded-full px-4 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                >
                  SEO Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

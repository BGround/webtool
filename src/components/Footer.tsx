import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f7f6f2] dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#eb5e2f]">WebTool</h3>
            <p className="text-sm text-[#636262] dark:text-gray-300">
              Your ultimate guide to the best SEO tools online, curated to navigate and
              enhance your website&apos;s SEO strategy effectively.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                    aria-label="Go to home page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#tools"
                    className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                    aria-label="Go to SEO Tools section"
                  >
                    SEO Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#extensions"
                    className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                    aria-label="Go to SEO Extensions section"
                  >
                    SEO Extensions
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                    aria-label="Go to SEO Blogs section"
                  >
                    SEO Blogs
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">SEO Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://developers.google.com/search/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                  aria-label="Google Search Central documentation (opens in a new window)"
                >
                  Google Search Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://moz.com/beginners-guide-to-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                  aria-label="Moz Beginner's Guide to SEO (opens in a new window)"
                >
                  Beginner&apos;s Guide to SEO
                </a>
              </li>
              <li>
                <a
                  href="https://search.google.com/search-console/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                  aria-label="Google Search Console (opens in a new window)"
                >
                  Google Search Console
                </a>
              </li>
              <li>
                <a
                  href="https://ahrefs.com/academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#636262] dark:text-gray-300 hover:text-[#eb5e2f] dark:hover:text-[#eb5e2f] transition-colors duration-200"
                  aria-label="Ahrefs Academy (opens in a new window)"
                >
                  Ahrefs Academy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-[#636262] dark:text-gray-300">
            &copy; {new Date().getFullYear()} WebTool - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

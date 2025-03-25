"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

// Define the Extension type
interface Extension {
  id: string;
  title: string;
  description: string;
  url: string;
  iconSrc: string;
  browser: 'chrome' | 'firefox' | 'safari' | 'edge' | 'all';
}

// List of SEO extensions
const seoExtensions: Extension[] = [
  {
    id: 'website-traffic-rank',
    title: 'Website Traffic Rank',
    description: 'Similarweb free website traffic rank extension.',
    url: 'https://www.similarweb.com/corp/extension/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1766078808.svg',
    browser: 'all'
  },
  {
    id: 'similarsites-finder',
    title: 'Similarsites Finder',
    description: 'Easily Explore alternative websites.',
    url: 'https://www.similarsites.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/974780757.svg',
    browser: 'chrome'
  },
  {
    id: 'detailed-seo-extension',
    title: 'Detailed SEO Extension',
    description: 'Finally, an SEO extension built for full-time SEOs. Built by SEOs, for SEOs. Free forever.',
    url: 'https://detailed.com/extension/',
    iconSrc: 'https://ext.same-assets.com/3726054604/224066041.svg',
    browser: 'chrome'
  },
  {
    id: 'ahrefs-seo-toolbar',
    title: 'Ahrefs SEO Toolbar',
    description: 'Ahrefs SEO Toolbar is a free extension for Chrome and Firefox that provides valuable SEO data about the pages and websites you visit. 200k+ SEO professionals across the world use it in their daily work.',
    url: 'https://ahrefs.com/seo-toolbar',
    iconSrc: 'https://ext.same-assets.com/3726054604/2940199523.svg',
    browser: 'all'
  },
  {
    id: 'keywords-everywhere',
    title: 'Keywords Everywhere',
    description: 'Online marketing research without breaking the bank. Do SEO, content marketing, competitor research, PPC and social media marketing right as you browse the web.',
    url: 'https://keywordseverywhere.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/2766840180.svg',
    browser: 'all'
  },
  {
    id: 'woorank-extension',
    title: 'WooRank Extension',
    description: 'Check the basic SEO health and score of any website with our free extension.',
    url: 'https://www.woorank.com/en/extension',
    iconSrc: 'https://ext.same-assets.com/3726054604/2998142792.svg',
    browser: 'chrome'
  },
  {
    id: 'aitdk-extension',
    title: 'AITDK Extension',
    description: 'Free traffic & whois & website seo analysis extension.',
    url: 'https://aitdk.com/extension/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    browser: 'chrome'
  },
  {
    id: 'wappalyzer-extension',
    title: 'Wappalyzer Extension',
    description: 'Wappalyzer is a cross-platform utility that uncovers the technologies used on websites. It detects content management systems, ecommerce platforms, web frameworks, server software, analytics tools and many more.',
    url: 'https://www.wappalyzer.com/apps/',
    iconSrc: 'https://ext.same-assets.com/3726054604/362204520.svg',
    browser: 'all'
  },
  {
    id: 'seo-meta-in-1-click',
    title: 'SEO Meta in 1 Click',
    description: 'Extension that shows you the meta data of any website with just one click.',
    url: 'https://chrome.google.com/webstore/detail/seo-meta-in-1-click/bjogjfinolnhfhkbipphpdlldadpnmhc',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    browser: 'chrome'
  },
  {
    id: 'lighthouse',
    title: 'Lighthouse',
    description: 'Google\'s automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more.',
    url: 'https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    browser: 'chrome'
  },
  {
    id: 'seo-minion',
    title: 'SEO Minion',
    description: 'Helps with common SEO tasks like On-Page SEO analysis, SERP preview, redirect chain, broken link checker, and more.',
    url: 'https://chrome.google.com/webstore/detail/seo-minion/giihipjfimkajhlcilipnjeohabimjhi',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    browser: 'chrome'
  },
  {
    id: 'builtwith',
    title: 'BuiltWith Technology Profiler',
    description: 'Find out what websites are built with, which CMS, analytics, ecommerce and framework they are using.',
    url: 'https://chrome.google.com/webstore/detail/builtwith-technology-prof/dapjbgnjinbpoindlpdmhochffioedbn',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    browser: 'chrome'
  }
];

// Browser filters
const browsers = [
  { id: 'all', label: 'All Browsers' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'firefox', label: 'Firefox' },
  { id: 'safari', label: 'Safari' },
  { id: 'edge', label: 'Edge' }
];

export default function SeoExtensions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBrowser, setActiveBrowser] = useState('all');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter extensions based on search term and browser
  const filteredExtensions = seoExtensions.filter((extension) => {
    const matchesSearch =
      extension.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      extension.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrowser = activeBrowser === 'all' || extension.browser === activeBrowser || extension.browser === 'all';

    return matchesSearch && matchesBrowser;
  });

  return (
    <section className="bg-[#f7f6f2] dark:bg-gray-900 transition-colors duration-200" id="extensions">
      <div className="mx-auto w-full max-w-8xl px-5 py-8 md:px-10 md:py-10 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-3xl dark:text-white">SEO Extensions</h2>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            placeholder="Search for SEO extensions..."
          />

          {/* Browser filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="radiogroup" aria-label="Filter extensions by browser">
            {browsers.map((browser) => (
              <button
                key={browser.id}
                onClick={() => setActiveBrowser(browser.id === 'all' ? 'all' : browser.id as 'chrome' | 'firefox' | 'safari' | 'edge')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb5e2f] focus:ring-offset-2 ${
                  activeBrowser === browser.id
                    ? 'bg-[#eb5e2f] text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                role="radio"
                aria-checked={activeBrowser === browser.id}
                tabIndex={activeBrowser === browser.id ? 0 : -1}
              >
                {browser.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 links">
          {filteredExtensions.length > 0 ? (
            filteredExtensions.map((extension) => (
              <a
                key={extension.id}
                className="grid grid-cols-1 gap-4 rounded-xl p-2 md:p-3 link dark:bg-gray-800 dark:hover:bg-gray-700"
                href={extension.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${extension.title} in new window`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src={extension.iconSrc}
                      alt=""
                      width={32}
                      height={32}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xl font-semibold dark:text-white">{extension.title}</p>
                </div>
                <p className="text-sm text-[#636262] dark:text-gray-300">{extension.description}</p>
                <div className="text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 self-start mt-2 text-gray-600 dark:text-gray-300">
                  {extension.browser === 'all' ? 'All major browsers' : `${extension.browser.charAt(0).toUpperCase() + extension.browser.slice(1)}`}
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">No extensions found matching your search criteria.</p>
              <button
                onClick={() => {setSearchTerm(''); setActiveBrowser('all');}}
                className="mt-4 px-4 py-2 bg-[#eb5e2f] text-white rounded-md hover:bg-[#d9522a] transition-colors duration-200"
                aria-label="Clear filters"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

// Define the tool type
interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  iconSrc: string;
  category: 'analysis' | 'keyword' | 'backlink' | 'audit' | 'analytics' | 'performance' | 'other';
}

// List of SEO tools (extended)
const seoTools: Tool[] = [
  {
    id: 'google-search',
    title: 'Google Search',
    description: 'Web search engine developed by Google that is the most widely used search engine on the World Wide Web, offering billions of search results every day.',
    url: 'https://www.google.com/search?q=webtool',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    category: 'other'
  },
  {
    id: 'similarweb',
    title: 'Similarweb',
    description: 'Similarweb is a digital intelligence platform that provides insights into competitors\' web traffic and performance, helping businesses understand their market share and online strategy effectiveness.',
    url: 'https://www.similarweb.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1766078808.svg',
    category: 'analysis'
  },
  {
    id: 'semrush',
    title: 'Semrush',
    description: 'Semrush is an all-in-one marketing toolkit for digital marketing professionals, offering solutions for SEO, PPC, content, social media and competitive research.',
    url: 'https://www.semrush.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/3549281467.svg',
    category: 'analysis'
  },
  {
    id: 'ahrefs',
    title: 'Ahrefs',
    description: 'Ahrefs is a comprehensive SEO tool that offers advanced analysis and insights for link building, keyword research, competitor analysis, and site audits, helping marketers and SEO professionals optimize their online presence.',
    url: 'https://ahrefs.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/2940199523.svg',
    category: 'analysis'
  },
  {
    id: 'cloudflare-dashboard',
    title: 'Cloudflare Dashboard',
    description: 'Cloudflare Dashboard provides tools to manage your websites, improve performance, enhance security, and analyze traffic metrics. It offers CDN, DNS management, DDoS protection, and more in one central location.',
    url: 'https://dash.cloudflare.com/',
    iconSrc: '/assets/cloudflare-icon.svg',
    category: 'performance'
  },
  {
    id: 'keyword-difficulty-checker',
    title: 'Keyword Difficulty Checker',
    description: 'Ahrefs\' Keyword Difficulty Checker is a tool that evaluates the effort needed to rank in the top 10 search results for a given keyword, using a comprehensive analysis of backlink profiles and various ranking factors.',
    url: 'https://ahrefs.com/keyword-difficulty',
    iconSrc: 'https://ext.same-assets.com/3726054604/2766840180.svg',
    category: 'keyword'
  },
  {
    id: 'backlink-checker',
    title: 'Backlink Checker',
    description: 'Ahrefs\' Backlink Checker is a tool that allows users to analyze the backlink profile of any website, revealing insights into the number and quality of backlinks.',
    url: 'https://ahrefs.com/backlink-checker',
    iconSrc: 'https://ext.same-assets.com/3726054604/3705242959.svg',
    category: 'backlink'
  },
  {
    id: 'website-authority-checker',
    title: 'Website "Authority" Checker',
    description: 'The Ahrefs Website Authority Checker is a tool that allows you to check the \'authority\' of your domain, calculated as the Domain Rating (DR) by Ahrefs, which reflects the strength and quality of a website\'s backlink profile.',
    url: 'https://ahrefs.com/website-authority-checker',
    iconSrc: 'https://ext.same-assets.com/3726054604/1728044257.svg',
    category: 'backlink'
  },
  {
    id: 'woorank',
    title: 'WooRank SEO Health Checker',
    description: 'To get started with your website optimization, you need to know how your website scores. Run your Review today to get an instant website analysis and learn what you need to do to improve.',
    url: 'https://www.woorank.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/2998142792.svg',
    category: 'audit'
  },
  {
    id: 'google-search-console',
    title: 'Google Search Console',
    description: 'A free service offered by Google that helps you monitor, maintain, and troubleshoot your site\'s presence in Google Search results.',
    url: 'https://search.google.com/search-console/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1298335992.svg',
    category: 'analytics'
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics',
    description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
    url: 'https://analytics.google.com/analytics/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1047387838.svg',
    category: 'analytics'
  },
  {
    id: 'microsoft-clarity',
    title: 'Microsoft Clarity',
    description: 'Clarity is a free tool that captures how people use your site. Setup is easy and you\'ll start getting data in minutes.',
    url: 'https://clarity.microsoft.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/2070671579.svg',
    category: 'analytics'
  },
  {
    id: 'pagespeed-insights',
    title: 'PageSpeed Insights',
    description: 'PageSpeed Insights (PSI) reports on the user experience of a page on both mobile and desktop devices, and provides suggestions on how that page may be improved.',
    url: 'https://pagespeed.web.dev/',
    iconSrc: 'https://ext.same-assets.com/3726054604/2065570990.svg',
    category: 'performance'
  },
  {
    id: 'gtmetrix',
    title: 'GTmetrix',
    description: 'GTmetrix is a free tool to test and monitor your page\'s performance. Using Lighthouse, GTmetrix generates scores for your pages and offers actionable recommendations on how to optimize them.',
    url: 'https://gtmetrix.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    category: 'performance'
  },
  {
    id: 'screaming-frog',
    title: 'Screaming Frog SEO Spider',
    description: 'A website crawler that helps you improve onsite SEO by extracting data & auditing for common SEO issues.',
    url: 'https://www.screamingfrog.co.uk/seo-spider/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    category: 'audit'
  },
  {
    id: 'moz-pro',
    title: 'Moz Pro',
    description: 'All-in-one SEO toolset including keyword research, site audits, rank tracking, and backlink analysis.',
    url: 'https://moz.com/products/pro',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    category: 'analysis'
  }
];

// Define filter categories for accessibility
const categories = [
  { id: 'all', label: 'All Tools' },
  { id: 'analysis', label: 'Analysis Tools' },
  { id: 'keyword', label: 'Keyword Tools' },
  { id: 'backlink', label: 'Backlink Tools' },
  { id: 'audit', label: 'Audit Tools' },
  { id: 'analytics', label: 'Analytics Tools' },
  { id: 'performance', label: 'Performance Tools' }
];

export default function ToolsDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter tools based on search term and category
  const filteredTools = seoTools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-[#f7f6f2] dark:bg-gray-900 transition-colors duration-200" id="tools">
      <div className="mx-auto w-full max-w-8xl px-5 pt-8 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-3xl dark:text-white">Online Tools Directory</h2>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            placeholder="Search for SEO tools..."
          />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="radiogroup" aria-label="Filter tools by category">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb5e2f] focus:ring-offset-2 shadow-sm ${
                  activeCategory === category.id
                    ? 'bg-[#eb5e2f] text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                role="radio"
                aria-checked={activeCategory === category.id}
                tabIndex={activeCategory === category.id ? 0 : -1}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 links">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <a
                key={tool.id}
                className="link rounded-2xl p-4 md:p-5 bg-white dark:bg-gray-800 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 dark:hover:bg-gray-700"
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${tool.title} in new window`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src={tool.iconSrc}
                      alt=""
                      width={32}
                      height={32}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xl font-semibold dark:text-white">{tool.title}</p>
                </div>
                <p className="text-sm text-[#636262] dark:text-gray-300">{tool.description}</p>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">No tools found matching your search criteria.</p>
              <button
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                className="mt-4 px-4 py-2 bg-[#eb5e2f] text-white rounded-full hover:bg-[#d9522a] transition-all duration-200 shadow-sm hover:shadow-md"
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

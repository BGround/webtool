"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

// Define the Blog type
interface Blog {
  id: string;
  title: string;
  description: string;
  url: string;
  iconSrc: string;
  type: 'official' | 'seo' | 'marketing' | 'news';
}

// List of SEO blogs
const seoBlogs: Blog[] = [
  {
    id: 'google-search-blog',
    title: 'Google Search Blog',
    description: 'Google Search official blog, read the latest news and updates about Google Search.',
    url: 'https://blog.google/products/search/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'official'
  },
  {
    id: 'google-search-central-blog',
    title: 'Google Search Central Blog',
    description: 'The Google Search Central Blog is where you can find official Google Search core algorithm updates, announcements of new Google Search features, and SEO best practices.',
    url: 'https://developers.google.com/search/blog',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'official'
  },
  {
    id: 'semrush-blog',
    title: 'Semrush Blog',
    description: 'The SEO, SEM, PPC and Content Marketing Blog.',
    url: 'https://www.semrush.com/blog/',
    iconSrc: 'https://ext.same-assets.com/3726054604/3549281467.svg',
    type: 'seo'
  },
  {
    id: 'backlinko-blog',
    title: 'Backlinko Blog',
    description: 'Where SEO best practices meet real-world results. Backlinko is the place for next-level SEO training and link building strategies.',
    url: 'https://backlinko.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/3705242959.svg',
    type: 'seo'
  },
  {
    id: 'moz-blog',
    title: 'Moz Blog',
    description: 'The industry\'s top wizards, doctors, and other experts offer their best advice, research, how-tos, and insights—all in the name of helping you level-up your SEO and online marketing skills.',
    url: 'https://moz.com/blog',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'seo'
  },
  {
    id: 'ahrefs-blog',
    title: 'Ahrefs Blog',
    description: 'Marketing and SEO tips to help your business grow.',
    url: 'https://ahrefs.com/blog/',
    iconSrc: 'https://ext.same-assets.com/3726054604/2940199523.svg',
    type: 'seo'
  },
  {
    id: 'search-engine-journal',
    title: 'Search Engine Journal',
    description: 'Latest search news, industry updates, and how-to guides to improve your SEO and marketing strategy.',
    url: 'https://www.searchenginejournal.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'news'
  },
  {
    id: 'search-engine-land',
    title: 'Search Engine Land',
    description: 'Must-read news about search marketing and SEO industry, including tactics, advice, and tips.',
    url: 'https://searchengineland.com/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'news'
  },
  {
    id: 'hubspot-blog',
    title: 'HubSpot Marketing Blog',
    description: 'Marketing tips, strategies, and best practices to help grow your business.',
    url: 'https://blog.hubspot.com/marketing',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'marketing'
  },
  {
    id: 'neil-patel-blog',
    title: 'Neil Patel Digital',
    description: 'Actionable SEO and digital marketing tips to help your business grow.',
    url: 'https://neilpatel.com/blog/',
    iconSrc: 'https://ext.same-assets.com/3726054604/1451179838.svg',
    type: 'marketing'
  }
];

// Blog filters
const blogTypes = [
  { id: 'all', label: 'All Blogs' },
  { id: 'official', label: 'Official Blogs' },
  { id: 'seo', label: 'SEO Blogs' },
  { id: 'marketing', label: 'Marketing Blogs' },
  { id: 'news', label: 'News Blogs' }
];

export default function SeoBlogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('all');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter blogs based on search term and type
  const filteredBlogs = seoBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = activeType === 'all' || blog.type === activeType;

    return matchesSearch && matchesType;
  });

  return (
    <section className="bg-[#f7f6f2] dark:bg-gray-900 transition-colors duration-200" id="blogs">
      <div className="mx-auto w-full max-w-8xl px-5 py-8 md:px-10 md:py-10 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-3xl dark:text-white">SEO Blogs</h2>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            placeholder="Search for SEO blogs..."
          />

          {/* Blog type filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="radiogroup" aria-label="Filter blogs by type">
            {blogTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id === 'all' ? 'all' : type.id as 'official' | 'seo' | 'marketing' | 'news')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb5e2f] focus:ring-offset-2 ${
                  activeType === type.id
                    ? 'bg-[#eb5e2f] text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                role="radio"
                aria-checked={activeType === type.id}
                tabIndex={activeType === type.id ? 0 : -1}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 links">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <a
                key={blog.id}
                className="grid grid-cols-1 gap-4 rounded-xl p-2 md:p-3 link dark:bg-gray-800 dark:hover:bg-gray-700"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${blog.title} in new window`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src={blog.iconSrc}
                      alt=""
                      width={32}
                      height={32}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xl font-semibold dark:text-white">{blog.title}</p>
                </div>
                <p className="text-sm text-[#636262] dark:text-gray-300">{blog.description}</p>
                <div className="text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 self-start mt-2 text-gray-600 dark:text-gray-300">
                  {blog.type.charAt(0).toUpperCase() + blog.type.slice(1)}
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">No blogs found matching your search criteria.</p>
              <button
                onClick={() => {setSearchTerm(''); setActiveType('all');}}
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

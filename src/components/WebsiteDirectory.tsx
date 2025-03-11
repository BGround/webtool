import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { WebsiteCard } from './WebsiteCard';
import { AddWebsiteForm } from './AddWebsiteForm';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Website } from '@/types';

// Temporary mock data - will be replaced with Supabase
const mockWebsites: Website[] = [
  {
    id: '1',
    title: 'Freelancer Tools',
    url: 'https://freelancer-tools.shop',
    description: 'A collection of useful tools for freelancers',
    category: 'Tools',
    created_at: new Date().toISOString()
  }
];

export function WebsiteDirectory() {
  const t = useTranslations();
  const [websites, setWebsites] = useState<Website[]>(mockWebsites);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = Array.from(new Set(websites.map(site => site.category)));

  const filteredWebsites = websites.filter(website => {
    const matchesSearch = website.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || website.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddWebsite = (newWebsite: { title: string; url: string; description: string; category: string }) => {
    const website: Website = {
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      ...newWebsite
    };
    setWebsites([...websites, website]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={t('search.placeholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                !selectedCategory
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t('categories.all')}
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebsites.map(website => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>

        <AddWebsiteForm onSubmit={handleAddWebsite} />
      </main>
    </div>
  );
}
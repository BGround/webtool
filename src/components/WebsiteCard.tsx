import { ExternalLink } from 'lucide-react';
import { Website } from '@/types';

interface WebsiteCardProps {
  website: Website;
}

export function WebsiteCard({ website }: WebsiteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900">{website.title}</h3>
        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="mt-2 text-gray-600">{website.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {website.category}
        </span>
        <span className="text-sm text-gray-500">
          {new Date(website.created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
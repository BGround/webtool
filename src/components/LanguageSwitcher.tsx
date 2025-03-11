import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      <Globe size={20} />
      <span className="font-medium">{locale === 'en' ? '中文' : 'English'}</span>
    </button>
  );
}
import Header from '@/components/Header';
import ToolsDirectory from '@/components/ToolsDirectory';
import SeoExtensions from '@/components/SeoExtensions';
import SeoBlogs from '@/components/SeoBlogs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen">
        <div id="tools">
          <ToolsDirectory />
        </div>

        <div id="extensions">
          <SeoExtensions />
        </div>

        <div id="blogs">
          <SeoBlogs />
        </div>
      </main>

      <Footer />
    </>
  );
}

import React from 'react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="AI Marketing Solutions" description="Artegize - AI-Powered Marketing Agency" />
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://boyman131418.github.io/artegize/"
          className="w-full h-full border-0"
          title="Artegize - AI Marketing Solutions"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Home;

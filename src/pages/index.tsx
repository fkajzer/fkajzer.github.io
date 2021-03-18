import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Projects';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}
const IndexPage: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen && window.location.hash === '#projects') {
      setIsOpen(true);
    }

    if (isOpen && window.location.hash === '') {
      setIsOpen(false);
    }
  }, [typeof window !== 'undefined' && window.location.hash]);

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (window.location.hash === '#projects') {
      window.location.hash = '';
      return;
    }

    window.location.hash = '#projects';
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Helmet>
      <Layout>
        <div className={`leftSide ${isOpen ? 'open' : 'closed'}`}>
          <Profile onClick={handleClick} isOpen={isOpen} />
        </div>

        <div className={`rightSide ${isOpen ? 'open' : 'closed'}`}>
          <Projects />
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;

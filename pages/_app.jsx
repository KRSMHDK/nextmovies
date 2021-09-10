import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;

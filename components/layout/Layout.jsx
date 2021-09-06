import PropTypes from 'prop-types';
import React from 'react';
import MainHeader from './main-header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

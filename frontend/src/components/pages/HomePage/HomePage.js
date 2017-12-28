import React from 'react';
import { PageTemplate, Header, Body, Footer } from 'components';

const HomePage = ({ body }) => {
  return (
    <PageTemplate
      header = { <Header/> }
      body = {
        <Body body={'home'}>
        </Body> }
      footer = { <Footer/>}>
    </PageTemplate>
  );
};

export default HomePage;
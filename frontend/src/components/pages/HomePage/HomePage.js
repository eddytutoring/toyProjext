import React from 'react';
import { PageTemplate, Header, Hero, HeroTitle } from 'components';

const HomePage = ({ body }) => {
  return (
    <PageTemplate
      header = { <Header/> }
      body = {
        <Hero>
          <HeroTitle></HeroTitle>
        </Hero>
      }
      >
    </PageTemplate>
  );
};

export default HomePage;
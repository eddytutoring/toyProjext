import React from 'react'
import {PageTemplate, Body, Footer} from 'components';

const TutorPage = () => {
  return (
    <PageTemplate
      body = {
        <Body body={'home'}>
        </Body> }
      footer = { <Footer/>}>
    </PageTemplate>
  );
};

export default TutorPage;

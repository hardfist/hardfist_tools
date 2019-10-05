import React from 'react';
import { Banner } from './Banner';
import MainView from './MainView';
import Tags from './Tags';

export const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <MainView />
          <Tags />
        </div>
      </div>
    </div>
  );
};

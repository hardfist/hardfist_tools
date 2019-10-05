import React from 'react';
import ArticleList from 'components/ArticleList';

export default function MainView() {
  const tabsData: any[] = [
    { type: 'FEED', label: 'Your Feed' },
    { type: 'ALL', label: 'Global Feed' }
  ];

  return (
    <div className="col-md-9">
      <div className="feed-toggle">{/* <TabList data={tabsData} /> */}</div>
      <ArticleList />
    </div>
  );
}

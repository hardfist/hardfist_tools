import React, { useState } from 'react';
import ArticleList from 'components/ArticleList';
type Tab = com.hardfist.realworld.Tab;

interface TabProps {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}
function Tab({ isSelected, onClick, children }: TabProps) {
  const classNames = ['nav-link'];
  if (isSelected) {
    classNames.push('active');
  }
  return (
    <li className="nav-item">
      <button className={classNames.join(' ')} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
function TabList(props: {
  data: Tab[];
  selectedTab: Tab;
  setTab: (tab: Tab) => void;
}) {
  const { data, selectedTab, setTab } = props;
  const tabs = data.map(tab => (
    <Tab
      key={tab.type}
      isSelected={selectedTab.type === tab.type}
      onClick={() => setTab(tab)}
    >
      {tab.label}
    </Tab>
  ));

  if (selectedTab.type === 'TAG') {
    tabs.push(
      <Tab key={selectedTab.type} isSelected={true} onClick={() => {}}>
        #{selectedTab.label}
      </Tab>
    );
  }

  return <ul className="nav nav-pills outline-active">{tabs}</ul>;
}
export default function MainView() {
  const tabsData: Tab[] = [
    { type: 'FEED', label: 'Your Feed' },
    { type: 'ALL', label: 'Global Feed' }
  ];
  const [selectedTab, setTab] = useState(tabsData[0]);
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <TabList data={tabsData} setTab={setTab} selectedTab={selectedTab} />
      </div>
      <ArticleList selectedTab={selectedTab} />
    </div>
  );
}

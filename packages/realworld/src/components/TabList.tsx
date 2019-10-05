import React from 'react';

export default function TabList() {
  return null;
}

type TabProps = {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

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

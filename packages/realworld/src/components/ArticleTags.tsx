import React from 'react';

export function ArticleTags({ tagList }: { tagList: string[] }) {
  return (
    <ul className="tag-list">
      {tagList.map(tag => (
        <li className="tag-default tag-pill tag-outline" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

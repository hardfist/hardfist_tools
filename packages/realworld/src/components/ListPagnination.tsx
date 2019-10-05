import React from 'react';

type ListPaginationProps = {
  page: number;
  articlesCount: number;
};

export function ListPagination({ page, articlesCount }: ListPaginationProps) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
    pageNumbers.push(i);
  }

  if (articlesCount <= 10) {
    return null;
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map(number => {
          const isCurrent = number === page;
          return (
            <li
              className={isCurrent ? 'page-item active' : 'page-item'}
              key={number}
            >
              <button className="page-link">{number + 1}</button>
            </li>
          );
        })}
      </div>
    </nav>
  );
}

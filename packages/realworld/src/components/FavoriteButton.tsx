import React from 'react';

export function FavoriteButton({ article, dispatch, children }: any) {
  const [loading] = React.useState(false);

  const classNames = ['btn', 'btn-sm'];

  if (article.favorited) {
    classNames.push('btn-primary');
  } else {
    classNames.push('btn-outline-primary');
  }

  return (
    <button className={classNames.join(' ')} disabled={loading}>
      <i className="ion-heart" />
      &nbsp;
      {children}
    </button>
  );
}

import React, { useEffect } from 'react';
import { ArticlePreview } from 'components/ArticlePreview';
import { useStoreState, useStoreActions } from 'store';

export default function ArticleList() {
  const { isLoading, articles } = useStoreState(x => x.home);
  const { fetch_articles } = useStoreActions(x => x.home);
  useEffect(() => {
    fetch_articles({
      type: 'feed',
      filters: 'xx'
    });
  }, [fetch_articles]);
  if (isLoading) {
    return <div className="article-preview">Loading...</div>;
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <React.Fragment>
      {articles.map(article => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </React.Fragment>
  );
}

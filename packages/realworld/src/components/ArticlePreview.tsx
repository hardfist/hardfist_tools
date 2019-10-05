import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleAvatar } from 'components/ArticleAvatar';
import { ArticleTags } from 'components/ArticleTags';
import { FavoriteButton } from 'components/FavoriteButton';

export function ArticlePreview({
  article
}: {
  article: com.hardfist.realworld.Article;
}) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <ArticleAvatar article={article} />
        <div className="pull-xs-right">
          <FavoriteButton article={article}>
            {article.favoritesCount}
          </FavoriteButton>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ArticleTags tagList={article.tagList} />
      </Link>
    </div>
  );
}

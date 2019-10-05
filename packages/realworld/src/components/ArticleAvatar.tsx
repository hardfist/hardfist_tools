import React from 'react';
import { Link } from 'react-router-dom';
import { ALT_IMAGE_URL } from 'utils/constants';

type ArticleAvatarProps = {
  article: com.hardfist.realworld.Article;
};

export function ArticleAvatar({
  article: { author, createdAt }
}: ArticleAvatarProps) {
  return (
    <React.Fragment>
      <Link to={`/${author.username}`}>
        <img src={author.image || ALT_IMAGE_URL} alt={author.username} />
      </Link>

      <div className="info">
        <Link className="author" to={`/${author.username}`}>
          {author.username}
        </Link>
        <span className="date">{new Date(createdAt).toDateString()}</span>
      </div>
    </React.Fragment>
  );
}

import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'store';

function Tags() {
  const { tags, isLoading } = useStoreState(x => x.home);
  const { fetch_tags } = useStoreActions(x => x.home);
  useEffect(() => {
    fetch_tags();
  }, [fetch_tags]);
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>
        {isLoading ? (
          <div>Loading Tags...</div>
        ) : (
          <div className="tag-list">
            {tags.map(tag => (
              <button key={tag} className="tag-pill tag-default">
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tags;

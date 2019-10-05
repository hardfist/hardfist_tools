import { action, Action, Thunk, thunk } from 'easy-peasy';
import * as TagService from 'service/tags';
import * as ArticleService from 'service/article';
type Tag = com.hardfist.realworld.Tag;
type Article = com.hardfist.realworld.Article;
export interface HomeModel {
  tags: Tag[];
  articles: Article[];
  isLoading: boolean;
  articlesCount: number;
  fetch_start: Action<HomeModel>;
  fetch_end: Action<
    HomeModel,
    {
      articles: Article[];
      articlesCount: number;
    }
  >;
  set_tags: Action<HomeModel, Tag[]>;
  fetch_articles: Thunk<
    HomeModel,
    {
      type: string;
      filters?: PlainObject;
    }
  >;
  fetch_tags: Thunk<HomeModel>;
}
export const home: HomeModel = {
  tags: [],
  articles: [],
  isLoading: false,
  articlesCount: 0,
  fetch_start: action(state => {
    state.isLoading = true;
  }),
  set_tags: action((state, tags) => {
    state.tags = tags;
  }),
  fetch_end: action((state, { articlesCount, articles }) => {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  }),
  fetch_articles: thunk(
    async ({ fetch_start, fetch_end }, { type, filters }) => {
      fetch_start();
      const {
        data: { articles, articlesCount }
      } = await ArticleService.getArticles(type, filters);
      fetch_end({
        articles,
        articlesCount
      });
    }
  ),
  fetch_tags: thunk(async actions => {
    const {
      data: { tags }
    } = await TagService.get();
    actions.set_tags(tags);
  })
};

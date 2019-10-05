declare namespace com.hardfist.realworld {
  export interface Profile {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  }
  export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
  }
  export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Profile;
  }
  export interface User {
    token: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    username: string;
    bio: string;
    image: string;
  }
  export interface Errors {
    [key: stirng]: string[];
  }

  export type Tag = string;
}

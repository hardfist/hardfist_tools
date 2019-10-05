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
    tagList: string;
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
  // export interface BaseResponse<T = any> {
  //   code: number;
  //   message: string;
  //   data: T;
  // }
  // export interface TodoItem {
  //   id: number;
  //   completed: boolean;
  //   text: string;
  // }
  // export interface TodoListRequest {
  //   from: number; // 起始区间
  //   to: number;
  // }
  // export interface TodoListResponse {
  //   code: number;
  //   message: string;
  //   data: {
  //     todo_list: TodoItem[];
  //   };
  // }
}

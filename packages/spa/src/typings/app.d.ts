declare namespace com.hardfist.spa {
  export interface BaseResponse<T = any> {
    code: number;
    message: string;
    data: T;
  }
  export interface TodoItem {
    id: number;
    completed: boolean;
    text: string;
  }
  export interface TodoListRequest {
    from: number; // 起始区间
    to: number;
  }
  export interface TodoListResponse {
    code: number;
    message: string;
    data: {
      todo_list: TodoItem[];
    };
  }
}

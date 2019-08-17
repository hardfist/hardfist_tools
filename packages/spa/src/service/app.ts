import { URL } from 'utils/constants';
import { get } from 'utils/request';
import mock_todo from 'mock/todo_list.json';
export async function get_todo_list(): Promise<
  com.hardfist.spa.TodoListResponse
> {
  return mock_todo;
  // return get<com.hardfist.spa.TodoListResponse>(URL.todo_list);
}

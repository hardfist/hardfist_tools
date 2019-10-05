export interface Todo {
  text: string;
  id: number;
  completed: boolean;
}
export interface TodosModel {
  items: Todo[];
}
export const todosModel: TodosModel = {
  items: []
};

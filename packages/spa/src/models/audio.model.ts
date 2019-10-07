import {
  Action,
  action,
  ActionOn,
  actionOn,
  thunkOn,
  ThunkOn
} from 'easy-peasy';
import * as StoreModel from 'models';
export interface AuditModel {
  logs: string[];
  addLog: Action<AuditModel, string>;
  onTodoAdded: ThunkOn<AuditModel, undefined, typeof StoreModel>;
}

export const auditModel: AuditModel = {
  logs: [],
  addLog: action((state, payload) => {
    state.logs.push(payload);
  }),
  onTodoAdded: thunkOn(
    (actions, storeActions) => storeActions.todo.addTodo,
    (actions, target) => {
      actions.addLog(`Added todo: "${target.payload}"`);
    }
  )
};

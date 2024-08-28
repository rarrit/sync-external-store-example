let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }];
    emitChange();

    console.log("Addtodo =>");
  },
  subscribe(lis) {
    console.log("lis =>", lis);
    listeners = [...listeners, lis];
    console.log("subscribe 1 =>");
    return () => {
      listeners = listeners.filter(l => l !== lis);
      console.log("subscribe return =>");
    };
  },
  getSnapshot() {
    console.log("getSnapshot =>");
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    console.log("emitChange =>", listener);
    listener();
  }
}

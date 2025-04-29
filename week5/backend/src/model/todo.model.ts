import { db } from "../index.ts";

const GetTodo = () => {
  const todo = db.todo.findMany
  return todo;
};

const AddTodo = (newTodoName: string) => {
  const todo = db.todo.create({
    data: {
      name: newTodoName,
    },
  });
  return todo;
};

const EditTodo = (todoId: number, editTodoName: string) => {
  const todo = db.todo.update({
    where : {
      id : todoId,
    },
    data: {
      name: editTodoName,
    }
  })
  return todo;
};

const SuccessTodo = (todoId: number) => {
  const todo = db.todo.update({
    where : {
      id : todoId,
    },
    data: {
      success: true,
    }
  })
  return todo;
};

const DeleteTodo = (todoId: number) => {
  const todo = db.todo.delete({
    where : {
      id : todoId,
    },
  })
  return todo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };

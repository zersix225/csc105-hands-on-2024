export type Todo = {
  // Implement HERE
  id: number;
  title: string;
  completed: boolean;
};

export type CreateTodoInput = {
  title: string;
  completed?: boolean;
};

export type UpdateTodoInput = {
  title?: string;
  completed?: boolean;
};

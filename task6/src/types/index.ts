type User = {
    firstName: string;
	lastName: string;
}
type Todo = {
    title: string;
    userId: number;
    completed: boolean;
}

export type { User, Todo}
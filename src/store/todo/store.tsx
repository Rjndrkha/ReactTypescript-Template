import { create } from "zustand";
import TodosClient from "../../service/dataMock/ApiTodos";

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface TodoStore {
  errorMessage?: string;
  todos: Todo[];
  getTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  errorMessage: "",
  getTodos: async () => {
    try {
      const { error, errorMessage, response } = await TodosClient.GetAllTodos();

      if (error) {
        return set({ errorMessage: errorMessage });
      }

      if (!error) {
        if (response) {
          const limitData = response.slice(0, 10);

          return set({ todos: limitData });
        }
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  },
}));

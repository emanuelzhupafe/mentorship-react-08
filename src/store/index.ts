import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Task } from "../types/tasks";

interface State {
  tasks: Task[];
  areTasksLoaded: boolean;
  setTasksLoaded: () => void;
  addTask: (title: string) => void;
  toggleTaskStatus: (id: number) => void;
  setAllTasks: (tasks: Task[]) => void;
}

export const useStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        areTasksLoaded: false,
        setTasksLoaded: () => {
          set({ areTasksLoaded: true });
        },
        addTask: (title) => {
          set((state) => ({
            tasks: [
              ...state.tasks,
              { id: [...state.tasks].length + 1, title, completed: false },
            ],
          }));
        },
        toggleTaskStatus: (id) => {
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
          }));
        },
        setAllTasks: (tasks) => {
          set({ tasks });
        },
      }),
      {
        name: "task-store",
        getStorage: () => localStorage,
      }
    ),
    { name: "task-store" }
  )
);

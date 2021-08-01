export interface ITask {
  id: string;
  title: string;
  content: string;
  date: string;
  priority?: IPriority;
  checked?: boolean;
}

export type IPriority = "Low" | "Normal" | "Hight" | "";

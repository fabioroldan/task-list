export interface Task{
  id?: number; // es opcional porque cuando lo creamos podria no venir
  text: string;
  day: string;
  reminder: boolean;
}

export class Routine {
  id?: string;
  title: string;
  days: Array<string>;
  exercises: Exercise[];
}

export class Exercise {
  name: string;
  sets: ExerciseSet[];
  reps: number;
  type: string;
  weight: number;
  rest: number;
  completed: boolean;
}

export class ExerciseSet {
  index: number;
  completed: boolean;
  open: boolean;
}
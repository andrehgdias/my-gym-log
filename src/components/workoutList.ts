import m from 'mithril';
import WorkoutCard from './workoutCard';

export enum MeasurementUnit {
  kg = 'kg',
  lb = 'lb',
}

export interface ExerciseSerie {
  weight: number;
  reps: number;
  unit: MeasurementUnit;
}

export interface FullExerciseSerie {
  exerciseName: string;
  exerciseClass: string;
  series: ExerciseSerie[];
}

export interface Workout {
  date: Date;
  duration: number;
  exercisesSeries: FullExerciseSerie[];
}

function WorkoutList(): m.Component {
  let workouts: Workout[] = [];

  return {
    oninit: function () {
      m.request({
        method: 'GET',
        url: 'http://localhost:3000/workouts',
      }).then(function (result: Workout[]) {
        workouts = result;
      });
    },
    view: function () {
      return m(
        'ul.workout-list',
        workouts.map((workout) => m(WorkoutCard, { workout }))
      );
    },
  };
}

export default WorkoutList;

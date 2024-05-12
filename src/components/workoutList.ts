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

const mockWorkouts: Workout[] = [
  {
    date: new Date(),
    duration: 50,
    exercisesSeries: [
      {
        exerciseName: 'Dumbell Curls',
        exerciseClass: 'Biceps',
        series: [
          {
            weight: 8,
            reps: 10,
            unit: MeasurementUnit.kg,
          },
          {
            weight: 8,
            reps: 9,
            unit: MeasurementUnit.kg,
          },
          {
            weight: 8,
            reps: 8,
            unit: MeasurementUnit.kg,
          },
        ],
      },
      {
        exerciseName: 'Scott Curl',
        exerciseClass: 'Biceps',
        series: [
          {
            weight: 15,
            reps: 10,
            unit: MeasurementUnit.kg,
          },
          {
            weight: 15,
            reps: 10,
            unit: MeasurementUnit.kg,
          },
          {
            weight: 15,
            reps: 8,
            unit: MeasurementUnit.kg,
          },
        ],
      },
    ],
  },
];

function WorkoutList(): m.Component {
  const workouts: Workout[] = mockWorkouts;

  return {
    view: function () {
      return m(
        'ul.workout-list',
        workouts.map((workout) => m(WorkoutCard, { workout }))
      );
    },
  };
}

export default WorkoutList;

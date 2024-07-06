import m, { Component, request } from "mithril";
import WorkoutCard from "./workoutCard";

export enum MeasurementUnit {
  kg = "kg",
  lb = "lb",
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
  date: string;
  duration: number;
  exercisesSeries: FullExerciseSerie[];
}

function WorkoutList(): Component {
  let workouts: Workout[] = [];

  return {
    oninit: function () {
      request<Workout[]>({
        method: "GET",
        url: "http://localhost:3000/workouts",
      }).then(function (result) {
        workouts = result.sort((a, b) => {
          return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        });
      });
    },
    view: function () {
      return m(
        "ul.workout-list",
        workouts.map((workout) => m(WorkoutCard, { workout })),
      );
    },
  };
}

export default WorkoutList;

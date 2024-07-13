import m, { Component, Vnode } from "mithril";
import WorkoutCard from "./workoutCard";
import { Workout } from "../pages/home.ts";

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

export interface WorkoutListAttrs {
  workouts: Workout[];
}

function WorkoutList(): Component<WorkoutListAttrs> {
  return {
    view: function (vnode: Vnode<WorkoutListAttrs>) {
      return m(
        "ul.workout-list",
        vnode.attrs.workouts.map((workout) =>
          m(WorkoutCard, { workout, key: workout.id }),
        ),
      );
    },
  };
}

export default WorkoutList;

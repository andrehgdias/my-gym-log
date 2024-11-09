import m, { Component, Vnode } from "mithril";
import WorkoutDetails from "./workoutDetails";
import { Workout } from "../pages/home.ts";

interface WorkoutCardAttrs {
  workout: Workout;
}

function WorkoutCard(
  initialVnode: Vnode<WorkoutCardAttrs>,
): Component<WorkoutCardAttrs> {
  const { workout } = initialVnode.attrs;

  return {
    view: function () {
      return m("li.workout-card", [
        m(".workout-card-header", [
          m("p.workout-info", [
            m("span.date", new Date(workout.date).toLocaleDateString()),
            m("span.duration", `${workout.duration} min`),
          ]),
          m(
            "button.btn-more-options",
            m("img", { src: "/images/icons/ellipsis-reg.svg" }),
          ),
        ]),
        m(
          "h2.workout-title",
          workout.exercisesSeries[0]?.exerciseClass ?? "Empty workout",
        ),
        m(WorkoutDetails, { exercisesSeries: workout.exercisesSeries }),
      ]);
    },
  };
}

export default WorkoutCard;

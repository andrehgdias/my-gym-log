import m, { Component, request, Vnode } from "mithril";
import { v4 as uuidv4 } from "uuid";
import { ModalContentComponentAttrs } from "./genericModal";
import { Workout } from "../pages/home.ts";

function WorkoutModal(
  initialVnode: Vnode<ModalContentComponentAttrs>,
): Component<ModalContentComponentAttrs> {
  let currentWorkout: Workout = {
    id: uuidv4(),
    date: new Date().toUTCString(),
    duration: 30,
    exercisesSeries: [],
  };

  return {
    view: function () {
      return m("form.workout-modal-content", [
        m("h1", "New Workout"),
        m("div.input-wrapper", [
          m("label", { for: "date" }, "Date"),
          m(
            "input[type=date]",
            {
              id: "date",
              max: new Date().toISOString().split("T")[0],
              value: new Date(currentWorkout.date).toISOString().split("T")[0],
              onchange: (event: Event) => {
                const dateInput = event.target as HTMLInputElement;
                currentWorkout.date = dateInput.valueAsDate!.toISOString();
              },
              required: true,
            },
            "New Workout",
          ),
        ]),
        m("div.input-wrapper", [
          m("label", { for: "duration" }, "Duration (min)"),
          m("input[type=number]", {
            id: "duration",
            inputmode: "numeric",
            pattern: "d*",
            value: currentWorkout.duration,
            onchange: (event: Event) => {
              currentWorkout.duration = Number(
                (event.target as HTMLInputElement).value,
              );
            },
            required: true,
          }),
        ]),
        m(
          "button.btn-confirm",
          {
            onclick: (event: MouseEvent) => {
              event.preventDefault();
              request<Workout>({
                method: "POST",
                url: "http://localhost:3000/workouts",
                body: currentWorkout,
              })
                .then(function (result) {
                  console.info("[WorkoutModal] POST Result: ", result);
                  initialVnode.attrs.closeModal();
                })
                .finally(initialVnode.attrs.fetchWorkouts);
            },
          },
          "Confirm",
        ),
      ]);
    },
  };
}

export default WorkoutModal;

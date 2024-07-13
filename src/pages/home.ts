import m, { ClosureComponent, Component, request } from "mithril";
import WorkoutList, { FullExerciseSerie } from "../components/workoutList";
import ActionsBar from "../components/actionsBar";
import GenericModal, {
  ModalContentComponentAttrs,
  ModalStatus,
} from "../components/genericModal";

export interface Workout {
  id: string;
  date: string;
  duration: number;
  exercisesSeries: FullExerciseSerie[];
}

function HomePage(): Component {
  let modalStatus = ModalStatus.closed;
  let dynamicModalContentComponent:
    | ClosureComponent<ModalContentComponentAttrs>
    | undefined = undefined;

  const setModalStatus = (status: ModalStatus) => {
    modalStatus = status;
  };

  const setModalContent = (
    modalContentComponent: ClosureComponent<ModalContentComponentAttrs>,
  ) => {
    dynamicModalContentComponent = modalContentComponent;
  };

  const fetchWorkouts = () => {
    request<Workout[]>({
      method: "GET",
      url: "http://localhost:3000/workouts",
    }).then(function (result) {
      console.info("[fetchWorkouts] GET Result: ", result);
      workouts = result.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
    });
  };

  let workouts: Workout[] = [];

  return {
    oninit: fetchWorkouts,
    view: function () {
      return m("main", [
        m(ActionsBar, {
          setModalStatus,
          setModalContent,
        }),
        m(WorkoutList, { workouts }),
        m(GenericModal, {
          setModalStatus,
          fetchWorkouts,
          status: modalStatus,
          modalContentComponent: dynamicModalContentComponent,
        }),
      ]);
    },
  };
}

export default HomePage;

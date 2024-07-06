import m, { ClosureComponent, Component, Vnode } from "mithril";
import { ModalStatus, ModalContentComponentAttrs } from "./genericModal";
import WorkoutModal from "./workoutModal";

export interface ActionsBarAttrs {
  setModalStatus: (status: ModalStatus) => void;
  setModalContent: (
    modalContentComponent: ClosureComponent<ModalContentComponentAttrs>,
  ) => void;
}

function ActionsBar(
  initialVnode: Vnode<ActionsBarAttrs>,
): Component<ActionsBarAttrs> {
  const { setModalStatus, setModalContent } = initialVnode.attrs;
  return {
    view: function () {
      return m("div.actions-bar", [
        m("h1.logo", "My-Gym-Log"),
        m(
          "button.btn-light-outline",
          {
            onclick: () => {
              setModalContent(WorkoutModal);
              setModalStatus(ModalStatus.open);
            },
          },
          "Add Workout",
        ),
      ]);
    },
  };
}

export default ActionsBar;

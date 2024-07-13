import m, { ClosureComponent, Component, redraw, Vnode } from "mithril";

export enum ModalStatus {
  closed,
  open,
}

export interface ModalContentComponentAttrs {
  closeModal: () => void;
  fetchWorkouts: () => void;
}

export interface GenericModalAttrs {
  setModalStatus: (status: ModalStatus) => void;
  fetchWorkouts: () => void;
  modalContentComponent:
    | ClosureComponent<ModalContentComponentAttrs>
    | undefined;
  status: ModalStatus;
}

function GenericModal(
  initialVnode: Vnode<GenericModalAttrs>,
): Component<GenericModalAttrs> {
  const { setModalStatus, fetchWorkouts } = initialVnode.attrs;
  let { modalContentComponent, status } = initialVnode.attrs;

  const closeModal = () => setModalStatus(ModalStatus.closed);

  return {
    onupdate: function (newVnode) {
      let shouldRedraw = false;

      if (status !== newVnode.attrs.status) {
        status = newVnode.attrs.status;
        shouldRedraw = true;
      }

      if (modalContentComponent !== newVnode.attrs.modalContentComponent) {
        modalContentComponent = newVnode.attrs.modalContentComponent;
        shouldRedraw = true;
      }

      shouldRedraw && redraw();
    },
    view: function () {
      return status === ModalStatus.open
        ? m("div.generic-modal", [
            m("div.overlay", {
              onclick: closeModal,
            }),
            m("div.dialog", [
              m(
                "button.close-modal",
                {
                  onclick: closeModal,
                },
                "x",
              ),
              modalContentComponent &&
                m(modalContentComponent, {
                  closeModal,
                  fetchWorkouts,
                }),
            ]),
          ])
        : null;
    },
  };
}

export default GenericModal;

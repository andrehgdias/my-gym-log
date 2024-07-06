import m, { ClosureComponent, Component, redraw, Vnode } from "mithril";

export enum ModalStatus {
  closed,
  open,
}

export interface ModalContentComponentAttrs {
  closeModal: () => void;
}

export interface GenericModalAttrs {
  setModalStatus: (status: ModalStatus) => void;
  modalContentComponent:
    | ClosureComponent<ModalContentComponentAttrs>
    | undefined;
  status: ModalStatus;
}

function GenericModal(
  initialVnode: Vnode<GenericModalAttrs>,
): Component<GenericModalAttrs> {
  const { setModalStatus } = initialVnode.attrs;
  let { modalContentComponent, status } = initialVnode.attrs;

  const closeModal = () => setModalStatus(ModalStatus.closed);

  return {
    onupdate: function (newVnode) {
      console.info("[GenericModal] Current State: ", {
        setModalStatus,
        status,
        modalContentComponent,
      });
      console.info("[GenericModal] New Attrs: ", newVnode.attrs);
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
              modalContentComponent && m(modalContentComponent, { closeModal }),
            ]),
          ])
        : null;
    },
  };
}

export default GenericModal;

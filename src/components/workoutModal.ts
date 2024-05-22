import m from 'mithril';

export enum ModalStatus {
  closed,
  open,
}

export type TWorkoutModalData = {
  handleModal: (status: ModalStatus) => any;
  status: ModalStatus;
};

function WorkoutModal(
  initialVnode: m.Vnode<TWorkoutModalData>
): m.Component<TWorkoutModalData> {
  const { handleModal } = initialVnode.attrs;
  let status = initialVnode.attrs.status;

  return {
    onupdate: function (newVnode) {
      status = newVnode.attrs.status;
      m.redraw();
    },
    view: function () {
      return status === ModalStatus.open
        ? m('div.workout-modal', [
            m('div.overlay', {
              onclick: () => handleModal(ModalStatus.closed),
            }),
            m('div.dialog'),
          ])
        : m('');
    },
  };
}

export default WorkoutModal;

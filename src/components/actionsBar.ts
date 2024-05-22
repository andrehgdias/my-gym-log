import m from 'mithril';
import { ModalStatus } from './workoutModal';

export type TActionsBarData = {
  handleModal: (status: ModalStatus) => any;
};

function ActionsBar(
  initialVnode: m.Vnode<TActionsBarData>
): m.Component<TActionsBarData> {
  const { handleModal } = initialVnode.attrs;
  return {
    view: function () {
      return m('div.actions-bar', [
        m('h1.logo', 'My-Gym-Log'),
        m(
          'button.btn-light-outline',
          {
            onclick: () => handleModal(ModalStatus.open),
          },
          'Add Workout'
        ),
      ]);
    },
  };
}

export default ActionsBar;

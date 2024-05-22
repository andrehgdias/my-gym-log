import m from 'mithril';
import { ModalStatus } from './genericModal';

export type TActionsBarData = {
  handleModalStatus: (status: ModalStatus) => any;
  handleModalContent: (modalContentComponent: m.Component) => void;
};

function ActionsBar(
  initialVnode: m.Vnode<TActionsBarData>
): m.Component<TActionsBarData> {
  const { handleModalStatus, handleModalContent } = initialVnode.attrs;
  return {
    view: function () {
      return m('div.actions-bar', [
        m('h1.logo', 'My-Gym-Log'),
        m(
          'button.btn-light-outline',
          {
            onclick: () => {
              handleModalContent({ view: () => m('.test', 'ola') });
              handleModalStatus(ModalStatus.open);
            },
          },
          'Add Workout'
        ),
      ]);
    },
  };
}

export default ActionsBar;

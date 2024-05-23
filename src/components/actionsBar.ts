import m from 'mithril';
import { ModalStatus } from './genericModal';
import WorkoutModal from './workoutModal';

export type TActionsBarData = {
  setModalStatus: (status: ModalStatus) => any;
  setModalContent: (modalContentComponent: m.ClosureComponent) => void;
};

function ActionsBar(
  initialVnode: m.Vnode<TActionsBarData>
): m.Component<TActionsBarData> {
  const { setModalStatus, setModalContent } = initialVnode.attrs;
  return {
    view: function () {
      return m('div.actions-bar', [
        m('h1.logo', 'My-Gym-Log'),
        m(
          'button.btn-light-outline',
          {
            onclick: () => {
              setModalContent(WorkoutModal);
              setModalStatus(ModalStatus.open);
            },
          },
          'Add Workout'
        ),
      ]);
    },
  };
}

export default ActionsBar;

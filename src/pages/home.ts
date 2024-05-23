import m from 'mithril';
import WorkoutList from '../components/workoutList';
import ActionsBar from '../components/actionsBar';
import GenericModal, { ModalStatus } from '../components/genericModal';

function HomePage(): m.Component {
  let modalStatus = ModalStatus.closed;
  let dynamicModalContentComponent: m.ClosureComponent = null!;

  const setModalStatus = (status: ModalStatus) => {
    modalStatus = status;
  };

  const setModalContent = (modalContentComponent: m.ClosureComponent) => {
    dynamicModalContentComponent = modalContentComponent;
  };

  return {
    view: function (vnode) {
      return m('main', [
        m(ActionsBar, {
          setModalStatus: setModalStatus,
          setModalContent: setModalContent,
        }),
        m(WorkoutList),
        m(GenericModal, {
          setModalStatus: setModalStatus,
          status: modalStatus,
          modalContentComponent: dynamicModalContentComponent,
        }),
      ]);
    },
  };
}

export default HomePage;

import m from 'mithril';
import WorkoutList from '../components/workoutList';
import ActionsBar from '../components/actionsBar';
import GenericModal, { ModalStatus } from '../components/genericModal';

function HomePage(): m.Component {
  let modalStatus = ModalStatus.closed;
  let dynamicModalContentComponent: m.ClosureComponent = null!;

  const handleModalStatus = (status: ModalStatus) => {
    modalStatus = status;
  };

  const handleModalContent = (modalContentComponent: m.ClosureComponent) => {
    dynamicModalContentComponent = modalContentComponent;
  };

  return {
    view: function (vnode) {
      return m('main', [
        m(ActionsBar, {
          handleModalStatus,
          handleModalContent,
        }),
        m(WorkoutList),
        m(GenericModal, {
          handleModal: handleModalStatus,
          status: modalStatus,
          modalContentComponent: dynamicModalContentComponent,
        }),
      ]);
    },
  };
}

export default HomePage;

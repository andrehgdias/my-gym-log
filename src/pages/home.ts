import m from 'mithril';
import WorkoutList from '../components/workoutList';
import ActionsBar from '../components/actionsBar';
import GenericModal, { ModalStatus } from '../components/genericModal';

function HomePage(): m.Component {
  let modalStatus = ModalStatus.closed;
  let dynamicModalContentComponent: m.Component = {
    view: () => m('.empty', 'empty'),
  };

  const handleModalStatus = (status: ModalStatus) => {
    modalStatus = status;
  };

  const handleModalContent = (modalContentComponent: m.Component) => {
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
          dynamicModalContentComponent: dynamicModalContentComponent,
        }),
      ]);
    },
  };
}

export default HomePage;

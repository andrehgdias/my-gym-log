import m, {ClosureComponent, Component } from 'mithril';
import WorkoutList from '../components/workoutList';
import ActionsBar from '../components/actionsBar';
import GenericModal, {
  ModalStatus,
  ModalContentComponentAttrs,
} from '../components/genericModal';

function HomePage(): Component {
  let modalStatus = ModalStatus.closed;
  let dynamicModalContentComponent: ClosureComponent<ModalContentComponentAttrs> | undefined = undefined;

  const setModalStatus = (status: ModalStatus) => {
    modalStatus = status;
  };

  const setModalContent = (
    modalContentComponent: ClosureComponent<ModalContentComponentAttrs>
  ) => {
    dynamicModalContentComponent = modalContentComponent;
  };

  return {
    view: function () {
      return m('main', [
        m(ActionsBar, {
          setModalStatus,
          setModalContent,
        }),
        m(WorkoutList),
        m(GenericModal, {
          setModalStatus,
          status: modalStatus,
          modalContentComponent: dynamicModalContentComponent,
        }),
      ]);
    },
  };
}

export default HomePage;

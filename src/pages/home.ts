import m from 'mithril';
import WorkoutList from '../components/workoutList';
import ActionsBar from '../components/actionsBar';
import WorkoutModal, { ModalStatus } from '../components/workoutModal';

function HomePage(): m.Component {
  let modalStatus = ModalStatus.closed;

  const handleModal = (status: ModalStatus) => {
    modalStatus = status;
  };

  return {
    view: function (vnode) {
      return m('main', [
        m(ActionsBar, { handleModal }),
        m(WorkoutList),
        m(WorkoutModal, { handleModal, status: modalStatus }),
      ]);
    },
  };
}

export default HomePage;

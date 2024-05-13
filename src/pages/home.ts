import m from 'mithril';
import WorkoutList from '../components/workoutList';
import ActionsBar from '../components/actionsBar';

function HomePage(): m.Component {
  return {
    view: function (vnode) {
      return m('main', [m(ActionsBar), m(WorkoutList)]);
    },
  };
}

export default HomePage;

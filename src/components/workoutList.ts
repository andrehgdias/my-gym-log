import m from 'mithril';
import WorkoutCard from './workoutCard';

const WorkoutList = {
  view: function () {
    return m('ul.workout-list', [m(WorkoutCard), m(WorkoutCard)]);
  },
};

export default WorkoutList;

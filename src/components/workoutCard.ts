import m from 'mithril';
import WorkoutDetails from './workoutDetails';

const WorkoutCard = {
  view: function () {
    return m('li.workout-card', [
      m('p.workout-info', [
        m('span.date', '09.05.24'),
        m('span.duration', '55 min'),
      ]),
      m('h2.workout-title', 'Chest + Triceps'),
      m(WorkoutDetails),
    ]);
  },
};

export default WorkoutCard;

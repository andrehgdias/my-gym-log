import m from 'mithril';
import WorkoutDetails from './workoutDetails';
import { Workout } from './workoutList';

type TWorkoutCardData = {
  attrs: { workout: Workout };
};

function WorkoutCard(initialVnode: m.Vnode & TWorkoutCardData): m.Component {
  const workout: Workout = initialVnode.attrs.workout;

  return {
    view: function (vnode: m.Vnode) {
      return m('li.workout-card', { key: 'workout-index' }, [
        m('p.workout-info', [
          m('span.date', workout.date.toLocaleDateString()),
          m('span.duration', `${workout.duration} min`),
        ]),
        m('h2.workout-title', workout.exercisesSeries[0].exerciseClass),
        m(WorkoutDetails, { exercisesSeries: workout.exercisesSeries }),
      ]);
    },
  };
}

export default WorkoutCard;

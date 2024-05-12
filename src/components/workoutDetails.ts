import m from 'mithril';
import { FullExerciseSerie } from './workoutList';

type TWorkoutDetailsData = {
  attrs: { exercisesSeries: FullExerciseSerie[] };
};

function WorkoutDetails(
  initialVnode: m.Vnode & TWorkoutDetailsData
): m.Component {
  const exercisesSeries: FullExerciseSerie[] =
    initialVnode.attrs.exercisesSeries;

  return {
    view: function (vnode: m.Vnode & TWorkoutDetailsData) {
      return m(
        'ol.workout-details',
        exercisesSeries.map((exercise) =>
          m('li.exercise', [
            m('p', exercise.exerciseName),
            m(
              'ul',
              exercise.series.map((serie) =>
                m(
                  'li.exercise-serie',
                  `${serie.reps}x ${serie.weight}${serie.unit}`
                )
              )
            ),
          ])
        )
      );
    },
  };
}

export default WorkoutDetails;

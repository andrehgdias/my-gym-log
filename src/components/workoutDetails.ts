import m from 'mithril';
import { FullExerciseSerie } from './workoutList';

interface WorkoutDetailsAttrs {
  exercisesSeries: FullExerciseSerie[];
}

function WorkoutDetails(
  initialVnode: m.Vnode<WorkoutDetailsAttrs>
): m.Component<WorkoutDetailsAttrs> {
  const { exercisesSeries } = initialVnode.attrs;

  return {
    view: function () {
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

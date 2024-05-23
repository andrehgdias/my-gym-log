import m from 'mithril';

function WorkoutModal(): m.Component {
  return {
    view: function () {
      return m('form.workout-modal-content', [
        m('h1', 'New Workout'),
        m('div.input-wrapper', [
          m('label', { for: 'date' }, 'Date'),
          m('input[type=date]', { id: 'date', required: true }, 'New Workout'),
        ]),
        m('div.input-wrapper', [
          m('label', { for: 'duration' }, 'Duration (min)'),
          m('input[type=number]', {
            id: 'duration',
            inputmode: 'numeric',
            pattern: 'd*',
            required: true,
          }),
        ]),
      ]);
    },
  };
}

export default WorkoutModal;

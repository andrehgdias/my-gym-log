import m from 'mithril';

const WorkoutDetails = {
  view: function () {
    return m('ol.workout-details', [
      m('li.exercise', [
        m('p', 'Exercise XYZ'),
        m('ol', [
          m('li.exercise-serie', '30Kg'),
          m('li.exercise-serie', '30Kg'),
          m('li.exercise-serie', '30Kg'),
        ]),
      ]),
      m('li.exercise', [
        m('p', 'Exercise XYZ'),
        m('ol', [
          m('li.exercise-serie', '30Kg'),
          m('li.exercise-serie', '30Kg'),
          m('li.exercise-serie', '30Kg'),
        ]),
      ]),
    ]);
  },
};

export default WorkoutDetails;

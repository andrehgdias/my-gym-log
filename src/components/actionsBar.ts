import m from 'mithril';

function ActionsBar(): m.Component {
  return {
    view: function () {
      return m('div.actions-bar', [
        m('h1.logo', 'My-Gym-Log'),
        m('button.btn-light-outline', 'Add Workout'),
      ]);
    },
  };
}

export default ActionsBar;

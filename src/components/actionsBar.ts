import m from 'mithril';

function ActionsBar(): m.Component {
  return {
    view: function () {
      return m('div.actions-bar', [
        m('button.btn-light-outline', 'Add Workout'),
      ]);
    },
  };
}

export default ActionsBar;

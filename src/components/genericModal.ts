import m from 'mithril';

export enum ModalStatus {
  closed,
  open,
}

export type TGenericModalData = {
  setModalStatus: (status: ModalStatus) => any;
  modalContentComponent: m.ClosureComponent;
  status: ModalStatus;
};

function GenericModal(
  initialVnode: m.Vnode<TGenericModalData>
): m.Component<TGenericModalData> {
  const { setModalStatus } = initialVnode.attrs;
  let modalContentComponent = initialVnode.attrs.modalContentComponent;
  let status = initialVnode.attrs.status;

  return {
    onupdate: function (newVnode) {
      if (status !== newVnode.attrs.status) {
        status = newVnode.attrs.status;
        m.redraw(); // Calling redraw because for some reason it wont show at the click event
      }

      if (modalContentComponent !== newVnode.attrs.modalContentComponent) {
        modalContentComponent = newVnode.attrs.modalContentComponent;
      }
    },
    view: function () {
      return status === ModalStatus.open
        ? m(
            'div.generic-modal',
            {
              onkeydown: (event: KeyboardEvent) => {
                console.log('🚀 ~ event.key:', event.key);
                if (event.key === 'Escape') {
                  console.log('Escape');
                  setModalStatus(ModalStatus.closed);
                }
              },
            },
            [
              m('div.overlay', {
                onclick: () => setModalStatus(ModalStatus.closed),
              }),
              m('div.dialog', [
                m(
                  'button.close-modal',
                  {
                    onclick: () => setModalStatus(ModalStatus.closed),
                  },
                  'x'
                ),
                m(modalContentComponent),
              ]),
            ]
          )
        : m('');
    },
  };
}

export default GenericModal;

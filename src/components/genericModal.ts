import m from 'mithril';

export enum ModalStatus {
  closed,
  open,
}

export type TGenericModalData = {
  handleModal: (status: ModalStatus) => any;
  dynamicModalContentComponent: m.Component;
  status: ModalStatus;
};

function GenericModal(
  initialVnode: m.Vnode<TGenericModalData>
): m.Component<TGenericModalData> {
  const { handleModal } = initialVnode.attrs;
  let dynamicModalContentComponent =
    initialVnode.attrs.dynamicModalContentComponent;
  let status = initialVnode.attrs.status;

  return {
    onupdate: function (newVnode) {
      if (status !== newVnode.attrs.status) {
        status = newVnode.attrs.status;
        m.redraw(); // Calling redraw because for some reason it wont show at the click event
      }

      if (
        dynamicModalContentComponent !==
        newVnode.attrs.dynamicModalContentComponent
      ) {
        dynamicModalContentComponent =
          newVnode.attrs.dynamicModalContentComponent;
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
                  handleModal(ModalStatus.closed);
                }
              },
            },
            [
              m('div.overlay', {
                onclick: () => handleModal(ModalStatus.closed),
              }),
              m('div.dialog', [m(dynamicModalContentComponent)]),
            ]
          )
        : m('');
    },
  };
}

export default GenericModal;

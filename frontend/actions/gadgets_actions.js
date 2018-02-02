import * as GadgetAPIUtil from '../util/gadgets_util';

export const RECEIVE_GADGETS = 'RECEIVE_GADGETS';
export const POST_GADGET = 'POST_GADGET';

export const receiveAllGadgets = (gadgets) => ({
  type: RECEIVE_GADGETS,
  gadgets
});

export const postGadget = (gadget) => ({
  type: POST_GADGET,
  gadget
})

export const createGadget = (gadget) => dispatch => (
  GadgetAPIUtil.createGadget(gadget)
    .then((new_gadget) => (
      dispatch(postGadget(new_gadget))
    ))
)

export const fetchGadgets = () => dispatch => (
  GadgetAPIUtil.fetchGadgets()
    .then((gadgets) => (
      dispatch(receiveAllGadgets(gadgets))
    ))
)

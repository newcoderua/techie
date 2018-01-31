import * as GadgetAPIUtil from '../util/gadgets_util';

export const RECEIVE_GADGETS = 'RECEIVE_GADGETS';

export const receiveAllGadgets = (gadgets) => ({
  type: RECEIVE_GADGETS,
  gadgets
})

export const fetchGadgets = () => dispatch => (
  GadgetAPIUtil.fetchGadgets()
    .then((gadgets) => (
      dispatch(receiveAllGadgets(gadgets))
    ))
)

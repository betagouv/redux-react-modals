import { CLOSE_MODAL, SHOW_MODAL } from './actions'

const initialState = {}

export function modals(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return Object.assign({}, state,
        { [action.name]: { isActive: false, $modal: null } },
      )
    case SHOW_MODAL:
      return Object.assign({}, state,
        {
          [action.name]: Object.assign({}, state[action.name],
            { $modal: action.$modal, config: action.config, isActive: true })
        }
      )
    default:
      return state
  }
}


export default modals

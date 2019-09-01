import { CLOSE_MODAL, SHOW_MODAL } from './actions'

const initialState = {}

export function modals(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:

      document.body.style.position = 'inherit'
      document.body.style.overflow = 'initial'

      return Object.assign({}, state,
        {
          [action.name]: {
            contentElement: action.config && action.config.keepComponentMounted
              ? state[action.name].contentElement
              : null,
            isActive: false
          }
        },
      )
    case SHOW_MODAL:

      document.body.style.position = 'fixed'
      document.body.style.overflow = 'hidden'

      return Object.assign({}, state,
        {
          [action.name]: Object.assign(
            {},
            state[action.name],
            {
              config: action.config,
              contentElement: action.element,
              isActive: true
            }
          )
        }
      )
    default:
      return state
  }
}


export default modals

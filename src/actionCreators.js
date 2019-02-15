import { CLOSE_MODAL, SHOW_MODAL } from './actions'

export function closeModal(name, config) {
  return { config, name, type: CLOSE_MODAL }
}

export function showModal(name, element, config) {
  return {
    config,
    element,
    name,
    type: SHOW_MODAL,
  }
}

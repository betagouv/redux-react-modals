import { CLOSE_MODAL, SHOW_MODAL } from './actions'

export function closeModal(name) {
  return { name, type: CLOSE_MODAL }
}

export function showModal(name, $modal, config) {
  return {
    $modal,
    config,
    name,
    type: SHOW_MODAL,
  }
}

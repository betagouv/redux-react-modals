import '@babel/polyfill'

import { shallow } from 'enzyme'
import React from 'react'

import Modal from '../Modal'

describe('src | components | Modal', () => {
  describe('snapshot', () => {
    it('it should match snapshot', () => {
      // when
      const wrapper = shallow(<Modal />)

      // then
      expect(wrapper).toBeDefined()
      expect(wrapper).toMatchSnapshot()
    })
  })
})

# redux-react-modals

** EN CONSTRUCTION **
Ce code est du code externalisé du https://github.com/betagouv/pass-culture-shared qui concentre un nombre d'utilités React Redux
utilisé par les applications front du pass culture.
Tant que les tests fonctionnels ne sont pas écrits, cette lib ne peut être considérée en production.

## Basic Usage

You need to add first the modals reducer in your root reducer:

```javascript
import { modals } from 'redux-react-modals'
import { combineReducers } from 'redux'

import data from './data'

const rootReducer = combineReducers({
  ...
  modals,
})

const store = createStore(rootReducer)
```

Then the lib provides a Modal component and some redux actions, like:

```javascript
import React, { Fragment } from 'react'
import { Modal, showModal } from 'redux-react-modals'

class Foo extends Component {

  onShowModalClick = () => {
    const { dispatch } = this.props
    dispatch(showModal('foo', <div> Hello! </div>))
  }

  render () {
    const { query } = this.props
    const { counter } = query.parse()
    return (
      <Fragment>
        <button onClick={this.onShowModalClick} />
          Show Modal
        <button>
        <Modal />
      </Fragment>
    )
  }
}

export default connect()(Foo)
```

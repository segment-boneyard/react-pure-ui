import React, { Component } from 'react'

const PERSISTENCE_PREFIX = 'react-pure-ui'

export default (key, states) => Comp => {
  const persistencekey = `${PERSISTENCE_PREFIX}:${key}`

  class Pure extends Component {
    constructor () {
      super()

      this.handleKeydown = this.handleKeydown.bind(this)

      this.state = {
        activeState: Number(window.localStorage.getItem(persistencekey)) || 0,
        skip: false
      }
    }

    render () {
      const { activeState, skip } = this.state
      const props = skip ? this.props : { ...this.props, ...states[activeState] }
      return React.createElement(Comp, props)
    }

    componentWillMount () {
      document.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount () {
      document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown (e) {
      const { activeState, skip } = this.state

      if (e.code === 'ArrowLeft' && states[activeState - 1]) {
        this.changeActiveState(activeState - 1)
      } else if (e.code === 'ArrowRight' && states[activeState + 1]) {
        this.changeActiveState(activeState + 1)
      } else if (e.code === 'Escape') {
        this.setState({ skip: !skip })
      }
    }

    changeActiveState (activeState) {
      this.setState({ activeState })
      window.localStorage.setItem(persistencekey, activeState)
    }
  }

  Pure.displayName = `Pure(${Comp.displayName})`

  return Pure
}

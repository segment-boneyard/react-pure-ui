import React from 'react'
import { render } from 'react-dom'
import { pure } from 'react-pure-ui'

const Component = (props) => <h1>{props.children} fish</h1>

const states = [
  { children: 'one' },
  { children: 'two' },
  { children: 'red' },
  { children: 'blue' }
]

const PureComponent = pure('unique-key-for-component', states)(Component)

render(<PureComponent />, document.getElementById('root'))

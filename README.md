# react-pure-ui

Development component for connecting stateless components to an array of states

**This should not be used in production**

## Example

``` js
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
```

## Usage

### pure(key, states)(Component)

Connects a stateless component to an array of possible states, allowing keyboard navigation through states with ← and →. Any `props` passed in will be merged with the active state with the latter taking precedence.

### Key commands

- `Left Arrow` – navigate to the previous state
- `Right Arrow` – navigate to the next state
- `Escape` – turn off pure-ui state, passing through props rather than using states.

## License

MIT

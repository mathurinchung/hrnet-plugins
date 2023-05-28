# @hrnet-plugins/react-modal

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [Demo](#demo)


## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save @hrnet-plugins/react-modal
    $ yarn add @hrnet-plugins/react-modal


## Examples

Here is a simple example of react-modal being used in an app:

```jsx
import { useState } from 'react';
import { Modal } from '@hrnet-plugins/react-modal';

export default function App() {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="App">
      <button onClick={ () => setShowModal(true) }>Open Modal</button>

      <Modal id="confirmation" isVisible={ showModal } onClose={ () => setShowModal(false) }>Open!</Modal>
    </div>
  );
}
```

## Demo
Demo CodeSandbox - [https://codesandbox.io/s/hrnet-react-modal-qrsqlk](https://codesandbox.io/s/hrnet-react-modal-qrsqlk)
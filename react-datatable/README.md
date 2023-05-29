# @hrnet-plugins/react-datatable

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [Demo](#demo)


## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save @hrnet-plugins/react-datatable
    $ yarn add @hrnet-plugins/react-datatable


## Examples

Here is a simple example of react-datatable being used in an app:

```jsx
import { DataTable } from '../lib';

function App() {
  const columns = [];
  const data = [];

  return (
    <div className="App">
      <DataTable id="test-table" className="datatable" columns={ columns } data={ data } />
    </div>
  );
}
```

## Demo
Demo CodeSandbox - [https://codesandbox.io/s/hrnet-react-datatable-f2pi2l](https://codesandbox.io/s/hrnet-react-datatable-f2pi2l)
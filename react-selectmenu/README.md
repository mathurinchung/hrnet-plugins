# @hrnet-plugins/react-selectmenu

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [Demo](#demo)


## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save @hrnet-plugins/react-selectmenu
    $ yarn add @hrnet-plugins/react-selectmenu


## Examples

Here is a simple example of react-selectmenu being used in an app:

```jsx
import { SelectMenu } from '@hrnet/react-selectmenu';

function App() {
  const options = [
    { option: "option1", value: "value1" },
    { option: "option2", value: "value2" },
    { option: "option3", value: "value3" }
  ];

  const handleChange = event => {
    console.log(event.target.value);

    const { name, value } = event.currentTarget;
    console.log(name, value);
  };

  return (
    <div className="App">
      <SelectMenu id="select-example" options={ options } onChange={ handleChange } />
    </div>
  );
}
```

## Demo
Demo - [https://codesandbox.io/s/hrnet-react-selectmenu-e5e8ov](https://codesandbox.io/s/hrnet-react-selectmenu-e5e8ov)

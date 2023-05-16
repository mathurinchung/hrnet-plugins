
import { SelectMenu } from '../lib';

function App() {
  const options = [
    { option: "option1", value: "value1" },
    { option: "option2", value: "value2" },
    { option: "option3", value: "value3" }
  ];

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    console.log(name, value);
  };

  return (
    <div className="App">
      <SelectMenu id="select-example" options={ options } onChange={ handleChange } />
    </div>
  );
}

export default App;

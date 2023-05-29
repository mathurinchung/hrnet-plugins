import { DataTable } from '../lib';
import columns from './data/columns.json';

function App() {
  const data = [
    { id: "00", name: "marc" },
    { id: "01", name: "marc" },
  ];

  return (
    <div className="App">
      <DataTable id="test-table" className="datatable" columns={ columns } data={ data } />
    </div>
  );
}

export default App;

import { DataTable } from '../lib';


function App() {
  const columns = [
    { title: "id", data: "id" },
    { title: "name", data: "name" }
  ];

  const data = [
    { id: "471c0b26-fde2-11ed-be56-0242ac120002", name: "avalon" },
    { id: "4e728c2e-fde2-11ed-be56-0242ac120002", name: "anundr" },
    { id: "56751cc0-fde2-11ed-be56-0242ac120002", name: "lorna" },
    { id: "5c245064-fde2-11ed-be56-0242ac120002", name: "muthoni" },
    { id: "655b79a0-fde2-11ed-be56-0242ac120002", name: "orietta" }
  ];

  return (
    <div className="App">
      <DataTable id="test-table" className="datatable" columns={ columns } data={ data } />
    </div>
  );
}

export default App;

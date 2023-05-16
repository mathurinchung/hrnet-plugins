import { useState } from 'react';
import { Modal } from '../lib';

function App() {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="App">
      <button onClick={ () => setShowModal(true) }>Open Modal</button>
      <Modal id="confirmation" isVisible={ showModal } onClose={ () => setShowModal(false) }>Open!</Modal>
    </div>
  );
}

export default App;

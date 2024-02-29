import React, { useState } from 'react';
import Card from './Card';
import './index.css';


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showCard, setShowCard] = useState(false);

  //handler

  const handleSubmit = (e) => {
    e.preventDefault();
  

    //Validaciones

    if (input1.trim().length < 3 || input2.length < 6) {
      alert('Por favor chequea que la información sea correcta');
    } else {
      setShowCard(true);
    }
  

  };


  return (
    <div className="App">
      <h1>Elige un color</h1>
     
     
      <form onSubmit={handleSubmit}>
        {/* Agrega los inputs */}
        
        <div>
          <label>
            Primer Input:
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </label>
        </div>
        
        <div>
          <label>
            Segundo Input:
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </label>
        </div>

        {/* Botón de enviar */}
        <button type="submit">Enviar</button>
      </form>
     
      {/* Renderiza el componente Card */}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;

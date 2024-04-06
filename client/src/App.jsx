import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    // console.log('Name:', name)
  }, [name]);

  useEffect(() => {
    // console.log('Telephone:', telephone)
  }, [telephone]);

  const add = () => {
    Axios.post("http://localhost:3002/create", {
      name: name,
      telephone: telephone
    }).then(() => {
      console.log('Success');
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <div className="app">
        <div className="data">
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Telephone:
            <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
          </label>
          <button onClick={add}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
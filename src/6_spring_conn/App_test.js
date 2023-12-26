import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');

  useEffect(()=>{
    // fetch('http://localhost:8080/hello')
    // .then(response => response.text())
    // .then (message=>{setMessage(message)})
    // > 추후에 fetch() -> axios()
    //axios.get('http://localhost:8080/board')
    axios.get('/api/board')
    .then(result => console.log(result))
    .catch(error => {
      // 서버 응답이 실패한 경우
      console.error('Error fetching data:', error);
    });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          까꿍 {message}

        </p>

      </header>
    </div>
  );
}

export default App;


//axios 패키지 설치 필요
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

function App(){

    
    const [ city, setCity] = useState('');
    const [ desc, setDesc] = useState('');
    const [ temp, setTemp] = useState('');
  

    useEffect(()=>{
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            .then(result => {
                // console.log(result);
                // console.log(result.data.weather[0].main)

                setCity(result.name);
                setDesc(result.weather[0].description);
                setTemp(result.main.temp);
    
            })
            .catch( err => console.log('에러:', err));
    },[]);

    return(
        <div className="App">
            추후에 화면출력
            <div> 도시: {city}</div>
            <div> 날씨: {desc}</div>
            <div> 온도: {temp}</div>
        </div>
    );
}

export default App;

//weather.js

import { useEffect, useState } from 'react';
import '../App.css';

// http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270

function App(){

    const [ city, setCity] = useState('');
    const [ desc, setDesc] = useState('');
    const [ temp, setTemp] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const getData = async() => {
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
        .then( (result) => { return result.json()}) // fetch 로 인한 결과는 json 으로 변경이 필요
        .then( jsonresult => {
            // console.log(jsonresult)
            // console.log(jsonresult.weather[0].main)
            // console.log(jsonresult.main.temp)
            setCity(jsonresult.name);
            setDesc(jsonresult.weather[0].description);
            setTemp(jsonresult.main.temp);

            setIsLoading(true);
        }) //
        .catch( error => console.log('에러:' , error));
    };

    useEffect(()=>{
        getData();
    },[]);

    if(isLoading){
        return(
        
            <div className='App'>
                <p> 도시 : {city}</p>
                <p> 설명 : {desc}</p>
                <p> 온도 : {temp}</p>
            </div>
        );
    }else{
        return(
            <div>로딩중......</div>
        ) 
    }

}

export default App;
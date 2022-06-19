import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data,setData] = useState({ })
    const [location,setLocation] = useState('')

    const url= "https://api.openweathermap.org/data/2.5/weather?q=location&appid=e1b4a16b8d8736d920d81ff508d83533"

    const searchLocation = (event)=>{
        if (event.key === 'Enter') {
        axios.get(url).then((response)=>
        {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
    }
}

    return (
        <div className='app'>
            <div className='search'>
                <input 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                type="text"/>
            </div>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p>{data.name}</p>
                  </div>
                    <div className='temp'>
                        {data.main ? <h1>{data.main.temp}°F</h1> :null}
                        

                    </div>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> :null}
                    </div>
                </div>
                <div className='bottom'>
                    <div className='feels'>
                        {data.main ? <p>{data.main.feels_like}°F</p> :null}
                        <p className='bold'>Feels Like</p>
                    </div>
                    <div className='humidity'>
                        <p className='bold'>20%</p>
                        <p className='bold'>Humidity</p>
                    </div>
                    <div className='wind'>
                        <p className='bold'>12 MPH</p>
                        <p className='bold'>Wind Speed</p>
                    </div>

                </div> 
            </div>

        </div>

    )
}


export default App
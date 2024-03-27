import React, {useEffect, useState} from 'react';
import {API} from "./utils/api";

function App() {

  const [data, setData] = useState<any>(null)

  useEffect( () => {
    API.v1.get('/todo').then( res => {
      setData(res)
    })
  },[])

  return (
    <div className="App">
      {data
          ? <div>{data.data.url}</div>
          : <div>null</div>
      }
    </div>
  );
}

export default App;

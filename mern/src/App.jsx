import {useState,useEffect}from 'react';
import Header from './components/header';
import About from './components/about';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    setData(content);
  },[]);

  if(!data){
    return <div className='text-center mt-10'>Loading...</div>

    return(
      <div className="font-sans">
        <Header data={data.header}/>
        <About data={data.about}/>
      </div>
    );
  };
}

export default App;
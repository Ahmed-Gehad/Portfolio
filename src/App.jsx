import React, { useEffect, useState } from 'react';
import './App.css';

import Navv from './Component/Navv';
import Landing from './Component/Landing';
import About from './Component/About';
import Experience from './Component/Experience';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { ScaleLoader } from 'react-spinners';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); // الإضافة هنا تجعل الـ useEffect يُنفذ مرة واحدة فقط
  

  return (
    <div className="App">
      {
        loading ?
          <div className='text-center  align-items-center' style={{alignContent: 'center', justifyContent: 'center', height: '100vh'}}>
            <ScaleLoader
             color={'#ff511a'}
              loading={loading}
              margin={3}
              radius={10}
              speedMultiplier={1}
              width={10} 
              /> 
          </div>
           :
           <div>
            <Navv />
           <Landing />
           <About />
           <Experience />
           <Projects />
           <Contact />
           <Footer />
           </div>
      }
     
    </div>
  );
}

export default App;

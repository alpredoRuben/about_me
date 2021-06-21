/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ReactGA from 'react-ga';
import personal from './data';

import {
  Header,
  Footer,
  About,
  //Resume,
  Services,
  //Contact,
  Portofolio,
} from './components'

const data = {
  foo: 'bar',
  resumeData: personal
};

function App() {
  ReactGA.initialize('UA-110570651-1');
  ReactGA.pageview(window.location.pathname);
  
  return (
    <div className="App">
      <Header data={data.resumeData.main}/>
      <About data={data.resumeData.main}/>
      <Portofolio data={data.resumeData.portfolio}/>
      <Services />
      <Footer data={data.resumeData.main}/>
    </div>
  )
}

export default App;
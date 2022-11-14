import React, { useState, useEffect } from 'react';
import './App.scss';
import '../Shared/Shared.scss';
import Nav from '../Navi/Navi';
import Hero from '../Hero/Hero';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => { getData(); }, []);

  const getData = () => {
    const url = 'projects.json';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => (response.json()))
    .then((responseBody) => (setData(responseBody)))
    .catch(console.error);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav color="light" fixed="top" expand="md"/>
        <Hero/>
        <Bio/>
        <Projects projects={data}/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;

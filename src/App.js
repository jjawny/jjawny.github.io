import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import HeaderNav from './HeaderNav';
import Bio from './Bio';
import Accessability from './Accessability';
import Slide from './Slide';


function App() {

  /**
   * {{{{{ GET PROJECT DATA (JSON) }}}}}
   * @author johnnymadigan
   * @brief Fetch API method to consume external JSON data.
   * 
   * This data is a local repo file that comprises of project info from 
   * pure strings for descriptions etc, to file paths for images.
   * 
   * This method will be called as a side-effect to each time the DOM
   * is re-rendered using the 'useEffect' hook.
   * 
   * The 'useState' hook will store this data and render it to the DOM
   * within components.
   * 
   * NESTED FUNCTION in order to be within the same
   * scope as the React hooks (useState, useEffect, etc)
   */

  /* {{{{{ USESTATE HOOK }}}}}
  For storing/updating project JSON data for components to use.
  The data will be passed into Home & Project page components for use.
  [current state (data), function to update state (assign updated data)] */
  const [data, setData] = useState([]); // default is empty array
  
   const getData = () => {
    fetch('projects.json', {
      headers: {
        /* headers to let client know that we
        are accessing JSON from a server */
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    /* promise to show fetch RESPONSE */
    .then((response) => (response.json()))
    /* promise to update STATE with the new data */
    .then((myJSON) => (setData(myJSON)));
  }

  

  /* {{{{{ USEEFFECT HOOK }}}}}
  For side-effects (fetching is a side-effect). 
  Hook's purpose is to execute side-effect code upon every render,
  allowing us to fetch the most up-to-date data from our JSON */

  /* perform once upon first render */
  useEffect(() => {
    console.log("Hook used ∴ most up-to-date JSON has been retrieved");
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav color="light" fixed="top" expand="md"/>
        <Hero/>
        <Bio/>
        <Slide data={data}/>
        <Accessability/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Header from './LandingPage/Components/Header';
import Hero from './LandingPage/Components/Hero';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sections from './LandingPage/Components/Sections';
import FAQSection from './LandingPage/Components/FAQSection';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <Hero/>
               <Sections/>
               <FAQSection/>
            </React.Fragment>
          }/>
         
      
        </Routes>
      </Router>
    </React.Fragment>
  //   <Router>
  //   <div className="App">
  //     <Routes>
  //     <Route path="/login" element={
  //           <React.Fragment>
  //             <Login/>
  //           </React.Fragment>
  //         }/>
  //     </Routes>
  //   </div>
  // </Router>
    // <div className="App">
    // <Header/>
    // <Hero/>
    // <SectionOne/>
    // <SectionTwo/>
    // <SectionThree/>
    // <SectionFour/> 
    // <FAQSection/>
    // <Footer/>
    // </div>
  );
}

export default App;

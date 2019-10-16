import React from 'react';
import logo from './logo.svg';
import './App.css';


let post = [
  {
    content: 'President Donald J. Trump in his unmatched wisdom withdraws forces from Syria so that he can pimp them out to Saudia Arabia',
    title: 'Armed Forces for Rent',
    author: 'By Christian Grewell', 
  }, 
  {
    content: 'After controversial comments from the Daryl Morey, General Manager of the Houston Rockets the Chinese government has made the decision to prohibit the streaming of games in the mainland',
    title: 'NBA Games Banned In China',
    author: 'By Oliver Steele', 
  },
  {
    content: 'I just needed a third story, nothing more, nothing less.',
    title: 'Much A Do About Nothing',
    author: 'By Every College Student Ever', 
  }

];

function App() {
  return (
    <div>
      <div className="page">
        <div className="titleHeader">
          <div className="headerContent">
            <div className="date"><p>Wednesday, October 16, 2019</p></div>
            <div className="theTitle"><h1>The Failing New York Times</h1></div>
            <div className="paper"><a href="">Today's Paper</a></div>
          </div>
          <div className="tabs">
              <a href="">World</a>
              <a href="">World</a>
              <a href="">World</a>
              <a href="">World</a>
              
          </div>
        </div>
        <div className="articleCard">
          <div className="articleDate"><h3>Oct. 16, 2019</h3></div>
          <div className="articleContent">
            <div className="story">
              <h2></h2>
              <p></p>
            </div>
            <div className="author">
              <h3> </h3>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}


export default App;

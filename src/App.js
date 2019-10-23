import React from 'react';
import logo from './logo.svg';
import './App.css';


let post = [
  {
    content: 'President Donald J. Trump in his unmatched wisdom withdraws forces from Syria so that he can pimp them out to Saudia Arabia',
    title: 'Armed Forces for Rent',
    author: 'By Christian Grewell', 
    date: "Oct. 15, 2019",
  }, 
  {
    content: 'After controversial comments from the Daryl Morey, General Manager of the Houston Rockets, the Chinese government has made the decision to prohibit the streaming of games in the mainland',
    title: 'NBA Games Banned In China',
    author: 'By Oliver Steele',
    date: "Oct. 15, 2019", 
  },
  {
    content: 'I just needed a third story, nothing more, nothing less.',
    title: 'Much A Do About Nothing',
    author: 'By Every College Student Ever', 
    date: "Oct. 15, 2019",
  }

];

let buttons = ["World", "U.S.", "N.Y.", "Business", "Opinion", "Tech", "Science", "Health", "Sports", "Arts", "Books", "Style", "Food", "Travel", "Magazine", "T Magazine", "Real Estate", "Video"];

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
            {buttons.map(item => <a href="">{item}</a>)}
              
          </div>
        </div>
        {post.map(item => (<Article title = {item.title} content={item.content} author={item.author} date = {item.date}/>))}

      </div>
      
    </div>
  );
}

function Article(props){
  return(
    <div className="articleCard">
          <div className="articleDate"><h3>{props.date}</h3></div>
          <div className="articleContent">
            <div className="story">
              <h2>{props.title}</h2>
              <p>{props.content}</p>
            </div>
            <div className="author">
              <h3>{props.author}</h3>
            </div>
          </div>
        </div>
  );
}


export default App;

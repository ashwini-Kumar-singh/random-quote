import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(()=>{
    
  },[])

  const getQuote= ()=>{
    fetch('https://api.quotable.io/random')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setQuoteInfo({
        text:data.content,
        author:data.author,
      })
      console.log(data);
    })
  }
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div id="quote-box" style={{textAlign: 'center'}}>
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text' + quoteInfo.text} id="tweet-quote">Post to Tweeter</a>
      </div>
    </div>
  );
}

export default App;

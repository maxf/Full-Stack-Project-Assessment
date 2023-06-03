import "./App.css";
import React, { useState } from "react";

const videoData = [
  {
    "id": 523523,
    "title": "Never Gonna Give You Up",
    "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "rating": 23
  },
  {
    "id": 523427,
    "title": "The Coding Train",
    "url": "https://www.youtube.com/embed/HerCR8bw_GE",
    "rating": 230
  },
  {
    "id": 82653,
    "title": "Mac & Cheese | Basics with Babish",
    "url": "https://www.youtube.com/embed/FUeyrEN14Rk",
    "rating": 2111
  },
  {
    "id": 858566,
    "title": "Videos for Cats to Watch - 8 Hour Bird Bonanza",
    "url": "https://www.youtube.com/embed/xbs7FT7dXYc",
    "rating": 11
  },
  {
    "id": 453538,
    "title": "The Complete London 2012 Opening Ceremony | London 2012 Olympic Games",
    "url": "https://www.youtube.com/embed/4As0e4de-rI",
    "rating": 3211
  },
  {
    "id": 283634,
    "title": "Learn Unity - Beginner's Game Development Course",
    "url": "https://www.youtube.com/embed/gB1F9G0JXOo",
    "rating": 211
  },
  {
    "id": 562824,
    "title": "Cracking Enigma in 2021 - Computerphile",
    "url": "https://www.youtube.com/embed/RzWB5jL5RX0",
    "rating": 111
  },
  {
    "id": 442452,
    "title": "Coding Adventure: Chess AI",
    "url": "https://www.youtube.com/embed/U4ogK0MIzqk",
    "rating": 671
  },
  {
    "id": 536363,
    "title": "Coding Adventure: Ant and Slime Simulations",
    "url": "https://www.youtube.com/embed/X-iSQQgOd1A",
    "rating": 76
  },
  {
    "id": 323445,
    "title": "Why the Tour de France is so brutal",
    "url": "https://www.youtube.com/embed/ZacOS8NBK6U",
    "rating": 73
  }
]


const YouTubeEmbed = ({ embedUrl, title }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};


const Video = ({ id, embedUrl, title, rating }) => {
  const [visible, setVisible] = useState(true);
  const [votes, setVotes] = useState(rating);

  const increase = () => setVotes(votes => votes+1);
  const decrease = () => setVotes(votes => votes-1);

  const hide = function() {
    setVisible(visible => !visible);
  };

  if (visible) {
    return (
      <div>
        <h2>{title}</h2>
        <h3>{votes} votes</h3>
        <YouTubeEmbed embedUrl={embedUrl} title={title}/>
        <br/>
        <button onClick={hide}>Remove</button>
        <button onClick={increase}>Up vote</button>
        <button onClick={decrease}>Down vote</button>
      </div>
    );
  } else {
    return (<div></div>);
  }
};


const AddVideo = function() {
  return (
    <div>
    </div>
  );
}

function App() {
  const [videos, setVideos] = useState(videoData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
        {videos.map(vid => <Video id={vid.id} embedUrl={vid.url} title={vid.title} rating={vid.rating}/>)}
      </header>
      <AddVideo/>
    </div>
  );
}

export default App;

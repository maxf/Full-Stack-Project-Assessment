import "./App.css";
import React, { useState } from "react";
import videoData from "./videos.json";


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


const Video = ({ id, title, embedUrl, upVoteFn, downVoteFn, rating }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{rating} votes</h3>
      <YouTubeEmbed embedUrl={embedUrl} title={title}/>
      <br/>
      <button onClick={upVoteFn}>Up vote</button>
      <button onClick={downVoteFn}>Down vote</button>
    </div>
  );
};


function App() {
  const [ videos, setVideos ] = useState(videoData);
  const upvote = function(id) {
    return function() {
      setVideos(videos => videos.map(video => {
        return {
          id: video.id,
          title: video.title,
          url: video.url,
          rating: video.id === id ? video.rating + 1 : video.rating
        };
      }));
    };
  };
  const downvote = function(event) {
  };
  return (
    <div className="App">
      <h1>Video Recommendation</h1>
      {videoData.map(vid =>
        <Video
          key={vid.id}
          id={vid.id}
          embedUrl={vid.url}
          upVoteFn={upvote(vid.id)}
          downVoteFn={downvote(vid.id)}
          rating={vid.rating}
        />
      )}
    </div>
  );
}

export default App;

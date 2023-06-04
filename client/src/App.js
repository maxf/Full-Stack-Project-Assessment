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


function AddVideo({addFn}) {
  const add = function() {
    addFn(
      document.getElementById("url").value,
      document.getElementById("title").value
    );
  };
  return (
    <div>
      <input id="title" name="title" value="blah"/>
      <input id="url" name="url" value="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
      <button onClick={add}>Add</button>
   </div>
  );
}

function App() {
  const [ videos, setVideos ] = useState(videoData);
  const changeVote = function(id, increment) {
    return function() {
      setVideos(videos => videos.map(video => {
        return {
          id: video.id,
          title: video.title,
          url: video.url,
          rating: video.id === id ?
            Math.max(video.rating + increment, 0) :
            video.rating
        };
      }));
    };
  };

  const addVideo = function(url, title) {
    setVideos(videos => {
      const vids = JSON.parse(JSON.stringify(videos));
      const newId = Math.max(...videos.map(vid => vid.id)) + 1;
      const newVid = { id: newId, title, url, rating:0 };
      vids.unshift(newVid);
      return vids;
    })
  };

  return (
    <div className="App">
      <h1>Video Recommendation</h1>
      <AddVideo addFn={addVideo}/>
      {videos.map(vid =>
        <Video
          key={vid.id}
          id={vid.id}
          title={vid.title}
          embedUrl={vid.url}
          upVoteFn={changeVote(vid.id, 1)}
          downVoteFn={changeVote(vid.id, -1)}
          rating={vid.rating}
        />
     )}
    </div>
  );
}

export default App;

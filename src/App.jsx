//this tells the jsx file we will be using the useState react hook
import { useState } from "react";
// this imports the episodeList array of objects from data.js
import { episodeList } from "./data";

//everything nested in this function will be what is pushed to app in main.jsx
export default function App() {
  // these are your declared states, but in react we are using this "hook" to declare the variables and automatically update
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  //PascalCase for all declared functions in JSX!
  //this function returns the list of episodes, using a map function to take the data from episodes. the adds a listener that on the click, setSelectedEpisode will be triggered, and displayed on the list item is the {episode.title}
  //classes in jsx must be called className instead of class
  //Id declaration is still the same
  function EpisodeList() {
    return (
      <section>
        <h2>Episodes</h2>
        <ul className="episode-list">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className="episode-item"
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  //this is declaring another jsx function, and the first if statement is just if an episode has not been selected then display this text
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="episode-details">
          <p>Please select an episode to view details.</p>
        </section>
      );
    }

    //this is the "else" of that function. once an episode is selected on the click, we display the title, the episode ID, and then the episode description
    return (
      <section className="episode-details">
        <h2>{selectedEpisode.title}</h2>
        <p>
          <strong>Episode {selectedEpisode.id}</strong>
        </p>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  //this is what will truly be displayed. similar to the render functions we wrote in DOM
  return (
    <main className="app">
      <h1>Mystery Series Episodes</h1>
      {/*comments inside children must have braces! but this comment was here to say HTML tags in JSX can be written as self closing when they don't have content or children inside them*/}
      <EpisodeList />
      <EpisodeDetails />
    </main>
  );
}
